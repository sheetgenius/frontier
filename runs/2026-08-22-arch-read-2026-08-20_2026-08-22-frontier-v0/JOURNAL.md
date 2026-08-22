# JOURNAL -- 2026-08-22-arch-read-2026-08-20_2026-08-22-frontier-v0

## NOW

Item 1 written. Next: item 2 Monday pre-harvest (2026-08-20 to 2026-08-22), then stop. AUTHORIZE_PUSH: no.

Work queue:
[x] 1 Architecture read at Pi a17323e5 vs DSH 141eb6fe; write pi-dev-vs-dsh.md; land verdict on Pi profile dated 2026-08-22
[ ] 2 Monday pre-harvest 2026-08-20 to 2026-08-22 (OpenHands 1.15.0, Hermes v2026.8.19, DSH 0.1.1-rc.*, eve after 0.42.0, Claude Code 2.1.239, Codex 0.150.0-alpha vs latest, OMP 17.4.1/2; Lane B; native-X for those tags)
[ ] 3 Housekeeping only if 1 and 2 done (audit finding_count 26->32; dedup Gemini paragraph)

Verdict: Pi `dev` at a17323e5 did not grow a DSH-style replaceable gate. Hosts and a compiled-in allowlist are not plugins. Kernel still design. Channel: feature branch `dev`, not a tag. DSH profile unchanged.

Monday opens: that sentence, then the 21 August watches in harvest/.

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
