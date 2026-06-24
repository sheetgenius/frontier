---
schema_version: bitter.frontier_profile.v0
profile_id: openclaw
label: OpenClaw
owner: OpenClaw
source_contract: sources/openclaw.yml
homepage: https://openclaw.ai
docs: https://docs.openclaw.ai/
tagline: "Familiar access with the authority left visible -- until one gate quietly opened."
compared_with:
  - codex
x:
  project: openclaw
  maintainers:
    - handle: onusoz
      name: Onur Solmaz
repo: https://github.com/openclaw/openclaw
surface_class: open_source_commits
evidence_floor: release_note
status: active_watch
last_updated: 2026-06-23
last_full_review: 2026-06-03
claims:
  - id: channel-recovery-self-healing
    finding_id: 2026-05-07-openclaw-everyday-agent-surfaces
    last_verified: 2026-05-07
    status: active
  - id: live-exec-output-bounded
    finding_id: 2026-05-07-openclaw-everyday-agent-surfaces
    last_verified: 2026-05-07
    status: active
  - id: subagent-security-boundary-docs
    finding_id: 2026-05-07-openclaw-everyday-agent-surfaces
    last_verified: 2026-05-07
    status: active
  - id: per-agent-message-restrictions
    finding_id: 2026-05-12-openclaw-agent-permissions-and-onboarding
    last_verified: 2026-05-12
    status: active
  - id: skill-archive-upload-gated
    finding_id: 2026-05-12-openclaw-agent-permissions-and-onboarding
    last_verified: 2026-05-12
    status: active
  - id: memory-dreaming-cap
    finding_id: 2026-05-12-openclaw-agent-permissions-and-onboarding
    last_verified: 2026-05-13
    status: active
  - id: cli-onboarding-wayfinding
    finding_id: 2026-05-12-openclaw-agent-permissions-and-onboarding
    last_verified: 2026-05-12
    status: active
  - id: voice-channel-allowlist
    finding_id: 2026-05-12-openclaw-agent-permissions-and-onboarding
    last_verified: 2026-05-12
    status: active
  - id: per-sender-tool-policies
    finding_id: 2026-05-13-openclaw-per-sender-tool-policies
    last_verified: 2026-05-13
    status: active
  - id: memory-wiki-scope-tightening
    finding_id: 2026-05-13-openclaw-per-sender-tool-policies
    last_verified: 2026-05-13
    status: active
  - id: openai-cli-auth-default-shift
    finding_id: 2026-05-13-openclaw-per-sender-tool-policies
    last_verified: 2026-05-13
    status: active
  - id: scoped-compaction-preservation
    finding_id: 2026-05-13-openclaw-per-sender-tool-policies
    last_verified: 2026-05-13
    status: active
  - id: pre-dispatch-sender-allowlists
    finding_id: 2026-05-27-openclaw-content-boundary-hardening-suite
    last_verified: 2026-05-27
    status: active
  - id: browser-snapshot-ssrf-policy
    finding_id: 2026-05-27-openclaw-content-boundary-hardening-suite
    last_verified: 2026-05-27
    status: active
  - id: system-event-text-sanitization
    finding_id: 2026-05-27-openclaw-content-boundary-hardening-suite
    last_verified: 2026-05-27
    status: active
  - id: external-content-wrapping
    finding_id: 2026-05-27-openclaw-content-boundary-hardening-suite
    last_verified: 2026-05-27
    status: active
  - id: gateway-auth-ratelimit-default-on
    finding_id: 2026-05-27-openclaw-content-boundary-hardening-suite
    last_verified: 2026-05-27
    status: active
  - id: skill-workshop-and-stable-reliability
    finding_id: 2026-06-03-openclaw-stable-reliability-features
    last_verified: 2026-06-03
    status: active
  - id: wcag-aa-control-ui-stable
    finding_id: 2026-06-23-openclaw-wcag-aa-reaches-stable
    last_verified: 2026-06-23
    status: active
  - id: codex-auto-plugin-approvals
    finding_id: 2026-06-23-openclaw-codex-auto-plugin-approvals-stable
    last_verified: 2026-06-23
    status: active
  - id: clawhub-skill-provenance-surfaced
    finding_id: 2026-06-23-openclaw-clawhub-skill-provenance-stable
    last_verified: 2026-06-23
    status: active
posture_basis:
  capability:
    - 2026-05-07-openclaw-everyday-agent-surfaces
    - 2026-05-12-openclaw-agent-permissions-and-onboarding
    - 2026-05-13-openclaw-per-sender-tool-policies
    - 2026-05-27-openclaw-content-boundary-hardening-suite
    - 2026-06-23-openclaw-codex-auto-plugin-approvals-stable
  accessibility:
    - 2026-05-07-openclaw-everyday-agent-surfaces
    - 2026-05-12-openclaw-agent-permissions-and-onboarding
    - 2026-05-27-openclaw-content-boundary-hardening-suite
    - 2026-06-23-openclaw-wcag-aa-reaches-stable
    - 2026-06-23-openclaw-clawhub-skill-provenance-stable
  governance:
    - 2026-05-07-openclaw-everyday-agent-surfaces
    - 2026-05-12-openclaw-agent-permissions-and-onboarding
    - 2026-05-13-openclaw-per-sender-tool-policies
    - 2026-05-27-openclaw-content-boundary-hardening-suite
    - 2026-06-23-openclaw-codex-auto-plugin-approvals-stable
    - 2026-06-23-openclaw-clawhub-skill-provenance-stable
stance:
  use_for: "Teams running their own bridge between chat or voice platforms and an agent, where the data has to stay on-prem. Operators who need to scope what any individual agent can say back, in which thread, in which channel."
  avoid_for: "Cloud-first teams who already standardized on a hosted control plane. Workflows that depend on uploaded skill archives until OpenClaw documents its signing and sandbox-isolation model."
  watch_next: "How the skill-archive trust model lands -- signing, sandbox, signed catalog -- and whether voice-channel allowlists mature past the initial permission shape."
---

# OpenClaw

## Operator Read

OpenClaw's real frontier signal is familiar access with visible authority:
chat, voice, mobile, and gateway setup make agents easier to reach, but the
operator still needs clear permission, skill-install, and multi-channel trust
boundaries. The thesis it's testing: agentic work belongs in the surfaces
people already use, without hiding what the agent can do.

## Reach Operators Where They Already Work

The [`openclaw onboard --install-daemon`](https://docs.openclaw.ai/start/getting-started)
wizard takes operators through provider selection, API key entry, and
gateway configuration in roughly two minutes. The gateway starts on port
18789 with a browser Control UI at `openclaw dashboard`. CLI setup,
onboarding, configure, and channel commands now explain the next useful
command at each step rather than leaving operators with
[terse setup labels](https://github.com/openclaw/openclaw/releases/tag/v2026.5.10-beta.5) -- first-run operators are told what to run next at each stage.

The accessibility ceiling is breadth, not first install. Ten-plus messaging
channels, voice, mobile (iOS / Android), and a browser Control UI all add
to setup complexity once you're past the first connection. The onboarding
wizard handles a single channel cleanly; the second and third require more
operator knowledge.

## Authority At The Gateway Edge

The 2026-05-12 baseline pushed authority control to the agent level. The
[v2026.5.12-beta.3 release](https://github.com/openclaw/openclaw/releases/tag/v2026.5.12-beta.3)
(published 2026-05-12T23:38Z) pushes it further: authority moves to the
requester. New
[per-sender tool policies (PR #66933)](https://github.com/openclaw/openclaw/pull/66933)
let operators restrict dangerous tools by requester identity using
canonical channel-scoped sender keys, across global, agent, group, core,
bundled, and plugin tool surfaces. A public-facing OpenClaw deployment can
now allow or deny specific tools to specific senders in specific channels,
without modifying the global tool surface or relying on per-agent guards.

The earlier per-agent layer remains. Use per-agent
[`tools.message.crossContext`](https://github.com/openclaw/openclaw/releases/tag/v2026.5.10-beta.5)
overrides when you want to deploy a sandboxed or public-facing agent that
can only reply in the conversation it was addressed in -- without modifying
global policy. Pair with
[`tools.message.actions.allow`](https://github.com/openclaw/openclaw/releases/tag/v2026.5.10-beta.5)
to expose and enforce send-only message tools. The per-sender layer
extends what the per-agent layer started: authority decisions now
compose across (channel × sender × agent) rather than landing on agent
alone.

Lock voice joins to specific channels with
[`voice.allowedChannels`](https://github.com/openclaw/openclaw/releases/tag/v2026.5.10-beta.5);
the same allowlist constrains bot voice-state moves on Discord.
[Sub-agent security boundaries](https://github.com/openclaw/openclaw/commit/33b112ad314dc8d9dfe0f5a68caed4811a23245a)
are documented per session scope.

Skill archive upload is gated behind
[`skills.install.allowUploadedArchives`](https://github.com/openclaw/openclaw/releases/tag/v2026.5.10-beta.5)
with default closed. Do not enable this surface until OpenClaw documents
its signing and sandbox-isolation model -- the gate is correct, the trust
model behind it is not yet public.

## Content Boundaries Pre-Dispatch

The 2026-05-13 → 2026-05-27 window pushed the authority story from
"who can ask?" (per-sender tool policies, per-agent restrictions) to
"what content can reach the agent at all?" The
[v2026.5.26](https://github.com/openclaw/openclaw/releases/tag/v2026.5.26)
release lands a multi-front content-safety push: browser snapshot
reads now honor SSRF policy before reading tab URLs
([PR #78526](https://github.com/openclaw/openclaw/pull/78526));
queued system-event text is sanitized so untrusted plugin or channel
labels cannot spoof nested prompt markers
([PR #87094](https://github.com/openclaw/openclaw/pull/87094));
fetched file text and metadata are wrapped as external content
(#87062); ClickClack `allowFrom` sender allowlists run **before**
agent dispatch ([PR #83741](https://github.com/openclaw/openclaw/pull/83741)),
not as post-dispatch blocking; RPCs from invalidated device-token
clients are rejected during rotation (#70707); serialized tool-call
text is scrubbed from replies (#86924). A separate `memory_store`
prompt-like-text reject matches the auto-capture filter (#87142).

Gateway auth rate-limiter defaults on for remote non-browser/HTTP
auth failures when `gateway.auth.rateLimit` is unset (#87148).
Operators should verify whether their config left this unset -- the
on-by-default ratelimit changes observable behavior for non-browser
auth flows.

The structural choice that matters: **pre-dispatch allowlists**.
Denying unauthorized senders the chance to influence agent behavior
*at all* is the right primitive for authority over inbound senders,
versus blocking specific actions after the agent has already been
biased.

## Reliability As Accessibility

Predictable surfaces are safer than capable-but-mysterious ones. When a
channel plugin configuration goes stale, the gateway
[attempts recovery](https://github.com/openclaw/openclaw/commit/329580c64d13657592c3fabb97ff567c2e292bb6)
by reinstalling from a trusted catalog while preserving explicit
disabled-channel guards -- stale configuration is treated as recoverable
state, not a fatal failure. Live agent execution output events are
[bounded](https://github.com/openclaw/openclaw/commit/3ee7c02bcacfdf6327747c1fe24dd6d11de8612a)
so runaway processes can't drown the gateway in event floods.

Auto-promoted memory is now bounded too. The gateway compacts the oldest
auto-promoted sections of
[`MEMORY.md`](https://github.com/openclaw/openclaw/releases/tag/v2026.5.10-beta.5)
when memory hits the bootstrap budget, preserving user-authored notes.
Long-running agents stop silently accumulating unlimited memory.

Compaction itself is also more careful now.
[PR #79307](https://github.com/openclaw/openclaw/pull/79307) preserves
scoped background `exec` and `process` session references across
embedded compaction and after-turn runtime contexts -- without exposing
sessions from unrelated scopes. Multi-step background work survives
compaction with cleaner scope boundaries.

## A Recognized Accessibility Baseline, In The Default Build

OpenClaw's strongest accessibility claim this cycle is no longer a beta opt-in.
The WCAG 2.1 AA pass
([PR #89822](https://github.com/openclaw/openclaw/pull/89822)) -- dark-mode
contrast lifted to a `>=4.5:1` floor, visible keyboard focus rings, and a 12px
minimum font size across 136 prior sub-12px elements -- reached
[**stable v2026.6.8**](https://github.com/openclaw/openclaw/releases/tag/v2026.6.8)
(published 2026-06-16), having shipped beta-only last cycle. What got easier:
reading the Control UI and navigating it by keyboard. Who can use it now:
low-vision and keyboard-only operators, on the channel an ordinary operator
runs by default rather than behind a beta flag. Authority stayed visible -- no
control, approval, or permission surface was hidden to reach the baseline. For
the calibration source whose whole thesis is familiar access with visible
authority, this is the cleanest "reached the operator" event of the window: the
agent Control UI crosses from "capable but partly unusable" to "meets a
recognized baseline" in the binary, not the branch.

ClawHub skill installs now also tell the operator where a skill came from.
ClawHub-sourced installs
[retain verified source provenance](https://github.com/openclaw/openclaw/releases/tag/v2026.6.9),
the origin is preserved on readback, and verified source is surfaced in
[`skill verify`](https://github.com/openclaw/openclaw/pull/93532) output
(stable v2026.6.9). A non-expert deciding whether to trust a catalog skill can
now read recorded provenance rather than installing opaquely -- trust legibility
without hiding the trust boundary.

*Findings: 2026-06-23-openclaw-wcag-aa-reaches-stable,
2026-06-23-openclaw-clawhub-skill-provenance-stable.*

## A Gate That Loosened

Against the consent-over-default and fail-closed grain that runs through the
rest of this profile, one gate moved the other way this window. OpenClaw shipped
[automatic Codex plugin approvals](https://github.com/openclaw/openclaw/pull/92625)
in stable [v2026.6.9](https://github.com/openclaw/openclaw/releases/tag/v2026.6.9)
(PR #92625) -- convenience that reduces a human approval checkpoint in the Codex
integration. This is the one item in the window that loosens rather than
tightens authority, and it cuts directly against OpenClaw's otherwise
consistent posture (per-sender tool policies, pre-dispatch allowlists, key-free
web-search providers kept opt-in). Operators using the Codex path should confirm
what "automatic plugin approvals" actually auto-approves and whether it can be
scoped or disabled before treating plugin loads as gated. The team appears aware
of the surface's fragility -- a later beta keeps composed hook registries
enforcing trusted tool policies for approval-sensitive flows -- but at
release-note granularity this is a loosened gate, flagged as a tension, not a
clean win. Evidence is release-note level here; the PR diff was not individually
reviewed.

*Findings: 2026-06-23-openclaw-codex-auto-plugin-approvals-stable.*

## Where Accessibility Still Leaks Complexity

The gateway's authority model (permissions, approvals, channel
restrictions, skill gates) is correct but not yet simple. Per-agent
restriction overrides and the new per-sender layer are in release notes
but not in the main docs. The skill-archive trust model is gated but
undocumented. The new memory-wiki access scopes ("admin scope" for
ingest, "write scope" for Obsidian search per
[PR #80897](https://github.com/openclaw/openclaw/pull/80897) and
[PR #80904](https://github.com/openclaw/openclaw/pull/80904)) reference
a scope hierarchy that is not formally documented either. Multi-channel
setup complexity grows linearly with the number of platforms. The release-
note evidence floor -- appropriate for OpenClaw's commit volume -- means
some operator-relevant intermediate-beta changes likely don't surface
until the consolidated release notes ship.

One more setup-script-affecting change to flag: `openclaw models auth
login --provider openai` now defaults to the ChatGPT/Codex account login
flow. API-key setup is still available behind `--method api-key`, but
any onboarding script or playbook assuming API-key-first OpenAI auth
needs to be checked.

*Posture basis: `2026-05-07-openclaw-everyday-agent-surfaces`,
`2026-05-12-openclaw-agent-permissions-and-onboarding`,
`2026-05-13-openclaw-per-sender-tool-policies`,
`2026-05-27-openclaw-content-boundary-hardening-suite`,
`2026-06-23-openclaw-wcag-aa-reaches-stable`,
`2026-06-23-openclaw-clawhub-skill-provenance-stable`,
`2026-06-23-openclaw-codex-auto-plugin-approvals-stable`.*

## Open Questions

- The 2026.5.22 change "remove the old sender-owner tool gating
  path so configured tools stay visible for trusted sessions"
  overlaps with the 2026-05-13 per-sender tool policies. Does
  this loosen something the per-sender policies tightened, or are
  they complementary? Worth re-reading PR #66933 alongside the
  2026.5.22 change.
- Browser snapshot SSRF policy (#78526): what is the default and
  how does it interact with operator-configured allow-domains?
  Not in release notes.
- Plugin SDK additions in 2026.5.22 (`embeddingProviders`,
  `defineToolPlugin`, `openclaw plugins build|validate|init`) open
  the typed-plugin-author surface. Is there a documented signing
  or trust model for typed tool plugins? The skill-archive
  question from the prior cycle remains open and now extends to
  typed plugins.
- What is the trust model for skill archive uploads when
  `skills.install.allowUploadedArchives` is enabled? Are archives signature-checked
  or sandbox-isolated before install? **Partially advanced (2026-06-23):**
  ClawHub-sourced installs now persist and surface verified source provenance in
  [`skill verify`](https://github.com/openclaw/openclaw/pull/93532)
  (stable v2026.6.9), so a catalog skill's origin is now legible. This does NOT
  resolve the separate uploaded-archive question -- signing and sandbox-isolation
  for `allowUploadedArchives` are still undocumented, and the gate remains the
  relevant control for that surface.
- The `tools.message.crossContext` and `tools.message.actions.allow` overrides
  are in the release notes but not yet in the main OpenClaw docs. Are there
  additional per-agent permission overrides not yet surfaced publicly?
- The onboarding flow is two minutes for a single-channel setup. What is the
  realistic completion time for a three-channel setup (Discord + Slack +
  Telegram), and at which step does operator knowledge become a prerequisite?
- At what commit volume does OpenClaw's release-note harvest miss operator-visible
  changes? The v2026.5.10 beta.5 release notes cover approximately 60 items;
  intermediate beta releases may have additional operator-relevant changes not
  consolidated into the final notes.

## What To Watch Next

- The v2026.6.10 beta series (fast-talks auto mode, bounded-input rejection,
  device-backed node pairing removal) is beta-only as of this cycle -- track
  whether it promotes to a stable tag next window before treating it as shipped.
- Codex automatic plugin approvals (stable v2026.6.9): whether the auto-approval
  scope is documented, can be disabled, and whether it stays an isolated
  convenience or signals a broader relaxation of OpenClaw's consent-over-default
  posture.
- Trust model documentation for skill archive upload -- the ClawHub provenance
  work is in; the uploaded-archive signing/sandbox model is still the gap.
- Whether per-agent permission overrides expand to cover tool access beyond
  message sends (file writes, exec, MCP calls).
- Whether the onboarding wayfinding improvements extend to multi-channel setup
  or remain focused on first-channel completion.
- Memory dreaming semantics: what counts as "user-authored" vs. auto-promoted,
  and whether the compaction priority is stable across versions.

## Profile Hygiene

This profile follows the discipline in `RESEARCH_CONTRACT.md#profile`: every
concrete claim in the prose has an inline source link and an entry in the
`claims:` block; posture sections may interpret freely but must cite finding IDs
when naming a specific feature, behavior change, or cross-provider comparison.
Cross-provider editorial belongs in the weekly digest, not here. Git history is
the audit trail; removed claims live in the diff log.

Note on evidence_floor: this profile uses `evidence_floor: release_note` despite
`surface_class: open_source_commits`. OpenClaw's commit volume (8000+ per harvest
window) makes individual commit diff review impractical as the primary harvest
method. Release notes are the highest-precision evidence consistently available
at scale. This is consistent with the RESEARCH_CONTRACT clarification that the
floor should match the strictest precision the source can be reasonably harvested
at. A future cycle with more focused scope could upgrade specific claims to
`commit_diff_reviewed`.
