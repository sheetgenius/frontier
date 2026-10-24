---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-gemini-cli-nightly-bridges-the-host-ide-companion-into-container-sandboxes
source: gemini-cli
source_contract: sources/gemini-cli.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/vscode-ide-companion/src/ide-server.ts#L423-L475
    precision: tagged_commit_file
  - url: https://github.com/google-gemini/gemini-cli/commit/5e7b42d76afc90567443ee2a14c8c565c43bdee4
    precision: commit
  - url: https://github.com/google-gemini/gemini-cli/blob/v0.67.0-nightly.20261024.gcd1b45c2d/packages/cli/src/utils/ideBridge.ts
    precision: tagged_commit_file
  - url: https://github.com/google-gemini/gemini-cli/commit/7cb39b75e4770805d6b750487d5950e58cc646c5
    precision: commit
  - url: https://github.com/google-gemini/gemini-cli/commit/d968ea0a247b4709e23fc03b782eaa05ce1bf4d4
    precision: commit
---
# 2026-10-24-gemini-cli-nightly-bridges-the-host-ide-companion-into-container-sandboxes

Nightly bridges the host IDE companion into container sandboxes. The companion shutdown repair reaches stable source, with Marketplace delivery still unverified. Separately, a nightly host-side bridge connects a container's exec-stdio helper to the host companion while keeping its bearer token on the host. The tool surface is limited to `openDiff` and `closeDiff`, plus selected context/diff notifications; other tool calls are rejected. Diff paths must be absolute, normalized and lexically inside the workspace. Companion integration is wired for Docker/Podman/runsc. Adjacent changes exclude IDE settings and GEMINI.md from incidental open-file context and resolve relative paths against the active IDE workspace. Normal GEMINI.md context loading remains separate.

Channel: preview-or-beta. Half: both. Date: 2026-10-23.

Operator consequence: The nightly offers a way to keep IDE diff review while running the agent in a container, removing a reason to abandon sandboxing for editor convenience. Check workspace mapping, helper availability and the separately installed companion. The lexical path check is not proof of symlink confinement, and no live bridge was exercised. This is a capability with a deliberately narrow boundary, not general host RPC access.

## Receipt
- https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/vscode-ide-companion/src/ide-server.ts#L423-L475
- https://github.com/google-gemini/gemini-cli/commit/5e7b42d76afc90567443ee2a14c8c565c43bdee4
- https://github.com/google-gemini/gemini-cli/blob/v0.67.0-nightly.20261024.gcd1b45c2d/packages/cli/src/utils/ideBridge.ts
- https://github.com/google-gemini/gemini-cli/commit/7cb39b75e4770805d6b750487d5950e58cc646c5
- https://github.com/google-gemini/gemini-cli/commit/d968ea0a247b4709e23fc03b782eaa05ce1bf4d4
