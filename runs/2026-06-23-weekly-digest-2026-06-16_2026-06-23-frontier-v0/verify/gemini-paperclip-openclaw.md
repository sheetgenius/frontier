# Adversarial Verification — Gemini CLI / Paperclip / OpenClaw

Window: 2026-06-16 to 2026-06-23. Verifier: Opus 4.8, re-fetched primary sources via
`gh api`. Channel calls proven by git ancestry (compare merge_base / ahead_by / behind_by)
and release `prerelease` flags, not dates. A claim survives only on verbatim receipt.

Verdict legend: CONFIRMED (survives refutation) / REFUTED / PARTIAL.

---

## Cluster 1 — Gemini CLI (`google-gemini/gemini-cli`)

| Claim | Verdict | Deciding verbatim receipt | Framing |
|---|---|---|---|
| **A** — Skill install/link/uninstall path-traversal SECURITY fix (`bca5667fc` / PR #27767) STILL not in any STABLE release; second window stranded | **CONFIRMED** | Commit `bca5667fc65517b...` = `fix(cli): prevent path traversal vulnerabilities during skill install… (#27767)`, dated 2026-06-15. `compare v0.47.0...bca5667fc` → **status diverged, ahead_by 7, behind_by 2** (fix is NOT an ancestor of stable v0.47.0). `compare v0.48.0-preview.0...bca5667fc` → **status behind, ahead_by 0** (fix IS an ancestor of the preview). v0.47.0 is the latest STABLE tag in-window: `prerelease:false`, published 2026-06-18. v0.48.0 exists only as `-preview.0` (`prerelease:true`, 2026-06-17). | Accurate as written. Fix shipped only to preview a second consecutive window; no stable carries it. |
| **B** — Antigravity migration commands + built-in `antigravity-support` skill (auto `curl … \| bash` install of `agy`) REACHED stable v0.47.0 | **CONFIRMED** | Migration commit `4523560278ac` = `Add documentation and migration commands for Antigravity CLI (#27765)`; `compare 4523560278ac...v0.47.0` → **status ahead, behind_by 0** (ancestor). Built-in skill files present at `ref=v0.47.0`: `packages/core/src/skills/builtin/antigravity-support/SKILL.md`. SKILL.md verbatim: `curl -fsSL https://antigravity.google/cli/install.sh \| bash` … "This script downloads, verifies, and installs the latest version of Antigravity, and automatically registers the `agy` binary in your PATH." Description fires "when the user asks questions, seeks help, or requests instructions related to installing, setting up, or migrating to Antigravity CLI." | Accurate. Curl-piped-to-bash install of `agy` ships in a stable release as a built-in skill. |
| **C** — "Antigravity is coming to town" banner's 5-show cap deliberately bypassed (`\|\| activeText.includes('Antigravity')`) so it shows EVERY session for free/unpaid-tier users, in stable | **CONFIRMED** | `packages/cli/src/ui/hooks/useBanner.ts` @ v0.47.0: `const DEFAULT_MAX_BANNER_SHOWN_COUNT = 5;` then `const showBanner = activeText !== '' && (currentBannerCount < DEFAULT_MAX_BANNER_SHOWN_COUNT \|\| activeText.includes('Antigravity'));`. Commit `f40498db644a` = `update the max amount of times the Antigravity transition banner can be displayed. (#27676)`; `compare f40498db644a...v0.47.0` → **status ahead, behind_by 0** (ancestor of stable). PR #27676 body verbatim: "Allows CLI transition banner to be visible consistently for users that would see it rather than hiding it after 5 times." Validation note: "Log in with a free tier account 5 or more times and verify that the '│ Gemini CLI is transitioning to the new Antigravity CLI for Google One and unpaid tier (Gemini Code Assist for individuals) users.' message appears consistently." | Accurate. Cap bypass is keyword-based (`includes('Antigravity')`), author-stated as a "workaround," targeting free / Google One / unpaid-tier users; lands in stable. |

---

## Cluster 2 — Paperclip (`paperclipai/paperclip`, default branch master)

In-window stable tags: **v2026.618.0** (`prerelease:false`, published 2026-06-18T21:26:10Z,
latest stable in-window) and prior **v2026.609.0** (`prerelease:false`, 2026-06-09). No
prerelease tags in window.

| Claim | Verdict | Deciding verbatim receipt | Framing |
|---|---|---|---|
| **D** — All five prior master-unreleased authority PRs LANDED in v2026.618.0: #7525, #5864, #5865, #5839, #8013 | **CONFIRMED** | Each merge_sha is a clean ancestor of v2026.618.0 (`compare merge_sha...v2026.618.0` → behind_by 0) and excluded from v2026.609.0 (`compare merge_sha...v2026.609.0` → ahead_by 0): #7525 `606e74d1` `cloud_tenant: company-scoped tenants, never instance-admin` (into tag ahead_by 41/behind_by 0; prior behind_by 35/ahead_by 0); #5864 `70357b96` `feat(security): per-company JWT signing keys for multi-tenant isolation` (40/0; 36/0); #5865 `05bcd3ce` `feat(security): plugin tables get company_id FK for tenant isolation` (25/0; 51/0); #5839 `7058d7b6` `fix: auto-complete approved review comments` (43/0; 33/0); #8013 `bb797832` `fix(logger): redact passwords and tokens from HTTP error log lines` (45/0; 31/0). | Accurate. All five carry-forward PRs landed in the in-window stable tag; none refutes. |
| **E** — This window's NEW sharpest controls are master-unreleased (ahead of v2026.618.0): #8347, #8339, #8276 | **CONFIRMED** | Each merged to `base:master` in-window and ahead of v2026.618.0 (`compare v2026.618.0...merge_sha` → status ahead, behind_by 0): #8347 `Add heartbeat preflight budget caps` (merged 2026-06-20, ahead_by 43) — body: "adds heartbeat preflight gates for daily run and daily cost caps … capped agents stop before new execution … the cap is checked again immediately before execution" (caps `maxDailyRuns`, `maxDailyCostCents`); #8339 `[codex] feat(watchdog): add task watchdog control plane` (merged 2026-06-19, ahead_by 32) — body: "Recovery/status-only runs must remain limited to status reporting and must not create approvals, link approvals, or submit approval comments" via a "scoped mutation guard"; #8276 `[codex] Harden same-company CEO authorization` (merged 2026-06-22, ahead_by 67) — body: "centralizes same-company CEO-or-board authorization … Added a shared `assertSameCompanyCeoAgentOrBoard` company route guard … a CEO agent from one company cannot read, mutate, archive, delete, export, or import against another company." | Accurate. All three new controls are master-unreleased (ahead of the latest stable tag) with verbatim receipts matching the described controls. |

---

## Cluster 3 — OpenClaw (`openclaw/openclaw`)

In-window stable tags: **v2026.6.8** (`prerelease:false`, published 2026-06-16T16:32:26Z)
and **v2026.6.9** (`prerelease:false`, published 2026-06-21T01:44:28Z). Beta tags in
window: v2026.6.8-beta.2, v2026.6.9-beta.1, v2026.6.10-beta.{1,2}. Prior stable before
window: v2026.6.6 (2026-06-12).

| Claim | Verdict | Deciding verbatim receipt | Framing |
|---|---|---|---|
| **F** — WCAG 2.1 AA accessibility pass (PR #89822: contrast ≥4.5:1, keyboard focus rings, 12px font floor) REACHED STABLE v2026.6.8, having been beta-only last window | **CONFIRMED** | PR #89822 title `fix(a11y): B-1+B-2+B-3 — contrast, focus states, minimum font sizes`, merged 2026-06-13, merge_sha `0849cac106d1...`. Body verbatim: contrast "All values verified ≥4.8:1 against both `--bg` and `--bg-elevated`" / "maintain safe buffer above 4.5:1"; focus "Updated global `:focus-visible` rule in `base.css`: now emits `outline: 2px solid var(--accent)` + `outline-offset: 2px`"; font floor "Lifted all sub-12px `font-size` values to `12px` minimum … (136 instances, 8–11px → 12px)". v2026.6.8 is STABLE (`prerelease:false`, 2026-06-16); release body lists "PR #89822 fix(a11y): B-1+B-2+B-3 …". Containment: `compare v2026.6.8...0849cac` → status behind, ahead_by 0, merge_base == 0849cac (ancestor). NOT in prior stable v2026.6.6 (`compare 0849cac...v2026.6.6` → diverged; body has zero mentions). Was beta-only last window: v2026.6.7-beta.1 body contains "89822". | Accurate. Carry-forward from beta to stable holds. Note: PR title is "B-1+B-2+B-3"; the contrast/focus/12px parenthetical correctly describes the three sub-tasks. |
| **G** — OpenClaw shipped AUTOMATIC plugin approvals for Codex this window — the one gate LOOSENED, against the consent-over-default grain | **CONFIRMED** | PR #92625 `feat(codex): add auto plugin approvals`, merged 2026-06-15, merge_sha `e82d19fb06b5...`. STABLE v2026.6.9 (`prerelease:false`, 2026-06-21) release note verbatim: "**A stronger Codex integration:** Codex gains automatic plugin approvals, GPT-5.3 Spark OAuth routing, remote-node `exec` as a dynamic tool … (#92625, …)" and "add automatic plugin approvals and SecretRefs … (#92625, …)". Containment: `compare v2026.6.9...e82d19f` → status behind, ahead_by 0, merge_base == e82d19f (ancestor of stable). NOT in v2026.6.8 (`compare v2026.6.8...e82d19f` → diverged; body zero mentions). | Accurate. Loosening confirmed from a STABLE note (not beta-only); landed in stable v2026.6.9, in-window. Tension framing grounded. |

---

## Bottom line

- **Gemini stranded-fix (A): holds.** The skill path-traversal security fix is diverged
  from stable v0.47.0 and present only in v0.48.0-preview.0 — a second consecutive stranded
  window. Meanwhile the Antigravity migration funnel (B: curl-pipe-to-bash `agy` install via
  built-in skill) and the cap-bypassed transition banner (C: shows every session for
  free/unpaid-tier) both shipped to stable. The channel-honesty contrast is real.
- **Paperclip carry-forward-landed (D) + new controls (E): both hold.** All five prior
  unreleased authority PRs are clean ancestors of stable v2026.618.0; the three sharpest
  new controls are master-unreleased ahead of it.
- **OpenClaw WCAG-to-stable (F): holds**, beta→stable carry-forward proven by ancestry into
  v2026.6.8. The loosening tension (G: automatic Codex plugin approvals) also holds, in
  stable v2026.6.9.

All seven claims CONFIRMED. No refutations.
