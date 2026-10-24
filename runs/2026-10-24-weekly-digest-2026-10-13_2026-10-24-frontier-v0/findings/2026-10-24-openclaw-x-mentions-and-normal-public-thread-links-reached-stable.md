---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-openclaw-x-mentions-and-normal-public-thread-links-reached-stable
source: openclaw
source_contract: sources/openclaw.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/openclaw/openclaw/blob/v2026.10.7/docs/channels/x.md
    precision: tagged_commit_file
  - url: https://github.com/openclaw/openclaw/blob/v2026.10.7/docs/web/control-ui/sessions-and-sidebar.md#L339-L356
    precision: tagged_commit_file
  - url: https://github.com/openclaw/openclaw/commit/8787ee08687efccb868e8273218942d1b597fb32
    precision: commit
---
# 2026-10-24-openclaw-x-mentions-and-normal-public-thread-links-reached-stable

X mentions and normal public thread links reached stable. The bundled X channel turns admitted mentions into public replies, with streaming or polling, numeric-ID admission, optional repository-question guest mode, and API cost limits. It is not an X DM, general posting, or media-upload client. A deliberately published session now opens read-only to signed-out visitors at its regular thread URL. Publication exposes subsequent user messages and final answers; tools, reasoning, files, images, and internal metadata are excluded. Credential redaction is best effort. X automatic publication is separately off by default and requires public-audience verification.

Channel: tagged-release. Half: capability. Date: 2026-10-18.

Operator consequence: A maintainer can receive repository questions and share agent work without sending readers through account setup. Test admission, spending limits, and the exact public transcript before enabling it. Disabling publication stops future anonymous reads but cannot recall saved copies. Human effort moves from operating a bespoke public bot or sharing bridge to deciding who may trigger work and what may become public.

## Receipt
- https://github.com/openclaw/openclaw/blob/v2026.10.7/docs/channels/x.md
- https://github.com/openclaw/openclaw/blob/v2026.10.7/docs/web/control-ui/sessions-and-sidebar.md#L339-L356
- https://github.com/openclaw/openclaw/commit/8787ee08687efccb868e8273218942d1b597fb32
