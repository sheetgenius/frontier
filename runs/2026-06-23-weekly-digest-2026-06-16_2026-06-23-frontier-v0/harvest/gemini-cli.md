# Harvest: Gemini CLI

- provider: gemini-cli (Gemini CLI)
- owner: Google
- repo: google-gemini/gemini-cli
- window: 2026-06-16 to 2026-06-23 inclusive (merge-to-default date for commits/PRs; published_at for releases)
- harvested: 2026-06-23
- harvester: Opus 4.8 (max rigor)
- evidence_floor: commit_diff_reviewed

## Window snapshot

- In-window releases (published_at): **v0.47.0** stable (2026-06-18T01:51:23Z) and
  **v0.48.0-preview.0** (2026-06-17T22:58:09Z, prerelease). Prior stable was
  v0.46.0 (2026-06-10); prior preview v0.47.0-preview.0 (2026-06-10).
- In-window `main` commits: 13 total. Most are CI/release plumbing
  (npmrc registry, nightly fallbacks, dependency pinning, version bumps,
  changelog PRs). Only a handful carry operator-facing content, and **every**
  in-window `main` commit is `diverged`/`ahead` of the v0.47.0 stable tag
  (i.e. none reached stable this window — they sit in preview/main-unreleased).
- Net: the substantive operator-facing change this window lives in the two
  releases, and it is dominated by a single coherent story — Google's
  **Antigravity CLI migration push** reaching the stable channel — plus a
  carry-forward security result that remains preview-only.

Channel resolution method: ancestry via
`gh api repos/google-gemini/gemini-cli/compare/<tag>...<commit>` reading
`status`/`ahead_by`/`behind_by`. A commit that is an ancestor of a tag returns
`status: behind` (the tag is ahead of it); `diverged`/`ahead` means NOT in that
tag. Date is never used to infer channel.

---

## Findings

### 2026-06-23-gemini-antigravity-migration-to-stable
- date: 2026-06-18 (v0.47.0 published_at)
- tag/commit/PR: stable tag **v0.47.0**; PR #27765 / commit `452356027` ("Add
  documentation and migration commands for Antigravity CLI"); built-in skill
  `packages/core/src/skills/builtin/antigravity-support/SKILL.md`.
- change_type: ecosystem / philosophy / accessibility
- channel: **tagged-release (stable v0.47.0)**.
  Ancestry proof: `compare/v0.47.0...452356027` → `status: behind`,
  `ahead_by: 0, behind_by: 3` (v0.47.0 is 3 ahead of the commit ⇒ commit IS an
  ancestor of stable). Last window this was preview-only (v0.47.0-preview.0).
- section: ecosystem posture / migration
- accessibility_impact: Lowers the friction to LEAVE Gemini CLI. `/help install
  antigravity` (and `migrate`) now prints a platform-aware install command, and
  a built-in skill auto-fires whenever a user "asks questions, seeks help, or
  requests instructions related to installing, setting up, or migrating to
  Antigravity CLI." The skill hands the user a `curl ... | bash` (or PowerShell
  `irm ... | iex`) one-liner that installs the `agy` binary. Authority note: the
  steered install path is a pipe-to-shell of a remote script presented inside a
  trusted CLI surface — the tool is steering users toward an unverified remote
  installer of a *different* product.
- security_impact: The built-in skill content endorses
  `curl -fsSL https://antigravity.google/cli/install.sh | bash` /
  `irm https://antigravity.google/cli/install.ps1 | iex` as the install path.
  Sourced from Google's own docs, but it normalizes pipe-to-shell installs from
  inside the agent.
- operator_implication: Operators standardized on Gemini CLI for free/unpaid
  ("Google One and unpaid tier / Gemini Code Assist for individuals") tiers are
  now being actively routed toward Antigravity CLI from inside the tool itself.
  This is a product-deprecation signal at the config altitude (the free-tier
  Gemini CLI is being positioned as transitional) and a frontier-altitude
  signal (Google is consolidating its terminal-agent story under Antigravity).
- candidate_signal: **yes** — a vendor steering users off its own widely-adopted
  OSS CLI toward a successor product, shipped to STABLE, is an operator-posture
  change (what to standardize on, what to expect deprecated).
- confidence: high (stable tag + reviewed diff + skill file at ref v0.47.0).
- receipt (VERBATIM):
  - SKILL.md frontmatter: "Use when the user asks questions, seeks help, or
    requests instructions related to installing, setting up, or migrating to
    Antigravity CLI. This skill provides the latest up to date details,
    requirements, and commands sourced from the official Antigravity CLI
    documentation."
  - SKILL.md install: "curl -fsSL https://antigravity.google/cli/install.sh |
    bash ... automatically registers the `agy` binary in your PATH."
  - helpCommand.ts: "To install the Antigravity CLI on ${info.platformName},
    run the following command:\n\n'${info.installCmd}'"
  - URLs: https://github.com/google-gemini/gemini-cli/pull/27765 ;
    https://github.com/google-gemini/gemini-cli/releases/tag/v0.47.0

### 2026-06-23-gemini-antigravity-banner-uncapped-in-stable
- date: 2026-06-18 (v0.47.0 published_at)
- tag/commit/PR: stable tag **v0.47.0**; PR #27676 / commit `f40498db6`
  ("update the max amount of times the Antigravity transition banner can be
  displayed").
- change_type: philosophy / accessibility (UX intrusiveness)
- channel: **tagged-release (stable v0.47.0)**.
  Ancestry proof: `compare/v0.47.0...f40498db6` → `status: behind`,
  `ahead_by: 0, behind_by: 7` (commit IS an ancestor of stable).
- section: product posture / banner
- accessibility_impact: Negative — the transition nag is now unavoidable for
  the affected tier. Previously banners hid after `DEFAULT_MAX_BANNER_SHOWN_COUNT`
  (5) shows. The change adds an `|| activeText.includes('Antigravity')` clause
  so the Antigravity transition banner is exempt from the cap and shows
  **every session** for free/unpaid-tier users.
- security_impact: none.
- operator_implication: Reinforces the migration-push finding. Free/unpaid-tier
  operators will see the "Gemini CLI is transitioning to the new Antigravity
  CLI ..." banner on every session with no way to age it out. This is the
  carry-forward "uncapped every-session banner" concern ESCALATING: last window
  the every-session banner (`f40498db6` in v0.45.2) existed; this window the
  show-count cap that could have suppressed it has been deliberately bypassed
  by keyword match, in stable.
- candidate_signal: supporting evidence for the migration-push signal (not a
  standalone signal — it is the UX expression of the same posture).
- confidence: high (reviewed code diff).
- receipt (VERBATIM):
  - useBanner.ts diff: `const showBanner = activeText !== '' &&
    (currentBannerCount < DEFAULT_MAX_BANNER_SHOWN_COUNT ||
    activeText.includes('Antigravity'));`
  - PR body: "Allows CLI transition banner to be visible consistently for users
    that would see it rather than hiding it after 5 times. ... so that
    deprecation and reroute messages are not hidden from the user even after
    DEFAULT_MAX_BANNER_SHOWN_COUNT times."
  - URL: https://github.com/google-gemini/gemini-cli/pull/27676

### 2026-06-23-gemini-flash-3-5-auto-routing-flagged-in-stable
- date: 2026-06-18 (v0.47.0 published_at)
- tag/commit/PR: stable tag **v0.47.0**; PR #27645 / commit `e4315b36e`
  ("Respect backend definitions for 3.5 flash and Update auto mode to use 3.5
  flash when the flag is enabled").
- change_type: capability / runtime (model routing)
- channel: **tagged-release (stable v0.47.0)**.
  Ancestry proof: `compare/v0.47.0...e4315b36e` → `status: behind`,
  `ahead_by: 0, behind_by: 10` (commit IS an ancestor of stable).
- section: model routing / auto mode
- accessibility_impact: Neutral-to-positive when enabled — auto mode would route
  to Flash 3.5 for appropriate work without operator model selection.
- security_impact: none.
- operator_implication: The Flash 3.5 routing gate (carry-forward item) is
  **still flag-gated** in stable. This PR makes auto mode "use 3.5 flash when the
  flag is enabled" and respects backend model definitions — i.e. the gating is
  unchanged in posture (experiment flag + backend/auth-type definitions), not
  defaulted on. Touches routing strategies (classifier, approval-mode, numerical,
  gemma), `defaultModelConfigs`, `models.ts`, and `settings.schema.json`.
- candidate_signal: no — incremental, still behind a flag; no default change.
- confidence: high (reviewed file list + release-note line; flag-gated wording).
- receipt (VERBATIM): release note line — "Respect backend definitions for 3.5
  flash and Update auto mode to use 3.5 flash when the flag is enabled."
  URL: https://github.com/google-gemini/gemini-cli/pull/27645

### 2026-06-23-gemini-empty-resume-sessions-not-persisted
- date: 2026-06-18 (v0.47.0 published_at)
- tag/commit/PR: stable **v0.47.0**; PR #27770 ("Avoid persisting empty resume
  sessions").
- change_type: reliability (session hygiene)
- channel: **tagged-release (stable v0.47.0)** (listed in v0.47.0 changelog;
  prior-stable-to-tag compare is v0.46.0...v0.47.0).
- section: sessions / resume
- accessibility_impact: minor positive — fewer empty entries cluttering
  `/resume` and `--list-sessions`.
- security_impact: none.
- operator_implication: Refines the session-resume work the profile already
  tracks (`session-resume-reliability`). Empty sessions no longer pollute the
  resume list. Low standalone weight.
- candidate_signal: no.
- confidence: medium (release-note line; not diff-reviewed in depth).
- receipt (VERBATIM): "Avoid persisting empty resume sessions" —
  https://github.com/google-gemini/gemini-cli/pull/27770

### 2026-06-23-gemini-vertex-model-mapping-fix
- date: 2026-06-18 (v0.47.0 published_at)
- tag/commit/PR: stable **v0.47.0**; PR #27749 ("Vertex ai model mapping fix").
- change_type: reliability (enterprise auth/runtime)
- channel: **tagged-release (stable v0.47.0)** (v0.47.0 changelog).
- section: enterprise / Vertex routing
- accessibility_impact: none.
- security_impact: none.
- operator_implication: Vertex AI users get corrected model mapping; relevant to
  enterprise/Vertex-routed deployments. Low standalone weight without the diff.
- candidate_signal: no.
- confidence: medium (release-note line only).
- receipt (VERBATIM): "Vertex ai model mapping fix" —
  https://github.com/google-gemini/gemini-cli/pull/27749

### 2026-06-23-gemini-gdc-airgapped-service-identity (preview/main-unreleased)
- date: 2026-06-16 (merged)
- tag/commit/PR: PR #27956 / commit `fbce3e51b` ("feat(core): Support GDC
  air-gapped Service Identity after auth library update").
- change_type: capability / runtime (enterprise auth)
- channel: **preview-or-beta / main-unreleased** — NOT in stable v0.47.0.
  Ancestry proof: `compare/v0.47.0...fbce3e51b` → `status: diverged`,
  `ahead_by: 10, behind_by: 2` (commit is NOT an ancestor of v0.47.0). It IS in
  v0.48.0-preview.0 (listed in that changelog). So: shipped to preview only.
- section: enterprise / air-gapped auth
- accessibility_impact: Positive for air-gapped / Google Distributed Cloud
  operators — Service Identity auth now works in air-gapped GDC after the auth
  library update.
- security_impact: auth-path change; enterprise-scoped.
- operator_implication: Air-gapped GDC operators get a new auth path, but ONLY
  on the preview channel as of 2026-06-23. Do not assume stable availability.
- candidate_signal: no (niche, preview-only, no diff-level review).
- confidence: medium-high (ancestry proven; feature scope from PR title +
  preview changelog).
- receipt (VERBATIM): "feat(core): Support GDC air-gapped Service Identity after
  auth library update" — https://github.com/google-gemini/gemini-cli/pull/27956

### 2026-06-23-gemini-coretools-setting-deprecated (preview/main-unreleased)
- date: 2026-06-16 (merged)
- tag/commit/PR: PR #27947 / commit `926f3d9b9` ("fix(config): migrate coreTools
  setting to tools.core").
- change_type: workflow / protocol (config-schema deprecation)
- channel: **main-unreleased** — `compare/v0.47.0...926f3d9b9` → `diverged`
  (not in stable). Present in v0.48.0-preview.0 changelog.
- section: configuration schema
- accessibility_impact: neutral; consistency cleanup.
- security_impact: none.
- operator_implication: The `coreTools` array setting is being migrated to the
  nested `tools: { core: [] }` schema; residual A2A-server and GitHub-Actions
  configs were updated to avoid schema-validation errors. Operators with
  `coreTools` in settings should plan the rename. Not yet in stable.
- candidate_signal: no (config rename; watch for the deprecation to reach stable).
- confidence: high (PR body + ancestry).
- receipt (VERBATIM): "Migrates the `coreTools` array setting to the nested
  `tools: { core: [] }` schema format ... transitioned from the deprecated
  `coreTools` property to the new `tools.core` nested structure." —
  https://github.com/google-gemini/gemini-cli/pull/27947

### 2026-06-23-gemini-eval-tooling (preview/main-unreleased) — low weight
- date: 2026-06-16 / 2026-06-19
- tag/commit/PR: PR #27631 "Add static eval source analyzer" (`97455e5d4`);
  PR #28009 "feat: add eval:inventory CLI command and reporting logic"
  (`c22137ea0`).
- change_type: evaluation (internal tooling)
- channel: **main-unreleased** — both `diverged` vs v0.47.0.
- operator_implication: Internal-facing eval/inventory tooling; little direct
  operator consequence. Noted for completeness.
- candidate_signal: no.
- confidence: high (titles + ancestry).
- receipt: https://github.com/google-gemini/gemini-cli/pull/27631 ;
  https://github.com/google-gemini/gemini-cli/pull/28009

---

## Carry-forward subsection

1. **Skill install/link/uninstall path-traversal fix (commit `bca5667fc` /
   PR #27767).** Last window it was *ahead of every tag* (stable, preview,
   nightly). **Verdict: STILL NOT IN ANY STABLE TAG as of 2026-06-23.** It has
   reached the **preview** channel this window (v0.48.0-preview.0).
   - Proof vs stable: `compare/v0.47.0...bca5667fc` → `status: diverged`,
     `ahead_by: 7, behind_by: 2` ⇒ the fix is NOT an ancestor of v0.47.0 stable.
   - Proof vs preview: `compare/v0.48.0-preview.0...bca5667fc` → `status: behind`,
     `behind_by: 9` ⇒ the fix IS an ancestor of v0.48.0-preview.0.
   - It is listed in the v0.48.0-preview.0 changelog as "fix(cli): prevent path
     traversal vulnerabilities during skill install..." (PR #27767).
   - **Operator consequence:** a path-traversal fix in the skill install/link
     path has now been preview-only for two consecutive windows while stable
     (v0.46.0, v0.47.0) shipped without it. Operators on stable installing
     third-party skills remain exposed to the unfixed path; the fix is reachable
     only on preview/nightly.
   - URL: https://github.com/google-gemini/gemini-cli/pull/27767

2. **Antigravity migration commands + built-in skill (commit `452356027`).**
   Last window: v0.47.0-preview.0 only. **Verdict: REACHED STABLE v0.47.0.**
   - Proof: `compare/v0.47.0...452356027` → `status: behind`, `behind_by: 3`
     ⇒ ancestor of stable. (See finding
     `2026-06-23-gemini-antigravity-migration-to-stable`.)

3. **Uncapped every-session "Antigravity is coming to town" banner (commit
   `f40498db6`, was in stable v0.45.2).** **Verdict: ESCALATED in stable
   v0.47.0.** A new clause (`|| activeText.includes('Antigravity')`) exempts the
   transition banner from the `DEFAULT_MAX_BANNER_SHOWN_COUNT` (5) cap, so it
   shows every session for free/unpaid-tier users with no aging-out. (See
   finding `2026-06-23-gemini-antigravity-banner-uncapped-in-stable`.)
   - Proof: `compare/v0.47.0...f40498db6` → `status: behind`, `behind_by: 7`.

4. **Flash 3.5 GA routing (v0.46.0, behind experiment flag + auth-type logic).**
   **Verdict: gating UNCHANGED — still flag-gated in stable v0.47.0.** PR #27645
   updates auto mode to "use 3.5 flash when the flag is enabled" and respects
   backend model definitions; no default-on change. (See finding
   `2026-06-23-gemini-flash-3-5-auto-routing-flagged-in-stable`.)
   - Proof: `compare/v0.47.0...e4315b36e` → `status: behind`, `behind_by: 10`.

---

## Novelty vs profile

The profile (last_updated 2026-06-03, through v0.45.0) tracks reviewable memory,
workspace trust, subagent/session protocols, Auto-mode consolidation, and the
PolicyEngine-in-ACP work. **Novel this window relative to the profile:** (a) the
**Antigravity migration push reaching stable** (migration commands, built-in
steering skill, uncapped transition banner) — a product-deprecation/consolidation
posture the profile does not yet record; (b) the **two-window-old skill
path-traversal security fix still being preview-only** while two stable releases
shipped without it — directly relevant to the profile's trust-in-agent-execution
posture and the "stable-channel arrival of preview-only changes" watch item;
(c) the **`coreTools` -> `tools.core` config-schema deprecation** (preview/main,
not stable). The profile's open question on long-horizon primitives, remote
subagent runtime target, and PolicyEngine default posture saw **no resolving
change** this window. No change to memory, trust-enforcement, or subagent
protocols this window.
