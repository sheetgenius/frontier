# OpenClaw adversarial cross-check

Run: `2026-10-24-weekly-digest-2026-10-13_2026-10-24-frontier-v0`.

Subject: `harvest/openclaw.primary.md`. Authorities read: AGENTS.md, THESIS.md, METHOD.md, EDITORIAL.md, CONTRIBUTING.md, the researcher brief, source contract and notes, and the existing profile. The parent harvest was checked for duplicate baseline coverage.

Result: Install today is correct. All 15 numbered findings are VERIFIED at the source/contract level. Two ancillary records need correction before profile reuse, and nine material omissions follow below. Counted verdicts are 15 VERIFIED, 2 CORRECTED, 0 REFUTED, 0 UNVERIFIABLE; the two corrections are C1 and C2. Channel and ledger checks are additional context, and misses are not included in those counts. Verification does not mean an installation, exploit, or end-to-end workflow was executed.

The independent blobless, no-checkout clone is at `/Users/c3po/co/frontier/tmp/cycle-2026-10-24/clones/openclaw-verify/`. Only this cross-check was written as a repository artifact. No site build, install, repository git write, or cloned-code execution was performed.

## Channel truth

Independent `npm view openclaw time dist-tags --json`, `gh release list`, version-specific release API reads, and registry reads agree with the harvest. Final selector reads:

| Surface | UTC read | Result |
| --- | --- | --- |
| npm dist-tags | 2026-10-24T10:27:23.448241Z | `latest=2026.10.7`, `beta=2026.10.10-beta.3`, `extended-stable=2026.9.33`; no `dev` |
| GitHub latest | 2026-10-24T10:27:32.905042Z | `v2026.10.7`, `prerelease=false`, published 2026-10-24T09:53:46Z |
| GitHub release list | 2026-10-24T10:27:33.739687Z | Same nine new versioned release objects; no newer stable or prerelease |
| Linux selector and 10.7 latest.json | 2026-10-24T10:15:23Z read batch | Both name the 10.6 AppImage and source `fe06181dc5ecc01cf8904abbfc26925925efefbc` |

Receipts: [npm publication metadata](https://registry.npmjs.org/openclaw), [npm selectors](https://registry.npmjs.org/-/package/openclaw/dist-tags), [version-specific npm package](https://registry.npmjs.org/openclaw/2026.10.7), [10.7 release](https://github.com/openclaw/openclaw/releases/tag/v2026.10.7), [10.7 desktop pointer](https://github.com/openclaw/openclaw/releases/download/v2026.10.7/latest.json), [Linux selector](https://github.com/openclaw/openclaw/releases/tag/linux-stable).

`npm i -g openclaw@2026.10.7` is the correct pinned CLI/Gateway target. The versioned registry metadata and tagged manifest agree on Node `>=24.22.1 <25 || >=26.12.1`. Stable source resolves to `157d8c2bc3ea2fa183afdc11088e69690bf8e64e`. Beta.3 and extended 9.33 still permit `>=24.16.0 <25 || >=26.1.0`; a lower engine admission floor does not prove a patched installed runtime.

The 10.7 asset read contained the six evidence/pointer files listed by the harvest, with no 10.7 desktop binary. The 10.6 object has macOS and Linux downloads. The attached post-publication JSON sets `npmRegistrySignaturesVerified` and `npmProvenanceAttestationMatched` to true; these are publisher assertions, not my signature or tarball audit. [Post-publication evidence](https://github.com/openclaw/openclaw/releases/download/v2026.10.7/openclaw-2026.10.7-postpublish-evidence.json).

The original 09:36 selector narrative was not independently observed at that time. The current publication timestamps are consistent with it; the present install recommendation does not depend on reconstructing that interval. Mutable endpoint reads establish the timestamped state above, not an immutable history of pointer changes.

At the 2026-10-24T10:17:12Z source check, the clone's main snapshot was `280c7c7d494a796cc870fbd794088b84df1e53dc` (committed 10:14:12Z), 11252 ahead / 842 behind 10.7. That is 15 commits after the researcher's pinned `5b4a181e715dd43a3a60bc0f588c4c770696f583`; its original 11237 / 842 count remains correct. The beta count is still 3939 / 842. The original window-volume count of 8327 also reproduces using committer dates on that original snapshot. Counts describe divergent histories, not feature deficits. [Pinned newer comparison](https://github.com/openclaw/openclaw/compare/v2026.10.7...280c7c7d494a796cc870fbd794088b84df1e53dc).

## Release ledger

VERIFIED. Every publication time, prerelease flag, npm time, and named-base count in the harvest reproduces. Counts below are TAG ahead / TAG behind; local `rev-list --left-right --count BASE...TAG` returns those columns in the reverse order. All timestamps are UTC and all years are 2026. Release URLs are version-specific records, though GitHub can edit their bodies and assets.

| Tag | GitHub published | Prerelease | Ahead / behind vs base | npm published |
| --- | --- | --- | --- | --- |
| v2026.10.3, baseline | 2026-10-13T13:49:25Z | false | 90 / 0 vs 10.2 | 2026-10-13T13:43:36.600Z |
| v2026.8.35, extended baseline | 2026-10-02T14:06:34Z | false | 3 / 0 vs 8.34 | 2026-10-02T13:20:17.208Z |
| v2026.10.5-beta.4 | 2026-10-15T06:10:42Z | true | 2559 / 380 vs 10.3 | 2026-10-15T05:41:51.005Z |
| v2026.9.33, extended | 2026-10-15T10:39:22Z | false | 16466 / 63 vs 8.35 | 2026-10-15T10:05:43.246Z |
| v2026.10.10-beta.1 | 2026-10-15T18:03:07Z | true | 6058 / 380 vs 10.3 | 2026-10-15T17:26:44.944Z |
| v2026.10.4 | 2026-10-16T00:36:19Z | false | 83 / 0 vs 10.3 | 2026-10-15T23:58:28.695Z |
| v2026.10.5 | 2026-10-18T21:47:25Z | false | 2704 / 463 vs 10.4 | 2026-10-18T21:16:43.569Z |
| v2026.10.10-beta.2 | 2026-10-19T12:23:09Z | true | 3861 / 475 vs 10.5 | 2026-10-19T03:14:54.518Z |
| v2026.10.10-beta.3 | 2026-10-21T07:00:49Z | true | 3939 / 475 vs 10.5 | 2026-10-21T06:26:30.289Z |
| v2026.10.6 | 2026-10-22T12:53:10Z | false | 294 / 0 vs 10.5 | 2026-10-22T12:44:56.648Z |
| v2026.10.7 | 2026-10-24T09:53:46Z | false | 73 / 0 vs 10.6 | 2026-10-24T07:36:46.919Z |

The four October stable verification blocks independently say Telegram beta E2E was not supplied and Android packaging was skipped. They do not say those tests failed. No newer released install channel or license change was found: versioned npm metadata says MIT for all three current channels, and LICENSE has no stable-baseline diff. This is not a full dependency-license audit.

## Numbered findings

All 68 numbered Receipt links were resolved through the named source, release/API record, or local git object. Every code-blob URL is pinned to a tag or full SHA, and its line anchors exist. PRs, issues, release objects, and the dated Node notice are context records, not immutable code snapshots. No numbered receipt uses main/HEAD. Current implementation claims were checked against pinned owners; the ancestry appendix reports independent merge-base results. Dates below denote channel availability unless the text expressly gives a commit date.

### 1. Stable now requires the October-patched Node runtime

VERIFIED. The event date is the 2026-10-22 stable publication, rather than the original patch's author date. The 10.7 manifest and version-specific npm metadata agree on `>=24.22.1 <25 || >=26.12.1` and pnpm 12.15.0. The backport is in 10.6/10.7 and absent from 10.5. The 10.6 release explicitly describes patched installers, Docker, and pre-staging updater admission. Node's dated 2026-10-21 notice lists 24.22.1 and 26.12.1, including the compromised CA update. This proves the shipped requirement and publisher-described packaging, not an OpenClaw exploit or an independently inspected container.

Evidence read: [runtime backport](https://github.com/openclaw/openclaw/commit/a9088826651c6b9136f9b5e9105c341a34ce3bd2), [10.7 manifest](https://github.com/openclaw/openclaw/blob/v2026.10.7/package.json), [10.6 release](https://github.com/openclaw/openclaw/releases/tag/v2026.10.6), [Node security release](https://nodejs.org/en/blog/vulnerability/october-2026-security-releases).

### 2. Final-argument approval binding reached both stable lines

VERIFIED. Stable availability changed on 2026-10-18; the donor itself predates this window. At 10.7, lines 328-338 make separate approved and hook copies; lines 391-420 either seek renewed approval over the candidate or block a changed candidate. The 9.33 owner has the corresponding branch at lines 342-434. The October donor is in 10.5 onward, while the adapted September backport is in 9.33. The hook migration contract supports the stated restriction on transforming plugins. This does not establish plugin isolation.

Evidence read: [stable fix](https://github.com/openclaw/openclaw/commit/34d07e7b0dc1b5f0ed54de67a9647d9e6b8c23de), [10.7 policy](https://github.com/openclaw/openclaw/blob/v2026.10.7/src/agents/agent-tools.before-tool-call.policy.ts#L291-L436), [9.33 policy](https://github.com/openclaw/openclaw/blob/v2026.9.33/src/agents/agent-tools.before-tool-call.policy.ts#L330-L436), [hook migration contract](https://github.com/openclaw/openclaw/blob/v2026.10.7/docs/plugins/hooks/tool-policy.md#L64-L85).

### 3. Stable rejects old Telegram imports instead of replaying them as fresh work

VERIFIED. The release event is 2026-10-18. The current importer uses the legacy timestamp and a 24-hour cutoff, emits a failed `stale-legacy-import` entry, and expressly excludes an already-imported sweep. PR #170068's scope explanation agrees. The donor is in 10.5 onward, absent from 10.3/10.4. The 9.33 retired-state file is a different implementation. Rejecting old work, preserving its evidence, and asking the owner to decide whether to reissue it are supported; clearing existing queued work is not claimed.

Evidence read: [fix](https://github.com/openclaw/openclaw/commit/84e5f5d130867647cf4b3677e778084b69f3b989), [current importer](https://github.com/openclaw/openclaw/blob/v2026.10.7/extensions/telegram/src/telegram-ingress-spool-migration.ts), [scope discussion](https://github.com/openclaw/openclaw/pull/170068), [extended retired-state handling](https://github.com/openclaw/openclaw/blob/v2026.9.33/extensions/telegram/src/state-migrations.ts).

### 4. Workshop replaces proposal review with direct edits and bounded Undo history

VERIFIED, with the additional compatibility omission M8 below. Both named commits are in 10.5 onward and absent from 10.3/10.4. Current Workshop docs specify immediate changes, ten versions per skill, 500 change records per agent, `auto` by default, manual learning with background mode `off`, allowlist bypass for learned skills, and the 30-day archive rule. `skill-versions.ts` sets `MAX_VERSIONS_PER_SKILL = 10`; library mutation/restore paths snapshot before replacement and use live assertions. The migration maps `propose` to `off` and removes the old approval fields. Self-learning docs explicitly describe an extra foreground-route model run and restricted tools. The 2026-10-18 date correctly denotes stable availability.

Evidence read: [direct versioned learning](https://github.com/openclaw/openclaw/commit/cfee851150c5603a6af8b04f748973b57e482af0), [Workshop contract](https://github.com/openclaw/openclaw/blob/v2026.10.7/docs/tools/skill-workshop.md), [version snapshots](https://github.com/openclaw/openclaw/blob/v2026.10.7/src/skills/workshop/skill-versions.ts), [restore implementation](https://github.com/openclaw/openclaw/blob/v2026.10.7/src/skills/workshop/library.ts), [migration](https://github.com/openclaw/openclaw/blob/v2026.10.7/src/commands/doctor/shared/legacy-config-migrations.runtime.skills.ts), [review authority](https://github.com/openclaw/openclaw/blob/v2026.10.7/docs/tools/self-learning.md).

### 5. The new stable train no longer enables the profile's native compaction defaults

VERIFIED. The shipped difference begins with 10.5 on 2026-10-18. I compared 10.4 provider docs with 10.7 owners. Anthropic's gate and wrapper both require `anthropicServerCompaction === true`; the gate also excludes OAuth and non-direct routing. OpenAI's plan enables the public Responses endpoint by default for budget compaction, but not manual compaction without explicit opt-in. The 10.4 docs describe the earlier default-on paths. The comparison independently returns 2704 ahead / 463 behind. The harvest appropriately leaves the reason for the divergence unknown.

Evidence read: [tag comparison](https://github.com/openclaw/openclaw/compare/v2026.10.4...v2026.10.5), [Anthropic gate](https://github.com/openclaw/openclaw/blob/v2026.10.7/packages/ai/src/transports/anthropic-payload-policy.ts#L67-L107), [Anthropic wrapper](https://github.com/openclaw/openclaw/blob/v2026.10.7/extensions/anthropic/stream-wrappers.ts#L324-L331), [OpenAI gate](https://github.com/openclaw/openclaw/blob/v2026.10.7/packages/ai/src/transports/openai-responses-payload-policy.ts#L204-L225), [OpenAI docs](https://github.com/openclaw/openclaw/blob/v2026.10.7/docs/providers/openai/advanced.md#L353-L362), [Anthropic docs](https://github.com/openclaw/openclaw/blob/v2026.10.7/docs/providers/anthropic.md#L906-L969).

### 6. Extended-stable advanced to September and lost its narrower-default distinction

VERIFIED. The 2026-10-15 release is gateway-only extended-stable 9.33. Its tag resolves to the stated SHA. Its docs set cross-agent access on and visibility to `all`. The actual HTTP creation owner carries required sandbox provenance, the exec owner cancels a registered managed run on operator abort, and the redactor sends chunk-unsafe patterns through the whole-string path. These are direct owner reads, not donor-SHA absence arguments. Selecting extended-stable therefore no longer restores August collaboration defaults. The claim remains limited to the named repairs.

Evidence read: [release](https://github.com/openclaw/openclaw/releases/tag/v2026.9.33), [September collaboration defaults](https://github.com/openclaw/openclaw/blob/v2026.9.33/docs/gateway/config-tools/sessions-and-subagents.md), [required HTTP sandbox creation](https://github.com/openclaw/openclaw/blob/v2026.9.33/src/gateway/operator-role-policy.ts#L276-L284), [HTTP caller](https://github.com/openclaw/openclaw/blob/v2026.9.33/src/gateway/operator-session-run.ts), [revocation](https://github.com/openclaw/openclaw/blob/v2026.9.33/src/agents/bash-tools.exec-runtime.ts#L813-L921), [redaction](https://github.com/openclaw/openclaw/blob/v2026.9.33/src/logging/redact.ts#L675-L687).

### 7. Windows update repairs shipped, but the original updater can still be the obstacle

VERIFIED. The aggregate 2026-10-24 date includes the 10.7 recovery release; individual fixes arrived earlier as the harvest states. The ancestry results below confirm all named backports. Current code relocates absolute Windows junction targets, uses an absent Windows scratch-retirement destination, and distinguishes SQLite inspection contention from restoration guidance. The 10.7 changelog supports the later activation/Doctor changes. Issue #170956 is still open; its 2026-10-24 comment distinguishes remaining problems. The restore-timeout fix is on the pinned main history, outside stable and beta.3. Neither a closed issue nor the target version is treated as proof that an old updater succeeds.

Evidence read: [10.6 qualification backport](https://github.com/openclaw/openclaw/commit/bba7238a1be3a0d4e92c371988f94e81011a06b2), [junction recovery](https://github.com/openclaw/openclaw/blob/v2026.10.7/src/plugins/plugin-generation-source-lookup.ts#L376-L424), [scratch retirement](https://github.com/openclaw/openclaw/blob/v2026.10.7/src/infra/backup-scratch.ts#L169-L199), [Doctor guidance](https://github.com/openclaw/openclaw/blob/v2026.10.7/src/state/openclaw-database-preflight.messages.ts#L51-L65), [10.7 recovery changes](https://github.com/openclaw/openclaw/blob/v2026.10.7/CHANGELOG/2026.10.7.md), [remaining Windows report](https://github.com/openclaw/openclaw/issues/170956).

### 8. CLI tool-catalog changes now invalidate stale native sessions

VERIFIED. Stable publication is 2026-10-24. Both stable commits are in 10.7 and absent from 10.6. The current owner invalidates on a changed tool-name fingerprint at lines 319-322 and excludes `screen`, `show_widget`, `suggest_task`, and `dismiss_task` at lines 37-48. Issue #175670 describes the matched stale-catalog failure. The beta owner also contains prompt-tool invalidation through its separate history. This supports the repair mechanism, not a claim that every tool failure or benchmark symptom is repaired.

Evidence read: [repair](https://github.com/openclaw/openclaw/commit/4057f94e2692f5cc274e97770d79f01402c25af9), [current CLI session policy](https://github.com/openclaw/openclaw/blob/v2026.10.7/src/agents/cli-session.ts#L37-L48), [invalidation branch](https://github.com/openclaw/openclaw/blob/v2026.10.7/src/agents/cli-session.ts#L319-L328), [original report](https://github.com/openclaw/openclaw/issues/175670).

### 9. Directed sends no longer require direct access to another agent's transcript

VERIFIED. Stable availability is 2026-10-18. The implementation commit is in 10.5 onward and the beta line, not 10.3/10.4. The current contract permits selected outgoing sends below `all` visibility, preserves global admission, denies ordinary sends with `send: []`, rechecks before acceptance, and explicitly withholds list/history/status/control access. The warning about a privileged recipient acting or disclosing data remains essential. This is a narrower collaboration grant within a trusted Gateway.

Evidence read: [implementation](https://github.com/openclaw/openclaw/commit/6de5ce9777a6c9816d70f9947e99eb0295253289), [10.7 send-only contract](https://github.com/openclaw/openclaw/blob/v2026.10.7/docs/gateway/config-tools/sessions-and-subagents.md#L33-L103).

### 10. Tlon sender identity and hosted Doctor diagnosis received separate authority repairs

VERIFIED. The combined 2026-10-18 event includes hosted Doctor; Tlon had already reached 10.4 on 2026-10-16. Both Tlon release histories were checked. Current Tlon code excludes club messages from owner-DM handling and requires a resend for old pending DMs without verified provenance. `doctor.worker.ts` now calls `runDoctorLintCli`, explicitly because noninteractive Doctor can migrate state. The setup contract excludes repairs inside hosted setup. The claims distinguish diagnosis from other chat operations.

Evidence read: [Tlon sender handling](https://github.com/openclaw/openclaw/blob/v2026.10.7/extensions/tlon/src/monitor/index.ts#L928-L982), [approval replay handling](https://github.com/openclaw/openclaw/blob/v2026.10.7/extensions/tlon/src/monitor/approval.ts#L113-L122), [Doctor worker](https://github.com/openclaw/openclaw/blob/v2026.10.7/src/commands/doctor.worker.ts), [Doctor repair](https://github.com/openclaw/openclaw/commit/6618b391c1c445429b54e1527a3c708782ae49c1), [chat setup contract](https://github.com/openclaw/openclaw/blob/v2026.10.7/docs/cli/openclaw.md).

### 11. X mentions and normal public thread links reached stable

VERIFIED. Both capabilities reached stable on 2026-10-18. The X contract supports numeric-ID admission, streaming/polling, optional guest access and costs, and explicitly excludes DMs, standalone posting, and media uploads. Guest mode, GitHub-derived admission, and automatic public work-session publication are off by default. The public-thread workflow says subsequent user messages and final answers become public, lists excluded content, calls redaction best effort, and warns that disabling access cannot recall saved copies. The two implementation SHAs are in 10.5 onward, not 10.3/10.4. No live X or anonymous-read test was run.

Evidence read: [X channel](https://github.com/openclaw/openclaw/blob/v2026.10.7/docs/channels/x.md), [public sharing workflow](https://github.com/openclaw/openclaw/blob/v2026.10.7/docs/web/control-ui/sessions-and-sidebar.md#L339-L356), [publication implementation](https://github.com/openclaw/openclaw/commit/8787ee08687efccb868e8273218942d1b597fb32).

### 12. Plugin browsing and device enrollment remove setup steps while retaining explicit authority

VERIFIED. The 2026-10-18 stable channel and all three implementation SHAs check out. RPC docs separate read-scoped catalog inspection from admin installation and explicit consent; they do not establish artifact downloadability from a listing. Official stable install docs describe core-matching selection and a visible compatibility fallback. The join command contains both `--service` and `--session-host`, while node hosting remains opt-in at runtime. Omitting the hosting flag retains the command-only service path.

Evidence read: [Gateway plugin methods](https://github.com/openclaw/openclaw/blob/v2026.10.7/docs/gateway/protocol/rpc-system-and-channels.md#L94-L145), [plugin selection](https://github.com/openclaw/openclaw/blob/v2026.10.7/docs/cli/plugins/install.md#L101-L118), [device join](https://github.com/openclaw/openclaw/blob/v2026.10.7/docs/cli/connect.md#L24-L44), [session hosting](https://github.com/openclaw/openclaw/blob/v2026.10.7/docs/nodes/session-hosting.md#L62-L77).

### 13. Model discovery and worker inference reduce manually maintained provider wiring

VERIFIED. The 2026-10-18 stable event is supported by the named 10.5 ancestors. Claude discovery docs require API-key access and preserve known catalog metadata; discovery is advisory. Google docs identify `google/gemini-4-argon` as the default, and tagged 10.5 notes name both Argon and 3.8 Flash. Those notes also explicitly list a completed native worker inference runtime, Gateway dispatch, placement, and worker/destination checks, beyond the earlier protocol contract. These are source and release claims, not measured model quality, successful live inference, or billing verification.

Evidence read: [10.5 changes](https://github.com/openclaw/openclaw/blob/v2026.10.7/CHANGELOG/2026.10.5.md), [current Claude discovery](https://github.com/openclaw/openclaw/blob/v2026.10.7/docs/providers/anthropic.md#L633-L652), [Google default](https://github.com/openclaw/openclaw/blob/v2026.10.7/docs/providers/google.md#L11-L58), [worker contracts](https://github.com/openclaw/openclaw/commit/4d47170f3961fd71c0106a90696096e743c1ff59).

### 14. Slack and Discord room-policy binding is fixed in beta, not stable 10.7

VERIFIED. The repair commits are dated 2026-10-14 UTC and reach the beta.1 publication on 2026-10-15, then beta.3. They are absent from stable 10.7. I also inspected the current owners: stable Slack constructs live name candidates; stable Discord accepts a matching slug/name; beta adds account-scoped channel-ID binding state and consults it before granting room policy. The new state files are absent from stable. The claims therefore survive a check for equivalent backports. Direct IDs and the stated unresolved-name/dangerous-name limits remain relevant.

Evidence read: [Slack fix](https://github.com/openclaw/openclaw/commit/803744916a8f168a7c82e346bf6d37065a04780f), [Discord fix](https://github.com/openclaw/openclaw/commit/68c3f3fb660c5dd808231199b0fe265ea26086f2), [stable Slack adapter](https://github.com/openclaw/openclaw/blob/v2026.10.7/extensions/slack/src/group-policy.ts#L81-L95), [stable Discord adapter](https://github.com/openclaw/openclaw/blob/v2026.10.7/extensions/discord/src/group-policy.ts#L44-L62), [beta Slack adapter](https://github.com/openclaw/openclaw/blob/v2026.10.10-beta.3/extensions/slack/src/group-policy.ts), [beta Discord adapter](https://github.com/openclaw/openclaw/blob/v2026.10.10-beta.3/extensions/discord/src/group-policy.ts).

### 15. Main adds Gateway-owned exec review for cloud workers

VERIFIED. The commit is 2026-10-24T09:50:32Z, present in the pinned main snapshot, and contained in no local tag. It is absent from current stable and beta. Worker code hashes execution inputs and environment and rejects a mismatched operation/binding; Gateway code rechecks turn and live authority before and after review and uses the authenticated worker path. Issue #178560 describes the loopback failure. The maintainer's AWS result remains attributed, with no independent runtime success claimed.

Evidence read: [change](https://github.com/openclaw/openclaw/commit/db38f86b6d086631347af055d2bc87a653b7e8c8), [worker decision binding](https://github.com/openclaw/openclaw/blob/db38f86b6d086631347af055d2bc87a653b7e8c8/src/worker/worker-exec-approval.ts), [Gateway review owner](https://github.com/openclaw/openclaw/blob/db38f86b6d086631347af055d2bc87a653b7e8c8/src/gateway/worker-environments/worker-exec-approval.ts), [reported failure](https://github.com/openclaw/openclaw/issues/178560).

## Prior claims spot-checked at newest stable

- `defaults-widened-reach`: VERIFIED as stated. The 10.7 session contract sets cross-agent access on and visibility to `all`; tool profiles do not narrow these. The 9.33 contract has the same broad defaults. [10.7 defaults](https://github.com/openclaw/openclaw/blob/v2026.10.7/docs/gateway/config-tools/sessions-and-subagents.md#L25-L132), [profile interaction](https://github.com/openclaw/openclaw/blob/v2026.10.7/docs/gateway/security/tool-permissions.md#L117-L137).
- `bot-input-default-on`: VERIFIED as a documented admission default, including Slack's extra explicit-bot/owner-member condition. Neither means unrestricted room admission. [Discord](https://github.com/openclaw/openclaw/blob/v2026.10.7/docs/channels/discord/troubleshooting.md#L102-L108), [Slack](https://github.com/openclaw/openclaw/blob/v2026.10.7/docs/channels/slack/access-control.md#L242-L248).
- `per-agent-message-restrictions` and `per-sender-tool-policies`: VERIFIED with the harvest's scope limits. Cross-provider and same-provider messaging default on; per-agent restrictions cover guarded mutations, not every read/admin action. Adapter-provided identity is not necessarily immutable: supported `name:`/`username:` keys remain mutable. See M7 and the already-recorded room-name issue. [Messaging](https://github.com/openclaw/openclaw/blob/v2026.10.7/docs/gateway/security/tool-permissions.md#L33-L56), [sender matching order](https://github.com/openclaw/openclaw/blob/v2026.10.7/docs/gateway/config-tools/tool-policy.md#L230-L248).
- `incognito-diagnostic-boundary`: VERIFIED for the four named writers only. Each explicitly checks the Incognito session key before exposing content. [Cache trace](https://github.com/openclaw/openclaw/blob/v2026.10.7/src/agents/cache-trace.ts#L98-L103), [payload log](https://github.com/openclaw/openclaw/blob/v2026.10.7/src/agents/anthropic-payload-log.ts#L85-L90), [raw stream](https://github.com/openclaw/openclaw/blob/v2026.10.7/src/agents/embedded-agent-subscribe.raw-stream.ts#L14-L19), [WebSocket data](https://github.com/openclaw/openclaw/blob/v2026.10.7/src/gateway/ws-log.ts#L232-L237). Existing logs and provider retention remain outside this result.
- `stable-security-repair-coverage`: VERIFIED for the specified HTTP provenance, registered exec cancellation, and redaction owners. [HTTP](https://github.com/openclaw/openclaw/blob/v2026.10.7/src/gateway/operator-session-run.ts#L19-L63), [operator abort](https://github.com/openclaw/openclaw/blob/v2026.10.7/src/agents/bash-tools.exec-runtime.ts#L719-L820), [redaction branch](https://github.com/openclaw/openclaw/blob/v2026.10.7/src/logging/redact.ts#L690-L701). These do not establish the separate CLI-runtime containment missing in M2.
- `memory-turn-tool-isolation`: VERIFIED for the scoped projection: file-backed persistence has read plus the append-only writer; provider-backed persistence admits that provider's declared persistence/lookup tools plus read. Auxiliary client and MCP additions are disabled for a memory trigger. [Projection](https://github.com/openclaw/openclaw/blob/v2026.10.7/src/agents/agent-tools.memory-flush.ts#L84-L130), [assembly](https://github.com/openclaw/openclaw/blob/v2026.10.7/src/agents/embedded-agent-runner/run/attempt-bundle-tools.ts#L80-L140).
- Desktop and Quick start defaults: VERIFIED within source scope. An absent local Desktop setting enables sharing but requires a local RFB server. Quick start sets automatic risk acknowledgement; Custom retains the fuller path. [Desktop](https://github.com/openclaw/openclaw/blob/v2026.10.7/docs/gateway/config-browser-ui-desktop.md#L345-L376), [consent](https://github.com/openclaw/openclaw/blob/v2026.10.7/src/commands/onboard-guided-consent.ts#L50-L75). No fresh-machine UI test was performed.
- Hook binding, Telegram import, Workshop, extended-stable, and compaction carry-forwards reproduce the changed/superseded verdicts in sections 2-6. They should replace the old profile posture rather than accumulate beside it.

### C1. Qualify the subagent sandbox carry-forward

CORRECTED. The statement that the documented controls remain available is literally supported, but an unqualified `holds at 2026.10.7` is insufficient for an operator deciding whether those paths enforce containment. Add this exact qualification to `subagent-security-boundary-docs` and any corresponding profile paragraph:

"The documented spawn restrictions remain available at 2026.10.7. For sandboxed scheduled or delegated work, explicitly select an embedded/API-backed model and inspect inherited subagent models, fallbacks, and runtime overrides. Main contains additional guards against resolving such work to a host-executed CLI; current stable and beta.3 do not contain those guards. A sandbox classification or `sandbox: require` is not proof that these CLI paths run inside the container."

This is a qualification of the security conclusion, not a refutation of what the docs say. The actual stable spawn owner classifies sandboxing before resolving the model and returns the model without the new host-CLI check. Current cron admission checks captured runtime authority, with no equivalent sandbox-placement guard. The main fixes and pinned owners are recorded in M2. The separate-Gateway trust warning still holds. [Stable spawn owner](https://github.com/openclaw/openclaw/blob/v2026.10.7/src/agents/subagents/spawn/subagent-spawn-child-plan.ts#L99-L214), [stable cron admission](https://github.com/openclaw/openclaw/blob/v2026.10.7/src/cron/isolated-agent/run-admission.ts), [trust model](https://github.com/openclaw/openclaw/blob/v2026.10.7/docs/gateway/security/trust-model.md#L58-L69).

## Advisory cross-check and C2

The repository advisory API was independently paginated: 722 records, latest publication 2026-09-11T00:58:59Z, no publication or update after the cutoff. Read batch started 2026-10-24T10:15:49Z. The public advisory page agrees with the latest September entries. [Repository feed](https://github.com/openclaw/openclaw/security/advisories).

The separate global npm query for 2026-10-14 through the read returned GHSA-3x84-qq85-fj65 / CVE-2026-62197, published 2026-10-21T19:37:42Z. Its plain impact is that lower-trust input reaching configured Browser CDP discovery can cause connections to network destinations OpenClaw policy should block. It identifies `< 2026.6.6` as affected and 2026.6.6 as the first patched stable. The harvest correctly treats database publication as new, while the repaired defect is older. [Global advisory](https://github.com/advisories/GHSA-3x84-qq85-fj65).

The NVD keyword read at 2026-10-24T10:16:17Z returned CVE-2026-110689 for ClawScan through 0.1.6, published 2026-10-14T21:17:36.433Z, not a Gateway defect. I read the 0.1.6 function and the 2026-08-13 fix. Independent compare results put the fix outside v0.1.6 (tag behind the fix by 20) and inside v0.1.7 (tag ahead by 6). [NVD record](https://nvd.nist.gov/vuln/detail/CVE-2026-110689), [affected source](https://github.com/openclaw/clawscan/blob/v0.1.6/internal/runner/runner.go#L1040-L1051), [repair](https://github.com/openclaw/clawscan/commit/9f6a6fbb9f1137345566d0ab44c73893dfe112fa), [fixed tag](https://github.com/openclaw/clawscan/tree/v0.1.7).

C2 is CORRECTED: the ClawScan lead names skipped paths without plainly stating what an attacker gains. Replace its impact description with: "A local package author can arrange files with normally skipped names or Python bytecode so ClawScan omits code from its security scan. This is a scanner-evasion problem in ClawScan through 0.1.6, fixed in 0.1.7, not a flaw established in Gateway 10.7." The repair removes skipped-name handling for individual files and changes Python-bytecode coverage; it does not remove every intentionally excluded dependency directory.

No additional in-window advisory was found in these named queries. This is a bounded feed check, not a claim that every related vulnerability has a CVE or GHSA. M1-M4 and M7 are source-backed security/authority changes without an asserted new CVE identity.

## Material omissions

### M1. Bash predicates can bypass exec allowlist review on all three current channels

Date: 2026-10-23T05:29:37Z. Channel: `main-unreleased` relative to published operator releases. The fix is an ancestor of the pinned main snapshot and absent from 10.7, beta.3, and 9.33. All three actual tagged classifiers still accept `test` and bracket predicates without inspecting `-v` operands, and lowercase builtin names.

The patch explains that Bash can evaluate an array subscript in a quoted `test -v` operand and execute command substitution. Treating the entire predicate as a safe builtin can therefore run a command without its allowlist match or on-miss approval. Main excludes those predicates from safe builtin treatment and makes builtin matching case-sensitive. The maintainer's production-chain probe is reported evidence; I did not execute the payload.

Operators relying on POSIX exec allowlists should avoid these predicate forms in admitted work, restrict that work or its host exposure, and watch for this exact repair in a published version. Selecting beta.3 or extended 9.33 does not supply it. [Fix and impact](https://github.com/openclaw/openclaw/commit/69cd9c5edb96b5bd990e97030a45c01f9f8c10a8), [stable classifier](https://github.com/openclaw/openclaw/blob/v2026.10.7/src/infra/exec-safe-builtins.ts), [beta classifier](https://github.com/openclaw/openclaw/blob/v2026.10.10-beta.3/src/infra/exec-safe-builtins.ts), [extended classifier](https://github.com/openclaw/openclaw/blob/v2026.9.33/src/infra/exec-safe-builtins.ts).

### M2. Main closes host-CLI paths that contradict sandboxed cron and child classification

Dates: cron fix 2026-10-17T01:30:47Z; spawned-child fix 2026-10-23T03:29:36Z. Channel: `main-unreleased` relative to published operator releases. Both fixes are in the pinned main history, absent from 10.7 and beta.3. I checked current owners as well as ancestry: stable/beta cron admission lacks the sandbox-placement check; the new child run guard file is absent; stable child planning proceeds after model resolution without the new runtime check.

An inherited subagent model, fallback, or runtime override can select a local CLI whose native tools run as the Gateway OS user outside the configured Docker sandbox while the session is classified sandboxed. Main refuses those candidates at cron admission, hidden/visible spawn admission, and the delegated run backstop. The correction is rejection, not newly containerized CLI execution. Operators should select API/embedded child and cron models and inspect inherited defaults and overrides; do not treat a classification label as the boundary. This requires C1 above.

[Scheduled-work repair](https://github.com/openclaw/openclaw/commit/7abbf8507aa2fc52952621a497ece0e019b2748e), [child repair](https://github.com/openclaw/openclaw/commit/a19f1bf9eb6e5b22343c144a387a945d2cbc3525), [new run guard](https://github.com/openclaw/openclaw/blob/a19f1bf9eb6e5b22343c144a387a945d2cbc3525/src/agents/command/attempt-sandbox-cli-admission.ts), [stable child owner](https://github.com/openclaw/openclaw/blob/v2026.10.7/src/agents/subagents/spawn/subagent-spawn-child-plan.ts), [stable cron owner](https://github.com/openclaw/openclaw/blob/v2026.10.7/src/cron/isolated-agent/run-admission.ts).

### M3. Headless agent exec now actually dispatches blocking plugin hooks

Date: stable publication 2026-10-18. Channel: `tagged-release`, 10.5 onward. Stable backport `f33247464b02bd0bd04a215158a24150ac1f003a` is absent from 10.4 and present in 10.5/10.6/10.7. It initializes the hook runner even when a scoped headless registry has no process-wide root.

Before this repair, a blocking `before_tool_call` policy plugin could be silently skipped under `openclaw agent exec`; this is distinct from section 2's argument-rewrite problem after an approval. Operators using headless runs need the fixed host and should test the actual headless entry point with their policy plugin. Gateway hook behavior alone is not a check of this path. [Stable repair, mechanism, and attributed end-to-end probe](https://github.com/openclaw/openclaw/commit/f33247464b02bd0bd04a215158a24150ac1f003a), [current initialization](https://github.com/openclaw/openclaw/blob/v2026.10.7/src/agents/runtime-plugins.ts), [current dispatcher](https://github.com/openclaw/openclaw/blob/v2026.10.7/src/plugins/hook-runner-global.ts).

### M4. Pairing credentials no longer travel in browser-opener process arguments

Date: stable publication 2026-10-18. Channel: `tagged-release`, 10.5 onward. Stable backport `fb08d790a901870455c35bc437dae2c9cc9bc523` is absent from 10.4 and present in 10.5/10.6/10.7.

A different local OS user on a default-procfs host could read the one-time pairing URL from an opener's command line and redeem owner bootstrap before the intended browser. Dashboard and onboarding now use a private redirect document, passing only its non-secret path to the opener. Code uses POSIX private modes or Windows owner-only creation and schedules cleanup. Upgrade before bootstrap on shared hosts; the repair does not hide deliberately printed/copied credentials or replace OS-user separation. [Repair and impact](https://github.com/openclaw/openclaw/commit/fb08d790a901870455c35bc437dae2c9cc9bc523), [current private handoff](https://github.com/openclaw/openclaw/blob/v2026.10.7/src/infra/browser-handoff.ts), [path-only opener](https://github.com/openclaw/openclaw/blob/v2026.10.7/src/infra/browser-open.ts).

### M5. Known-incompatible Codex runtime plugins are refused before serving turns

Date: stable publication 2026-10-18. Channel: `tagged-release`, 10.5 onward; earlier beta availability is not the new event. Stable backport `cada1bc0d9ac1c0120f5fbc63829db310648b3e7` is absent from 10.4 and present in 10.5/10.6/10.7.

The compatibility floor for the official external `@openclaw/codex` runtime is 2026.9.7. A permissive plugin API range no longer admits a known older runtime that relies on a removed SDK path. Current candidate loading marks it unavailable and gives repair/update guidance. Compatible older runtimes can still load. Operators need to inspect the installed runtime plugin as well as the core package, run the documented repair or plugin update, and restart; a successful core update alone does not settle this compatibility boundary. [Backport](https://github.com/openclaw/openclaw/commit/cada1bc0d9ac1c0120f5fbc63829db310648b3e7), [current floor](https://github.com/openclaw/openclaw/blob/v2026.10.7/src/plugins/official-runtime-plugins.ts#L19-L28), [current refusal](https://github.com/openclaw/openclaw/blob/v2026.10.7/src/plugins/loader-runtime-candidate.ts#L245-L267).

### M6. Scheduled same-conversation continuations retain and re-admit operator authority

Date: stable publication 2026-10-22. Channel: `tagged-release`, 10.6/10.7. Stable backport `5c0d3994608db756c83dbe7de11fd232c8197d1f` is absent from 10.5 and present in 10.6/10.7. The docs and `restoreCronOperatorSource` owner agree.

A newly scheduled `at` agent turn targeted to its authenticated creator's exact conversation can retain that source privately, revalidate it under current policy on each occurrence, and call `next_check` to rearm the same one-shot job while waiting. It does not infer authority for old jobs, guests, scripts, or unrelated conversations, and edits/revocation can retire the source. This makes an authorized follow-up possible without another human message while preserving the scope ceiling. Operators can replace a manual reminder loop for this supported case, then verify revocation and the exact target before relying on it. [Release backport](https://github.com/openclaw/openclaw/commit/5c0d3994608db756c83dbe7de11fd232c8197d1f), [current contract](https://github.com/openclaw/openclaw/blob/v2026.10.7/docs/automation/cron-jobs/payloads.md#L98-L118), [current re-admission](https://github.com/openclaw/openclaw/blob/v2026.10.7/src/gateway/cron-operator-source.ts).

### M7. Main warns about sender policies keyed by mutable names

Date: 2026-10-15T19:36:47Z. Channel: `main-unreleased` relative to published operator releases. Commit `16a3787ba105b71a72843941dcdf1c78634b752c` is in main, absent from 10.7 and beta.3; the actual tagged audit owners lack its `toolsBySender.mutable_entries` check.

A channel member who changes a display name or handle may select a `name:` or `username:` tool-policy override intended for somebody else. Main adds a warning and recommends stable `id:` keys; it does not remove the supported mutable keys or change their matching semantics. This is separate from section 14's room-name/channel-ID repair. Operators should inspect privileged sender-policy keys now rather than waiting for an audit warning that their current channel does not have. [Patch and warning text](https://github.com/openclaw/openclaw/commit/16a3787ba105b71a72843941dcdf1c78634b752c), [stable supported key types](https://github.com/openclaw/openclaw/blob/v2026.10.7/docs/gateway/config-tools/tool-policy.md#L230-L248), [stable audit owner](https://github.com/openclaw/openclaw/blob/v2026.10.7/src/security/audit-channel.ts), [beta audit owner](https://github.com/openclaw/openclaw/blob/v2026.10.10-beta.3/src/security/audit-channel.ts).

### M8. Workshop retirement also breaks old proposal integrations and backup restoration

Date: stable publication 2026-10-18. Channel: `tagged-release`, 10.5 onward, through the direct/versioned Workshop change whose ancestry section 4 verifies. This is an operator compatibility addition to that section, not a second independent learning feature.

Current docs say `skills.proposals.*` and `skills.curator.*` stay registered but return errors; `skill_proposal_evaluate` and `skill_proposal_changed` hooks were removed. Doctor exports pending drafts, which are not loaded automatically. Old `skill-workshop/collection-backups/` files are no longer read or automatically restored. Plugin authors and operators must migrate integrations and copy any needed old backup content manually; exercising the new bounded Undo is not a test of old-backup recoverability. [Tagged retirement contract](https://github.com/openclaw/openclaw/blob/v2026.10.7/docs/tools/skill-workshop.md#L245-L260), [release-reaching implementation](https://github.com/openclaw/openclaw/commit/cfee851150c5603a6af8b04f748973b57e482af0).

### M9. New main source adds an invitation-bound guest welcome endpoint

Date: 2026-10-24T10:14:12Z, after the researcher's 09:57:03Z snapshot. Channel: `main-unreleased`; the commit is the independent source snapshot and contained in no local tag, with no newer registry release.

Visitor Access adds `visitor-access.welcome.ensure`, bound to the connection's admitted visitor grant and signed-in profile. The owner reserves a stable session key, creates a guest-owned session, and appends a greeting without a model run, using an idempotency key. The greeting reflects role capabilities, inviter, note, and expiry. This is a concrete onboarding backend, with retries reusing the reserved session. A frontend cold-load or live invitation flow was not verified; do not describe automatic onboarding as tested or stable. Operators evaluating the source path should inspect the selected guest role and wait for a release before treating it as ordinary delivery. [Commit](https://github.com/openclaw/openclaw/commit/280c7c7d494a796cc870fbd794088b84df1e53dc), [grant and session owner](https://github.com/openclaw/openclaw/blob/280c7c7d494a796cc870fbd794088b84df1e53dc/extensions/visitor-access/src/welcome.ts#L44-L129), [capability-derived greeting](https://github.com/openclaw/openclaw/blob/280c7c7d494a796cc870fbd794088b84df1e53dc/extensions/visitor-access/src/welcome.ts#L193-L258).

For M1, M2, and M7, some containing refs are internal `release-publish/*` build tags. None is a versioned public release or registry channel establishing operator availability. They are not counted as shipped fixes. M9 and section 15 have no containing tags at all.

## Rule checks and limits

- Pinned code: passes for all numbered receipts. The contextual issue/PR records were read as reports and scope explanations, never as proof that a release contains a fix. Main claims use explicit SHAs. Dates were checked to 2026 and commit timestamps normalized to UTC where needed.
- CVE/GHSA impact: CDP is already explained as prohibited network reach. ClawScan needs C2's explicit scanner-evasion consequence. No Gateway version is substituted for ClawScan or a mobile artifact.
- Marketing/substance: the numbered claims use tagged source or versioned release records. OEM distribution, audit marketing, adoption, and model-performance leads are not elevated to installed-version, runtime-security, or measured-quality claims. That separation should remain in the profile.
- Social: no social post is quoted or used to prove a numbered capability. The report/benchmark anecdotes remain leads or attributed issue reports; no matched runtime or population conclusion was inferred from them.
- Coverage: source and channel checks establish the named mechanisms and omissions, not a comprehensive vulnerability census. No downloaded package, desktop image, mobile-store artifact, live channel, Windows recovery, provider billing, attack payload, or upstream test was executed. Historical moving-pointer observations cannot be replayed from today's endpoint alone.
- Artifact checks: the output is ASCII and only the requested cross-check is written. The harvest remains byte-for-byte unchanged. Site build and integrity execution were intentionally not run under the job's explicit restrictions.

## Independent ancestry receipts

All rows use local `git merge-base --is-ancestor SHA REF`: present means exit 0; absent means exit 1, with no missing-object errors. Tags checked are 10.3, 10.4, 10.5, 10.6, 10.7, extended 9.33, beta.1, beta.3, and pinned main `280c7c7d494a796cc870fbd794088b84df1e53dc`. Other checked tags are recorded in the ledger and omission text. Full SHAs are retained so release-branch backports cannot be confused with their main donors.

| Section | Commit | Present in checked refs |
| --- | --- | --- |
| 1 | `a9088826651c6b9136f9b5e9105c341a34ce3bd2` | 10.6, 10.7 |
| 2 | `34d07e7b0dc1b5f0ed54de67a9647d9e6b8c23de` | 10.5, 10.6, 10.7 |
| 2 | `3e97e46be43da54a0d0ab1455aac6544d2dd53e5` | 9.33 |
| 3 | `84e5f5d130867647cf4b3677e778084b69f3b989` | 10.5, 10.6, 10.7 |
| 4 | `cfee851150c5603a6af8b04f748973b57e482af0` | 10.5, 10.6, 10.7, 10.10-beta.1, 10.10-beta.3, main snapshot |
| 4 | `d13b1c5b825ebe9214453cbd453060194446f016` | 10.5, 10.6, 10.7, 10.10-beta.1, 10.10-beta.3, main snapshot |
| 6 | `5873f8174e0b2866a2b8bc0dbf4c4c8164d8dc82` | 9.33 |
| 6 | `3e97e46be43da54a0d0ab1455aac6544d2dd53e5` | 9.33 |
| 7 | `6ef046efb3c17c6f670004dd8d3f5c8f4b002d8d` | 10.4 |
| 7 | `2f0e3e3b0d6b103719b991fa28fac9ca4245d588` | 10.5, 10.6, 10.7 |
| 7 | `30d7cc85e7e5609f74c36fcbe3dc24b1a7d42cdb` | 10.6, 10.7 |
| 7 | `3fc2acbdbd320b3f20b4ee49fe0049c527d8fae9` | 10.6, 10.7 |
| 7 | `bba7238a1be3a0d4e92c371988f94e81011a06b2` | 10.6, 10.7 |
| 7 | `071f27c2b58ce383e1a70f71b6fec66461261cb8` | main snapshot |
| 8 | `4057f94e2692f5cc274e97770d79f01402c25af9` | 10.7 |
| 8 | `d510408ee37899a048abf68f96742ba7f4990f97` | 10.7 |
| 9 | `6de5ce9777a6c9816d70f9947e99eb0295253289` | 10.5, 10.6, 10.7, 10.10-beta.1, 10.10-beta.3, main snapshot |
| 10 | `c9339841dbee33bc5c1f529309ed48ee62541543` | 10.4 |
| 10 | `4f104e39764643c29221fed4934d791c255a8d19` | 10.5, 10.6, 10.7 |
| 10 | `6618b391c1c445429b54e1527a3c708782ae49c1` | 10.5, 10.6, 10.7 |
| 11 | `9666c02c538f77353dbebc9621606c773d29f170` | 10.5, 10.6, 10.7, 10.10-beta.1, 10.10-beta.3, main snapshot |
| 11 | `8787ee08687efccb868e8273218942d1b597fb32` | 10.5, 10.6, 10.7, 10.10-beta.1, 10.10-beta.3, main snapshot |
| 12 | `4e011b13e48a2bca4a0ab2b9aab066cb60877184` | 10.5, 10.6, 10.7, 10.10-beta.1, 10.10-beta.3, main snapshot |
| 12 | `5ac5bfe1b36e9970be5c4106f7daaf541d469201` | 10.5, 10.6, 10.7, 10.10-beta.1, 10.10-beta.3, main snapshot |
| 12 | `a14032f93c4729181e4163f0ba485edf9c18518e` | 10.5, 10.6, 10.7 |
| 13 | `b3402517635478d662d958659cd90f3e7d523f52` | 10.5, 10.6, 10.7, 10.10-beta.1, 10.10-beta.3, main snapshot |
| 13 | `41a8839930e739b28541f287d0521e0c49c8eff8` | 10.5, 10.6, 10.7, 10.10-beta.1, 10.10-beta.3, main snapshot |
| 13 | `265a6d0e30bfaa3d84b5fabe0f24bd72911e7bc0` | 10.5, 10.6, 10.7 |
| 13 | `9fc82a584e4e60f931190701066cdd56b6cec0bf` | 10.5, 10.6, 10.7 |
| 13 | `4d47170f3961fd71c0106a90696096e743c1ff59` | 10.5, 10.6, 10.7, 10.10-beta.1, 10.10-beta.3, main snapshot |
| 14 | `803744916a8f168a7c82e346bf6d37065a04780f` | 10.10-beta.1, 10.10-beta.3, main snapshot |
| 14 | `68c3f3fb660c5dd808231199b0fe265ea26086f2` | 10.10-beta.1, 10.10-beta.3, main snapshot |
| 15 | `db38f86b6d086631347af055d2bc87a653b7e8c8` | main snapshot |

Stable pins: 10.3=`59cb44796b0f1f0daa0e37af8b1495abb45d9bc1`; 10.4=`383c124cc32ffee3f8e56f549b88da94d269a4af`; 10.5=`1b58cb9a1b4f4353e1add63c8506db4d890962e8`; 10.6=`fe06181dc5ecc01cf8904abbfc26925925efefbc`; 10.7=`157d8c2bc3ea2fa183afdc11088e69690bf8e64e`; 9.33=`5873f8174e0b2866a2b8bc0dbf4c4c8164d8dc82`; beta.1=`87175a8e989c7b7197d085d155c9e7b04c001da8`; beta.3=`15dffe5258a93c3d9c5dfd0a2b2de9989ebe7e14`.
