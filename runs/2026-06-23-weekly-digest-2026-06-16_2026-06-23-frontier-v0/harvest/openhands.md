---
schema_version: bitter.frontier_harvest.v0
provider: openhands
label: OpenHands
repo: OpenHands/OpenHands
repo_canonical_confirmed: true   # fork:false, parent:null, full_name=OpenHands/OpenHands (NOT All-Hands-AI/OpenHands)
window_start: 2026-06-16
window_end: 2026-06-23
run_dir: runs/2026-06-23-weekly-digest-2026-06-16_2026-06-23-frontier-v0
harvested_by: opus-4-8-harvester
harvest_date: 2026-06-23
surface_class: mixed_official_docs
evidence_floor: release_note
channel_summary:
  tagged_release: 0          # no in-window GitHub release; latest is 1.8.0 @ 2026-06-10 (pre-window). No 1.9.0.
  cloud_tag_in_window: 0     # latest cloud tag cloud-1.38.0 @ 2026-06-09 (pre-window)
  main_unreleased: 16        # findings below; all merged 06-16..06-23, none in any tag
  preview_or_beta: 0
universe:
  in_window_commits_on_main: 42   # all map to a merged PR (#NNNN suffix); 1 PR-less docs commit 904e0f45f (trivial)
  in_window_merged_prs: 43        # majority are tests/chores/deps; 16 surfaced as findings
total_findings: 16
candidate_signals: 3
---

# OpenHands Harvest — 2026-06-16 .. 2026-06-23

## Channel Posture (read first)

There is **no tagged release in window**. The only mainline GitHub Release is
`1.8.0`, commit `bc26df351dd5d833a95131556dbe2da69af82253`, published
`2026-06-10T16:58:51Z` / commit-dated `2026-06-10T15:20:31Z` — BEFORE the
window. No `1.9.0` exists. The latest `cloud-*` tag is `cloud-1.38.0`,
commit-dated `2026-06-09T21:38:56Z` — also pre-window.

Therefore **every finding in this harvest is `main-unreleased`**: merged to
`main` 2026-06-16..06-23, contained in no tag. Ancestry proof per finding is
the merge-commit SHA + the fact that `<commit>...1.8.0` returns
`status=diverged, behind_by>0` (1.8.0 lacks the commit) while `<commit>...main`
returns `status=ahead` (the commit is on main). HEAD of main at harvest:
`52b6094d53293d0511e0d0c577913e7d1c37e1a5`.

Operators on the release channel (1.8.0) see NONE of the below — including the
last-window enterprise/security cluster, which is STILL unreleased (see
carry-forward).

All 42 in-window `main` commits carry a `(#NNNN)` PR suffix; the harvest is
fully PR-backed. The one PR-less commit (`904e0f45f docs: revise source code
links in README.md`) is trivial. Note: commits co-author `openhands@all-hands.dev`
— the canonical `OpenHands/OpenHands` org still uses `all-hands.dev` internal
emails; this is expected, not the wrong repo.

---

## CARRY-FORWARD CHECK (high value)

Last window these six sat on `main` past 1.8.0. **Verdict: all six are STILL
main-unreleased as of 2026-06-23 — none entered any tag.** The only tag (1.8.0,
06-10) predates every one of their merges (06-10..06-15). One was REVERTED
in-window.

| PR | item | merged_at (ISO) | on main? | in 1.8.0? | status |
|----|------|-----------------|----------|-----------|--------|
| #14752 | default-org bootstrap, first-signer-owns-it | 2026-06-10T22:52:03Z | yes | no (1.8.0 behind_by=9) | still main-unreleased |
| #14773 | BYOK gating `allow_user_llm_configuration` | 2026-06-14T19:36:52Z | yes | no (behind_by=33) | still main-unreleased |
| #14168 | per-org/per-user concurrency limits + HTTP 429 | 2026-06-15T15:16:01Z | reverted | no (behind_by=38) | **REVERTED in-window by #14877** |
| #14795 | PluginSpec.source git-token redaction at rest | 2026-06-13T09:16:46Z | yes | no (behind_by=31) | still main-unreleased |
| #14770 | postcss XSS CVE-2026-41305 (GHSA-qx2v-qp2m-jg93) | 2026-06-12T14:28:54Z | yes | no (behind_by=18) | still main-unreleased |
| #14741 | `hide_personal_workspaces` | 2026-06-10T19:42:09Z | yes | no (behind_by=7) | still main-unreleased; **CONFIRMED UI-only** |

Ancestry proof for each: `<merge_commit>...1.8.0` returns `status=diverged,
behind_by=N>0` (commit not an ancestor of the tag); `<merge_commit>...main`
returns `status=ahead` (on main).

### #14877 — revert of concurrency-limit enforcement (#14168) [IN-WINDOW]
- merge commit `dd40cb1b36b020d0ed86ea51b0f5050ca6fbf37f`, merged
  `2026-06-17T19:15:34Z`. Ancestry: `...main`=ahead, `...1.8.0`=diverged
  behind_by=69 → on main, not in 1.8.0.
- VERBATIM: *"PR #14168 added DB-backed per-org/per-user max concurrent
  sandbox/conversation limits. This reverts that feature while preserving
  sandbox-service-level cleanup behavior from the earlier sandbox concurrency
  work. ... Add migration `124_remove_max_concurrent_sandboxes.py` to drop the
  columns introduced by migration 120."*
  https://github.com/OpenHands/OpenHands/pull/14877
- Carry-forward consequence: the per-org/per-user concurrency-limit feature is
  GONE from main, never tagged. The replacement count source is now the runtime
  `/list` API (see finding 2026-06-23-openhands-sandbox-concurrency-list-count,
  #14834) rather than a DB flag. Operators who anticipated 429-based concurrency
  quotas in the next 1.x should NOT plan on them.

### #14741 — hide_personal_workspaces enforcement question [RESOLVED]
- VERBATIM (PR body): *"UI-level by design; flag off restores previous
  behavior. ... Personal workspaces are filtered from the org list/selector ...
  While the flag is on, the default-org bootstrap moves members parked on their
  personal org into the default org on every login — with personal workspaces
  hidden there is no visible way to be there."*
  https://github.com/OpenHands/OpenHands/pull/14741
- Verdict: **STILL UI-only / NOT an access-control boundary.** The diff filters
  the selector and nudges members into the default org on login; it does not add
  a server-side access boundary on personal workspaces. No in-window follow-up
  added server-side enforcement (search for `hide_personal_workspaces` PRs
  merged in-window: none). The open question from the profile stands resolved as
  "no enforcement boundary added."

---

## FINDINGS (all channel = main-unreleased)

### CANDIDATE SIGNALS (3)

---

id: 2026-06-23-openhands-apikey-keycloak-decouple
date: 2026-06-17T14:28:50Z (merged_at)
tag/commit/PR: PR #14867; merge commit `9f03703cd`
change_type: security / protocol (identity plane)
channel: main-unreleased — `9f03703cd...main`=ahead, `...1.8.0`=diverged behind_by>0
section: enterprise auth / machine identity
accessibility_impact: API keys (`sk-oh-…`) and webhooks/automation crons keep
  working when a user's Keycloak offline session is missing/expired/revoked —
  removes a class of opaque 401 lockouts for headless clients.
security_impact: **Material change to the auth trust model.** Bearer-key
  validity is decoupled from Keycloak offline-session lifecycle. A revoked or
  expired Keycloak offline session no longer invalidates an `sk-oh-…` key. Key
  revocation must now go through the key store, not the IdP session — Keycloak
  session revocation is no longer a kill switch for API keys.
operator_implication: RBAC/identity-plane change. Webhooks, external API
  clients, and the internal "Voice Relay orchestrator cron" stop breaking on
  dead offline sessions. Operators who relied on Keycloak session revocation as
  a deauth path for API keys MUST switch to key-store revocation.
candidate_signal: **YES** — changes the API-key deauth/revocation contract
  operators depend on, and reveals platform direction: OpenHands is separating
  its machine-identity plane from the human-SSO (Keycloak) plane to support
  headless/automation tenancy.
confidence: high (source diff: `enterprise/server/auth/saas_user_auth.py`,
  `token_manager.py` + 2 tests)
receipt: *"API-key authentication performs zero Keycloak round-trips."* /
  *"bearer auth eagerly refreshed the offline token on every request ... even
  though provider tokens already live in the auth_tokens table and refresh via
  each provider's own OAuth endpoint."*
  https://github.com/OpenHands/OpenHands/pull/14867

---

id: 2026-06-23-openhands-conversation-secret-enricher
date: 2026-06-16T04:45:48Z (merged_at, #14697; stacked on #14650 @ 2026-06-16T02:14:08Z)
tag/commit/PR: PR #14697 (commit `30457edcd`) + PR #14650 (commit `5982cf16c`)
change_type: capability / security (multi-tenancy credential plane)
channel: main-unreleased — both `...main`=ahead, `...1.8.0`=diverged behind_by>0
section: integrations / sandboxing / multi-tenancy
accessibility_impact: Agents started from web UI, Slack, or API — not just
  Jira-triggered resolver jobs — can now act in Jira DC as the linking user
  without manual credential handoff.
security_impact: Widens credential-injection blast radius from one trigger
  (Jira resolver) to ALL conversation-start paths. Establishes a generalized
  per-user-secret enricher at conversation start that injects user-linked
  third-party OAuth tokens (`JIRA_DC_TOKEN` `LookupSecret` + `JIRA_DC_BASE_URL`)
  into sandboxes. #14650 adds the at-rest token storage (Alembic migration
  `122_add_oauth_tokens_to_jira_dc_users.py`); #14697 generalizes exposure.
  No bot/service-account fallback yet (noted follow-up). Jira-triggered convos
  stay strict (validated before launch); Slack/web/API are best-effort.
operator_implication: Cross-cutting multi-tenancy/integration surface. Any
  conversation a user starts can carry their Jira DC identity into the sandbox;
  sandbox-side Jira actions inherit that user's Jira permissions. Operators must
  reason about which start paths leak which linked credentials.
candidate_signal: **YES** — reveals platform direction: a reusable
  "conversation secret enricher" primitive for per-user third-party
  credential-passthrough into sandboxes, with Jira DC as the first consumer.
  Architectural, not a one-off integration.
confidence: high (new `jira_dc_conversation_secret_enricher.py` + shared
  `conversation_secret_enricher.py`; 15-file #14650 incl. migration)
receipt: *"makes the linked Jira Data Center OAuth token available to eligible
  web, Slack, and API-started conversations, not only Jira-triggered resolver
  jobs."* https://github.com/OpenHands/OpenHands/pull/14697 /
  *"adds Jira Data Center OAuth token persistence and resolver sandbox injection
  so agents started from Jira can call back into Jira using the linked user
  credential."* https://github.com/OpenHands/OpenHands/pull/14650

---

id: 2026-06-23-openhands-dynamic-sandbox-spec-service
date: 2026-06-16T21:27:56Z (merged_at)
tag/commit/PR: PR #14849; merge commit `56034afe10` (harvest first wrote `9ab0ddb15`; that SHA is #14852 pyjwt — corrected per verify/openhands.md)
change_type: runtime / capability (sandbox control plane)
channel: main-unreleased — `...main`=ahead, `...1.8.0`=diverged behind_by>0
section: sandboxing / runtime
accessibility_impact: Operators can offer custom/dynamic sandbox images per
  deployment without code changes; default spec selected by config name
  (`OH_SANDBOX_SPEC_DEFAULT_SPEC_NAME`, e.g. `v1_current`) instead of a raw tag.
security_impact: Sandbox image set becomes server-driven (runtime-api
  `GET /api/warm-runtime-configs`) rather than code-pinned. The control plane
  for WHAT image agents execute in moves to runtime-api; trust flows from its
  warm configs. 60s cache.
operator_implication: Sandboxing direction — image-selection authority leaves
  the hardcoded preset list and becomes a runtime-api concern. Corroborated by
  #14883 (SDK-version mismatch gate for custom images) and #14889 (lockstep
  agent-server pin). Part 2 of custom-sandbox-image support (part 1 =
  runtime-api PR #538).
candidate_signal: **YES** (moderate-strong) — foundational platform move toward
  first-class custom / per-tenant execution environments; sandbox-spec authority
  shifts to a runtime-api control plane.
confidence: high (new `dynamic_remote_sandbox_spec_service.py` + test)
receipt: *"fetches available sandbox specs from the runtime-api
  `GET /api/warm-runtime-configs` endpoint rather than relying on a hardcoded
  preset list ... The default spec is selected by config name (e.g.
  `v1_current`) via `OH_SANDBOX_SPEC_DEFAULT_SPEC_NAME`."*
  https://github.com/OpenHands/OpenHands/pull/14849

---

### NON-SIGNAL FINDINGS (notable, not signals)

---

id: 2026-06-23-openhands-acp-env-leak-closed
date: 2026-06-22T08:35:42Z (merged_at)
tag/commit/PR: PR #14921; merge commit `38f7b1baa`
change_type: security (org/member secret isolation)
channel: main-unreleased
section: enterprise / multi-tenancy / ACP
security_impact: Embedded investigation finding (the chore itself is dead-code
  purge): a suspected cross-member ACP-credential broadcast leak — the `acp_env`
  agent-settings field that was settings-broadcast-eligible via
  `shared_agent_settings_diff` / `update_all_members_settings_async` — was found
  **already closed** by SDK 1.29.0 (#14889) removing the field entirely. ACP
  provider creds now ride the per-user Secrets panel (`custom_secrets`), stored
  per-user, never org-broadcast. Pins `WHOLESALE_REPLACEMENT_KEYS == {'mcp_config'}`.
operator_implication: Confirms the org-member secret-isolation model and closes
  a cross-member credential-broadcast vuln class. Directly resolves the
  profile's open question about MCP/`acp_env` cross-contamination (PR #14528).
candidate_signal: no (chore), but record the isolation-model receipt.
confidence: high
receipt: *"The leak vector was the `acp_env` agent-settings field, which SDK
  1.29.0 removed entirely (the version OpenHands now pins, #14889). With the
  field gone it cannot enter `shared_agent_settings_diff` /
  `update_all_members_settings_async`."*
  https://github.com/OpenHands/OpenHands/pull/14921

---

id: 2026-06-23-openhands-bitbucket-dc-bot-identity
date: 2026-06-18T03:43:35Z (merged_at)
tag/commit/PR: PR #14881; merge commit `947d112f8`
change_type: security / integrations (posting identity)
channel: main-unreleased
section: integrations / DC
security_impact: Agent replies/reactions now ALWAYS post via the bot PAT
  (`BITBUCKET_DATA_CENTER_BOT_TOKEN`), never the mentioning user's token;
  self-author guard skips events whose actor == bot; "gate, no fallback" fails
  closed (logs+returns) if the bot token is unset instead of leaking a user
  token. Webhook handling backgrounded via FastAPI BackgroundTasks (Redis NX
  dedup stays synchronous).
operator_implication: **Breaking deploy requirement** — existing no-bot-token
  BBDC installs MUST add a bot PAT + username before upgrading (lockstep KOTS
  change). Mirrors the Jira DC bot pattern → a converging "always act as the bot
  service account" identity discipline across DC integrations.
candidate_signal: no (bugfix), but supporting evidence of DC-integration
  identity-model convergence.
confidence: high (new `bitbucket_dc_service_account.py` + 5 tests)
receipt: *"Always post as the bot. ... it sets the raw bot PAT as `Bearer` ...
  and never carries a per-user `external_auth_id`."*
  https://github.com/OpenHands/OpenHands/pull/14881

---

id: 2026-06-23-openhands-slack-attachments
date: 2026-06-23T03:13:12Z (merged_at)
tag/commit/PR: PR #14934; merge commit `8f28477d4`
change_type: capability / integrations (ingestion surface)
channel: main-unreleased
section: integrations / Slack
security_impact: New untrusted-input surface — Slack attachments (images,
  PDF/DOCX, text/config/log) are downloaded, images converted to V1
  `ImageContent`, text extracted, and fed into agent context. Broadens
  prompt-injection / malicious-file attack surface. Adds `files:read` bot scope
  + aligns OAuth scopes (`users:read`, `channels:history`, etc.). Only the
  trigger/follow-up message is processed, not history (deliberate scoping).
operator_implication: **Requires existing Slack apps to be reinstalled/
  reauthorized** (new scopes). Plan the reauth; the new `files:read` + history
  scopes widen what the bot can read.
candidate_signal: no (incremental feature) — flag for the prompt-injection /
  scope-expansion angle.
confidence: high (new `slack_attachments.py` + 2 tests)
receipt: *"Adds Slack attachment processing to download files ... convert images
  into V1 `ImageContent`, and extract readable text from text/config/log, PDF,
  and DOCX attachments."* https://github.com/OpenHands/OpenHands/pull/14934

---

id: 2026-06-23-openhands-harness-model-chip
date: 2026-06-17T15:27:42Z (merged_at)
tag/commit/PR: PR #14510; merge commit `13634324c`
change_type: capability / accessibility (observability)
channel: main-unreleased
section: GUI / ACP positioning
accessibility_impact: Conversation chip now shows BOTH harness (icon: OpenHands
  circuit / Claude / OpenAI / Gemini / puzzle-for-unknown-ACP) and model
  (prettified text); backend surfaces `llm_model` for ACP convos from
  `request_agent.acp_model`.
operator_implication: Evaluation/observability — operators can visually
  distinguish which harness+model ran each conversation (OpenHands-native vs
  Claude Code / Codex via ACP). Novel evidence reinforcing the profile thesis
  that OpenHands treats ACP harnesses as first-class co-resident agents in its
  UI.
candidate_signal: no — but a real data point on positioning.
confidence: high (~25 frontend files + backend model/router)
receipt: *"the icon encodes the harness/provider, the text encodes the model."*
  https://github.com/OpenHands/OpenHands/pull/14510

---

id: 2026-06-23-openhands-sandbox-concurrency-list-count
date: 2026-06-16T12:24:44Z (merged_at)
tag/commit/PR: PR #14834 (commit `4a6c74dd2`); migration renumber #14840 (`be6f44684`)
change_type: reliability (multi-tenancy quota correctness)
channel: main-unreleased
section: sandboxing / quota
security_impact: Concurrency-limit count now comes from runtime `/list`
  cross-referenced with DB rows (only runtime-confirmed-running sandboxes
  count), replacing the buggy `is_paused` DB-flag count that treated every
  historical row as active (users hit `80/3` 429s with zero running). Drops
  `is_paused`; restores `/list`-based `pause_old_sandboxes`; fixes a sort bug
  (was pausing newest, not oldest).
operator_implication: Multi-tenancy quota enforcement now trusts runtime truth.
  This is the surviving concurrency-control path after #14168 was reverted
  (#14877) — note the count-source story.
candidate_signal: no (restores intended behavior).
confidence: high
receipt: *"Only sandboxes the runtime confirms as running count against the
  limit — stale or expired DB rows are automatically excluded."*
  https://github.com/OpenHands/OpenHands/pull/14834

---

id: 2026-06-23-openhands-custom-image-sdk-mismatch-gate
date: 2026-06-18T03:56:08Z (merged_at)
tag/commit/PR: PR #14883; merge commit `c7c9ee006`
change_type: reliability / runtime (custom-image guardrail)
channel: main-unreleased
section: sandboxing
operator_implication: For custom sandbox images only, verifies agent-server
  `sdk_version` (`GET /server_info`) against the app's pinned `openhands-sdk`,
  raising a clear `SandboxError` on major.minor mismatch instead of an opaque
  500. Fails open if version unreadable; bypass `OH_SKIP_AGENT_SERVER_VERSION_CHECK=1`.
  Companion to #14849 for the custom-image program.
candidate_signal: no — corroborating evidence for the custom-sandbox-image thread.
confidence: high
receipt: *"verify the agent-server's reported `sdk_version` ... against the
  app's pinned `openhands-sdk`, and raise a clear, actionable `SandboxError` on
  a major.minor mismatch."* https://github.com/OpenHands/OpenHands/pull/14883

---

id: 2026-06-23-openhands-sdk-1290-bump
date: 2026-06-18T18:26:17Z (merged_at)
tag/commit/PR: PR #14889; merge commit `c4ca01746`
change_type: ecosystem (dependency)
channel: main-unreleased
section: SDK
operator_implication: `openhands-sdk`/`openhands-agent-server`/`openhands-tools`
  → `==1.29.0`; `AGENT_SERVER_IMAGE` → `ghcr.io/openhands/agent-server:1.29.0-python`.
  App and sandbox SDK pinned in lockstep. Load-bearing context: 1.29.0 is the
  version that removed `acp_env` (see acp-env-leak-closed) and added `llm.auth_type`
  (see #14893 LLM-Profile cleanup).
candidate_signal: no (routine).
confidence: high
receipt: *"App SDK and the sandbox agent-server move together so warm runtimes
  stay coherent."* https://github.com/OpenHands/OpenHands/pull/14889

---

id: 2026-06-23-openhands-conversation-export-dos-fix
date: 2026-06-18T22:57:32Z (merged_at, #14899; #14896 same content on saas-rel-1.38.0)
tag/commit/PR: PR #14899 (commit `9c299e627`) + PR #14896
change_type: reliability / security (availability)
channel: main-unreleased
section: runtime / availability
security_impact: DoS/resource-exhaustion fix. Trajectory export rewritten to
  single-pass `iter_events_for_export()` (was `page_iterator(search_events)`
  reloading every event blob per page — 5k-event convo → hundreds of thousands
  of blob reads, saturating app pods). Now streams the zip; adds a Redis-backed
  per-conversation export lock; explicit statuses (409 duplicate, 503 lock
  unavailable, 413 event-limit).
operator_implication: One tenant's large export can no longer saturate shared
  app servers; new explicit error contract.
candidate_signal: no (restores intended behavior).
confidence: high
receipt: *"search_events() lists and loads every event blob before applying
  pagination, so a 5k-event conversation caused every page to reload the same
  5k events. Repeated overlapping downloads multiplied that into hundreds of
  thousands of blob reads."* https://github.com/OpenHands/OpenHands/pull/14899

---

id: 2026-06-23-openhands-cve-sweep
date: 2026-06-16 .. 2026-06-17 (merged_at, multiple)
tag/commit/PR: #14854 pyjwt (CVE-2026-48526), #14856 tornado (CVE-2026-49855),
  #14871 aiohttp (CVE-2026-54278), #14875 form-data (CVE-2026-12143),
  #14876 python-multipart (CVE-2026-53539)
change_type: security (dependency hygiene)
channel: main-unreleased
section: dependencies
security_impact: Five lockfile/manifest bumps, no source logic. Most relevant:
  pyjwt (JWT verification — directly on the Keycloak/bearer auth trust boundary)
  and python-multipart (request-body upload parser — the Slack/file-attachment
  path). aiohttp 3.13→3.14 is a minor bump (slightly more regression surface).
operator_implication: Patch-grade fast-follow for operators on pinned forks.
  Meta-observation: these were auto-authored by OpenHands' own agent
  (`app.all-hands.dev` conversations) — platform-posture data point, not a
  per-PR signal.
candidate_signal: no (hygiene).
confidence: high
receipt: *"This PR updates `pyjwt` from 2.12.1 to 2.13.0 to address the security
  vulnerability CVE-2026-48526."*
  https://github.com/OpenHands/OpenHands/pull/14854

---

id: 2026-06-23-openhands-apikey-cors-contract
date: 2026-06-16T18:28:56Z (merged_at)
tag/commit/PR: PR #14835; merge commit `ae5a02b84`
change_type: security (CORS boundary)
channel: main-unreleased
section: enterprise auth
security_impact: ASGI wrapper hides the `Origin` header from inner CORS
  middleware once the outer API-key-aware middleware classifies a credentialless
  request, so API-key responses keep the wildcard-origin / no-credentials
  contract and inner middleware can't inject credentialed CORS headers.
operator_implication: Cleaner separation between cookie (credentialed) and
  API-key (credentialless) CORS contracts.
candidate_signal: no (defense-in-depth cleanup of an already-intended contract).
confidence: high
receipt: *"API-key responses should keep the credentialless contract: wildcard
  origin, no credentials header."*
  https://github.com/OpenHands/OpenHands/pull/14835

---

id: 2026-06-23-openhands-resolver-label-macro
date: 2026-06-18T20:32:42Z (merged_at)
tag/commit/PR: PR #14895; merge commit `fdac43673`
change_type: reliability / integrations (multi-deployment isolation)
channel: main-unreleased
section: integrations / multi-tenancy
security_impact: Low but real cross-environment isolation fix. `get_oh_labels()`
  honors `OH_RESOLVER_LABEL` (issue label + `@mention` that fires the resolver)
  as an explicit per-deployment override; falls back to `WEB_HOST` substring
  inference. Previously any non-prod host lacking `staging`/`local` substrings
  listened for the same `@openhands` as prod and competed on shared repos.
operator_implication: Operators running multiple OpenHands deployments against
  shared repos can give each its own trigger macro (no prod-mention hijack).
candidate_signal: no (config-isolation convenience).
confidence: high
receipt: *"any additional non-production deployment whose host lacked those
  substrings listened for the same `@openhands` as production and competed with
  it on shared repos."* https://github.com/OpenHands/OpenHands/pull/14895

---

id: 2026-06-23-openhands-global-skills-no-repo
date: 2026-06-23T03:52:16Z (merged_at)
tag/commit/PR: PR #14780; merge commit `52b6094d5`
change_type: capability / governance (skill auto-load surface)
channel: main-unreleased
section: skills / multi-tenancy
security_impact: Skill-loading now fans out across all of a user's orgs/groups
  (across every authenticated provider) without an explicit repo selection,
  resolving both `.openhands` and `.agents` repos. Skills = executable agent
  instructions, so this widens the auto-load surface; `.agents` is now co-equal
  with `.openhands`.
operator_implication: Operators should note org/group `.openhands`/`.agents`
  repos auto-inject skills into repo-less conversations.
candidate_signal: no (coverage fix) — operator-awareness item.
confidence: high
receipt: *"enumerate the authenticated user's account login + all their
  orgs/groups across every authenticated provider, resolve both `.openhands` and
  `.agents` repos."* https://github.com/OpenHands/OpenHands/pull/14780

---

id: 2026-06-23-openhands-llm-profile-authfield-cleanup
date: 2026-06-18T19:54:35Z (merged_at)
tag/commit/PR: PR #14893; merge commit `45ade36d6`
change_type: reliability (settings UI correctness)
channel: main-unreleased
section: enterprise / org-level LLM profiles
security_impact: The LLM Profile form showed a duplicate, inert `auth_type`
  field that "leaked into Basic even when BYOK is disabled" (traced to SDK
  1.29.0's new `llm.auth_type`). Fix filters the SDK discriminated-union section
  by `variant` (drops the `acp` duplicate) and excludes `llm.auth_type` +
  `llm.subscription_vendor` from render.
operator_implication: Touches the org-level LLM profile surface tracked in the
  profile (PR #14406 lineage). Minor correctness; confirms the org-LLM-profile
  UI is still actively maintained on main, still untagged.
candidate_signal: no.
confidence: high
receipt: *"the LLM Profile settings form showed a duplicate 'Authentication'
  (`auth_type`) field; the field was inert ... and leaked into Basic even when
  BYOK is disabled. Both trace to SDK 1.29.0's new `llm.auth_type` field."*
  https://github.com/OpenHands/OpenHands/pull/14893

---

## Novelty vs profile

Profile last_updated 2026-06-03; last finding `2026-06-03-openhands-cve-2026-44492-axios`.
This window is NET-NEW against the profile:

- **NEW direction — machine-identity / human-SSO plane split** (#14867). Not in
  profile. The profile documents Keycloak-fronted RBAC and org-level LLM
  profiles but not the decoupling of API-key auth from Keycloak sessions.
- **NEW primitive — generalized per-user conversation secret enricher**
  (#14650/#14697). The profile notes per-org/per-member ACP-env scoping (#14528)
  but not a cross-path credential-passthrough framework injecting user OAuth
  tokens into sandboxes from web/Slack/API.
- **NEW direction — custom-sandbox-image control plane via runtime-api**
  (#14849/#14883/#14889). Profile covers sandbox grouping UI + KVM accel, not
  dynamic server-driven sandbox specs.
- **RESOLVES profile open question** — MCP/`acp_env` cross-member contamination
  (profile §"Security Posture" / Open Questions, PR #14528): #14921 confirms the
  `acp_env` leak vector is structurally closed by SDK 1.29.0.
- **REVERSES a prior trajectory** — last window's per-org/per-user concurrency
  limits (#14168) were REVERTED (#14877); they will not ship in the next 1.x.
- **CONFIRMS profile thesis** — ACP harnesses as first-class co-resident agents
  (#14510 harness-vs-model chip).
- **Channel posture unchanged from profile's standing open question**: still no
  tagged release consolidating the enterprise/ACP/sandbox work; the 1.8.0
  release (06-10) predates the entire enterprise cluster, which remains
  main-unreleased.
