---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-hermes-agent-correction-pypi-and-homebrew-distribution-ended-in-july-pip-install-hermes-agent-still-ins
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/NousResearch/hermes-agent/commit/d84e11af4d9927c41ad0a3b4db72042cca250c64
    precision: commit
  - url: https://pypi.org/pypi/hermes-agent/0.19.0/json
    precision: package_registry
  - url: https://github.com/NousResearch/hermes-agent/blob/v0.21.7/website/docs/getting-started/installation.md#L1-L5
    precision: tagged_commit_file
---
# 2026-10-13-hermes-agent-correction-pypi-and-homebrew-distribution-ended-in-july-pip-install-hermes-agent-still-ins

Correction: PyPI and Homebrew distribution ended in July; `pip install hermes-agent` still installs 0.19.0. Nothing in this window; the profile still carried PyPI distribution, from v0.14.0, as an active claim. v2026.7.30 removed the PyPI publish workflow, the Homebrew formula, the pip self-update path and PyPI update checks, and the ACP Registry manifest, and setup.py now refuses wheel and sdist builds outside a sealed Nix build. PyPI's `hermes-agent` therefore stops at 0.19.0, published 2026-07-20, which predates the approval guardrails of v2026.8.3, the GitSpawn fix of v2026.9.7 and everything in this file. npm's `hermes-agent` is not a vendor channel either: it describes itself as an "Unofficial npm bridge" and is maintained by a third party.

Channel: tagged-release (removal first in v2026.7.30); the PyPI registry is frozen. Half: defect. Date: 2026-07-30.

Operator consequence: A fresh unpinned install from the public PyPI package resolves to 0.19.0. Existing installs may be older, pinned, editable, or sourced from Git. Inspect both version and origin before replacing them. Use pip show hermes-agent and uv tool list to locate candidates, then move retired public-package installs to a supported source, Docker, or desktop channel. Termux APT exists but was not built in the v0.21.7 attempt; exact feed parity is unknown. Nix remains best-effort.

## Receipt
- https://github.com/NousResearch/hermes-agent/commit/d84e11af4d9927c41ad0a3b4db72042cca250c64
- https://pypi.org/pypi/hermes-agent/0.19.0/json
- https://github.com/NousResearch/hermes-agent/blob/v0.21.7/website/docs/getting-started/installation.md#L1-L5
