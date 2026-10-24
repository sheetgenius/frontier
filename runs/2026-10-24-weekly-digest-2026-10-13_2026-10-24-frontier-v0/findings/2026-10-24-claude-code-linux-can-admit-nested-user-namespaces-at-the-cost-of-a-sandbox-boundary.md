---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-claude-code-linux-can-admit-nested-user-namespaces-at-the-cost-of-a-sandbox-boundary
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/anthropics/claude-code/releases/tag/v2.1.305
    precision: github_release
  - url: https://web.archive.org/web/20261023145040/https://code.claude.com/docs/en/sandboxing
    precision: official_docs
---
# 2026-10-24-claude-code-linux-can-admit-nested-user-namespaces-at-the-cost-of-a-sandbox-boundary

Linux can admit nested user namespaces, at the cost of a sandbox boundary. An opt-in permits Chromium/Electron's own sandbox and nested bubblewrap or `unshare` inside Linux/WSL2 commands. The documentation is stronger than a compatibility note: code can end up outside Claude Code's sandbox, so none of its restrictions, including protected paths and credential-file rules, should be relied on against a malicious command. Repository settings cannot enable it. The setting alone is insufficient for rootless Podman or Buildah.

Channel: tagged-release. Half: both. Date: 2026-10-20.

Operator consequence: A browser test can become runnable without a separate launcher, but this is a containment decision, not a free fix. Use it only with a separately adequate process boundary and review the workload before allowing commands automatically. For Podman, follow the documented excluded-command route and recognize that those commands run with the user's full access. The new primitive saves integration work while moving judgment to the outer boundary.

## Receipt
- https://github.com/anthropics/claude-code/releases/tag/v2.1.305
- https://web.archive.org/web/20261023145040/https://code.claude.com/docs/en/sandboxing
