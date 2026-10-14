---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-pi-coding-agent-standalone-binaries-loaded-the-launch-directory-s-env-into-pi-s-own-environment-until-1-1
source: pi-coding-agent
source_contract: sources/pi-coding-agent.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/earendil-works/pi/issues/10473
    precision: official_docs
  - url: https://github.com/earendil-works/pi/commit/1ffb6bd621c29d7c8e38bb3b3c1cdcbda6b6ea90
    precision: commit
  - url: https://github.com/earendil-works/pi/releases/tag/v1.1.0
    precision: github_release
  - url: https://github.com/earendil-works/pi/blob/v1.0.4/packages/coding-agent/src/config.ts#L605-L611
    precision: tagged_commit_file
  - url: https://github.com/earendil-works/pi/blob/v1.0.4/packages/coding-agent/src/core/extensions/loader.ts#L853-L854
    precision: tagged_commit_file
  - url: https://github.com/earendil-works/pi/blob/v1.0.4/packages/coding-agent/src/core/resource-loader.ts#L501-L520
    precision: tagged_commit_file
---
# 2026-10-13-pi-coding-agent-standalone-binaries-loaded-the-launch-directory-s-env-into-pi-s-own-environment-until-1-1

Standalone binaries loaded the launch directory's `.env` into Pi's own environment until 1.1.0, with no advisory. The fix commit says "Bun compiled executables load cwd .env files into process.env by default." The reporter demonstrated the defect in 1.0.2. The sampled earlier build recipes also leave Bun dotenv autoload enabled; 1.1.0 disables it. Those historical binary assets were not executed; recipe samples do not prove every asset or environment-specific dotenv selection. The reporter showed two effects: a repo `.env` redirecting `PI_CODING_AGENT_DIR`, and a `SOME_SECRET` from `.env` reaching the provider through `printenv` in the bash tool. Our reading of the code goes one step further. User-level extensions load from `<agentDir>/extensions` (loader.ts L853-L854), and the agent directory is taken from `PI_CODING_AGENT_DIR` (config.ts L605-L611). User-level extensions load before project trust and can answer the `project_trust` event. Source-derived, not reproduced: a checkout with `PI_CODING_AGENT_DIR=./x` in its `.env` could supply code that runs as your own extension before any prompt (resource-loader.ts L501-L520 at v1.0.4). June's GHSA-mqxh-6gq7-558m ("Pi loads project-local extensions without approval", medium) covered this class of problem. This instance got a bug label and no advisory. This Bun-compiled behavior does not apply to ordinary Node-based npm/managed installs or the Node-based Nix package.

Channel: tagged-release. Half: defect. Date: 2026-10-07.

Operator consequence: If you run the downloaded `pi` binaries, replace anything older than 1.1.0. Then audit sessions started inside checkouts you did not write that contain a `.env`: the checkout's variables could have become Pi's variables before trust. On fleets, check `pi --version` on the binary rather than trusting the install method. An advisory feed would not have flagged this.

## Receipt
- https://github.com/earendil-works/pi/issues/10473
- https://github.com/earendil-works/pi/commit/1ffb6bd621c29d7c8e38bb3b3c1cdcbda6b6ea90
- https://github.com/earendil-works/pi/releases/tag/v1.1.0
- https://github.com/earendil-works/pi/blob/v1.0.4/packages/coding-agent/src/config.ts#L605-L611
- https://github.com/earendil-works/pi/blob/v1.0.4/packages/coding-agent/src/core/extensions/loader.ts#L853-L854
- https://github.com/earendil-works/pi/blob/v1.0.4/packages/coding-agent/src/core/resource-loader.ts#L501-L520
