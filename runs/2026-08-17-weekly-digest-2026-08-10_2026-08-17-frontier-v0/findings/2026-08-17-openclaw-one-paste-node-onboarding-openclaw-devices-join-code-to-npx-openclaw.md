---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-openclaw-one-paste-node-onboarding-openclaw-devices-join-code-to-npx-openclaw
source: openclaw
source_contract: sources/openclaw.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://github.com/openclaw/openclaw/pull/122499
    precision: merged_pr
---
# 2026-08-17-openclaw-one-paste-node-onboarding-openclaw-devices-join-code-to-npx-openclaw

One-paste node onboarding: `openclaw devices join-code` to `npx openclaw connect <url>`.

Adding a second machine to a Gateway went from pasting a full setup blob to running `openclaw devices join-code` on the host and pasting the printed `npx openclaw connect <url>` on the new machine. A `GET /j/<shortcode>` endpoint exchanges a 128-bit shortcode for the canonical pairing payload exactly once; unknown, expired, malformed and already-used codes are all opaque and share a dedicated strict rate-limit scope. `openclaw connect` accepts HTTPS join URLs, `oc-pair://` URLs, or bare setup codes, refuses non-loopback plaintext, and fetches through the SSRF guard with no redirects. With `--service`, the first authenticated hello completes before service installation, so the durable device credential is persisted and the one-shot bootstrap bearer never lands in service arguments.

Channel: preview-or-beta. Ancestry: Merge commit ade3456dd48f638cd5c8c50ecc0a3da3fe76d2ec (PR #122499, merged 2026-08-12T13:17:40Z, base main). compare/v2026.8.1-beta.2...ade3456dd -> status=behind, ahead_by=0. compare/v2026.7.1-2...ade3456dd -> diverged, ahead_by=13303. compare/v2026.6.34...ade3456dd -> diverged, ahead_by=16456. In no stable tag.

Operator consequence: Try it on beta if multi-machine setup is your friction point  --  this is the clearest reduction in terminal-fluency cost OpenClaw shipped this window. Note the credential design when you evaluate it: the short code is single-use and burns on redemption, so a join URL that fails is a signal someone else redeemed it, not a retry.

## Receipt
- https://github.com/openclaw/openclaw/pull/122499
