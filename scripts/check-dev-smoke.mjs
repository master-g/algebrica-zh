#!/usr/bin/env node
import { once } from 'node:events';
import { spawn } from 'node:child_process';
import { createServer } from 'node:net';
import { fileURLToPath } from 'node:url';
import { normalizeSiteBase, withSiteBase } from '../src/lib/site-path.mjs';

const HOST = '127.0.0.1';
const STARTUP_TIMEOUT_MS = readPositiveInteger('DEV_SMOKE_STARTUP_TIMEOUT_MS', 180_000);
const REQUEST_TIMEOUT_MS = 30_000;
const LOG_LIMIT = 32 * 1024;
const ROOT = fileURLToPath(new URL('..', import.meta.url));
const ASTRO_CLI = fileURLToPath(new URL('../node_modules/astro/bin/astro.mjs', import.meta.url));

function readPositiveInteger(name, fallback) {
  const raw = process.env[name];
  if (!raw) return fallback;
  const value = Number(raw);
  if (!Number.isSafeInteger(value) || value <= 0) {
    throw new Error(`${name} must be a positive integer, received: ${raw}`);
  }
  return value;
}

async function reservePort() {
  const server = createServer();
  server.unref();
  server.listen(0, HOST);
  await once(server, 'listening');
  const address = server.address();
  const port = typeof address === 'object' && address ? address.port : null;
  await new Promise((resolve, reject) => server.close((error) => (error ? reject(error) : resolve())));
  if (!port) throw new Error('Unable to reserve a local port for the Astro smoke test.');
  return port;
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function waitForExit(child, timeoutMs) {
  if (child.exitCode !== null || child.signalCode !== null) return true;
  let timeout;
  const timedOut = Symbol('timed-out');
  const result = await Promise.race([
    once(child, 'exit'),
    new Promise((resolve) => {
      timeout = setTimeout(() => resolve(timedOut), timeoutMs);
    }),
  ]);
  clearTimeout(timeout);
  return result !== timedOut;
}

async function stopServer(child) {
  if (child.exitCode !== null || child.signalCode !== null) return;
  child.kill('SIGTERM');
  if (!(await waitForExit(child, 5_000))) {
    child.kill('SIGKILL');
    await waitForExit(child, 5_000);
  }
}

async function requestPage(baseUrl, path) {
  const response = await fetch(new URL(path, baseUrl), {
    signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
  });
  const body = await response.text();
  if (response.status !== 200) {
    throw new Error(`${path} returned HTTP ${response.status} (${Buffer.byteLength(body)} bytes).`);
  }
  return body;
}

async function runScenario(siteBase) {
  const port = await reservePort();
  const baseUrl = `http://${HOST}:${port}`;
  const child = spawn(
    process.execPath,
    [ASTRO_CLI, 'dev', '--host', HOST, '--port', String(port)],
    {
      cwd: ROOT,
      env: { ...process.env, ASTRO_DEV_BACKGROUND: '1', SITE_BASE: siteBase },
      stdio: ['ignore', 'pipe', 'pipe'],
    },
  );

  let logs = '';
  let ready = false;
  let resolveReady;
  let rejectReady;
  const readyPromise = new Promise((resolve, reject) => {
    resolveReady = resolve;
    rejectReady = reject;
  });

  const collect = (chunk) => {
    logs = `${logs}${chunk}`.slice(-LOG_LIMIT);
    if (!ready && /watching for file changes/i.test(logs)) {
      ready = true;
      resolveReady();
    }
  };
  child.stdout.on('data', collect);
  child.stderr.on('data', collect);
  child.once('error', (error) => rejectReady(error));
  child.once('exit', (code, signal) => {
    if (!ready) {
      rejectReady(new Error(`Astro exited before becoming ready (code=${code}, signal=${signal}).`));
    }
  });

  try {
    let startupTimeout;
    try {
      await Promise.race([
        readyPromise,
        new Promise((_, reject) => {
          startupTimeout = setTimeout(
            () => reject(new Error(`Astro did not become ready within ${STARTUP_TIMEOUT_MS}ms.`)),
            STARTUP_TIMEOUT_MS,
          );
        }),
      ]);
    } finally {
      clearTimeout(startupTimeout);
    }

    const checks = [];
    for (const path of ['/', '/sets/', '/category/sets-and-numbers/', '/search.json']) {
      const requestPath = withSiteBase(path, siteBase);
      const body = await requestPage(baseUrl, requestPath);
      checks.push(`${requestPath} HTTP 200 (${Buffer.byteLength(body)} bytes)`);
      if (path === '/') {
        const expectedArticle = withSiteBase('/sets/', siteBase);
        const expectedSearch = withSiteBase('/search.json', siteBase);
        if (!body.includes(`href="${expectedArticle}"`)) {
          throw new Error(`${requestPath} is missing the prefixed article link ${expectedArticle}`);
        }
        if (!body.includes(`data-search-url="${expectedSearch}"`)) {
          throw new Error(`${requestPath} is missing the prefixed search index ${expectedSearch}`);
        }
      }
    }

    await delay(250);
    if (child.exitCode !== null || child.signalCode !== null) {
      throw new Error(
        `Astro exited after serving the smoke requests (code=${child.exitCode}, signal=${child.signalCode}).`,
      );
    }

    console.log(`Astro development smoke gate passed for ${siteBase}: ${checks.join('; ')}`);
  } catch (error) {
    const detail = error instanceof Error ? error.stack || error.message : String(error);
    throw new Error(`${detail}\n\nLast Astro output:\n${logs || '(no output)'}`);
  } finally {
    await stopServer(child);
  }
}

async function main() {
  for (const siteBase of ['/', '/algebrica-zh/'].map(normalizeSiteBase)) {
    await runScenario(siteBase);
  }
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
