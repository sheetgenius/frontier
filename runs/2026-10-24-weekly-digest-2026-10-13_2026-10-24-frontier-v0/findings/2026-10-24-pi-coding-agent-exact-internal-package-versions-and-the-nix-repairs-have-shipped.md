---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-pi-coding-agent-exact-internal-package-versions-and-the-nix-repairs-have-shipped
source: pi-coding-agent
source_contract: sources/pi-coding-agent.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/earendil-works/pi/commit/f13c00fb3a4d77ad3faa815057e31d614d42b3f1
    precision: commit
  - url: https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/package.json
    precision: tagged_commit_file
  - url: https://github.com/earendil-works/pi/commit/d05a73fb31ea1c55c861115306df8f358a120de1
    precision: commit
  - url: https://github.com/earendil-works/pi/actions/runs/39686887389
    precision: official_docs
  - url: https://github.com/earendil-works/pi/releases/tag/v1.4.0
    precision: github_release
  - url: https://registry.npmjs.org/@earendil-works%2fpi-coding-agent
    precision: official_docs
  - url: https://pi.dev/api/installer/releases/latest
    precision: official_docs
  - url: https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/docs/quickstart.md
    precision: tagged_commit_file
---
# 2026-10-24-pi-coding-agent-exact-internal-package-versions-and-the-nix-repairs-have-shipped

Exact internal package versions and the Nix repairs have shipped. Fresh npm installs no longer resolve incompatible versions of Pi's own packages through permissive internal ranges. Nix no longer expects removed chord/esbuild dependencies, refreshes an incompatible model-catalog pin before release, and puts its Node on PATH as a fallback instead of overriding the operator's shell Node. These are shipped answers to the previous harvest's main-only leads. At the UTC reads in Install today, GitHub newest stable, npm latest, the managed installer selector and Nix stable all select 1.4.0; Node >=22.19.0 is required for the documented install route. Nix stable points to the successfully built 1.4.0 tag.

Channel: tagged-release. Half: both. Date: 2026-10-15.

Operator consequence: Move a reproducible deployment to 1.4.0 and record the actual dependency graph. The Nix availability blocker is resolved, and shell tools can use the operator's Node again. Keep the distinction between exact internal versions and a fully locked installation: the former removes one source of drift, not all of them. Human attention can move from reconstructing mixed Pi versions to testing extensions and provider behavior.

## Receipt
- https://github.com/earendil-works/pi/commit/f13c00fb3a4d77ad3faa815057e31d614d42b3f1
- https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/package.json
- https://github.com/earendil-works/pi/commit/d05a73fb31ea1c55c861115306df8f358a120de1
- https://github.com/earendil-works/pi/actions/runs/39686887389
- https://github.com/earendil-works/pi/releases/tag/v1.4.0
- https://registry.npmjs.org/@earendil-works%2fpi-coding-agent
- https://pi.dev/api/installer/releases/latest
- https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/docs/quickstart.md
