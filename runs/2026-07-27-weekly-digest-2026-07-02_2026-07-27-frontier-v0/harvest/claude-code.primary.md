# Harvest -- claude-code (primary sources)

Window: 2026-07-02 to 2026-07-27. Harvested 2026-07-27.

Source contract: `sources/claude-code.yml`. Surfaces used: official changelog,
official What's New digest, official docs, npm registry, Anthropic release
distribution endpoints, and reproducible local probes.

## Method and channel resolution

Claude Code publishes no source repository. `anthropics/claude-code` carries
release tags, the changelog, and the issue tracker, but no default branch with
product code -- so `main-unreleased` is **not observable** for this source, and
no finding below claims it. The two channels that do exist and that matter here
are the two Anthropic ships and documents:

- `latest` -- every release as soon as it ships.
- `stable` -- documented as "a version that is typically about one week old,
  skipping releases with major regressions."

Both are resolvable from a primary endpoint (see section 1). Every version below
is `tagged-release`; the decision-bearing question is which of the two channels
carries it.

Releases published in window: 22, from `v2.1.199` (2026-07-02) to `v2.1.220`
(2026-07-25). `v2.1.213` was never published -- the tag sequence skips it.

Dates are GitHub API `published_at` (UTC). Where the rendered docs changelog
shows a different calendar day, it is noted inline; only `v2.1.206` differs
(docs: July 9, 2026; API: 2026-07-10T01:45:26Z).

Baseline advanced from: `v2.1.198`, 2026-07-01
(<https://github.com/anthropics/claude-code/releases/tag/v2.1.198>).

---

## 1. The `stable` channel did not receive the July 18 permission-bypass fixes

**What changed.** At window close the two documented release channels had
diverged by eight releases and eight days. `stable` served `2.1.212`
(2026-07-17). `latest` served `2.1.220` (2026-07-25). `v2.1.214`, published
2026-07-18, is the release that fixed a batch of permission-check bypasses
(section 2). An operator running `"autoUpdatesChannel": "stable"`, the Homebrew
`claude-code` cask, or the apt/dnf/apk `stable` repository did **not** have those
fixes at window close.

**Receipt.** Reproducible local probe, run 2026-07-27:

```
$ curl -s https://downloads.claude.ai/claude-code-releases/stable
2.1.212
$ curl -s https://downloads.claude.ai/claude-code-releases/latest
2.1.220
```

npm dist-tags, same probe date:
`curl -s https://registry.npmjs.org/@anthropic-ai/claude-code | jq '.["dist-tags"]'`
returns `{"stable":"2.1.212","latest":"2.1.220","next":"2.1.220"}`.

Channel semantics documented at
<https://code.claude.com/docs/en/setup#configure-release-channel>:
"`"stable"`: use a version that is typically about one week old, skipping
releases with major regressions." Homebrew: "`claude-code` tracks the stable
release channel, which is typically about a week behind"; `claude-code@latest`
tracks latest. Linux repositories offer the same two channels.

The fix release: <https://github.com/anthropics/claude-code/releases/tag/v2.1.214>

**Event date.** Divergence observed 2026-07-27. `v2.1.212` published
2026-07-17T00:26:27Z; `v2.1.214` published 2026-07-18T01:20:30Z; `v2.1.220`
published 2026-07-25T01:35:55Z.

**Release channel.** `tagged-release` on `latest`; **not yet on `stable`**.

**Operator consequence.** Check which channel you are actually on
(`claude doctor`, or read `autoUpdatesChannel` in settings; Homebrew users check
the cask name; apt/dnf/apk users check the repository suite). If you are on
`stable` for change-control reasons, you are trading a week of regression
soak-time for a week without permission-bypass fixes that shipped with no CVE and
no advisory. Either move to `latest`, or pin `minimumVersion` to `2.1.214` -- the
docs state `minimumVersion` is a floor that auto-updates and `claude update`
refuse to go below, and that it can be enforced org-wide from managed settings.

---

## 2. `v2.1.214` is a permission-check bypass batch

**What changed.** `v2.1.214` fixed, in one release:

- Single-segment `dir/**` allow rules such as `Edit(src/**)` auto-approving
  writes to nested `dir/` directories anywhere in the tree instead of only
  `<cwd>/dir`.
- A permission-check bypass affecting commands run in Windows PowerShell 5.1
  sessions.
- Bash permission checks failing open on file-descriptor redirect forms that bash
  parses differently than the permission analyzer -- these now fail closed.
- Bash permission checks misjudging very long commands; commands over 10,000
  characters now always prompt instead of running automatically.
- Bash permission checks treating zsh variable subscripts and modifiers in
  `[[ ]]` comparisons as inert text; these now prompt.
- Certain `help` and `man` commands being auto-approved despite being able to run
  unsafe options, command substitutions, or backslash paths.
- Permission prompts on remote sessions that could proceed before the local
  confirmation dialog.
- `docker` commands (including the Podman `docker` shim) carrying daemon-redirect
  flags (`--url`, `--connection`, `--identity`, and Podman's remote mode) running
  with no prompt; these now prompt.
- `file` commands using `-m`/`--magic-file` or `-f`/`--files-from` being
  auto-allowed as read-only; these now require permission.

The same release changes hook semantics: single-segment `dir/**` hook `if:`
conditions now match only `<cwd>/dir`, and you must write `**/dir/**` for
any-depth matching. `deny`/`ask` permission rules keep their any-depth match.

**Receipt.** <https://github.com/anthropics/claude-code/releases/tag/v2.1.214>
Official changelog: <https://code.claude.com/docs/en/changelog>

**Event date.** 2026-07-18 (GitHub API `published_at` 2026-07-18T01:20:30Z; docs
changelog: July 18, 2026).

**Release channel.** `tagged-release` on `latest` only; not on `stable` at window
close (section 1).

**Operator consequence.** Audit your allow rules for single-segment `dir/**`
patterns before or immediately after upgrading -- `Edit(src/**)` was granting
more than you wrote, and the fix narrows it, which may also break automation that
had been relying on the wider match. If you run Claude Code under Windows
PowerShell 5.1, treat any pre-`2.1.214` permission log as unreliable. Separately,
the hook `if:` change is a silent behavior break: every single-segment `dir/**`
hook condition now matches less than it used to.

**Note on evidence.** No GitHub Security Advisory was published for any of this.
The newest advisory on `anthropics/claude-code` is GHSA-4vp2-6q8c-pvq2 from
2026-06-25 -- a vulnerability feed would have shown nothing for this entire
window.

---

## 3. `EndConversation` tool added

**What changed.** `v2.1.214` added the `EndConversation` tool: Claude can end
sessions with highly abusive users or jailbreak attempts, matching behavior on
claude.ai since 2025.

**Receipt.** <https://github.com/anthropics/claude-code/releases/tag/v2.1.214>
Cited research: <https://www.anthropic.com/research/end-subset-conversations>

**Event date.** 2026-07-18.

**Release channel.** `tagged-release`.

**Operator consequence.** A Claude Code session can now terminate itself. If you
run headless or scheduled sessions, add a distinct exit path for this outcome --
a conversation ended by the model is not the same failure as a crash or a
timeout, and your retry logic should not treat it as one.

---

## 4. `v2.1.212`: plan mode was running file-modifying Bash without a prompt

**What changed.** `v2.1.212` fixed plan mode auto-running file-modifying Bash
commands (for example `touch`, `rm`) without a permission prompt or the SDK
`canUseTool` callback. The same release fixed worktree creation following a
repository-committed symlink at `.claude/worktrees`, which could create files
outside the repository. It also deprecated the Task tool's `mode` parameter (now
ignored) so subagents inherit the parent session's permission mode by default,
and extended enterprise `forceLoginMethod` enforcement to the VS Code extension,
SDK, `setup-token`, and `install-github-app` logins rather than only the
terminal.

**Receipt.** <https://github.com/anthropics/claude-code/releases/tag/v2.1.212>

**Event date.** 2026-07-17 (GitHub API `published_at` 2026-07-17T00:26:27Z).

**Release channel.** `tagged-release`; this **is** the version `stable` served at
window close.

**Operator consequence.** Stop believing plan mode was read-only before
`2.1.212`. If you used plan mode as a containment boundary for untrusted repos or
for SDK sessions gated on `canUseTool`, that boundary leaked. The Task `mode`
deprecation is the quieter break: any subagent definition that set `mode` to
narrow a subagent's permissions is now silently ignored, and the subagent
inherits the parent's mode instead.

---

## 5. `v2.1.212`: runaway-loop caps and MCP auto-backgrounding

**What changed.** A session-wide WebSearch call limit (default 200, tunable via
`CLAUDE_CODE_MAX_WEB_SEARCHES_PER_SESSION`) and a per-session subagent spawn cap
(default 200, `CLAUDE_CODE_MAX_SUBAGENTS_PER_SESSION`, reset by `/clear`) were
added. MCP tool calls running longer than two minutes move to the background
automatically; the threshold is set or disabled with
`CLAUDE_CODE_MCP_AUTO_BACKGROUND_MS`. `/fork` now copies the conversation into a
new background session with its own `claude agents` row; the in-session subagent
it used to launch became `/subtask`.

**Receipt.** <https://github.com/anthropics/claude-code/releases/tag/v2.1.212>
Official digest: <https://code.claude.com/docs/en/whats-new/2026-w29>

**Event date.** 2026-07-17.

**Release channel.** `tagged-release`.

**Operator consequence.** These are the first hard per-session ceilings on fan-out
and search. Set them below 200 if your cost model cannot absorb 200 subagents in
one session. Note the MCP auto-background threshold interacts with any MCP server
you deliberately configured a long `request_timeout_ms` for -- the call does not
fail, it moves, which changes where you look for its result.

---

## 6. `v2.1.216`: worktree isolation was escapable through git redirection

**What changed.** `v2.1.216` fixed worktree-isolated subagents redirecting git
into the shared checkout via `git -C`, `--git-dir`, or the `GIT_DIR` /
`GIT_WORK_TREE` environment variables. It also fixed worktree sessions landing in
another project's leftover worktree when the working directory did not match the
selected project; workflow saves and scheduled-task writes following a symlink at
`.claude`, which could redirect writes outside the project; read-only commands on
Windows accessing network paths without a permission prompt;
`claude daemon stop --any` potentially terminating an unrelated process via a
stale legacy daemon lockfile; and `/rewind` restoring or deleting files through
symlinks or hard links at tracked paths (it now reports how many paths it
skipped). Bash permission checking was fixed for compound statements with
redirects inside `&&` lists or negations, and PowerShell permission validation was
fixed for commands containing invisible Unicode characters. A new
`sandbox.filesystem.disabled` setting skips filesystem isolation while keeping
network egress control.

**Receipt.** <https://github.com/anthropics/claude-code/releases/tag/v2.1.216>

**Event date.** 2026-07-20 (GitHub API `published_at` 2026-07-20T22:14:00Z).

**Release channel.** `tagged-release` on `latest`; not on `stable` at window
close.

**Operator consequence.** This is the third consecutive release in the window to
fix a worktree-isolation escape (see also sections 7 and 9). If you use
`isolation: 'worktree'` as a containment control for untrusted work, that control
was leaking through at least three distinct mechanisms across July. Upgrade to
`2.1.216` at minimum, and do not treat worktree isolation as a security boundary
on its own -- pair it with filesystem sandboxing.

---

## 7. `v2.1.210`: worktree-isolated subagents could mutate the main checkout

**What changed.** `v2.1.210` fixed `isolation: 'worktree'` subagents being able to
run git-mutating commands against the main repo checkout instead of their own
isolated worktree. It also fixed the `ultracode` keyword opt-in firing on
non-human-originated input such as webhook payloads and relayed PR comments;
hardened the Agent tool against indirect prompt injection via content a subagent
read; reconciled late-appearing `.claude/*` symlinks into the sandbox deny-write
list; and fixed a hook callback timeout being misreported to the model as a user
rejection, which made unattended sessions stop and wait. It added a startup
warning for `Write(path)`, `NotebookEdit(path)`, and `Glob(path)` permission rules,
directing operators to `Edit(path)` or `Read(path)` instead. The auto-mode
permission classifier now defaults to Sonnet 5 for external sessions, validated on
the session's first request and pinned for the session.

**Receipt.** <https://github.com/anthropics/claude-code/releases/tag/v2.1.210>

**Event date.** 2026-07-14 (GitHub API `published_at` 2026-07-14T23:45:25Z).

**Release channel.** `tagged-release`.

**Operator consequence.** The `ultracode` fix is the one to act on if you run
Claude Code in CI or on webhooks: before `2.1.210`, an attacker who could post a
PR comment could raise your effort level and your bill. Grep your permission
rules for `Write(...)`, `NotebookEdit(...)`, and `Glob(...)` -- the release says
they do not do what their names suggest.

---

## 8. `v2.1.211`: approval messages could be visually spoofed

**What changed.** `v2.1.211` fixed permission previews relayed to chat channels
not neutralizing bidirectional-override, zero-width, and look-alike quote
characters, "so tool inputs cannot visually alter the approval message." It also
fixed auto mode overriding a `PreToolUse` hook's `ask` decision for unsandboxed
Bash -- a hook `ask` now floors the decision at a prompt; and fixed nested
`.claude/rules/*.md` files loading even when setting sources exclude project
settings. "Always allow" permission rules now save at the repository root so
approvals granted in a git worktree persist across sessions and worktrees. File
upload validation was tightened (multiple-hard-link files are refused). A
prompt-caching regression on Bedrock, Vertex, Mantle, and Foundry that billed the
trailing system context block as fresh input tokens on every request was fixed.

**Receipt.** <https://github.com/anthropics/claude-code/releases/tag/v2.1.211>

**Event date.** 2026-07-15 (GitHub API `published_at` 2026-07-15T23:02:35Z).

**Release channel.** `tagged-release`.

**Operator consequence.** If you approve Claude Code actions from Slack or another
relay, every approval you granted before `2.1.211` was rendered from unsanitized
tool input and could have read as something other than what it authorized. The
hook fix matters just as much: before this, auto mode could overrule a
`PreToolUse` hook that said `ask`, which means a hook was not the floor you
thought it was. On Bedrock/Vertex/Mantle/Foundry, expect a visible drop in billed
input tokens after upgrading -- that is the regression clearing, not a usage
change.

---

## 9. `v2.1.217`: background session isolation did not canonicalize symlinked directories

**What changed.** `v2.1.217` fixed background session isolation not canonicalizing
symlinked working directories, "which could let sessions escape their workspace
folder." It added a cap on concurrently-running subagents (default 20, override
`CLAUDE_CODE_MAX_CONCURRENT_SUBAGENTS`), stopped subagents from spawning nested
subagents by default (`CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH` to allow deeper
nesting), and fixed `--max-budget-usd` not stopping background subagents -- once
the cap is reached, new spawns are denied and running background agents are
halted. It also added warnings when transcript writes are failing or when session
saving is off due to an inherited environment variable, and fixed managed settings
that set `OTEL_EXPORTER_OTLP_ENDPOINT` not governing all signals (lower-scope
signal-specific overrides no longer redirect telemetry away from the managed
endpoint).

**Receipt.** <https://github.com/anthropics/claude-code/releases/tag/v2.1.217>

**Event date.** 2026-07-21 (GitHub API `published_at` 2026-07-21T21:35:10Z).

**Release channel.** `tagged-release`.

**Operator consequence.** `--max-budget-usd` did not bound background subagent
spend before `2.1.217`. If you set a budget cap and ran background agents, the cap
was advisory. The managed-OTel fix is an enterprise governance item: before this,
a lower-scope setting could quietly redirect telemetry away from the endpoint your
managed settings specified.

---

## 10. `v2.1.219` reverses `v2.1.217`: nested subagents are back on by default

**What changed.** `v2.1.217` (2026-07-21) changed subagents to no longer spawn
nested subagents by default. `v2.1.219` (2026-07-24) changed it back: "Subagents
can now spawn nested subagents up to depth 3 by default (was 1); set
`CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH=1` to disable nesting."

**Receipt.** Disable: <https://github.com/anthropics/claude-code/releases/tag/v2.1.217>
Re-enable at depth 3: <https://github.com/anthropics/claude-code/releases/tag/v2.1.219>

**Event date.** 2026-07-21 and 2026-07-24 (GitHub API `published_at`
2026-07-21T21:35:10Z and 2026-07-24T17:14:23Z).

**Release channel.** `tagged-release` for both.

**Operator consequence.** The default delegation depth changed twice in three
days, in opposite directions. If you have a fan-out cost or containment concern,
do not rely on the default -- set `CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH`
explicitly. Note the concurrency cap from `2.1.217` (20) and the per-session spawn
cap from `2.1.212` (200) still apply, so depth 3 does not mean unbounded, but it
does mean a single message can now build a three-level agent tree by default.

---

## 11. `v2.1.219`: Claude Opus 5 becomes the default Opus model

**What changed.** `v2.1.219` added Claude Opus 5 (`claude-opus-5`) as the default
Opus model, with 1M context and fast mode at $10/$50 per Mtok. Opus 4.7 was
removed from fast mode; `/fast` now applies to Opus 5 and Opus 4.8. The `/model`
picker shows the merged Opus row as "Opus (1M context)". The bundled `claude-api`
skill now defaults to Claude Opus 5 with a migration path from Opus 4.8.

**Receipt.** <https://github.com/anthropics/claude-code/releases/tag/v2.1.219>

**Event date.** 2026-07-24 (GitHub API `published_at` 2026-07-24T17:14:23Z).

**Release channel.** `tagged-release` on `latest`; not on `stable` at window
close.

**Operator consequence.** Upgrading past `2.1.218` silently moves your default
Opus model and your context window. Re-baseline any eval, any cost model, and any
context-budget assumption tied to the previous default. If you pinned Opus 4.8
explicitly you are unaffected; if you relied on "Opus" meaning a specific model,
pin it now.

---

## 12. `v2.1.219`: new sandbox, hook, and managed-settings surfaces

**What changed.** `v2.1.219` added `sandbox.network.strictAllowlist`, which denies
non-allowlisted hosts for sandboxed commands without prompting; a `DirectoryAdded`
hook that fires after `/add-dir` or the SDK `register_repo_root` control request
registers a new working directory mid-session; `mcp_server_errors` in the headless
stream-json init event, listing `--mcp-config` entries skipped by config
validation, with a startup warning in terminal runs; and the
`workflowSizeGuideline` settings key. It changed managed MCP allowlist/denylist
`${VAR}` entries to resolve from the startup environment and managed-settings env
instead of settings-file env, and changed dynamic workflows to default to a medium
size guideline (fewer than 15 agents). Nested subagent forwarding was added to
stream-json when `--forward-subagent-text` is set.

**Receipt.** <https://github.com/anthropics/claude-code/releases/tag/v2.1.219>

**Event date.** 2026-07-24.

**Release channel.** `tagged-release`.

**Operator consequence.** Two of these change behavior of existing config without
you touching it. `${VAR}` in a managed MCP allowlist now resolves from a different
environment -- if your allowlist used a settings-file `env` value, it will resolve
differently or not at all after upgrade, which can turn an allowlist into a
denylist. And `mcp_server_errors` is the first machine-readable signal that a
`--mcp-config` entry was silently dropped; wire it into your headless pipeline,
because before this the failure was invisible.

---

## 13. `v2.1.207`: managed settings were auto-consented in non-interactive runs

**What changed.** `v2.1.207` fixed "remote managed settings from a non-interactive
run (`claude -p`, the SDK) being permanently recorded as consented without ever
showing the security consent dialog." The same release rejected
`${user_config.*}` in shell-form commands for plugin hooks, monitors, and MCP
`headersHelper` as a shell-injection fix (hooks must use exec form or
`$CLAUDE_PLUGIN_OPTION_<KEY>`; monitors and `headersHelper` must read the value
inside the script). Plugin option values (`pluginConfigs`) are no longer read from
project-level `.claude/settings.json`; only user, `--settings`, and managed
settings are honored. Auto mode no longer reads `autoMode` from the repo-resident
`.claude/settings.local.json`. Auto mode became available without the
`CLAUDE_CODE_ENABLE_AUTO_MODE` opt-in on Bedrock, Vertex AI, and Foundry, with
`disableAutoMode` to turn it off. Bedrock, Vertex, and Claude Platform on AWS
default to Claude Opus 4.8. `/usage-credits` amounts over $1,000 now require a
typed confirmation.

**Receipt.** <https://github.com/anthropics/claude-code/releases/tag/v2.1.207>
Auto-mode enablement doc:
<https://code.claude.com/docs/en/permission-modes#enable-auto-mode-on-bedrock-agent-platform-or-foundry>

**Event date.** 2026-07-11 (GitHub API `published_at` 2026-07-11T00:52:10Z).

**Release channel.** `tagged-release`.

**Operator consequence.** This is the strongest governance finding of the window.
If your organization pushes remote managed settings and any user ever ran
`claude -p` or the SDK before `2.1.207`, that user's consent record is a fiction
-- the dialog never appeared. Re-audit which settings your fleet is running under.
Separately, three of these changes strip authority from repository-resident files:
`pluginConfigs` and `autoMode` can no longer be set from inside the repo. If your
project committed either, it stops taking effect on upgrade, and you must move it
to user or managed settings.

---

## 14. `v2.1.218`: agent frontmatter hooks required workspace trust

**What changed.** `v2.1.218` fixed "agent frontmatter hooks running from untrusted
folders: hooks now require the agent file's own folder to have accepted workspace
trust." It changed auto mode so the dangerous-`rm`, background-`&`, and
suspicious-Windows-path checks no longer open permission dialogs and are
adjudicated by the auto-mode classifier instead, and changed plan mode with auto to
stop prompting for Bash commands the static analyzer cannot prove read-only,
deferring to the classifier. Skills with `context: fork` now run in the background
by default (`background: false` opts out). Server-managed settings changed so
benign feature and cost toggles no longer trigger the settings-approval prompt.
`/code-review` runs as a background subagent; `/deep-research` starts only when
invoked manually. Agent markdown files now reject agent names containing `:`,
which is reserved for plugin namespacing. Sandbox command restrictions for IDE
interactions were improved, and trust dialogs now name the repository root the
grant covers.

**Receipt.** <https://github.com/anthropics/claude-code/releases/tag/v2.1.218>

**Event date.** 2026-07-22 (GitHub API `published_at` 2026-07-22T21:24:56Z).

**Release channel.** `tagged-release`.

**Operator consequence.** Before `2.1.218`, dropping an agent markdown file with
frontmatter hooks into a folder you had not trusted was enough to get its hooks to
run. That is the fix to prioritize if you consume third-party agent files.
The auto-mode changes move three previously human-adjudicated decisions
(dangerous `rm`, background `&`, suspicious Windows paths) to a classifier -- if
your policy said a human sees every `rm -rf` prompt, it no longer holds under auto
mode. And the server-managed-settings change means some managed settings now apply
without an approval prompt; verify which ones your vendor classifies as benign.

---

## 15. `v2.1.205`: transcript tampering, Windows worktree removal, and fabricated approvals

**What changed.** `v2.1.205` added an auto mode rule that blocks tampering with
session transcript files. It fixed "Windows worktree removal deleting files
outside the worktree when an NTFS junction or directory symlink existed inside
it." It changed background task notifications to "explicitly state that no human
input has occurred, preventing fabricated in-transcript approvals from being acted
on," and improved auto mode "to ask before running `rm -rf` on a variable it can't
resolve from context." It reserved the "Claude Browser" MCP server name alongside
"Claude Preview" so user-configured MCP servers cannot register under either. It
also fixed `--json-schema` silently producing unstructured output when the schema
was invalid, and cut the updater's peak memory usage by roughly 400 MB by
streaming binary downloads to disk.

**Receipt.** <https://github.com/anthropics/claude-code/releases/tag/v2.1.205>

**Event date.** 2026-07-08 (GitHub API `published_at` 2026-07-08T21:22:06Z).

**Release channel.** `tagged-release`.

**Operator consequence.** The fabricated-approval fix is the one to internalize:
before `2.1.205`, text in a transcript could read as a human approval to a later
turn, and be acted on. If you audit agent runs by reading transcripts, understand
that the transcript was previously both the record and an input. The Windows NTFS
junction fix is a data-loss issue, not just a security one -- removing a worktree
could delete files outside it.

---

## 16. `v2.1.200`: the "default" permission mode was renamed "Manual"

**What changed.** `v2.1.200` changed the "default" permission mode to "Manual"
across the CLI, `--help`, VS Code, and JetBrains. `--permission-mode manual` and
`"defaultMode": "manual"` are accepted alongside `default`. It also changed
`AskUserQuestion` dialogs to no longer auto-continue by default, with an idle
timeout available via `/config`.

**Receipt.** <https://github.com/anthropics/claude-code/releases/tag/v2.1.200>

**Event date.** 2026-07-03 (GitHub API `published_at` 2026-07-03T16:52:33Z).

**Release channel.** `tagged-release`.

**Operator consequence.** The rename is compatible but your runbooks, screenshots,
and training material now use a word the product no longer shows. The
`AskUserQuestion` change is the behavioral one: an unattended session that
previously advanced on a timeout will now sit and wait unless you opt into the
idle timeout. Check any headless or scheduled run that relied on auto-continue.

---

## 17. `v2.1.208`: screen reader mode, corporate launcher, and a large reliability pass

**What changed.** `v2.1.208` added screen reader mode (`claude --ax-screen-reader`,
`CLAUDE_AX_SCREEN_READER=1`, or `"axScreenReader": true`), the
`vimInsertModeRemaps` setting, and `CLAUDE_CODE_PROCESS_WRAPPER`, which makes the
agent view and background service run every Claude Code self-spawn through a
required wrapper executable. Catastrophic removals such as `rm -rf ~` in commands
containing `$(...)`, backticks, or `<(...)` now prompt under
`--dangerously-skip-permissions` and auto mode, matching the plain form. It fixed
`/release-notes` adding viewed notes to model context -- "Show all" previously
injected the entire changelog into every subsequent request. It fixed
`CLAUDE_CODE_MAX_OUTPUT_TOKENS` and similar env vars silently using the mantissa
of scientific-notation values (`1e6` became `1`). It closed several memory leaks
in long sessions and reduced session transcript size by up to 79x in edit-heavy
sessions.

**Receipt.** <https://github.com/anthropics/claude-code/releases/tag/v2.1.208>
Corporate launcher doc: <https://code.claude.com/docs/en/corporate-launcher>

**Event date.** 2026-07-14 (GitHub API `published_at` 2026-07-14T01:10:42Z).

**Release channel.** `tagged-release`.

**Operator consequence.** `CLAUDE_CODE_PROCESS_WRAPPER` is the new enterprise
control worth testing -- it is the first documented way to force every Claude Code
self-spawn through your own executable. The `1e6` env-var bug is worth an
immediate config audit: any integer environment variable you wrote in scientific
notation was silently truncated to its mantissa, which means a token budget of
`1e6` was being enforced as `1`.

---

## 18. `v2.1.206`: push authority widened, worktree entry narrowed

**What changed.** `v2.1.206` changed `/commit-push-pr` to auto-allow `git push` to
the repository's configured push remote (`remote.pushDefault`, or the sole remote
when only one is configured) in addition to `origin`. It made `EnterWorktree` ask
for confirmation before entering a git worktree outside the project's
`.claude/worktrees/` directory. Background agents now upgrade to a new version in
the background right after a Claude Code update. It fixed MCP servers configured
via `--mcp-config` or `.mcp.json` ignoring a per-server `request_timeout_ms`, and
fixed OAuth MCP servers requiring manual re-authentication after a single failed
token refresh.

**Receipt.** <https://github.com/anthropics/claude-code/releases/tag/v2.1.206>

**Event date.** 2026-07-10 (GitHub API `published_at` 2026-07-10T01:45:26Z). The
rendered docs changelog dates this July 9, 2026 -- a one-day discrepancy, almost
certainly UTC versus US Pacific. Trust the API timestamp.

**Release channel.** `tagged-release`.

**Operator consequence.** This widens where a background agent can push without a
prompt. Following the previous window's `v2.1.198` change (background agents
commit, push, and open draft pull requests), the auto-allowed target is no longer
just `origin`. Check `remote.pushDefault` in every repository where you run
background agents, and confirm branch protection covers that remote too.

---

## 19. `v2.1.203`: background agents were dropping `ANTHROPIC_BASE_URL`

**What changed.** `v2.1.203` fixed "background and agent-view sessions dropping a
shell-exported `ANTHROPIC_BASE_URL`, which sent API keys to the default endpoint
and failed with 401." It added the session's additional working directories to MCP
`roots/list`, with `notifications/roots/list_changed` sent when the set changes;
added a warning when your login is about to expire; and fixed worktree-isolated
subagents sometimes running shell commands in the parent checkout instead of their
own worktree. It changed subagent behavior so agents are less likely to re-delegate
their entire task to another subagent, and removed the startup
"claude command missing or broken" warnings in favor of `/doctor` and `/status`.

**Receipt.** <https://github.com/anthropics/claude-code/releases/tag/v2.1.203>

**Event date.** 2026-07-07 (GitHub API `published_at` 2026-07-07T21:06:12Z).

**Release channel.** `tagged-release`.

**Operator consequence.** If you route Claude Code through a gateway with
`ANTHROPIC_BASE_URL` and an API key, versions before `2.1.203` sent that key to
`api.anthropic.com` from background sessions. Rotate the key if a background agent
ever ran under that configuration, and do not treat the 401 as the only symptom --
the credential left your gateway boundary before it failed.

---

## 20. `v2.1.199`: subagent errors were being reported as success

**What changed.** `v2.1.199` fixed subagents reporting API errors (for example
usage limit reached) as successful results -- the error is now reported to the
parent agent -- and fixed subagents cut off by a rate limit or server error
silently failing instead of returning their partial work. It fixed a
background-agent daemon on Linux killing itself and every running agent every
roughly 50 seconds after an unclean shutdown, and `claude stop` being silently
undone when it raced a background-agent respawn. It fixed plan mode not prompting
for state-changing browser tool calls. It raised the default retry count for
non-capacity transient errors to 300 under `CLAUDE_CODE_RETRY_WATCHDOG` and lifted
the cap of 15 on `CLAUDE_CODE_MAX_RETRIES`. It fixed resetting a corrupted config
file from the startup recovery dialog destroying it unrecoverably; the file is now
backed up first.

**Receipt.** <https://github.com/anthropics/claude-code/releases/tag/v2.1.199>

**Event date.** 2026-07-02 (GitHub API `published_at` 2026-07-02T23:35:18Z).

**Release channel.** `tagged-release`.

**Operator consequence.** Any subagent result you accepted before `2.1.199` may
have been a rate-limit error wearing a success label. If you have an eval or a
pipeline that scored subagent outputs in June or early July, its pass rate is
suspect. Also note the retry watchdog now defaults to 300 attempts -- verify that
against your cost ceiling and your incident timeouts.

---

## 21. `v2.1.215`: Claude stopped self-invoking `/verify` and `/code-review`

**What changed.** The entire release note reads: "Claude no longer runs the
`/verify` and `/code-review` skills on its own; invoke them with `/verify` or
`/code-review` when you want them."

**Receipt.** <https://github.com/anthropics/claude-code/releases/tag/v2.1.215>

**Event date.** 2026-07-19 (GitHub API `published_at` 2026-07-19T02:56:01Z).

**Release channel.** `tagged-release`.

**Operator consequence.** If your quality bar assumed Claude would self-verify or
self-review, it stopped doing so on 2026-07-19. Add an explicit `/verify` or
`/code-review` step to your workflow, or a hook that runs it -- otherwise the
review that was happening implicitly now happens not at all. `v2.1.218` made the
same change for `/deep-research`.

---

## 22. `v2.1.202`, `v2.1.204`, `v2.1.209`, `v2.1.220`: small or opaque releases

**What changed.**
- `v2.1.202` added a "Dynamic workflow size" setting in `/config` (advisory, not
  an enforced cap) and `workflow.run_id` / `workflow.name` OpenTelemetry attributes
  so a workflow run's activity can be reconstructed from OTel data. It changed
  `/review <pr>` back to a fast single-pass review, with `/code-review <level>
  <pr#>` for the multi-agent version.
- `v2.1.204` contains a single fix: hook events not streaming during
  `SessionStart` hooks in headless sessions, "which could cause remote workers to
  be idle-reaped mid-hook."
- `v2.1.209` contains a single fix reverting an overly broad guard that blocked
  `/model` and other dialogs in `claude agents` background sessions.
- `v2.1.220`, the newest release in the window, has one line: "Bug fixes and
  reliability improvements."

**Receipt.** <https://github.com/anthropics/claude-code/releases/tag/v2.1.202>,
<https://github.com/anthropics/claude-code/releases/tag/v2.1.204>,
<https://github.com/anthropics/claude-code/releases/tag/v2.1.209>,
<https://github.com/anthropics/claude-code/releases/tag/v2.1.220>

**Event date.** 2026-07-06, 2026-07-08, 2026-07-14, 2026-07-25 respectively
(GitHub API `published_at` 2026-07-06T22:51:16Z, 2026-07-08T00:27:50Z,
2026-07-14T06:36:28Z, 2026-07-25T01:35:55Z).

**Release channel.** `tagged-release`.

**Operator consequence.** `v2.1.220` is the current `latest` and its note is
unauditable -- there is no way to tell from the primary source whether it contains
a security fix. If you need to know what is in the binary you are running, that
release does not tell you. `v2.1.204` is worth noting for anyone running headless
remote workers with `SessionStart` hooks: before it, a long hook could get the
worker reaped mid-run.

---

## 23. The official What's New digest stopped at Week 29

**What changed.** The official weekly digest at
<https://code.claude.com/docs/en/whats-new> covers Week 29 (July 13-17, 2026,
v2.1.207 to v2.1.212) as its newest entry. There is no Week 30 page; the expected
URL returns HTTP 404.

**Receipt.** Index: <https://code.claude.com/docs/en/whats-new>
Newest entry: <https://code.claude.com/docs/en/whats-new/2026-w29>
Absent: `https://code.claude.com/docs/en/whats-new/2026-w30` returns HTTP 404
(probed 2026-07-27).

**Event date.** Week 29 covers 2026-07-13 to 2026-07-17. Probed 2026-07-27.

**Release channel.** Documentation surface; not a build.

**Operator consequence.** The last eight releases of the window (`v2.1.214`
through `v2.1.220`), including the permission-bypass batch, have no editorialized
official summary. The granular changelog is the only primary account of them, so
read it directly rather than waiting for the digest.

---

## 24. No security advisory was published in the window

**What changed.** Nothing. This is a negative result worth recording.
`anthropics/claude-code` published zero GitHub Security Advisories between
2026-07-01 and 2026-07-27. The newest is GHSA-4vp2-6q8c-pvq2, published
2026-06-25.

**Receipt.** `gh api repos/anthropics/claude-code/security-advisories` (30
advisories total; zero with `published_at >= 2026-07-01`; newest
GHSA-4vp2-6q8c-pvq2 at 2026-06-25T13:29:49Z). Probed 2026-07-27.
Advisory index: <https://github.com/anthropics/claude-code/security/advisories>

**Event date.** Probed 2026-07-27.

**Release channel.** Not applicable.

**Operator consequence.** Stop treating the advisory feed as your Claude Code
security signal. Every permission-bypass, sandbox-escape, and isolation fix in
this window -- sections 2, 4, 6, 7, 8, 9, 14, 15 -- shipped as changelog lines
only. If your patch process triggers on CVEs or GHSAs, it did not fire once in
July while eight releases fixed authority boundaries.

---

## Cross-cutting patterns worth carrying into the digest

1. **Worktree and directory isolation leaked three separate ways in eleven days**:
   git-mutating commands against the main checkout (`v2.1.210`, 2026-07-14), git
   redirection via `git -C` / `--git-dir` / `GIT_DIR` / `GIT_WORK_TREE`
   (`v2.1.216`, 2026-07-20), and uncanonicalized symlinked working directories
   (`v2.1.217`, 2026-07-21). Plus symlink-following in worktree creation
   (`v2.1.212`) and in workflow/scheduled-task writes (`v2.1.216`).
2. **Authority is being pulled out of repository-resident files.** `pluginConfigs`
   and `autoMode` stopped being readable from project settings (`v2.1.207`);
   nested `.claude/rules/*.md` stopped loading when project settings are excluded
   (`v2.1.211`); agent frontmatter hooks now require the agent file's own folder to
   be trusted (`v2.1.218`).
3. **Delegation limits were invented, then loosened.** Spawn cap 200 and
   `mode` inheritance (`v2.1.212`), concurrency cap 20 and nesting off
   (`v2.1.217`), nesting back on at depth 3 (`v2.1.219`). Three releases, four
   days, opposite directions.
4. **Auto mode absorbed decisions that used to reach a human.** Dangerous `rm`,
   background `&`, and suspicious Windows paths moved from dialogs to the
   classifier (`v2.1.218`); plan mode with auto stopped prompting for
   not-provably-read-only Bash (`v2.1.218`).
