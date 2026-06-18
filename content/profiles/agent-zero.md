---
schema_version: bitter.frontier_profile.v0
profile_id: agent-zero
label: Agent Zero
owner: agent0ai
source_contract: sources/agent-zero.yml
homepage: https://www.agent-zero.ai/
docs: https://www.agent-zero.ai/p/docs/
surface_class: open_source_commits
evidence_floor: release_note
status: active_watch
last_updated: 2026-06-16
last_full_review: 2026-06-03
claims:
  - id: native-browser-playwright
    finding_id: 2026-05-07-agent-zero-full-computer-workcell
    last_verified: 2026-05-07
    status: active
  - id: linux-desktop-skill-controls
    finding_id: 2026-05-07-agent-zero-full-computer-workcell
    last_verified: 2026-05-07
    status: active
  - id: oauth-quota-visibility
    finding_id: 2026-05-07-agent-zero-full-computer-workcell
    last_verified: 2026-05-07
    status: active
  - id: browser-multi-tab-parallel-fanout
    finding_id: 2026-05-12-agent-zero-browser-multitab-and-document-formats
    last_verified: 2026-05-12
    status: active
  - id: odf-first-document-defaults
    finding_id: 2026-05-12-agent-zero-browser-multitab-and-document-formats
    last_verified: 2026-05-12
    status: active
  - id: persistent-desktop-lifecycle
    finding_id: 2026-05-12-agent-zero-browser-multitab-and-document-formats
    last_verified: 2026-05-12
    status: active
  - id: structured-actions-over-coordinates
    finding_id: 2026-05-12-agent-zero-browser-multitab-and-document-formats
    last_verified: 2026-05-12
    status: active
  - id: host-computer-use-remote
    finding_id: 2026-05-27-agent-zero-host-desktop-with-vision-verification
    last_verified: 2026-05-27
    status: active
  - id: vision-verification-required
    finding_id: 2026-05-27-agent-zero-host-desktop-with-vision-verification
    last_verified: 2026-05-27
    status: active
  - id: platform-native-structural-targeting
    finding_id: 2026-05-27-agent-zero-host-desktop-with-vision-verification
    last_verified: 2026-05-27
    status: active
  - id: ephemeral-capture-default
    finding_id: 2026-05-27-agent-zero-host-desktop-with-vision-verification
    last_verified: 2026-05-27
    status: active
  - id: screenshot-durable-storage-reversal
    finding_id: 2026-06-02-agent-zero-screenshot-artifact-durability
    last_verified: 2026-06-03
    status: active
  - id: remote-control-csrf-ws-origin-hardening
    finding_id: 2026-06-04-agent-zero-remote-control-csrf-ws-origin-hardening
    last_verified: 2026-06-16
    status: active
posture_basis:
  capability:
    - 2026-05-07-agent-zero-full-computer-workcell
    - 2026-05-12-agent-zero-browser-multitab-and-document-formats
    - 2026-05-27-agent-zero-host-desktop-with-vision-verification
  accessibility:
    - 2026-05-07-agent-zero-full-computer-workcell
    - 2026-05-12-agent-zero-browser-multitab-and-document-formats
    - 2026-05-27-agent-zero-host-desktop-with-vision-verification
  governance:
    - 2026-05-07-agent-zero-full-computer-workcell
    - 2026-05-12-agent-zero-browser-multitab-and-document-formats
    - 2026-05-27-agent-zero-host-desktop-with-vision-verification
    - 2026-06-04-agent-zero-remote-control-csrf-ws-origin-hardening
stance:
  use_for: "Work where the agent actually needs a desktop: a real browser, a LibreOffice session, a terminal that remembers what it did. Operators trying to figure out whether giving an agent a full computer is more useful or more dangerous than a tool-only sandbox."
  avoid_for: "Pipelines downstream of the agent that expect OOXML by default. v1.13+ writes ODF unless you configure otherwise. UI automation that depends on coordinate clicks: the agent is now told to prefer named actions and reach for coordinates last."
  watch_next: "What lifecycle policies emerge for the persistent Xpra desktop (timeouts, storage caps, idle cleanup), and whether 'agent with a real computer' stabilizes as a competitive position or fragments back into tool-by-tool."
---

# Agent Zero

## Recent activity (2026-06-04 to 2026-06-16)

Thin window: the entire fortnight was a single maintenance day. The
[v1.20 release](https://github.com/agent0ai/agent-zero/releases/tag/v1.20)
and its seven in-window commits all landed on 2026-06-04, with no commits or
releases June 5 through 16, and no capability expansion to computer access,
isolation, or subagents. The load-bearing item hardened the tunnel that
exposes the desktop: active Remote Control URLs (the public Tailscale Funnel
surface) are now
[normalized to a bare origin before CSRF allowlisting, and WebSocket origin validation trusts only the currently active Remote Control origin](https://github.com/agent0ai/agent-zero/commit/ca4efe6e6),
rejecting unrelated external origins and path/slash/port-variant
origin-confusion. The rest of the day was hygiene: a static OAuth API-key
placeholder was
[removed from provider defaults](https://github.com/agent0ai/agent-zero/commit/ca4c9306c)
and the runtime dummy key gated on connection status, and the
[file browser path bar](https://github.com/agent0ai/agent-zero/commit/f9d8167a0)
gained direct navigation with last-directory memory.

## Operator read

Agent Zero is the most complete "visible computer" in the watchlist.
As of [v1.17](https://github.com/agent0ai/agent-zero/releases/tag/v1.17)
(2026-05-23), the visible computer extends beyond the container to the
operator's actual host machine, with required visual verification on
state-changing actions. The operator decision is no longer just "give
the agent a desktop?" but "give the agent *which* desktop (internal
Xpra, host machine, or both)?" with each routed through cleanly
separated paths. The bet remains governance through visibility, now
with a runtime-enforced screenshot loop instead of trusting tool
outputs.

## When a real desktop earns its keep

Use Agent Zero when the work actually needs a full computer.
[The Playwright-powered browser](https://github.com/agent0ai/agent-zero/releases/tag/v1.10)
runs a persistent Chromium with live WebUI viewer, screencast streaming,
tab management, and Chrome extension support, including stale-context
recovery that [restarts the Playwright instance cleanly](https://github.com/agent0ai/agent-zero/releases/tag/v1.12)
when a cached context is detected as closed. The
[multi-tab fanout](https://github.com/agent0ai/agent-zero/releases/tag/v1.11)
auto-registers tabs opened by sites and runs a `multi` action that reads or
mutates across tabs in a single tool call with parallel execution. The
LibreOffice [virtual desktop](https://github.com/agent0ai/agent-zero/releases/tag/v1.11)
opens DOCX, XLSX, and PPTX in full sessions over Xpra/XFCE; the legacy
Collabora/WOPI runtime is gone.

The [Linux Desktop skill](https://github.com/agent0ai/agent-zero/releases/tag/v1.11)
teaches Agent Zero to operate XFCE (app launch, focus, click, cell edit,
stable folder entry points) and tells the agent to prefer structured,
app-native, keyboard actions and treat positional clicks as last resort. If
your UI-automation pipeline relies on coordinate clicks, expect a behavior
shift: `cell_edit(B3, 42)` is the path now, not `click(x=423, y=187)`.

## The persistence trade

The desktop session is
[persistent across canvas and modal navigation](https://github.com/agent0ai/agent-zero/releases/tag/v1.13):
a single Xpra iframe stays alive, with explicit shutdown distinguished from
crashes via a "Shutdown Desktop" launcher that requires confirmation. Unsafe
affordances (logout, lock, switch-user) are hidden. The accessibility win:
operators can watch agent work in a real environment without losing state
on every navigation. The trade: accumulated state (browser sessions,
temporary files, LibreOffice locks, open applications) is the operator's
problem. There's no automatic session reset, no documented idle cleanup, no
storage cap. Plan for manual cleanup or build it.

## Open-format default

Verify your downstream tooling handles ODT before upgrading to v1.13+.
Document artifacts now default to
[ODF formats (ODT/ODS/ODP)](https://github.com/agent0ai/agent-zero/releases/tag/v1.13);
OOXML (DOCX/XLSX/PPTX) is available but requires explicit opt-in. Pipelines
expecting Word/Excel/PowerPoint output silently flowing through will break.
This is the trend across the watchlist made local: safe-and-open by default,
proprietary requires the operator to ask.

## Host desktop with vision verification

[v1.17](https://github.com/agent0ai/agent-zero/releases/tag/v1.17)
(2026-05-23) exposes `computer_use_remote` as a callable tool that
controls the operator's **host** desktop, outside the
Docker/Xpra container, using platform-native structural targeting:
macOS via Accessibility (AX) with `ax_snapshot` / `ax_action`,
Windows via UIA, Linux via AT-SPI / Wayland. The category move sits
in the runtime check: every state-changing action is treated as
unverified until a fresh screenshot visibly confirms the outcome.
Agents must stop when no screenshot is available. Screenshots
return as multimodal vision messages, not text summaries.

The internal Docker/Xpra desktop continues to be controlled by the
`linux-desktop` skill; the host path and container path are cleanly
separated. macOS approval denials route to a re-arm-required stop
flow rather than silent retry. Operators evaluating host control
must decide whether `computer_use_remote` is permitted on their host
at all. The trust mode is opt-in, but the runtime checks are
enforceable once enabled.

[v1.16](https://github.com/agent0ai/agent-zero/releases/tag/v1.16)
made screenshot capture **ephemeral and context-scoped by default**:
captures route through in-process image refs rather than disk, so
the agent no longer leaves screenshot trails on the filesystem by
default. Explicit user-initiated screenshots remain durable. The
tradeoff: host-action audit evidence now lives in the model context,
not on disk. Operators wanting durable evidence must enable
explicit capture. v1.16 also split speech into independent built-in
plugins (`_kokoro_tts`, `_whisper_stt`), legacy speech APIs were
removed (breaking), and renamed `document_artifact` to
`office_artifact` with shims dropped.
[v1.18](https://github.com/agent0ai/agent-zero/releases/tag/v1.18)
added a configurable `max_active_skills` cap, skill visibility
controls (hide skills from the model-facing catalog), and an MCP
multimodal content handling fix.

## Container reality

Agent Zero is a Docker-deep install. Browser, desktop, LibreOffice all run
inside a long-lived container. The WebUI makes the agent visible; getting
the container set up is the friction. Two operational details to know:
OAuth settings expose
[account disconnect and remaining quota visibility](https://github.com/agent0ai/agent-zero/releases/tag/v1.11)
for OpenAI/ChatGPT OAuth (users see Codex usage quota and reset timing), and
PTY master descriptors for terminal sessions are now
[properly closed on exit](https://github.com/agent0ai/agent-zero/releases/tag/v1.12),
preventing `/dev/ptmx` exhaustion under sustained use.

*Posture basis: `2026-05-07-agent-zero-full-computer-workcell`,
`2026-05-12-agent-zero-browser-multitab-and-document-formats`,
`2026-05-27-agent-zero-host-desktop-with-vision-verification`.*

## Open questions

- Where does host-action audit evidence land under ephemeral capture?
  Operators cannot inspect on-disk caches by default to verify what
  the agent saw on the host. Is the answer in-process model context
  only, or is there a structured audit trail elsewhere?
- v1.17's "agents must stop when a screenshot is unavailable" is
  described as a runtime check, but the release notes do not fully
  distinguish whether the rule is enforced at the model-prompt level
  or at the tool-runtime return-shape level. Worth a v1.17 commit
  probe.
- When both host and container desktops are available,
  routing-by-rank is documented but not enforcement. How reliably
  does the agent pick the right path under prompt pressure?
- Is the "prefer structured over coordinate clicks" guidance enforced at the
  runtime level, or is it agent-level instruction that a model can ignore? What
  happens in practice when a structured action is unavailable?
- Is there a session timeout, idle cleanup, or storage limit for persistent
  Xpra desktop state? Or does the operator manage cleanup entirely manually?
- The `multi` browser action fans out across tabs. Are the parallel executions
  isolated per tab, or do they share Playwright context state?
- ODF is now the default output format. Are Agent Zero's downstream integrations
  (file browser, Memory, Projects, ZIP download) fully ODF-aware?
- The Linux Desktop skill provides stable entry points for Workdir, Projects,
  Skills, Agents, and Downloads. How do these map to the underlying Docker
  container filesystem, and what persists across container restarts?

## What to watch next

- Whether host computer-use evolves toward per-app, per-tool, or
  per-domain gating beyond the current opt-in / vision-verification
  defaults. Operators with mixed-trust applications on the host
  need finer authority.
- How the ephemeral-capture default coexists with audit requirements
  in enterprise deployments. The current setup is a privacy win; it
  may need an "evidence retention" knob in regulated environments.
- Whether ODF-first generates integration friction with downstream tools
  (e.g., GitHub attachments, email clients, or workflows expecting DOCX).
- State management for persistent desktops: whether an automated cleanup path
  (session timeout, disk quota, reset-on-task-completion) ships in a future
  version.
- Whether the "structured over coordinate" guidance extends to the browser
  surface (form actions, element selectors) as a first-class constraint, or
  remains only in the Desktop skill.
- Custom tool creation and subagent spawning within a long-running desktop
  session: how tool proliferation is managed and what the cleanup contract is.

## Profile hygiene

This profile follows the discipline in `METHOD.md`: every
concrete claim in the prose has an inline source link and an entry in the
`claims:` block; posture sections may interpret freely but must cite finding IDs
when naming a specific feature, behavior change, or cross-provider comparison.

Three claims are seeded from the prior finding
(`2026-05-07-agent-zero-full-computer-workcell`, evidence precision:
`commit_diff_reviewed` and `commit`). Four claims are from the current window
(`2026-05-12-agent-zero-browser-multitab-and-document-formats`, evidence
precision: `release_note`). All evidence is at or above the `release_note` floor.

Note: v1.11-v1.13 shipped May 2-5 (before this window's start) but were not
covered by the prior finding. They are covered in this cycle because they
represent the current state of the tool and were not previously profiled.
