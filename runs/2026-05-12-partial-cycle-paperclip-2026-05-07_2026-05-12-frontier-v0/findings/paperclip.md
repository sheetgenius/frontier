---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-05-12-paperclip-secrets-vaults-and-cursor-cloud
source: paperclip
source_contract: sources/paperclip.yml
window:
  start: 2026-05-07
  end: 2026-05-12
versions_covered: "v2026.428.0..v2026.512.0"
status: accepted_signal
confidence: high
accessibility_impact: medium
operator_relevance: high
bitter_relevance: high
factory_relevance: high
actionability: test
evidence:
  - label: "v2026.512.0 release notes (ships PRs cited below)"
    url: https://github.com/paperclipai/paperclip/blob/master/releases/v2026.512.0.md
    precision: release_note
  - label: "Secrets provider vaults with remote import (PR #5429)"
    url: https://github.com/paperclipai/paperclip/pull/5429
    precision: merged_pr
  - label: "cursor_cloud adapter for Cursor SDK (PR #5664)"
    url: https://github.com/paperclipai/paperclip/pull/5664
    precision: merged_pr
  - label: "Planning mode for issue work (PR #5353)"
    url: https://github.com/paperclipai/paperclip/pull/5353
    precision: merged_pr
  - label: "Stop leaking host environment into remote probes (PR #5142)"
    url: https://github.com/paperclipai/paperclip/pull/5142
    precision: merged_pr
---

# Paperclip v2026.512.0: Secrets Vaults, Cursor Cloud, and Control-Plane Hardening

## What Changed

v2026.512.0 shipped 2026-05-12 with 89 commits since v2026.428.0. (An
earlier draft of this finding cited "v2026.511.0" — that version was
never tagged in the upstream repo. The link health check on 2026-05-13
flagged the broken receipt; corrected in the same run.) The release
headline is expansion of the governance surface: credential management, adapter
reach, work-mode controls, and revision history.

**Secrets provider vaults with remote import** (PR #5429): Company secrets gain
provider-vault configuration, AWS Secrets Manager remote-import preview/commit,
binding usage tracking, access events, and rotation guards. The Secrets settings
UI exposes vault management and remote import. `company_secrets` now tracks
provider metadata, fingerprints, rotation timestamps, and soft-delete status.
Existing secrets default to `managed_mode = 'paperclip_managed'` with
`status = 'active'`. This is the first external credential backend: operators
can now rotate credentials in AWS Secrets Manager and have Paperclip pull the
updated values on import.

**Cursor cloud adapter** (PR #5664): A new `cursor_cloud` adapter drives
Cursor's hosted-agent platform through `@cursor/sdk`, mapping Paperclip
heartbeats to Cursor's durable-agent + per-run model with session reuse,
streaming, and cancellation. Cursor is also now a supported sandbox environment.
Paperclip can now route work to both local Cursor and cloud-hosted Cursor agents.

**Daytona, exe.dev, and Cloudflare sandbox provider plugins**: Three new sandbox
providers expand the execution environment options beyond E2B. All are opt-in
plugins following the same contract as the existing E2B provider.

**Planning mode for issue work** (PR #5353): Issues now carry a `standard` /
`planning` work mode flag through the full stack (database, validators, server
flows, plugin protocol, adapter heartbeat payloads, board UI). Operators can
designate issues as planning-mode work, which is preserved through suggested
follow-up issues.

**Routine revision history with restore** (PR #5285): Routines keep an
append-only revision log. Operators can preview prior revisions, see structured
change summaries, restore older definitions, and recover webhook secrets after a
restore. This makes routine definitions auditable rather than stateless.

**Host environment isolation for remote probes** (PR #5142): SSH remote
execution now strips the inherited host shell environment before passing env to
remote commands. The Pi and OpenCode SSH probes no longer forward `process.env`
to the remote shell. This closes a significant information-leakage path: host
API keys, tokens, and paths were previously reaching remote execution targets.

**Expanded plugin host surface** (PR #5205): Plugins can now declare scoped
database namespaces with migration tracking, local project folders, managed
agents and routines, scoped APIs, and reusable UI components. This is a
significant expansion of what a plugin can own within a company.

**Hardened control-plane safety** (PR #5292): Run-aware confirmation ordering
and interrupted-run cleanup are corrected, agent-authored `in_review` status
updates now require a real review path (not just a model claim), and Cloud
tenant issue identifiers are recognized across shared parsing and server routes.

## Operator Consequence

The secrets provider vaults are the highest-priority item for operators managing
credentials at scale. The AWS Secrets Manager import path means credentials no
longer need to be manually entered and re-entered when rotated. The `secret_access_events`
table creates an audit trail for credential use.

The host environment isolation fix is a security regression that was quietly
present in all prior versions: any SSH-managed execution environment could
observe the Paperclip host's environment variables including API keys and tokens.
Operators running remote agents should upgrade before the fix is characterized
as a CVE.

The agent-authored `in_review` restriction (hardened control-plane safety) is
governance-relevant: previously, a model could self-transition an issue to
`in_review` without a real review path. The fix makes review state a
control-plane-enforced precondition, not just a convention.

## Bitter Implication

The secrets vaults addition establishes credential provenance as a
first-class concern at the orchestration layer. Paperclip is building
what Bitter's evidence model calls a "receipt" for credential access: which
secret, which rotation, which agent used it, and when. This is Bitter's
model applied to credentials specifically.

The `in_review` enforcement (agent cannot self-transition without a real review
path) is the Kanban hallucination gate equivalent for Paperclip: a control-plane
primitive that prevents agents from asserting completion without going through
an enforced state machine. Hermes' Kanban gate and Paperclip's `in_review`
enforcement are convergent designs.

The host env isolation fix teaches a lesson about trust boundaries in remote
execution: the host environment is not a safe passthrough to remote agents. Any
operator-facing agent orchestration system must think about what the host leaks
to workers.

## Signal

Three items are action-bearing:
- Operators running SSH-managed execution should upgrade to get host environment
  isolation before deploying new remote agents.
- Operators managing credentials should evaluate the AWS Secrets Manager import
  path in the Secrets settings UI.
- Operators using Cursor as an adapter can now configure `cursor_cloud` for
  cloud-hosted routing with session reuse and cancellation.
