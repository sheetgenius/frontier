# Thread check -- 2026-08-17 to 2026-08-20

Does this window complete, contradict, or repair a previous issue?

## It completes

**Hermes's git-pull skill scan reached v2026.8.18.** Parent left 6e22d265 on main. Ancestry: in v2026.8.18, not in v2026.8.16.2.

**OMP v17.3.7 gained a GitHub release and an npm publish.** Parent: tags without releases. 17.3.6 still has neither.

**Agent Zero's restored SSRF tests survived v2.10.** Parent asked whether the v2.9 restore acquired a regression test. The tests were already in v2.9 (same blob 26bf2a69). v2.10 did not drop them. They block 127.0.0.1 and redirect-to-loopback.

**Agent Zero's ACP bridge and interactive Browser left the `ready` branch and landed in v2.10.**

**Codex's ten-day stable drought ended.** 0.148.0 on 2026-08-18, 0.149.0 on 2026-08-20.

**Gemini's preview-not-ahead posture ended.** v0.56.0 is latest; v0.57.0-preview.0 is preview.

**eve's turnPolicy queue setting binds again in 0.39.3.** Parent finding 2026-08-17-eve-eve-0-33-0-makes-channel-messages-interrupt-the-running-turn-by told operators to set queue for transactional channels. PR #2173 states the field silently steered from 0.34.0. The SHA is in 0.39.3.

## It does not complete

**OpenClaw's approved-exec fix is still in no release.** ab5611f0 is 619 commits ahead of v2026.8.1-beta.2. Zero releases in this window.

**DeepSeek still has no non-prerelease tag.** rc.8 is still a plugin waterfall. The Web UI still has no login.

**OpenHands's wrong-profile fix is in v1.15.0, which is 2026-08-21.** At window close the operator's newest tag is still v1.14.0.

## It contradicts nothing on the gate

**The plugin-gate read still holds at rc.8.** architecture.md at 141eb6fe still says any row can be replaced. The `never` policy is decided before waterfall dispatch, so a later prepend cannot bypass that one mode. Replacing the approval row by patch still can. The contradiction to hunt was a privileged core. It is not there.

## Last four issues, archived

**The Gate Is a Plugin (2026-08-10 to 2026-08-17).** Completes: Codex drought ended (0.148.0/0.149.0); Hermes skill-scan tagged; OMP 17.3.7 released; Agent Zero ACP/browser tagged; SSRF tests present (already in v2.9). Repairs a prior finding: eve turnPolicy queue did not bind from 0.34.0 through 0.39.2; 0.39.3 copies the field. Does not complete: OpenClaw approved-exec; DeepSeek non-prerelease and UI auth. Does not contradict the plugin-gate read.

**You Approved Something Else (2026-08-03 to 2026-08-10).** Completes as still-broken: OpenClaw still has no new release, so the approved-exec binding (and the older workspace-boundary fix) remain off the installable channel. The prompt-versus-bytes pattern did not get a tagged repair.

**The Newest Thing You Can Install (2026-07-27 to 2026-08-03).** Same distance, new objects: the newest Codex made (Guardian V2) is in a tag and still off; the newest OpenClaw made (approved-exec) is still not in a tag.

**Rules Became Judgment (2026-07-02 to 2026-07-27).** Nothing in this three-day window completes or contradicts that issue's classifier-as-gate argument. Codex putting a classifier in a stable binary and leaving it off is adjacent, not a reversal.

**Paperclip canary.** The 2026-07-27 profile section that called the canary lane dead is false, as the 2026-08-17 correction already said. This window re-queried `refs/tags/canary/` and `refs/tags/nightly/` and found 818/819/820 still moving. The profile section is corrected on 2026-08-20. Not a penance paragraph in the brief.

## Forward-facing sentence for the brief

Last week's classifier is in a stable tag and still off; last week's exec fix is still unreleased; last week's eve queue setting did not bind until 0.39.3.
