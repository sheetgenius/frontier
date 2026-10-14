---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-claude-code-the-server-side-classifier-reaches-every-direct-api-session-type-read-only-and-sandboxed
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/anthropics/claude-code/blob/2301018b1f61/CHANGELOG.md?plain=1#L1474
    precision: tagged_commit_file
  - url: https://code.claude.com/docs/en/permission-modes#server-side-classifier-review
    precision: official_docs
  - url: https://web.archive.org/web/20260921092459/https://code.claude.com/docs/en/auto-mode-classifier-billing
    precision: official_docs
---
# 2026-10-13-claude-code-the-server-side-classifier-reaches-every-direct-api-session-type-read-only-and-sandboxed

The server-side classifier reaches every direct-API session type; read-only and sandboxed commands now wait for it. The no-charge server-side check now covers direct Anthropic API sessions of every kind from 2.1.281 and telemetry-off sessions by default from 2.1.282, and the environment variable the docs described in September as not read on a direct connection now opts direct sessions in or out. Where the server reviews, read-only and sandboxed shell commands that used to run on the client's say-so now wait for its verdict and are blocked when it flags them, and a missing verdict is a deny. The client classifier refuses a Sonnet 5.5 or Opus 5.5 pin and runs Sonnet 5 (2.1.288). One profile sentence did not hold even when written: a gateway that strips the review fields does not stall a `-p` run; the billing page said on 2026-09-21, and says now, that `-p` prints the notice to stderr and continues in auto mode on billed local checks.

Channel: tagged-release (2.1.280 to 2.1.282 on stable; 2.1.288 latest only). Half: both. Date: 2026-09-22 (2.1.280), 2026-09-23 (2.1.281), 2026-09-24 (2.1.282), 2026-10-02 (2.1.288).

Operator consequence: For CI on the direct API, Anthropic's server is the default judge as its rollout reaches the session; telemetry-off direct sessions default to it from 2.1.282; the `/status` "Auto mode server" row and the stream-json `system` warning remain the only per-session readout, so put them in run records. A headless gateway session that falls back does not hang, it silently starts paying for local checks: alert on the stderr notice, not on a timeout. Expect more denials of read-only and sandboxed commands where the server reviews, and denials when a proxy truncates responses. The control is still labeled temporary, so get behavior from a gateway that passes `safeguards` and `safeguard_results` through rather than from the variable.

## Receipt
- https://github.com/anthropics/claude-code/blob/2301018b1f61/CHANGELOG.md?plain=1#L1474
- https://code.claude.com/docs/en/permission-modes#server-side-classifier-review
- https://web.archive.org/web/20260921092459/https://code.claude.com/docs/en/auto-mode-classifier-billing
