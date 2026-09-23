---
schema_version: bitter.frontier_profile.v0
profile_id: gemini-cli
label: Gemini CLI
owner: Google
source_contract: sources/gemini-cli.yml
homepage: https://github.com/google-gemini/gemini-cli
docs: https://google-gemini.github.io/gemini-cli/docs/
tagline: "Four hardening stables in a month from a tool its vendor reportedly calls deprecated. The weekly train is clean; the fix you reported may never board it."
compared_with:
  - antigravity
x:
  project: geminicli
  maintainers:
    - handle: ntaylormullen
      name: N. Taylor Mullen
repo: https://github.com/google-gemini/gemini-cli
surface_class: open_source_commits
evidence_floor: commit_diff_reviewed
status: active_watch
last_updated: 2026-09-21
last_full_review: 2026-09-23
claims:
  - id: autoedit-and-seatbelt
    finding_id: 2026-09-21-gemini-cli-autoedit-path-check-never-loaded-and-seatbelt-reached-docker-socket
    last_verified: 2026-09-23
    status: active
  - id: plugin4shell-unpatched
    finding_id: 2026-09-21-gemini-cli-extension-install-still-checks-out-fetch-head-after-plugin4shell-disclosure
    last_verified: 2026-09-23
    status: active
  - id: v0-57-0-carries-august-preview-fixes
    finding_id: 2026-09-21-gemini-cli-v0-57-0-promotes-every-preview-only-item-from-the-previous-brief
    last_verified: 2026-09-23
    status: active
  - id: v0-59-v0-60-hardening
    finding_id: 2026-09-21-gemini-cli-v0-59-0-and-v0-60-0-harden-mcp-oauth-web-fetch-credentials-and-extensions
    last_verified: 2026-09-23
    status: active
  - id: build-file-gate-preview-only
    finding_id: 2026-09-21-gemini-cli-build-file-edit-gate-is-preview-only-at-close
    last_verified: 2026-09-23
    status: active
    channel: preview-or-beta
  - id: a2a-self-trust-rce-fixed-v0-53-0
    finding_id: 2026-08-03-gemini-cli-a2a-workspace-self-trust-rce-reaches-stable
    last_verified: 2026-08-03
    status: active
  - id: adc-https-enforced-v0-54-0
    finding_id: 2026-08-10-gemini-cli-gemini-cli-v0-54-0-https-enforced-for-google-credential-auth-keychain
    last_verified: 2026-08-10
    status: active
  - id: agent-authored-prs-on-main
    finding_id: 2026-08-17-gemini-cli-google-starts-merging-agent-authored-prs-into-the-gemini-cli-default
    last_verified: 2026-08-17
    status: active
  - id: v0-56-0-stable-is-two-chore-commits
    finding_id: 2026-08-20-gemini-cli-v0-56-0-is-stable-and-two-chore-commits-past-v0-55-1
    last_verified: 2026-08-20
    status: retired
    note: "Superseded. npm latest is 0.60.0 at 2026-09-21."
  - id: enableagents-false-loads-builtins-on-0-56-0
    finding_id: 2026-08-20-gemini-cli-enableagents-false-still-loads-builtins-on-0-56-0
    last_verified: 2026-08-20
    status: retired
    note: "Fixed in v0.57.0 (753e4cb55)."
  - id: git-env-hardening-preview-only
    finding_id: 2026-08-20-gemini-cli-git-env-hardening-is-preview-not-0-56-0
    last_verified: 2026-08-20
    status: retired
    note: "Reached stable in v0.57.0 (c0d192452)."
  - id: consumer-service-retired-2026-06-18
    finding_id: 2026-07-01-gemini-cli-consumer-service-retired
    last_verified: 2026-07-01
    status: active
  - id: oss-repo-active-enterprise-serving
    finding_id: 2026-07-01-gemini-cli-consumer-service-retired
    last_verified: 2026-09-23
    status: active
  - id: memory-reviewable-patch
    finding_id: 2026-05-07-gemini-reviewable-memory-and-trust
    last_verified: 2026-05-07
    status: active
  - id: memory-private-allowlist
    finding_id: 2026-05-07-gemini-reviewable-memory-and-trust
    last_verified: 2026-05-07
    status: active
  - id: workspace-trust-visible-mcp
    finding_id: 2026-05-07-gemini-reviewable-memory-and-trust
    last_verified: 2026-05-07
    status: active
  - id: workspace-trust-headless-enforcement
    finding_id: 2026-05-11-gemini-subagent-protocol-and-session-portability
    last_verified: 2026-05-11
    status: active
  - id: shell-safety-evals
    finding_id: 2026-05-07-gemini-reviewable-memory-and-trust
    last_verified: 2026-05-07
    status: active
  - id: shell-tools-allowlist
    finding_id: 2026-05-11-gemini-subagent-protocol-and-session-portability
    last_verified: 2026-05-11
    status: active
  - id: subagents-approval-mode-aware
    finding_id: 2026-05-07-gemini-reviewable-memory-and-trust
    last_verified: 2026-05-07
    status: active
  - id: subagent-protocol-pluggable
    finding_id: 2026-05-11-gemini-subagent-protocol-and-session-portability
    last_verified: 2026-05-11
    status: active
  - id: session-invocation-protocols-stable
    finding_id: 2026-05-27-gemini-session-invocation-protocols-stable
    last_verified: 2026-05-27
    status: active
  - id: agent-registration-first-wins
    finding_id: 2026-05-27-gemini-session-invocation-protocols-stable
    last_verified: 2026-05-27
    status: active
  - id: auto-modes-merged
    finding_id: 2026-05-27-gemini-auto-modes-merged-and-policy-engine-in-acp
    last_verified: 2026-05-27
    status: active
  - id: policy-engine-in-acp
    finding_id: 2026-05-27-gemini-auto-modes-merged-and-policy-engine-in-acp
    last_verified: 2026-05-27
    status: active
  - id: auto-edit-shell-redirect-approval
    finding_id: 2026-05-27-gemini-auto-modes-merged-and-policy-engine-in-acp
    last_verified: 2026-05-27
    status: active
  - id: session-export-import
    finding_id: 2026-05-11-gemini-subagent-protocol-and-session-portability
    last_verified: 2026-05-11
    status: active
  - id: session-resume-reliability
    finding_id: 2026-05-12-gemini-session-resume-reliability
    last_verified: 2026-05-12
    status: active
  - id: agent-execution-stopped-json
    finding_id: 2026-05-07-gemini-reviewable-memory-and-trust
    last_verified: 2026-05-07
    status: active
  - id: long-horizon-goal-primitive
    last_verified: 2026-05-11
    status: open_question
    note: "No supporting finding exists. Gemini CLI has shipped no first-class long-horizon goal primitive; nothing through 2026-09-21 changes that reading."
  - id: v0-45-0-mcp-blacklist-and-policy-resilience
    finding_id: 2026-06-03-gemini-cli-v0-45-0-release
    last_verified: 2026-06-03
    status: active
  - id: antigravity-migration-funnel-stable
    finding_id: 2026-06-23-gemini-antigravity-migration-to-stable
    last_verified: 2026-06-23
    status: retired
    note: "The funnel steered users toward a service cutoff that executed on 2026-06-18; the consumer-service-retired claim carries the current fact."
  - id: antigravity-banner-uncapped-stable
    finding_id: 2026-06-23-gemini-antigravity-banner-uncapped-in-stable
    last_verified: 2026-06-23
    status: retired
    note: "Superseded by the executed consumer cutoff of 2026-06-18."
  - id: skill-path-traversal-fix-preview-only
    finding_id: 2026-06-23-gemini-skill-path-traversal-stranded-in-preview
    last_verified: 2026-06-23
    status: retired
    channel: preview-or-beta
    note: "Superseded. The fix reached stable in v0.49.0 (2026-07-01-gemini-cli-skill-install-path-traversal-fix-reaches-stable-in-v0-49)."
  - id: skill-path-traversal-fix-stable-v0-49
    finding_id: 2026-07-01-gemini-cli-skill-install-path-traversal-fix-reaches-stable-in-v0-49
    last_verified: 2026-07-01
    status: active
posture_basis:
  capability:
    - 2026-05-07-gemini-reviewable-memory-and-trust
    - 2026-05-11-gemini-subagent-protocol-and-session-portability
    - 2026-05-12-gemini-session-resume-reliability
    - 2026-05-27-gemini-session-invocation-protocols-stable
    - 2026-09-21-gemini-cli-v0-57-0-promotes-every-preview-only-item-from-the-previous-brief
  accessibility:
    - 2026-07-01-gemini-cli-consumer-service-retired
    - 2026-05-27-gemini-auto-modes-merged-and-policy-engine-in-acp
  governance:
    - 2026-09-21-gemini-cli-autoedit-path-check-never-loaded-and-seatbelt-reached-docker-socket
    - 2026-09-21-gemini-cli-v0-59-0-and-v0-60-0-harden-mcp-oauth-web-fetch-credentials-and-extensions
    - 2026-09-21-gemini-cli-extension-install-still-checks-out-fetch-head-after-plugin4shell-disclosure
    - 2026-09-21-gemini-cli-build-file-edit-gate-is-preview-only-at-close
  succession:
    - 2026-07-01-gemini-cli-consumer-service-retired
stance:
  use_for: "Enterprise Code Assist and Google Cloud teams already on it, at 0.60.0 or later, who want a policy engine they can read, reviewable memory patches and a predictable weekly release train. Unattended runs against repositories you control, with the container sandbox."
  avoid_for: "Installing extensions from repositories you do not control: the Plugin4Shell checkout bug is unfixed at 0.60.0 and Google reportedly will not patch it. Any version below 0.58.0 with autoEdit or the macOS sandbox. New adoption that assumes the fixes you report will ship."
  watch_next: "v0.61.0 stable carrying the build-file edit gate; any Google-authored statement confirming or retracting the deprecation AIR reports; a change to the FETCH_HEAD checkout in the extension installer; the first GitHub security advisory for any of this year's boundary fixes."
---

# Gemini CLI

Gemini CLI is on the watchlist as the strangest posture on it. Google ended
consumer service on 18 June and moved those users to Antigravity CLI. The
Apache-2.0 repository kept shipping for enterprise users, and in the month to
21 September it cut four stables that were almost nothing but security
hardening. In the same month a security firm reported that Google told it the
tool is deprecated and a reported bug will not be fixed. Both things are true.
Plan around the second.

## Where it stands, 2026-09-21

**Who can use it.** The
[18 June cutoff](https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/)
ended access for AI Pro and Ultra, free individual Code Assist and new
GitHub-organization installs. Enterprise Code Assist and Google Cloud paths
kept it. If you are in the first group, this profile is about Antigravity.

**Channel.** npm `latest` is
[0.60.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.60.0)
(15 September), and `preview` is 0.61.0-preview.0. The release shape is now a
clean weekly train: every Monday or Tuesday, last week's preview becomes
stable plus one release commit. Testing `@preview` is testing next week's
`@latest`. The two-week gap between security merges and stable that this
profile warned about in July closed on 25 August, when
[0.57.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.57.0)
carried every fix August had left in preview. On 0.57.0 and later,
`experimental.enableAgents: false`
[actually suppresses the built-in subagents](https://github.com/google-gemini/gemini-cli/blob/v0.57.0/packages/core/src/agents/registry.ts),
and agent git calls
[ignore the workspace's own hooks, pager and credential helpers](https://github.com/google-gemini/gemini-cli/blob/v0.57.0/packages/core/src/utils/gitUtils.ts).
That last one breaks private-repo extension installs that leaned on a
credential helper. Pin exact versions: the registry still carries a stray
dist-tag literally named `false`.

**The floor is 0.60.0.** Two of the month's fixes changed what earlier
sessions should be assumed to have done. Before
[0.58.0](https://github.com/google-gemini/gemini-cli/pull/28961), the
allowed-path rule for edits in autoEdit mode sat in a nested TOML table the
loader silently threw away, so auto-approved edits were never path-checked.
Treat any autoEdit session on 0.57.0 or earlier as having written wherever the
model chose. The same release stopped the
[macOS Seatbelt profile](https://github.com/google-gemini/gemini-cli/blob/v0.58.0/packages/cli/src/utils/sandbox-macos-permissive-open.sb)
reaching a running Docker, OrbStack, Colima or Rancher socket, which let a
sandboxed process start a container that mounted the host. The sandbox was a
fence with a gate in it for anyone running a container runtime.
[0.59.0](https://github.com/google-gemini/gemini-cli/pull/29099) made
environment-declared untrust win over settings and strips a repository's MCP
servers in an untrusted a2a-server.
[0.60.0](https://github.com/google-gemini/gemini-cli/pull/29216) stopped
container sandboxes mounting host `~/.gemini`, where the OAuth and MCP token
stores live. If you ran untrusted repositories in container sandbox mode
before that, rotate the MCP tokens. 0.60.0 also
[strips `NODE_OPTIONS`-class variables and re-prompts when an extension changes its env](https://github.com/google-gemini/gemini-cli/blob/v0.60.0/packages/core/src/services/environmentSanitization.ts),
and [bounds read-only shell auto-approval to the workspace](https://github.com/google-gemini/gemini-cli/pull/29170).
Expect more prompts.

**What 0.60.0 breaks, on purpose.** MCP OAuth servers that omit `iss` in the
redirect [stop authenticating](https://github.com/google-gemini/gemini-cli/pull/29117),
and `web_fetch` [refuses loopback, private and metadata addresses](https://github.com/google-gemini/gemini-cli/blob/v0.60.0/docs/tools/web-fetch.md).
A workflow that fetched a local dev server now needs the shell tool.

**None of it came with an advisory.** The repository published no security
advisory for any of these fixes. They appear only as PR titles in
auto-generated release notes, and the
[docs changelog at 0.60.0](https://github.com/google-gemini/gemini-cli/blob/v0.60.0/docs/changelogs/latest.md)
still names 0.58.0 as latest. An operator who waits for a scanner to flag the
installed version will wait forever. Read the release PR list.

**Plugin4Shell will not be patched.** On 17 September
[AIR Security reported](https://www.air.security/blog-posts/plugin4shell)
that agents installing plugins pinned to a commit do not check the checkout
landed there. Gemini CLI fetches, then checks out `FETCH_HEAD`, and a
repository whose default branch is named `FETCH_HEAD` wins. At 0.60.0 the
installer
[still does exactly that](https://github.com/google-gemini/gemini-cli/blob/v0.60.0/packages/cli/src/config/extensions/github.ts).
AIR says Google answered on 4 August that the tool is deprecated and will not
get a fix. The attacker needs control of the extension repository. Install
extensions only from repositories you control, and run `git rev-parse HEAD`
inside the extension directory afterward.

**Preview-only at close.**
[0.61.0-preview.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.61.0-preview.0)
makes a build or test run ask again after the agent has edited
`package.json`, a Makefile or another build file, and refuses to start a
sandbox with your home directory as its workdir. On 0.60.0, an agent-edited
`package.json` script still runs under a build command you approved earlier.

**Who is writing it.** Since 14 August, PRs titled `[SSR Agent] Issue Fix`
from Google's caretaker pipeline have
[merged under human accounts](https://github.com/google-gemini/gemini-cli/pull/28812),
with a human approval and the title prefix as the only marker. Grep for the
prefix if you audit or vendor the tree.

**What still holds from spring.** Memory updates arrive as
[patches you approve](https://github.com/google-gemini/gemini-cli/commit/a7beb890d093e2cf66ed1ac8debff690b75e1f6d),
[workspace trust applies in headless mode](https://github.com/google-gemini/gemini-cli/commit/dba9b9a0ff5a43a5d40d554b944db3e2ce99d5b6),
and a stopped run emits
[structured JSON](https://github.com/google-gemini/gemini-cli/commit/469092a72cbe368b69df25c0caeefbc911b6d6fd)
for CI. We have not re-read these since May.

## What is unresolved

- Whether Google confirms the deprecation in its own channels. It reaches us
  only through AIR's account. A notice in the repository or on Google's blog
  would settle it.
- Whether the `FETCH_HEAD` checkout changes anyway, deprecation or not.
- Whether v0.61.0 stable carries the build-file gate on the usual weekly
  schedule.
- Where `RemoteSessionInvocation` runs. It has been a stable protocol since
  v0.44.0 with no documented destination.

## Profile hygiene

Dated, not evergreen. Every claim above resolves to a finding in
[the run that produced it](/runs/2026-09-21-weekly-digest-2026-08-20_2026-09-21-frontier-v0/),
or an earlier run named in the claims, and this page says what was true on the
date at the top. See
[METHOD.md](https://github.com/sheetgenius/frontier/blob/main/METHOD.md) for
the evidence contract.
