---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-gemini-cli-capacity-exhaustion-errors-became-terminal-in-stable-v0-55-1-retries
source: gemini-cli
source_contract: sources/gemini-cli.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://github.com/google-gemini/gemini-cli/pull/28790
    precision: merged_pr
---
# 2026-08-17-gemini-cli-capacity-exhaustion-errors-became-terminal-in-stable-v0-55-1-retries

Capacity-exhaustion errors became terminal in stable v0.55.1; retries and a recovery TTL exist only on main.

PR #28599 then #28716 (commit 2139b121bc028e0b4c96b97385555b19c2dd629d, merged 2026-08-07T01:17Z, first stable v0.55.1 on 2026-08-11) reclassified `MODEL_CAPACITY_EXHAUSTED` / `MODEL_CAPACITY_EXCEEDED`, `INSUFFICIENT_G1_CREDITS_BALANCE`, and 429/499/503 responses with capacity-shaped messages as `TerminalQuotaError`  --  no backoff even when the server supplies a retry delay, immediate model fallback instead. Issue #28761, filed 2026-08-10 against 0.54.4, reports the user-facing shape: repeated 'Usage limit reached for gemini-3.5-flash' while the CLI's own `/model` usage display shows 1-8% consumed. PR #28790 (commit fa2f27aee0464412e4ac455a4221b01a775ff9bc, merged 2026-08-13T18:20Z) calls this a 'critical capacity exhaustion retry regression' and restores graduated behaviour: unattended/non-interactive runs translate capacity errors back to ordinary retryable errors with exponential backoff (default 10 attempts) and never prompt for fallback; interactive runs get 2 silent jittered backoffs (1s, 3s) before the fallback dialog; and `ModelAvailabilityService` stamps `markedAt` and clears a capacity-terminal mark after a 30-second sliding TTL so a model is not dead for the whole session. Harder `'quota'` reasons stay permanently terminal.

Channel: main-unreleased. Ancestry: The regression half is in stable: `git tag --contains 2139b121b` -> v0.55.1 (also d55e366f6 -> v0.55.1). The fix half is not: `git tag --contains fa2f27aee` returns empty. Confirmed at file level  --  `git show v0.55.1:packages/core/src/availability/modelAvailabilityService.ts | grep markedAt` returns nothing, while the same file at e120d041e defines `markedAt` and the 30s sliding TTL.

Operator consequence: Hold at v0.54.x, or accept the behaviour, if you run gemini-cli unattended. On the current stable (v0.55.1, npm `latest` as of 2026-08-17) a single transient capacity blip terminates rather than backs off, silently downgrades you to a fallback model, and marks the preferred model unavailable for the rest of the session with no recovery path  --  which in CI reads as a hard failure or a quality regression you cannot attribute. The fix has been on main since 2026-08-13 and is in no tag; watch for the next stable and re-test your unattended runs against it before trusting retry semantics again.

## Receipt
- https://github.com/google-gemini/gemini-cli/pull/28790
