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
tagline: "xAI's terminal agent, readable in a public mirror and now pinnable by version, whose security fixes show up in doc diffs rather than release notes."
compared_with:
  - codex
  - claude-code
  - pi-coding-agent
  - deepseek-harness
  - antigravity
surface_class: open_source_commits
evidence_floor: official_changelog
status: active_watch
first_published: 2026-08-21
last_updated: 2026-09-21
last_full_review: 2026-09-23
claims:
  - id: folder-trust-gates-project-rules
    finding_id: 2026-09-21-grok-build-folder-trust-now-gates-project-permission-rules-instructions-and-skills-previously-applied
    last_verified: 2026-09-23
    status: active
  - id: channel-pinnable-no-checksum
    finding_id: 2026-09-21-grok-build-the-channel-question-now-has-an-answer-version-string-per-version-binary-digest-and-a-sour
    last_verified: 2026-09-23
    status: active
  - id: public-changelog-lags
    finding_id: 2026-09-21-grok-build-public-changelog-is-a-curated-lagging-subset-the-in-tree-notes-are-the-fuller-record
    last_verified: 2026-09-23
    status: active
  - id: sandbox-write-denies-own-config
    finding_id: 2026-09-21-grok-build-sandbox-profiles-now-write-deny-grok-s-own-config-trust-and-policy-files
    last_verified: 2026-09-23
    status: active
  - id: enterprise-signed-requirements
    finding_id: 2026-09-21-grok-build-enterprise-enforcement-signed-requirements-toml-model-restriction-enforced-and-managed-onl
    last_verified: 2026-09-23
    status: active
  - id: hooks-fail-open
    finding_id: 2026-09-21-grok-build-hooks-gained-power-and-still-fail-open
    last_verified: 2026-09-23
    status: active
  - id: headless-auto-unattended
    finding_id: 2026-09-21-grok-build-headless-and-auto-mode-more-that-runs-without-a-person
    last_verified: 2026-09-23
    status: active
  - id: grok-bot-is-not-grok-build
    finding_id: 2026-09-21-grok-build-grok-bot-is-not-grok-build
    last_verified: 2026-09-23
    status: active
  - id: which-channel-is-the-product
    last_verified: 2026-09-23
    status: retired
    note: "Settled: install.sh installs a named version, each build has a per-version artifact with a storage md5, and each public sync's crate version names the build it mirrors."
  - id: public-tree-is-a-monorepo-mirror
    last_verified: 2026-09-23
    status: open_question
    note: "Every public commit is 'Synced from monorepo', 0 to 3 days behind the builds. A gap in public git is not evidence about the shipped binary."
stance:
  use_for: "A first-party xAI terminal agent whose permission pipeline you can read at the sync that matches `grok --version`. Pin a version through install.sh, run 1.0.35 or later, and use a sandbox profile on purpose, since the default is off. Headless `grok -p` and ACP (`grok agent stdio`) are the surfaces to try."
  avoid_for: "Opening untrusted repositories on the host while GitSpawn's status after 1.0.13 is unknown. Relying on a hook that can crash as a control. Treating the web changelog as the record of what a version changed."
  watch_next: "A named GitSpawn fix; an install script that verifies the checksum it could publish; whether security-relevant changes start getting release-note lines or advisories; what the enterprise channel serves relative to stable."
---

# Grok Build

This is the `grok` binary, xAI's terminal coding agent. It is not grok.com
chat, not the Grok model, and not Grok Bot, the hosted teammate product
sold through Cursor. It sits in the same bracket as Codex and Claude Code:
the lab that trains the model ships the harness. Unlike Claude Code, the
loop is readable.
[xai-org/grok-build](https://github.com/xai-org/grok-build) is Apache-2.0
Rust, synced from xAI's private monorepo. It has no tags and no releases,
and every commit says "Synced from monorepo."

The short read for 2026-09-21: the pinning problem is solved, the security
record is not. You can now install a named version and match it to a public
sync. The fixes that mattered most this month appear in no release note and
no advisory, only in diffs of the in-tree user guide.

## Where it stands, 2026-09-21

**Channel.** Thirty-three builds in the window, 1.0.8 to 1.0.40.
`curl -fsSL https://x.ai/cli/install.sh | bash -s 1.0.38` installs that
version, and the script offers `stable`, `alpha` and `enterprise` channels.
Each build is a per-version file in xAI's artifact store with a storage md5,
and each public sync's
[crate version](https://github.com/xai-org/grok-build/blob/4247f661689354b831191f11eeeac8424993fe3d/crates/codegen/xai-grok-shell/Cargo.toml)
names the build it mirrors, usually within three days. The script's only
check on what it downloaded is running `--version`, so record the md5
yourself. To read a rule, read it at the sync whose crate version equals
`grok --version`. The enterprise channel lags: it sat on 1.0.35 from 16
September while stable moved on.

**Read the in-tree notes, not the web page.** The
[web changelog](https://web.archive.org/web/20260906084923/https://x.ai/build/changelog)
stopped at 1.0.13 on 6 September while builds through 1.0.23 existed, and
its 1.0.9 entry drops two lines the
[in-tree notes](https://github.com/xai-org/grok-build/blob/4247f661689354b831191f11eeeac8424993fe3d/crates/codegen/xai-grok-shell/changelogs/1.0.9.md)
keep: new sessions briefly started in auto mode, then went back to ask
within the same release. If you ran 1.0.9, check what your sessions start
in. The default mode has been configurable since 1.0.11.

**A cloned repo's own rules now wait for trust.** At the 19 August sync the
[permissions guide](https://github.com/xai-org/grok-build/blob/19d42e35c07a9c9244f03f6df0c4c353f970d4f9/crates/codegen/xai-grok-pager/docs/user-guide/22-permissions-and-safety.md)
said project rules in `.grok/config.toml` and `.claude/settings.json`,
"including `allow` rules, apply without a separate trust prompt." The
[guide at 1.0.38](https://github.com/xai-org/grok-build/blob/4247f661689354b831191f11eeeac8424993fe3d/crates/codegen/xai-grok-pager/docs/user-guide/22-permissions-and-safety.md#L559)
says folder trust gates them and headless runs need `--trust`; the change
landed between 1.0.16 and 1.0.24. So a repository could pre-approve its own
commands on 1.0.16 and earlier. No
release note mentions it. Upgrade, and add `--trust` in CI only for repos
you control. Grok reads Claude Code's settings file, but a Claude Code
bypass lock is advisory to Grok, not enforced.

**GitSpawn.** Manifold
[reported](https://www.manifold.security/blog/ai-coding-agents-git-hijack)
that a repository's git config could run commands when the harness invoked
git, before any trust prompt, and that Grok Build was unpatched at 1.0.13.
Nothing we read names a fix. Open repositories you did not create inside a
container or VM, and check `.git/config` for command-valued keys such as
`core.fsmonitor` first.

**The sandbox stopped the agent editing its own permissions.** From about
1.0.35, every sandbox profile
[write-denies](https://github.com/xai-org/grok-build/blob/4247f661689354b831191f11eeeac8424993fe3d/crates/codegen/xai-grok-pager/docs/user-guide/18-sandbox.md#L28-L55)
Grok's config, folder-trust list, managed config and requirements files at
the kernel level. Before, a sandboxed agent could write the file that
decides what it may do next session. Again, no release note. The default
profile is still `off`, so none of this applies unless you pass one, and
child-network blocking is Linux-only.

**Hooks do more and still fail open.** Hooks can now ask for confirmation,
block a prompt, and replace the tool output the model reads. On a crash,
timeout, missing file or malformed output, the
[guide](https://github.com/xai-org/grok-build/blob/4247f661689354b831191f11eeeac8424993fe3d/crates/codegen/xai-grok-pager/docs/user-guide/22-permissions-and-safety.md#L430)
says they allow. A redaction hook that can crash is a suggestion. Wrap
every error path in an explicit deny. In auto mode, allow rules are not a
closed list; the classifier can approve commands no rule names, so hard
limits belong in deny rules.

**Enterprise policy is signed, if you close the loophole.** Since 1.0.16 a
signed `requirements.toml` can restrict models; 1.0.36 added a managed-only
hook switch. Enforced hooks come from system paths or a user file whose
bytes match the signed policy, and an edited user file
[silently downgrades](https://github.com/xai-org/grok-build/blob/4247f661689354b831191f11eeeac8424993fe3d/crates/codegen/xai-grok-pager/docs/user-guide/10-hooks.md#L234)
to ordinary hooks unless `fail_closed = true`. Set it. The enterprise
channel's 1.0.35 predates the managed-only switch.

**More runs unattended.** Headless sessions can auto-allow prompts through a
startup hint, background monitors lost their ten-hour timeout, and scheduled
`/loop` tasks always run in the background. Before 1.0.22, auto mode ran
`git checkout --`, which discards local changes, without review. If you lost
uncommitted work in auto mode, that is the likely cause. For ACP wrappers
such as Omnigent, Grok's own permission pipeline still decides; the wrapper
sits outside it.

## What is unresolved

- Whether GitSpawn is fixed in any build after 1.0.13.
- Whether the folder-trust and sandbox write-deny code binds as the guide
  says. The enforcing source was not audited and nothing was probed.
- What the web changelog has said since 6 September; the live page refused
  automated reads.

## Profile hygiene

Dated, not evergreen. Every claim above resolves to a finding in
[the run that produced it](/runs/2026-09-21-weekly-digest-2026-08-20_2026-09-21-frontier-v0/),
and this page says what was true on the date at the top. See
[METHOD.md](https://github.com/sheetgenius/frontier/blob/main/METHOD.md) for
the evidence contract.
