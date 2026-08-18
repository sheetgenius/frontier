---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-agent-zero-acp-bridge-and-an-interactive-internal-browser-viewport-are-staged-on
source: agent-zero
source_contract: sources/agent-zero.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://github.com/agent0ai/agent-zero/commit/add781d3b3e5b3972fbd7cef54657b7bfb274ae9
    precision: commit
---
# 2026-08-17-agent-zero-acp-bridge-and-an-interactive-internal-browser-viewport-are-staged-on

ACP bridge and an interactive internal Browser viewport are staged on the `ready` branch, in no tag and not on main.

Nine commits landed on `ready` between 2026-08-13 and 2026-08-16, after v2.9 was cut. Two threads matter. First, protocol: 'Bundle Agent Zero ACP' adds plugins/_a0_acp/ shipping 'the built-in ACP session bridge with an editor-hosted A0 CLI transport and a startup migration that removes retired a0_acp installations and scoped overrides'  --  Agent Zero becoming an Agent Client Protocol endpoint that other tools can drive. Second, computer use: e2f43a3fb8 'Harden internal Browser against bot detection' runs Chromium headful through Patchright on a private Xvfb display while keeping page helpers in Patchright's isolated world, and 005b366b51 'Add interactive internal Browser viewport' renders the Patchright page 'through an isolated, authenticated Xpra session with CDP screencast and snapshot fallbacks', touching helpers/virtual_desktop.py and plugins/_browser/. Four further commits (a0eefe19bd, 4bf92a6072, 227b47f53d, 340d5ef9dd, 1fb9363b49) consolidate to one shared internal Browser runtime with automatic tab restore.

Channel: unresolved. Ancestry: These commits are on the non-default branch `ready`, which gh api compare/main...ready shows as status=ahead, ahead_by=9, behind_by=0 (tip add781d3b3e5b3972fbd7cef54657b7bfb274ae9, 2026-08-16T17:25:05Z). Ancestry checks put them outside every release channel in the taxonomy: compare/add781d3b3...v2.9 -> status=behind, ahead=0, behind=9, and compare/add781d3b3...main -> status=behind, ahead=0, behind=9. So they are in no tag (stable or prerelease) and not on the default branch, which makes 'main-unreleased' factually wrong and 'preview-or-beta' wrong too since no prerelease tag exists (every entry in the releases list has prerelease=false). I am reporting the channel as unknown rather than forcing a label. Note the branch topology is inverted from what the names suggest: `development` is 0 ahead / 302 behind main and `testing` is 0 ahead / 758 behind, i.e. both are stale, and `ready` is the only active staging line.

Operator consequence: Watch, do not build on it. None of this is in v2.9 and none of it is on main, so an operator who upgrades to the latest release gets none of it, and a reader who saw it on GitHub this week could easily believe otherwise. The two threads are worth tracking for different reasons: the ACP bridge would make Agent Zero drivable as a component by an external orchestrator rather than only usable as a whole product, and the interactive viewport is the visibility half of the workcell question  --  a human watching the agent's actual browser through an authenticated Xpra session instead of inferring from a screenshot log. The bot-detection hardening cuts the other way and deserves a policy answer before you enable it: an agent browser deliberately engineered to be indistinguishable from a human one is a compliance question, not just a reliability feature.

## Receipt
- https://github.com/agent0ai/agent-zero/commit/add781d3b3e5b3972fbd7cef54657b7bfb274ae9
