# Codex Harvest — 2026-06-16 to 2026-06-23

- provider: codex (OpenAI Codex)
- window: 2026-06-16 to 2026-06-23 inclusive
- surfaces harvested:
  - changelog: https://developers.openai.com/codex/changelog (canonical; mixed_official_docs, evidence_floor release_note)
  - GitHub releases: https://github.com/openai/codex/releases (rust-v0.14x tags)
  - GitHub PRs (merge-to-default dates verified via `merged_at`)
- release-channel ledger (this window):
  - **Stable / tagged-release**: `rust-v0.141.0` (published 2026-06-18T04:43:06Z), `rust-v0.142.0` (published 2026-06-22T22:19:53Z)
  - **preview-or-beta**: a long alpha train `rust-v0.141.0-alpha.*`, `rust-v0.142.0-alpha.*`, and `rust-v0.143.0-alpha.1/.2/.3` (latest 2026-06-23T03:16:03Z). `0.143.0` itself has **no stable tag** as of 2026-06-23 — anything only in 0.143 alphas is `preview-or-beta`, not shipped.
  - Prior window ended at `rust-v0.140.0` (2026-06-15, just before window) and app 26.609 / iOS 1.2026.153/160. No new web-changelog *app* version string past 26.609 appeared this window; the 2026-06-16 entry is a regional availability rollout, not a new app build.
- ancestry note: every PR cited below was verified merged before the `rust-v0.142.0` cut (2026-06-22T22:19:53Z), so each is `tagged-release` in 0.142.0 (or 0.141.0 where noted), not main-unreleased.

---

## Findings

### 2026-06-23-codex-eea-uk-swiss-feature-rollout
- date: 2026-06-16 (changelog entry date)
- version/tag: web changelog entry (no app build number); regional availability of features previously shipped at/around app 26.609
- change_type: capability / platform
- channel: tagged-release (product-live; rollout of already-GA surfaces to new regions)
- section: platform
- accessibility_impact: medium (computer use, Chrome extension, memories, Chronicle now reachable by EEA/UK/Switzerland users)
- security_impact: medium (computer use + signed-in Chrome context now operate in additional jurisdictions; memories are **off by default** in these regions)
- operator_implication: Operators in the EEA/UK/Switzerland now get desktop Computer Use (macOS/Windows), the signed-in-Chrome extension, opt-in Memories (default off here), and Chronicle screen-context preview — so regional non-availability is no longer a reason these authority surfaces are absent.
- candidate_signal: no — regional availability of prior-window features; no new capability or boundary. Material for carry-forward, not a standalone signal.
- confidence: high
- receipt (verbatim): "More Codex app capabilities are rolling out to users in the European Economic Area, the United Kingdom, and Switzerland: - Computer Use is available on macOS and Windows in these regions, so Codex can operate desktop apps by seeing, clicking, and typing. - The Codex Chrome extension is available for browser tasks that need signed-in Chrome context, working across tabs in the background without taking over your browser. - Memories can remember useful preferences, recurring workflows, tech stacks, and repository conventions when enabled. Memories are off by default in the European Economic Area, the United Kingdom, and Switzerland. - Chronicle is available as an opt-in research preview for ChatGPT Pro subscribers on macOS, helping Codex build memories from recent screen context."
- url: https://developers.openai.com/codex/changelog

---

### 2026-06-23-codex-environment-scoped-approvals
- date: command approvals merged 2026-06-17T17:52:44Z (#28738); network approvals merged 2026-06-19T11:49:46Z (#28899)
- version/tag: rust-v0.142.0
- change_type: security / governance
- channel: tagged-release (both PRs in 0.142.0)
- section: control-plane
- accessibility_impact: low (TUI/app-server approval prompts now show which environment is being approved)
- security_impact: high (closes an authority-leak class: an approval granted in one execution environment no longer silently authorizes the same command/host in another environment, e.g. local `/workspace` vs executor `/workspace`; ambiguous attribution **fails closed**)
- operator_implication: Approvals are now keyed to the execution environment, so a host or command approved locally does not auto-extend to a remote executor (and vice versa) — operators running mixed local+remote execution should re-test approval scope, as previously-reused approvals will now re-prompt per environment.
- candidate_signal: **yes** — action-bearing: this is a genuine narrowing of authority scope (the kind of "is my grant where I think it is" governance refinement the contract weights), it fails closed, and it changes how operators reason about approval reuse across local vs remote/executor runs.
- confidence: high
- receipt (verbatim, #28738): "Command approval cache keys included the command and working directory, but not the execution environment. An approval for `/workspace` locally could therefore be reused for the same command and path on an executor... Include the selected environment ID in shell and unified-exec approval cache keys... For example, `echo ok` in local `/workspace` and `echo ok` in executor `/workspace` now produce different approval keys and separate prompts."
- receipt (verbatim, #28899): "Network approvals are environment-scoped: allowing a host in one execution environment should not allow the same host in another environment... Include the environment in pending, approved-for-session, and denied-for-session network approval cache keys... Preserve legacy fallback for unattributed requests, but deny when active-call attribution is ambiguous... Fail closed if an environment-specific proxy endpoint cannot be prepared."
- url: https://github.com/openai/codex/pull/28738 ; https://github.com/openai/codex/pull/28899

---

### 2026-06-23-codex-rollout-token-budgets
- date: #28746 merged 2026-06-18T11:29:47Z; #28494 2026-06-18T18:52:20Z; #28707 (abort on expiry) 2026-06-19T09:00:02Z; #29423 (reminder thresholds) 2026-06-22T20:25:48Z
- version/tag: rust-v0.142.0
- change_type: runtime / economics / reliability
- channel: tagged-release
- section: runtime
- accessibility_impact: low
- security_impact: low (a containment/cost-governance lever, not an authority surface)
- operator_implication: Operators can now set a per-rollout token budget that tracks usage across agent threads, surfaces remaining-budget reminders, and **aborts turns when the budget is exhausted** — a hard runtime cap on long-horizon/multi-agent spend, with configurable reminder thresholds.
- candidate_signal: **yes** — action-bearing for anyone running long or fan-out work: this is a first-class spend/containment cap that aborts (not just warns), directly affecting how an operator bounds a multi-thread autonomous run.
- confidence: high
- receipt (verbatim, changelog/0.142.0 notes): "Configurable rollout token budgets track usage across agent threads, provide remaining-budget reminders, and abort turns when exhausted. (#28746, #28494, #28707, #29423)"
- url: https://github.com/openai/codex/releases/tag/rust-v0.142.0

---

### 2026-06-23-codex-multi-agent-delegation-modes
- date: per-turn #28685 merged 2026-06-19T05:47:52Z; thread-level #28792 2026-06-19T08:50:45Z; simplify controls #29324 2026-06-22T08:05:36Z
- version/tag: rust-v0.142.0
- change_type: capability / workflow / governance
- channel: tagged-release
- section: control-plane
- accessibility_impact: low
- security_impact: medium (controls whether the agent may spawn delegated sub-work autonomously vs only on explicit request)
- operator_implication: App-server clients can set multi-agent delegation to **disabled, explicit-request-only, or proactive** at both thread and turn granularity — operators can gate whether Codex spawns subagents on its own or only when asked.
- candidate_signal: yes (secondary) — action-bearing as a delegation-authority knob (the "does the agent get to recruit more agents" question), though it is an app-server client config rather than an end-operator CLI flag, which softens reach.
- confidence: high
- receipt (verbatim, 0.142.0 notes): "App-server clients can configure multi-agent delegation as disabled, explicit-request-only, or proactive at the thread and turn level. (#28685, #28792, #29324)"
- url: https://github.com/openai/codex/releases/tag/rust-v0.142.0

---

### 2026-06-23-codex-indexed-web-search-mode
- date: #28489 merged 2026-06-19T12:35:58Z; terminology #29095 2026-06-19T16:00:45Z
- version/tag: rust-v0.142.0
- change_type: capability / security
- channel: tagged-release
- section: runtime
- accessibility_impact: low
- security_impact: medium (a middle tier between cached-only and unrestricted live fetch: queries stay live but direct page fetches are limited to server-admitted URLs)
- operator_implication: A new `web_search = "indexed"` mode lets search queries run live while restricting direct page fetches to URLs admitted by the server — a fetch-surface containment option between `cached` and `live`, carried through managed configuration requirements.
- candidate_signal: yes (secondary) — action-bearing for operators who want live discovery without unrestricted egress; a concrete network-egress containment posture.
- confidence: high
- receipt (verbatim, #28489): "Indexed search provides a middle ground between cached-only search and unrestricted live page fetching. Search queries can remain live while direct page fetches are limited to URLs admitted by the server."
- url: https://github.com/openai/codex/pull/28489

---

### 2026-06-23-codex-guardian-prewarm-and-agent-identity
- date: guardian child at parent start #27982 merged 2026-06-22T18:54:45Z; agent-identity primitives #19047 2026-06-17T18:23:40Z; ChatGPT auth->agent identity #19049 2026-06-18T21:05:27Z
- version/tag: rust-v0.142.0 (#27982); #19047/#19049 also appear in 0.142.0 changelog list
- change_type: reliability / protocol (identity)
- channel: tagged-release
- section: control-plane
- accessibility_impact: none
- security_impact: low-to-medium (agent-identity / run-task-identity primitives + ChatGPT-auth-into-agent-identity are an accountability/attribution substrate; Guardian change is latency-only and explicitly not a new prewarm mechanism)
- operator_implication: Codex is laying down run-task and agent-identity primitives (incl. opting ChatGPT auth into agent identity) that make "which authenticated identity is this agent acting as" first-class; the Guardian review child is now started at parent-session init to cut first-review latency (no new privilege).
- candidate_signal: no (watch) — early plumbing, not yet operator-actionable; flag for next-window follow-up on how agent identity surfaces in receipts/attribution.
- confidence: medium (identity PRs are infrastructure; end-operator surface not yet documented)
- receipt (verbatim, #27982): "Creating the ordinary Guardian child during parent-session initialization lets that child use the existing session startup WebSocket prewarm before the first escalation. This does not introduce a Guardian-specific prewarm mechanism."
- url: https://github.com/openai/codex/pull/27982 ; https://github.com/openai/codex/pull/19047 ; https://github.com/openai/codex/pull/19049

---

### 2026-06-23-codex-remote-exec-noise-and-native-environments
- date: 0.141.0 (Noise relay #26242/#26245); native remote env paths/shells/AGENTS.md across 0.141.0 and 0.142.0 (#28146, #28958, #28983, #29099, #29108, #29113)
- version/tag: rust-v0.141.0 and rust-v0.142.0
- change_type: runtime / protocol / reliability
- channel: tagged-release
- section: runtime
- accessibility_impact: low
- security_impact: medium (remote executors now use authenticated, end-to-end encrypted Noise relay channels; sandbox intent and denials are carried into remote exec servers)
- operator_implication: Remote/cross-platform execution hardened — authenticated E2E-encrypted Noise transport for executors (0.141.0), plus executor-native cwd/shell/`AGENTS.md`/sandbox-intent preservation and semantic remote-sandbox denial reporting (0.142.0) — so remote runs behave like local for paths, shells, context discovery, and sandbox semantics.
- candidate_signal: no — important hardening but infrastructural; supports the environment-scoped-approvals signal rather than standing alone.
- confidence: high
- receipt (verbatim, 0.141.0 notes): "Remote executors now use authenticated, end-to-end encrypted Noise relay channels. (#26242, #26245)"
- receipt (verbatim, 0.142.0 notes): "Remote environments now preserve executor-native paths, shells, `AGENTS.md` discovery, and sandbox behavior across operating systems."
- url: https://github.com/openai/codex/releases/tag/rust-v0.141.0 ; https://github.com/openai/codex/releases/tag/rust-v0.142.0

---

### 2026-06-23-codex-plugin-catalog-and-usage-credits
- date: 0.142.0 (curated/workspace/shared sections #26703, recommend+install #28399/#28400/#27704/#28403; /usage reset-credit redemption #28154/#28793)
- version/tag: rust-v0.142.0
- change_type: ecosystem / economics / workflow
- channel: tagged-release
- section: platform
- accessibility_impact: medium (`/plugins` organizes remote plugins into OpenAI Curated / Workspace / Shared-with-me and can recommend+install relevant plugins; `/usage` can show and redeem earned usage-limit reset credits)
- security_impact: low (eligible turns can recommend and auto-install plugins — a mild supply-surface to note, but install remains user-gated and catalog is auth-gated #28625)
- operator_implication: Plugin distribution matures into a sectioned catalog with in-turn recommendations and one-step install, and `/usage` gains reset-credit redemption with confirm/retry states — extends the plugin-marketplace and usage-reporting threads already in the profile.
- candidate_signal: no — continuation/refinement of known plugin-sharing and usage surfaces; observe.
- confidence: high
- receipt (verbatim, 0.142.0 notes): "`/plugins` now organizes remote plugins into OpenAI Curated, Workspace, and Shared with me sections, while eligible turns can recommend and install relevant plugins." / "`/usage` can now show and redeem earned usage-limit reset credits, with confirmation, retry, and refreshed availability states."
- url: https://github.com/openai/codex/releases/tag/rust-v0.142.0

---

## Carry-forward check (STEP 5)

Prior window seeds: Developer-mode Chrome DevTools Protocol browser access (app 26.609) with an unspecified "controlled" boundary; computer use extended to EEA/UK/Switzerland (June 16); Chronicle (screen-context memory) preview; baselines app 26.609 / CLI 0.140.0 / iOS 1.2026.153.

- **CDP "controlled" scope clarification**: NOT clarified this window. The 2026-06-16 changelog and 0.141/0.142 release notes do not further specify the boundary of Developer-mode "controlled Chrome DevTools Protocol (CDP) access" from app 26.609. The 06-16 entry only restates the *Chrome extension* ("signed-in Chrome context, working across tabs in the background without taking over your browser") as a regional rollout — that is the extension surface, not the Developer-mode CDP boundary. Open question persists.
- **Further computer-use governance**: Computer Use (macOS/Windows) confirmed rolling out to EEA/UK/Switzerland on 2026-06-16; no new governance constraint or new locked-host/remote-computer-use change beyond the prior-window Mac-lock feature. No movement on the "narrow per-task/per-domain" open question.
- **Chronicle GA/changes**: NO GA. Restated as "opt-in research preview for ChatGPT Pro subscribers on macOS" in EEA/UK/Switzerland on 2026-06-16. Status unchanged (still preview); now regionally available. No new behavior.
- **New app/iOS/CLI versions past app 26.609 / CLI 0.140.0 / iOS 1.2026.153**:
  - CLI: yes — **0.141.0 (2026-06-18)** and **0.142.0 (2026-06-22)** stable; 0.143.0 only in alpha (preview-or-beta) as of 2026-06-23.
  - iOS: 1.2026.160 appears on the changelog dated **2026-06-15** (just before window; carries workspace file browsing, directory picker, diff expansion, MCP approval choices, LaTeX). No new in-window iOS build past that.
  - app: no new web-changelog app *build number* past 26.609 in-window; the 06-16 entry is regional availability, not a new build.

Carry-forward verdict: **Chronicle and CDP scope did not advance** (Chronicle still preview, just regionalized; CDP "controlled" boundary still unspecified). The window's real movement is on the CLI (0.141/0.142) governance/runtime substrate, not on the prior window's browser/computer-use frontier.

## Novelty vs profile

Profile (last_updated 2026-06-03) is current through CLI 0.136.0 / app launch 26.519 / iOS 1.2026.146 and centers on goal mode default-on, permission-profile inheritance, managed `requirements.toml`, plugin sharing, PreToolUse rewrite, bundled Linux sandbox, remote computer use after Mac lock.

NOT yet in the profile (novel this window):
- **Environment-scoped command + network approvals** (0.142.0) — a new authority-narrowing mechanism distinct from permission-profile inheritance; the profile's permissions story does not yet model per-execution-environment approval keys or fail-closed-on-ambiguity. (Strongest novelty.)
- **Rollout token budgets with turn abort on exhaustion** (0.142.0) — no spend-cap/containment claim exists in the profile.
- **Multi-agent delegation mode (disabled / explicit-request-only / proactive)** (0.142.0) — the profile covers subagents/MCP-spawn but not a delegation-authority gate.
- **Indexed web-search mode** (0.142.0) — new egress-containment tier; not in profile.
- **Authenticated E2E Noise relay for remote executors + native remote environments** (0.141.0/0.142.0) — remote-exec posture beyond the profile's `remote-exec-apikey-and-bedrock` (0.136.0) claim.
- **Agent-identity / run-task-identity primitives** (0.142.0) — early; flag for next window.
