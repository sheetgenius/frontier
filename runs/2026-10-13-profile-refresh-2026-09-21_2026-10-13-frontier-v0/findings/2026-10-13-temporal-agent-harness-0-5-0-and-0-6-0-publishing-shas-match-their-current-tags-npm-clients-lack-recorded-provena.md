---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-temporal-agent-harness-0-5-0-and-0-6-0-publishing-shas-match-their-current-tags-npm-clients-lack-recorded-provena
source: temporal-agent-harness
source_contract: sources/temporal-agent-harness.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/temporal-community/temporal-agent-harness/actions/runs/36782833724
    precision: official_docs
  - url: https://github.com/temporal-community/temporal-agent-harness/actions/runs/37083572183
    precision: official_docs
  - url: https://github.com/temporal-community/temporal-agent-harness/actions/runs/34573129350
    precision: official_docs
  - url: https://github.com/temporal-community/temporal-agent-harness/actions/runs/35037180376
    precision: official_docs
  - url: https://api.github.com/repos/temporal-community/temporal-agent-harness/environments/pypi
    precision: official_docs
  - url: https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/.github/workflows/publish.yml#L13-L34
    precision: tagged_commit_file
  - url: https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/.github/workflows/publish.yml#L56-L71
    precision: tagged_commit_file
  - url: https://github.com/temporal-community/temporal-agent-harness/pull/158
    precision: merged_pr
  - url: https://github.com/temporal-community/temporal-agent-harness/blob/faec13de3ee346597f179ee8cb9c8e474beeb03b/packages/client/package.json
    precision: tagged_commit_file
  - url: https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/.github/workflows/publish-npm.yml#L79-L81
    precision: tagged_commit_file
  - url: https://www.npmjs.com/package/@temporalio/agent-harness-client/v/0.1.0
    precision: package_registry
  - url: https://pypi.org/pypi/temporal-agent-harness/0.5.0/json
    precision: package_registry
  - url: https://pypi.org/pypi/temporal-agent-harness/0.6.0/json
    precision: package_registry
  - url: https://github.com/temporal-community/temporal-agent-harness/releases/tag/0.6.0
    precision: github_release
  - url: https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/README.md#L195-L214
    precision: tagged_commit_file
  - url: https://registry.npmjs.org/@temporalio%2fagent-harness-client/0.1.0
    precision: official_docs
  - url: https://registry.npmjs.org/@temporalio%2fagent-harness-react/0.1.0
    precision: official_docs
  - url: https://registry.npmjs.org/@temporalio%2fagent-harness-svelte/0.1.0
    precision: official_docs
---
# 2026-10-13-temporal-agent-harness-0-5-0-and-0-6-0-publishing-shas-match-their-current-tags-npm-clients-lack-recorded-provena

0.5.0 and 0.6.0 publishing SHAs match their current tags; npm clients lack recorded provenance. The successful release-event publishing runs for 0.5.0 and 0.6.0 built the commits their tags currently name and passed the version check. Every packaged file matches the release commit; four source-tree support/documentation files are omitted: ai_sdks/google_genai_plugin/justfile, ai_sdks/openai_agents/README.md, harness/stream_merge/README.md and nexus_agent_adapter/agent.nexusrpc.yaml. Each wheel contains 100 files under temporal_agent_harness/; no runtime failure from the omissions was established. This is current tag/run equality, not proof neither tag ever moved. As of the cutoff, 0.6.0 is the newest compatible PyPI version, uploaded 3 October, with Python >=3.11, Pre-Alpha metadata and temporalio>=1.31.0 plus pydantic>=2.0. Both releases are GitHub prereleases and /releases/latest returns 404. Current pypi environment metadata has one reviewer, self-review and admin bypass permitted; the release author approved both new uploads and four cited earlier events. That corrects the prior no-reviewer claim without proving uninterrupted historical configuration. The version check is release-event-only. Three typed TypeScript client packages, @temporalio/agent-harness-client, -react and -svelte, were manually published as 0.1.0 on 30 September; each has latest=0.1.0. No recorded attestation, npm release tag or publish-workflow run was found. The published manifests differ from the recorded gitHead; build-to-source equivalence was not verified.

Channel: preview-or-beta (tags and PyPI wheels); npm dist-tag latest = 0.1.0. Half: both. Date: 2026-09-30.

Operator consequence: For the dated posture, pin temporal-agent-harness[ui]==0.6.0 (or the extras actually needed); examples are checkout-only. The current T5/T6 tag and wheel checks support packaged-file equivalence, so the old 0.4.0 SHA workaround is not the install recommendation. Treat the npm clients as unattested: pin 0.1.0 and preserve integrity hashes, or build a separately verified source checkout. Successful CI and a one-reviewer environment are not a support or runtime guarantee. Watch for npm provenance and a version check on manual dispatch.

## Receipt
- https://github.com/temporal-community/temporal-agent-harness/actions/runs/36782833724
- https://github.com/temporal-community/temporal-agent-harness/actions/runs/37083572183
- https://github.com/temporal-community/temporal-agent-harness/actions/runs/34573129350
- https://github.com/temporal-community/temporal-agent-harness/actions/runs/35037180376
- https://api.github.com/repos/temporal-community/temporal-agent-harness/environments/pypi
- https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/.github/workflows/publish.yml#L13-L34
- https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/.github/workflows/publish.yml#L56-L71
- https://github.com/temporal-community/temporal-agent-harness/pull/158
- https://github.com/temporal-community/temporal-agent-harness/blob/faec13de3ee346597f179ee8cb9c8e474beeb03b/packages/client/package.json
- https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/.github/workflows/publish-npm.yml#L79-L81
- https://www.npmjs.com/package/@temporalio/agent-harness-client/v/0.1.0
- https://pypi.org/pypi/temporal-agent-harness/0.5.0/json
- https://pypi.org/pypi/temporal-agent-harness/0.6.0/json
- https://github.com/temporal-community/temporal-agent-harness/releases/tag/0.6.0
- https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/README.md#L195-L214
- https://registry.npmjs.org/@temporalio%2fagent-harness-client/0.1.0
- https://registry.npmjs.org/@temporalio%2fagent-harness-react/0.1.0
- https://registry.npmjs.org/@temporalio%2fagent-harness-svelte/0.1.0
