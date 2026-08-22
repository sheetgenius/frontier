# JOURNAL -- 2026-08-22-arch-read-2026-08-20_2026-08-22-frontier-v0

## NOW

Monday opens here.

1. Pi `dev` at a17323e5 did not grow a DSH-style replaceable gate. Hosts and a compiled-in allowlist are not plugins; the kernel is still design. Channel: feature branch `dev`, not a tag. Memo: pi-dev-vs-dsh.md. Profile Operator Read is dated 2026-08-22. Do not install `dev`. Watch for a tag that contains a17323e5. That sentence is the weekly lede candidate, not a weekend issue.

2. Then the 21 August watches in harvest/: OpenHands v1.15.0 tags the wrong-profile fix; Hermes v2026.8.19 contains execute_code / yolo / bot cards; DSH 0.1.1-rc.2 is still prerelease and architecture.md still has no privileged core; eve 0.43/0.44 after 0.42.0; Claude latest 2.1.239 (stable 2.1.231); Codex latest still 0.149.0, alpha 0.150.0-alpha.6; OMP latest 17.4.2. grok-build and cursor: explicit zero this window. Copilot CLI latest still 1.0.80.

AUTHORIZE_PUSH: no.

Work queue:
[x] 1 Architecture read
[x] 2 Monday pre-harvest
[x] 3 Housekeeping (audit 26->32; Gemini paragraph deduped)

## J1 2026-08-22T08:28Z shift open

NORTHSTAR copied from the assignment. Last brief left Pi `dev` architecture as medium confidence without a diff read; qa.md said the sample stayed with the researcher. This shift exists to answer one question at a17323e5: is there a component a plugin cannot replace or prepend to?

Pins (do not substitute live HEAD):
- Pi main 5cd93f688aaab89dbb6dfa4aca535f21796ae185
- Pi dev  a17323e5b1e766433e76a3ed7a129f640924c079
- Pi tag  v0.84.2 / 914cf1472e715297caa30db4b9535d534a9eb718
- DSH     dsh-v0.1.0-rc.8 / 141eb6fe

Forbidden: digest, brief, wire, /now/, content/digests/, git p-u-s-h, calling `dev` a release.

## J2 2026-08-22T09:20Z architecture read

Question answered at a17323e5: a plugin cannot replace or prepend to the experimental hosts. There is no plugin kernel in source. `plugins.md` is tentative design; "No privileged built-ins" is about feature bindings. `RemoteServiceProvider` allowlists compiled-in services. Worker provides Chat before any optional callback; second provide throws. Production never passes extra serviceTokens. `pi client` is `PI_EXPERIMENTAL=1` only. DSH at 141eb6fe still has no privileged core; that comparison changes the Pi verdict (not a second DSH). DSH profile not touched.

Wrote pi-dev-vs-dsh.md, finding 2026-08-22-pi-dev-hosts-are-not-plugins-kernel-still-design, Operator Read dated 2026-08-22 on the Pi profile. Channel visible: `dev` at a17323e5, not v0.84.2.

Did not read all 264 diffs. Did not execute the experimental binary. Did not substitute live origin/dev.

## J3 2026-08-22T10:10Z pre-harvest and housekeeping

Harvest 2026-08-20 to 2026-08-22 for the leftover watches plus grok-build/cursor/copilot-cli (item 1 finished). Lane B 15/15, 24 items. Native-X discovery only, no capture, no quotes. Housekeeping: last brief audit findings 26->32; comparison.md Gemini paragraph deduped. AUTHORIZE_PUSH still no.
