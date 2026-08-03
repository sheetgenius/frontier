# Omnigent -- primary harvest, 2026-07-27..2026-08-03

First cycle on the watchlist. Contract: `sources/omnigent.yml`. Tier 2, weekly.
Repo identity confirmed against the contract: `github.com/omnigent-ai/omnigent`.

Surfaces checked: `/releases`, `/tags`, default-branch commits, the PRs and
issues named below. Landing-page copy separated from docs and code throughout.

## Channel state at window close

- Latest tag: **v0.7.0**, published 2026-07-27T22:40:00Z -- inside this window.
- Tags newer than v0.7.0: **none** (`v0.7.0`, `v0.7.0rc1`, `v0.6.0` are the three
  most recent). Everything below dated after 2026-07-27 is `main-unreleased`.
- Default-branch velocity in-window: **100+ commits** (the API page cap; the real
  number is higher). Pre-1.0 and shipping continuously, so the tag-to-tag diff
  carries much more than the release note -- as the contract predicted at intake.

## 1. `worktree_guard` did not confine absolute paths on Windows runners

**This is the window's finding for this source, and it answers the question the
contract was written around.**

- Issue [#3855](https://github.com/omnigent-ai/omnigent/issues/3855), filed
  2026-08-01, closed. Title states the mechanism: `worktree_guard` uses
  platform-dependent `os.path.normpath`, so on a Windows runner absolute paths
  (`/etc/passwd`, `C:/Windows/...`, `//server/share`) escape the worktree
  confinement.
- Fix [#3856](https://github.com/omnigent-ai/omnigent/pull/3856), merged
  2026-08-03T11:31:21Z, commit
  [`1c6dfedc`](https://github.com/omnigent-ai/omnigent/commit/1c6dfedce7).
  Files: `omnigent/policies/builtins/orchestration.py`,
  `tests/inner/nessie/test_policies.py`.

The PR body states the scope in the project's own words: `worktree_guard` "is the
only write confinement for the unsandboxed implementer worker specs." It reasons
in POSIX terms -- its own comment says "Backslashes are not valid in POSIX paths"
-- but normalized with `os.path`, which is `ntpath` on Windows and rewrites `/`
to `\`. So `normalized.startswith("/")` is never true on a Windows runner and the
absolute-path arm of the check is inert. `/etc/passwd` carries no backslash,
clears the backslash guard, becomes `\etc\passwd`, and returns ALLOW.

The `..` and `~` arms survived by coincidence (`ntpath.normpath` preserves both),
so the hole is specifically absolute paths -- including another worker's tree.
Drive-qualified paths (`C:/Windows/x`) needed a separate arm, because `posixpath`
reads `C:` as an ordinary relative directory name.

Verification in the PR, run on Windows 11 / CPython 3.11.9, four cases changed
from ALLOW to DENY:

    '/etc/passwd'               -> DENY  (was ALLOW)
    '/home/other/repo/x.py'     -> DENY  (was ALLOW)
    'C:/Windows/System32/x.txt' -> DENY  (was ALLOW)
    '//server/share/x'          -> DENY  (was ALLOW)

**Channel: `main-unreleased`.** v0.7.0 was published 2026-07-27T22:40Z; the fix
merged 2026-08-03T11:31Z, seven days later, and no tag newer than v0.7.0 exists.
An operator running the tagged release on a Windows runner still has the inert
arm.

**Both halves, on the same receipt.** The gap is real and it was the only write
confinement for that worker class. It was also found, filed publicly with a
platform-specific repro, fixed with tests pinned on Windows, and closed in two
days. The disclosure is better than the defect is bad.

**Scope discipline -- what this is NOT.** This is a defect in Omnigent's own
policy layer. It says nothing about the harnesses Omnigent drives, and it is not
evidence about Claude Code, Codex, Cursor or Pi. Per the contract, a finding
observed through a meta-harness is a fact about the pair or about the wrapper,
never about the wrapped component.

## 2. v0.7.0 -- what actually shipped (tagged, 2026-07-27)

Release notes: https://github.com/omnigent-ai/omnigent/releases/tag/v0.7.0

Governance-relevant items, separated from the feature list:

- **Smart routing now activates from config, not an env var.** The release says
  an "Auto - smart routing" harness option "lets the router pick both harness and
  model from your task," and that smart routing "activates automatically from
  your `llm:`/`routing:` config (no `OMNIGENT_SMART_ROUTING` env var)."
  (#3045, #3215, #2864, #3111.) This is the contract's open question in shipped
  form: the governance layer an action lands under can change without the
  operator choosing it per-action, and the switch that used to be an explicit
  environment variable is now implied by config.
- **Voice dictation, server-side transcription.** The release states audio "never
  leaves your server" and the transcription engine is offloadable to a remote
  worker (`omnigent[dictation]`, #2093, #3044, #3025). At intake the notes
  recorded this as a possible new data path off the operator's machine; the
  release describes a self-hosted path. Which it is depends on where "your
  server" runs and whether the remote worker engine is used. Carry as open, do
  not assert either reading.
- **Sandboxed agents on Linux now trust CA roots under the system `capath`**
  (#3263, #3264), to reach hosts behind a corporate MITM proxy, and can run
  tools managed by `update-alternatives`. A sandbox trusting system CA roots is
  a deliberate widening; the release states the reason.

**Breaking changes** (both in the tag): `omni server start` is removed in favour
of `omni server --background` (#3105), and `omni integration slack start` is
removed in favour of `omni integration slack --background` (#3153).

## 3. Watchlist crossing: Omnigent registers OpenClaw over ACP

- [`77209694`](https://github.com/omnigent-ai/omnigent/commit/77209694) --
  `feat(acp): support OpenClaw Gateway ACP registration (#3420)`, 2026-08-03.
- [`074a467e`](https://github.com/omnigent-ai/omnigent/commit/074a467e) --
  `docs(openclaw): reflect live-verified compatibility status (#3955)`, 2026-08-03.

Both `main-unreleased`. Worth recording because the meta-harness now reaches a
second project this publication watches separately, which is the configuration
the contract flags: two governance layers with a claim on the same action.

## 4. Other in-window main commits worth a second look

All `main-unreleased`, all 2026-08-02..08-03. Recorded, not promoted.

- `4c593a51` -- `fix(shell-tools): unify shell tool defaults across policies for
  consistent command inspection`. Policy-surface consistency.
- `c74faadc` -- `fix(runner): forward provider api_key_ref env vars into runner
  subprocess (#3915)`. Credential propagation into the runner.
- `47087bc0` -- `Narrow detected harness credential families (#3945)`.
- `5315dc2f` -- `narrow resolved egress addresses (#3939)`.
- `f68abff4` -- `fix(codex-native): stop leaking codex app-server processes
  across all teardown paths (#3925)`.
- `21706331` -- `Type default policy phases explicitly (#3960)`.
- `1262652a` -- `chore(lint): enforce pyrefly type checking (#3972)`, the tail of
  a large in-window typing campaign that produced much of the commit volume.

## Open questions carried forward

- Are spend caps enforced before a call is made, or reconciled after it? Not
  answered by anything in this window.
- When an Omnigent policy and the wrapped harness's own permission system
  disagree, which one refuses? Still no public answer.
- Does the dictation remote-worker engine send audio off the operator's
  infrastructure? The release says audio never leaves "your server"; the
  offloadable engine is the part to pin down.
