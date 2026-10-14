---
schema_version: bitter.frontier_harvest.v0
provider: paperclip
window: 2026-09-21..2026-10-13
run: 2026-10-13-profile-refresh-2026-09-21_2026-10-13-frontier-v0
source_contract: sources/paperclip.yml
channels_present: [tagged-release, preview-or-beta, main-unreleased, docs-only]
window_volume: 3 stable tags (v2026.1001.0, v2026.1005.0, v2026.1012.0), 3 beta tags, 21 nightly tags, 264 canary tags; 25 numbered findings; 2 authority fixes shipped with no advisory; 0 GHSA published in window
lane: primary sources, profile-refresh researcher
---

# Harvest: paperclip (primary sources)

Punctuation is ASCII. Pin tags, not master. Identity: `gh api repos/paperclipai/paperclip` -> full_name paperclipai/paperclip, default_branch master, homepage https://paperclip.ing, description "The open-source app everyone uses to manage agents at work". That matches the contract's `primary_surfaces.repo`. Code was read from a blobless clone fetched 2026-10-13 (all 1,870 tags, including the namespaced `canary/`, `nightly/` and `beta/` tags omitted by an unnamespaced tag pattern), plus a read-only checkout of v2026.1012.0. Nothing was executed. The docs site docs.paperclip.ing is built from paperclipai/paperclip-docs ("Paperclip documentation"; its `docs/reference/changelog.md` matches the live changelog page). The initial read was at 3679b7e7 (2026-10-07); the crosscheck and write-up use d811a89622809a04001af07e84e427a86162a3bb, published 2026-10-13T16:44:53Z, for the end-of-window docs state. Release facts come from GitHub release bodies. Items marked "code at tag" were read at the pinned tag. Ancestry is `git merge-base --is-ancestor <merge sha> <tag>`, cross-checked against `gh api compare` for the stable pairs.

## Install today

- **Newest stable at window close: v2026.1012.0.** GitHub release published 2026-10-12T21:06:53Z, prerelease=false: https://github.com/paperclipai/paperclip/releases/tag/v2026.1012.0. npm `paperclipai@2026.1012.0` was published 2026-10-12T20:59:34.312Z with `engines.node >=24.11.0`: https://registry.npmjs.org/paperclipai/2026.1012.0. The tagged README uses `npx paperclipai@latest onboard --yes`; pin the same package as `npx paperclipai@2026.1012.0 onboard --yes`: https://github.com/paperclipai/paperclip/blob/v2026.1012.0/README.md#L350-L356. Anonymous GHCR verification on 2026-10-14 confirmed `latest` and `2026.1012.0` at sha256:1661b3dd3fdf7a9b59542d1ced464c3faf9dc8309798b4d15a9923ed32795307. That confirms current equality, not when the moving image tag changed.
- **Early snapshot versus window close.** The researcher's early 2026-10-13 registry observation was latest=2026.1012.0, beta=2026.1012.1-beta.0, nightly=2026.1012.0-nightly.0, canary=2026.1013.0-canary.5. npm keeps no historical dist-tag movements, so these are a timed observation, not reconstructed end-of-day pointers. Publication history independently checked during this write-up: https://registry.npmjs.org/paperclipai.
- **Published previews by close.** Beta 2026.1012.1-beta.0 was published 2026-10-12T22:27:06.888Z at 1b4c803816e82b0265c8422e1a804327a7ed8c54, the same source commit as October 12 nightly, 200 ahead and 2 behind stable. It has no GitHub release object but is published on npm. Nightly 2026.1013.0-nightly.0 was published 2026-10-13T09:36:48.313Z at 4a641d0980fdaffc4c4e805f6f0a8809eb5702f2, 249 ahead and 2 behind stable. Canary 2026.1013.0-canary.16 was published 2026-10-13T21:56:46.461Z at be3e614d61bda152812cb51d7b0c173569d3113d. Version receipts: https://registry.npmjs.org/paperclipai/2026.1012.1-beta.0, https://registry.npmjs.org/paperclipai/2026.1013.0-nightly.0, https://registry.npmjs.org/paperclipai/2026.1013.0-canary.16. Do not substitute October 14 pointers for October 13 publication truth.
- **Main-only remainder.** The last default-branch commit by 2026-10-13T23:59:59Z is e0f30a4c7186498b71b2637f253b3399997dac7d, 296 ahead and 2 behind stable: https://github.com/paperclipai/paperclip/compare/v2026.1012.0...e0f30a4c7186498b71b2637f253b3399997dac7d. The earlier 4a641d09 snapshot, including durable project-optional workspaces, managed Slack setup and draft October 15 notes, was already published in the October 13 nightly. A draft date is not a stable release. Do not classify that entire snapshot as main-only.
- **Flag defaults at stable.** Assistant connections over MCP, AI connection pools, memory connectors and Combined Inbox are off: https://github.com/paperclipai/paperclip/blob/v2026.1012.0/packages/shared/src/validators/instance.ts#L44-L62. MCP aggregators are forced on, and native-runner API tools are enabled unless their deployment switch disables them (section 5). Native runner defaults on for self-hosted: https://github.com/paperclipai/paperclip/blob/v2026.1012.0/server/src/services/instance-settings.ts#L225. Cloud inspection is preview-only; its authority switch belongs to the inspecting instance and its inspection switch to the target tenant (section 11).
- **Floor and upgrade path.** Use v2026.1012.0 for the scoped-grant and gateway-ownership fixes (section 2). Drain every older writer before starting it or rolling back (section 6). Export permission configs before upgrading from v2026.916.x: missing values now choose full auto on the named coding paths (section 1).

## Release ledger

| Tag | SHA | Published (GitHub, UTC) | Prerelease | vs previous stable (ahead / behind) | npm publish (UTC) | Promoted from |
|---|---|---|---|---|---|---|
| v2026.916.1 (baseline) | d554c478 | 2026-09-21T21:22:44Z | false | 1 / 0 vs v2026.916.0 | 2026-09-21T21:15:04Z | beta 2026.921.0-beta.0 shares the SHA |
| v2026.1001.0 | 8f8a0ab7 | 2026-10-02T01:54:00Z | false | 77 / 1 vs v2026.916.1 (diverged) | 2026-10-02T01:48:17Z | 2026.921.0-beta.1 (npm 2026-09-21T23:20:12Z), same SHA |
| v2026.1005.0 | 467125fa | 2026-10-06T16:40:49Z | false | 179 / 0 vs v2026.1001.0 | 2026-10-06T16:34:47Z | 2026.1002.0-beta.0 (npm 2026-10-02T05:57:11Z), same SHA |
| v2026.1012.0 | bba6a45f | 2026-10-12T21:06:53Z | false | 132 / 0 vs v2026.1005.0 | 2026-10-12T20:59:34Z | 2026.1006.0-beta.0 (22a3ea34, npm 2026-10-06T20:03:45Z) plus 2 release-only commits |

The "behind 1" for v2026.1001.0 is the v2026.916.1 hotfix commit (#13562), which was cherry-picked onto a release branch; the same fix reached v2026.1001.0 from master. Release bodies give the "Released" dates as 2026-10-01, 2026-10-05 and 2026-10-12.

Beta version-days after the parent's September 21 record (npm time): 2026.1002.0-beta.0 (2026-10-02), 2026.1006.0-beta.0 (2026-10-06), 2026.1012.1-beta.0 (2026-10-12). Nightly tags for days 922 through 1013 come to 21. There is no nightly for 1005: 2026.1004.0-nightly.0 was published 2026-10-04T11:14Z and the next, 2026.1006.0-nightly.0, 2026-10-06T18:50Z. Canary tags per version-day (from `git tag -l 'canary/*'`): 922:14 923:15 924:6 925:7 926:5 927:6 928:11 929:8 930:15 1001:12 1002:21 1003:10 1004:3 1005:6 1006:24 1007:15 1008:21 1009:18 1010:2 1011:12 1012:16 1013:17, 264 in total. Canary published every day of the window.

## 1. v2026.1001.0 defaults native ACPX, native OpenCode and legacy coding paths to full auto

- **Date:** 2026-10-02
- **Channel:** `tagged-release`
- **Ancestry evidence:** #13686 (7bc03e0acd12142f31132365e13cc2eb6a6e9c73) and #13693 (45c99a0d06cbd5b04982b06b79de321149930ac5) are absent from v2026.916.1 and contained in all three newer stables. Catalog values and legacy adapter arguments were compared at the tags; native Codex already used approval mode never at baseline.
- **Receipt:** https://github.com/paperclipai/paperclip/releases/tag/v2026.1001.0, https://github.com/paperclipai/paperclip/blob/v2026.1001.0/packages/adapter-utils/src/paperclip-runner-permissions.ts#L48-L136, https://github.com/paperclipai/paperclip/blob/v2026.1001.0/packages/adapters/codex-local/src/server/codex-args.ts#L53-L80, https://github.com/paperclipai/paperclip/blob/v2026.1001.0/packages/adapters/claude-local/src/server/permissions.ts#L7-L23, https://github.com/paperclipai/paperclip/blob/v2026.1012.0/packages/adapters/opencode-local/src/server/runtime-config.ts#L105-L117, https://github.com/paperclipai/paperclip/blob/v2026.1012.0/packages/paperclip-runner/src/drivers/codex/codex-security-config.ts#L187-L220, https://github.com/paperclipai/paperclip/pull/13693
- **Half:** both | **Confidence:** high

**What changed.** Missing settings now choose approve-all for native ACPX and allow for native OpenCode. Legacy codex_local defaults to --dangerously-bypass-approvals-and-sandbox instead of workspace-write. Legacy claude_local remote/root paths default to --dangerously-skip-permissions instead of the former allowed-tools list. Legacy opencode_local full auto replaces ambient permission rules with allow. Stored explicit values can opt out. The catalog also has provider-managed modes, so this is not a statement about every provider or launch path. Native Codex retains Paperclip filesystem restrictions and disabled network unless PAPERCLIP_RUNNER_NETWORK_ACCESS=enabled. Provider/account authorization and OS isolation still matter. Local harness shell commands are not necessarily calls through the company connection-tool grant matcher.

**Operator consequence.** Export agent configs before upgrading from v2026.916.x. Choose native acpxPermissionMode as approve-paperclip, approve-reads or deny-all, or native opencodePermissionMode as ask, when those prompts are intentional. For legacy opencode_local and claude_local the opt-out is dangerouslySkipPermissions: false; for legacy codex_local use dangerouslyBypassApprovalsAndSandbox: false. Native and legacy settings are not interchangeable. Restrictive sandbox/profile/approval/network arguments suppress defaulted Codex bypass, but explicit bypass=true wins. The intended gain is unattended execution without an unanswered provider prompt. The resulting audit needs to distinguish provider execution containment from Paperclip connection permissions; neither covers every operation alone.

## 2. Certain scoped tools:use grants could authorize tools outside their restrictions until v2026.1012.0

- **Date:** 2026-10-12
- **Channel:** `tagged-release`
- **Ancestry evidence:** #14915 (483dbc88904672362563419e485a1c4b366db96b) and #14914 (c46e41e81c03cd3c8b64cf993615b604d7fe8c62) are absent from v2026.1005.0 and contained in v2026.1012.0. The affected matcher exists from v2026.720.0 through v2026.1005.0. Tagged source and the crosscheck support the affected grant forms, not universal failure of scoped grants.
- **Receipt:** https://github.com/paperclipai/paperclip/blob/v2026.720.0/server/src/services/tool-access-policy.ts#L669-L675, https://github.com/paperclipai/paperclip/blob/v2026.1005.0/server/src/services/tool-access-policy.ts#L673-L680, https://github.com/paperclipai/paperclip/blob/v2026.1012.0/server/src/services/tool-access-policy.ts#L731-L761, https://github.com/paperclipai/paperclip/commit/c46e41e81c03cd3c8b64cf993615b604d7fe8c62, https://github.com/paperclipai/paperclip/pull/14915, https://github.com/paperclipai/paperclip/releases/tag/v2026.1012.0, https://github.com/paperclipai/paperclip/security/advisories
- **Half:** defect | **Confidence:** high

**What changed.** Certain scoped tools:use grants could authorize tools outside their intended restrictions from v2026.720.0 through v2026.1005.0. A nonmatching scope.allow could fall through to a selector check that ignored allow; a matching allow entry could bypass other restrictions. Recognized selectors could still constrain the old matcher. The fixed matcher requires a matching allow entry and all additional selectors; malformed or unknown restrictions reject that grant. Null and empty-object scopes remain broad. A nonmatching grant is not a global deny overriding other grants, policies or profiles. The same release binds native MCP gateway assignments to their owner and validates legacy owner/profile/assignment provenance; another agent run token could previously authenticate an assignment whose owner column was null. This is not evidence of unauthenticated internet access, cross-company compromise or actual abuse. No corresponding public advisory was found through verification on 2026-10-14.

**Operator consequence.** Upgrade to v2026.1012.0 and audit grants using allow lists, combined selectors, malformed restrictions or unknown selectors. Compare actual tool audit calls with intended restrictions for the affected period. A newly unavailable tool can be the fix rejecting a bad grant; repair the grant instead of widening it reflexively. Review other grants and policy decisions before assuming one nonmatch denies access. Release notes, rather than the advisory feed alone, carried both fixes.

## 3. v2026.1012.0 gives new standard agents 14 grants including unscoped tool use

- **Date:** 2026-10-12
- **Channel:** `tagged-release`
- **Ancestry evidence:** #15283 (a1ab55a56d3d535931efb18fc6b5e6f13b5fcdbd) is absent from v2026.1005.0 and contained in v2026.1012.0. Native hire_agent #13852 (7944ed3d976d1a7cc26a2d0cee51f227f3542084) first reaches stable in v2026.1005.0. Creation and approval activation paths insert the grants; existing agents are not backfilled.
- **Receipt:** https://github.com/paperclipai/paperclip/blob/v2026.1012.0/server/src/services/agent-permissions.ts#L3-L28, https://github.com/paperclipai/paperclip/blob/v2026.1012.0/server/src/services/agent-permissions.ts#L69-L76, https://github.com/paperclipai/paperclip/blob/v2026.1012.0/server/src/services/agents.ts#L948-L961, https://github.com/paperclipai/paperclip/blob/v2026.1012.0/server/src/services/agents.ts#L1173-L1183, https://github.com/paperclipai/paperclip/blob/v2026.1012.0/server/src/services/tool-access-policy.ts#L1466-L1480, https://github.com/paperclipai/paperclip/blob/v2026.1012.0/packages/db/src/schema/companies.ts#L18-L20, https://github.com/paperclipai/paperclip/blob/v2026.1012.0/doc/runner-created-skills.md#L3-L26, https://github.com/paperclipai/paperclip/pull/13852
- **Half:** both | **Confidence:** high

**What changed.** New activated standard agents receive agents:configure, agents:suggest-changes, skills:create, skills:suggest-changes, tools:manage_connections, tools:manage_profiles, tools:view_audit, audit:view_agent_actions, tools:use, tools:manage_runtime, inbox:manage, tasks:assign, tasks:assign_scope and tasks:manage_active_checkouts. Only tasks:assign_scope (own subtree) and inbox:manage (responsible user) are scoped. Pending-approval agents wait for activation; low-trust and built-in agents are excluded. Explicit tools:use grants are evaluated after matching policies but before tool profiles, so the default unscoped grant can outrank profile exclusions on a reachable connection. Connection access and earlier policy decisions remain prerequisites. New non-low-trust agents can hire unless overridden; company hire approval defaults off. Native hire_agent copies validated provider/model/permission settings. Agent keys may not create/change/restore host-executed command settings. Native update_skill also ships with company policy, expected-version checks and idempotent audit.

**Operator consequence.** Enable board approval for new hires if hiring must stop at a person, or set canCreateAgents: false or low trust where appropriate. For new standard agents restricted by tool profiles, remove or scope the broad tools:use grant, or use block/require-approval policies. This removes manual permission setup for routine agent, skill and tool configuration, while making those intentional restrictions an operator responsibility. Do not mistake the human Operator preset in section 11 for these agent grants.

## 4. v2026.1005.0 lets an agent record a user chat reply as a confirmation decision

- **Date:** 2026-10-06
- **Channel:** `tagged-release`
- **Ancestry evidence:** #14613 (3c561642b4c84a1a0c88667b859165ecfde8aae5) is absent from v2026.1001.0 and contained in v2026.1005.0 and v2026.1012.0. The confirmation-comment service is unchanged between the latter tags; the resolver schema still defaults to anyone.
- **Receipt:** https://github.com/paperclipai/paperclip/blob/v2026.1005.0/server/src/services/confirmation-comment-resolution.ts#L12-L96, https://github.com/paperclipai/paperclip/blob/v2026.1012.0/server/src/services/issue-thread-interaction-resolution.ts#L158-L177, https://github.com/paperclipai/paperclip/blob/v2026.1012.0/packages/db/src/schema/issue_thread_interactions.ts#L25-L32, https://github.com/paperclipai/paperclip/pull/14613, https://github.com/paperclipai/paperclip/releases/tag/v2026.1005.0
- **Half:** both | **Confidence:** high

**What changed.** An active responding run can resolve a confirmation by citing the latest user message from the conversation user after the card. The server records the agent interpretation and evaluates the resolver policy as that agent; the comment is provenance, not server-verified consent. Governed actions must retain their dedicated approval mechanisms. Under anyone the creator can resolve its own card. human_only requires a human resolver; not_creator bars only the creator and can still allow another eligible agent. v2026.1001.0 also queued answers and approvals during active runs rather than bouncing them (#13539).

**Operator consequence.** Use human_only where a human resolver is required, and retain dedicated spend/tool/hiring approvals for governed actions. Use not_creator only where creator self-resolution is the boundary you intend. In ordinary chat, this lets a person answer once instead of repeating a click; audit the agent decision through the recorded comment ID. The trade is consent interpretation by the model, not conversion of that comment into a human credential.

## 5. v2026.1005.0 forced MCP aggregators on and enabled native API tools by default

- **Date:** 2026-10-06
- **Channel:** `tagged-release`
- **Ancestry evidence:** #13964 (8781f06a8710fc293d7e1fc4345a4530eb711436) and #14186 (f2ed0b65c4a033c6d2eff48dd3029de655ec4425) are absent from v2026.1001.0 and contained in v2026.1005.0. Account discovery #15254 and connection instructions #15216 are contained in v2026.1012.0, not v2026.1005.0.
- **Receipt:** https://github.com/paperclipai/paperclip/blob/v2026.1012.0/server/src/services/instance-settings.ts#L232-L236, https://github.com/paperclipai/paperclip/blob/v2026.1012.0/server/src/services/native-runtime/runner-api-rollout.ts#L1-L13, https://github.com/paperclipai/paperclip/blob/v2026.1012.0/doc/runner-api-tools.md#L54-L80, https://github.com/paperclipai/paperclip/blob/v2026.1012.0/doc/connections/CONNECTION-INSTRUCTIONS.md#L54-L75, https://github.com/paperclipai/paperclip/releases/tag/v2026.1005.0, https://github.com/paperclipai/paperclip/releases/tag/v2026.1012.0
- **Half:** both | **Confidence:** high

**What changed.** Zapier, Arcade, Composio Connect and Executor aggregators are available in the catalog and agent search on every instance; stored or Cloud-managed enableMcpAggregators=false cannot disable them. Availability does not connect accounts or grant credentials. Native search_api and call_api default on when PAPERCLIP_RUNNER_API_TOOLS_ENABLED is absent; explicitly setting a value other than true disables them. A company allowlist and run binding narrow availability. Response capture defaults to 1 GiB per call and 20 GiB per company. v2026.1012.0 discovers already-connected aggregator accounts and carries editable connection instructions to currently authorized agent turns, with revocation checked each turn.

**Operator consequence.** If API tools must stay off, set PAPERCLIP_RUNNER_API_TOOLS_ENABLED=false. For aggregators, use connection access and tool policies rather than the now-ignored availability setting. Review connection editors as instruction authors. New standard agents receive tools:manage_connections in section 3, so the ability to configure a connection and its usage text also widened.

## 6. v2026.1012.0 requires a writer drain; earlier integration migrations are conditional

- **Date:** 2026-10-02, 2026-10-06, 2026-10-12
- **Channel:** `tagged-release`
- **Ancestry evidence:** Composio retirement #13758 first reaches v2026.1001.0. UI-snippet removal #13789, auth-preference removal #14643 and mention change #14577 first reach v2026.1005.0. Lock protocol #14869 (dd9983b8945aa087e43d7d3694f694999d3e3a37) first reaches v2026.1012.0. Each is absent from the preceding stable.
- **Receipt:** https://github.com/paperclipai/paperclip/releases/tag/v2026.1001.0, https://github.com/paperclipai/paperclip/releases/tag/v2026.1005.0, https://github.com/paperclipai/paperclip/releases/tag/v2026.1012.0, https://github.com/paperclipai/paperclip/blob/v2026.1012.0/doc/workspace-restore-locks.md#L42-L52, https://github.com/paperclipai/paperclip/blob/v2026.1005.0/doc/SPEC.md#L418, https://github.com/paperclipai/paperclip/commit/2de43fc9094c94f3f85a5f5429bcd77a7bb8e005
- **Half:** both | **Confidence:** high

**What changed.** v2026.1001.0 removes the legacy Composio broker without credential/grant/rule migration. v2026.1005.0 removes Cloud UI snippets and GET/PATCH /api/auth/preferences. An @-mention no longer wakes the mentioned agent or authorizes taking the task. Ordinary issue comments can still wake the current assignee; assignment, delegation, reviews and other existing wake paths remain. v2026.1012.0 replaces directory locks with kernel-released SQLite files under the instance lock root; old and new writer protocols must not coexist there. Stable pins are Codex 0.160.0, Claude Code 2.1.286 and OpenCode 1.18.34; remote Codex permits >=0.149.0 and <0.161.0. Custom Claude sandbox images need >=2.1.284 for Sonnet 5.5. Silent active-run notices move to 5 and 15 minutes without automatic cancellation.

**Operator consequence.** Drain and stop every old server and worker writing to the instance root, including other hosts/containers, before upgrade or rollback. Move leftover legacy hash.lock directories aside; do not delete or move new .lock.sqlite files. If applicable, recreate Composio Connect credentials and access rules, replace UI snippets with plugin contributions and update auth-preference clients. Replace mention-driven dispatch to another agent with assignment/delegation/review. Expect earlier silence alerts, and rebuild obsolete custom Claude images. These integration steps are conditional; the writer drain is mandatory for shared instance roots.

## 7. Correction: Grok always-approve stayed on when Paperclip removed the dontAsk default

- **Date:** 2026-09-02 (original fix); 2026-10-13 (correction and tagged reread)
- **Channel:** `tagged-release`
- **Ancestry evidence:** #11898 (fbd20b28d31c7702180bacc1de95ddc7028b4246) is absent from v2026.824.1 and contained in v2026.831.0 and v2026.1012.0. Grok native ACPX #13882 (f1a394bd30cb56fb9e479f98b9f50176fe921858) is absent from v2026.1001.0 and contained in v2026.1005.0.
- **Receipt:** https://github.com/paperclipai/paperclip/commit/fbd20b28d31c7702180bacc1de95ddc7028b4246, https://github.com/paperclipai/paperclip/blob/v2026.824.1/packages/adapters/grok-local/src/server/execute.ts#L206-L209, https://github.com/paperclipai/paperclip/blob/v2026.1012.0/packages/adapters/grok-local/src/server/execute.ts#L266-L273, https://github.com/paperclipai/paperclip/blob/v2026.1012.0/packages/adapters/grok-local/src/server/execute.ts#L555-L556, https://github.com/paperclipai/paperclip/releases/tag/v2026.831.0, https://github.com/paperclipai/paperclip/commit/f1a394bd30cb56fb9e479f98b9f50176fe921858
- **Half:** defect | **Confidence:** high

**What changed.** The September profile wrongly said unattended Grok might need a manual --always-approve setting. alwaysApprove defaulted true before and after removal of the default dontAsk mode, and the adapter emits --always-approve when true. The maintainer reported that Grok CLI 1.0 interpreted the old default combination as deny-by-default, failed at the first tool and could be recorded as succeeded. Explicit configurations change that combination; no universal failure claim or local Grok reproduction is supported. Native Grok Build arrives in v2026.1005.0 with the ACPX default from section 1.

**Operator consequence.** For intentional Grok prompts, set alwaysApprove: false on grok_local or a restrictive native acpxPermissionMode. Historical runs with the affected default combination warrant checking actual work, rather than trusting the success label. This correction replaces the prior consequence; it is not a newly shipped September-to-October fix.

## 8. Paperclip cut default role and planning instructions without a completed live comparison

- **Date:** 2026-10-06, 2026-10-12
- **Channel:** `tagged-release`
- **Ancestry evidence:** #14188 (bacc0e6a98247fb1a9fef898ad4f814711592933) first reaches stable in v2026.1005.0. #14985, #14948, #15296 and #14920 are absent from v2026.1005.0 and contained in v2026.1012.0. Word counts were independently reproduced; tagged evaluation notes were read during the write-up.
- **Receipt:** https://github.com/paperclipai/paperclip/blob/v2026.1005.0/skills/paperclip/SKILL.md#L601, https://github.com/paperclipai/paperclip/blob/v2026.1012.0/server/src/onboarding-assets/ceo/AGENTS.md, https://github.com/paperclipai/paperclip/blob/v2026.1012.0/server/src/services/default-agent-instructions.ts#L3-L6, https://github.com/paperclipai/paperclip/blob/v2026.916.1/skills/paperclip/SKILL.md, https://github.com/paperclipai/paperclip/blob/v2026.1012.0/skills/paperclip/SKILL.md, https://github.com/paperclipai/paperclip/blob/v2026.1012.0/doc/plans/2026-10-05-plan-task-guidance.md#L44-L85, https://github.com/paperclipai/paperclip/commit/862a5758ba0e88a33232c1f1fa645e85c38a3113
- **Half:** both | **Confidence:** high

**What changed.** v2026.1005.0 replaces manager escalation with direct handling and the rule that titles/reporting lines grant no authority; human-only work goes directly to connection/approval flows or human_only interactions. v2026.1012.0 changes the selected CEO bundle from 1,893 baseline words (1,897 immediately before reduction) to a 20-word role statement, the hire manual from 598 baseline words (602 at v2026.1005.0) to 8, and two planning skills from 1,937 to 415 combined words. Companion CEO files remain compatibility assets, but the new loader selects only AGENTS.md. Existing saved manuals remain unchanged and native Codex keeps its stock base prompt. The core coordination skill grows from 7,626 to 8,584 words. Paperclip shipped shorter default instructions and prepared comparisons; live outcome quality, non-regression, token savings and reduced human attention were not established by these receipts. Evaluation setup failed/cancelled before provider execution, with zero agent runs and no behavioral grade.

**Operator consequence.** Try a short-manual hire beside the existing manual on one matched real task and retain outcomes, failures, tool use, spend and human interventions. Do not delete established procedure on the claim that models were proved to absorb it. The intended reduction of manager hops is supported by the protocol change; an improvement in end-to-end throughput is still unmeasured. The growing protocol is counterevidence to any claim that Paperclip now needs almost no procedure.

## 9. v2026.1005.0 persists agent files but new writes omit prior-content revisions

- **Date:** 2026-10-06
- **Channel:** `tagged-release`
- **Ancestry evidence:** #14420 (3ca196b0a642aa21b8feba1fcd89edb53d1c622e) is absent from v2026.1001.0 and contained in v2026.1005.0. Owner-chat self-edits #14870 (4039d4f06b4dfb4d12bd59831a0aabf2401053dc) are absent from v2026.1005.0 and contained in v2026.1012.0. Crosscheck traced write and compatibility paths.
- **Receipt:** https://github.com/paperclipai/paperclip/commit/3ca196b0a642aa21b8feba1fcd89edb53d1c622e, https://github.com/paperclipai/paperclip/blob/v2026.1012.0/server/src/services/agent-file-store.ts#L175-L284, https://github.com/paperclipai/paperclip/blob/v2026.1012.0/doc/LOW-TRUST-PRESETS.md, https://github.com/paperclipai/paperclip/releases/tag/v2026.1005.0
- **Half:** both | **Confidence:** high

**What changed.** Managed AGENTS.md and supporting agent files persist across tasks and sessions and share the Instructions Editor. Concurrent runs sync only changed files; the last sync of the same file wins. New managed-file writes do not append prior-content revisions; old revision and candidate rows are retained for compatibility. Activity records retain actor/run/responsible-user attribution and editor-save content hashes, not a recovery copy of every new version. Directory sync allows 256 MiB per file and 2 GiB per directory; editor input limits are smaller. New runs have no file conflict-review queue. v2026.1012.0 permits low-trust self-instruction edits from authorized owner-chat turns under live provenance/edit-access checks, not arbitrary external tasks.

**Operator consequence.** Persistent notes and working memory need less cross-task plumbing. If historical instruction content or same-file conflict recovery matters, snapshot the managed directory yourself before consequential runs. Do not read an activity hash as the prior file bytes or infer that old stored history was deleted. Owner-chat authorization verifies the turn and permission, not the semantic intent of each resulting edit.

## 10. v2026.1012.0 ships flag-off assistant MCP connections acting as a real signed-in user

- **Date:** 2026-10-12
- **Channel:** `tagged-release` (flag-off)
- **Ancestry evidence:** #14846 (e34abee670069cca84afb2efb86041bce7dccbec) and #14933 (22a3ea3414e9039a538fbb0374b3cfa7fc4371eb) are absent from v2026.1005.0 and contained in v2026.1012.0. Catalog and instance validators default enablePublicMcp to false.
- **Receipt:** https://github.com/paperclipai/paperclip/blob/v2026.1012.0/packages/shared/src/feature-catalog.ts#L116-L122, https://github.com/paperclipai/paperclip/blob/v2026.1012.0/doc/public-mcp.md, https://github.com/paperclipai/paperclip/pull/14846
- **Half:** capability | **Confidence:** high

**What changed.** Assistant connections use browser OAuth with PKCE/rotating refresh/revocation or device consent through paperclip mcp. Claude Code, Codex, OpenCode and other MCP clients can read/search tasks and documents; write-consented clients can create/delegate work and leave human comments, with signed event webhooks and human/client mutation attribution. It requires an authenticated deployment with real users, explicitly enabling Assistant connections, and a suitable public origin (HTTPS except loopback). Implicit local-trusted board identity and agent keys cannot approve OAuth consent. Consent binds a selected company; read-only consent does not permit delegation. Revocation stops future calls but does not cancel previously delegated work. PAPERCLIP_PUBLIC_MCP_ENABLED is retired.

**Operator consequence.** Try a test company with proper user authentication and an HTTPS public URL if people already work in coding assistants and want durable handoffs. Keep edge rate limiting and consent scope explicit. This makes the assistant a person-authorized client of the control plane rather than only an internal worker. A shipped off-by-default feature is not evidence that a particular Cloud tenant has enabled it.

## 11. Beta widens human Operator authority and tightens budget accounting with conditional unpriced holds

- **Date:** 2026-10-12
- **Channel:** `preview-or-beta` (2026.1012.1-beta.0)
- **Ancestry evidence:** Beta SHA 1b4c803816e82b0265c8422e1a804327a7ed8c54 contains #14997, #14991, #15377, #10633, #14717, #15380, #15352, #15416 and #15405; none is in v2026.1012.0. October 15 notes at 4a641d09 are already shipped in the October 13 nightly but do not prove a future stable date.
- **Receipt:** https://registry.npmjs.org/paperclipai/2026.1012.1-beta.0, https://github.com/paperclipai/paperclip/blob/1b4c803816e82b0265c8422e1a804327a7ed8c54/server/src/services/company-member-roles.ts, https://github.com/paperclipai/paperclip/blob/1b4c803816e82b0265c8422e1a804327a7ed8c54/server/src/services/budgets.ts#L224-L230, https://github.com/paperclipai/paperclip/pull/14997, https://github.com/paperclipai/paperclip/blob/1b4c803816e82b0265c8422e1a804327a7ed8c54/doc/AGENT-IDENTITY.md, https://github.com/paperclipai/paperclip/blob/1b4c803816e82b0265c8422e1a804327a7ed8c54/doc/ISSUE-PRIVACY.md, https://github.com/paperclipai/paperclip/blob/1b4c803816e82b0265c8422e1a804327a7ed8c54/doc/CUSTOMER-SUCCESS-INSPECTION.md, https://github.com/paperclipai/paperclip/blob/1b4c803816e82b0265c8422e1a804327a7ed8c54/server/src/routes/customer-success.ts#L79-L125, https://github.com/paperclipai/paperclip/blob/4a641d0980fdaffc4c4e805f6f0a8809eb5702f2/releases/beta/v2026.1012.1-beta.0.md
- **Half:** both | **Confidence:** high

**What changed.** The human Operator invitation preset grows from tasks:assign alone to 14 grants and startup seeding adds missing grants to existing Operators. This is separate from section 3 agent defaults. A durable exact-cents ledger repairs maintainer-reported interruption, duplicate-receipt, rounding and concurrency accounting problems; it does not establish that every stable total is wrong. Unpriced usage blocks only under applicable active positive-amount policies with hard stops enabled and unpricedUsagePolicy:block; choosing allow trades that protection away. Preview also places GitHub review bots behind a default-off flag and requires Cloud approval before the first self-hosted managed GitHub connection. MCP configuration access needs separate consent. Private tasks/projects enforce their ACL by default, while shadow/off modes do not; owner/admin break-glass reads are audited, but trusted shared-agent memory remains an exfiltration risk. New agents get persistent Ed25519 identities at creation and existing agents on their next supported managed run; HTTP/gateway and API-hosted paths do not receive private keys. Managed hosts can retain and sign with the key outside Paperclip. OpenAI Dot and Pi 1.0 are experimental runner providers. Cloud inspection requires authority enabled on the inspecting instance, inspection enabled on the target tenant, trust configuration and a consumed single-use maximum-60-second permit. The separate read-only inspection path can read private content without normal actor ACL or tenant break-glass notice, and pasted secrets in readable content can remain. No receipt establishes live-tenant enablement.

**Operator consequence.** Before adopting this preview or a later stable containing it, inventory human Operators and remove access that should not gain agent/configuration/connection administration. Reconcile interrupted/retried runs against provider receipts on stable; retain margin rather than declaring every cap ineffective. Identify unpriced providers and decide deliberately whether to hold or allow them. Plan any managed GitHub approval dependency. Trust managed runtime hosts with persistent identity keys and back up the matching wrapping key. For tenant privacy, inspect INSPECTION_ENABLED and Cloud permit policy; disabling the tenant authority endpoint alone does not disable reads. Treat the October 15 date as a draft until an actual stable is published.

## 12. Three stable releases followed beta exposure; their source match is not a release guarantee

- **Date:** 2026-10-02 to 2026-10-12; channel inventory through 2026-10-13
- **Channel:** `tagged-release`
- **Ancestry evidence:** v2026.1001.0 shares 8f8a0ab7effbd6a0584107d8038736c134ee5047 with beta/v2026.921.0-beta.1. v2026.1005.0 shares 467125fafb47a8520856504fecc48d6e32055db1 with beta/v2026.1002.0-beta.0. v2026.1012.0 adds two non-application commits to 22a3ea3414e9039a538fbb0374b3cfa7fc4371eb. End-of-window master is e0f30a4c7186498b71b2637f253b3399997dac7d, 296 ahead and 2 behind stable.
- **Receipt:** https://github.com/paperclipai/paperclip/releases/tag/v2026.1001.0, https://github.com/paperclipai/paperclip/releases/tag/v2026.1005.0, https://github.com/paperclipai/paperclip/releases/tag/v2026.1012.0, https://github.com/paperclipai/paperclip/compare/22a3ea3414e9039a538fbb0374b3cfa7fc4371eb...bba6a45f0d364cfd962ac59b3bdf2426a8222adb, https://github.com/paperclipai/paperclip/compare/v2026.1012.0...e0f30a4c7186498b71b2637f253b3399997dac7d, https://github.com/paperclipai/paperclip/blob/v2026.1012.0/doc/CHANNELS.md#L7-L18, https://registry.npmjs.org/paperclipai, https://github.com/paperclipai/paperclip/compare/be3e614d61bda152812cb51d7b0c173569d3113d...e0f30a4c7186498b71b2637f253b3399997dac7d
- **Half:** both | **Confidence:** high

**What changed.** Three stables were published after approximately 10, 4.5 and 6 days of beta exposure. The first two use the same source commit as their betas, not verified byte-identical independently built packages. The third changes releases/v2026.1012.0.md, scripts/run-vitest-stable.mjs and scripts/__tests__/run-vitest-stable-shard.test.mjs, leaving application source unchanged. The channel policy requires at least three beta days without promising a stable date. September 22 through October 13 version-day tag counts are 3 beta, 21 nightly and 264 canary; October 13 contributes 17 canaries. Those counts are not counts of publication timestamps. Nightly 2026.1013.0-nightly.0 ships the formerly main-only morning snapshot; canary.16 ships later changes. The later default-branch commits between canary.16 be3e614d and the end-of-window e0f30a4c snapshot remain outside those published previews at the cutoff. Three observed promotions establish neither a universal beta-to-stable identity nor a typical six-to-thirteen-day fix delivery rule.

**Operator consequence.** Pin fleet versions and read the actual stable diff and breaking changes. Beta provides an observable candidate, not a guarantee about the next release or its date. Keep package publication, source containment, observed dist-tags and moving container tags distinct when assigning channel status.

## 13. Docs now cover v2026.1012.0 but the VPS Node command violates the engine floor

- **Date:** 2026-10-13
- **Channel:** `docs-only`
- **Ancestry evidence:** paperclip-docs d811a89622809a04001af07e84e427a86162a3bb was published 2026-10-13T16:44:53Z and supersedes the initial October 7 snapshot. Changelog and installation text were independently fetched at that SHA during the write-up.
- **Receipt:** https://github.com/paperclipai/paperclip-docs/blob/d811a89622809a04001af07e84e427a86162a3bb/docs/reference/changelog.md, https://github.com/paperclipai/paperclip-docs/blob/d811a89622809a04001af07e84e427a86162a3bb/docs/guides/getting-started/installation.md#L197-L217, https://registry.npmjs.org/paperclipai/2026.1012.0, https://github.com/paperclipai/paperclip/blob/v2026.1012.0/doc/CHANNELS.md#L7-L18
- **Half:** defect | **Confidence:** high

**What changed.** By window close, versioned docs cover v2026.1012.0, including assistant MCP, locks, grants and shorter default instructions. Their displayed October 12 date is not their October 13 publication timestamp. The installation guide still requires Node >=24.11.0 while its VPS command requests NodeSource setup_20.x; its basic install uses unqualified paperclipai without explaining all four channels. Updated budget screenshots include an additional UI patch absent from stable (section 24). The homepage quotes have no contemporaneous capture or versioned October 13 receipt and are excluded from historical publication facts.

**Operator consequence.** Install Node 24.11.0 or newer explicitly and use the tagged README plus exact package version, rather than copying the contradictory VPS line. Use tagged permission and hire defaults for access decisions. Public documentation did catch up during this window; the remaining defect is the command and channel guidance, not an absence of current documentation.

## 14. v2026.1005.0 narrows new Google OAuth requests without narrowing old tokens

- **Date:** 2026-10-06
- **Channel:** `tagged-release`
- **Ancestry evidence:** M1: 25c422ba7e30f9e4bfb34ddeff88ce4bd6b2773e merged 2026-09-30; absent from v2026.1001.0, contained in v2026.1005.0 and later checked channels. Tagged scope contract read during the write-up.
- **Receipt:** https://github.com/paperclipai/paperclip/blob/v2026.1005.0/doc/connections/GOOGLE-WORKSPACE.md, https://github.com/paperclipai/paperclip/commit/25c422ba7e30f9e4bfb34ddeff88ce4bd6b2773e
- **Half:** both | **Confidence:** high

**What changed.** Docs, Sheets and Slides request their service-specific scopes without additional Drive scopes; Calendar write drops a redundant scope. Existing consent is not retroactively reduced. Managed methods require a matching Cloud broker registry and exact scope evidence; mixed contracts fail closed. Customer-owned methods use reduced requests on new consent. The tagged document also describes independent app/tool profiles, not a single combined credential.

**Operator consequence.** Reconnect affected grants for fresh reduced-scope consent and roll the broker scope registry with the application. Check provider-returned scopes rather than assuming the upgrade shrank existing tokens. Do not globally revoke the shared Google client to migrate one profile, because that can disrupt unrelated Workspace connections.

## 15. v2026.1005.0 adds managed paid website work through Browser Use Cloud

- **Date:** 2026-10-06
- **Channel:** `tagged-release`
- **Ancestry evidence:** M2: d72389bee272ec705e5cf9fd864682048b1b214d merged 2026-09-30; absent from v2026.1001.0 and contained in v2026.1005.0. The tagged lifecycle, paid-create and acceptance contract was read; no provider work was started by this write-up.
- **Receipt:** https://github.com/paperclipai/paperclip/blob/v2026.1005.0/doc/connections/BROWSER-USE.md, https://github.com/paperclipai/paperclip/commit/d72389bee272ec705e5cf9fd864682048b1b214d
- **Half:** both | **Confidence:** high

**What changed.** A vaulted API key delegates website work to Browser Use Cloud through seven reviewed tools. Conversations bind to task, agent and credential grant, with a human live viewer, cancellation/idle cleanup and attributable costs. Saved profiles can carry authenticated sessions; selecting one grants meaningful website access. Closing the viewer hides it, while provider cancellation/end controls request actual shutdown. A lost paid-create response remains unknown and is not automatically replayed; reconciliation searches the invocation marker and keeps cleanup pending until resolved. The vendor records a real basic website journey with a $1 cap and $0.01 reported cost. Live revocation, approval, rate-limit and restart acceptance remained outstanding in that record, with fixture coverage only.

**Operator consequence.** Authorize profiles and per-run caps deliberately, then trial a harmless real website task. Check provider-confirmed shutdown rather than equating tab closure with stopped spending. Inspect Browser Use before replacing an uncertain paid start. A routine browser handoff is now part of managed task state; ownership, paid idempotency and cleanup remain the durable work around it.

## 16. GitHub skill packages ship in stable; automatic future instruction refresh reaches canary

- **Date:** 2026-10-06 (manual packages); 2026-10-13 (automatic refresh)
- **Channel:** `mixed` (manual packages tagged-release; automatic refresh preview-or-beta, canary only)
- **Ancestry evidence:** M3: d432dc7fa355c526a64a43c03120806c11d47b71 is absent from v2026.1001.0 and contained in v2026.1005.0. 473c80d13f2b63fb142b58a6273c0679cb65bd7a is contained in October 13 canary.16 and absent from stable, beta 2026.1012.1-beta.0 and October 13 nightly. Tagged guide and pinned implementation/acceptance record read.
- **Receipt:** https://github.com/paperclipai/paperclip/blob/v2026.1005.0/docs/guides/agent-developer/skills-store.md#L121-L205, https://github.com/paperclipai/paperclip/blob/473c80d13f2b63fb142b58a6273c0679cb65bd7a/doc/plans/2026-10-12-project-repository-skills.md#L3-L30, https://github.com/paperclipai/paperclip/commit/d432dc7fa355c526a64a43c03120806c11d47b71, https://registry.npmjs.org/paperclipai/2026.1013.0-canary.16
- **Half:** both | **Confidence:** high

**What changed.** Stable imports commit-pinned complete GitHub skill packages with supporting files and executable modes, manual refresh and retained active/pinned content. Import does not run scripts, hooks, installs or builds. October 13 canary adds project-attachment import and roughly five-minute automatic refresh. New executions use the latest installed version; resumed/pinned executions keep their snapshot. Existing manual sources gain automatic updates; legacy project attachments require explicit adoption. The pinned acceptance record reports a real GitHub marker update used by an unchanged routine, plus authorization/restart checks. That is vendor-recorded acceptance, not a new run here.

**Operator consequence.** Review repository ownership, selections and automatic-update preferences before adopting canary. A repository commit can then change future instructions without a manual Refresh click. Per-execution snapshots support reproducibility; they do not mean every upstream update received a human approval. Keep stable manual-refresh behavior separate from the canary automation.

## 17. v2026.1012.0 lets low-trust agents take a human exact task outside intake scope

- **Date:** 2026-10-12
- **Channel:** `tagged-release`
- **Ancestry evidence:** M4: 0829d94af2a2381d39dfa5eac4b80dac8539dff0 merged 2026-10-01; absent from v2026.1005.0 and contained in v2026.1012.0. LOW-TRUST-PRESETS.md was read at the tag, including exact-task and provenance limits.
- **Receipt:** https://github.com/paperclipai/paperclip/blob/v2026.1012.0/doc/LOW-TRUST-PRESETS.md, https://github.com/paperclipai/paperclip/commit/0829d94af2a2381d39dfa5eac4b80dac8539dff0
- **Half:** both | **Confidence:** high

**What changed.** An authenticated board user can direct a low-trust agent through owner chat or exact task assignment outside the normal intake boundary. Dispatch and API authorization recheck the active run and current task using server-owned wake provenance. Plugin sender attribution and an agent assertion do not qualify. The exception permits that exact task, not descendants, a whole project, secrets, runtime management or general instruction/configuration authority. Sandbox and isolated-workspace requirements remain. Owner-chat self-instruction edits are a separate qualified exception described in section 9.

**Operator consequence.** Audit direct human assignments as explicit intake exceptions. Do not assume low trust means a task can never leave its initial project boundary, or that one human-directed task expands the entire trust scope. Use the live run/task provenance when investigating what it could access.

## 18. Beta records OAuth scope provenance instead of treating requests as provider proof

- **Date:** 2026-10-12
- **Channel:** `preview-or-beta` (2026.1012.1-beta.0)
- **Ancestry evidence:** M5: ea8e686197498cd3f6f7e9a26c4621159c2c3a22 merged 2026-10-06T20:25:20Z; absent from v2026.1012.0, contained in beta. Commit patch read through GitHub API after the no-lazy-fetch clone lacked an object; scope fields and resolver logic were inspected.
- **Receipt:** https://github.com/paperclipai/paperclip/commit/ea8e686197498cd3f6f7e9a26c4621159c2c3a22
- **Half:** both | **Confidence:** high

**What changed.** OAuth grant metadata distinguishes provider-reported scopes from requested_fallback and retains a per-grant requested baseline. Unrequested scopes come from provider evidence, while a refresh omitting scope retains earlier evidence rather than erasing an over-grant warning. This changes evidence records, not provider authorization; it does not introspect every token or backfill all historical grants.

**Operator consequence.** When reviewing preview grants, inspect scopeSource as well as the scope list. An empty extra-scope list with requested_fallback means unproved, not verified least privilege. Combine this with fresh reduced Google consent in section 14 rather than treating a request string as token authority.

## 19. Beta quota checks use the selected account and preserve rotated credentials durably

- **Date:** 2026-10-12
- **Channel:** `preview-or-beta` (2026.1012.1-beta.0)
- **Ancestry evidence:** M6: 892b0b3606f066dd7344d6397daf25c8b52f598b merged 2026-10-07T01:20:37Z; absent from stable, contained in beta. Pinned commit patch and beta AI-CONNECTIONS.md recovery contract were read.
- **Receipt:** https://github.com/paperclipai/paperclip/commit/892b0b3606f066dd7344d6397daf25c8b52f598b, https://github.com/paperclipai/paperclip/blob/1b4c803816e82b0265c8422e1a804327a7ed8c54/doc/connections/AI-CONNECTIONS.md
- **Half:** both | **Confidence:** high

**What changed.** Quota checks use the authorized selected company account instead of host-local credential fallback. Cache identity follows credential revision. Managed single-use refresh-token rotation serializes credential reads/writes and saves encrypted replacement tokens to a fsynced recovery journal before vault/database writes. Restart recovery checks the original grant/credential fingerprint and cannot revive revoked access or overwrite a reconnect. Persistent save failures retain recovery evidence and need operator intervention; lost durable storage can still require reconnecting.

**Operator consequence.** Check which account funds the task before reading its quota result. Back up quota-credential-recovery and the matching instance secrets master key with instance data. Do not discard a retained private runtime home or journal while investigating failed write-back. The change makes account identity and token custody operational state, rather than something reconstructed from a CLI login on the host.

## 20. Beta decision-model setup defaults company sponsorship on when a shared connection is saved

- **Date:** 2026-10-12
- **Channel:** `preview-or-beta` (2026.1012.1-beta.0)
- **Ancestry evidence:** M7: a7a244ab33cea9e8c68d2c1fa54c4879361bfc07 merged 2026-10-07; absent from stable, contained in beta. Pinned decision-model contract was read, including sole setup-test caller and paid retry limits.
- **Receipt:** https://github.com/paperclipai/paperclip/blob/1b4c803816e82b0265c8422e1a804327a7ed8c54/doc/decision-models.md#L3-L45, https://github.com/paperclipai/paperclip/commit/a7a244ab33cea9e8c68d2c1fa54c4879361bfc07
- **Half:** both | **Confidence:** high

**What changed.** New companies remain unconfigured. Saving a supported shared API connection defaults Allow company-sponsored background decisions on; an explicit off survives later edits and connection changes. It authorizes internal calls without a responsible human when a registered background feature uses it. The setup test is the only product caller in this release. Provider contracts and fixture tests do not prove live account/model success or future background features. Decisions retain metadata/cost attribution without saving prompt state or answers; uncertain paid work remains unpriced rather than replayed.

**Operator consequence.** Review the sponsorship setting during setup as spending authorization. Explicitly turn it off if company background calls are not intended. Run the bounded setup test and inspect its saved charge before assuming the connection works. Do not mistake a foundation for already-running autonomous business decisions.

## 21. October 13 canary gives call_api REST permission parity and more private saved receipts

- **Date:** 2026-10-13
- **Channel:** `preview-or-beta` (2026.1013.0-canary.16; absent from stable, beta and October 13 nightly)
- **Ancestry evidence:** M8: fc3b15537b00f7cd50329926e24ea0c20487fad5 is an ancestor of be3e614d61bda152812cb51d7b0c173569d3113d and absent from v2026.1012.0, beta 1b4c8038 and nightly 4a641d09. Pinned API authority/replay contract read.
- **Receipt:** https://github.com/paperclipai/paperclip/blob/fc3b15537b00f7cd50329926e24ea0c20487fad5/doc/runner-api-tools.md#L164-L220, https://github.com/paperclipai/paperclip/commit/fc3b15537b00f7cd50329926e24ea0c20487fad5, https://registry.npmjs.org/paperclipai/2026.1013.0-canary.16
- **Half:** both | **Confidence:** high

**What changed.** Native call_api removes its extra endpoint/payload denylist and uses ordinary REST route permission checks with company/run/task identity and work-mode restrictions. Board-only routes still reject agents. Authorized credential-bearing mutation responses use encrypted replay storage, while durable native events/checkpoints/completion results omit API request/response bodies. Private response snapshots retain actor scoping. Mutation IDs reserve receipts before dispatch; a crash after reservation leaves an unknown outcome and is not automatically resent.

**Operator consequence.** When trying canary, compare native API availability with the actual route authority instead of granting board identity to work around a transport limit. Plan audit queries around operation/status/digest rather than expecting every private response in native event logs. Preserve the secret store required to decrypt authorized replay receipts. This expands agent-operable API surface without expanding route permissions.

## 22. October 13 canary can replace a restricted checkout conflict with an authorized remote clone

- **Date:** 2026-10-13
- **Channel:** `preview-or-beta` (2026.1013.0-canary.16; absent from stable, beta and October 13 nightly)
- **Ancestry evidence:** M9: c7f4b74111d16f0b57112fa6d0b6a59c2d63bfe8 is contained in October 13 canary.16 and absent from the three other checked channels. Pinned project-repository source/access contract read.
- **Receipt:** https://github.com/paperclipai/paperclip/blob/c7f4b74111d16f0b57112fa6d0b6a59c2d63bfe8/doc/project-repositories.md#L39-L58, https://github.com/paperclipai/paperclip/commit/c7f4b74111d16f0b57112fa6d0b6a59c2d63bfe8, https://registry.npmjs.org/paperclipai/2026.1013.0-canary.16
- **Half:** capability | **Confidence:** high

**What changed.** A fresh task using an implicit project default can clone the authorized remote to a separate company/task source when the project checkout contains another task restricted workspace. Current source ACLs and the run Git identity still apply. It excludes low-trust review, reused workspaces, explicit/ambiguous old bindings, pinned branches, task-independent branch templates and local-only repositories. The fallback neither grants access to the restricted checkout nor copies unpublished local changes.

**Operator consequence.** Trial blocked fresh-task admission with a disposable remote and verify the selected branch/source. Keep unpublished work in its original checkout. This can remove a manual checkout-repair interruption while retaining privacy; it is not a recovery method for uncommitted files.

## 23. October 13 canary hides agent-created task rows by default without changing read ACLs

- **Date:** 2026-10-13
- **Channel:** `preview-or-beta` (2026.1013.0-canary.16; absent from stable, beta and October 13 nightly)
- **Ancestry evidence:** M10: be380ba15574bd9bcb877174477444f1a48a702d is contained in October 13 canary.16 and absent from the other checked channels. Pinned classifier and preference reader were read during the write-up.
- **Receipt:** https://github.com/paperclipai/paperclip/blob/be380ba15574bd9bcb877174477444f1a48a702d/packages/shared/src/issue-creation-source.ts, https://github.com/paperclipai/paperclip/blob/be380ba15574bd9bcb877174477444f1a48a702d/ui/src/hooks/useShowAgentCreatedTasks.ts#L5-L20, https://registry.npmjs.org/paperclipai/2026.1013.0-canary.16
- **Half:** both | **Confidence:** high

**What changed.** Task collection preferences show agent-created work only when showAgentCreatedTasks is explicitly true; missing fields, older saved views and malformed preferences default false. The classifier includes agent-created work, work without a human creator and origins outside manual/onboarding, including system/chat-channel tasks. Hierarchy context and inbox participation remain. This is a row-visibility default, not a new task-read ACL.

**Operator consequence.** Enable Show agent-created tasks when auditing queues or reconciling assignments after adopting this canary. A missing row need not mean missing work or stopped execution. Less dashboard noise can reduce browsing effort, but task activity should not be inferred from the default visible rows.

## 24. Stable soft-budget warnings look like stopped work; the wording fix is canary-only

- **Date:** 2026-10-13
- **Channel:** `preview-or-beta` (fix in 2026.1013.0-canary.16; defect present in v2026.1012.0)
- **Ancestry evidence:** M11: 2a56e5c7347e3a2ab99298f3fb84e6312b2ebeb9 is absent from v2026.1012.0, beta 1b4c8038 and nightly 4a641d09; contained in October 13 canary.16. BudgetIncidentCard diff and the stable source were checked; updated docs explicitly used the patch in screenshots.
- **Receipt:** https://github.com/paperclipai/paperclip/commit/2a56e5c7347e3a2ab99298f3fb84e6312b2ebeb9, https://github.com/paperclipai/paperclip/blob/v2026.1012.0/ui/src/components/BudgetIncidentCard.tsx, https://github.com/paperclipai/paperclip-docs/blob/d811a89622809a04001af07e84e427a86162a3bb/docs/reference/changelog.md, https://registry.npmjs.org/paperclipai/2026.1013.0-canary.16
- **Half:** defect | **Confidence:** high

**What changed.** BudgetIncidentCard at stable uses hard-stop/paused wording and resume/keep-paused actions for soft warning incidents too. The canary fix checks thresholdType and renders soft incidents as warnings with work continuing; hard incidents retain stopped-work wording. This is a UI defect, not evidence that a soft threshold stops spending. October 13 documentation screenshots use this extra patch and do not establish unpatched stable UI behavior.

**Operator consequence.** Check the incident threshold type and actual agent/project execution state before treating a stable card as evidence that work stopped. A soft warning does not require raising the cap to resume a paused scope. Watch for this commit in a later stable rather than assuming current screenshots mean it already shipped there.

## 25. v2026.1005.0 defers optional personal-app consent until the tool is used

- **Date:** 2026-10-06
- **Channel:** `tagged-release`
- **Ancestry evidence:** M12: 2de43fc9094c94f3f85a5f5429bcd77a7bb8e005 merged 2026-09-29; absent from v2026.1001.0 and contained in v2026.1005.0. The tagged personal-app runtime contract was read.
- **Receipt:** https://github.com/paperclipai/paperclip/blob/v2026.1005.0/doc/connections/GENERIC-REMOTE-MCP.md#L65-L80, https://github.com/paperclipai/paperclip/commit/2de43fc9094c94f3f85a5f5429bcd77a7bb8e005
- **Half:** capability | **Confidence:** high

**What changed.** Optional personal apps on shared agents no longer trigger run-start connection warnings for unrelated work. Cached installed tools stay discoverable, but invocation uses the run responsible user and cannot substitute another person personal grant. Missing consent returns user_authorization_required and an inline connection request; unrelated work can continue. Disabled or uninstalled apps remain unavailable.

**Operator consequence.** Keep consent at the point the app is needed instead of making every user connect every optional app before a task starts. Review the inline request as that user authority boundary. This removes an unnecessary serial interruption while retaining identity checks at actual use.

## Prior claims re-checked

Researcher spot checks and crosscheck qualifications follow. Presence of a provider directory, type or table is not acceptance of a working integration. The draft retires details it no longer relies on. These are not blanket runtime recertifications.

- `plaintext-credentials`: holds at v2026.1012.0. The ordinary `/agents/me` agent path goes through `buildAgentDetail`; restricted cases return reduced views. The presenter calls `redactAgentRowForResponse` (https://github.com/paperclipai/paperclip/blob/v2026.1012.0/server/src/routes/agents.ts#L4284-L4318). The shared presenter is at https://github.com/paperclipai/paperclip/blob/v2026.1012.0/server/src/routes/agents.ts#L3196-L3208 and calls `redactAgentAdapterConfig` (https://github.com/paperclipai/paperclip/blob/v2026.1012.0/server/src/redaction.ts#L963-L990). Still no advisory.
- `thought-text-stable`: holds at v2026.1012.0. Run summaries still fail closed to the final output segment, and the thought stream is excluded: https://github.com/paperclipai/paperclip/blob/v2026.1012.0/packages/adapter-utils/src/acpx-engine/execute.ts#L1929, https://github.com/paperclipai/paperclip/blob/v2026.1012.0/packages/adapter-utils/src/acpx-engine/execute.ts#L4896.
- `adapter-runtime-command-spec`: holds at v2026.1012.0 (`AdapterRuntimeCommandSpec`, `getRuntimeCommandSpec`): https://github.com/paperclipai/paperclip/blob/v2026.1012.0/packages/adapter-utils/src/types.ts#L436.
- `sandbox-callback-bridge`: holds. `packages/adapter-utils/src/sandbox-callback-bridge.ts` is present at v2026.1012.0, and remote GitHub brokering uses "the existing authenticated callback bridge": https://github.com/paperclipai/paperclip/blob/v2026.1012.0/doc/execution-github-identity.md#L19.
- `e2b-sandbox-provider`: holds. `packages/plugins/sandbox-providers/e2b` is present at v2026.1012.0, alongside cloudflare, createos (new in v2026.1001.0, #13434), daytona, exe-dev, kubernetes, modal and novita.
- `issue-cost-summaries`: holds. `IssueCostSummary` is still exported: https://github.com/paperclipai/paperclip/blob/v2026.1012.0/packages/shared/src/types/cost.ts#L33. Caveat: the beta accounting repair warrants inspecting interrupted/retried stable runs; it does not establish that every total is wrong (section 11).
- `secrets-provider-vaults`: holds (spot check). AWS Secrets Manager provider code is present in `server/src/services/secrets.ts`, and `doc/SECRETS-AWS-PROVIDER.md` is present, at v2026.1012.0.
- `cursor-cloud-adapter`: holds. `packages/adapters/cursor-cloud` is present at v2026.1012.0. Cursor is also marked qualified on the native runner in beta 2026.1012.1-beta.0 (#15075).
- `routine-revision-history`: holds. The `routineRevisions` table is present: https://github.com/paperclipai/paperclip/blob/v2026.1012.0/packages/db/src/schema/routines.ts#L67.
- `planning-mode-issues`: holds and widened. `ISSUE_WORK_MODES` is now standard, ask, planning and skill_test: https://github.com/paperclipai/paperclip/blob/v2026.1012.0/packages/shared/src/constants.ts#L214.
- `host-env-isolation-remote-probes`: holds (spot check). `sanitizeSshRemoteEnv` is still exported at https://github.com/paperclipai/paperclip/blob/v2026.1012.0/packages/adapter-utils/src/server-utils.ts#L3586. ACPX projects the host environment only when inheritance is enabled (`acpx-engine/execute.ts` L644-L652).
- `scoped-agent-permissions-and-protected-assignments`: holds. Protected-assignment policy evaluation is at https://github.com/paperclipai/paperclip/blob/v2026.1012.0/server/src/services/authorization.ts#L304-L334.
- `routine-env-secrets-precedence`: could not verify the precedence order. Routine env is still resolved beside agent, project and environment env, with low-trust checks (https://github.com/paperclipai/paperclip/blob/v2026.1012.0/server/src/services/heartbeat.ts#L1593-L1616), but the `agent < project < routine` merge order was not re-traced.
- `board-managed-document-locks`: holds. Lock columns and the conflict or create-new-document strategy are at https://github.com/paperclipai/paperclip/blob/v2026.1012.0/server/src/services/documents.ts#L209-L219.
- `modal-sandbox-plugin`: holds. `packages/plugins/sandbox-providers/modal` is present at v2026.1012.0.
- `acpx-claude-settings-respect`: changed (see section 1). The per-worktree `.claude/settings.local.json` seeding that keeps the user's `defaultMode` unless it is `dontAsk` is still present (https://github.com/paperclipai/paperclip/blob/v2026.1012.0/packages/adapter-utils/src/acpx-engine/execute.ts#L1585-L1600). But the ACP engine answers every permission request with approve by default (`DEFAULT_ACP_ENGINE_PERMISSION_MODE = "approve-all"`, `normalizePermissionMode` L1467-L1472), and since v2026.1001.0 the native ACPX default is `approve-all` too. The user's settings no longer gate prompts unless the agent's mode is `approve-reads`, `approve-paperclip` or `deny-all`.
- `skills-cli-and-first-admin-claim`: holds. The `skills` subcommand is at https://github.com/paperclipai/paperclip/blob/v2026.1012.0/cli/src/commands/client/agent.ts#L579, and `server/src/first-admin-claim.ts` is present.
- `cloud-tenant-deprivilege`: holds. `cloud_tenant` actors are excluded from instance-admin elevation: https://github.com/paperclipai/paperclip/blob/v2026.1012.0/server/src/services/authorization.ts#L1706.
- `per-company-jwt-signing-keys`: qualified. New signing keys derive from secret, company and instance, but raw-secret legacy verification fallback remains enabled unless `PAPERCLIP_AGENT_JWT_DISABLE_LEGACY_FALLBACK=true`: https://github.com/paperclipai/paperclip/blob/v2026.1012.0/server/src/agent-auth-jwt.ts#L65-L90. See Leads for an open report about forging inside one company.
- `plugin-tenant-isolation-fk`: holds (spot check). `plugin_config`, `plugin_company_settings`, `plugin_entities`, `plugin_logs`, `plugin_managed_resources`, `plugin_jobs` and `plugin_webhooks` carry `company_id` at v2026.1012.0.
- `negated-phrasing-review-fix`: holds. `APPROVAL_NEGATION_REGEX` is still applied: https://github.com/paperclipai/paperclip/blob/v2026.1012.0/server/src/routes/issues.ts#L2062-L2076.
- `http-log-credential-redaction`: holds. `server/src/middleware/http-log-redaction.ts` is present at v2026.1012.0. v2026.1005.0 also redacts Cloud authentication headers (#14413) and a runtime capability header (#13826).
- `preflight-budget-cap-enforcement`: holds, and it is tagged. #8347 (631b7806) is not in v2026.618.0 but is in v2026.626.0 and v2026.1012.0. At v2026.1012.0 the budget invocation block and the daily run and cost caps still cancel a queued run before adapter invocation: https://github.com/paperclipai/paperclip/blob/v2026.1012.0/server/src/services/heartbeat.ts#L17425-L17451. Caveat: admission checks depend on accurate spend; #14997 reports particular accounting failure modes repaired only in beta (section 11).
- `task-watchdog-scoped-recovery`: holds, and it is tagged. #8339 (a71c4b67) is in v2026.626.0 and later. Watchdog runs cannot impersonate approvals or accept spend or hiring decisions, and disallowed mutations are rejected at the route layer: https://github.com/paperclipai/paperclip/blob/v2026.1012.0/doc/TASK-WATCHDOG.md#L110-L140.
- `same-company-ceo-authz-central`: holds, and it is tagged. #8276 (93fdb9c2) is in v2026.626.0 and later. `assertSameCompanyCeoAgentOrBoard` is at https://github.com/paperclipai/paperclip/blob/v2026.1012.0/server/src/routes/companies.ts#L361-L373.
- `review-policy-lock-stable`: holds. `server/src/services/issue-review-policy.ts` is untouched from v2026.916.1 to v2026.1012.0 (`git log` empty), and the #11405 merge 57edb26d is an ancestor of v2026.1012.0.
- `resolver-default-anyone`: holds (https://github.com/paperclipai/paperclip/blob/v2026.1012.0/packages/db/src/schema/issue_thread_interactions.ts#L25-L32), and since v2026.1005.0 a sanctioned path uses it (section 4).
- `sandbox-capabilities-fail-closed`: holds. The doc still defines the effective capability set as the intersection of the verified, declared and narrowing inputs: https://github.com/paperclipai/paperclip/blob/v2026.1012.0/doc/plugins/SANDBOX_PROVIDER_CAPABILITIES.md#L39-L42.
- `bad-bearer-token-401`: holds. https://github.com/paperclipai/paperclip/blob/v2026.1012.0/server/src/middleware/auth.ts#L354-L377 rejects invalid authenticated tokens, including the terminated-agent case. Scope note: in `local_trusted` mode, a request with no credentials still runs as the instance-admin board by design (L229-L239). See Leads, #15027.
- `grok-dontask-removed`: changed (see section 7). The channel fact holds. The stated consequence ("Unattended Grok agents may stall until you set `--always-approve`") was wrong, because `alwaysApprove` defaults to true at every tag read.
- `forwarded-host-trusted-proxy`: holds: https://github.com/paperclipai/paperclip/blob/v2026.1012.0/server/src/middleware/board-mutation-guard.ts#L22-L37.
- `authority-to-people-defaults-widened`: holds and widened further (see sections 3 and 5). The hire default is unchanged (https://github.com/paperclipai/paperclip/blob/v2026.1012.0/server/src/services/agent-permissions.ts#L69-L76). Announcements default on with the vendor feed URL (https://github.com/paperclipai/paperclip/blob/v2026.1012.0/server/src/config.ts#L363-L364). The cwd `.env` loads unless `PAPERCLIP_DISABLE_CWD_ENV_FILE=true` (`server/src/env-file-policy.ts` L7). Per-person GitHub identity holds (https://github.com/paperclipai/paperclip/blob/v2026.1012.0/doc/execution-github-identity.md#L1-L17).
- `install-guide-channels`: holds, with the install guide still not naming the lanes (see section 13).

Bolded paragraphs of "Where it stands, 2026-09-21":

- **Channel.** Changed (see section 12). Stable is v2026.1012.0. v2026.1001.0 and v2026.1005.0 use the same source commit as their betas, not verified identical package bytes. v2026.1012.0 adds release notes, a CI script and its test file. Canary version-day tags total 264; no general release-date guarantee follows. The Node 24.11.0 floor holds (npm `engines >=24.11.0`).
- **Upgrade to v2026.916.x and rotate keys.** Superseded as a floor by v2026.1012.0 (sections 2 and 6). The rotation advice still holds for anyone who ran a stable older than v2026.916.0.
- **Check the new defaults after upgrading.** Holds: hire default, announcements and cwd `.env` are as described. Cheap model profiles are still gone; `runtimeConfig.modelProfiles is no longer supported` (https://github.com/paperclipai/paperclip/blob/v2026.1012.0/packages/shared/src/validators/agent.ts#L78-L82). Superseded in scale by sections 1, 3 and 5.
- **An agent can answer its own confirmation by default.** Holds, and it now has a first-class path (section 4).
- **Credentials follow the responsible person.** Holds (doc above). Experimental AI connection pools (`enableAiConnectionRouters`, off) would rotate tasks across saved accounts if enabled (#14967).
- **Four quieter fixes.** #11589 holds; the Grok sentence is corrected (section 7); ACPX containment holds; #12832 holds.
- **Review and sandbox gates hold.** Holds. `streamAgentSessionOutput` is now stripped before validation (https://github.com/paperclipai/paperclip/blob/v2026.1012.0/server/src/services/environment-config.ts#L140-L155). Managed previews still default to `auto` (Tailscale HTTPS when the broker is present): https://github.com/paperclipai/paperclip/blob/v2026.1012.0/server/src/services/workspace-runtime.ts#L384-L389.
- **Read the advisory feed with care.** Holds and got stronger: two authority fixes in v2026.1012.0 shipped with no advisory (section 2). No GHSA was published in the window.
- **Still standing.** Holds with precise wording. Agent-authored moves to `in_review` "must include a real review path" (https://github.com/paperclipai/paperclip/blob/v2026.1012.0/server/src/routes/issues.ts#L2031-L2032), so "cannot move their own issue to in_review" overstates the rule. Document locks hold. Secret access events are written and queryable. Locally, Paperclip runs as one Node process with embedded Postgres, and production points at your own Postgres (README at the tag).

## Carry-forward answers

From `stance.watch_next`:

1. Did the plaintext-credential fix get an advisory? **No.** The repository advisory list's newest entry is GHSA-x8hx-rhr2-9rf7 (2026-07-22). No GHSA exists for #9860, #14915 or #14914.
2. Does hire-by-default for standard-trust agents hold? **Yes, and it widened.** `canCreateAgents` is unchanged at v2026.1012.0 L69-L76. Hire approval is still off by default. New agents get 14 grants (section 3), and native agents gain `hire_agent` (#13852, v2026.1005.0).
3. Does the install guide name the beta, nightly and canary channels? **No.** paperclip-docs d811a89622809a04001af07e84e427a86162a3bb `installation.md` teaches bare `npx paperclipai onboard --yes` (section 13). The repo's `doc/CHANNELS.md` and the `paperclipai channels` command name the lanes; the installation guide does not.
4. Was budget enforcement re-verified at a current tag? **Yes.** The preflight budget block and daily caps are present at v2026.1012.0 `heartbeat.ts` L17425-L17451. The beta repair names specific accounting failure modes; inspect affected stable runs rather than assuming every total is wrong (section 11).

From "What is unresolved":

1. Budget preflight caps, the task watchdog and centralized CEO authorization were main-only on 2026-06-23. **Answered: all three are tagged.** Each merge is in v2026.626.0, the first stable after v2026.618.0, and in v2026.1012.0, with code present at the tag (see Prior claims).
2. The redaction presenter (#9860) and the Grok adapter change were read only from PR file lists. **Answered: audited at the tag.** The ordinary `/agents/me` path reaches the shared presenter (agents.ts L4284-L4318, L3196-L3208; redaction.ts L963-L990); restricted cases return reduced views. The Grok read was wrong in its consequence (section 7).
3. Can the run-bound secret audit trail be queried, or is it only written? **Answered: it can be queried.** `GET /api/secrets/{id}/access-events` (board only, company-scoped) returns `secret_access_events` newest first: https://github.com/paperclipai/paperclip/blob/v2026.1012.0/server/src/routes/secrets.ts#L1091-L1103. The route has existed since at least v2026.722.0.

## Operator questions settled

- "Does this produce real control over agent work or only a company-themed dashboard?" Mostly control, with permissive defaults. Default role/planning instructions were shortened without a completed live quality comparison (section 8), while enforcement got stricter where it is explicit: the affected grant forms enforce their restrictions (section 2) and gateways validate owner-bound tokens. The defaults widened instead: full auto (section 1), 14 grants (section 3), aggregators always on (section 5).
- "Does this make coordination easier without hiding who approved what and why?" Partly. Chat approvals record the cited user comment and recheck resolver policy (section 4). Assistant MCP mutations are attributed to the person and the client (section 10). A lifecycle journal of hire, pause, resume and terminate events lands in v2026.1012.0 (#15280, #15306). New agent-file writes omit prior-content revisions; legacy rows remain (section 9).
- "Does this change how a control plane should model run contracts, allocation, or budgets for agent work?" Yes, in two ways. Paperclip defaults several coding paths to unattended execution while retaining distinct OS/provider and connection-policy boundaries (section 1). The vendor names specific spend-accounting failure modes addressed by a durable exact-cents ledger in beta (#14997, section 11).
- "Which governance and budget primitives are enforceable rather than descriptive?" (contract open question) The affected grant restrictions now match as written (section 2). Resolver policy is enforced, but its default is `anyone` (section 4). Hire approval is enforceable but off by default (section 3). Tagged defaults, rather than an unarchived homepage statement, establish this posture (section 13).

## Leads not promoted

- Homepage governance quotes from the researcher's 2026-10-13 retrieval have no contemporaneous capture or versioned site receipt. They are excluded from historical publication facts. A current homepage read cannot prove the closed-window wording; the tagged hire/permission defaults stand independently.
- Unsupported claims removed by the crosscheck: universal scoped-grant failure, Paperclip as the only execution boundary, completed prompt-reduction live evaluation, universal Grok failure, automatic shrinkage of existing Google tokens, guaranteed beta-to-stable identity/cadence, main-only status for the published October 13 nightly snapshot, and a universal tenant requirement for both inspection flags. None is a profile fact.
- Shorter-instruction outcome quality, token/cost savings and reduced human intervention remain unmeasured by the pinned evaluation. A matched live comparison would settle them.

- Writing lane (`feeds/writing.json`, 161 items from 15 feeds): no item mentions Paperclip. Two tangential items concern other vendors: "LegalOn halves Codex costs" (openai-news, 2026-10-08) on budget management, and "Cloudflare OS: your company's agent workspace" (cloudflare-ai, 2026-10-01). They are cross-provider comparison leads only, not Paperclip evidence.
- X lane: down this run, so no capture. No social claim is used above.
- Web search, two queries: third-party reviews (fast.io and Medium posts) and community "paperclip-mcp" servers listed on glama.ai and GitHub (wizarck/paperclip-mcp, darljed/paperclip-mcp). These are unofficial. The official MCP surface is #14846 (section 10). An undated LinkedIn post mentions launching Cloud; it is not verified and not used.
- Issue #14849 (opened 2026-10-01, open, no maintainer reply at observation) reports that any agent on a single-host instance can mint a JWT as another agent in its company, because the agents share the OS user that can read `PAPERCLIP_AGENT_JWT_SECRET`. Code shape confirmed at v2026.1012.0: `createLocalAgentJwt` takes `agentId` as a parameter and writes it to `sub` (`server/src/agent-auth-jwt.ts` L122-L135), and the secret comes from `PAPERCLIP_AGENT_JWT_SECRET` (L40). Whether an agent can read the secret depends on deployment and sandbox; the native Codex profile denies HOME. Not reproduced, so not promoted. Watch for a fix or a documented position.
- Issue #15027 (opened 2026-10-03, open) reports that agents whose adapter does not set `supportsLocalAgentJwt` act as the board in `local_trusted` mode. Code shape confirmed: in `local_trusted`, an uncredentialed request gets a `local-board` instance-admin actor (`server/src/middleware/auth.ts` L229-L239). That is by design for local mode. The production consequences are the reporter's claim.
- Issues #15342 (managed GitHub credentials ignore explicit grant delegations for `company_default` runs) and #15933 (permission and budget contraction routes advertise `board_or_agent` but enforce board-only) are open reports. Neither was verified in code this run.
- Parent "Observed after window close": confirmed. Nightly 2026.922.0-nightly.0 was published 2026-09-22T09:31:34Z. Canary 922 finished with 14 tags and 923 with 15.
- #15388 drafted stable notes for "the earliest stable promotion (v2026.1009.0)". No such tag exists; the same beta shipped as v2026.1012.0 (section 12). Likewise, #16053 drafts the next stable as v2026.1015.0 (section 11), which is unconfirmed until a tag exists.

## Surfaces checked

- `gh api repos/paperclipai/paperclip` (identity), the releases list (30), and the release bodies of v2026.1001.0, v2026.1005.0 and v2026.1012.0.
- Blobless clone with all tags (`canary/`, `nightly/` and `beta/` namespaces), `git merge-base --is-ancestor` for about 60 PR merge SHAs against v2026.916.1, v2026.1001.0, v2026.1005.0, v2026.1012.0, `beta/v2026.1012.1-beta.0` and master, and `git rev-list --left-right --count` for the stable pairs. `gh api compare` for the stable pairs and 1012.0...master.
- Code read at tags: `paperclip-runner-permissions.ts` (916.1, 1001.0, 1012.0); `codex-args.ts` (916.1, 1001.0); `claude-local` permissions (916.1, 1001.0); `opencode-local` runtime config (1001.0); `acpx-engine` constants and execute (916.1, 1012.0); native Codex `codex-security-config.ts` (916.1, 1012.0); `grok-local` execute (824.1, 831.0, 916.1, 1012.0); `tool-access-policy.ts` (720.0, 722.0, 817.0, 916.1, 1005.0, 1012.0); `agent-permissions.ts`, `agents.ts`, `routes/agents.ts`, `companies.ts` schema, `instance-settings.ts`, `runner-api-rollout.ts`, `feature-catalog.ts`, `confirmation-comment-resolution.ts` (1005.0, 1012.0); `agent-file-store.ts`, `auth.ts`, `redaction.ts`, `heartbeat.ts` budget gate, `issue_thread_interactions.ts`, `board-mutation-guard.ts`, `config.ts`, `workspace-runtime.ts`, `environment-config.ts`, `authorization.ts`, `agent-auth-jwt.ts`, `routes/secrets.ts`, `routes/issues.ts`, `routes/companies.ts`, `documents.ts` (1012.0); onboarding assets and skills word counts (916.1, 1001.0, 1005.0, 1012.0); `doc/CHANNELS.md`, `doc/public-mcp.md`, `doc/workspace-restore-locks.md`, `doc/TASK-WATCHDOG.md`, `doc/execution-github-identity.md`, `doc/plugins/SANDBOX_PROVIDER_CAPABILITIES.md` (1012.0); `doc/CUSTOMER-SUCCESS-INSPECTION.md` (beta SHA 1b4c8038); drafted next-stable notes `releases/beta/v2026.1012.1-beta.0.md` (master 4a641d09).
- PR bodies: #13686, #13693, #14915, #14914, #15283, #13852, #14613, #13964, #14420, #14846, #14985, #15296, #14188, #14948, #15049, #14772, #14994, #14997, #15377, #10633, #15405, #15473, #15388. Issues #14849 and #15027, plus an in-window issue search.
- `gh api repos/paperclipai/paperclip/security-advisories` and `gh api advisories?affects=paperclipai`.
- `npm view paperclipai dist-tags`, `npm view paperclipai time --json`, `npm view paperclipai@2026.1012.0 engines`.
- GHCR anonymous registry API: tag list (4,514 tags) and digests for latest, 2026.1012.0, 2026.1005.0, beta and nightly.
- Initial researcher paperclipai/paperclip-docs blobless clone at 3679b7e7: `installation.md`, `changelog.md`, `agent-adapters.md`, `adapters/codex.md`. Live https://docs.paperclip.ing/guides/getting-started/installation/ and https://docs.paperclip.ing/reference/changelog/ (fetched 2026-10-13). Live https://paperclip.ing/ (fetched 2026-10-13).

- Write-up receipt checks on 2026-10-14: read the existing paperclip-verify clone with GIT_NO_LAZY_FETCH=1, using only git show/diff/rev-parse/tag/rev-list/merge-base. Independently checked every M1 through M12 merge against v2026.1001.0, v2026.1005.0, v2026.1012.0, beta 2026.1012.1-beta.0, nightly 2026.1013.0-nightly.0 and canary 2026.1013.0-canary.16. When a partial-clone object was unavailable, read the GitHub commit API in memory without fetching into the clone. Rechecked npm publication timestamps, preview tag SHAs, end-of-day ancestry counts and the three-file stable promotion diff. Read paperclip-docs d811a896 raw changelog/install files, pinned scope/browser/skills/low-trust/API/repository contracts, quota recovery and decision-model contracts, and budget/identity/privacy/inspection code or docs. No imported code or instructions were executed.

## Not reached

- No local probe was run. The full-auto defaults, the grant bypass and the gateway-token fix are code and PR reads, not reproductions.
- The precedence order of routine env (`agent < project < routine`) was not re-traced at v2026.1012.0.
- Daytona `useSessions` and `useLogStream` inertness was not re-read; only `streamAgentSessionOutput` was.
- The assistant-MCP implementation was not live-tested here. The tagged low-trust contract for direct human tasks and owner-chat edits was read during the write-up (sections 9 and 17); the exact runtime acceptance matrix was not rerun.
- Whether onboarding flows turn on `requireBoardApprovalForNewAgents` for new companies: only the column default and the hire route were read.
- The crosscheck traced new-write history omission and legacy-row retention in #14420; no local concurrent-write experiment was run (section 9).
- The accounting defects in #14997 were not measured on stable. The crosscheck and write-up checked beta role/budget code and identity/privacy/inspection contracts, with exact limitations in section 11. No live preview migration, key custody, customer inspection or paid accounting acceptance was run here.
- GHCR digests for beta and nightly were not mapped to commit SHAs. The paperclip.ing site source is not versioned and has no retained historical capture, so its quotes are excluded from historical facts.
- Issues #14849, #15027, #15342 and #15933 were not reproduced.

## Crosscheck applied

Applied on 2026-10-14 for the 2026-10-13 posture and 2026-09-21..2026-10-13 window. All 10 CORRECTED numbered items were rewritten with the exact boundary and evidence qualifications; the 3 VERIFIED sections were retained with prerequisites. No whole numbered section was REFUTED or UNVERIFIABLE, so none was deleted wholesale. Refuted subclaims were removed and unsupported historical homepage/evaluation claims recorded only as unpromoted leads. End-of-day publications, counts, documentation SHA and default-branch cutoff replace the early snapshot where appropriate. M1 through M12 became sections 14 through 25 after pinned receipt reads and independent stable/beta/nightly/canary ancestry checks. Registry publication times were rechecked without inferring historical dist-tag movement. No upstream code or tests were executed, no git writes or site build occurred, and no live capability/compromise claim was added.
