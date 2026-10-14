---
schema_version: bitter.frontier_profile.v0
profile_id: grok-build
label: Grok Build
owner: xAI
source_contract: sources/grok-build.yml
homepage: https://x.ai/cli
docs: https://docs.x.ai/build/overview
changelog: https://x.ai/build/changelog
repo: https://github.com/xai-org/grok-build
tagline: "xAI's terminal agent; stable 1.0.52 documents a fix for HTTP MCP actions that could repeat after a JSON-RPC error."
surface_class: open_source_commits
evidence_floor: official_changelog
status: active_watch
first_published: 2026-08-21
last_updated: 2026-10-13
last_full_review: 2026-10-13
claims:
  - id: folder-trust-gates-project-rules
    finding_id: 2026-09-21-grok-build-folder-trust-now-gates-project-permission-rules-instructions-and-skills-previously-applied
    last_verified: 2026-10-13
    status: active
  - id: channel-pinnable-no-checksum
    finding_id: 2026-09-21-grok-build-the-channel-question-now-has-an-answer-version-string-per-version-binary-digest-and-a-sour
    last_verified: 2026-09-23
    status: retired
    note: "Superseded: initial version selection is not an updater pin; npm and WinGet carry integrity metadata."
  - id: public-changelog-lags
    finding_id: 2026-09-21-grok-build-public-changelog-is-a-curated-lagging-subset-the-in-tree-notes-are-the-fuller-record
    last_verified: 2026-09-23
    status: retired
    note: "Superseded by generation-pinned external notes; the exact October 13 webpage was not recovered."
  - id: sandbox-write-denies-own-config
    finding_id: 2026-09-21-grok-build-sandbox-profiles-now-write-deny-grok-s-own-config-trust-and-policy-files
    last_verified: 2026-09-23
    status: retired
    note: "Scope corrected to workspace, read-only, strict and derivatives; devbox is excluded."
  - id: enterprise-signed-requirements
    finding_id: 2026-09-21-grok-build-enterprise-enforcement-signed-requirements-toml-model-restriction-enforced-and-managed-onl
    last_verified: 2026-10-13
    status: active
    note: "Rechecked the edited-signed-file hook downgrade; the prior enterprise-channel lag is superseded."
  - id: hooks-fail-open
    finding_id: 2026-09-21-grok-build-hooks-gained-power-and-still-fail-open
    last_verified: 2026-10-13
    status: active
    note: "Retained with documented exceptions for oversized gate replies and invalid input rewrites."
  - id: headless-auto-unattended
    finding_id: 2026-09-21-grok-build-headless-and-auto-mode-more-that-runs-without-a-person
    last_verified: 2026-09-23
    status: retired
    note: "Replaced by current goal-wait and ACP claims; older auto and monitor examples were not recertified."
  - id: grok-bot-is-not-grok-build
    finding_id: 2026-09-21-grok-build-grok-bot-is-not-grok-build
    last_verified: 2026-10-13
    status: retired
    note: "The product distinction remains verified; the current operating read omits the separate-product explainer."
  - id: which-channel-is-the-product
    finding_id: 2026-10-13-grok-build-stable-is-1-0-52-enterprise-is-ahead-and-npm-supplies-package-integrity
    last_verified: 2026-10-13
    status: retired
    note: "Distribution identity is established; initial selection is not a lasting pin and crate labels do not certify binary source."
  - id: public-tree-is-a-monorepo-mirror
    finding_id: 2026-10-13-grok-build-the-september-29-mirror-cannot-identify-the-complete-source-of-stable-1-0
    last_verified: 2026-10-13
    status: retired
    note: "Answered in part: the mirror is filtered and ends on September 29; complete source correspondence remains unresolved."
  - id: stable-and-package-integrity
    finding_id: 2026-10-13-grok-build-stable-is-1-0-52-enterprise-is-ahead-and-npm-supplies-package-integrity
    last_verified: 2026-10-13
    status: active
  - id: updater-pin-needs-policy
    finding_id: 2026-10-13-grok-build-selecting-a-version-with-install-sh-does-not-disable-automatic-updates
    last_verified: 2026-10-13
    status: active
  - id: public-mirror-source-gap
    finding_id: 2026-10-13-grok-build-the-september-29-mirror-cannot-identify-the-complete-source-of-stable-1-0
    last_verified: 2026-10-13
    status: active
  - id: cursor-worker-private-source
    finding_id: 2026-10-13-grok-build-the-binary-documents-a-cursor-worker-whose-implementation-is-absent-from-the-public-mirror
    last_verified: 2026-10-13
    status: active
  - id: approval-scope-and-cards
    finding_id: 2026-10-13-grok-build-stable-1-0-52-carries-corrections-for-approval-scope-and-deceptive-permission-cards
    last_verified: 2026-10-13
    status: active
  - id: deny-routes-and-strict-scope
    finding_id: 2026-10-13-grok-build-deny-rule-fixes-cover-alternate-paths-while-strict-still-reads-workspace-secrets
    last_verified: 2026-10-13
    status: active
  - id: invalid-policy-distinct-outcomes
    finding_id: 2026-10-13-grok-build-invalid-policy-now-has-distinct-startup-errors-skipped-entries-and-retained-rules
    last_verified: 2026-10-13
    status: active
  - id: external-versioned-notes
    finding_id: 2026-10-13-grok-build-generation-pinned-per-version-notes-are-the-fuller-upgrade-record
    last_verified: 2026-10-13
    status: active
  - id: imported-hook-semantics
    finding_id: 2026-10-13-grok-build-the-1-0-52-guide-corrects-imported-hook-compatibility-and-documents-fail-open-traps
    last_verified: 2026-10-13
    status: active
  - id: sandbox-protected-bases
    finding_id: 2026-10-13-grok-build-the-1-0-52-sandbox-guide-scopes-hook-folder-protection-and-leaves-failure-behavior-conflic
    last_verified: 2026-10-13
    status: active
  - id: worktree-stable-and-fork-gap
    finding_id: 2026-10-13-grok-build-worktree-and-file-loss-fixes-are-stable-the-wrong-checkout-fork-fix-remains-non-stable
    last_verified: 2026-10-13
    status: active
  - id: headless-goals-and-acp
    finding_id: 2026-10-13-grok-build-headless-goals-and-acp-gain-capability-while-sharing-and-memory-controls-shrink
    last_verified: 2026-10-13
    status: active
  - id: late-day-distribution
    finding_id: 2026-10-13-grok-build-late-on-october-13-build-1-0-56-appeared-and-winget-added-stable-1-0
    last_verified: 2026-10-13
    status: active
  - id: same-file-edit-serialization
    finding_id: 2026-10-13-grok-build-parallel-tools-editing-the-same-file-are-serialized-while-unrelated-calls-remain-concurren
    last_verified: 2026-10-13
    status: active
  - id: plan-and-headless-limits
    finding_id: 2026-10-13-grok-build-plan-mode-refuses-mcp-resource-downloads-and-headless-runs-honor-no-subagents
    last_verified: 2026-10-13
    status: active
  - id: search-hook-rewrite-removed
    finding_id: 2026-10-13-grok-build-web-search-hooks-lose-the-ability-to-rewrite-calls-to-restrict-domains
    last_verified: 2026-10-13
    status: active
  - id: http-mcp-error-single-execution
    finding_id: 2026-10-13-grok-build-http-mcp-json-rpc-errors-no-longer-cause-repeated-tool-execution
    last_verified: 2026-10-13
    status: active
  - id: export-destination-refusal
    finding_id: 2026-10-13-grok-build-export-and-copy-refuse-destinations-that-already-exist
    last_verified: 2026-10-13
    status: active
  - id: local-http-hook-failure
    finding_id: 2026-10-13-grok-build-local-http-approval-hooks-work-but-refused-requests-still-fail-open
    last_verified: 2026-10-13
    status: active
  - id: jujutsu-worktree-support
    finding_id: 2026-10-13-grok-build-worktree-commands-gain-jujutsu-compatibility
    last_verified: 2026-10-13
    status: active
  - id: strict-daemon-storage
    finding_id: 2026-10-13-grok-build-strict-documents-a-daemon-storage-write-allowance-in-addition-to-workspace-and-temporary
    last_verified: 2026-10-13
    status: active
  - id: gitspawn-report-scope
    finding_id: 2026-10-13-grok-build-the-september-29-mirror-cannot-identify-the-complete-source-of-stable-1-0
    last_verified: 2026-10-13
    status: active
stance:
  use_for: >-
    Bounded trials of stable 1.0.52's headless goals and same-session edit coordination.
  avoid_for: >-
    Valuable unattended work before checking the version, sandbox, hook and worktree boundaries.
  watch_next: >-
    Proof that the installed binary enforces its documented sandbox and worker limits.
---

# Grok Build

## Where it stands, 2026-10-13

In [stable 1.0.52](https://storage.googleapis.com/grok-build-public-artifacts/cli/stable?generation=1791826035416926), xAI
[documents a fix for repeated HTTP MCP execution after a JSON-RPC error](https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.52.external.md?generation=1791825995316875).
A failed reply could leave you checking whether an action happened twice.
Take the fix, then hold the version and choose a sandbox before delegating valuable work.
Test an error after an action. Keep service-side idempotency keys and action
records across other failures.

Before unattended use, complete [the permission, sandbox and worktree checks](#authority).

Install with `npm i -g @xai-official/grok@1.0.52`; the
[registry publishes package integrity metadata and exact platform-package versions](https://registry.npmjs.org/@xai-official/grok/1.0.52).
Record the version and platform-package digest. On Windows, check the client index for the
[WinGet 1.0.52 manifest merged on 13 October 2026](https://github.com/microsoft/winget-pkgs/commit/b057f0992015764a607c7e6f9c07eaa1de8a98d0).
Read the [external per-version notes](https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.52.external.md?generation=1791825995316875),
including cumulative blocks, before upgrading.

<a id="authority"></a>

### Set permissions and sandbox limits before delegating

**Verify the updater hold.** An
[`install.sh` version argument leaves automatic updates enabled](https://github.com/xai-org/grok-build/blob/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8/crates/codegen/xai-grok-pager/scripts/install.sh#L207-L345)
if already enabled. Run
[`grok update --version 1.0.52`](https://github.com/xai-org/grok-build/blob/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8/crates/codegen/xai-grok-update/src/auto_update.rs#L2637-L2652),
then verify `[cli] auto_update = false` and `grok --version`. For one run,
[`--no-auto-update` or `GROK_DISABLE_AUTOUPDATER=1` opts out](https://storage.googleapis.com/grok-build-public-artifacts/cli/grok-1.0.52-linux-x86_64?generation=1791762841427964).

<details>
<summary>Updater source passage</summary>

The [Headless Mode and Scripting guide in 1.0.52](https://storage.googleapis.com/grok-build-public-artifacts/cli/grok-1.0.52-linux-x86_64?generation=1791762841427964),
"Update Check Suppression" at byte offset 2340884, lists the flag as a session
opt-out, the environment variable as a process opt-out, and the config setting
as persistent. These are documented controls; inspect the saved setting and
installed version after applying them.

All byte offsets in these notes are zero-based and refer to the same pinned
Linux x86_64 artifact, generation 1791762841427964. They locate text in the
file, not instructions to run it. Passage summaries are paraphrases except
where explicitly quoted.

</details>

**Recheck earlier approvals after upgrading.** Stable includes xAI's documented
[fixes for fake MCP option rows, stray-key approvals and tool access to the approval terminal](https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.51.external.md?generation=1791580490548989).
[1.0.49 narrowed shell "Allow once" from the session to the next command](https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.49.external.md?generation=1790966793575972).
Review affected action records and test your approval modes.

**Check a fork's `pwd` before writing.** Stable carries
[worktree ownership and deletion repairs](https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.52.external.md?generation=1791825995316875)
and [preserves old contents on failed writes](https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.50.external.md?generation=1791475279605140).
The [fix for forked sessions running shell commands in the original checkout is documented in non-stable 1.0.54](https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.54.external.md?generation=1791844061749505),
covering `grok -w -r` or `/fork` into a worktree.
Avoid that path for valuable work until the fix reaches stable, or confirm
the command directory before writes.
Test [enterprise 1.0.53](https://storage.googleapis.com/grok-build-public-artifacts/cli/enterprise?generation=1791828914730794) separately.

**Select a sandbox and deny the secrets it can still read.** The
Sandbox Mode guide embedded in 1.0.52
says [sandboxing starts off and strict permits workspace reads](https://storage.googleapis.com/grok-build-public-artifacts/cli/grok-1.0.52-linux-x86_64?generation=1791762841427964).
Use custom sandbox file denies for workspace secrets.

The guide says [Grok-owned config and hook write protection covers `workspace`, `read-only`, `strict` and derivatives, excluding `devbox`; descendant package hook folders are outside that protection](https://storage.googleapis.com/grok-build-public-artifacts/cli/grok-1.0.52-linux-x86_64?generation=1791762841427964).
Inspect those folders after runs. Include the documented
[daemon-backed strict write allowance at `~/.grok/daemon/run/strict`](https://storage.googleapis.com/grok-build-public-artifacts/cli/grok-1.0.52-linux-x86_64?generation=1791762841427964)
when auditing writable state.
The guide says [child-network blocking is Linux-only](https://storage.googleapis.com/grok-build-public-artifacts/cli/grok-1.0.52-linux-x86_64?generation=1791762841427964).

<details>
<summary>Sandbox source passages</summary>

The [Sandbox Mode section in the pinned 1.0.52 artifact](https://storage.googleapis.com/grok-build-public-artifacts/cli/grok-1.0.52-linux-x86_64?generation=1791762841427964)
starts at byte offset 2412062. Exact excerpts:

- At byte offset 2412324: "Sandbox mode is off by default."
- At byte offset 2415680: "The agent can read the current working directory, essential system paths, and `~/.grok`."

Other passages in the same section:

- "Built-in Profiles", byte offset 2412748: the table and its footnotes limit
  child-network blocking to Linux and describe a custom `deny` list for
  sensitive files. Strict's read access includes the workspace.
- Strict profile paragraph, byte offset 2415606: daemon-backed sessions also
  write to `~/.grok/daemon/run/strict` for sockets, logs and session storage.
  This allowance depends on that backend running the session.
- "Direct global write protection", byte offset 2416091, and the paragraph at
  2417898: the protected bases are workspace, read-only and strict, including
  derivatives. Protection covers the workspace's project hook folders and
  ancestors through the repository root. Package folders below the workspace,
  including worktree-subagent copies, are excluded; devbox is excluded.

These passages describe the shipped guide. Enforcement still needs the tests
in [What is unresolved](#what-is-unresolved).

</details>

**Retest sensitive-file denies through the repaired routes.** Stable includes
fixes for [Grep](https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.50.external.md?generation=1791475279605140),
[delete-tool denies, including paths with `..` or a symlinked working directory](https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.51.external.md?generation=1791580490548989),
and [mentions, images and Auto redirects](https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.52.external.md?generation=1791825995316875).
Use deny rules in the interactive interface:
[`--tools` and `--disallowed-tools` remain headless-only at 1.0.52](https://storage.googleapis.com/grok-build-public-artifacts/cli/grok-1.0.52-linux-x86_64?generation=1791762841427964).

<details>
<summary>Interactive tool-filter source passage</summary>

The [Headless Mode and Scripting guide](https://storage.googleapis.com/grok-build-public-artifacts/cli/grok-1.0.52-linux-x86_64?generation=1791762841427964) starts at
byte offset 2301134. Its note at 2304956 lists these filters among headless-only
flags and says the interactive TUI warns and ignores them.

</details>

**A refused connection still lets the call through.**
[Localhost HTTP hooks work in 1.0.52](https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.52.external.md?generation=1791825995316875),
but the [shipped guide says refused requests fail open](https://storage.googleapis.com/grok-build-public-artifacts/cli/grok-1.0.52-linux-x86_64?generation=1791762841427964).
Test a refused connection on your DNS and proxy route before relying on the
hook. Keep an independent boundary for consequential actions.

<details>
<summary>Hook compatibility and source passages</summary>

The [Hooks guide in 1.0.52](https://storage.googleapis.com/grok-build-public-artifacts/cli/grok-1.0.52-linux-x86_64?generation=1791762841427964) starts at byte offset 2172942.
The guide [names SessionStart sources `new`/`load` and says Grok does not read native Cursor hook replies](https://storage.googleapis.com/grok-build-public-artifacts/cli/grok-1.0.52-linux-x86_64?generation=1791762841427964).
Translate imported matchers and replies, then test successful denies and failures.

- Matcher configuration, byte offset 2186477, gives SessionStart sources as
  `new` and `load`. Use them for fresh and reopened sessions respectively;
  imported startup/resume/clear/compact matchers do not match.
- "Cursor Hook Compatibility", byte offset 2183983: native Cursor entries
  do not run; Grok-supported matcher groups do. At 2184387, the guide says:
  "Grok doesn't read that format yet." Convert native replies and entries
  before relying on a migrated deny hook.
- Timeout and failure handling, byte offset 2189400: crashes and timeouts
  let work proceed. For `PreToolUse`, [replies beyond read limits, inapplicable input rewrites from successful hooks and explicit denies block tool calls](https://storage.googleapis.com/grok-build-public-artifacts/cli/grok-1.0.52-linux-x86_64?generation=1791762841427964).
  The event-specific rules at byte offset 2219954 say [oversized replies on `Stop`, `SubagentStop`, `PostToolUse` and `PostToolUseFailure` can fail open; a failed hook's over-deep input rewrite is dropped and the call proceeds](https://storage.googleapis.com/grok-build-public-artifacts/cli/grok-1.0.52-linux-x86_64?generation=1791762841427964).
  Test these exceptions separately from a transport or script failure.
- Package hook path handling, byte offset 2176908: package hooks run from the
  workspace root. [A missing root script fails open, including for a deny hook](https://storage.googleapis.com/grok-build-public-artifacts/cli/grok-1.0.52-linux-x86_64?generation=1791762841427964).
  Point the hook at the package script explicitly.
- "HTTP Hooks", byte offset 2247114: refused requests are hook errors.
  The paragraph at 2249465 says, "The hook fails open."
  The fake-IP proxy paragraph at 2247890 describes names resolving into
  `198.18.0.0/15`: [requests are refused even with `HTTPS_PROXY`, and a managed policy hook then fails open](https://storage.googleapis.com/grok-build-public-artifacts/cli/grok-1.0.52-linux-x86_64?generation=1791762841427964).
  Exercise that route and timeouts as well as
  explicit deny replies.

</details>

<a id="search-policies"></a>

**Handle breaking changes before upgrading.**
[1.0.51 removes domain-restricting web-search hook rewrites; its WebFetch domain grants apply to fetching](https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.51.external.md?generation=1791580490548989).
Before upgrading, replace search-domain rewrite policies, update scripts to handle
[export/copy refusing existing destinations](https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.52.external.md?generation=1791825995316875),
and [replace CLI/SDK session-sharing steps](https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.51.external.md?generation=1791580490548989).
[Plan mode also refuses MCP resource downloads](https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.51.external.md?generation=1791580490548989);
move needed downloads to authorized execution.
Disable the affected search route until an applicable, tested control replaces
the rewrite.

**Read `grok inspect` after policy changes.**
[Invalid `shell_environment_policy` stops startup](https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.52.external.md?generation=1791825995316875);
the guide [requires the same for unreadable or unparseable requirements](https://storage.googleapis.com/grok-build-public-artifacts/cli/grok-1.0.52-linux-x86_64?generation=1791762841427964).
For imported managed-settings JSON, the guide says [a deny/ask rule that fails to parse is skipped alone; a non-list deny/ask value or non-string entry suppresses that file's allow list](https://storage.googleapis.com/grok-build-public-artifacts/cli/grok-1.0.52-linux-x86_64?generation=1791762841427964).
Test those cases separately.
[Set `fail_closed = true` on signed requirements to prevent an edited file downgrading enforced hooks](https://storage.googleapis.com/grok-build-public-artifacts/cli/grok-1.0.52-linux-x86_64?generation=1791762841427964).

<details>
<summary>Policy source passages</summary>

In the [1.0.52 embedded guides](https://storage.googleapis.com/grok-build-public-artifacts/cli/grok-1.0.52-linux-x86_64?generation=1791762841427964):

- Hooks, "Enforced hooks", byte offset 2199281: edited signed requirements
  or a missing or unreadable signature downgrade their hooks to user hooks.
  `fail_closed = true` makes an edited copy or missing signature stop startup.
  Requirements that cannot be read or parsed stop startup even without that
  setting.
- Permissions and safety starts at byte offset 2467622. Its compatibility
  notes at 2483150 distinguish malformed individual rules from wrong list
  types or non-string entries in imported managed deny/ask lists. Only the
  latter also suppress that file's allow list.

</details>

### Automate completion waits and coordinate parallel edits

### Let `grok -p` wait for background goals.

Stable adds
[background-goal waiting in `grok -p` and working headless `--no-subagents`](https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.51.external.md?generation=1791580490548989).
Test [`--background-wait-timeout`](https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.51.external.md?generation=1791580490548989) in CI, then move review to completed results.

**Try same-session parallel edits before building a conflict shim.**
[Tools editing the same file run sequentially while unrelated calls remain concurrent](https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.44.external.md?generation=1790656650477799).
Keep ownership and isolation across independent processes.

<details>
<summary>Upgrade compatibility</summary>

If you use Jujutsu, test its
[worktree command compatibility](https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.51.external.md?generation=1791580490548989)
on disposable state first.

</details>

<a id="what-is-unresolved"></a>

## What is unresolved

- **Require a complete source mapping before treating the mirror as a binary audit.** The
  [last public sync, 29 September 2026](https://github.com/xai-org/grok-build/commit/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8),
  is [labeled 1.0.45](https://github.com/xai-org/grok-build/blob/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8/crates/codegen/xai-grok-shell/Cargo.toml)
  and [stubs the Cursor worker](https://github.com/xai-org/grok-build/blob/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8/crates/codegen/xai-grok-shell/src/leader/cursor_worker_stub.rs#L1-L24).
  Settle this with a complete snapshot explicitly mapped to the installed binary.
- **Resolve sandbox startup failure before relying on protection.** The
  [shipped guide requires refusal when direct write protection cannot apply, while generic platform text says warn-and-continue](https://storage.googleapis.com/grok-build-public-artifacts/cli/grok-1.0.52-linux-x86_64?generation=1791762841427964).
  Use implementation tied to 1.0.52 or controlled protection-failure tests on the
  target platform to establish whether startup stops.
- **Test folder trust before granting it in CI.** The guide
  [gates project rules, startup instructions and skills on trust](https://storage.googleapis.com/grok-build-public-artifacts/cli/grok-1.0.52-linux-x86_64?generation=1791762841427964).
  Test trusted and untrusted repositories on 1.0.52 to establish enforcement.
  Grant `--trust` only to controlled repositories.
- **Test the Cursor worker's confinement before enabling it.** The worker that offers your machine to Cursor Cloud Agents has
  [auto-start off by default](https://storage.googleapis.com/grok-build-public-artifacts/cli/grok-1.0.52-linux-x86_64?generation=1791762841427964).
  Keep it off credential-bearing hosts pending confinement tests.
  The binary [documents account-gated registration, opt-in `any_repo` and refusal under a selected sandbox profile](https://storage.googleapis.com/grok-build-public-artifacts/cli/grok-1.0.52-linux-x86_64?generation=1791762841427964).
  It also [documents a clone-pool path for Git URLs outside `worker_dirs` after successful startup](https://storage.googleapis.com/grok-build-public-artifacts/cli/grok-1.0.52-linux-x86_64?generation=1791762841427964).
  Use worker implementation or controlled tests to establish repository limits
  and command confinement, including with `any_repo` off.
- **Check the GitSpawn delivery path on the installed version.** The
  [1 September 2026 report tested 1.0.13 with a delivered repository's malicious `.git/config`: background Git ran attacker commands with user privileges. Ordinary cloning does not copy that config](https://www.manifold.security/blog/ai-coding-agents-git-hijack).
  Settle current status with a shipped fix covering background Git calls or
  a controlled 1.0.52 test of that delivery path.

<details>
<summary>Source passages behind the unresolved tests</summary>

In the [pinned 1.0.52 artifact](https://storage.googleapis.com/grok-build-public-artifacts/cli/grok-1.0.52-linux-x86_64?generation=1791762841427964):

- Sandbox Mode, "Direct global write protection", paragraph at byte offset
  2417898, requires startup refusal when the required kernel policy cannot
  apply. "Platform Support", at 2427097, instead describes warning and
  continuing, with an exception for explicitly requested custom profiles.
  The guide leaves that broader failure behavior conflicted.
- Permissions and safety, paragraph at 2501389: project permission rules,
  startup instructions and skills require folder trust.
  [Headless startup with these project sources requires `--trust` or a prior grant](https://storage.googleapis.com/grok-build-public-artifacts/cli/grok-1.0.52-linux-x86_64?generation=1791762841427964).
- Configuration reference, `cursor_worker` heading at 2573107: registration
  offers the machine to Cursor Cloud Agents. The table sets auto-start and
  `any_repo` off by default. The opening paragraph also describes successful
  startup opening a clone-pool path for Git URLs outside `worker_dirs`.
- Worker command messages around 1508236 describe account-link gates.
  The start-refusal message around 1508900, and the leader-start message at
  1528937, say a selected sandbox profile cannot prove confinement of Cloud
  Agent shell commands and prevents worker startup. These are embedded
  messages, not an observed startup test.

</details>

## Review date and evidence cutoff

This profile stops at 2026-10-13.
[METHOD.md](https://github.com/sheetgenius/frontier/blob/3d3ecfdbcf2e690470a2d00c218e52b50566e402/METHOD.md)
sets out the evidence rules. The [evidence record](/runs/2026-10-13-profile-refresh-2026-09-21_2026-10-13-frontier-v0/)
keeps the detailed release and compatibility checks, including ACP's permission
handling.

Revision, 2026-10-14: corrected the [PreToolUse blocking scope](https://storage.googleapis.com/grok-build-public-artifacts/cli/grok-1.0.52-linux-x86_64?generation=1791762841427964)
and [conditional headless startup trust requirement](https://storage.googleapis.com/grok-build-public-artifacts/cli/grok-1.0.52-linux-x86_64?generation=1791762841427964).
Title, structure and receipt placement changed. The evidence cutoff remains 2026-10-13.

## Profile hygiene

- Profile ID: `grok-build`.
- Artifact version: 4.
- Last full review: 2026-10-13.
- Research window: 2026-09-21..2026-10-13.
