---
provider: hermes-agent
label: Hermes Agent
owner: Nous Research
repo: NousResearch/hermes-agent
window: 2026-06-16..2026-06-23
window_basis: merge-to-default for commits/PRs; published_at for releases
run_dir: runs/2026-06-23-weekly-digest-2026-06-16_2026-06-23-frontier-v0
harvested_at: 2026-06-23
harvester: opus-4.8-harvester
date_verification: ISO timestamps via gh api only; rendered HTML bodies NOT trusted
channel_legend: tagged-release | main-unreleased (ancestry-proven) | preview-or-beta
tags_in_window:
  - v2026.6.19 (Hermes Agent v0.17.0) published_at 2026-06-19T19:39:06Z (created_at 2026-06-19T19:38:59Z), target=main
prior_tag: v2026.6.5 (Hermes Agent v0.16.0 — "The Surface Release") published_at 2026-06-06T00:55:58Z
window_volume: 836 commits to main in window; release self-reports ~1,475 commits / ~800 merged PRs since v0.16.0
---

# Hermes Agent — Harvest 2026-06-16..2026-06-23

## Channel discipline note

The latest tag is `v2026.6.19` (= v0.17.0, "The Reach Release"), published
2026-06-19T19:39:06Z, cut from `main`. The prior binary was `v2026.6.5`
(= v0.16.0), published 2026-06-06. ALL ancestry below is proven by
`gh api .../compare/<base>...<head>` and confirmed by merge-base equality.
Interpretation used consistently: `compare A...B` reports `ahead` when B is
ahead of A. So `compare <commit>...<tag> = ahead` ⇒ tag is ahead of commit ⇒
**commit IS an ancestor of (contained in) the tag**; and
`compare <tag>...<commit> = ahead` ⇒ commit is ahead of tag ⇒
**commit is NOT in the tag (main-unreleased)**.

Date self-dating in the release body ("June 19, 2026") matches the ISO
`published_at`; no year drift this window. All commit dates below are ISO
`committer.date` from the API, not rendered HTML.

---

## Findings

### 2026-06-23-hermes-v0.17.0-reach-release
- date: 2026-06-19T19:39:06Z (published_at)
- tag: v2026.6.19 (Hermes Agent v0.17.0)
- change_type: capability / ecosystem
- channel: **tagged-release** (the tag itself; target=main, created_at 2026-06-19T19:38:59Z)
- section: distribution / capability surface
- accessibility_impact: Large. New reach surfaces — iMessage via Photon Spectrum
  (no Mac relay), Raft agent-network gateway channel, official WhatsApp Business
  Cloud API (no bridge process), SimpleX. Desktop app promoted from preview to
  "serious daily driver" (subagent watch-windows, rebindable shortcuts, VS Code
  Marketplace themes). Dashboard full profile builder + Skills Hub browser rehaul.
  Automation Blueprints let operators schedule without learning cron.
- security_impact: Mixed. Release ships a "security round": fail-closed own-policy
  gateway adapters (#45634), fail-closed approval-button auth on Slack/Feishu/Discord
  with no allowlist (#41226), redact secrets in request debug dumps (#46637),
  withhold host metadata from public status (#45642), block exfil-shaped MCP stdio
  configs before probe (#46083), shell-escape denylist bypass close (#40591),
  urllib3/PyJWT CVE bumps (#40179). See carry-forward + main-unreleased sections —
  the *newer* hardening wave is NOT in this binary.
- operator_implication: v0.17.0 is the binary that finally contains the
  June-13 fail-closed security wave that last window sat main-unreleased past
  v0.16.0 (see carry-forward). But a fresh post-tag security wave (June 21-22),
  responding to a live in-the-wild campaign, is already main-unreleased past this
  binary. Operators on the tagged binary do NOT yet have the 0day mitigations.
- candidate_signal: no (the release itself is a finding, not a signal; specific
  signals are broken out below)
- confidence: high
- receipt: "v0.16.0 put Hermes on your desktop. v0.17.0 is about how far that
  reach extends ... Hermes reached two new channels (iMessage via Photon, and the
  Raft agent network), the desktop app gained substantial new capability,
  subagents can now run in the background ... plus a security round."
  URL: https://github.com/NousResearch/hermes-agent/releases/tag/v2026.6.19

---

### 2026-06-23-hermes-0day-mitigation-wave-main-unreleased
- date: commits 2026-06-21..2026-06-22 (post-tag)
- commits: 7726ce304 (2026-06-22T02:05:27Z), f45ace931 (2026-06-22T02:05:27Z),
  8fcb8136b (2026-06-21T23:39:48Z), 6f0ecf37d (2026-06-21T21:08:06Z),
  100e7be20 (2026-06-22T21:26:48Z), a9c802598 (#8697, 2026-06-21T20:33:48Z),
  8845f3316 (#43719, 2026-06-22T12:21:37Z), 027cb649e (fail-closed memory write)
- change_type: security
- channel: **main-unreleased**. Ancestry proof: `compare v2026.6.19...7726ce304 = ahead`,
  `compare v2026.6.19...f45ace931 = ahead`, `compare v2026.6.19...8fcb8136b = ahead`,
  `compare v2026.6.19...100e7be20 = ahead`, `compare v2026.6.19...6f0ecf37d = ahead`,
  `compare v2026.6.19...8845f3316 = ahead` — every one is ahead of the tag, i.e.
  none is contained in v0.17.0.
- section: security / governance
- accessibility_impact: Negligible (hardening, not features).
- security_impact: **High.** Driven by a *live, in-the-wild* attack: the
  "hermes-0day" / June 2026 MCP-config-persistence campaign. Scanners find exposed
  Hermes dashboards/API servers, drive the root agent to plant a `command: bash`
  MCP entry that appends an attacker SSH key to `authorized_keys`, which cron +
  startup re-execute every tick. Mitigations: dashboard `--insecure` no longer
  disables the auth gate (public bind ALWAYS requires an auth provider; `--insecure`
  kept as a warned no-op); `validate_mcp_server_entry` rejects shell payloads that
  write to OS persistence surfaces (authorized_keys/.ssh/pam.d/sudoers/cron/rc) and
  hard-rejects an IOC blocklist (attacker SSH key + source IPs) at save AND spawn
  time; API_SERVER_KEY network-bind entropy floor raised 8→16; new
  startup security posture audit (warn-on-load) that flags root, SSH
  PasswordAuthentication, container-without-persistent-volume, and
  network-accessible API server with no API_SERVER_KEY.
- operator_implication: This is the carry-forward pattern repeating. The June-13
  fail-closed wave finally tagged in v0.17.0; now an even more urgent campaign-driven
  wave is again main-unreleased past the fresh binary. Operators who deploy the
  v0.17.0 binary and expose a dashboard/API server are still vulnerable to the active
  campaign until the next tag or until they pin `main`. This directly closes the loop
  on the carry-forward "theater" commit (da28d5d11) — that commit gated cp/mv into
  ~/.ssh; this wave is the response to attackers exploiting exactly that surface in
  the wild.
- candidate_signal: **yes** — a live, named, in-the-wild campaign against exposed
  self-hosted agent control planes (dashboard/API server → root agent → MCP
  persistence → authorized_keys → cron re-exec), plus a "warn-on-load posture audit"
  pattern, is exactly Bitter's governance/receipt territory: exposed-control-plane
  is the dominant self-hosted-agent failure mode, and a startup posture signal +
  IOC blocklist is a replayable, auditable control Bitter can own/compare.
- confidence: high
- receipt (7726ce304): "Driven by the June 2026 hermes-0day campaign (r/hermesagent,
  live 854.media instance): scanners find exposed Hermes dashboards/API servers, drive
  the root agent to plant a 'command: bash' MCP entry that appends an attacker SSH key
  to authorized_keys, which cron + startup then re-execute every tick."
  URL: https://github.com/NousResearch/hermes-agent/commit/7726ce304
- receipt (f45ace931): "Surface dangerous host/deployment posture at gateway startup
  so operators get the 'you're exposed' signal the June 2026 MCP-config persistence
  campaign victims never had. Warn-only — never blocks startup ... Checks ... Running
  as root ... SSH daemon with PasswordAuthentication enabled ... container with no
  persistent volume mount over HERMES_HOME ... Network-accessible API server with no
  API_SERVER_KEY."
  URL: https://github.com/NousResearch/hermes-agent/commit/f45ace931

---

### 2026-06-23-hermes-background-async-subagents-tagged
- date: c66ecf0bc 2026-06-15T20:33:12Z (merged just before window edge); release-shipped
- commit/PR: c66ecf0bc (#40946); window follow-ups 0a8f3e21b (#46968, 2026-06-16),
  ea8a8b4af (#49734, 2026-06-20)
- change_type: capability / workflow
- channel: **tagged-release** (contained in v2026.6.19). Ancestry:
  `compare c66ecf0bc...v2026.6.19 = ahead` and merge_base==c66ecf0bc ⇒ ancestor of tag.
  Was NOT in prior binary: `compare c66ecf0bc...v2026.6.5 = behind`.
- section: capability / multi-agent
- accessibility_impact: High. `delegate_task(background=true)` dispatches a subagent
  that runs in background and returns a handle immediately; result re-enters the
  conversation as a new turn when it finishes. Window follow-up ea8a8b4af (#49734)
  extends to **background fan-out**: N parallel subagents, one consolidated return,
  automatic for any top-level delegation (model no longer decides whether to background).
- security_impact: Governance question. The default subagent wall-clock timeout was
  REMOVED (#45149, in this release). Window has delegation-safety fixes
  (56255f83f "stop delegate cascade from deleting the parent session") and Kanban
  worker-reclaim hardening (b9e521da2 "hold reclaim while worker still alive";
  d164ed032 #50366 claim-lock-aware reclaim; e581740aa #50331 single-writer dispatch
  lock) — but NO re-introduction of a wall-clock cap or dedicated runaway-detection
  for background subagents was found in window (see carry-forward item 4).
- operator_implication: Background + fan-out subagents with NO wall-clock ceiling is a
  runaway-cost / runaway-worker exposure. The safety work this window is Kanban-worker
  reclaim (liveness/heartbeat) and cascade-delete prevention, not a subagent time/cost
  bound. Operators running unattended background delegation should assume no built-in
  wall-clock guard.
- candidate_signal: **yes (secondary)** — "fire-and-forget + fan-out background
  subagents with the default wall-clock timeout removed and no replacement runaway
  bound" is a governance/receipt gap Bitter can own: where is the cost ceiling, the
  runaway-worker detector, the replayable record of what a backgrounded agent did?
- confidence: high
- receipt: "delegate_task(background=true) now dispatches a subagent that runs in the
  background and returns a handle immediately. You and the model keep working while it
  churns, and the full result re-enters the conversation as a new turn the moment it
  finishes."
  URL: https://github.com/NousResearch/hermes-agent/releases/tag/v2026.6.19 (#40946, #46968)
- receipt (fan-out): "A delegate_task fan-out now runs in the background ... and when
  all subagents finish, their summaries come back together as one consolidated block ...
  The model no longer decides whether to background; it's automatic for any top-level
  delegation."
  URL: https://github.com/NousResearch/hermes-agent/pull/49734

---

### 2026-06-23-hermes-managed-scope-etc-hermes
- date: PR #49098 merged 2026-06-19T14:46:34Z
- commit/PR: #49098
- change_type: governance / runtime
- channel: **tagged-release** (merged before tag cut 2026-06-19T19:38:59Z; release body
  lists it under Fleet/Relay)
- section: governance / fleet
- accessibility_impact: Org/fleet-facing. New **managed scope**: an
  administrator-pushed, user-immutable layer of config and secrets read from a
  root-owned `/etc/hermes`, winning per-leaf-key over `~/.hermes/config.yaml` and
  `~/.hermes/.env`.
- security_impact: This is the first centralized, root-owned, non-root-user-immutable
  policy pin in Hermes — directly relevant to the profile's standing note that "Hermes
  governs through allowlists, not SSO or role services." IT can now pin a baseline
  (provider, shared base URL, `security.redact_secrets`) a non-root user can't override.
- operator_implication: Changes the profile's `avoid_for` ("Skip if you need
  centralized identity tooling") — Hermes now has a centralized, OS-permission-backed
  config/secret pin. Pairs with multiplex phase-2 fail-closed profile credential
  isolation (#48273 / f538470cf) and gateway-gateway relay (phases 0-3).
- candidate_signal: **yes (tertiary)** — centralized admin-pinned immutable policy is a
  governance posture shift worth a profile claim; whether it becomes a real
  org-control surface (and how it interacts with the exposed-dashboard threat above) is
  the watch.
- confidence: high
- receipt: "Adds a managed scope — an administrator-pushed, user-immutable layer of
  config and secrets read from a root-owned system directory (default /etc/hermes) that
  wins per-leaf-key over the user's ~/.hermes/config.yaml and ~/.hermes/.env. For
  fleet/org deployments where IT needs to pin a baseline ... a non-root user can't override."
  URL: https://github.com/NousResearch/hermes-agent/pull/49098

---

### 2026-06-23-hermes-memory-batch-atomic-and-write-approval
- date: #48507 (memory batch); #38199/#43354 (write_approval) — release-shipped
- commit/PR: #48507, #38199, #43354
- change_type: capability / governance
- channel: **tagged-release** (in v2026.6.19 per release body)
- section: tools / memory / governance
- accessibility_impact: Moderate. `memory` tool gains an `operations` array applying a
  batch of add/replace/remove atomically against the final character budget (free space
  + add in one call even if an add alone would overflow). Also: memory/skill **write
  approval** gate (default OFF) — a boolean `write_approval` REPLACES the tri-state
  `write_mode`.
- security_impact: Governance simplification — write-approval is now a single boolean,
  defaulting off. Worth tracking because it touches the self-improving-skill write path
  the profile cares about.
- operator_implication: Atomic memory edits reduce mid-edit failure; the write-approval
  boolean is a small governance-surface change (default-off) operators should note if
  they relied on `write_mode` tri-state.
- candidate_signal: no
- confidence: high
- receipt: "The memory tool gained an operations array that applies a batch of
  add/replace/remove edits atomically against the final character budget."
  URL: https://github.com/NousResearch/hermes-agent/pull/48507

---

## Carry-forward check (last window's main-unreleased-past-v0.16.0 items)

Prior binary = v2026.6.5 (v0.16.0, 2026-06-06). New binary this window = v2026.6.19
(v0.17.0, 2026-06-19). For each carry-forward commit: confirmed it was NOT in v2026.6.5
(`compare <commit>...v2026.6.5 = behind`) and IS now contained in v2026.6.19
(`compare <commit>...v2026.6.19 = ahead`, AND merge_base(commit, tag) == commit).

1. **cp-into-~/.ssh/authorized_keys auto-approval fix ("theater" commit)**
   - commit da28d5d113956dcf803d5cff552a120740a96a59, dated 2026-06-13T21:35:27Z,
     msg: "fix(security): gate cp/mv/install into ~/.ssh, credential, and shell-rc files"
   - **NOW TAGGED in v2026.6.19.** Ancestry: `compare da28d5d11...v2026.6.19 = ahead`,
     merge_base == da28d5d113956dcf803d5cff552a120740a96a59; `compare da28d5d11...v2026.6.5 = behind`.
   - Note: this exact surface (authorized_keys append) is what the live hermes-0day
     campaign exploits — see main-unreleased finding above.

2. **/api/status host-path + gateway-PID leak fix**
   - commit 3380563d946b26cb5ae630811f95d2833ba5254b, dated 2026-06-13T14:18:59Z,
     msg: "fix(security): stop /api/status leaking host paths and PID on gated binds"
   - **NOW TAGGED in v2026.6.19.** `compare 3380563d9...v2026.6.19 = ahead`,
     merge_base == commit; `compare 3380563d9...v2026.6.5 = behind`.
     (Release body: "withhold host metadata from public status" #45642.)

3. **fail-open own-policy chat adapters now fail closed without allowlist**
   - commit fc463545804692c16f842aac58d681d96dd3fe6a, dated 2026-06-13T14:18:54Z,
     msg: "fix(security): fail closed when an own-policy gateway adapter has no allowlist"
   - **NOW TAGGED in v2026.6.19.** `compare fc4635458...v2026.6.19 = ahead`,
     merge_base == commit; `compare fc4635458...v2026.6.5 = behind`.
     (Release body: "Fail closed on own-policy gateway adapters" #45634.)

4. **fire-and-forget async background subagents + removal of default 600s subagent
   wall-clock timeout — runaway-worker-detection follow-up?**
   - commit c66ecf0bc30f333eac25113b38eca6b5197e7518, dated 2026-06-15T20:33:12Z,
     msg: "feat(delegation): async background subagents via delegate_task(background=true) (#40946)"
   - **NOW TAGGED in v2026.6.19.** `compare c66ecf0bc...v2026.6.19 = ahead`,
     merge_base == commit; `compare c66ecf0bc...v2026.6.5 = behind`.
   - Wall-clock timeout removal also shipped in v0.17.0 (#45149: "remove the default
     subagent wall-clock timeout").
   - **Runaway-worker-detection follow-up verdict: NONE found this window.** The
     delegation/worker-safety work in window is: 56255f83f (stop delegate cascade from
     deleting parent session, 2026-06-19), b9e521da2 (#— hold reclaim while worker still
     alive, 2026-06-12, KANBAN), d164ed032 (#50366 claim-lock-aware reclaim, main-unreleased
     2026-06-21), e581740aa (#50331 single-writer dispatch lock, main-unreleased 2026-06-21),
     ea8a8b4af (#49734 background FAN-OUT — expands the surface, does NOT add a time/cost bound).
     No commit re-adds a subagent wall-clock cap or a dedicated runaway-cost/runaway-worker
     detector for background subagents. The governance gap from last window persists and
     widens (fan-out added on top).

**Carry-forward summary:** All four prior main-unreleased items are now contained in the
v0.17.0 tag (v2026.6.19). The fail-closed security trio (1–3) tagged cleanly. The
background-subagent capability (4) tagged WITH the timeout removal and WITHOUT any
runaway-detection replacement; the surface widened via background fan-out.

## Novelty vs profile

Profile (`content/profiles/hermes-agent.md`, last_updated 2026-06-03) covers Curator,
Kanban hallucination gate, /goal, v0.14.0 distribution + `hermes proxy` + Honcho identity
mapping, redaction default-on, allowlists, mistralai quarantine. It does NOT yet cover:
**(a)** the live in-the-wild hermes-0day MCP-persistence campaign + mitigation wave
(NEW, main-unreleased, highest novelty); **(b)** background / async / fan-out subagents
with the wall-clock timeout removed (NEW capability + governance gap); **(c)** Managed
scope `/etc/hermes` admin-pinned user-immutable config/secrets — directly contradicts the
profile's `avoid_for` "no centralized identity/role tooling" line (NEW governance posture);
**(d)** new reach channels iMessage/Photon, Raft, official WhatsApp Cloud API, SimpleX;
**(e)** desktop app maturation (subagent watch-windows); **(f)** Automation Blueprints;
**(g)** memory-tool atomic batch ops + `write_approval` boolean replacing `write_mode`.
Items (a), (b), (c) are profile-claim-worthy this cycle.
