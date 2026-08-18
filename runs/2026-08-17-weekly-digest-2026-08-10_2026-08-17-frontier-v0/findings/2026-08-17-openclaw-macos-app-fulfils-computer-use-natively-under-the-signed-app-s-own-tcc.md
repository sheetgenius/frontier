---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-openclaw-macos-app-fulfils-computer-use-natively-under-the-signed-app-s-own-tcc
source: openclaw
source_contract: sources/openclaw.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: medium
evidence:
  - url: https://github.com/openclaw/openclaw/pull/123635
    precision: merged_pr
---
# 2026-08-17-openclaw-macos-app-fulfils-computer-use-natively-under-the-signed-app-s-own-tcc

macOS app fulfils computer-use natively, under the signed app's own TCC identity.

OpenClaw.app could not use the CUA computer-use provider without giving the driver a separate macOS TCC identity, because a daemon spawned by the Gateway or a TypeScript worker inherits that process's responsibility chain rather than the signed app's Accessibility and Screen Recording grants. The signed app now owns the embedded-daemon lifecycle and exposes a generation-scoped private socket to its node worker; Settings picks exactly one provider (Peekaboo by default, or CUA) with no per-call fallback. Packaging downloads a pinned universal MCP proxy binary and verifies SHA-256 733e28a3782ac8d325f8fce8b5d97486c1054af755b40dfd086151b34c79377e before signing it into the bundle. A companion PR (#123801) makes the native Peekaboo path fulfil the computer.act v2 contract  --  exact-window observation, background window and element input, lifecycle operations  --  with process-local refs invalidated on lifecycle-generation change, and browser, recording, zoom and escalate_scope still rejected and unadvertised.

Channel: preview-or-beta. Ancestry: Merge commits 19ace6830b17a20cf5b103c1893a2c5d7bca6bc3 (PR #123635, merged 2026-08-14T17:24:09Z) and 4a6edc0d27bcaa47f2951523788ce127148b4406 (PR #123801, merged 2026-08-14T21:12:26Z), both base main. compare/v2026.8.1-beta.2...19ace6830 -> status=behind, ahead_by=0; compare/v2026.8.1-beta.2...4a6edc0d2 -> status=behind, ahead_by=0. compare/v2026.7.1-2...4a6edc0d2 -> diverged, ahead_by=14082. In no stable tag.

Operator consequence: Watch rather than adopt: this is macOS-only, beta-only, and it moves screen-recording and accessibility authority into the signed app bundle. The consequence worth tracking is the permission story  --  if computer use runs under the app's own TCC grants, the macOS permission dialog an ordinary user already said yes to becomes the grant that lets an agent drive their machine. Confidence is medium on operator-visible behaviour because the substance here is read from the PR bodies and the beta release notes; I did not run the app.

## Receipt
- https://github.com/openclaw/openclaw/pull/123635
