---
schema_version: bitter.frontier_harvest.v0
provider: openclaw
label: OpenClaw
window: 2026-06-16/2026-06-23
run: 2026-06-23-weekly-digest-2026-06-16_2026-06-23-frontier-v0
evidence_floor: release_note
surface_class: open_source_commits
harvested_at: 2026-06-23
harvester: opus-4-8-1m
releases_in_window:
  stable:
    - tag: v2026.6.8
      published_at: 2026-06-16T16:32:26Z
    - tag: v2026.6.9
      published_at: 2026-06-21T01:44:28Z
  beta:
    - tag: v2026.6.8-beta.2
      published_at: 2026-06-16T01:50:19Z
    - tag: v2026.6.9-beta.1
      published_at: 2026-06-19T05:52:39Z
    - tag: v2026.6.10-beta.1
      published_at: 2026-06-21T09:12:41Z
    - tag: v2026.6.10-beta.2
      published_at: 2026-06-22T09:36:28Z
channel_counts:
  stable: 2
  beta: 4
---

# OpenClaw Harvest — 2026-06-16 to 2026-06-23

Primary surface: `gh api repos/openclaw/openclaw/releases`, filtered to in-window
`published_at`. Evidence floor is `release_note` per profile doctrine (commit
volume: this window's stable v2026.6.9 audited record alone covers 422 merged
PRs). Load-bearing items dived to the cited PR via `gh api .../pulls/<n>`.

Six releases shipped in window: **2 stable** (v2026.6.8, v2026.6.9) and **4 beta**
(v2026.6.8-beta.2, v2026.6.9-beta.1, v2026.6.10-beta.1, v2026.6.10-beta.2). The key
OpenClaw distinction is tag-resolved: a change is only "shipped to ordinary
operators" once it lands in a non-prerelease `v2026.6.x` tag. PR merge dates are
recorded where a PR was verified; the editorially-correct in-window event for a
carry-forward item is the **stable-release publish date**, not the merge date.

---

## Carry-forward subsection (HIGH VALUE)

### CF-1 — WCAG 2.1 AA accessibility pass reached STABLE (the headline carry-forward)

- **Verdict: YES — the a11y pass promoted from beta-only to stable this window.**
- Last window it shipped in **v2026.6.7-beta.1 only**, NOT stable. This window it
  appears in the **v2026.6.8 STABLE** audited PR record (and in v2026.6.8-beta.2).
- PR **#89822** `fix(a11y): B-1+B-2+B-3 — contrast, focus states, minimum font sizes`
  merged **2026-06-13T07:57:18Z** (pre-window). The promotion-to-stable event —
  **v2026.6.8 published 2026-06-16T16:32:26Z** — is in-window. That is the
  operator-visible change: dark-mode contrast >=4.5:1, keyboard focus rings, and a
  12px font floor are now in a release an ordinary operator runs by default, not a
  beta opt-in.
- VERBATIM receipt (v2026.6.8 stable PR list):
  > **PR #89822** fix(a11y): B-1+B-2+B-3 — contrast, focus states, minimum font sizes. Thanks @BunsDev.
  URL: https://github.com/openclaw/openclaw/releases/tag/v2026.6.8 ; PR: https://github.com/openclaw/openclaw/pull/89822
- Verified the PR does NOT re-appear in v2026.6.9 stable (0 occurrences), so this is
  a clean single promotion, not double-counting.
- candidate_signal: **yes** (see finding F-1).

### CF-2 — Key-free web-search providers: consent-over-default, now restated in two stable tags

- Last window: key-free web-search providers stopped being auto-selected
  (v2026.6.8, consent-over-default). This window confirms and re-affirms it.
- PR **#93616** `Keep key-free web search providers opt-in` appears in BOTH stable
  v2026.6.8 and stable v2026.6.9.
- VERBATIM (v2026.6.8 stable highlights):
  > **Predictable web search defaults:** key-free providers such as Parallel Free, DuckDuckGo, Ollama, and Codex Hosted Search remain explicit opt-ins rather than surprising automatic fallbacks. (#93616)
  URL: https://github.com/openclaw/openclaw/releases/tag/v2026.6.8
- Note nuance: v2026.6.9 *adds* Codex Hosted Search as an available provider
  (#93446) while keeping the key-free set opt-in — capability added without
  relaxing the consent posture.
- candidate_signal: **no** (continuation of an established posture, no new operator action).

### CF-3 — Pinned-commit / ClawHub skill-install trust: provenance now persisted, reached stable

- Last window flagged pinned-commit ClawHub skill installs and an open question on
  the skill-archive trust model.
- This window: ClawHub skill installs now **retain verified source provenance**, and
  it reached **stable v2026.6.9**. PRs #93283 (persist provenance), #93506 (trust
  verified ClawHub source), #93314 (preserve origin on readback), #93532 (expose
  verified source in `skill verify`).
- VERBATIM (v2026.6.9 stable highlights):
  > **More useful search and skills:** Codex Hosted Search is available, key-free search providers remain deliberate opt-ins, and ClawHub skill installs retain verified source provenance. (#93446, #93616, #93283, #93506)
  URL: https://github.com/openclaw/openclaw/releases/tag/v2026.6.9
- This partially advances the long-standing open question "are skill archives
  signature-checked / provenance-tracked?" — provenance is now *recorded and
  surfaced in verify output*. Uploaded-archive signing/sandbox model still not
  documented; the gate remains the relevant control.
- candidate_signal: **borderline** (see finding F-3).

### CF-4 — Security boundary sweep / fail-closed exec approvals: continuation

- Last window: a security boundary sweep with fail-closed exec approvals
  (v2026.6.6). This window shows a steady continuation, not a new sweep:
  HTTP session/model override surfaces now require admin (PRs #92646, #92651,
  #93443 — `block internal HTTP session overrides`), open-DM tool exposure added
  to the security audit matrix (#92883), `/btw` CLI fallback fails closed (#92226).
  v2026.6.10-beta.1 adds bounded-input rejection across chat/tool/package/response
  lengths and removes device-backed node pairings (#90373).
- candidate_signal: **no** as a standalone (routine hardening cadence), but feeds
  the cross-provider authority-hygiene pattern.

---

## Findings

### F-1 — 2026-06-23-openclaw-wcag-aa-reaches-stable

- id: 2026-06-23-openclaw-wcag-aa-reaches-stable
- date: 2026-06-16 (v2026.6.8 stable publish)
- tag/PR: v2026.6.8 stable / PR #89822 (merged 2026-06-13)
- change_type: accessibility
- channel: **stable** (promoted from beta-only last window)
- section: Control UI / dashboard / WebChat visual surface
- accessibility_impact: **High.** This is the calibration source's signature
  finding. WCAG 2.1 AA contrast (dark-mode >=4.5:1), visible keyboard focus rings,
  and a 12px minimum font floor across the prior 136-element pass are now in the
  default stable build. For low-vision and keyboard-only operators, the agent
  Control UI crosses from "capable but partly unusable" to "meets a recognized
  baseline" — without an opt-in beta. Names what got easier (reading/keyboard nav),
  who can use it now (low-vision + keyboard-only operators), and authority stayed
  visible (no control was hidden to achieve it).
- security_impact: none.
- operator_implication: Operators standardizing on OpenClaw's browser Control UI for
  non-expert users can now cite a shipped accessibility baseline rather than a beta
  flag. Default actionability for an accessibility_change is `study`; here it
  escalates slightly because it's the stable-promotion, not the original pass.
- candidate_signal: **yes** — a capability becoming reachable to a population
  previously excluded, with a receipt, on the stable channel. This is exactly the
  accessibility-rule shape (what got easier / who can use it / authority visible).
- confidence: high (PR present in stable PR list; merge date and absence from 6.9
  both verified via `gh api`).
- VERBATIM receipt:
  > **PR #89822** fix(a11y): B-1+B-2+B-3 — contrast, focus states, minimum font sizes. Thanks @BunsDev.
  URL: https://github.com/openclaw/openclaw/releases/tag/v2026.6.8

### F-2 — 2026-06-23-openclaw-session-workspace-rail-stable

- id: 2026-06-23-openclaw-session-workspace-rail-stable
- date: 2026-06-21 (v2026.6.9 stable)
- tag/PR: v2026.6.9 stable / PR #92856 `feat(webui): add session workspace rail`,
  PR #91952 `feat(status): surface plugin health`, PR #92837 Android live chat
  context, PR #93387 iOS Watch controls.
- change_type: capability / accessibility (distribution surface)
- channel: **stable**
- section: Control UI + native mobile clients
- accessibility_impact: Medium. The Control UI gains a session workspace rail and
  surfaces extension/plugin health inline; Android shows live chat context usage;
  iOS adds Watch controls. These move agent state and reachability further into
  familiar visual/native surfaces — the profile's core thesis (familiar access with
  visible state). Watch controls in particular extend the "start/pause/inspect from
  where you already are" reach.
- security_impact: none direct; plugin-health visibility marginally aids operator
  awareness of what's loaded.
- operator_implication: Operators running OpenClaw as a humane front-end for
  non-terminal users get more visible session/plugin state out of the box. Observe;
  not yet a reconfiguration trigger.
- candidate_signal: **no** — incremental surface polish, consistent with existing
  profile posture; no new authority or capability frontier crossed.
- confidence: high (stable highlights + PR list).
- VERBATIM receipt:
  > **More capable web and native clients:** the Control UI adds a session workspace rail and extension health, iOS adds Watch controls, and Android shows chat context. (#92856, #91952, #93387, #92837)
  URL: https://github.com/openclaw/openclaw/releases/tag/v2026.6.9

### F-3 — 2026-06-23-openclaw-clawhub-skill-provenance-stable

- id: 2026-06-23-openclaw-clawhub-skill-provenance-stable
- date: 2026-06-21 (v2026.6.9 stable)
- tag/PR: v2026.6.9 stable / PRs #93283, #93506, #93314, #93532
- change_type: security / ecosystem
- channel: **stable**
- section: skills / ClawHub install trust
- accessibility_impact: Low-medium. Trust legibility is an accessibility concern
  under this source's lens — a non-expert installing a skill can now see verified
  source provenance in `skill verify` output, making the install decision more
  understandable without hiding the trust boundary.
- security_impact: Medium. Provenance is now persisted and survives readback, and
  verified ClawHub source is exposed in verify output. This advances the
  long-standing open question on skill-install trust. It does NOT close the
  separate uploaded-archive (`skills.install.allowUploadedArchives`) signing /
  sandbox-isolation question.
- operator_implication: Operators can now make ClawHub skill-install decisions
  against recorded, verifiable provenance rather than opaque installs. Test the
  `skill verify` output before trusting catalog skills in a public deployment.
- candidate_signal: **borderline-yes** — it changes the next action (verify
  provenance before install) and partially resolves a tracked open question, but is
  scoped to ClawHub-sourced skills and stops short of the uploaded-archive model.
  Promote only if the digest needs a second OpenClaw signal; otherwise hold as a
  strong finding.
- confidence: high (stable highlights + PR list; PR titles read directly).
- VERBATIM receipt:
  > ClawHub skill installs retain verified source provenance. (#93446, #93616, #93283, #93506)
  > **PR #93532** Expose verified ClawHub source in skill verify output. Thanks @momothemage.
  URL: https://github.com/openclaw/openclaw/releases/tag/v2026.6.9

### F-4 — 2026-06-23-openclaw-http-override-admin-gating-stable

- id: 2026-06-23-openclaw-http-override-admin-gating-stable
- date: 2026-06-16 / 2026-06-21 (v2026.6.8 + v2026.6.9 stable)
- tag/PR: v2026.6.8 PR #92646 (admin for HTTP model overrides, merged 2026-06-13),
  PR #92651 (admin for HTTP session kills, merged 2026-06-13); v2026.6.9
  PR #93443 (`block internal HTTP session overrides`, merged 2026-06-16),
  PR #92883 (`audit open dm tool exposure`, merged 2026-06-16).
- change_type: security
- channel: **stable**
- section: gateway / HTTP control surface / security audit
- accessibility_impact: Low (positive): the security-audit matrix now warns on open
  DM tool exposure too, making a previously silent risk legible to operators.
- security_impact: Medium. HTTP session-kill and model-override surfaces now require
  admin; internal HTTP session overrides are blocked; the open-DM path is now
  covered by the same exposure warnings as open groups. Tightens the remote control
  plane and closes an asymmetry (open groups warned, open DMs didn't).
- operator_implication: Operators exposing the gateway over HTTP should re-verify
  that session/model override automation runs with admin privilege; public-facing
  deployments with open DM policies should re-run `security audit` to see new
  critical warnings for elevated/runtime/fs tools over DMs.
- candidate_signal: **no** standalone — routine authority hardening matching the
  established v2026.6.6 sweep posture; contributes to the cross-provider
  control-plane-hygiene pattern rather than standing alone.
- confidence: high (PR titles and merge dates verified via `gh api`).
- VERBATIM receipt:
  > **PR #93443** fix(gateway): block internal HTTP session overrides.
  > **PR #92883** fix(security): audit open dm tool exposure.
  URL: https://github.com/openclaw/openclaw/releases/tag/v2026.6.9

### F-5 — 2026-06-23-openclaw-codex-auto-plugin-approvals-stable

- id: 2026-06-23-openclaw-codex-auto-plugin-approvals-stable
- date: 2026-06-21 (v2026.6.9 stable)
- tag/PR: v2026.6.9 stable / PR #92625 `feat(codex): add auto plugin approvals`,
  plus remote-node `exec` exposed to Codex (#93654), app-server SecretRefs (#94324).
- change_type: capability / workflow / security-adjacent
- channel: **stable**
- section: Codex integration / approvals
- accessibility_impact: Low. Reduces approval friction in the Codex path.
- security_impact: **Worth watching.** "Automatic plugin approvals" reduces a human
  gate. This runs counter to the fail-closed/consent-over-default posture seen
  elsewhere this window — automatic approval is convenience that could erode an
  authority checkpoint. v2026.6.10-beta.2 (#94545) separately ensures composed hook
  registries keep trusted tool policies for approval-sensitive flows, suggesting the
  team is aware of the approval surface's fragility.
- operator_implication: Operators using the Codex integration should confirm what
  "automatic plugin approvals" actually auto-approves and whether it can be scoped
  or disabled, before treating plugin loads as gated. This is the one item this
  window that loosens rather than tightens a gate.
- candidate_signal: **borderline** — interesting precisely because it cuts against
  the consent-over-default grain; flag as a watch item / tension, not a clean
  positive signal. Confidence in operator impact is limited by release-note
  granularity (did not dive the PR diff).
- confidence: medium (release-note level; not commit-diff reviewed).
- VERBATIM receipt:
  > **A stronger Codex integration:** Codex gains automatic plugin approvals, GPT-5.3 Spark OAuth routing, remote-node `exec` as a dynamic tool... (#92625, #89133, #93654, #91767, #93287)
  URL: https://github.com/openclaw/openclaw/releases/tag/v2026.6.9

### F-6 — 2026-06-23-openclaw-standalone-provider-plugins-stable

- id: 2026-06-23-openclaw-standalone-provider-plugins-stable
- date: 2026-06-21 (v2026.6.9 stable)
- tag/PR: v2026.6.9 stable / PR #93470 (externalized official providers as
  independent npm packages; Gateway discovers installed channel plugins at startup).
- change_type: ecosystem / distribution_surface
- channel: **stable**
- section: plugins / installs
- accessibility_impact: Low-medium. First-class npm provider packages and startup
  discovery of installed channel plugins reduce the coupling between core upgrades
  and provider/channel availability — fewer "upgrade broke my channel" surprises.
- security_impact: Neutral-to-watch: a broader externally-installed plugin surface
  expands the trust perimeter; pairs with the provenance work (F-3) as the
  counterweight.
- operator_implication: Operators can pin/update provider and channel plugins
  independently of core. Observe.
- candidate_signal: **no** — ecosystem plumbing; observe per default actionability.
- confidence: high (stable highlights + PR list).
- VERBATIM receipt:
  > **Standalone official provider plugins:** external provider packages are now first-class npm releases, externally installed channel plugins load at Gateway startup... (#93470)
  URL: https://github.com/openclaw/openclaw/releases/tag/v2026.6.9

### F-7 — 2026-06-23-openclaw-richer-channel-delivery-stable (context finding)

- id: 2026-06-23-openclaw-richer-channel-delivery-stable
- date: 2026-06-16 / 2026-06-21 (both stable tags)
- tag/PR: v2026.6.8 + v2026.6.9 / Telegram rich HTML/tables/blockquotes/stickers
  (#92679, #93286, #93164, #93124, #93130), WhatsApp ACP bindings (#92513).
- change_type: capability / accessibility (everyday_use)
- channel: **stable**
- section: channel plugins (Telegram, WhatsApp)
- accessibility_impact: Medium. Telegram/WhatsApp are the "familiar surfaces"
  central to this source's thesis; richer, less-brittle delivery (structured tables,
  lists, expandable blockquotes, preserved line breaks, sticker paths) makes agent
  output more readable in the channels everyday users already live in.
- security_impact: none.
- operator_implication: Operators running OpenClaw as a chat-channel front-end get
  more faithful rendering; low-burden quality-of-life. Observe.
- candidate_signal: **no** — sustained polish along an established axis.
- confidence: high.
- VERBATIM receipt:
  > **Richer Telegram delivery:** Telegram now sends rich HTML, preserves rich markdown and sticker paths, renders progress drafts and command output more faithfully... (#93286, #93164, #93124, #93364, #93130, #93088, #93281, #94891, #94856)
  URL: https://github.com/openclaw/openclaw/releases/tag/v2026.6.9

### F-8 — 2026-06-23-openclaw-beta-only-fast-talks-and-input-bounding

- id: 2026-06-23-openclaw-beta-only-fast-talks-and-input-bounding
- date: 2026-06-21 / 2026-06-22 (v2026.6.10-beta.1, -beta.2 — BETA, NOT stable)
- tag/PR: v2026.6.10-beta.2 PR #85104 `feat: fast talks auto mode`;
  v2026.6.10-beta.1 bounded-input rejection (#95066/#95078/#95085/#95090) and
  device-backed node pairing removal (#90373).
- change_type: capability / reliability / security
- channel: **beta** (v2026.6.10 series has no stable tag in-window)
- section: agent runtime / network boundaries
- accessibility_impact: Low. Auto fast-mode for short conversational turns could
  improve perceived responsiveness for casual users; not yet stable.
- security_impact: Beta-only: unsafe chat/tool/package/response lengths now rejected;
  device-backed node pairings removed; SSH tunnel preflight loopback-scoped.
- operator_implication: **Do not assume these are in stable.** They are beta-only
  this window. Track whether v2026.6.10 promotes to a stable tag next window.
- candidate_signal: **no** — beta, and either polish or routine hardening.
- confidence: high (tags confirmed prerelease via `gh api`).
- VERBATIM receipt:
  > **Automatic fast mode for talks:** OpenClaw can enable fast mode for short conversational turns, then return to normal mode for longer runs with bounded fallback and delivery behavior. (#85104)
  URL: https://github.com/openclaw/openclaw/releases/tag/v2026.6.10-beta.2

---

## Novelty vs profile

Profile `content/profiles/openclaw.md` (last_updated 2026-06-03) covers
per-sender/per-agent tool policies, content-boundary pre-dispatch hardening,
skill-archive gating (undocumented trust model), gateway auth rate-limiting,
and the onboarding wayfinding line. **Novel in this window relative to the
profile:**

1. **The WCAG 2.1 AA pass crossing into a STABLE release (F-1/CF-1).** The profile
   does not yet record any accessibility claim of this kind; the calibration
   source's signature accessibility work is now in the default build. NOVEL and
   high-value — strongest profile-update candidate.
2. **ClawHub skill-install provenance now persisted + surfaced in `skill verify`
   (F-3/CF-3).** The profile's open question "are skill archives signature-checked
   or provenance-tracked?" is partially answered for ClawHub-sourced skills. NOVEL
   (advances a tracked open question).
3. **Codex automatic plugin approvals (F-5)** — NOVEL and notable as the one gate
   *loosened* this window, in tension with the profile's consent-over-default and
   fail-closed posture. Worth a profile watch-next line.
4. **Standalone provider plugins / startup channel-plugin discovery (F-6)** — NOVEL
   distribution-surface change decoupling channel availability from core upgrades.

Not novel / confirmatory: richer Telegram/WhatsApp delivery (F-7), key-free
web-search consent (CF-2), HTTP-override admin gating (F-4) all continue
established profile postures.

## Dedupe note

PR #89822 (a11y) appears in both v2026.6.8 and v2026.6.8-beta.2 PR lists — counted
once, attributed to the stable v2026.6.8 promotion. Web-search opt-in (#93616) and
ClawHub provenance (#93283) appear in both stable tags — treated as a single
sustained posture, attributed to first stable appearance. Verified #89822 does not
recur in v2026.6.9 stable (0 occurrences).
