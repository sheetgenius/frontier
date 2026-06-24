# Paperclip Harvest — 2026-06-16 to 2026-06-23

- provider: paperclip (Paperclip) — Factory / control-plane-calibration source
- window: 2026-06-16 to 2026-06-23 inclusive (merge-to-default for commits/PRs via `master`; `published_at` for releases)
- default branch: **master**
- repo: paperclipai/paperclip
- surfaces harvested:
  - GitHub releases: https://github.com/paperclipai/paperclip/releases (tags `v2026.6xx.0`)
  - `repos/paperclipai/paperclip/commits?sha=master&since=2026-06-16T00:00:00Z&until=2026-06-23T23:59:59Z` (89 commits in window)
  - in-window merged PRs, resolved by ancestry not date
  - v2026.618.0 changelog body (release notes)
- release-channel ledger (this window):
  - **tagged-release**: `v2026.618.0` — `published_at` 2026-06-18T21:26:10Z, `created_at` 2026-06-18T20:59:25Z (ISO-verified, year 2026). Only one in-window tag.
  - prior tag was `v2026.609.0` (last window). Only two `v2026.6xx.0` tags exist: v2026.609.0 and v2026.618.0.
  - **main-unreleased**: ~67 commits merged to `master` AFTER the v2026.618.0 tag (2026-06-18 → 2026-06-23) are in no tag as of 2026-06-23. Proven below via `compare/v2026.618.0...<commit>` => `ahead`.
  - **preview-or-beta**: none observed (no beta/preview tag train this window).
- ancestry method: a commit is *in* v2026.618.0 iff `compare/v2026.618.0...<commit>` returns `behind` (commit is an ancestor of the tag); `ahead` proves main-unreleased (commit is past the tag on master).

---

## Carry-forward check (HIGH VALUE — last window's master-unreleased multi-tenant authority cluster)

Last window these five were merged to master (all `merged_at` 2026-06-12, prior window) but were NOT in a tag past v2026.609.0. **Verdict: all five landed in v2026.618.0 this window.** Each is `behind` v2026.618.0 (ancestor = contained) and `ahead` of v2026.609.0 (not in prior tag). The v2026.618.0 changelog also names them explicitly under "Per-company multi-tenant isolation" and the Improvements/Fixes lists. This is the operationally-significant landing tag: the cloud-tenant fix purges instance-admin rows, so the tag that carries it is the one operators must deploy.

| PR | subject | merge_commit | v2026.618.0...commit | v2026.609.0...commit | verdict |
|----|---------|--------------|----------------------|----------------------|---------|
| #7525 | cloud_tenant: company-scoped tenants, never instance-admin | 606e74d1 | behind | ahead | **in v2026.618.0** |
| #5864 | per-company JWT signing keys (multi-tenant isolation) | 70357b96 | behind | ahead | **in v2026.618.0** |
| #5839 | auto-complete approved review comments | 7058d7b6 | behind | (in cluster) | **in v2026.618.0** |
| #5865 | plugin tables get company_id FK (tenant isolation) | 05bcd3ce | behind | (in cluster) | **in v2026.618.0** |
| #8013 | redact passwords/tokens from HTTP error log lines | bb797832 | behind | ahead | **in v2026.618.0** |

Changelog receipt (verbatim, v2026.618.0):
> **Per-company multi-tenant isolation** - A major security foundation for shared and cloud deployments: each company now gets its own JWT signing keys, cloud tenants are strictly company-scoped (never instance-admin), and plugin tables carry a `company_id` foreign key so plugin data is isolated per tenant. ([#5864], [#7525], [#5865], @stubbi)
> **Secrets stay out of the logs** - HTTP error log lines now redact passwords and tokens so credentials don't leak into your logs. ([#8013], @devinfoley)
> **Auto-complete approved review comments** - Review comments that are approved now auto-complete, removing a manual step from the review loop. ([#5839], @tommypoltev)

URL: https://github.com/paperclipai/paperclip/releases/tag/v2026.618.0

Operator implication: anyone who was running v2026.609.0-or-earlier with shared/cloud deployment now has a tagged release that enforces per-company JWT signing keys, company-scoped cloud tenants (no instance-admin escalation), per-tenant plugin-table isolation, and credential redaction in error logs. v2026.618.0 is the upgrade target for the entire multi-tenant authority cluster. **The prior-window "still master-unreleased" hazard is resolved.**

---

## Novelty vs profile

Profile last_full_review 2026-06-03; profile covers through v2026.525.0 (scoped permissions, routine env secrets, document locks, Modal plugin, ACPX-Claude settings deference). NOT yet in profile: the entire v2026.609.0/v2026.618.0 multi-tenant authority cluster (per-company JWT keys, company-scoped cloud tenants, plugin tenant isolation), the Skills Store, self-hostable Kubernetes sandbox execution, heartbeat preflight budget caps, the task watchdog control plane, same-company CEO authorization centralization, "ask" issue work mode, and the now-pervasive "manage AI agents for work" repositioning. The profile's "budget governance expansion" watch-item (per-issue cost summaries → enforced caps) is directly advanced by #8347. The "in_review enforcement / real review path" open question is advanced by the watchdog's scoped review permissions (#8339).

---

## Findings

### 2026-06-23-paperclip-v2026.618.0-multitenant-cluster-tagged
- date: tag published 2026-06-18T21:26:10Z; constituent PRs merged 2026-06-12
- tag/commit/PR: v2026.618.0; PRs #5864, #7525, #5865, #5839, #8013
- change_type: security
- channel: tagged-release (all five PRs `behind` v2026.618.0; `ahead` of v2026.609.0 — see carry-forward table)
- section: control-plane / tenancy
- accessibility_impact: low (no operator-facing UI surface; deployment posture only)
- security_impact: high — per-company JWT signing keys with isolation, cloud tenants strictly company-scoped (never instance-admin, closing the prior privilege-escalation class), per-tenant plugin-table isolation, credential redaction in logs. The cloud-tenant fix purges admin rows on apply.
- operator_implication: v2026.618.0 is the mandatory upgrade target for shared/cloud Paperclip operators; it is the first tag containing the full multi-tenant authority cluster that sat on master past v2026.609.0 last window.
- candidate_signal: **yes** — this is the resolution of a previously-flagged operational hazard (authority cluster landing tag) and a genuine tenancy-boundary hardening; action-bearing for any multi-tenant operator.
- confidence: high
- receipt (verbatim): "each company now gets its own JWT signing keys, cloud tenants are strictly company-scoped (never instance-admin), and plugin tables carry a `company_id` foreign key so plugin data is isolated per tenant."
- url: https://github.com/paperclipai/paperclip/releases/tag/v2026.618.0

---

### 2026-06-23-paperclip-heartbeat-preflight-budget-caps
- date: merged 2026-06-20T04:39:50Z
- tag/commit/PR: PR #8347; merge_commit 631b7806ed; **main-unreleased** (`compare/v2026.618.0...631b7806ed` => `ahead` by 43)
- change_type: economics / governance / runtime
- channel: main-unreleased (merged to master, in no tag as of 2026-06-23; proven by ancestry above)
- section: control-plane / budget
- accessibility_impact: low
- security_impact: medium (a spend/containment governance lever, not an authority surface)
- operator_implication: Per-agent daily run-count and daily cost caps are now enforced at the heartbeat *preflight* boundary — BEFORE an adapter starts — not only after model usage is recorded. A run queued before a cap was hit is cancelled at claim time rather than invoking the adapter. Adds an opt-in timer no-work fast-exit so routine schedules don't pay for no-op model turns. This is exactly the profile's "budget governance expansion: per-issue cost summaries → enforced budget caps (hard stops)" watch-item, now realized.
- candidate_signal: **yes** — moves Paperclip from budget *surfacing* (per-issue cost summaries) to budget *enforcement* with a pre-execution hard stop and clean cancel-at-claim. Directly advances a profile watch-item; action-bearing for anyone bounding autonomous/recurring spend. (Still main-unreleased — flag as not-yet-shipped.)
- confidence: high
- receipt (verbatim): "capped agents stop before new execution, queued work is cancelled cleanly at claim time, and proactive agents still run by default unless the operator opts into no-work skipping." Also: "Budgeting and recurring work need enforcement before an adapter starts, not only after model usage is recorded."
- url: https://github.com/paperclipai/paperclip/pull/8347

---

### 2026-06-23-paperclip-task-watchdog-control-plane
- date: merged 2026-06-19T20:38:52Z
- tag/commit/PR: PR #8339; merge_commit a71c4b6782; **main-unreleased** (`compare/v2026.618.0...a71c4b6782` => `ahead` by 32)
- change_type: workflow / governance
- channel: main-unreleased (in no tag as of 2026-06-23)
- section: recovery / review
- accessibility_impact: low-medium (board/UI watchdog configuration surfaces on tasks)
- security_impact: medium — watchdog follow-up runs are scoped: recovery/status-only runs **cannot mutate approvals or perform deliverable work**, preserving single-assignee and governance invariants.
- operator_implication: A first-class per-task watchdog model with scoped review permissions: inspects stopped/stalled work and creates scoped follow-ups without bypassing task ownership. The strict boundary (status-only runs can't touch approvals) is the structural-not-asserted governance pattern extended to recovery. Directly advances the profile open question "what constitutes a real review path for in_review."
- candidate_signal: **yes** — a new governance primitive: review/recovery actors with permissions strictly narrower than work actors, enforced structurally. This is the Factory-relevant shape (who can move state vs. who can do work). (Main-unreleased — not yet shipped.)
- confidence: high
- receipt (verbatim): "Watchdog follow-ups also need strict boundaries so recovery/status-only runs cannot mutate approvals or perform deliverable work." Also: "a more explicit task-review loop that preserves Paperclip's single-assignee and governance invariants while making stalled work easier to route."
- url: https://github.com/paperclipai/paperclip/pull/8339

---

### 2026-06-23-paperclip-same-company-ceo-authz-centralization
- date: merged 2026-06-22T15:34:14Z
- tag/commit/PR: PR #8276; merge_commit 93fdb9c218; **main-unreleased** (`compare/v2026.618.0...93fdb9c218` => `ahead` by 67)
- change_type: security / governance
- channel: main-unreleased (in no tag as of 2026-06-23)
- section: tenancy / authz
- accessibility_impact: low
- security_impact: high — centralizes same-company CEO-or-board authorization across company-settings, branding, and portability (export/import) routes that previously did per-route checks prone to drift. Adds regression coverage proving a CEO agent from one company cannot read/mutate/archive/delete/export/import against another company.
- operator_implication: CEO agents retain limited *same-company* management powers, but the company boundary is now enforced centrally rather than per-route — closing a class of cross-company drift on adjacent mutation/portability surfaces. Complements the v2026.618.0 cloud-tenant fix (company-scoped, never instance-admin) by hardening the agent-API-key authority model one layer up.
- candidate_signal: **yes** — agent-as-principal authorization is being centralized and regression-locked at the company boundary; this is the accountability/authority-legibility thesis (who can act on what tenant). Particularly notable: a *CEO agent* is a first-class authority role with bounded, tested cross-tenant denial. (Main-unreleased.)
- confidence: high
- receipt (verbatim): "It also adds regression coverage proving a CEO agent from one company cannot read, mutate, archive, delete, export, or import against another company." Also: "an agent API key must only manage the company that owns the authenticated agent, and only CEO agents should get the limited same-company management permissions."
- url: https://github.com/paperclipai/paperclip/pull/8276

---

### 2026-06-23-paperclip-ask-issue-work-mode
- date: merged 2026-06-19T18:06:05Z
- tag/commit/PR: PR #8334; merge_commit 7069053a1f; **main-unreleased** (`compare/v2026.618.0...7069053a1f` => `ahead` by 29)
- change_type: workflow
- channel: main-unreleased (in no tag as of 2026-06-23)
- section: issue / work-mode
- accessibility_impact: low-medium (issue composer UI gains an Ask mode)
- security_impact: low
- operator_implication: Adds an explicit "Ask" issue work mode alongside existing `standard` and `planning` modes, threaded through shared contracts, server heartbeat context, and the composer UI. Lets operators pose a focused question without implying task execution or plan drafting. Extends the `work_mode` taxonomy the profile already tracks (standard/planning).
- candidate_signal: no — incremental extension of an existing work-mode flag; classification/intent-framing, not a new governance or authority primitive. Profile-relevant as work-mode taxonomy growth, not a standalone signal.
- confidence: high
- receipt (verbatim): "This pull request adds an explicit Ask mode and threads it through shared contracts, server heartbeat context, and the issue composer UI."
- url: https://github.com/paperclipai/paperclip/pull/8334

---

### 2026-06-23-paperclip-hire-approval-single-source-of-truth
- date: merged 2026-06-19T19:15:58Z
- tag/commit/PR: PR #8340; merge_commit 6a3f5b685d; **main-unreleased** (post-tag on master)
- change_type: reliability / governance
- channel: main-unreleased (in no tag as of 2026-06-23)
- section: approvals / hiring
- accessibility_impact: low-medium (inbox approval card / agent detail page)
- security_impact: low-medium (approval-record integrity)
- operator_implication: Hiring an agent creates a `hire_agent` approval record; the agent sits in `pending_approval` until resolved. Previously the agent-detail-page Approve/Terminate only flipped agent state and left the approval record `pending` (stale inbox card). Now the detail-page action routes through the shared `approvalsSvc.approve()` so deciding a hire in one place clears it everywhere (resolves approval, runs activation, budget policy, hire-approved notification). Confirms hiring/approval is a governed lifecycle with a budget-policy hook at approval time.
- candidate_signal: no — a correctness fix making the existing hire-approval record authoritative; reinforces that agent hiring is an approval-gated, budget-policy-bound lifecycle, but is not itself a new primitive. Useful corroboration of the approvals-as-operating-state thesis.
- confidence: high
- receipt (verbatim): "deciding a hire in one place clears it everywhere, so the inbox no longer asks you to approve an agent you already approved." Also notes detail-page approve now "runs activation, budget policy, and the hire-approved notification."
- url: https://github.com/paperclipai/paperclip/pull/8340

---

### 2026-06-23-paperclip-remote-claude-config-isolation
- date: merged 2026-06-23T02:35:26Z
- tag/commit/PR: PR #7676; merge_commit 2e2da3bc2f; **main-unreleased** (`compare/v2026.618.0...2e2da3bc2f` => `ahead` by 72)
- change_type: security
- channel: main-unreleased (in no tag as of 2026-06-23)
- section: adapter / credential-boundary
- accessibility_impact: low
- security_impact: high — remote/sandbox Claude execution previously could inherit local operator permissions and local Claude config (including local bypass-oriented config). Now remote runs receive only Paperclip-managed config and sandbox-safe permission grants; local Claude execution stays on the local path. Prevents local-credential leakage into remote homes and prevents unattended sandbox runs stalling on permission prompts.
- operator_implication: A credential-trust-boundary hardening directly analogous to the SSH host-env isolation fix the profile already flags (PR #5142, v2026.511.0). The remote/sandbox execution surface is again the leakage vector: local trust posture must not flow into sandbox-backed runs. Operators running claude_local against sandboxes should track this fix.
- candidate_signal: **borderline-yes** — reinforces the established "remote execution is not a safe passthrough for local credentials" advisory pattern (a repeat of the SSH-env class on the Claude adapter). Action-bearing for sandbox operators, but a continuation of a known pattern rather than a novel boundary. (Main-unreleased.)
- confidence: high
- receipt (verbatim): "remote Claude execution could share local Claude settings and local permission behavior, including local bypass-oriented config that should not be copied into sandbox-backed runs." Expected: "remote execution should receive only the Paperclip-managed config and permission grants needed for the assigned run."
- url: https://github.com/paperclipai/paperclip/pull/7676

---

### 2026-06-23-paperclip-skills-store
- date: tag published 2026-06-18T21:26:10Z
- tag/commit/PR: v2026.618.0; PR #7990
- change_type: capability / ecosystem
- channel: tagged-release (changelog Highlight)
- section: skills / catalog
- accessibility_impact: medium (in-app store to browse/install/manage agent skills without hand-wiring files)
- security_impact: low-medium (skills are now an installable unit with a company-scoped catalog — tenant-scoped distribution)
- operator_implication: Skills become a first-class, installable unit with install counts and a **company-scoped catalog**. Lowers the bar to granting agents new capabilities; the company-scoping ties capability distribution to the tenant boundary (consistent with the multi-tenant cluster).
- candidate_signal: no — capability-distribution UX; the company-scoped catalog is a mild governance touch but not an enforced authority/budget primitive. Profile-relevant ecosystem growth.
- confidence: high
- receipt (verbatim): "Browse, install, and manage agent skills from a dedicated in-app store... Skills are now a first-class, installable unit with install counts and a company-scoped catalog. ([#7990], @cryppadotta)"
- url: https://github.com/paperclipai/paperclip/releases/tag/v2026.618.0

---

### 2026-06-23-paperclip-selfhostable-k8s-sandbox-execution
- date: tag published 2026-06-18T21:26:10Z
- tag/commit/PR: v2026.618.0; PRs #5790, #7938, #7934, #7595 (Novita)
- change_type: runtime / ecosystem
- channel: tagged-release (changelog Highlight)
- section: sandbox / execution
- accessibility_impact: medium (run agents in an isolated sandbox on your own infra)
- security_impact: medium (self-hostable execution isolation; hardened agent-runtime images)
- operator_implication: A self-hostable Kubernetes sandbox provider plugin plus server-side Kubernetes execution integration and hardened runtime images; Novita joins as another sandbox provider. Extends the pluggable-sandbox surface (E2B/Daytona/Cloudflare/exe.dev/Modal) the profile tracks toward on-own-infra isolated execution.
- candidate_signal: no — extends an already-tracked pluggable-sandbox pattern; meaningful for self-hosters but not a new governance/authority primitive.
- confidence: high
- receipt (verbatim): "a self-hostable Kubernetes sandbox provider plugin lands alongside server-side Kubernetes execution integration and hardened agent-runtime images, plus a new Novita sandbox provider. Run your agents in an isolated sandbox on your own infrastructure or a cloud provider."
- url: https://github.com/paperclipai/paperclip/releases/tag/v2026.618.0

---

## Repositioning watch — "manage AI agents for work" (continuation of "away from zero-human companies")

The repositioning the prompt asks about is now **pervasive boilerplate**. Every PR "Thinking Path" inspected this window opens with the verbatim line:
> "Paperclip is the open source app people use to manage AI agents for work."

Confirmed present in PRs #8339, #8347, #8276, #7676, #8334, #8340, #8425, #8403 (8/8 sampled). This is a continuation/consolidation of the move away from "zero-human companies" toward "manage AI agents *for work*" — a human-in-the-loop, governed-labor framing. Corroborating product surfaces this window keep the human-governance vocabulary: hire *approval* records with a budget-policy hook (#8340), CEO-agent authorization bounded to its own company (#8276), watchdog review runs that cannot mutate approvals (#8339), and operator-configured budget caps that stop agents before execution (#8347). The company metaphor persists (companies, CEO agents, hiring, board) but is consistently subordinated to operator approval/budget/authority controls rather than autonomy. No tagged release-notes "highlight" restated a zero-human-company claim this window.

- receipt (verbatim, representative): "Paperclip is the open source app people use to manage AI agents for work." (PR #8339 Thinking Path; identical opening across sampled PRs)
- urls: https://github.com/paperclipai/paperclip/pull/8339 ; /pull/8347 ; /pull/8276
