import { verifyUpstreamSource } from '../src/lib/upstream-source.mjs';

try {
  const result = verifyUpstreamSource();
  console.log(`Upstream source gate passed: ${result.repository}@${result.commit}`);
  console.log(`Upstream directory: ${result.sourceDir}`);
} catch (error) {
  console.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
}
