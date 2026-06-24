---
provider: pi-coding-agent
window: 2026-06-16..2026-06-23
run_dir: runs/2026-06-23-weekly-digest-2026-06-16_2026-06-23-frontier-v0
repo: earendil-works/pi
canonical_repo_confirmed: true
boundary_note: >
  v0.79.5 (published 2026-06-16T17:56:13Z) is treated as prior-window boundary
  per harvest instruction ("tags past v0.79.5"). Its contents (provider-scoped
  API-key envs, global httpProxy, Vercel AI Gateway attribution, marked 18.0.5,
  device-code login no-browser, GLM-5.2 Z.AI effort mapping) are EXCLUDED here as
  already harvested last window. In-window releases: v0.79.6 .. v0.79.10.
harvested_by: opus-4.8-harvester
harvested_at: 2026-06-23
---

# Pi Coding Agent — Harvest 2026-06-16..2026-06-23

In-window tagged releases (ISO published_at verified, all `prerelease:false`):

- v0.79.6 — 2026-06-16T22:00:56Z
- v0.79.7 — 2026-06-18T16:23:49Z
- v0.79.8 — 2026-06-19T07:55:20Z
- v0.79.9 — 2026-06-20T20:17:09Z
- v0.79.10 — 2026-06-22T09:16:23Z

Channel resolution by ancestry: all findings below sit on tags reachable from
`main` and shipped in a tagged release within the window → **tagged-release**.
No `main`-unreleased-only or preview/beta surfaces carried material change this
window (post-v0.79.10 main commits are model-catalog/test/docs churn on a
`model-registry` merge that did not produce an in-window tag).

---

## Findings

### 2026-06-23-pi-extension-compaction-event-context
- date: 2026-06-22 (v0.79.10)
- tag/commit/PR: v0.79.10 / commit 5b9b70d29 / PR #5962 (by @PizzaMarinara/Enrico)
- change_type: protocol / capability
- channel: tagged-release
- section: extensions / compaction / RPC
- accessibility_impact: Low. Affects extension authors, not end-operators directly.
- security_impact: None.
- operator_implication: Extension `session_before_compact` and `session_compact`
  events now carry `reason` and `willRetry`, letting an extension distinguish
  manual `/compact`, threshold auto-compaction, and overflow-retry flows. For an
  operator-owned governance layer this is a cleaner hook to record WHY context
  was reshaped — directly relevant to Bitter's "capture harness receipts"
  posture (compaction is a context-shaping event worth a receipt).
- candidate_signal: yes — strongest extension-contract movement this window;
  ties to the standing profile claim that Pi exposes context-shaping inputs but
  leaves recording to the operator. Now the compaction event is self-describing.
- confidence: high
- receipt: "Extension `session_before_compact` and `session_compact` events now
  include `reason` and `willRetry`, so extensions can distinguish manual
  `/compact`, threshold auto-compaction, and overflow retry flows."
  URL: https://github.com/earendil-works/pi/releases/tag/v0.79.10

### 2026-06-23-pi-post-compaction-token-estimates
- date: 2026-06-19 (v0.79.8)
- tag/commit/PR: v0.79.8 / commit c60f6a8ab / issue #5877
- change_type: protocol / capability
- channel: tagged-release
- section: RPC / compaction
- accessibility_impact: Low-medium. Clients/UIs embedding Pi can now show
  approximate context reduction after compaction.
- security_impact: None.
- operator_implication: Compact results and compaction events now include
  estimated post-compaction token counts. Pairs with the v0.79.10 reason/willRetry
  change to make compaction fully inspectable from the RPC surface — an embedder
  can both know why compaction fired and how much context it removed.
- candidate_signal: no (component of the compaction-observability cluster; the
  v0.79.10 event-context finding is the better signal carrier).
- confidence: high
- receipt: "Compact results and compaction events now include estimated
  post-compaction token counts so clients can show the approximate context
  reduction." URL: https://github.com/earendil-works/pi/releases/tag/v0.79.8

### 2026-06-23-pi-selective-provider-base-entrypoints
- date: 2026-06-19 (v0.79.8)
- tag/commit/PR: v0.79.8 / commit 0d89a3337 / PR #5348 (by @FredKSchott)
- change_type: capability / ecosystem
- channel: tagged-release
- section: SDK / packages
- accessibility_impact: Medium for SDK embedders. `@earendil-works/pi-ai/base`
  and `@earendil-works/pi-agent-core/base` entry points allow explicit provider
  registration so bundled apps exclude unused provider transports.
- security_impact: Low-positive (smaller attack/transport surface in bundles).
- operator_implication: Directly relevant to Bitter's documented use_for
  ("embedding agent functionality in custom UIs … eval-restricted runtimes").
  Tree-shakeable provider registration reduces bundle size and removes unused
  provider network code paths — a real win for Cloudflare-Workers-style embeds.
- candidate_signal: yes — advances the harness-as-embeddable-SDK thesis that the
  profile already tracks; concrete improvement to the embed contract.
- confidence: high
- receipt: "SDK users can pair `@earendil-works/pi-ai/base` and
  `@earendil-works/pi-agent-core/base` with explicit provider registration to
  keep bundled applications from including unused provider transports."
  URL: https://github.com/earendil-works/pi/releases/tag/v0.79.8

### 2026-06-23-pi-extension-api-config-and-editdiff-exports
- date: 2026-06-18 (v0.79.7)
- tag/commit/PR: v0.79.7 / commits 008c76f95 (#5869), 2b46f3886 (#5756) / both by @xl0
- change_type: capability
- channel: tagged-release
- section: extensions / SDK exports
- accessibility_impact: Low (extension-author facing).
- security_impact: None.
- operator_implication: Two public-API exports: `CONFIG_DIR_NAME` (resolve
  project config path without hardcoding `.pi`) and edit-diff helpers
  (`generateDiffString`, `generateUnifiedPatch`, `EditDiffResult`). Lets an
  operator-owned extension locate Pi's per-project config dir and render
  edit-style diffs identically to core — useful for governance/audit tooling
  that wants to show the same diff the operator sees.
- candidate_signal: no (incremental SDK surface widening; consistent with
  existing posture, not a new claim).
- confidence: high
- receipt: "extensions can use `CONFIG_DIR_NAME` for project config paths and
  import edit diff helpers for edit-style diffs."
  URL: https://github.com/earendil-works/pi/releases/tag/v0.79.7

### 2026-06-23-pi-self-only-update-default
- date: 2026-06-18 (v0.79.7), hardened in v0.79.10 (2026-06-22)
- tag/commit/PR: v0.79.7 / commit aae62dfa8 ; v0.79.10 / commit bc0db6435, d93b92bac
- change_type: workflow / reliability
- channel: tagged-release
- section: packages / update flow
- accessibility_impact: Medium. Bare `pi update` now updates pi ONLY; use
  `pi update --all` to update pi + packages. v0.79.10 makes update install the
  exact checked version (no unversioned-reinstall fallback) and shows the
  changelog URL in update notices.
- security_impact: Low-positive. Pinning the exact checked version and refusing
  unversioned fallback reduces the chance of installing an unexpected build
  during self-update.
- operator_implication: Behavior change for anyone scripting `pi update` in CI
  or onboarding — extensions/packages no longer bump on a bare update. Note this
  for the migration/pinning guidance already in the profile.
- candidate_signal: no (operational hygiene; worth a profile note, not a signal).
- confidence: high
- receipt: "Changed bare `pi update` to update only pi, added `pi update --all`
  for updating pi and extensions together" (v0.79.7); "`pi update` installs the
  exact checked Pi version, and update notices show the changelog URL" (v0.79.10).
  URLs: https://github.com/earendil-works/pi/releases/tag/v0.79.7 ,
  https://github.com/earendil-works/pi/releases/tag/v0.79.10

### 2026-06-23-pi-vulnerable-dependency-update
- date: 2026-06-19 (v0.79.8)
- tag/commit/PR: v0.79.8 / commit ea65a51a1
- change_type: security / reliability
- channel: tagged-release
- section: dependencies
- accessibility_impact: None.
- security_impact: Medium. Updated vulnerable runtime dependencies including
  `undici` and the packaged `protobufjs` transitive dependency. (Distinct from
  last window's HTML-export XSS / marked upgrade — that marked 18.0.5 bump landed
  in v0.79.5, prior-window boundary.)
- operator_implication: Routine but real CVE-class maintenance. Operators pinning
  Pi should move past v0.79.8 to pick up the undici/protobufjs fixes.
- candidate_signal: no (maintenance; no method/CVE-ID disclosed, but it satisfies
  the carry-forward "any security fixes" watch).
- confidence: high
- receipt: "Updated vulnerable runtime dependencies, including `undici` and the
  packaged `protobufjs` transitive dependency."
  URL: https://github.com/earendil-works/pi/releases/tag/v0.79.8

### 2026-06-23-pi-mistral-prompt-caching
- date: 2026-06-19 (v0.79.8)
- tag/commit/PR: v0.79.8 / commit 651d10d90 / issue #5854
- change_type: economics / capability
- channel: tagged-release
- section: providers / usage accounting
- accessibility_impact: Low.
- security_impact: None.
- operator_implication: Mistral sessions now use provider-side prompt caching
  keyed on the pi session ID (`prompt_cache_key`), with cached-token usage AND
  cost accounting. This is a billing-accuracy/economics improvement — cached
  tokens are tracked in cost. Satisfies the carry-forward "billing/pricing
  accuracy" watch.
- candidate_signal: no (provider-specific; consistent with prior cached-token
  accounting work).
- confidence: high
- receipt: "Mistral sessions now use provider-side prompt caching with session
  affinity and cached-token usage/cost accounting."
  URL: https://github.com/earendil-works/pi/releases/tag/v0.79.8

### 2026-06-23-pi-session-path-traversal-linear
- date: 2026-06-20 (v0.79.9)
- tag/commit/PR: v0.79.9 / commit a1da88aed / refs #5804, #5909
- change_type: reliability / runtime
- channel: tagged-release
- section: sessions / session tree
- accessibility_impact: Low-medium for heavy session-tree users.
- security_impact: Low-positive (mitigates a pathological-input slowdown /
  potential local DoS on deep branches).
- operator_implication: Deep session branches no longer take quadratic time to
  build context or branch paths. Receipt: on a 600k-entry pathological session,
  path construction dropped from ~20.3s (Array.unshift) to ~35ms (push+reverse).
  Matters for operators who lean on Pi's branch/tree session model at scale —
  directly touches the profile's "session tree / branch" high-signal area.
- candidate_signal: no (perf fix, but notable enough to cite if the digest
  discusses session-tree durability).
- confidence: high
- receipt: "Fixed deep session branches taking quadratic time to build context or
  branch paths." (release) / "On a 600k-entry pathological session, path
  construction improved from about 20.3s with Array.unshift() to about 35ms with
  push() plus reverse()." (commit a1da88aed)
  URL: https://github.com/earendil-works/pi/releases/tag/v0.79.9

### 2026-06-23-pi-chat-template-thinking-compat
- date: 2026-06-20 (v0.79.9)
- tag/commit/PR: v0.79.9 / commit 8b97e75c6 / issue #5673
- change_type: capability / protocol
- channel: tagged-release
- section: custom providers / models
- accessibility_impact: Medium for self-host/open-model operators.
- security_impact: None.
- operator_implication: OpenAI-compatible custom providers can map Pi thinking
  levels into `chat_template_kwargs`, enabling vLLM/Hugging Face chat-template
  models (e.g. DeepSeek behind vLLM) to use provider-native thinking controls.
  Widens Pi's "bring-your-own-endpoint" reach for self-hosted reasoning models.
- candidate_signal: no (provider-reach extension; reinforces the "volatile,
  bring-your-own provider" posture already in the profile).
- confidence: high
- receipt: "OpenAI-compatible custom providers can map Pi thinking levels into
  `chat_template_kwargs`, enabling vLLM/Hugging Face chat-template models such as
  DeepSeek to use provider-native thinking controls."
  URL: https://github.com/earendil-works/pi/releases/tag/v0.79.9

### 2026-06-23-pi-automatic-theme-mode
- date: 2026-06-18 (v0.79.7)
- tag/commit/PR: v0.79.7 / commit d0b46764b / PR #5874 (by @mitsuhiko)
- change_type: accessibility / workflow
- channel: tagged-release
- section: themes / TUI
- accessibility_impact: Medium-positive. `/settings` can set separate light and
  dark themes and follow terminal color-scheme changes automatically; `/` is now
  reserved in theme names for this. Plus Warp inline image rendering via Kitty
  graphics detection (#5841).
- security_impact: None.
- operator_implication: Genuine accessibility/ergonomics win for terminal users
  who switch light/dark — Pi now follows the terminal. Minor, but it is the
  clearest accessibility-flavored change this window.
- candidate_signal: no (UX polish).
- confidence: high
- receipt: "`/settings` can choose separate light and dark themes and follow
  terminal color-scheme changes."
  URL: https://github.com/earendil-works/pi/releases/tag/v0.79.7

### 2026-06-23-pi-model-catalog-and-routing-churn
- date: 2026-06-16..2026-06-22 (v0.79.6, v0.79.9, post-v0.79.10 main)
- tag/commit/PR: v0.79.6 (DeepSeek V4 thinking-off, fetch-override preserve),
  v0.79.9 (Fireworks GLM-5.2 Chat-Completions routing #5923, OpenRouter GLM-5.2
  `xhigh` #5770, Copilot model account-availability filter #5897, model selector
  ranking #5892/#5905); commits incl. 71ca9b2b9, 8597ebafd, 500b568b0, 6e6ce70ca.
- change_type: capability / runtime
- channel: tagged-release (plus post-window main churn, NOT yet tagged in window)
- section: providers / models
- accessibility_impact: Low-medium (better /model behavior, accurate effort tiers).
- security_impact: None.
- operator_implication: Continued deliberate provider/model-catalog volatility —
  GLM-5.2 effort tiers (`xhigh`), Copilot availability filtering, OpenRouter
  Fusion alias (#5866), DeepSeek thinking controls. Reinforces the profile's
  standing "treat the provider list as what Pi tests against today" claim. No
  single item rises to signal.
- candidate_signal: no (expected churn; bundled as one finding to avoid padding).
- confidence: high
- receipt: "GLM-5.2 now has corrected Fireworks OpenAI-compatible routing and
  OpenRouter `xhigh` thinking support" (v0.79.9); "`openrouter/fusion` is
  available as a built-in OpenRouter model alias" (v0.79.8).
  URLs: https://github.com/earendil-works/pi/releases/tag/v0.79.9 ,
  https://github.com/earendil-works/pi/releases/tag/v0.79.8

---

## Carry-Forward Check (vs last window v0.78.1..v0.79.5)

Last window watch items and this window's verdict:

- **Further project-trust hardening** — NO new trust-system feature shipped.
  Only documentation: v0.79.10 fixed the usage docs slash-command table to
  include `/trust` and `/import` (#5959). The project-trust system (v0.79.0) is
  stable; no gating/hardening changes in-window. Receipt: "Fixed the usage docs
  slash command table to include `/trust` and `/import`."
  (https://github.com/earendil-works/pi/releases/tag/v0.79.10)
- **New model support** — YES, ongoing: OpenRouter Fusion alias (v0.79.8),
  GLM-5.2 effort/routing fixes (v0.79.9), chat-template thinking for vLLM/HF
  custom providers (v0.79.9), Copilot account-availability filtering (v0.79.9).
  Bundled in `2026-06-23-pi-model-catalog-and-routing-churn` + the chat-template
  finding. No new first-party model family — continued catalog volatility.
- **Billing/pricing accuracy fixes** — YES: Mistral prompt caching with
  cached-token usage AND cost accounting (v0.79.8,
  `2026-06-23-pi-mistral-prompt-caching`). Consistent with last window's two
  billing-accuracy fixes; the pattern of correcting cost accounting continues.
- **Security fixes** — YES: vulnerable runtime dependency update incl. undici +
  protobufjs (v0.79.8, `2026-06-23-pi-vulnerable-dependency-update`). NOTE: last
  window's HTML-export XSS fix corresponded to the marked 18.0.5 bump, which
  landed in v0.79.5 (prior-window boundary) — NOT repeated in-window. The
  session-path-traversal linear fix (v0.79.9) is a secondary low-positive
  hardening (pathological-input slowdown).

Carry-forward verdict: **partially confirmed continuation, no escalation.**
Trust system static; model + billing + security maintenance all continue at the
expected cadence. No departure from the "no governance in core" posture — and no
new governance surface (no plan mode / approval popups / MCP) shipped. The
plan-mode references this window are to an *extension example* (#5940, #5957),
not a core feature, consistent with Pi's delegation posture.

## Novelty vs Profile

Profile last_updated 2026-06-03; last_full_review 2026-06-03. NOVEL this window
and not yet in the profile's `claims:` block:
(1) extension compaction events now self-describe (`reason`/`willRetry`) +
post-compaction token estimates — a new, concrete compaction-observability
contract; (2) selective provider base entry points (`/base`) for tree-shakeable
embeds — strengthens the embed/SDK use_for claim with a named mechanism;
(3) `CONFIG_DIR_NAME` + edit-diff helper exports; (4) Mistral prompt-cache cost
accounting; (5) session-path-traversal linearization (session-tree durability).
The profile's open question about "harness SDK becoming a separate distributable"
is partially answered: the `/base` entry points are a step toward leaner,
explicitly-composed SDK consumption, though still within the same packages.
No new entries needed for governance posture — it is unchanged (a stability
confirmation, not a novelty).
