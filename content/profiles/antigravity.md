---
schema_version: bitter.frontier_profile.v0
profile_id: antigravity
label: Antigravity CLI
owner: Google
source_contract: sources/antigravity.yml
homepage: https://antigravity.google/product/antigravity-cli
docs: https://antigravity.google/docs
changelog: https://github.com/google-antigravity/antigravity-cli/blob/1.2.7/CHANGELOG.md
repo: https://github.com/google-antigravity/antigravity-cli
tagline: "Google's closed successor to consumer Gemini CLI. Its release notes are finally trustworthy as notes, and its default gates now move in both directions every week."
compared_with:
  - gemini-cli
x:
  project: antigravity
surface_class: closed_source_releases
evidence_floor: official_changelog
status: active_watch
first_published: 2026-07-01
last_updated: 2026-09-21
last_full_review: 2026-09-23
claims:
  - id: sandbox-valueless-flag
    finding_id: 2026-09-21-antigravity-1-1-18-a-valueless-prompt-flag-could-silently-turn-the-sandbox-off
    last_verified: 2026-09-23
    status: active
  - id: gates-loosened
    finding_id: 2026-09-21-antigravity-default-gates-loosened-workspace-reads-auto-granted-1-1-20-always-proceed-now-covers-mcp
    last_verified: 2026-09-23
    status: active
  - id: gates-tightened
    finding_id: 2026-09-21-antigravity-default-gates-tightened-url-fetch-now-asks-1-1-28-allow-always-pins-the-script-1-1-21-head
    last_verified: 2026-09-23
    status: active
  - id: remote-control-permission-mode
    finding_id: 2026-09-21-antigravity-remote-control-grew-into-a-boot-persistent-service-and-remote-triggered-turns-ran-without
    last_verified: 2026-09-23
    status: active
  - id: settings-json-startup-path-1-1-20
    finding_id: 2026-09-21-antigravity-settings-json-the-1-1-16-no-overwrite-fix-was-incomplete-1-1-20-closes-the-startup-path
    last_verified: 2026-09-23
    status: active
  - id: tags-match-notes-from-1-1-18
    finding_id: 2026-09-21-antigravity-the-tag-vs-notes-collision-is-repaired-from-1-1-18-on-every-in-window-tag-now-carries-its
    last_verified: 2026-09-23
    status: active
  - id: markdown-agents-inherit-by-default
    finding_id: 2026-09-21-antigravity-customization-inheritance-flipped-to-on-for-markdown-agents-plugin-mcp-servers-namespaced
    last_verified: 2026-09-23
    status: active
  - id: unsandboxed-rules-deprecated
    finding_id: 2026-09-21-antigravity-unsandboxed-permission-rules-are-deprecated-in-favor-of-command-rules
    last_verified: 2026-09-23
    status: active
  - id: headless-first-class-driver
    finding_id: 2026-09-21-antigravity-headless-became-a-first-class-driver-unlimited-default-timeout-structured-errors-backgroun
    last_verified: 2026-09-23
    status: active
  - id: headless-mode-flag-ignored-before-1-1-12
    finding_id: 2026-08-17-antigravity-1-1-12-discloses-that-mode-was-ignored-entirely-in-headless-runs-plan
    last_verified: 2026-08-17
    status: active
  - id: malformed-allowlist-matched-everything
    finding_id: 2026-08-10-antigravity-1-1-11-discloses-that-a-malformed-allowlist-entry-auto-approved-every
    last_verified: 2026-08-10
    status: active
  - id: gemini-api-key-auth
    finding_id: 2026-08-17-antigravity-1-1-13-adds-gemini-api-key-auth-and-a-custom-base-url-routing-around
    last_verified: 2026-08-17
    status: active
  - id: pattern-approval-lasts-conversation
    finding_id: 2026-08-03-antigravity-permission-scope-widens-in-an-unreadable-product
    last_verified: 2026-08-03
    status: active
  - id: settings-json-no-longer-overwritten
    finding_id: 2026-08-20-antigravity-1-1-16-no-longer-overwrites-unreadable-settings-json-with-defaults
    last_verified: 2026-08-20
    status: retired
    note: "Incomplete fix. 1.1.16 through 1.1.19 still truncated settings.json on startup; 1.1.20 closes that path."
  - id: 1-1-17-is-the-1-1-16-tree
    finding_id: 2026-08-20-antigravity-1-1-17-github-release-is-the-1-1-16-tree
    last_verified: 2026-08-20
    status: retired
    note: "Historical. From 1.1.18 every tag carries its own notes and a unique binary; the 1.1.17 notes entered git via 1.1.18."
  - id: consumer-successor-to-gemini-cli
    finding_id: 2026-07-01-antigravity-successor-to-gemini-consumer
    last_verified: 2026-07-01
    status: active
  - id: gemini-consumer-service-retired-june-18
    finding_id: 2026-07-01-antigravity-successor-to-gemini-consumer
    last_verified: 2026-07-01
    status: active
  - id: closed-source-go-binary
    finding_id: 2026-07-01-antigravity-successor-to-gemini-consumer
    last_verified: 2026-09-23
    status: active
  - id: rapid-stable-release-train
    finding_id: 2026-07-01-antigravity-in-window-release-train
    last_verified: 2026-09-23
    status: active
  - id: strict-approve-rule-matching-default
    finding_id: 2026-07-01-antigravity-strict-approve-matching
    last_verified: 2026-07-01
    status: active
  - id: subagent-always-proceeds-auto-approve
    finding_id: 2026-07-01-antigravity-subagent-auto-approve
    last_verified: 2026-07-01
    status: active
  - id: proceed-in-sandbox-mode
    finding_id: 2026-07-01-antigravity-sandbox-model
    last_verified: 2026-07-01
    status: active
  - id: closed-source-verifiability-gap
    finding_id: 2026-07-01-antigravity-sandbox-model
    last_verified: 2026-09-23
    status: open_question
stance:
  use_for: "Former consumer Gemini CLI users who need a Google-supported terminal agent, and interactive work where the default request-review mode shows a diff before each write. Headless CI on 1.2.6 or later that parses denied_actions and the AGY_ERROR line, with an explicit --print-timeout."
  avoid_for: "The Remote Control background service below 1.2.6. always-proceed on 1.1.21 or later with any MCP server whose every tool you would not pre-approve. Any setting where you must audit what a control enforces: there is no source, no license and no advisory channel, and nothing here has been checked against the binary."
  watch_next: "A removal version for unsandboxed permission rules; any statement of what remote-triggered turns ran under before 1.2.6; whether allow-always grants written before 1.1.21 are narrowed or left as wildcards; any description of the sandbox boundary; a license or security-advisory channel."
---

# Antigravity CLI

Antigravity CLI, the `agy` binary, is where Google sent the consumer Gemini CLI
users it cut off on
[18 June](https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/).
It is closed source. The
[repository](https://github.com/google-antigravity/antigravity-cli/tree/1.2.7)
holds a changelog, a README, a demo GIF and examples, and no license. The
changelog is the entire evidence surface, so every behavior below is Google's
account of its own binary. We have not probed any of it.

## Where it stands, 2026-09-21

**Channel.** Nineteen stables in the month, 1.1.18 through
[1.2.7](https://github.com/google-antigravity/antigravity-cli/releases/tag/1.2.7)
(19 September), and no prereleases. The
[README](https://github.com/google-antigravity/antigravity-cli/blob/1.2.7/README.md)
installs by piping a remote script to `bash` or `iex`, with no checksum and no
version pin. The notes problem of August is fixed: from 1.1.18
[every tag carries its own notes](https://github.com/google-antigravity/antigravity-cli/compare/1.1.17...1.1.18)
and a binary with a unique digest, and the release page matches
`CHANGELOG.md` at the tag word for word. The tag proves the notes, not the
binary. Pin the release asset by sha256.

**The floor is 1.2.6.** Three fixes set it. Before
[1.1.18](https://github.com/google-antigravity/antigravity-cli/blob/1.1.18/CHANGELOG.md),
`agy --print --sandbox 'do the task'` read `--sandbox` as the prompt and ran
with the sandbox off, silently. The status line misreported sandbox state until
1.2.1, so the UI was no evidence either way. Before
[1.1.20](https://github.com/google-antigravity/antigravity-cli/blob/1.1.20/CHANGELOG.md),
startup still truncated `settings.json` on an unrecognized value; the August
fix in 1.1.16 covered only the save path. And 1.2.0 turned Remote Control into
a service registered with the OS, reachable across logouts and reboots, while
[until 1.2.6](https://github.com/google-antigravity/antigravity-cli/blob/1.2.6/CHANGELOG.md)
a remotely triggered turn ran without the session's permission mode, cycle
mode or outside-workspace grants. The note does not say what it ran under
instead. If you used Remote Control before 1.2.6, read those transcripts.
After it, `remote-control status` belongs in your host inventory: it is a
persistent inbound control path.

**Headless is where it breaks.** Between 18 July and 22 August the vendor
disclosed three separate ways headless runs ignored the operator: no persisted
policy applied at all before
[1.1.4](https://github.com/google-antigravity/antigravity-cli/releases/tag/1.1.4),
`--mode plan` did nothing before
[1.1.12](https://github.com/google-antigravity/antigravity-cli/releases/tag/1.1.12),
and the sandbox flag could vanish before 1.1.18. Do not infer headless
behavior from what the terminal shows you.

**Three gates loosened.** Under the default review mode,
[1.1.20](https://github.com/google-antigravity/antigravity-cli/blob/1.1.20/CHANGELOG.md)
grants workspace reads without asking.
[1.1.21](https://github.com/google-antigravity/antigravity-cli/blob/1.1.21/CHANGELOG.md)
extends `always-proceed` to MCP tool calls and page reads, so every tool on
every configured MCP server, plugin-bundled ones included, now runs
unprompted in that mode. And from
[1.1.28](https://github.com/google-antigravity/antigravity-cli/blob/1.1.28/CHANGELOG.md)
a headless run passes plan review automatically. If the plan approval was your
checkpoint in `-p` runs, it no longer exists.

**Three gates tightened.** The same 1.1.28 makes URL fetch ask first; it had
been allowed by default, so injected text could send the agent to any page.
1.1.21 makes an allow-always on `npm run dev` grant that script rather than
every script in the project. The notes say nothing about rewriting grants made
before, so narrow bare `npm run`, `pnpm` and `cargo run` entries yourself.
[1.1.27](https://github.com/google-antigravity/antigravity-cli/blob/1.1.27/CHANGELOG.md)
reports skipped actions as `denied_actions` in headless JSON output. Treat a
non-empty list as a failed run.

**Headless is now a real driver, with sharp edges.**
[1.2.6](https://github.com/google-antigravity/antigravity-cli/blob/1.2.6/CHANGELOG.md)
raised the default headless timeout from five minutes to unlimited, and adds
exit code 3 with an `AGY_ERROR` JSON line for API failures. Since 1.1.28 a
timed-out run exits 0 with partial output, and headless runs leave background
daemons such as dev servers running. A CI wrapper that leaned on the
five-minute cap as a runaway guard now needs `--print-timeout`, a stderr
check and a process reaper.

**Customization changed underneath existing agents.**
[1.1.25](https://github.com/google-antigravity/antigravity-cli/blob/1.1.25/CHANGELOG.md)
makes Markdown custom agents inherit ambient skills, rules and subagents by
default. An agent you wrote to be isolated is not, unless it opts out.
[1.2.2](https://github.com/google-antigravity/antigravity-cli/blob/1.2.2/CHANGELOG.md)
renames plugin MCP servers to `<plugin>_<server>`, which breaks allow rules
keyed on the old name, and starts warning on `unsandboxed` permission rules,
which are deprecated in favor of `command` rules with no removal version
given. `/hooks` hid plugin hooks until 1.2.3, and `hooks.json` could be dropped
under the customization token budget until 1.2.4. Re-run `/hooks` after
upgrading and believe that list, not the one from August.

**Still true from earlier.** The default mode pauses for a line-level diff
before writes, but an allowlisted `write_file` skips it, and nested command
substitutions inherit allowlist approval. A pattern approved at a prompt
[holds for the rest of the conversation](https://github.com/google-antigravity/antigravity-cli/releases/tag/1.1.9).
A malformed allowlist entry
[matched every command](https://github.com/google-antigravity/antigravity-cli/releases/tag/1.1.11)
before 1.1.11. Since
[1.1.13](https://github.com/google-antigravity/antigravity-cli/releases/tag/1.1.13)
the binary runs on `GEMINI_API_KEY` without a sign-in, and
`GOOGLE_GEMINI_BASE_URL` is the only handle you have for watching its traffic.
There is still no security-advisory channel. Every fix above arrived as a
bullet between cosmetic ones.

## What is unresolved

- What the sandbox isolates. The month showed it could be dropped and
  misreported, and its escape hatch is being renamed, but no primary text
  describes the boundary.
- What remote-triggered turns ran under before 1.2.6: looser than the
  session, or stricter.
- Whether broad allow-always grants written before 1.1.21 stay broad.
- When `unsandboxed` rules stop loading.

## Profile hygiene

Dated, not evergreen. Every claim above resolves to a finding in
[the run that produced it](/runs/2026-09-21-weekly-digest-2026-08-20_2026-09-21-frontier-v0/),
or an earlier run named in the claims, and this page says what was true on the
date at the top. For a closed binary the changelog is both the evidence floor
and its ceiling. See
[METHOD.md](https://github.com/sheetgenius/frontier/blob/main/METHOD.md) for
the evidence contract.
