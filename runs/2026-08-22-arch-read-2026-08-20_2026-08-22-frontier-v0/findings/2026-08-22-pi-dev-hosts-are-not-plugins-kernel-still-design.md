---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-22-pi-dev-hosts-are-not-plugins-kernel-still-design
source: pi-coding-agent
source_contract: sources/pi-coding-agent.yml
window:
  start: 2026-08-20
  end: 2026-08-22
status: accepted
confidence: high
evidence:
  - url: https://github.com/earendil-works/pi/blob/a17323e5b1e766433e76a3ed7a129f640924c079/packages/agent/docs/plugins.md
    precision: git_commit
  - url: https://github.com/earendil-works/pi/blob/a17323e5b1e766433e76a3ed7a129f640924c079/packages/agent/src/plugins/services/provider.ts
    precision: git_commit
  - url: https://github.com/earendil-works/pi/blob/a17323e5b1e766433e76a3ed7a129f640924c079/packages/coding-agent/src/experimental/services/worker.ts
    precision: git_commit
  - url: https://github.com/earendil-works/pi/blob/a17323e5b1e766433e76a3ed7a129f640924c079/packages/coding-agent/src/experimental/services/session-builtins.ts
    precision: git_commit
  - url: https://github.com/earendil-works/pi/blob/a17323e5b1e766433e76a3ed7a129f640924c079/packages/coding-agent/src/core/experimental.ts
    precision: git_commit
---
# 2026-08-22-pi-dev-hosts-are-not-plugins-kernel-still-design

At `dev` SHA a17323e5 (2026-08-20), not in a tag and not on window-close main, Pi's new plugin docs say "No privileged built-ins" and mark the plugin kernel illustrative. The experimental load path compiles a service allowlist in host code. `RemoteServiceProvider` rejects undeclared ids. The session worker provides Chat, then Models, then stubs, before any optional callback; a second provide() of Chat throws. Production experimental code never passes extra serviceTokens. `pi client` is gated on `PI_EXPERIMENTAL=1`. plugins.md is absent at v0.84.2 and at 5cd93f68.

Channel: none (feature branch `dev`). Half: posture. This is not a second DeepSeek Harness. DSH at 141eb6fe still has no privileged core; Pi `dev` has hosts that are not plugins.

Operator consequence: ignore as an install. Watch for a tag that contains a17323e5. Do not run `dev`. The tagged product is still v0.84.2.

## Receipt
- https://github.com/earendil-works/pi/blob/a17323e5b1e766433e76a3ed7a129f640924c079/packages/agent/docs/plugins.md
- https://github.com/earendil-works/pi/blob/a17323e5b1e766433e76a3ed7a129f640924c079/packages/agent/src/plugins/services/provider.ts
- https://github.com/earendil-works/pi/blob/a17323e5b1e766433e76a3ed7a129f640924c079/packages/coding-agent/src/experimental/services/worker.ts
- https://github.com/earendil-works/pi/blob/a17323e5b1e766433e76a3ed7a129f640924c079/packages/coding-agent/src/experimental/services/session-builtins.ts
- https://github.com/earendil-works/pi/blob/a17323e5b1e766433e76a3ed7a129f640924c079/packages/coding-agent/src/core/experimental.ts
