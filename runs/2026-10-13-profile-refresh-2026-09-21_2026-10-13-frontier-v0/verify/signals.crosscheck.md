# Independent signal crosscheck

Run: 2026-10-13-profile-refresh-2026-09-21_2026-10-13-frontier-v0
Issue: 2026-09-21_2026-10-13-weekly
Window: 2026-09-21 through 2026-10-13 inclusive, UTC
Cutoff: 2026-10-13T23:59:59Z
Checked: 2026-10-14

## Result and method

14 signals retained: 6 unchanged, 8 corrected, 0 dropped. In the structured
result, kept means unchanged; corrected is a separate count. No signal core
failed verification after narrowing. All 24 distinct finding IDs exist, match
their frontmatter IDs and source, and support the retained signal. Those files
were read, not treated as substitutes for primary receipts.

Every one of the 168 original external receipt URLs across the signal packet,
thread check and carry-forward was independently retrieved through its pinned
raw file, GitHub API record, registry, dated page or archive capture. Added
receipts were fetched too. The inventory below covers 186 distinct original
or final URLs, including removed receipts. 75 inventory entries also matched
the corresponding existing clone's blob byte for byte. A successful HTTP
response alone was not treated as claim support.

Release publication timestamps below come from GitHub release objects.
Registry publication timestamps are reported separately. Commit timestamps,
PR merge timestamps, release dates, tag names and retrieval dates are not
interchangeable. All current/latest/stable/main labels in the edited artifacts
now refer to the issue cutoff. October 14 merges and package promotions do not
silently update this historical issue.

Checks used existing clones under
/Users/c3po/co/frontier/tmp/refresh-2026-10-13/clones, read-only git show/log/
rev-parse/merge-base commands, provider APIs and raw files. No git writes,
clone creation, package installation, site build, provider-code execution,
exploit, replay, deployment or productivity experiment was performed. Suggested
acceptance tests in why_action_bearing remain suggestions.

Initial retrieval failures were resolved rather than hidden: authenticated
GitHub API access retrieved the Temporal commit record after unauthenticated
404/rate-limit responses. A generic tree-to-API conversion was wrong for the
Hermes dashboard subdirectory; the correct contents endpoint returned the
directory, and the final thread links its pinned __init__.py file. The original
directory URL was not declared broken merely because that conversion failed.

## Per-signal adjudication

### 1. 2026-10-13-codex-interactive-server-has-its-own-version

Verdict: kept unchanged.

Final title: Interactive Codex shares a server that can move beyond its CLI pin

Title and summary: The 0.157.0 release enables eligible interactive launches to share the background server. Tagged README and prepare_install.rs distinguish CLI selection, server package selection, inherited startup environment and eligible stable npm/Homebrew latest-following behavior. The CLI's exec dispatch remains separate. The experimental lifecycle caveat is retained.

Channel and dates: Tagged release. GitHub published 0.157.0 on 2026-09-25T02:31:06Z; 0.162.1 on 2026-10-09T19:44:51Z.

Action-bearing lines, in packet order:

1. The documented version commands, no-daemon baseline and autoUpdateEnabled setting support the proposed inventory and update hold.
2. README restart semantics support the credential/PATH advice; restarting retains the selected package.
3. The policy/configuration repair d570b363 is absent from stable 0.162.1 and present in alpha.1. Network/config and update-trace probes are proposed acceptance tests, not results.

Correction: None within the signal. The packet-wide cutoff note now bounds its channel labels.

Finding records checked:

- [2026-10-13-codex-interactive-codex-now-attaches-to-a-shared-background-app-server-by-default-from-0-157](../findings/2026-10-13-codex-interactive-codex-now-attaches-to-a-shared-background-app-server-by-default-from-0-157.md): exists; ID/source match; supports the retained mechanism and limits.
- [2026-10-13-codex-the-auto-started-background-server-can-update-itself-past-a-pinned-npm-or-homebrew-cli](../findings/2026-10-13-codex-the-auto-started-background-server-can-update-itself-past-a-pinned-npm-or-homebrew-cli.md): exists; ID/source match; supports the retained mechanism and limits.

Receipts independently opened (the retrieval inventory records hashes/routes):

- [Receipt 1](https://github.com/openai/codex/releases/tag/rust-v0.157.0)
- [Receipt 2](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/app-server-daemon/README.md#L1-L68)
- [Receipt 3](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/app-server-daemon/src/prepare_install.rs#L245-L338)
- [Receipt 4](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/cli/src/main.rs#L2360-L2372)
- [Receipt 5](https://github.com/openai/codex/commit/d570b3632b100e36f931797cdbdb8906d0fcafa8)

### 2. 2026-10-13-pi-coding-agent-native-mcp-and-tool-scripting

Verdict: kept unchanged.

Final title: Pi's CLI connects MCP servers and composes their tools in JavaScript

Title and summary: Commit 8562bcf and the 0.99.0/1.2.0 tagged MCP, codemode and CLI sources support native MCP, trust-gated project loading, stdio environment inheritance and SDK opt-in. Nested tool calls go through tool hooks, while codemode's classify/generateImages model path has separate session-credential handling. Exposure determines callability; hiding a tool is not an authorization boundary.

Channel and dates: Tagged release. 0.99.0 published 2026-09-29T17:21:54Z; 1.2.0 published 2026-10-12T23:03:53Z. The MCP commit is an ancestor of both.

Action-bearing lines, in packet order:

1. The MCP/codemode trial and SDK opt-in advice follow the tagged configuration contract.
2. Environment minimization, project trust and provider restrictions address distinct source paths; model calls are not misrepresented as tool-hook calls.
3. The exposure-qualified callable set supports inspecting tools rather than assuming a strict top-level list. Timing and accepted-work measurements remain experiments.

Correction: None within the signal. The existing caveats keep source behavior separate from measured savings.

Finding records checked:

- [2026-10-13-pi-coding-agent-mcp-is-built-into-the-cli-from-0-99-0-project-servers-wait-for-trust-stdio-servers-inherit](../findings/2026-10-13-pi-coding-agent-mcp-is-built-into-the-cli-from-0-99-0-project-servers-wait-for-trust-stdio-servers-inherit.md): exists; ID/source match; supports the retained mechanism and limits.
- [2026-10-13-pi-coding-agent-codemode-lets-the-model-script-tool-calls-the-tool-calls-stay-gated-its-model-calls-do-not](../findings/2026-10-13-pi-coding-agent-codemode-lets-the-model-script-tool-calls-the-tool-calls-stay-gated-its-model-calls-do-not.md): exists; ID/source match; supports the retained mechanism and limits.
- [2026-10-13-pi-coding-agent-tools-stopped-being-a-strict-allowlist-once-codemode-or-tool-search-is-in-the-list-1-0](../findings/2026-10-13-pi-coding-agent-tools-stopped-being-a-strict-allowlist-once-codemode-or-tool-search-is-in-the-list-1-0.md): exists; ID/source match; supports the retained mechanism and limits.

Receipts independently opened (the retrieval inventory records hashes/routes):

- [Receipt 1](https://github.com/earendil-works/pi/commit/8562bcf66a8eeefdf75ddd231ca9d7aa7d64f86e)
- [Receipt 2](https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/docs/mcp.md)
- [Receipt 3](https://github.com/earendil-works/pi/blob/v1.2.0/packages/mcp/src/transports/stdio.ts#L94)
- [Receipt 4](https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/core/agent-session.ts#L730-L760)
- [Receipt 5](https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/extensions/codemode/execute.ts#L740-L751)
- [Receipt 6](https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/docs/cli.md#L111-L138)
- [Receipt 7](https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/core/agent-session.ts#L1771-L1789)
- [Receipt 8](https://github.com/earendil-works/pi/blob/v1.2.0/packages/agent/src/agent-loop.ts#L708-L735)

### 3. 2026-10-13-eve-approved-calls-keep-requester-credentials

Verdict: corrected and retained.

Final title: Eve approvals stop lending the approver's credentials to the requester

Title and summary: The 0.78.0 release, 9559de83 diff and 0.79.0 HITL documentation support consent-only approval and requester-owned rechecks/dispatch. The independently fetched 0.71.3 release explicitly describes the prior rest-of-turn identity borrowing, supporting the through-0.71.2 boundary. The confirmed starting range remains 0.70.0, not an assertion about all earlier versions.

Channel and dates: Tagged release. 0.78.0 published 2026-10-13T01:47:36Z; cutoff stable 0.79.0 at 18:41:08Z contains the repair.

Action-bearing lines, in packet order:

1. The upgrade and mismatched-principal audit follow the identity repair and the distinct earlier turn-wide repair.
2. Breaking borrowed-credential workflows follows requester-owned dispatch. PR 4604 was not merged at cutoff, although it merged on 2026-10-14T17:48:55Z.
3. The two-identity denial test is the right proposed acceptance condition. It does not claim to test or repair queued-message timing.

Correction: Made stable and explicit-delegation status historical to the cutoff. Added the 0.71.3 release and PR 4604 API receipts.

Finding records checked:

- [2026-10-13-eve-approved-calls-ran-with-the-approver-s-identity-and-credentials-until-0-78](../findings/2026-10-13-eve-approved-calls-ran-with-the-approver-s-identity-and-credentials-until-0-78.md): exists; ID/source match; supports the retained mechanism and limits.

Receipts independently opened (the retrieval inventory records hashes/routes):

- [Receipt 1](https://github.com/vercel/eve/commit/9559de83b65e89c24172c2b9c1a80382033556aa)
- [Receipt 2](https://github.com/vercel/eve/releases/tag/eve%400.78.0)
- [Receipt 3](https://github.com/vercel/eve/blob/eve%400.79.0/docs/tools/human-in-the-loop.md#L257)
- [Receipt 4](https://github.com/vercel/eve/releases/tag/eve%400.71.3)
- [Receipt 5](https://api.github.com/repos/vercel/eve/pulls/4604)

### 4. 2026-10-13-eve-queued-consent-needs-a-newer-prompt

Verdict: corrected and retained.

Final title: A queued reply can approve a later Eve prompt; the repair was on main at cutoff

Title and summary: The 0.79.0 queue source lacks the new admission cutoff. Commit 0dea0ded records the hold's sequence and excludes older queued answers; its regression test was inspected without execution. GitHub PR 4749 records merged_at 2026-10-13T22:38:36Z, distinct from the commit timestamp one second earlier.

Channel and dates: Main-unreleased at cutoff. Absent from eve@0.79.0; ancestor of 80f15de21abb8a575d5bfdee333e72a9e7d1742c.

Action-bearing lines, in packet order:

1. Retaining a deliberate gate follows the source-derived stale-consent path; no live exploit is asserted.
2. The proposed pre-prompt versus post-prompt sequence targets precisely the added cutoff.
3. The retained default-steer caveat correctly avoids promoting a queue-path fix into universal timing closure.

Correction: Changed the title to say the repair was on main at cutoff and added the PR API receipt for the exact merge timestamp.

Finding records checked:

- [2026-10-13-eve-queued-approval-text-can-settle-a-prompt-that-did-not-exist-when-it-was-sent-the-fix-is](../findings/2026-10-13-eve-queued-approval-text-can-settle-a-prompt-that-did-not-exist-when-it-was-sent-the-fix-is.md): exists; ID/source match; supports the retained mechanism and limits.

Receipts independently opened (the retrieval inventory records hashes/routes):

- [Receipt 1](https://github.com/vercel/eve/commit/0dea0ded869be7db30ae90ed8072d29e6e57df61)
- [Receipt 2](https://github.com/vercel/eve/blob/eve%400.79.0/packages/eve/src/execution/session/input-queue.ts#L229-L244)
- [Receipt 3](https://api.github.com/repos/vercel/eve/pulls/4749)

### 5. 2026-10-13-omp-extensions-can-resolve-plan-review

Verdict: kept unchanged.

Final title: OMP extensions can revise a plan and answer its review

Title and summary: The release, d40b86cf diff, extension API and runner source support plan revision, execute resolution, idle reopening, execution tiers and first-answer-wins behavior. The project-trust shim returns true. The TypeScript release is not evidence of a shipped Rust successor.

Channel and dates: Tagged release v18.10.4 at 2026-10-13T19:38:04Z; d40b86cf is an ancestor. npm publication followed at 19:54:08.077Z.

Action-bearing lines, in packet order:

1. The two named extension methods support connecting remote/policy review to the existing decision.
2. Extension admission controls and ambient project loading support the human-only review advice; similarly named Pi APIs do not import Pi trust.
3. Simultaneous answers, revised plans and denied downstream calls are proposed tests. No review-quality or total-time result is inferred.

Correction: None within the signal.

Finding records checked:

- [2026-10-13-omp-18-10-4-lets-extensions-revise-and-execute-the-plan-review-while-tool-approvals-require](../findings/2026-10-13-omp-18-10-4-lets-extensions-revise-and-execute-the-plan-review-while-tool-approvals-require.md): exists; ID/source match; supports the retained mechanism and limits.
- [2026-10-13-omp-project-inputs-still-load-without-trust-approval-and-18-7-0-documented-that-design](../findings/2026-10-13-omp-project-inputs-still-load-without-trust-approval-and-18-7-0-documented-that-design.md): exists; ID/source match; supports the retained mechanism and limits.

Receipts independently opened (the retrieval inventory records hashes/routes):

- [Receipt 1](https://github.com/can1357/oh-my-pi/releases/tag/v18.10.4)
- [Receipt 2](https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/extensions.md#L555-L561)
- [Receipt 3](https://github.com/can1357/oh-my-pi/commit/d40b86cf7d6607fc349545ec67ed321023e53425)
- [Receipt 4](https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/extensibility/extensions/runner.ts#L1401-L1404)

### 6. 2026-10-13-openclaw-approval-binds-final-hook-arguments-in-beta

Verdict: kept unchanged.

Final title: OpenClaw's beta binds approval to a hook's final arguments

Title and summary: Both stable policy files accept trusted inline approval before ordinary hook transformation without the beta's final-argument check. Commit 34d07e7 isolates approved parameters and requires approval for replacement parameters. API comparisons find the fix absent from beta.1 and both stable lines, present in beta.2 and beta.3.

Channel and dates: Preview-or-beta. beta.2 published 2026-10-12T12:10:48Z; beta.3 on 2026-10-13T10:00:37Z. Stable 2026.10.3 and extended-stable 2026.8.35 do not contain the repair.

Action-bearing lines, in packet order:

1. Stable hook inventory and pin/removal advice follow the admitted-plugin attacker model.
2. The beta requireApproval migration and exact-final-parameter test match the repaired branches.
3. A containing stable or independently verified equivalent backport remains a future condition, not a version-number assumption.

Correction: None within the signal. Also confirmed the separate old ab5611f0 exec repair in both stable lines and absent from July 2026.7.35.

Finding records checked:

- [2026-10-13-openclaw-hooks-can-rewrite-approved-arguments-on-stable-binding-is-fixed-only-in-beta](../findings/2026-10-13-openclaw-hooks-can-rewrite-approved-arguments-on-stable-binding-is-fixed-only-in-beta.md): exists; ID/source match; supports the retained mechanism and limits.

Receipts independently opened (the retrieval inventory records hashes/routes):

- [Receipt 1](https://github.com/openclaw/openclaw/commit/34d07e7b0dc1b5f0ed54de67a9647d9e6b8c23de)
- [Receipt 2](https://github.com/openclaw/openclaw/blob/v2026.10.3/src/agents/agent-tools.before-tool-call.policy.ts#L303-L411)
- [Receipt 3](https://github.com/openclaw/openclaw/blob/v2026.8.35/src/agents/agent-tools.before-tool-call.policy.ts#L277-L405)
- [Receipt 4](https://github.com/openclaw/openclaw/blob/v2026.10.5-beta.3/src/agents/agent-tools.before-tool-call.policy.ts#L291-L436)

### 7. 2026-10-13-claude-code-mods-can-answer-permission-checks

Verdict: corrected and retained.

Final title: Claude mods join the permission chain before the classifier

Title and summary: The 2.1.287 release and archived official docs support released default-on mods, the ineffective old off switch, unsandboxed mod code and permission-chain participation before the classifier. The released sec-default source is deny-only. bf2323b3 adds ask and environment holds on main. Deny protection depends both on guard loading and on allowModsToOverrideDenyRules remaining false.

Channel and dates: Tagged release, with historical stable 2.1.287 and latest 2.1.296. Homebrew's pinned stable promotion and dated releases support the cutoff labels. Today's npm tags have advanced and were not backdated.

Action-bearing lines, in packet order:

1. Managed admission and disableSideloadFlags behavior are documented; guard repairs require a sufficiently new delivered build.
2. CLI safe mode or explicit command-line disableAllHooks avoids implying a user setting alone always wins project precedence. Built-in mods remain; tool rules do not confine arbitrary mod code.
3. A containing binary and mode-specific tests remain necessary. Public guard source alone is not proof of private binary enforcement.

Correction: Narrowed the exact default-on onset from 2.1.286 to established availability by 2.1.287; added the deny-override condition; made the disableAllHooks invocation explicit and scoped version labels to cutoff.

Finding records checked:

- [2026-10-13-claude-code-mods-ship-on-by-default-in-2-1-286-and-can-approve-tool-calls-deny-rules-hold-over-them](../findings/2026-10-13-claude-code-mods-ship-on-by-default-in-2-1-286-and-can-approve-tool-calls-deny-rules-hold-over-them.md): exists; ID/source match; supports the retained mechanism and limits.
- [2026-10-13-claude-code-unreleased-on-main-after-2-1-296-the-mods-guard-extends-to-ask-verdicts-and-pins-policy](../findings/2026-10-13-claude-code-unreleased-on-main-after-2-1-296-the-mods-guard-extends-to-ask-verdicts-and-pins-policy.md): exists; ID/source match; supports the retained mechanism and limits.

Receipts independently opened (the retrieval inventory records hashes/routes):

- [Receipt 1](https://github.com/anthropics/claude-code/releases/tag/v2.1.287)
- [Receipt 2](https://github.com/anthropics/claude-code/blob/2301018b1f61073c501a8e7a4813ef48c239163b/mods/sec-default/README.md)
- [Receipt 3](https://github.com/anthropics/claude-code/blob/2301018b1f61073c501a8e7a4813ef48c239163b/mods/sec-default/hooks/register.ts#L67-L114)
- [Receipt 4](https://github.com/anthropics/claude-code/blob/bf2323b3021c9d3db7a31e1e7d61068c3f704497/mods/sec-default/README.md)
- [Receipt 5](https://web.archive.org/web/20261012024958/https://code.claude.com/docs/en/plugins/mods/admin)
- [Receipt 6](https://web.archive.org/web/20261012012019/https://code.claude.com/docs/en/plugins/mods/overview)
- [Receipt 7](https://web.archive.org/web/20261012180805/https://code.claude.com/docs/en/permissions#extend-permissions-with-hooks)

### 8. 2026-10-13-claude-code-restricted-graders-need-late-tool-fix

Verdict: corrected and retained.

Final title: Restricted Claude graders now filter built-ins registered after launch

Title and summary: The 2.1.295 release and pinned changelog describe late-registering built-in filtering and deprecated-name bypass repairs. Earlier 2.1.290 changelog entries cover restricted cross-session messaging and changed-link reads. Release 2.1.296 includes the fixes; historical stable 2.1.287 predates them.

Channel and dates: Tagged release. 2.1.295 published 2026-10-08T19:48:38Z; 2.1.296 on 2026-10-09T19:28:59Z.

Action-bearing lines, in packet order:

1. The newer pinned grader recommendation follows the release chronology. Containment and unattended ask handling remain separate requirements.
2. Tool enumeration, aliases and cross-session denial are proposed behavior tests; the prose does not claim grader-quality validation.

Correction: Made latest 2.1.296 explicitly the latest at cutoff, not at the October 14 retrieval.

Finding records checked:

- [2026-10-13-claude-code-graders-and-unattended-runs-restricted-left-gaps-until-2-1-290-and-2-1-295-background-comm](../findings/2026-10-13-claude-code-graders-and-unattended-runs-restricted-left-gaps-until-2-1-290-and-2-1-295-background-comm.md): exists; ID/source match; supports the retained mechanism and limits.

Receipts independently opened (the retrieval inventory records hashes/routes):

- [Receipt 1](https://github.com/anthropics/claude-code/releases/tag/v2.1.295)
- [Receipt 2](https://github.com/anthropics/claude-code/blob/2301018b1f61073c501a8e7a4813ef48c239163b/CHANGELOG.md#L123)
- [Receipt 3](https://github.com/anthropics/claude-code/releases/tag/v2.1.296)

### 9. 2026-10-13-openhands-agents-prepare-testable-automation-drafts

Verdict: kept unchanged.

Final title: OpenHands agents fill automation forms that can be saved and tested

Title and summary: The automation setup commits and tagged form component support agent-entered fields, persistence, test-before-create and creator execution identity. Their source commits are included in 1.27.0/1.27.1. Release 1.27.1 and PR 18343 describe the replacement for the 1.27.0 image's startup failure. Neither client tags nor source establish Cloud rollout timing.

Channel and dates: Tagged release. 1.27.0 published 2026-10-12T15:06:15Z; 1.27.1 at 19:33:56Z.

Action-bearing lines, in packet order:

1. Reviewing trigger, schedule, profile, trial output and creator follows the form and identity model.
2. Saved-draft reload, actual backend run and setup/correction timing are proposed acceptance work.
3. The warning against distributing the stack key is supported by the independently traced adjacent local-secret signal.

Correction: None within the signal.

Finding records checked:

- [2026-10-13-openhands-automations-the-agent-fills-the-setup-form-v1-27-0-and-enterprise-transcripts-become-org](../findings/2026-10-13-openhands-automations-the-agent-fills-the-setup-form-v1-27-0-and-enterprise-transcripts-become-org.md): exists; ID/source match; supports the retained mechanism and limits.
- [2026-10-13-openhands-the-v1-27-0-docker-image-crash-loops-v1-27-1-fixes-it-and-adds-a-boot-test-before-tags-mov](../findings/2026-10-13-openhands-the-v1-27-0-docker-image-crash-loops-v1-27-1-fixes-it-and-adds-a-boot-test-before-tags-mov.md): exists; ID/source match; supports the retained mechanism and limits.

Receipts independently opened (the retrieval inventory records hashes/routes):

- [Receipt 1](https://github.com/OpenHands/OpenHands/commit/5ce3d0be2b1891a3e6dc3aba2e583583979117ea)
- [Receipt 2](https://github.com/OpenHands/OpenHands/commit/235d6f3367e19bbdd9b86adbfff6dd400ee89bae)
- [Receipt 3](https://github.com/OpenHands/OpenHands/blob/v1.27.1/src/components/features/automations/detail/configuration-section.tsx#L21-L28)
- [Receipt 4](https://github.com/OpenHands/OpenHands/releases/tag/v1.27.1)

### 10. 2026-10-13-openhands-local-terminal-inherits-the-stack-key

Verdict: corrected and retained.

Final title: OpenHands' local terminal inherits a key that reaches excluded secrets

Title and summary: The launcher exports OPENHANDS_AUTOMATION_API_KEY as sessionApiKey. SDK command sanitization misses that alias. The settings route returns named secret values without conversation-profile selection; api.py places it under header authentication, and dependencies.py accepts any configured session key. Docker construction passes explicit values rather than the outer environment wholesale. This is a source-derived path, not a reproduced exploit.

Channel and dates: Tagged Canvas 1.27.1 plus SDK/agent-server 1.54.0; the SDK release was published 2026-10-09T18:36:49Z.

Action-bearing lines, in packet order:

1. Inspecting inherited keys and a saved-but-excluded test secret directly tests the traced local-runtime path.
2. The Docker experiment now names the full published agent-server image. Withholding this alias removes this inherited-key route, not every possible automation-creation route.
3. Released credential separation and local/Docker denial tests remain proposed conditions. Container construction alone is not acceptance.

Correction: Replaced the incomplete image tag with ghcr.io/openhands/agent-server:1.54.0-python. Narrowed the automation-loss claim to this inherited-key route and added authentication wiring/validator receipts.

Finding records checked:

- [2026-10-13-openhands-profile-secret-scopes-do-not-bind-the-agent-s-own-terminal-the-stack-s-session-key-is-in](../findings/2026-10-13-openhands-profile-secret-scopes-do-not-bind-the-agent-s-own-terminal-the-stack-s-session-key-is-in.md): exists; ID/source match; supports the retained mechanism and limits.
- [2026-10-13-openhands-per-conversation-docker-containers-ship-through-oh-conversation-runtime-the-execution-only](../findings/2026-10-13-openhands-per-conversation-docker-containers-ship-through-oh-conversation-runtime-the-execution-only.md): exists; ID/source match; supports the retained mechanism and limits.

Receipts independently opened (the retrieval inventory records hashes/routes):

- [Receipt 1](https://github.com/OpenHands/OpenHands/blob/v1.27.1/scripts/dev-with-automation.mjs#L906-L915)
- [Receipt 2](https://github.com/OpenHands/software-agent-sdk/blob/v1.54.0/openhands-sdk/openhands/sdk/utils/command.py#L16-L30)
- [Receipt 3](https://github.com/OpenHands/software-agent-sdk/blob/v1.54.0/openhands-agent-server/openhands/agent_server/settings_router.py#L492-L522)
- [Receipt 4](https://github.com/OpenHands/software-agent-sdk/blob/v1.54.0/openhands-agent-server/openhands/agent_server/docker_runtime/registry.py#L411-L452)
- [Receipt 5](https://github.com/OpenHands/OpenHands/blob/v1.27.1/README.md#L107-L122)
- [Receipt 6](https://github.com/OpenHands/software-agent-sdk/blob/v1.54.0/openhands-agent-server/openhands/agent_server/api.py#L469-L503)
- [Receipt 7](https://github.com/OpenHands/software-agent-sdk/blob/v1.54.0/openhands-agent-server/openhands/agent_server/dependencies.py#L25-L37)

### 11. 2026-10-13-omnigent-bubblewrap-helper-escape-fixed

Verdict: kept unchanged.

Final title: Omnigent 0.18.0 closes a host escape through bubblewrap helper files

Title and summary: GHSA-v3vj-mch3-x6c2, published 2026-10-13T08:57:51Z, identifies pre-0.18.0 Linux bubblewrap helper exposure, host-account execution and no admin prerequisite. The patch removes broad temporary writes, rejects launcher-directory grants and tightens file modes. The five named helper families are supported by the changed files.

Channel and dates: Tagged v0.18.0 at 2026-10-13T08:34:10Z contains d2e077a1. v0.18.0.dev20261013 does not.

Action-bearing lines, in packet order:

1. Host upgrade/restart and disposable external isolation follow the advisory; the dated nightly does not contain the patch.
2. Inventorying helper process identity and testing rejected grants addresses host-side enforcement, not just central version display.
3. No exploitation rate or universal sandbox result is inferred. Deployed remediation still needs the stated process and denial evidence.

Correction: None within the signal.

Finding records checked:

- [2026-10-13-omnigent-linux-bubblewrap-helpers-could-escape-through-host-temporary-files-before-v0-18](../findings/2026-10-13-omnigent-linux-bubblewrap-helpers-could-escape-through-host-temporary-files-before-v0-18.md): exists; ID/source match; supports the retained mechanism and limits.

Receipts independently opened (the retrieval inventory records hashes/routes):

- [Receipt 1](https://github.com/omnigent-ai/omnigent/security/advisories/GHSA-v3vj-mch3-x6c2)
- [Receipt 2](https://github.com/omnigent-ai/omnigent/commit/d2e077a1e3d502748ec0d792dfdede7319ccb968)
- [Receipt 3](https://github.com/omnigent-ai/omnigent/releases/tag/v0.18.0)

### 12. 2026-10-13-hermes-agent-unattended-gateway-policy-now-applies

Verdict: corrected and retained.

Final title: Hermes 0.21.7 routes unattended Gateway commands through configured policy

Title and summary: Both repair commits are in 0.21.7. The presence logic treats webhook/msgraph_webhook as unattended and API requests as unattended when no notifier exists. The unattended policy branch precedes smart guardian review, after earlier guard/YOLO/container/allowlist handling. The earlier model-approved bypass description applies to smart mode.

Channel and dates: Tagged v0.21.7, published 2026-10-12T05:53:41Z.

Action-bearing lines, in packet order:

1. Upgrade and saved unattended_mode inspection follow the changed routing and can cause newly blocked intended jobs.
2. Per-path denied-command and notifier-backed tests avoid treating the repair as a universal gate.
3. The benefit is deterministic unattended routing without an unavailable responder; exception costs and installed behavior remain unmeasured.

Correction: Added smart-mode qualification to the former guardian approval path.

Finding records checked:

- [2026-10-13-hermes-agent-unattended-deny-did-not-apply-inside-a-running-gateway-until-v0-21-7-webhook-turns-reached](../findings/2026-10-13-hermes-agent-unattended-deny-did-not-apply-inside-a-running-gateway-until-v0-21-7-webhook-turns-reached.md): exists; ID/source match; supports the retained mechanism and limits.

Receipts independently opened (the retrieval inventory records hashes/routes):

- [Receipt 1](https://github.com/NousResearch/hermes-agent/commit/8918717b1ad2b52d1389756a3581a9860b98397b)
- [Receipt 2](https://github.com/NousResearch/hermes-agent/commit/71ff5238ec4643ddc6bddcfbc8be4b1cdd400684)
- [Receipt 3](https://github.com/NousResearch/hermes-agent/blob/v0.21.7/tools/approval.py#L910-L942)
- [Receipt 4](https://github.com/NousResearch/hermes-agent/blob/v0.21.7/tools/approval.py#L1128-L1169)

### 13. 2026-10-13-temporal-agent-harness-code-mode-moves-into-workflow

Verdict: corrected and retained.

Final title: Temporal Code Mode waits without storing interpreter snapshots in workflow history

Title and summary: The 0.6.0 release and 2d0c06bd diff move Monty stepping into workflow workers, with workflow clocks/timers, no interpreter subprocess held during waits and unchanged host-tool dispatch. However monty_stepper.py explicitly retains small serialized snapshots in workflow memory. What disappears is snapshot storage/transport through workflow history. The code-mode extra pins pydantic-monty 1.0.0. The web CLI defaults to 0.0.0.0; app.py has wildcard CORS and no login layer.

Channel and dates: Preview-or-beta. GitHub 0.6.0 is prerelease=true, published 2026-10-03T00:48:08Z; PyPI describes the project as pre-alpha.

Action-bearing lines, in packet order:

1. The worker/package trial is supported, with snapshot removal limited to the batch/history path.
2. Old-history compatibility remains an inference requiring representative replay; no universal replay failure or reset remedy is asserted.
3. Authentication, origin restriction and idempotent effects remain application responsibilities and proposed tests, not tested guarantees.

Correction: Corrected the title and accessibility claim: snapshots are absent from workflow history, not from serialization altogether. Added the pinned CLI bind-default receipt. Retained the successfully fetched commit API record.

Finding records checked:

- [2026-10-13-temporal-agent-harness-0-6-0-moves-code-mode-into-the-workflow-old-code-mode-histories-need-a-tested-cutover](../findings/2026-10-13-temporal-agent-harness-0-6-0-moves-code-mode-into-the-workflow-old-code-mode-histories-need-a-tested-cutover.md): exists; ID/source match; supports the retained mechanism and limits.

Receipts independently opened (the retrieval inventory records hashes/routes):

- [Receipt 1](https://github.com/temporal-community/temporal-agent-harness/releases/tag/0.6.0)
- [Receipt 2](https://api.github.com/repos/temporal-community/temporal-agent-harness/commits/2d0c06bdeaf08e80500256ebd3c5405e9a342e01)
- [Receipt 3](https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/pyproject.toml#L79-L84)
- [Receipt 4](https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/harness/code_mode/monty_stepper.py#L9-L106)
- [Receipt 5](https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/web/app.py#L176-L184)
- [Receipt 6](https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/web/cli.py#L145-L154)

### 14. 2026-10-13-github-copilot-cli-local-sandbox-and-credential-proxy

Verdict: corrected and retained.

Final title: Copilot CLI makes local sandboxing available to every user

Title and summary: The 1.0.93 release/changelog establishes general availability with default-off behavior, the prior 1.0.92 credential changes and ignored config.json user settings. Pinned docs support destination-scoped injection, managed failIfUnavailable/allowBypass distinctions, best-effort built-in file checks, macOS localhost limitations and cooperative Windows proxy enforcement.

Channel and dates: Tagged release. 1.0.93 published 2026-10-07T14:06:47Z; cutoff stable 1.0.97 on 2026-10-13T18:37:05Z. Registry 1.0.98 is later and excluded.

Action-bearing lines, in packet order:

1. The settings migration, enable/status/policy commands and Git/destination probes follow the versioned contract.
2. Three required policy settings and host qualification avoid treating managed enabled alone as fail-closed containment.
3. Injection-host scoping, credential-file review and per-OS testing preserve documented residuals; no exfiltration test or measured savings is claimed.

Correction: Made 1.0.97 explicitly historical to cutoff and expanded all documentary commit pins to full SHA 602021b0ba16b4a90e9c0a962a67ca9744eac82e.

Finding records checked:

- [2026-10-13-github-copilot-cli-1-0-93-opens-local-sandboxing-to-every-user-it-stays-off-by-default-and-a-server-managed](../findings/2026-10-13-github-copilot-cli-1-0-93-opens-local-sandboxing-to-every-user-it-stays-off-by-default-and-a-server-managed.md): exists; ID/source match; supports the retained mechanism and limits.
- [2026-10-13-github-copilot-cli-sandboxed-commands-now-get-placeholder-credentials-github-token-withheld-1-0-92-and-a-loca](../findings/2026-10-13-github-copilot-cli-sandboxed-commands-now-get-placeholder-credentials-github-token-withheld-1-0-92-and-a-loca.md): exists; ID/source match; supports the retained mechanism and limits.
- [2026-10-13-github-copilot-cli-1-0-93-ignores-user-settings-left-in-copilot-config-json-breaking-plus-retired-models-and](../findings/2026-10-13-github-copilot-cli-1-0-93-ignores-user-settings-left-in-copilot-config-json-breaking-plus-retired-models-and.md): exists; ID/source match; supports the retained mechanism and limits.
- [2026-10-13-github-copilot-cli-ga-docs-rewrite-the-sandbox-network-rules-local-network-off-macos-and-linux-egress-forced](../findings/2026-10-13-github-copilot-cli-ga-docs-rewrite-the-sandbox-network-rules-local-network-off-macos-and-linux-egress-forced.md): exists; ID/source match; supports the retained mechanism and limits.

Receipts independently opened (the retrieval inventory records hashes/routes):

- [Receipt 1](https://github.com/github/copilot-cli/blob/v1.0.97/changelog.md)
- [Receipt 2](https://github.com/github/docs/blob/602021b0ba16/content/copilot/concepts/security-governance-and-network-settings/about-cloud-and-local-sandboxes.md#L42-L118)
- [Receipt 3](https://github.com/github/docs/blob/602021b0ba16/content/copilot/how-tos/cloud-and-local-sandboxes/configuring-local-sandbox-settings.md#L151-L157)
- [Receipt 4](https://github.com/github/docs/blob/602021b0ba16/content/copilot/how-tos/cloud-and-local-sandboxes/using-local-sandboxing.md)
- [Receipt 5](https://github.com/github/docs/blob/602021b0ba16/content/copilot/reference/enterprise-administrators/enterprise-managed-settings.md#L351-L363)
- [Receipt 6](https://github.com/github/docs/blob/602021b0ba16b4a90e9c0a962a67ca9744eac82e/content/copilot/concepts/security-governance-and-network-settings/about-cloud-and-local-sandboxes.md#L42-L118)
- [Receipt 7](https://github.com/github/docs/blob/602021b0ba16b4a90e9c0a962a67ca9744eac82e/content/copilot/how-tos/cloud-and-local-sandboxes/configuring-local-sandbox-settings.md#L151-L157)
- [Receipt 8](https://github.com/github/docs/blob/602021b0ba16b4a90e9c0a962a67ca9744eac82e/content/copilot/how-tos/cloud-and-local-sandboxes/using-local-sandboxing.md)
- [Receipt 9](https://github.com/github/docs/blob/602021b0ba16b4a90e9c0a962a67ca9744eac82e/content/copilot/reference/enterprise-administrators/enterprise-managed-settings.md#L351-L363)

## Thread and carry-forward adjudication

All original external thread/carry receipts were opened, including receipts
whose claims were removed. The eight original questions and 14 new q-only
questions remain. Six historical answers were rewritten. Questions about future
tests do not assert that those tests passed.

| Thread | Decision and independently checked basis |
| :--- | :--- |
| C1, Guardian V2 | Narrowed to the inspected stable 0.162.1 and alpha.10, both default false; removed the unproved all-intermediate-stables/cutoff-main scope. The older reviewer remains a separate default-on feature. |
| C2, OpenClaw exec | Retained. API ancestry supports ab5611f0 in 2026.8.35 and 2026.10.3; July 2026.7.35 diverges with 14,760 base-only commits. This is separate from final hook arguments. |
| C3, DeepSeek login | Narrowed to persistent signed-cookie authentication. The cited browser-auth file alone does not establish same-user filesystem access to its credential provider, so that stronger exploit-path assertion was removed. No non-prerelease release was found through cutoff; rc.2 remains a prerelease. |
| C4, Paperclip policy/guidance | Release notes support serialized policy verdicts, downgrade prevention and safer npx-form guidance. Removed an unneeded current-version/migration/grant claim and the unsupported first-containing-tag superlative. GitHub publication is 2026-08-25, regardless of the 824 version label. |
| C5, Paperclip ACPX | Local ancestry supports inclusion in 831.0 and absence from 824.0/824.1. Narrowed first stable to a stable containing the fix, since those comparisons alone do not exhaust all earlier tags. |
| C6, Gemini former previews | Retained the 0.57.0 release-note closure. The separate headless conversion is absent from 0.61.0 and included in 0.63.0; no universal shell-redirection guarantee was added. |
| C7, Eve queue/self-mod | Removed the unconfirmed 0.39.3 answer and first-binding-at-0.63.0 claim. The linked current queue source cannot establish those historical boundaries. Kept current queue/held-approval semantics, and distinguished default local dev self-modification from a separately mounted deployed remote extension. |
| C8, Hermes old PRs | All three independently fetched PR merge commits are ancestors of v2026.8.19; exact merge and release dates are 2026. Dropped the unnecessary first-tag assertion. Later startup/Gateway floors remain distinct. |
| Plugin4Shell and GitSpawn watches | Retained as unresolved disclosure/current-artifact questions. Absence from changelogs is not proof of either exploitability or remediation. The Claude advisory is a dated disclosure of an older repair. |
| Claude classifier | Replaced moving live session-status documentation with the pinned 2.1.281 changelog's narrower wait-for-review change. Kept the archived billed-local-fallback notice. No session-status fact from today's docs was backdated. |
| Claude mods, managed reads, stable cadence, AGENTS.md | Retained with source/version limits. Guard source does not prove a closed binary. Homebrew commit a1326862 records the historical 2.1.287 stable promotion. The packet now qualifies guard option/loading conditions. |
| Codex daemon, OTLP and instruction admission | Retained the tagged/source distinctions: selected service package versus CLI; completed synchronous reviewer exports versus cached V2 cases; explicit Untrusted versus a separate project-config admission gate. |
| Gemini planning and destinations | Retained tagged headless prompt and documented A2A destination configuration. Removed the moving subscription-sunset claim because no dated receipt established it within this window. No blanket CLI shutdown is asserted. |
| OpenClaw file operations and Workshop | Changed root-handle reads/edits to writes/edits, matching the linked writeWorkspaceFile/createHostMutationOperations range. Retained autonomous Workshop propose/off and the separate chat-configuration permission mode. |
| Hermes scanner counts | The removal commit reports the old scanner catching 14/16 attacks and flagging 12/24 everyday commands. Removed the unsupported 13/16 and 5/24 after-scores. Retained only attributed, unreproduced original counts. |
| Hermes install/browser/OIDC | Kept the source installer and pinned browser defaults; removed the unnecessary retired-PyPI assertion. Resolved the dashboard directory via contents API and linked its concrete pinned module. OIDC existence is not role/group acceptance. |
| Paperclip grants, resolver and audit routes | Retained the scoped new-agent defaults, tool-profile ordering, human_only resolver distinction, board-readable audit route and already-enabled Grok alwaysApprove. The older budget/watchdog/CEO release remains historical, not a new October event. |
| OpenHands profiles, Docker and image | Retained the traced stack-key path, whole-conversation Docker distinction and 1.27.1 image repair. Authentication validators were fetched in addition to the raw-secret route. No live secret-denial or Cloud acceptance claim was added. |
| Pi MCP/trust/experimental APIs | Retained tagged native MCP, project-trust refusal and exposure-qualified callable set. The separate Durable package does not establish graduation of a removed API. |
| Agent Zero | Retained v2.14 placeholder/browser distinctions. Added that messaging administration's commit dates to 2026-09-14 and was included in v2.13, released 2026-09-23: the in-window event is release delivery. |
| Eve dispatch/testing | Retained separate requester identity, queued timing and dispatch cases. An upstream report that a suite passes both revisions is not acceptance of the missing cases. |
| OMP | Retained the active TypeScript release, untagged Rust-branch distinction, plan API and unconditional trust shim. Post-release delivery remains a question. |
| Flue | Retained release-tooling removal and 27 test source deletions. API file enumeration confirms 26 ordinary test files plus one test-d.ts file; a separate smoke-test script is also deleted. No inference about private tests. Tagged allowed-tools text remains guidance, not enforcement. |
| Cursor | Dated Rollouts and IDE material remain provider-described hosted/desktop evidence. They do not establish a model-supply cutoff, arbitrary Cloud acceptance or an allowed tagged signal channel. |
| Grok | Generation-pinned 1.0.51/1.0.52/1.0.54 notes remain distinct from the older public source mirror and from tested current behavior. Wrong-checkout delivery stays a channel watch. |
| DeepSeek logging/Team | Retained the pinned rc logging/headless and alpha Team contract differences; removal of outbox/retry/dedup behavior is not a new delivery guarantee. |
| heypi | Narrowed the createExclusive statement to the proxy's omitted mutator name. Removed the unverified resolved-dependency execution outcome. Retained required audit writes, historical admin authentication and incompatible dependency-range caution. |
| Agent Flywheel | Retained exact-plan plugin review, separately pinned checksum ledger and main-only deferral repair. The 175-run account remains a maintainer report, not measured accepted work. |
| Omnigent | Retained explicit outage ASK, conditional missing-price approval, child-budget propagation and editor distinctions; they do not replace the independently confirmed bubblewrap advisory. |
| Temporal | Retained message/auto-preview distinctions and external custody questions. Corrected the signal's snapshot claim; replay compatibility and authenticated/origin-restricted service remain open. |
| Unreal and HarnessTax | Removed unsupported exact comparator versions and aggregate wording. The archived tables report lower input tokens per trial/task in the displayed historical comparisons. Missing inference cost and artifact mapping prevent present-version dollar or quality conclusions. Retained TUI/recovery API distinctions, digit-one image spelling, and the older Docker-account existence without claiming vendor ownership. |
| Verification tail | Replaced prior self-certification and broad 22-profile claims with this bounded independent audit. No public copy or profile was edited. |

New watch premises were checked where they name commits: Gemini 204db94 is
absent from stable 0.64.0 and present in 0.65.0-preview.0; OpenHands da4c756,
Omnigent 6cf6acf/03beb88 and Agent Flywheel 2354efb are absent from their named
cutoff stable tags. The questions still require both delivery and deployed tests.

## Ancestry receipts

Commands used the existing clones and `git merge-base --is-ancestor COMMIT REF`.
Exit 0 means contained; exit 1 means not contained. No exit-1 result is
described as a command error or proof against an equivalent backport.

| Clone | Commit | Ref | Resolved target | Exit |
| :--- | :--- | :--- | :--- | :--- |
| codex-verify | d570b3632b100e36f931797cdbdb8906d0fcafa8 | rust-v0.162.1 | 092d3acd6bec3e3a14bdc7e7a2810ab628ab759d | 1 |
| codex-verify | d570b3632b100e36f931797cdbdb8906d0fcafa8 | rust-v0.163.0-alpha.1 | cb36b210bcb28dba454289d9b1789351e40821fa | 0 |
| pi-coding-agent-verify | 8562bcf66a8eeefdf75ddd231ca9d7aa7d64f86e | v0.99.0 | 4b060d3a98618019adb9985d517516c8e99a2bbe | 0 |
| pi-coding-agent-verify | 8562bcf66a8eeefdf75ddd231ca9d7aa7d64f86e | v1.2.0 | 06a466935536f8c9bcacb2d5efc0fc021be1bdff | 0 |
| eve-verify | 9559de83b65e89c24172c2b9c1a80382033556aa | eve@0.78.0 | 67752a0924d629ac3478c04dba57cf0b24824daa | 0 |
| eve-verify | 9559de83b65e89c24172c2b9c1a80382033556aa | eve@0.79.0 | de7a408e4dc515e4fff6295cb0e8b4f371843c67 | 0 |
| eve-verify | 0dea0ded869be7db30ae90ed8072d29e6e57df61 | eve@0.79.0 | de7a408e4dc515e4fff6295cb0e8b4f371843c67 | 1 |
| eve-verify | 0dea0ded869be7db30ae90ed8072d29e6e57df61 | 80f15de21abb8a575d5bfdee333e72a9e7d1742c | 80f15de21abb8a575d5bfdee333e72a9e7d1742c | 0 |
| omp-verify | d40b86cf7d6607fc349545ec67ed321023e53425 | v18.10.4 | 687892d1046ecaf18829b45f5b86928a308258f4 | 0 |
| openhands-verify | 5ce3d0be2b1891a3e6dc3aba2e583583979117ea | v1.27.0 | 3f5654ac02c2a74661daa224bcfc8962643a58f2 | 0 |
| openhands-verify | 235d6f3367e19bbdd9b86adbfff6dd400ee89bae | v1.27.1 | f07aebdf5cdd71f4a05ebcf30f8bef5e4e3b70b9 | 0 |
| omnigent-verify | d2e077a1e3d502748ec0d792dfdede7319ccb968 | v0.18.0 | a8676d23e88df7918f4f8ef1c7c4e3186e710354 | 0 |
| omnigent-verify | d2e077a1e3d502748ec0d792dfdede7319ccb968 | v0.18.0.dev20261013 | a39b40fdfb96f1c8a847a3de84870acadb097542 | 1 |
| hermes-agent-verify | 8918717b1ad2b52d1389756a3581a9860b98397b | v0.21.7 | 71d34bad1045610252eda02ee79549436896e784 | 0 |
| hermes-agent-verify | 71ff5238ec4643ddc6bddcfbc8be4b1cdd400684 | v0.21.7 | 71d34bad1045610252eda02ee79549436896e784 | 0 |
| temporal-agent-harness-verify | 2d0c06bdeaf08e80500256ebd3c5405e9a342e01 | 0.6.0 | 04a49d1b037de46da2cba31676d2aa2f4c59118f | 0 |
| hermes-agent-verify | f0ffcbc7532f5ca58d62eba474b0a398082c6e93 | v2026.8.19 | Named existing tag | 0 |
| hermes-agent-verify | b0350365829ee67aee0cd40e7cb04774c57dab27 | v2026.8.19 | Named existing tag | 0 |
| hermes-agent-verify | 1179f148e436d80fdd36f78cfb758444f392780d | v2026.8.19 | Named existing tag | 0 |
| omnigent-verify | 6cf6acf2fde6b80ec929e0b1565ec5e50e6f7306 | v0.18.0 | Named existing tag | 1 |
| omnigent-verify | 03beb88c01a966b04c6c762e723e8b4463dc16e0 | v0.18.0 | Named existing tag | 1 |
| gemini-cli-verify | 204db94ae2a33f70afec7400ebf6b78f1b5e2575 | v0.64.0 | Named existing tag | 1 |
| gemini-cli-verify | 204db94ae2a33f70afec7400ebf6b78f1b5e2575 | v0.65.0-preview.0 | Named existing tag | 0 |
| agent-flywheel-verify | 2354efbaa6b355b93a53d6052fcc8f56950893b1 | v0.10.0 | Named existing tag | 1 |
| openhands-verify | da4c7564dcf460f80d1889fee1c951802c448c56 | v1.27.1 | Named existing tag | 1 |
| agent-zero-verify | 17033d277e4a39a99865455d87e4b0719bc3bf0f | v2.13 | Named existing tag | 0 |

OpenClaw had no existing verification clone in the permitted location. Rather
than create files outside the four authorized outputs, its ancestry was checked
through GitHub compare APIs and pinned stable/beta file contents:

- 34d07e7 to beta.1: behind, behind_by 55; absent.
- 34d07e7 to beta.2 and beta.3: ahead, behind_by 0; included.
- 34d07e7 to 2026.10.3: diverged, behind_by 2325; absent.
- 34d07e7 to 2026.8.35: diverged, behind_by 21391; absent.
- ab5611f0 to 2026.8.35 and 2026.10.3: ahead, behind_by 0; included.
- ab5611f0 to 2026.7.35: diverged, behind_by 14760; absent.

The three old Hermes PR merge commits were independently recovered:
90224 = f0ffcbc7532f5ca58d62eba474b0a398082c6e93, merged
2026-08-19T19:46:26Z; 90391 = b0350365829ee67aee0cd40e7cb04774c57dab27,
merged 2026-08-20T02:42:00Z; 90765 =
1179f148e436d80fdd36f78cfb758444f392780d, merged
2026-08-20T11:30:23Z. All three ancestry checks returned 0 for v2026.8.19.

## Release publication dates

These are GitHub published_at values, not commit author dates or assumptions
from version strings. Older releases remain historical closures.

| Release receipt | Published at UTC | Prerelease |
| :--- | :--- | :--- |
| [rust-v0.157.0](https://github.com/openai/codex/releases/tag/rust-v0.157.0) | 2026-09-25T02:31:06Z | false |
| [eve@0.78.0](https://github.com/vercel/eve/releases/tag/eve%400.78.0) | 2026-10-13T01:47:36Z | false |
| [v18.10.4](https://github.com/can1357/oh-my-pi/releases/tag/v18.10.4) | 2026-10-13T19:38:04Z | false |
| [v2.1.287](https://github.com/anthropics/claude-code/releases/tag/v2.1.287) | 2026-10-01T18:00:22Z | false |
| [v2.1.295](https://github.com/anthropics/claude-code/releases/tag/v2.1.295) | 2026-10-08T19:48:38Z | false |
| [v2.1.296](https://github.com/anthropics/claude-code/releases/tag/v2.1.296) | 2026-10-09T19:28:59Z | false |
| [v1.27.1](https://github.com/OpenHands/OpenHands/releases/tag/v1.27.1) | 2026-10-12T19:33:56Z | false |
| [v0.18.0](https://github.com/omnigent-ai/omnigent/releases/tag/v0.18.0) | 2026-10-13T08:34:10Z | false |
| [0.6.0](https://github.com/temporal-community/temporal-agent-harness/releases/tag/0.6.0) | 2026-10-03T00:48:08Z | true |
| [dsh-v0.2.0-rc.2](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.0-rc.2) | 2026-09-29T09:42:36Z | true |
| [v2026.824.0](https://github.com/paperclipai/paperclip/releases/tag/v2026.824.0) | 2026-08-25T04:23:27Z | false |
| [v0.57.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.57.0) | 2026-08-25T18:37:14Z | false |
| [v2026.8.19](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.8.19) | 2026-08-21T12:16:39Z | false |
| [v2026.8.35](https://github.com/openclaw/openclaw/releases/tag/v2026.8.35) | 2026-10-02T14:06:34Z | false |
| [v0.61.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.61.0) | 2026-09-23T23:59:15Z | false |
| [v0.21.6](https://github.com/NousResearch/hermes-agent/releases/tag/v0.21.6) | 2026-10-08T11:51:57Z | false |
| [v2026.9.24](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.9.24) | 2026-09-24T10:09:38Z | false |
| [v2026.626.0](https://github.com/paperclipai/paperclip/releases/tag/v2026.626.0) | 2026-06-27T03:49:47Z | false |
| [v2.14](https://github.com/agent0ai/agent-zero/releases/tag/v2.14) | 2026-10-13T16:29:24Z | false |
| [v18.10.2](https://github.com/can1357/oh-my-pi/releases/tag/v18.10.2) | 2026-10-12T14:08:38Z | false |
| [@flue/runtime@2.1.1](https://github.com/withastro/flue/releases/tag/%40flue/runtime%402.1.1) | 2026-09-23T19:33:30Z | false |
| [0.5.0](https://github.com/temporal-community/temporal-agent-harness/releases/tag/0.5.0) | 2026-09-30T21:58:56Z | true |
| [v0.3.1](https://github.com/unreallabsai/unreal-agent/releases/tag/v0.3.1) | 2026-10-06T16:47:03Z | false |
| [v0.99.0](https://github.com/earendil-works/pi/releases/tag/v0.99.0) | 2026-09-29T17:21:54Z | false |
| [eve@0.70.0](https://github.com/vercel/eve/releases/tag/eve%400.70.0) | 2026-10-02T01:25:29Z | false |
| [rust-v0.162.1](https://github.com/openai/codex/releases/tag/rust-v0.162.1) | 2026-10-09T19:44:51Z | false |
| [rust-v0.163.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.163.0-alpha.1) | 2026-10-08T21:07:13Z | true |
| [v1.2.0](https://github.com/earendil-works/pi/releases/tag/v1.2.0) | 2026-10-12T23:03:53Z | false |
| [eve@0.79.0](https://github.com/vercel/eve/releases/tag/eve%400.79.0) | 2026-10-13T18:41:08Z | false |
| [eve@0.71.3](https://github.com/vercel/eve/releases/tag/eve%400.71.3) | 2026-10-06T17:33:53Z | false |
| [eve@0.72.0](https://github.com/vercel/eve/releases/tag/eve%400.72.0) | 2026-10-07T01:20:15Z | false |
| [v2026.10.5-beta.2](https://github.com/openclaw/openclaw/releases/tag/v2026.10.5-beta.2) | 2026-10-12T12:10:48Z | true |
| [v2026.10.5-beta.3](https://github.com/openclaw/openclaw/releases/tag/v2026.10.5-beta.3) | 2026-10-13T10:00:37Z | true |
| [v2026.10.3](https://github.com/openclaw/openclaw/releases/tag/v2026.10.3) | 2026-10-13T13:49:25Z | false |
| [v0.21.7](https://github.com/NousResearch/hermes-agent/releases/tag/v0.21.7) | 2026-10-12T05:53:41Z | false |
| [v1.27.0](https://github.com/OpenHands/OpenHands/releases/tag/v1.27.0) | 2026-10-12T15:06:15Z | false |
| [v1.54.0](https://github.com/OpenHands/software-agent-sdk/releases/tag/v1.54.0) | 2026-10-09T18:36:49Z | false |
| [v1.0.93](https://github.com/github/copilot-cli/releases/tag/v1.0.93) | 2026-10-07T14:06:47Z | false |
| [v1.0.97](https://github.com/github/copilot-cli/releases/tag/v1.0.97) | 2026-10-13T18:37:05Z | false |
| [v2.13](https://github.com/agent0ai/agent-zero/releases/tag/v2.13) | 2026-09-23T18:47:44Z | false |

## Registry crosschecks

Registry metadata was fetched directly without installing or executing packages.
Today's dist-tags are mutable and were not used as historical channel receipts.
The initial legacy @mariozechner Pi package lookup was not used for the retained
Pi 1.2.0 claim; the correct package is @earendil-works/pi-coding-agent.

| Registry | Version | Published at UTC | Package integrity |
| :--- | :--- | :--- | :--- |
| [@earendil-works/pi-coding-agent](https://registry.npmjs.org/@earendil-works/pi-coding-agent) | 0.99.0 | 2026-09-29T17:21:27.312Z | sha512-rZ8lLzqhrXrlZSt9VffVmVOcPBzbnK53UilkwEpDqU/WfE1RKCRqzYfGll/Xsk5XumjpeBT8IWzKNP6CyiEtrg== |
| [@earendil-works/pi-coding-agent](https://registry.npmjs.org/@earendil-works/pi-coding-agent) | 1.2.0 | 2026-10-12T23:03:25.459Z | sha512-h/4WaVWv1VlCaY8x8qEN5U+7jbF/e7+Ck6moPeEOFn5juMTWwNAXjwgYM7gRgbBYh8Zppwt6qWvJDzNTf4GNEQ== |
| [@oh-my-pi/pi-coding-agent](https://registry.npmjs.org/@oh-my-pi/pi-coding-agent) | 18.10.4 | 2026-10-13T19:54:08.077Z | sha512-JZqUebDzrBNIdtW5ztWQAre67QnCV6xVZ9/R2ZdOX5zGFUO7d73Nd5TYqTRRQZrjKD+bUnXLkqk3IE1cu4aDZQ== |
| [eve](https://registry.npmjs.org/eve) | 0.71.3 | 2026-10-06T17:42:08.930Z | sha512-n0IdHqthlSTZvWjRtyaai0dQQB6K441JUbBbk9N63zsZrVkOkaJrLxh0hY9AfPb+TlJINOlhd/BcIQIHgf5w4g== |
| [eve](https://registry.npmjs.org/eve) | 0.78.0 | 2026-10-13T01:52:46.166Z | sha512-ruP+rltMINi2WUjGgr/8bdx9ccn6OUa9Tbm2zvSG68V6NMyg+KpljecyzbGQ8FQKWznQ7LJFTCJTsKxb8lrzJQ== |
| [eve](https://registry.npmjs.org/eve) | 0.79.0 | 2026-10-13T18:45:16.490Z | sha512-H+SERBdpVUh3w5r/KQxOMnN/fyXiE3UXyBL56yviVON5UHLbBZBbobCzdOUog5OsP3hw1iZzjcSuHC0XF2YJ4Q== |
| [@github/copilot](https://registry.npmjs.org/@github/copilot) | 1.0.93 | 2026-10-07T14:09:49.114Z | sha512-rfkBL3hCIu73XNpOL9a0epZYmbCBtkoNzMVVjpZlGpLE2Aj7CeMCr0NweZKnHqL9VpMaoJyfWbSd1aI0I9Bt3w== |
| [@github/copilot](https://registry.npmjs.org/@github/copilot) | 1.0.97 | 2026-10-13T18:37:41.431Z | sha512-Uh1li820BxT6yS8/bDCf7KC6Rn9jb/J1rWs2z9JpdfIyGHEWeyUS0rA6/tEV7FDc/5AOWS64dYJe8QF+w/mWqg== |
| [@anthropic-ai/claude-code](https://registry.npmjs.org/@anthropic-ai/claude-code) | 2.1.287 | 2026-10-01T16:59:25.986Z | sha512-V5WRpA+p41siSlf/Ujxjm//RtYvySxH/p9/rh6zRxNoHeBzqTgSDw3nP8PgtACM/KcVx/g5TFUNdVkq51dfg0g== |
| [@anthropic-ai/claude-code](https://registry.npmjs.org/@anthropic-ai/claude-code) | 2.1.295 | 2026-10-08T18:22:58.621Z | sha512-PTdE5NdqwwyCmtbX/0WAuosyip8DkwC6M5mAJv+b9KGuxMFnkTJbc2b3EY6FYdo5ZTWkm6MN8reA9YWWMrLR+g== |
| [@anthropic-ai/claude-code](https://registry.npmjs.org/@anthropic-ai/claude-code) | 2.1.296 | 2026-10-09T16:58:10.924Z | sha512-OX/k/rpcthMqnFKOWcpNcbiLsMKtAjLOpQNJHlYiDCFUznWCIwdRTyl/p9SdHVrsrzZuPMCNqZjnpakIni6upw== |

## Receipt retrieval inventory

Each row records the original or final citation URL. GitHub blob URLs were
retrieved through raw.githubusercontent.com at the same ref/path; release,
commit, advisory and PR URLs used their GitHub API equivalents. The hash is
SHA-256 of the fetched response bytes, not a git object ID. A dash in the clone
column means no local byte comparison, not a failed fetch. Archived/live web
receipts support only the bounded uses described above.

| Receipt | HTTP | Response SHA-256 | Clone byte match |
| :--- | :--- | :--- | :--- |
| [R001](https://github.com/openai/codex/releases/tag/rust-v0.157.0) | 200 | ac5d9a71cf72d51e5053a4b4bee0bbc89e09c24ddc20c62b0db8f42efc9d34e8 | - |
| [R002](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/app-server-daemon/README.md#L1-L68) | 200 | 6f8f50fc23fbd2de03b75296c5f97b83b8723d5808f4c6071782d4b52e62cd59 | yes |
| [R003](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/app-server-daemon/src/prepare_install.rs#L245-L338) | 200 | 41bb71289e7cff45ab58478c8ebdfe76993c2979e5aa857622872e99e9a4f901 | yes |
| [R004](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/cli/src/main.rs#L2360-L2372) | 200 | 9eb1067f5a4c270baf677537dc2ef4603ffda186c918ad65ce454177f95dd785 | yes |
| [R005](https://github.com/openai/codex/commit/d570b3632b100e36f931797cdbdb8906d0fcafa8) | 200 | a6ce6020b2c7551093f09dfd3fcba671e68ab468252de508949c69264ea4bb83 | - |
| [R006](https://github.com/earendil-works/pi/commit/8562bcf66a8eeefdf75ddd231ca9d7aa7d64f86e) | 200 | 1917b16df19d9b293bb0204334090bafbee815f3dd35e5d74f5a44ad8ba6dd12 | - |
| [R007](https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/docs/mcp.md) | 200 | 23b9cca35d1340e8adce6bed8b495da0ebb58931179a937db87d610a1b40b9bf | yes |
| [R008](https://github.com/earendil-works/pi/blob/v1.2.0/packages/mcp/src/transports/stdio.ts#L94) | 200 | 1f69dae42bae51698bee843d6340225072b6f29c006ca422a60f19a798d7bde6 | yes |
| [R009](https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/core/agent-session.ts#L730-L760) | 200 | e2bbf746779fbed5a8c36f023842bf271252d1fd6f17f5a32f70a0d1c63f0b65 | yes |
| [R010](https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/extensions/codemode/execute.ts#L740-L751) | 200 | 46dabeb95087bfa321332736dbd0572546e153b98d5944dd8c306065841520be | yes |
| [R011](https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/docs/cli.md#L111-L138) | 200 | f722b2bc9931db5c22d645ea161fd9a37c30b16e662bba51ce4ca75ea6cbdd51 | yes |
| [R012](https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/core/agent-session.ts#L1771-L1789) | 200 | e2bbf746779fbed5a8c36f023842bf271252d1fd6f17f5a32f70a0d1c63f0b65 | yes |
| [R013](https://github.com/earendil-works/pi/blob/v1.2.0/packages/agent/src/agent-loop.ts#L708-L735) | 200 | 28a2b03e34a7e32f004aa851e54d3b5be9dad71c392205614cbc9abdf3a9020a | yes |
| [R014](https://github.com/vercel/eve/commit/9559de83b65e89c24172c2b9c1a80382033556aa) | 200 | 764cc99f7fcff18b5cd6026ee5fcc06818319e7d5bc8195fa4ff549ebdca4954 | - |
| [R015](https://github.com/vercel/eve/releases/tag/eve%400.78.0) | 200 | 893d612329a193a785d4211961618694e045f11a595a88c47cbe0a2ee005ee57 | - |
| [R016](https://github.com/vercel/eve/blob/eve%400.79.0/docs/tools/human-in-the-loop.md#L257) | 200 | c4a9ca34b33f1162af702509a009c95271cd556d3ccca473e21aba53507f461c | yes |
| [R017](https://github.com/vercel/eve/commit/0dea0ded869be7db30ae90ed8072d29e6e57df61) | 200 | b65e22f20b89e487a17694f15e48e125a8d19fbfc619d28e48d40fe198aa4b42 | - |
| [R018](https://github.com/vercel/eve/blob/eve%400.79.0/packages/eve/src/execution/session/input-queue.ts#L229-L244) | 200 | 8aa72366357b518832ad1b01e99e8b8128c30b9b3eb61ceb36952a0d91388564 | yes |
| [R019](https://github.com/can1357/oh-my-pi/releases/tag/v18.10.4) | 200 | 231191d24378a3c68e36e9a0ad0b44a31eca6554ce8d936738d1a6ff52b0179a | - |
| [R020](https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/extensions.md#L555-L561) | 200 | 2a9993d7cf92163ec1f3643fcbcb897d0efb36c7b558d67f68e951cad60b5acf | yes |
| [R021](https://github.com/can1357/oh-my-pi/commit/d40b86cf7d6607fc349545ec67ed321023e53425) | 200 | 8eae3e1edf7771ab2a75565408629451bdee35583d7dc09def3e2e1f80844bc9 | - |
| [R022](https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/extensibility/extensions/runner.ts#L1401-L1404) | 200 | 5e81fe8ad19926c9ba3b4887eda6927b8dcbeb8b76f7df0de580cb7a0722930b | yes |
| [R023](https://github.com/openclaw/openclaw/commit/34d07e7b0dc1b5f0ed54de67a9647d9e6b8c23de) | 200 | 58db0e28e22216ea95cfb41fdfcc5691d86952f8e5d9c6fe7d90dc0f1f7f6bc2 | - |
| [R024](https://github.com/openclaw/openclaw/blob/v2026.10.3/src/agents/agent-tools.before-tool-call.policy.ts#L303-L411) | 200 | 570ffa8d7847eb9aff79c9b877f0643018807d7b35c8f38eeda07d8ed1abbd74 | - |
| [R025](https://github.com/openclaw/openclaw/blob/v2026.8.35/src/agents/agent-tools.before-tool-call.policy.ts#L277-L405) | 200 | 063d9ba06a1ef164a15742dda509cca0460a6bd952a6c93f641f0ff3247a63b0 | - |
| [R026](https://github.com/openclaw/openclaw/blob/v2026.10.5-beta.3/src/agents/agent-tools.before-tool-call.policy.ts#L291-L436) | 200 | 4f41628946b3002efbddb7d4913bae654762ba688bd2bea20c8781b68eeb2125 | - |
| [R027](https://github.com/anthropics/claude-code/releases/tag/v2.1.287) | 200 | eb73e92fba7ad741aaceaad9dd0a16c058413c849f70245b5684ad35679e257d | - |
| [R028](https://github.com/anthropics/claude-code/blob/2301018b1f61073c501a8e7a4813ef48c239163b/mods/sec-default/README.md) | 200 | 479f547c93f0f91e83a4d4553ee84f2625ca01ddd2c11f02cc111d87f59f088e | - |
| [R029](https://github.com/anthropics/claude-code/blob/2301018b1f61073c501a8e7a4813ef48c239163b/mods/sec-default/hooks/register.ts#L67-L114) | 200 | 5f84d44551c4bbb0489a1b75e4745e24531767ac8d920cc3016cc471c7e8eb2c | - |
| [R030](https://github.com/anthropics/claude-code/blob/bf2323b3021c9d3db7a31e1e7d61068c3f704497/mods/sec-default/README.md) | 200 | 25919b64c693efbde1015be2ba233a05f1ec60526d2e7d557385511ebca9f025 | - |
| [R031](https://web.archive.org/web/20261012024958/https://code.claude.com/docs/en/plugins/mods/admin) | 200 | c52b0e6da760e8d0f5852ffffe68e2b73012e26211c0ee2c3b6002b2eb760eb1 | - |
| [R032](https://web.archive.org/web/20261012012019/https://code.claude.com/docs/en/plugins/mods/overview) | 200 | 48ec987e9c3713dc9f4357a569184e539cda71102a03dceb95b4198628516f2e | - |
| [R033](https://web.archive.org/web/20261012180805/https://code.claude.com/docs/en/permissions#extend-permissions-with-hooks) | 200 | 82bf017011e7891f0df29cf97d1ab19f8bef978005d1c311295a71a23af8976c | - |
| [R034](https://github.com/anthropics/claude-code/releases/tag/v2.1.295) | 200 | 5f45173d0bf3dd01930aad2c33b32c6524d91a2bdf3b7cf55899f38433d72373 | - |
| [R035](https://github.com/anthropics/claude-code/blob/2301018b1f61073c501a8e7a4813ef48c239163b/CHANGELOG.md#L123) | 200 | 0383b383e05c30b7592c512ea3356104cbc3a799d028d36204033175ff256a51 | - |
| [R036](https://github.com/anthropics/claude-code/releases/tag/v2.1.296) | 200 | cda0048dbe05a44f91180f21098200a48777eb2c5035c893b8ab3ef0bbb55efd | - |
| [R037](https://github.com/OpenHands/OpenHands/commit/5ce3d0be2b1891a3e6dc3aba2e583583979117ea) | 200 | d4e6abe7e34cce7131f6257b07e4126da915087799d59a4a51556a4c87f599ad | - |
| [R038](https://github.com/OpenHands/OpenHands/commit/235d6f3367e19bbdd9b86adbfff6dd400ee89bae) | 200 | 0b02726b4af816dbf87e8e1fe50485863c2025fa29a4ea6dfc45ba2124b0183d | - |
| [R039](https://github.com/OpenHands/OpenHands/blob/v1.27.1/src/components/features/automations/detail/configuration-section.tsx#L21-L28) | 200 | 5ad5de0abd7cd996daf9d5608c9d0ccaea3e36836de0daf6fee06087a3f4765e | yes |
| [R040](https://github.com/OpenHands/OpenHands/releases/tag/v1.27.1) | 200 | 20e5d8376962ec0dfad67083b30963e330b793d928a8b84b7ad8d9c168124c3c | - |
| [R041](https://github.com/OpenHands/OpenHands/blob/v1.27.1/scripts/dev-with-automation.mjs#L906-L915) | 200 | 54e3d0561a2f7a5bc5504fadb86c9ba03434411f7b2d9602bcc9a9016a59af21 | yes |
| [R042](https://github.com/OpenHands/software-agent-sdk/blob/v1.54.0/openhands-sdk/openhands/sdk/utils/command.py#L16-L30) | 200 | 6bdf9896d04b12a43bb6aaf1a648d80b273b910fdef5393c5277f0ab931b6e78 | - |
| [R043](https://github.com/OpenHands/software-agent-sdk/blob/v1.54.0/openhands-agent-server/openhands/agent_server/settings_router.py#L492-L522) | 200 | 242a0a3ea1d619006bd25e276a02bfc1d9d7648383c90c2b1f8c892c8b75cd95 | - |
| [R044](https://github.com/OpenHands/software-agent-sdk/blob/v1.54.0/openhands-agent-server/openhands/agent_server/docker_runtime/registry.py#L411-L452) | 200 | d5993d57884a95aba9c2e46f87ccc7d93568bbc04015c28dc9a9ee01efc9676a | - |
| [R045](https://github.com/OpenHands/OpenHands/blob/v1.27.1/README.md#L107-L122) | 200 | ba3c3b5c271353eb44d78feb1e1d991146a23d68c83cd3dc5351c46e369978a0 | yes |
| [R046](https://github.com/omnigent-ai/omnigent/security/advisories/GHSA-v3vj-mch3-x6c2) | 200 | 2dee6692564b75949ec8113da76b2cd807d2346d9c8db117d64832a66b487cfc | - |
| [R047](https://github.com/omnigent-ai/omnigent/commit/d2e077a1e3d502748ec0d792dfdede7319ccb968) | 200 | f92345b67460d61944eaee962822e34af79223883529d58b939148fce43ecc73 | - |
| [R048](https://github.com/omnigent-ai/omnigent/releases/tag/v0.18.0) | 200 | dfa515a360648004e912fc3c1e47b5d81e520f3273eb40264ac6a8310f7029d0 | - |
| [R049](https://github.com/NousResearch/hermes-agent/commit/8918717b1ad2b52d1389756a3581a9860b98397b) | 200 | 0ebacb211bb2c7643ebb5e3f2b737040353f585376fb4e8ecb55e81a4e37a89f | - |
| [R050](https://github.com/NousResearch/hermes-agent/commit/71ff5238ec4643ddc6bddcfbc8be4b1cdd400684) | 200 | 87b82e12a0a8083d976f362adca706c92c0325b3531e9168472405a3206a8918 | - |
| [R051](https://github.com/NousResearch/hermes-agent/blob/v0.21.7/tools/approval.py#L910-L942) | 200 | aaf3c2956a7f031e4f61ee58536bedfb2b50901d7158ff03560ee5977f4049e2 | yes |
| [R052](https://github.com/NousResearch/hermes-agent/blob/v0.21.7/tools/approval.py#L1128-L1169) | 200 | aaf3c2956a7f031e4f61ee58536bedfb2b50901d7158ff03560ee5977f4049e2 | yes |
| [R053](https://github.com/temporal-community/temporal-agent-harness/releases/tag/0.6.0) | 200 | 8154e62e54cc516ff6716722a0b9664f506c63982d7cb222c5251a46ba28f418 | - |
| [R054](https://api.github.com/repos/temporal-community/temporal-agent-harness/commits/2d0c06bdeaf08e80500256ebd3c5405e9a342e01) | 200 | 3e6fabf81ff4cfcc60d5385496ca7eb5be3bafca0ca8584b5fea43b238222f01 | - |
| [R055](https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/pyproject.toml#L79-L84) | 200 | 2aec808c657ccbaec702600eedb40d86e1d4438454d73ba1fd631c67415b28e4 | yes |
| [R056](https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/harness/code_mode/monty_stepper.py#L9-L106) | 200 | d9efe1e96b81c98e8da60f8baf46d4ff716c696ac836b6cede25df487e538adc | yes |
| [R057](https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/web/app.py#L176-L184) | 200 | 851f552322e7db4e76911c7611a88b7c9c8c6f389384222d6c8f96f7c7eddc04 | yes |
| [R058](https://github.com/github/copilot-cli/blob/v1.0.97/changelog.md) | 200 | e34f83815e74c680b2ca8f1433919c04ec6655d1d05d8ef6404e08fbfefeff7d | yes |
| [R059](https://github.com/github/docs/blob/602021b0ba16/content/copilot/concepts/security-governance-and-network-settings/about-cloud-and-local-sandboxes.md#L42-L118) | 200 | 59e5a73cc59b8c0898a02a1e43d8fa1a43a4a8503c59249d4e77868301d50197 | yes |
| [R060](https://github.com/github/docs/blob/602021b0ba16/content/copilot/how-tos/cloud-and-local-sandboxes/configuring-local-sandbox-settings.md#L151-L157) | 200 | 8c07e935909999f0be25a838c902e5749ffd855cf63c144cf5dd5838ab133b5b | yes |
| [R061](https://github.com/github/docs/blob/602021b0ba16/content/copilot/how-tos/cloud-and-local-sandboxes/using-local-sandboxing.md) | 200 | 1ac97d8b7cad3e12787933568d9bb3bee124bc465acab7a30188ae995f46c72c | yes |
| [R062](https://github.com/github/docs/blob/602021b0ba16/content/copilot/reference/enterprise-administrators/enterprise-managed-settings.md#L351-L363) | 200 | 651b93dfa0e53a6a66bd3e80cb1a709903f55619294f2b7b89b442f048c94e58 | yes |
| [R063](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/features/src/lib.rs#L1763-L1814) | 200 | b2d81978097a0bcc53750ef7e3fb3dfae655c3cb1b26250525d02980ee09811f | yes |
| [R064](https://github.com/openclaw/openclaw/compare/ab5611f0...v2026.8.35) | 200 | 3655414603526d894c105621ce6af631de9ab48727ef184f205c4c2c94d8137f | - |
| [R065](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.0-rc.2) | 200 | a88548846b89967a61e23ac52bd82bbabf5d0b20b18bfb07056aa3d207a881c1 | - |
| [R066](https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/client/connection/src/browser-auth.ts#L125-L177) | 200 | 1fb89deeda88d8f7e48afe729695b1bb98d350bc61951a5fb4161059de50fe8e | yes |
| [R067](https://github.com/paperclipai/paperclip/releases/tag/v2026.824.0) | 200 | acf51992b1f40cd0b00bd839727de8da9d6304c42fdbfca79886742c425641a2 | - |
| [R068](https://github.com/paperclipai/paperclip/compare/c2cfd55e...v2026.831.0) | 200 | 30a4c1b287a03ba4a306f68b3b45e85c02c42d129c4f941992771e760f0b887b | - |
| [R069](https://github.com/google-gemini/gemini-cli/releases/tag/v0.57.0) | 200 | a4e5592cf33e8abdcd583a68706d4e9723e498bc47fc538ebbecd400a89c1c24 | - |
| [R070](https://github.com/vercel/eve/blob/eve%400.79.0/docs/tools/human-in-the-loop.md) | 200 | c4a9ca34b33f1162af702509a009c95271cd556d3ccca473e21aba53507f461c | yes |
| [R071](https://github.com/vercel/eve/blob/eve%400.79.0/docs/guides/self-modification.md#L79-L87) | 200 | 4d8ab169373c1066346d108b7ba600c4f659059cfc7ec25dd1a81866a4f7d886 | yes |
| [R072](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.8.19) | 200 | 2dc1669584152f8c38f140a67ecb6abd8cf8abdaae7ce92c6d72db313e948205 | - |
| [R073](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/cli/src/config/extensions/github.ts#L32-L80) | 200 | 395e33f12c50c601220f31676db60ac6f994cab8fc3cdf6b24996d9df8096309 | yes |
| [R074](https://github.com/anthropics/claude-code/blob/2301018b1f61073c501a8e7a4813ef48c239163b/CHANGELOG.md) | 200 | 0383b383e05c30b7592c512ea3356104cbc3a799d028d36204033175ff256a51 | - |
| [R075](https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.52.external.md?generation=1791825995316875) | 200 | ac1988836febd3a9af026a5b2a50509a4d80c71c8c6fd04ccfe40b3baf111d90 | - |
| [R076](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/features/src/lib.rs#L1805-L1808) | 200 | b2d81978097a0bcc53750ef7e3fb3dfae655c3cb1b26250525d02980ee09811f | yes |
| [R077](https://github.com/openclaw/openclaw/releases/tag/v2026.8.35) | 200 | eed3f5b99141edb04f7d856c2dfb7c8c2dc2f0bd6ee5f4526aaf1384a67327a0 | - |
| [R078](https://github.com/temporal-community/temporal-agent-harness/commit/e62c778b4abbde588204c0ac294f35d4d46bfa33) | 200 | f07b092ed8b50d0e6fc3c5d667389443393a31afd9980d6753114374ae781fd5 | - |
| [R079](https://github.com/anthropics/claude-code/blob/2301018b1f61073c501a8e7a4813ef48c239163b/CLAUDE.md) | 200 | 0fafa0a267c1a7320c4d9ccb4acaa27bdb7062e34cb23569f32a7a472ed0c7ac | - |
| [R080](https://code.claude.com/docs/en/permission-modes#server-side-classifier-review) | 200 | 10f1a077094deb990b04305544359566cf26f6998f141e490d81e0a4d510a29d | - |
| [R081](https://web.archive.org/web/20260921092459/https://code.claude.com/docs/en/auto-mode-classifier-billing) | 200 | 11e71a2efa01acf1f5a6ecc5b8ead15a2661803d7938eeb40b2d036fd7113b64 | - |
| [R082](https://cursor.com/changelog/rollouts-and-security-reviewer) | 200 | 5f1b583234d51dfc490fd3fc527b191d43c417c108a61e1e56a41c068bdcdb3b | - |
| [R083](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/app-server-daemon/README.md#L48-L68) | 200 | 6f8f50fc23fbd2de03b75296c5f97b83b8723d5808f4c6071782d4b52e62cd59 | yes |
| [R084](https://github.com/openai/codex/commit/30758e5c77c14e6ddcc53a6c7407a477fed4ac76) | 200 | b4720ed6f09e6c05aece1a05665924fa1213268d717ed2a5260c732446f45c4b | - |
| [R085](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/app-server-daemon/README.md#L1-L9) | 200 | 6f8f50fc23fbd2de03b75296c5f97b83b8723d5808f4c6071782d4b52e62cd59 | yes |
| [R086](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/core/src/agents_md.rs#L63-L66) | 200 | 97427a870741b904a3f3c143f5990eaaa65b5bfa99ddac1808b2980052b5fc78 | yes |
| [R087](https://github.com/anthropics/claude-code/blob/2301018b1f61073c501a8e7a4813ef48c239163b/CHANGELOG.md#L920) | 200 | 0383b383e05c30b7592c512ea3356104cbc3a799d028d36204033175ff256a51 | - |
| [R088](https://github.com/Homebrew/homebrew-cask/commit/a1326862d9154547bcda62a60c007b734cf36dc4) | 200 | f9bcb50ae8e9e2e59f2ba8906b3a7feff5db7bb93ff86b621e4ed491720f4a80 | - |
| [R089](https://github.com/anthropics/claude-code/blob/2301018b1f61073c501a8e7a4813ef48c239163b/CHANGELOG.md#L1477) | 200 | 0383b383e05c30b7592c512ea3356104cbc3a799d028d36204033175ff256a51 | - |
| [R090](https://github.com/anthropics/claude-code/security/advisories/GHSA-pq7j-f95f-qfcv) | 200 | 45e4c28191ce6498b76d2aeb7d437f11528ff83dd49b41dcd69c52e834a2e208 | - |
| [R091](https://github.com/google-gemini/gemini-cli/releases/tag/v0.61.0) | 200 | 38f6f0de719f0fdc0a00c13b17422bcfe788bed70ddbde4f1dec581ce6bff891 | - |
| [R092](https://github.com/google-gemini/gemini-cli/commit/2fe7c2d3f065dc40ad573d50b2091116f8a4aa18) | 200 | 0bda08abe88ed0f2f284d68b3c7a36a85a4ac70b11b64941ff1b729a7f3ea605 | - |
| [R093](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/prompts/snippets.ts#L602-L615) | 200 | b2cccbd0cf68e33d057f33938e457fe3c781cc7e65c593f7a3974d70c5c68fe7 | yes |
| [R094](https://docs.cloud.google.com/gemini/docs/codeassist/sunset) | 200 | acab4e286d496734c0f85ffb004e9df729bdce8c5a3ef36c6b88290b89903e3b | - |
| [R095](https://github.com/google-gemini/gemini-cli/blob/v0.63.0/docs/core/remote-agents.md) | 200 | 8dd736d4ad31ffdb3ef8736746da31935b00fffaa37de07408827bf36d6fc2aa | yes |
| [R096](https://github.com/openclaw/openclaw/blob/v2026.10.3/src/agents/agent-tools.read.ts#L1362-L1495) | 200 | c0fc88dd28e2b3fbdc54f30ceaa030a11358544d174d9cb9a9f86971f4f715dc | - |
| [R097](https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/tools/skill-workshop/configuration.md#L68-L84) | 200 | ffe092119c33af360f57343b23d284efc6e5308ffa7dea28ef9aa8948962123d | - |
| [R098](https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/cli/openclaw.md#L120-L143) | 200 | a6566e379ba9d9de7605707a84b1abb741b249eb392033aa1e09b82c0d778554 | - |
| [R099](https://github.com/NousResearch/hermes-agent/releases/tag/v0.21.6) | 200 | f290a29199984218034421ed229c8eae8d9891cd7f4d546150abe7c15dd08bea | - |
| [R100](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.9.24) | 200 | db5b1cd0c1d4818ca4d7c56807494b9873922be196421693d7c8b747d6848f2f | - |
| [R101](https://github.com/NousResearch/hermes-agent/commit/911da42e9e03ba8594ab2af5dfd1e50e7e721e3e) | 200 | 08caa52d09b9937cfe23c541a9608bc064411796f9e9403196d223e6cc98992d | - |
| [R102](https://github.com/NousResearch/hermes-agent/blob/v0.21.7/scripts/install.sh) | 200 | 034845e34289813ff5fb7fd3e071ec69f6b14aee8ba297a477b31dda6374cb86 | yes |
| [R103](https://github.com/NousResearch/hermes-agent/blob/v0.21.7/hermes_cli/config_defaults.py) | 200 | 15b4b249c7863682d4872dd19ecaf4990d927c9ab837278b178f917068a5ac6b | yes |
| [R104](https://github.com/NousResearch/hermes-agent/tree/v0.21.7/plugins/dashboard_auth/self_hosted) | 200 (contents API) | f71ea22e0615a11a4adf52900daff52f0a635bf48ffeb6df6c28ae01e5dad70e | - |
| [R105](https://github.com/paperclipai/paperclip/blob/v2026.1012.0/server/src/services/agent-permissions.ts#L3-L28) | 200 | 6eae806e755a953b91577d73be180a8ae4bd939d4dd522fd19169784fed3b798 | yes |
| [R106](https://github.com/paperclipai/paperclip/blob/v2026.1012.0/server/src/services/tool-access-policy.ts#L1466-L1480) | 200 | b8ec30d1355e655554948b84b43b675d1aea4c6dca42fabfc6f481315d43fd1f | yes |
| [R107](https://github.com/paperclipai/paperclip/blob/v2026.1012.0/server/src/services/issue-thread-interaction-resolution.ts#L158-L177) | 200 | 9912ee1bf43695fb24f3634cd78d138e3b927f8b720c4143fa91032a1e82c636 | yes |
| [R108](https://github.com/paperclipai/paperclip/releases/tag/v2026.626.0) | 200 | 75f38777ed17b6fdd8f130d532dd7164f5647a8b7af44def79087481e088b429 | - |
| [R109](https://github.com/paperclipai/paperclip/blob/v2026.1012.0/server/src/routes/secrets.ts#L1091-L1103) | 200 | e542f822c33e95b9189c371e620223d629f44fb7edce82231aeacdd8bf3184f1 | yes |
| [R110](https://github.com/paperclipai/paperclip/blob/v2026.1012.0/packages/adapters/grok-local/src/server/execute.ts#L266-L273) | 200 | b70d12a44a5d2c7c1e17773e94ec581e8115e53355efd6807e621daf8e7e0f6a | yes |
| [R111](https://github.com/OpenHands/software-agent-sdk/commit/9b66ae79c39751fdaf637de8852461467a518b45) | 200 | 883450409be6994d8b5093f629aa0094fcb539d518f5fbc28ee3bdf36799d882 | - |
| [R112](https://github.com/OpenHands/OpenHands/blob/v1.27.1/scripts/bind-host.mjs#L8-L77) | 200 | 24d624d66fc0823f7391951ca0b3d62d0ed38e22617b1b10ce2b4222d88521cf | yes |
| [R113](https://github.com/earendil-works/pi/blob/v1.2.0/packages/durable/README.md) | 200 | 08abf68a80468eb5f14ad497b6e044fc677217914b2f93ab5a35ddfe385c8d6a | yes |
| [R114](https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/core/project-trust.ts#L47-L88) | 200 | 7e5875d8786c7a6b28e8263d879f1454e6273c6cd432a8da76d75ee5ff51088f | yes |
| [R115](https://github.com/agent0ai/agent-zero/releases/tag/v2.14) | 200 | 0c1e78103bdbd063fadbe21ad280e01f4c7efcf1d5e17535c371c0e8c3513735 | - |
| [R116](https://github.com/agent0ai/a0-connector/commit/dd5468f0a450973edc73f6fa48638505347012c9) | 200 | d016dbd2af78b9ca91d93c9c8d9bd966bbbc39c9ce75e723c6175643a1f8b1a2 | - |
| [R117](https://github.com/agent0ai/agent-zero/blob/v2.14/plugins/_browser/helpers/runtime.py#L3192-L3217) | 200 | 5e2dccbc11435a2f93fd339c14753fb48824bf72567647bb22c85b048bedc0e0 | yes |
| [R118](https://github.com/agent0ai/agent-zero/commit/17033d277e4a39a99865455d87e4b0719bc3bf0f) | 200 | ea2d4d419946ea76ad54897069e051b44bb4605ee32ce76465ccbc6a3750fc5d | - |
| [R119](https://github.com/vercel/eve/commit/bb70743186612e13bd0b05c58d37e5b024d17a76) | 200 | e51af6597872fd61f400113e23ba0240ef3f9c84888f96167aee6da44cd14bc9 | - |
| [R120](https://github.com/vercel/eve/pull/4515) | 200 | 178691cb8b12fbbf6df143d1a94b5b1139d14840b34b3324d07b277517d2eed3 | - |
| [R121](https://github.com/can1357/oh-my-pi/commit/2f92f3b5aa2035d21c9f016f9ff6350795e5685a) | 200 | d5bcfb46f94cd896d1630553bb5e2d15c414dec389ed99a6b6333f8ad94510b2 | - |
| [R122](https://github.com/can1357/oh-my-pi/releases/tag/v18.10.2) | 200 | 056c223eae3ded74fe35ecd736f0c9e3da45b28e10dffee07539c3b40328db3c | - |
| [R123](https://github.com/withastro/flue/blob/v2.3.0/CHANGELOG.md) | 200 | 7e4120ff2d29c715e4b187f0b622a414d4283d14eb80790ef086e11c2a74e32c | - |
| [R124](https://github.com/withastro/flue/commit/95a8c86244557e4c257b0fbd7eef2481de2c2150) | 200 | 65fd66d8b94a826f7ea77184e422e2617e8431d95825b5681a21dd33ec6ddac6 | - |
| [R125](https://github.com/withastro/flue/releases/tag/%40flue/runtime%402.1.1) | 200 | 6efc40e52e70f894c9a255600e9cf543c2d358a2e3759c95136b20de2935e0bb | - |
| [R126](https://github.com/withastro/flue/blob/v2.3.0/apps/docs/src/content/docs/guide/tools.md#L228-L433) | 200 | 53468cbe9165a62f637864f83fb65fb63af1e073986b2b78720ef386807d5f4c | - |
| [R127](https://github.com/withastro/flue/blob/v2.3.0/packages/runtime/src/runtime/providers.ts#L31-L33) | 200 | 76ed55b947725b40f9de686fc3f69080e4a8ff61e1d66b946c49d0f841c0fbb3 | - |
| [R128](https://github.com/google-antigravity/antigravity-cli/blob/1.3.4/CHANGELOG.md) | 200 | 071b1a9743d968eac53a08931b56a1b480c4b25777435370123d44e5b9077697 | - |
| [R129](https://web.archive.org/web/20260918134151/https://antigravity.google/docs/cli/troubleshooting) | 200 | f372cfcc169f376c673c5a4f5bd89f99efe99cd08e735411b202826c93382624 | - |
| [R130](https://github.com/google-antigravity/antigravity-cli/blob/1.2.9/CHANGELOG.md) | 200 | 19a0658be17e18d9bf9bbf4fd8ab7ecd97ade9fa7b7aa11e9186c47f15165a11 | - |
| [R131](https://github.com/google-antigravity/antigravity-cli/blob/1.3.2/CHANGELOG.md) | 200 | 1e8390fe7ed7767e7536828fa4c7a9e0ef88306d184936cc958789448e908f25 | - |
| [R132](https://github.com/github/docs/blob/602021b0ba16/content/copilot/reference/copilot-cli-reference/cli-config-dir-reference.md#L452-L453) | 200 | 9f11c5ea64296aeebe31559819858f9d49a28c47192a2b8c63fbb4c7cb32e6bd | yes |
| [R133](https://github.com/github/docs/blob/602021b0ba16/content/copilot/how-tos/cloud-and-local-sandboxes/configuring-local-sandbox-settings.md) | 200 | 8c07e935909999f0be25a838c902e5749ffd855cf63c144cf5dd5838ab133b5b | yes |
| [R134](https://cursor.com/docs/release-notes/ide#oct-9-2026) | 200 | 99f1cd157cfebd9a99fe978bcbf7940b05bcc09e4dcd86e598a0b935020d529d | - |
| [R135](https://cursor.com/docs/release-notes/web#sep-21-2026) | 200 | 2539e5eb3a1e24b1a7b80156a61cab646445935b01b7ad2edea87bd897aaa737 | - |
| [R136](https://github.com/xai-org/grok-build/tree/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8) | 200 | 664e84d6cc208391bda827ee54cdba055258b84a788e0760105803cadc41860d | - |
| [R137](https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.51.external.md?generation=1791580490548989) | 200 | 5b9f8ddda7852ace7eb0e37d7acbde1b5df2102717a174cb6d47e24321e58123 | - |
| [R138](https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.54.external.md?generation=1791844061749505) | 200 | da780192c0a24a75ca1ed3f22d9638043c4b078c685b399e18cbd5db0377971a | - |
| [R139](https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/session/session-log-deepseek/src/index.ts#L51-L77) | 200 | 28db84b705fbf74970cf9dd566fcb7908b1d1cea798d8ea5bd136113ccb260b0 | yes |
| [R140](https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/bundle/headless/src/startup.ts#L43-L44) | 200 | 0edebc16f554a08eb5c141721204065c27a73860d0ab45626df28f97d8e402a4 | yes |
| [R141](https://github.com/deepseek-ai/deepseek-harness/blob/d743267388641bc76f17c45ce8b4c231aed1d32c/packages/experimental/agent-team/README.md#L68-L70) | 200 | 4fe88f79607eccb528ff99e765ee30d8938a34d443f611bd15a18db25e2194fc | yes |
| [R142](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi-runtime-just-bash/src/index.ts#L26-L64) | 200 | f6d9c5d2f756bc55c80438cbc318646895aa9849834f65cc7d8bcb8cd7bc56a6 | - |
| [R143](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/approval.ts#L366-L506) | 200 | 78c1d55e212f63935297f6eff1ddd798aa498e4aa6c5eb78f3b73bf21e57f881 | - |
| [R144](https://github.com/hunvreus/heypi/blob/a4f69da2ed64d42fc25e75341956ce7c34f77e73/packages/heypi/src/admin/index.ts#L119-L129) | 200 | b894d47d7df110a23c9319091adfba8056c33306380ed441644ef46b3c17d711 | - |
| [R145](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/package.json#L64) | 200 | 87b11bdfe9228f55c7de755ed13a0b1366ec076146c85284c20f68ef1b48037a | - |
| [R146](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/docs/operations/plugin-review-workflow.md#L1-L62) | 200 | 3c5a859b9a4d24d40d74d74c529112e4b105a43c7779f1983ee46b66999819e5 | yes |
| [R147](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/install.sh#L173-L185) | 200 | 6e6234b3a824186a1cdf7576d8a8153d9cfb66624215d7a4ae48d147e7e4ce02 | yes |
| [R148](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/2354efbaa6b355b93a53d6052fcc8f56950893b1) | 200 | 43ed3b65758738aa3f1cf730e775cd59645bd7c03e199cb7c10108cd7de599c7 | - |
| [R149](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/issues/433#issuecomment-6131196991) | 200 | 1eb50a4847ad603e3de1c22d7d5d7cc1e60206f5aff85fdf51132efde75049a2 | - |
| [R150](https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/native/native_policy_hook.py#L543-L584) | 200 | 00994b261ba815666a46fe1e7abfd10a9741318cef75ec81718f9ce31d0f8485 | yes |
| [R151](https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/policies/builtins/cost.py#L84-L135) | 200 | 42bcdf5598aaf89063a3892d05cf90f646db54e349f6a4c47875999713c48b78 | yes |
| [R152](https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/runtime/policies/builder.py#L437-L444) | 200 | 73e40c95e5d37925fb291bfd25800ad621aeec25099fc701772e1be7e1657c11 | yes |
| [R153](https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/server/routes/sessions/routes_resources.py#L2876-L2915) | 200 | 4f731145ce26774702e77b1d025b0f71ca09d0019f5e225b9eec25ecbc29587f | yes |
| [R154](https://github.com/omnigent-ai/omnigent/commit/48c59880726d230f7002d0b9536ff0121d6bb92b) | 200 | c03ce05b334051f2388b47dea5777f1bc80dc3a4973fdd6cc56742359aed95cc | - |
| [R155](https://github.com/temporal-community/temporal-agent-harness/releases/tag/0.5.0) | 200 | 028b3850630321f4a47fa9d3b79dcf16db66054a26c110a22b8c16330bd1eb1e | - |
| [R156](https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/harness/agent_protocol/agent_interface.py#L455-L469) | 200 | 273fa14390a9494743d6606fec1239f0c0a4042481fea5f33280f6f89f6fb4cf | yes |
| [R157](https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/ai_sdks/google_genai_plugin/_interactions_conversation.py#L1-L31) | 200 | 8d3610ff1a56f3aa3326126897a23287e81f296666c2297661174b62b0626768 | yes |
| [R158](https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/harness/jev_approvals/activity.py#L85-L97) | 200 | 3df5b34022ca9bd56a58582a27670a9efb9435569fa33f21293d08f31a0e4614 | yes |
| [R159](https://web.archive.org/web/20260922183130/https://unreallabs.ai/blog/unreal-agent/) | 200 | fad26bb0305545e5e974e31e67267e02eff2266b34483cc2adce2682755026f6 | - |
| [R160](https://hub.harborframework.com/jobs/27133053-2015-46f3-8c72-6b6910859da6) | 200 | 07c963d82b37723a6acac5257ccd42c53b1e9db7223f6972ce6888c02bdecced | - |
| [R161](https://github.com/unreallabsai/unreal-agent/releases/tag/v0.3.1) | 200 | 3a4c8308f10e57353d6898d1cabcb5af69e8d7d231fc202cd1e46e8747c430e2 | - |
| [R162](https://github.com/unreallabsai/unreal-agent/commit/31f4fdadc54dd5061ae33959bc151d1b649c3a31) | 200 | 179527679a9cf9c3879e9ae0348a8093f3bdf010d02ae8fc546ea043ea68aaf9 | - |
| [R163](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/operation/local_manager.go#L75-L165) | 200 | a123cece6488c7adf6b1376232fec15af704fa4f5cef1f782597ef003d4155ff | yes |
| [R164](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/.goreleaser.yaml#L43) | 200 | d7ff08471275f6051316161a9840b5b5c7a1bd460ddce7f2d5c084231b5dbb13 | yes |
| [R165](https://hub.docker.com/v2/users/unreallabs/) | 200 | 944616ba6cc068005de8d9ce9e4c518e1ac37a3877293c31199430b52d9453f3 | - |
| [R166](https://arena.ai/blog/coding-agents-harness-tax) | 200 | 085b1a06db6dbfd807fc783c9b59f4fdb9856718cd7e26f7c61965b69213cda1 | - |
| [R167](https://github.com/vercel/eve/blob/eve%400.79.0/apps/docs/lib/evals/eve-code-benchmark.json) | 200 | 48d015b16d555bd3f832a7d29212ac2bd9640dc27a8ea6fdff396a76645ea00a | yes |
| [R168](https://github.com/vercel/eve/blob/eve%400.79.0/docs/guides/self-modification.md) | 200 | 4d8ab169373c1066346d108b7ba600c4f659059cfc7ec25dd1a81866a4f7d886 | yes |
| [R169](https://github.com/vercel/eve/releases/tag/eve%400.71.3) | 200 | 31376c7fc458d1e8f98e152db9269a1923dbab7a00b48749910197f8c3483d18 | - |
| [R170](https://api.github.com/repos/vercel/eve/pulls/4604) | 200 | 008fe04bee6d89da8111ce55dccefb26ce62802942e3e6aff898dae1b53426ae | - |
| [R171](https://api.github.com/repos/vercel/eve/pulls/4749) | 200 | f2cd7857101d85b0a82a83eb30344ccce438610adb4b124e52e09791d17a8347 | - |
| [R172](https://github.com/OpenHands/software-agent-sdk/blob/v1.54.0/openhands-agent-server/openhands/agent_server/api.py#L469-L503) | 200 | 108d602f6775f80dfc360200b265d6c83f926faa4b435ea1b2170f6ecbfb7e18 | - |
| [R173](https://github.com/OpenHands/software-agent-sdk/blob/v1.54.0/openhands-agent-server/openhands/agent_server/dependencies.py#L25-L37) | 200 | 2bf1483569a3837365c4a1f332de3cf707cf9afd21c46686d64c5f008ccace3f | - |
| [R174](https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/web/cli.py#L145-L154) | 200 | a754d51f6910063df3d07028c6fd8ce0e2c4456cfb850510615b96d55e37fb74 | yes |
| [R175](https://github.com/github/docs/blob/602021b0ba16b4a90e9c0a962a67ca9744eac82e/content/copilot/concepts/security-governance-and-network-settings/about-cloud-and-local-sandboxes.md#L42-L118) | 200 | 59e5a73cc59b8c0898a02a1e43d8fa1a43a4a8503c59249d4e77868301d50197 | yes |
| [R176](https://github.com/github/docs/blob/602021b0ba16b4a90e9c0a962a67ca9744eac82e/content/copilot/how-tos/cloud-and-local-sandboxes/configuring-local-sandbox-settings.md#L151-L157) | 200 | 8c07e935909999f0be25a838c902e5749ffd855cf63c144cf5dd5838ab133b5b | yes |
| [R177](https://github.com/github/docs/blob/602021b0ba16b4a90e9c0a962a67ca9744eac82e/content/copilot/how-tos/cloud-and-local-sandboxes/using-local-sandboxing.md) | 200 | 1ac97d8b7cad3e12787933568d9bb3bee124bc465acab7a30188ae995f46c72c | yes |
| [R178](https://github.com/github/docs/blob/602021b0ba16b4a90e9c0a962a67ca9744eac82e/content/copilot/reference/enterprise-administrators/enterprise-managed-settings.md#L351-L363) | 200 | 651b93dfa0e53a6a66bd3e80cb1a709903f55619294f2b7b89b442f048c94e58 | yes |
| [R179](https://github.com/openai/codex/blob/rust-v0.163.0-alpha.10/codex-rs/features/src/lib.rs) | 200 | 5317e79cb2f5a72044b15ef9c506e9906c295f5a4e43cc1f1f05b87455824542 | yes |
| [R180](https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/client/connection/src/browser-auth.ts#L125-L202) | 200 | 1fb89deeda88d8f7e48afe729695b1bb98d350bc61951a5fb4161059de50fe8e | yes |
| [R181](https://github.com/anthropics/claude-code/blob/2301018b1f61073c501a8e7a4813ef48c239163b/CHANGELOG.md#L1474-L1475) | 200 | 0383b383e05c30b7592c512ea3356104cbc3a799d028d36204033175ff256a51 | - |
| [R182](https://github.com/NousResearch/hermes-agent/blob/v0.21.7/plugins/dashboard_auth/self_hosted/__init__.py) | 200 | 445da06266065691d4936688812cd6787736cb4a4775dce196e15e62973ccb5b | yes |
| [R183](https://github.com/agent0ai/agent-zero/releases/tag/v2.13) | 200 | 839b18e078f1513a6561a2aa14edfbdf458b155423dfed73d8f9701ae230b25b | - |
| [R184](https://api.github.com/repos/NousResearch/hermes-agent/pulls/90224) | 200 | 556d814175e28253579af7838618ea070bed3b6f38d71ddcd98f495d96de26c1 | - |
| [R185](https://api.github.com/repos/NousResearch/hermes-agent/pulls/90391) | 200 | 24febb07f3337a107fc8c8e88b92d5d211298c12ee46c765ff1c08968b7220ac | - |
| [R186](https://api.github.com/repos/NousResearch/hermes-agent/pulls/90765) | 200 | da27024bdc451a273e057fd89c99af818d0af658b010486a7be41d7b68d1ecf1 | - |

## Validation

- `node site/scripts/check-integrity.mjs`: exit 0, `integrity check: clean`.
  It indexed 1233 findings and 212 signal records (211 accepted, 1 withdrawn),
  with 22 watchlist sources and 3 referenced adjacent sources across the repo.
- Current packet: 14 unique accepted signal IDs, 24 unique finding IDs; every
  finding file exists and its frontmatter ID/source matches its signal.
- Both YAML files parse. Carry-forward preserves all 22 original question
  strings: 8 answered historical questions and 14 new q-only entries.
- All four authorized output files contain ASCII only and no spaced double
  hyphen used as prose punctuation. Every action-bearing line has a corresponding
  per-signal review above.
- Scoped `git diff --check` returned exit 0. The signal/thread/report files are
  untracked and carry-forward is gitignored, so independent text/YAML checks
  cover them rather than relying on git diff alone.
- Only the three named input artifacts and this report were written. No site
  build, package installation, git write or execution of cloned code occurred.

