---
provider: heypi
window: 2026-06-23..2026-06-24
run_dir: runs/2026-06-24-weekly-digest-2026-06-23_2026-06-24-frontier-v0
repo: hunvreus/heypi
canonical_repo_confirmed: true
harvested_by: opus-4.8-harvester
harvested_at: 2026-06-24
note: >
  Initial-build harvest for heypi's introduction to the watchlist. Findings cover
  the project's current state (tags 0.1.0..0.2.0-beta.0) so the profile can be
  seeded; the in-window event is the 0.2.0-beta.0 pre-release tag (2026-06-23) and
  its post-tag main commits. Channel resolved by tag ancestry: 0.1.x = tagged
  (stable patch tags); 0.2.0-beta.0 = preview-or-beta; post-tag admin/CSRF/dev
  commits = main-unreleased. heypi publishes NO GitHub Releases -- only git tags +
  CHANGELOG.
---

# heypi -- Harvest 2026-06-23..2026-06-24 (initial build)

## Identity and substrate

heypi (`@hunvreus/heypi`), by Ronan Berder, MIT, TypeScript. A framework for
*governed* team chat-ops agents in Slack, Discord, Telegram, and trusted webhooks.
Hard runtime dependency on Pi: `"@earendil-works/pi-coding-agent": "^0.79.6"`
([packages/heypi/package.json](https://raw.githubusercontent.com/hunvreus/heypi/0.2.0-beta.0/packages/heypi/package.json)).
The Gondolin sandbox is a second earendil-works dependency,
`"@earendil-works/gondolin": "^0.12.0"`
([packages/heypi-runtime-gondolin/package.json](https://raw.githubusercontent.com/hunvreus/heypi/0.2.0-beta.0/packages/heypi-runtime-gondolin/package.json)).
README: "Team chat agents with approvals, audit, and sandboxed tools... heypi is
for governed chat-ops agents that work in shared channels while keeping sensitive
actions reviewable." HN Show HN (id 48327336, 2026-05-29T18:30:06Z): "I kind of
wanted Openclaw, but for teams"; "It's built on Pi, so you can use Pi extensions
(ish)."

## Findings

### 2026-06-24-heypi-governance-shell-on-pi
- what: heypi packages the approval/audit/sandbox/secret shell as a framework atop
  Pi, which deliberately ships no governance in its core. Two earendil-works deps:
  pi-coding-agent ^0.79.6 (agent loop) and gondolin ^0.12.0 (VM sandbox).
- evidence: package.json (commit-precision), https://heypi.dev/docs/ , README, HN.
- channel: tagged-release (relationship present since 0.1.0, 2026-05-29).
- change_type: philosophy / capability. accessibility_impact: medium.

### 2026-06-24-heypi-approvals-opt-in-not-default
- what: heypi's headline is approvals, but the docs are explicit: "approval does
  not make every tool call require approval. Tool confirmation does that."
  Approval is opt-in per tool -- via `approval.command()` on bash (blocks
  destructive, asks on risky, allows low-risk) or a custom tool's confirm fn.
  Nothing requires approval out of the box except what the bash classifier gates.
- evidence: https://heypi.dev/docs/configuration/approvals (official_docs).
- channel: tagged-release (model present in 0.1.x).
- change_type: governance. security_impact: medium (security_change: reframes).

### 2026-06-24-heypi-sandbox-runtimes
- what: default runtime `just-bash` is an in-process TS bash interpreter with a
  virtual filesystem and NETWORK OFF by default. Docker (one warm container per
  scope) and Gondolin (one warm QEMU VM per scope) are opt-in. Host runtimes
  (`host-bash`, `guarded-bash`) emit a startup warning: "For shared or team-facing
  bots, prefer just-bash, Docker, or Gondolin."
- evidence: https://heypi.dev/docs/configuration/runtime (official_docs); gondolin
  package.json; 0.1.2 startup-warning changelog entry.
- channel: tagged-release (0.1.0; warnings 0.1.2). security_impact: medium (closes).

### 2026-06-24-heypi-secret-handoff
- what: managed `secret_request` tool; client-side WebCrypto encryption so the
  secret "is not stored as chat history and is not sent to the model." BUT stored
  as scoped runtime files `.secrets/<name>`: "Anyone who can read the scoped
  runtime workspace can read saved secrets," and "Pending secret requests are lost
  on process restart."
- evidence: https://heypi.dev/docs/configuration/secrets (official_docs); 0.1.1
  changelog (encrypted secret requests + browser handoff).
- channel: tagged-release (0.1.1). security_impact: medium (security_change: reframes).

### 2026-06-24-heypi-0.2.0-beta-governance-hardening
- what: 0.2.0-beta.0 (2026-06-23) is a large BREAKING pre-release. Governance-
  relevant: webhooks HTTPS-by-default (HTTP needs `unsafeReplyHttp: true`);
  root-level `approval.approvers`/`approval.admins` now FAIL at startup, forcing
  adapter-scoped `permissions`; `builtinTools`/`tools` split; durable instruction
  surface renamed `prompt`/`soul` -> `instructions`; JS authoring APIs
  (`loadAgent`, `defineTool`, `approval`); first-class eval system; new CLI (`heypi
  dev/start/threads/thread/events/status`); typed trace event persistence +
  trace-event secret redaction; admin redesign.
- evidence: https://raw.githubusercontent.com/hunvreus/heypi/0.2.0-beta.0/CHANGELOG.md ;
  https://github.com/hunvreus/heypi/tags (release_note).
- channel: PREVIEW-OR-BETA (the tag is `0.2.0-beta.0`).
- change_type: capability / workflow / security. accessibility_impact: low.

### 2026-06-24-heypi-admin-panel-and-audit-default-off
- what: heypi's "audit trail" is typed trace event persistence (messages, turns,
  tool calls, approvals) surfaced in the admin panel's Chats/activity views; there
  is no standalone audit-trail doc. The admin panel is DISABLED by default, binds
  loopback `127.0.0.1:4321`, logs a one-time login URL that expires after 5
  minutes, and warns "Never set it on a public host." CLI `heypi events`.
- evidence: https://heypi.dev/docs/configuration/admin (official_docs); CHANGELOG
  (typed trace persistence in 0.2.0-beta.0).
- channel: tagged-release for the default-off/loopback posture; the trace
  persistence + redesign are preview-or-beta (0.2.0-beta.0).
- change_type: governance / accessibility. accessibility_impact: medium.

### 2026-06-24-heypi-scaffolder-onboarding
- what: `npm create heypi@latest` (the `create-heypi` scaffolder, added 0.1.3,
  2026-06-04) prompts for adapter/runtime/model, writes starter agent files, and
  prepares env placeholders. Curated model picker (OpenAI/Anthropic/Google/xAI/
  custom). Deploy target is one long-running Node 22+ service with persistent
  state (SQLite) + workspace dirs; an app lock prevents multi-process runs ("a
  guardrail, not a scaling mechanism").
- evidence: 0.1.3 changelog; https://heypi.dev/docs/ (guides/deployment) (release_note/official_docs).
- channel: tagged-release (0.1.3). accessibility_impact: high.

### 2026-06-24-heypi-durability-disclaimer
- what: heypi explicitly does NOT replay in-flight agent turns after a process
  crash; on startup it "fails stale running calls." Pending approvals are
  persisted, but "Pending secret requests are lost on process restart." Memory is
  off by default and is "a hygiene check, not a security boundary." The boundary of
  what heypi does NOT own is stated, not hidden.
- evidence: https://heypi.dev/ (durability scope line);
  https://heypi.dev/docs/configuration/approvals ; .../secrets ; .../memory (official_docs).
- channel: tagged-release / docs (posture). change_type: philosophy / reliability.

### 2026-06-24-heypi-channel-discipline-tags-no-releases
- what: heypi ships git tags + a CHANGELOG but publishes NO GitHub Releases
  ("There aren't any releases here"). The current ship is `0.2.0-beta.0` (a beta),
  and ~24 further commits sit on `main` after the tag (admin CSS/CSRF fixes, `feat(admin):
  add hot reload toggle`, `fix(dev): watch app files`). The newest governance shell
  exhibits the same merged-vs-shipped gap as the rest of the watchlist.
- evidence: https://github.com/hunvreus/heypi/tags ;
  https://github.com/hunvreus/heypi/releases ; CHANGELOG (release_note).
- channel: documents channel itself; current HEAD is main-unreleased past a beta tag.
- change_type: ecosystem / philosophy.

## Marketing-vs-substance ledger (for editorial honesty)

- "A multiplayer chat agent for your team" and "An app you own, not a workflow
  platform" appear only on the landing page, not the README or docs.
- "audit trail" headline is real but = typed trace events in a default-off admin
  panel; no dedicated audit doc.
- "approvals" headline vs default: nothing requires approval by default; per-tool
  opt-in. Conservative defaults are real but live elsewhere (network-off sandbox,
  admin off, memory off, HTTPS webhooks).
