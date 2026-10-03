import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import yaml from 'js-yaml';

const workflowPath = '.github/workflows/deploy-pages.yml';
const workflowText = readFileSync(workflowPath, 'utf8');
const workflow = yaml.load(workflowText);

describe('GitHub Pages workflow', () => {
  it('uses immutable action commits', () => {
    const uses = [...workflowText.matchAll(/\buses:\s+([^\s#]+)/g)].map((match) => match[1]);
    assert.ok(uses.length >= 5);
    for (const action of uses) {
      assert.match(action, /^[\w.-]+\/[\w.-]+@[0-9a-f]{40}$/);
    }
  });

  it('reads the upstream lock and validates both deployment bases', () => {
    assert.match(workflowText, /upstream-lock\.json/);
    assert.match(workflowText, /npm run test:smoke/);
    assert.match(workflowText, /npm run check:public-history/);
    assert.equal(
      workflow.jobs.validate.steps.find((step) => step.name === 'Run dual-base development smoke gates').env
        .DEV_SMOKE_STARTUP_TIMEOUT_MS,
      1200000,
    );
    assert.match(workflowText, /SITE_BASE: \/\$\{\{ github\.event\.repository\.name \}\}\//);
    assert.match(workflowText, /npm run check:public-release/);
  });

  it('limits Pages permissions and deployment to the deploy job', () => {
    assert.deepEqual(workflow.permissions, { contents: 'read' });
    assert.deepEqual(workflow.jobs.deploy.permissions, { pages: 'write', 'id-token': 'write' });
    assert.equal(workflow.jobs.validate.permissions, undefined);
    assert.match(workflow.jobs.deploy.if, /refs\/heads\/main/);
  });
});
