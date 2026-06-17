# Group B Watchlist Harvest — 2026-05-13 to 2026-05-27

Window: 2026-05-13 (inclusive) through 2026-05-27 (today).
Harvester: Group B partial-cycle (open-source GitHub-primary providers).
Providers covered: OpenHands, Agent Zero, OpenClaw.

Process: read source contracts (`sources/openhands.yml`, `sources/agent-zero.yml`,
`sources/openclaw.yml`) and existing profiles for known-state baseline, then
hit primary surfaces (GitHub releases, merged PRs on main, official docs)
directly via `gh`/WebFetch. Findings below cite by URL + commit SHA or release
tag + observed date. Inferred operator consequences are flagged separately
from observation.

---

## OpenHands

**Summary: 6 findings, 4 candidate signals.** No tagged release in the window
(last release 1.7.0 was 2026-05-01, pre-window). Heavy main-branch activity
focused on enterprise integrations (Bitbucket DC, Jira DC, Azure DevOps via
Entra) plus an ACP-agent settings UI that lets OpenHands front for Claude
Code / Codex / Gemini CLI as the actual agent.

### Finding: openhands-acp-agent-settings-ui

- `precision_level`: commit_diff_reviewed (PR description + merged PR review)
- `surface`: github_repo (merged PR on main)
- `url`: https://github.com/OpenHands/OpenHands/pull/14401
- `observed_at`: 2026-05-27
- `change_type`: capability, platform, philosophy
- `body`: OpenHands shipped a Settings → Agent page (PR #14401, merged
  2026-05-15) that lets an operator point OpenHands at an external ACP
  (Agent Client Protocol) agent — Claude Code, Codex, Gemini CLI, or a
  custom command — as the actual agent doing the work. While ACP is active,
  the LLM / Condenser / MCP settings pages are greyed out with a tooltip,
  and the route loader redirects direct access to `/settings/agent`. The
  conversation chip resolves the brand label from a backend `acp_providers`
  registry. Backed by an SDK bump to v1.22.1 that unifies the conversation
  endpoint to `/api/conversations` for both built-in and ACP agents. Feature
  flag `ENABLE_ACP` defaults `false`.
- `candidate_signal`: yes — OpenHands is no longer just "an agent harness."
  It is positioning itself as a *front-end for other harnesses*. That
  changes the operator question: is OpenHands the agent, or the GUI shell
  you wrap around Claude Code / Codex / Gemini CLI for sandboxing, RBAC,
  cloud, integrations? The product question is now "platform around someone
  else's agent" — which is the exact shape Bitter has been thinking about.
- `section_candidate`: platform (with a control-plane edge: ACP gates other
  settings, so it's also operating-state about which agent is authoritative)
- `axis_candidates`: accessibility, authority

### Finding: openhands-org-level-llm-profiles

- `precision_level`: commit_diff_reviewed
- `surface`: github_repo (merged PR on main)
- `url`: https://github.com/OpenHands/OpenHands/pull/14406
- `observed_at`: 2026-05-27
- `change_type`: capability, philosophy
- `body`: PR #14406 (merged 2026-05-27) adds organization-level LLM profile
  storage in SaaS mode. Migration 116 adds an encrypted JSON `llm_profiles`
  column on the `org` table; six new CRUD endpoints sit under
  `/api/organizations/{org_id}/profiles`. Permission gate is two-tier:
  `VIEW_ORG_SETTINGS` to list/get, `EDIT_ORG_SETTINGS` to create / update /
  delete / rename / **activate**. Activate is the bigger surface — the same
  transaction updates `profiles.active` on the org and `agent_settings_diff`
  on the acting member, with `SELECT ... FOR UPDATE` serializing concurrent
  writes. The UI is currently gated to `isPersonalOrg`; team-org UI is a
  follow-up.
- `candidate_signal`: yes — explicit "operator vs operator-as-org-admin"
  separation in the model layer. Org admins can now define LLM defaults
  that every member's chat-layer surfaces (`/model`, switch button)
  inherits, with concurrency safety. This is the shape Factory wants:
  authority distinct from individual usage.
- `section_candidate`: control-plane
- `axis_candidates`: authority, accessibility (org admins get one place to
  set policy without per-user grind)

### Finding: openhands-mcp-acp-env-per-org-member

- `precision_level`: commit_diff_reviewed
- `surface`: github_repo (merged PR on main)
- `url`: https://github.com/OpenHands/OpenHands/pull/14528
- `observed_at`: 2026-05-27
- `change_type`: security, capability
- `body`: PR #14528 (merged 2026-05-22) is a bug fix with security
  consequences: previously, when an org member added an MCP server on
  `/settings/mcp`, `SaasSettingsStore.store()` wrote that config both to
  `org.agent_settings` and broadcast it to every other org member's row via
  `update_all_members_settings_async`. Every other member of the same org
  saw and could use it. `acp_env` (ACP environment variables) had the same
  leak. Fix splits the agent settings diff into a shared half and a private
  half (`MEMBER_PRIVATE_AGENT_KEYS = WHOLESALE_REPLACEMENT_KEYS`); private
  keys go only to the acting member's row. `load()` also strips the keys
  from any pre-fix data on org settings so legacy values stop leaking on
  read.
- `candidate_signal`: maybe — operators on multi-tenant OpenHands SaaS pre
  the fix may have already cross-contaminated MCP credentials between
  members. Worth flagging to anyone evaluating OpenHands' enterprise
  governance story.
- `section_candidate`: control-plane (authority isolation between org
  members) with a security crosscut
- `axis_candidates`: security, authority

### Finding: openhands-azure-devops-entra-auth

- `precision_level`: commit_diff_reviewed
- `surface`: github_repo (merged PR on main)
- `url`: https://github.com/OpenHands/OpenHands/pull/14567
- `observed_at`: 2026-05-27
- `change_type`: capability, ecosystem
- `body`: PR #14567 (merged 2026-05-27) adds Azure DevOps support for
  OpenHands Enterprise via Microsoft Entra ID OAuth/OIDC, brokered through
  Keycloak. New `ProviderType.AZURE_DEVOPS`, repo/branch/project discovery
  service, and an OAuth bearer flow that injects credentials via
  `http.extraheader` instead of embedding in clone URLs. Documented as
  validated on the `replicated-01` Replicated environment.
- `candidate_signal`: maybe — third major DC-flavor integration in window
  alongside Jira DC + Bitbucket DC. The pattern is consistent: OpenHands
  is pushing into self-hosted enterprise stacks (Replicated/KOTS-managed
  Jira DC service accounts also landed at 802f3c3 on 2026-05-26). That's
  a product posture, not a single feature.
- `section_candidate`: platform
- `axis_candidates`: accessibility (enterprise teams can adopt without
  switching to cloud DevOps), authority (per-org-member auth scoping)

### Finding: openhands-jira-bitbucket-dc-suite

- `precision_level`: commit_diff_reviewed (multiple commits clustered on main)
- `surface`: github_repo
- `url`: https://github.com/OpenHands/OpenHands/commits/main
- `observed_at`: 2026-05-27
- `change_type`: capability, ecosystem
- `body`: Adjacent to the Azure DevOps work, OpenHands landed a Jira DC
  resolver chain in window: commits `4488735` (resolver in OHE,
  2026-05-22), `bd0106e` (automation forwarding, 2026-05-22), `077039e`
  (broader webhook events, 2026-05-22), `5e311f7` (Bitbucket DC events to
  automations, 2026-05-23), `4335396` (connection-scoped Bitbucket DC
  webhooks, 2026-05-26), `2afe08c` (Bitbucket DC PR comments in resolver
  context, 2026-05-26), `43ec2b6` (enforce single active Jira DC link,
  2026-05-26), `802f3c3` (KOTS-managed Jira DC service accounts,
  2026-05-26). PR #14528 also scoped MCP/ACP env vars to the acting org
  member (see separate finding).
- `candidate_signal`: yes — when combined with the Azure DevOps work and
  the Settings → Agent ACP UI, the picture is "OpenHands is consolidating
  as the enterprise-self-hosted shell around third-party agents and Data
  Center source control." That's a clear strategic positioning.
- `section_candidate`: platform
- `axis_candidates`: accessibility (enterprise on-prem teams can adopt
  without cloud), authority (per-link enforcement, scoped service
  accounts), security (credential boundaries kept inside org)

### Finding: openhands-cve-batch-mid-may

- `precision_level`: commit_diff_reviewed (multiple)
- `surface`: github_repo
- `url`: https://github.com/OpenHands/OpenHands/commits/main
- `observed_at`: 2026-05-27
- `change_type`: security
- `body`: OpenHands shipped a batched dependency CVE remediation cluster in
  window: `6362f4e` gitpython (CVE-2026-44244, 2026-05-13), `68083f2`
  mistune (CVE-2026-44897, 2026-05-16), `ceb870e` mako (CVE-2026-44307,
  2026-05-16), `e5047a8` pypdf (CVE-2026-41312, 2026-05-18), `4804682`
  axios (CVE-2026-42264, 2026-05-15), `a256611` nbconvert (CVE-2026-39377,
  2026-05-21), `5ec986b` jwcrypto (CVE-2026-39373, 2026-05-21), `1fb2144`
  poetry (CVE-2026-41140, 2026-05-21), `e069646` protobufjs
  (CVE-2026-44289, 2026-05-20). Plus a CI hardening commit `4c28c62`
  (2026-05-22) pinning external third-party GitHub actions to commit SHAs
  and scoping Dependabot to composite actions.
- `candidate_signal`: no — routine dep upgrades, but worth noting the
  cadence (the OpenHands profile already calls out "fixes-as-they-ship
  rather than a published security policy"; this batch confirms the
  pattern). Operators still upgrade on their own cadence.
- `section_candidate`: platform
- `axis_candidates`: security

**Open questions / unverified:**

- No tagged release in window means no consolidated release-note narrative
  from the project; we are reading commits to main. Operators on the
  release channel will not see any of this until the next 1.x release. The
  current OpenHands profile's `evidence_floor: release_note` would force
  these to be staged as `commit_diff_reviewed` supporting evidence, then
  consolidated when the next release ships.
- The org-level LLM profiles UI is currently `isPersonalOrg`-gated. The
  team-org UI is "shipping in a follow-up PR" per the description but is
  not in window.
- Default model change `MiniMax-M2.7` (commit 9b0cb9e, 2026-05-21) — saw
  the commit subject but did not pull the diff. Likely a low-impact
  default rotation but worth confirming next cycle.

---

## Agent Zero

**Summary: 4 findings, 3 candidate signals.** Four releases in window: v1.15
(2026-05-15), v1.16 (2026-05-22), v1.17 (2026-05-23), v1.18 (2026-05-26).
The arc: speech and plugin-system polish in v1.15-v1.16; the v1.17 jump to
**host-machine desktop control with vision-verified actions** is the
category event for the workcell calibration source.

### Finding: agent-zero-host-desktop-control-with-vision-verification

- `precision_level`: release_note
- `surface`: github_releases
- `url`: https://github.com/agent0ai/agent-zero/releases/tag/v1.17
- `observed_at`: 2026-05-27
- `change_type`: capability, runtime, security, philosophy
- `body`: Agent Zero v1.17 (published 2026-05-23) exposes
  `computer_use_remote` as a callable tool that controls the **host**
  desktop — outside the Docker/Xpra container — with platform-specific
  structural targeting: macOS uses Accessibility (AX) with `ax_snapshot` /
  `ax_action`, Windows uses UIA, Linux uses AT-SPI/Wayland. Critically,
  every state-changing action is treated as unverified until a fresh
  screenshot visibly confirms the outcome — agents must stop when no
  screenshot is available. Screenshots are now returned as multimodal
  vision messages, not text summaries, so the model can inspect what
  happened. The internal Docker/Xpra desktop is still controlled by the
  separate `linux-desktop` skill; the host path is cleanly separated.
  macOS approval denials route to a re-arm-required stop flow rather than
  silent retry.
- `candidate_signal`: yes — this is the v1.13 "real computer in a Docker
  container" story expanded to **the operator's actual machine**, with a
  verification-required loop instead of trusting tool outputs. Agent Zero
  is now competing with computer-use offerings (Anthropic, OpenAI) on the
  same primitive but with explicit visual-evidence gating. Operators must
  decide if `computer_use_remote` is allowed at all on the host. The
  default trust mode and re-arm enforcement are runtime checks, not
  prompt-loader gates — that's a real authority boundary.
- `section_candidate`: runtime
- `axis_candidates`: authority, evidence, security (host access is a new
  attack surface), accessibility (the platform-specific structural skills
  reduce the trial-and-error coordinate-click problem; AX/UIA/AT-SPI use
  semantic targets)

### Finding: agent-zero-speech-as-plugins-and-breaking-rename

- `precision_level`: release_note
- `surface`: github_releases
- `url`: https://github.com/agent0ai/agent-zero/releases/tag/v1.16
- `observed_at`: 2026-05-27
- `change_type`: capability, breaking_change
- `body`: v1.16 (2026-05-22) split the core speech system into two
  independently togglable built-in plugins — `_kokoro_tts` (Kokoro TTS)
  and `_whisper_stt` (Whisper STT). Legacy speech settings and APIs were
  removed; browser-native TTS remains as fallback when Kokoro is off. In
  the same release, `document_artifact` was renamed to `office_artifact`
  with retired shims and facades removed — skills and integrations
  referencing the old name need updating. Screenshot/capture handling for
  Browser, Desktop, and computer-use is now ephemeral and context-scoped
  by default, routed through in-process image refs instead of being
  written to disk; explicit user-initiated screenshots remain durable.
- `candidate_signal`: maybe — the plugin-ification of speech is normal
  engineering, but the ephemeral-capture default is meaningful for
  workcell hygiene: the agent no longer leaves screenshot trails on disk
  by default. That's a Grid-adjacent privacy posture change.
- `section_candidate`: runtime (capture policy) with a platform crosscut
  (breaking rename)
- `axis_candidates`: security, evidence (the trade is what is preserved
  for audit if captures are ephemeral)

### Finding: agent-zero-markdown-editor-and-document-routing

- `precision_level`: release_note
- `surface`: github_releases
- `url`: https://github.com/agent0ai/agent-zero/releases/tag/v1.15
- `observed_at`: 2026-05-27
- `change_type`: capability, workflow
- `body`: v1.15 (2026-05-15) shipped a dedicated `_editor` Markdown plugin
  with ACE source editing, safe rendered preview mode, browser-style tabs,
  preview-search, inline editing from preview, clickable task-list
  checkboxes, math/tables/code rendering, and live refresh for active
  context and saved tool edits. In v1.16, the File Browser routing was
  formalized: Markdown files route to Editor, `txt` and Office documents
  route to Desktop, browser-renderable files route to Browser. Office
  surface code that used to host Markdown was removed. v1.18 adds shadow
  DOM and iframe support for the browser (frame-chain/node references) and
  fixes MCP multimodal content handling (images as data URLs, audio and
  binary resources saved as artifacts).
- `candidate_signal`: maybe — the document-routing formalization is the
  kind of "surface boundaries are now stable" detail operators planning
  long-running workcells care about. The MCP multimodal fix in v1.18
  removes a previously-silent data loss path.
- `section_candidate`: runtime
- `axis_candidates`: accessibility (Markdown editing surface is a
  reachable familiar UI for non-developer operators), evidence (MCP fix
  preserves what the agent actually saw)

### Finding: agent-zero-skills-cap-configurable-and-plugin-scanner-recalibration

- `precision_level`: release_note
- `surface`: github_releases
- `url`: https://github.com/agent0ai/agent-zero/releases/tag/v1.18
- `observed_at`: 2026-05-27
- `change_type`: capability, workflow
- `body`: v1.18 (2026-05-26) makes the active-skills cap configurable via
  `max_active_skills` in the skills plugin config and settings UI,
  replacing the previous hard-coded limit. v1.16 had previously
  recalibrated the plugin scanner to score risk by demonstrated patterns
  rather than the mere presence of common capabilities like network calls
  or filesystem access, and added a one-click ON/OFF toggle (replacing a
  dropdown). v1.16 also added skill visibility controls — users can hide
  skills from the model-facing catalog via the chat Skills selector;
  hidden skills are filtered from listing, search, recall, and prompt
  injection. Connector clients can activate skills in live chats via a
  new `skills_activate` endpoint.
- `candidate_signal`: maybe — together these are an "operator can shape
  what the agent sees" surface, which matters for accessibility (less
  expert users can curate the catalog without code) and for keeping a
  large skill catalog from drowning the model's context budget.
- `section_candidate`: control-plane (skill visibility is authority over
  what the agent can do)
- `axis_candidates`: authority, accessibility

**Open questions / unverified:**

- v1.17's "agents must stop when a screenshot is unavailable" is described
  as visual-verification policy, but the release notes don't say whether
  this is enforced at the model-prompt level or at the tool-runtime
  return-shape level. The note says "Availability, trust mode, and re-arm
  enforcement remain runtime checks rather than prompt-loader gates" —
  which strongly implies runtime, but the visual-verification rule itself
  is less clear. Worth probing the v1.17 commits next cycle.
- Host vs container desktop separation: `computer_use_remote` is the host
  path, `linux-desktop` is the Xpra path. Open question: does the agent
  reliably pick the right path when both are available? Notes say
  "Host-screen queries rank ahead of the Xpra skill while explicit 'Agent
  Zero Desktop' requests still route correctly" — but ranking is not the
  same as enforcement.
- The ephemeral screenshot policy means the operator can't simply browse
  on-disk caches to audit what the agent saw. Where does that evidence
  land for audit?

---

## OpenClaw

**Summary: 5 findings, 3 candidate signals.** Eight in-window releases
(beta + stable) on a near-daily cadence: stable 2026.5.18, 2026.5.19,
2026.5.20, 2026.5.22, 2026.5.26 plus beta trains in between. The arc:
realtime voice/Talk maturation across channels; meeting transcript
ingestion as a first-class source; tightened content/security boundaries
(SSRF, prompt-marker spoofing, sender allowlists pre-dispatch); large
gateway-perf cleanup. The accessibility story stays the same — chat,
voice, mobile, and gateway as familiar surfaces — but the **safe content
boundaries** push is the new posture.

### Finding: openclaw-content-boundary-hardening-suite

- `precision_level`: release_note
- `surface`: github_releases
- `url`: https://github.com/openclaw/openclaw/releases/tag/v2026.5.26
- `observed_at`: 2026-05-27
- `change_type`: security
- `body`: 2026.5.26 (published 2026-05-27) lands a multi-front content-
  safety push: Browser snapshot reads honor SSRF policy before reading
  tab URLs (PR #78526); queued system-event text is sanitized so untrusted
  plugin/channel labels cannot spoof nested prompt markers (#87094);
  fetched file text and metadata are wrapped as external content (#87062);
  ClickClack `allowFrom` sender allowlists run **before** agent dispatch
  (#83741); RPCs from invalidated device-token clients are rejected during
  rotation (#70707); serialized tool-call text is scrubbed from replies
  (#86924). Memory adds a separate `memory_store` prompt-like-text reject
  matching the existing auto-capture prompt-injection filter (#87142).
  Gateway auth rate-limiter defaults on for remote non-browser/HTTP auth
  failures when `gateway.auth.rateLimit` is unset (#87148).
- `candidate_signal`: yes — these are explicit prompt-injection and
  content-confusion countermeasures, applied at policy-and-runtime layers
  in the gateway. Operators evaluating OpenClaw against "is it safe to put
  agents on real channels with real users" can use these as evidence of a
  threat model. The pre-dispatch allowlist (rather than post-dispatch
  blocking) is the right primitive for authority over inbound senders.
- `section_candidate`: control-plane (authority over inbound senders),
  with a runtime crosscut (gateway enforcement)
- `axis_candidates`: security, authority

### Finding: openclaw-transcripts-as-core-source-providers

- `precision_level`: release_note
- `surface`: github_releases
- `url`: https://github.com/openclaw/openclaw/releases/tag/v2026.5.26
- `observed_at`: 2026-05-27
- `change_type`: capability, philosophy
- `body`: 2026.5.22 added "Meeting Notes" as a source-only external plugin
  outside the core npm package, with auto-start capture config, manual
  transcript imports, a read-only `openclaw meeting-notes` CLI, and
  Discord voice as the first live source. 2026.5.26 promoted transcripts
  to a core capture path: transcript-backed meeting summaries, source-
  provider chunks, cleaned user turns, media provenance, Codex mirrors,
  WebChat replies, and CLI/TUI replay all now route through one unified
  transcript path. The 2026.5.26 highlights call this out explicitly:
  "Transcripts are core."
- `candidate_signal`: yes — for an accessibility-calibration source,
  promoting meeting transcripts to a first-class source provider is the
  exact "agentic work on top of the surfaces people already use" move.
  This is the meeting-bot integration shape that everyday teams already
  understand, with the gateway preserving cleaned user turns as
  identifiable transcript content (not just raw audio dumps).
- `section_candidate`: platform (new distribution surface — meetings —
  for inbound to OpenClaw) with a runtime crosscut
- `axis_candidates`: accessibility, evidence (cleaned transcripts with
  provenance are operator-readable audit trail)

### Finding: openclaw-reaction-approvals-on-mobile-channels

- `precision_level`: release_note
- `surface`: github_releases
- `url`: https://github.com/openclaw/openclaw/releases/tag/v2026.5.26
- `observed_at`: 2026-05-27
- `change_type`: capability, accessibility
- `body`: 2026.5.26 added approval-via-reaction across Signal (#85894),
  iMessage thumb (#85952), and WhatsApp (#85477) so mobile users can
  approve pending agent actions by reacting to the message rather than
  typing `/approve`. Plugin SDK exposes reaction-approval helpers for
  channel plugins (#86735). Exec approvals now hide durable approval
  actions unavailable for the current prompt (#86270) and keep approval
  runtime tokens local-only so stale prompts cannot offer misleading
  controls (#86359).
- `candidate_signal`: yes — this is exactly the accessibility primitive
  OpenClaw exists to test: approval authority that fits the way mobile
  users already use the channel, without flattening that authority into
  text commands or hiding it behind a separate app. The "no stale-prompt
  misleading controls" detail is the authority-visibility discipline that
  the profile's stance about "preserves visible authority and control"
  rests on.
- `section_candidate`: control-plane (approval is authority)
- `axis_candidates`: accessibility, authority

### Finding: openclaw-named-auth-profiles-and-migrations

- `precision_level`: release_note
- `surface`: github_releases
- `url`: https://github.com/openclaw/openclaw/releases/tag/v2026.5.26
- `observed_at`: 2026-05-27
- `change_type`: capability, workflow
- `body`: 2026.5.26 (#85667) added named model login profiles and
  supported credential migration for Hermes, OpenCode, and Codex auth
  profiles, with explicit opt-out and non-interactive controls. The
  `models auth order set` and `config.auth.order` precedence is honored
  over stale `lastGood` in `/codex account`; the system shows "no working
  credential" when every explicit-order profile is ineligible instead of
  silently activating a lower-ranked profile (#84412).
- `candidate_signal`: maybe — named auth profiles is the obvious step
  beyond the 2026-05-13 finding's "ChatGPT/Codex OAuth default shift."
  An operator running multiple model accounts (personal Anthropic +
  enterprise Anthropic, separate Codex orgs) gets a named profile for
  each. The migration is explicit, so onboarding scripts shouldn't
  break, but they should be re-checked.
- `section_candidate`: control-plane (which credential is authoritative
  is a control-plane decision)
- `axis_candidates`: authority

### Finding: openclaw-talk-runs-inspectable-and-steerable

- `precision_level`: release_note
- `surface`: github_releases
- `url`: https://github.com/openclaw/openclaw/releases/tag/v2026.5.26
- `observed_at`: 2026-05-27
- `change_type`: capability, accessibility
- `body`: 2026.5.26 highlights: "realtime Talk runs can be inspected,
  steered, cancelled, or followed up from Web UI and Discord voice;
  wake-name handling is more tolerant without letting ambient speech
  trigger agents." Concrete changes include shared realtime turn-context
  tracking through the realtime voice SDK (reused for Discord speaker
  attribution and wake-name recovery), shared realtime output activity
  tracking (reused for Discord playback / barge-in), shared consult
  question matching and speakable-result extraction, and broader edge-
  position fuzzy wake-name acceptance ("Open Club" mistranscript routes
  to OpenClaw). 2026.5.18 (consolidated rollup) had already moved Android
  Talk Mode to realtime Gateway relay voice sessions (#83130) with
  streaming mic input, realtime audio playback, tool-result bridging, and
  on-screen transcripts.
- `candidate_signal`: maybe — for the accessibility-calibration source,
  voice that you can interrupt, redirect, or cancel is the next stage
  beyond voice that you can launch. The wake-name fuzziness combined
  with ambient-speech gating is the right shape (forgiving recognition
  without overpermissive trigger), but the release notes don't quantify
  false-trigger rates. Operators in voice-channel deployments should
  test the threshold themselves.
- `section_candidate`: runtime (realtime voice session lifecycle is
  runtime) with a control-plane edge (inspect/steer/cancel is authority
  over an in-progress run)
- `axis_candidates`: accessibility, authority (operators can intervene
  mid-run)

**Open questions / unverified:**

- Plugin SDK additions in 2026.5.22 (`embeddingProviders` capability
  contract; `defineToolPlugin` + `openclaw plugins build|validate|init`
  for typed simple tool plugins) suggest OpenClaw is opening the
  plugin-author surface. Unverified: whether the typed plugin path goes
  through a documented signing/trust model — the 2026-05-13 finding's
  "skill archive trust model is gated but undocumented" question is
  unresolved, and the plugin-author path raises the same question for
  typed tool plugins.
- Browser snapshot SSRF policy (#78526) — the underlying SSRF policy
  default and how it interacts with operator-configured allow-domains is
  worth pulling next cycle.
- 2026.5.22's "remove the old sender-owner tool gating path so configured
  tools stay visible for trusted sessions" — does this loosen something
  the 2026-05-13 per-sender tool policies tightened, or are they
  complementary? Worth re-reading PR #66933 alongside the 2026.5.22
  change to confirm.
- v2026.5.26 also includes "release verification" stanzas (npm tarball
  integrity, full CI report URLs, evidence manifests). The 2026.5.20
  release notes embedded a full chain of CI run URLs and an evidence
  manifest. This is supply-chain hygiene evidence — could be its own
  finding next cycle.

---

## Cross-Provider Notes (for the eventual digest, not editorial here)

- All three providers are reaching for the same primitive — "authority
  over what the agent or its inputs can do" — through different surfaces:
  OpenClaw at the inbound-sender layer (allowlists pre-dispatch),
  Agent Zero at the host-runtime layer (vision-verified host actions),
  OpenHands at the org-member layer (per-member private MCP / ACP env,
  org-admin LLM profiles). This is a candidate cross-provider thread for
  the next digest.
- Two of three providers shipped breaking-or-renaming work in window
  (Agent Zero: `document_artifact` → `office_artifact`, legacy speech
  APIs removed; OpenClaw: removed old sender-owner tool gating path,
  retired Groq/GitHub Copilot/OpenAI/xAI/old-Claude catalog entries with
  doctor migration). The pattern is "ship the rename / removal with a
  documented migration in the same release" rather than long deprecation
  windows. That's a frontier-shape detail worth tracking — these
  projects are moving fast enough that they prefer migrations over
  shims.
- OpenHands has no tagged release in window, which means a release-floor
  consumer of OpenHands sees none of the enterprise-DC, ACP-UI, or
  org-LLM-profiles work yet. The next OpenHands release (post-1.7.0)
  will be a large consolidation event.

## Receipts

- Source contracts read: `sources/openhands.yml`,
  `sources/agent-zero.yml`, `sources/openclaw.yml`.
- Profiles read: `content/profiles/openhands.md`,
  `content/profiles/agent-zero.md`, `content/profiles/openclaw.md`.
- WebFetch / gh budget consumed: ~16 calls (gh release list × 3,
  gh release view × 6, gh api commits × 2, gh pr view × 4, plus profile
  / contract reads).
- Window: 2026-05-13 inclusive through 2026-05-27 (today). Anchored by
  merge-to-main / published-release date.
