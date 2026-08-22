# Comparison pass -- 2026-08-17 to 2026-08-20

Nearest precedent, concurrent pattern, or structural divergence only when it changes the read.

## Concurrent pattern: the unreleased item either tags or it does not

Four parent watches resolved in this window, two each way.

Reached a tag: Hermes skill-scan (6e22d265 in v2026.8.18); OMP write-fallback (v17.3.7 GitHub+npm); Agent Zero ACP/browser (v2.10); Codex 0.148.0 (the drought).

Did not: OpenClaw approved-exec (still 619 commits ahead of the newest beta); OpenHands wrong-profile (in v1.15.0, which is 2026-08-21, out of window); DeepSeek non-prerelease tag (none); DeepSeek UI auth (none).

That split is the window. "Merged last week" is not a posture. It is a coin flip until ancestry says otherwise.

## Structural divergence: where the gate lives

Parent: DeepSeek's approval path is a plugin a later plugin can prepend to. rc.8 architecture.md at 141eb6fe still says so.

This window Codex puts a model classifier in a stable tag (`codex-rs/ext/guardian-v2` at rust-v0.148.0) and leaves it `Stage::UnderDevelopment`, `default_enabled: false`. The vendor blog says embedding apps own approvals while the harness owns the loop. Those two Codex facts are the same design from two altitudes: the default CLI does not turn the model into the gate; the SDK story puts the gate in the app.

OMP's write-fallback, now npm-installable, is a third placement: the OS denial is not the last word when an extension is loaded.

Pi's new harness is a fourth: it is on `dev`, 264 commits ahead of main, in no tag. A maintainer said so. Reading default-branch commits would miss it.

eve's turnPolicy queue is the same pattern as Codex Guardian V2, on a field instead of a flag. 0.33.0 documented the control. 0.34.0 through 0.39.2 compiled it away. 0.39.3 copies the field onto the compiled channel. Shipped is not on.

## Historical precedent

Codex 0.148.0 after a ten-day stable drought is the same cadence the 2026-08-03 and 2026-08-17 issues already named: the repo moves daily, the default install does not. This time it moved twice in 48 hours. The catch-up is the event, not a change of cadence.

Claude Code's stable channel still sits seven listed versions behind latest (2.1.231 vs 2.1.238). Parent counted seven behind 2.1.226 vs 2.1.234. Both numbers moved; the gap size did not.

Agent Zero's v2.9 SSRF tests survived v2.10 byte-identical. That is the repair the parent asked for after a plugin refactor dropped CVE-2026-4308 for eleven stable tags: the tests exist and were not lost again.

## What does not earn a comparison

Gemini v0.56.0 being two chore commits past v0.55.1 does not need a Codex parallel. It is a channel promotion, not a capability.

Antigravity 1.1.17 sharing a SHA with 1.1.16 is the same collision this publication already recorded for 1.1.2/1.1.3. A GitHub release is not a changelog.

Gemini v0.56.0 being two chore commits is not a Codex parallel. The operator fact is that latest dropped a v0.55.1 OAuth fix the preview channel still has.

heypi, flue: no in-window commits.

Paperclip stable: no in-window tagged movement. The namespaced canary and nightly tags kept publishing (818/819/820). That is the parent correction holding, not a new decision. It earns a finding so the profile cannot keep saying the lane is dead.
