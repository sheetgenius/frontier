---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-03-omnigent-v070-routing-picks-the-harness
source: omnigent
source_contract: sources/omnigent.yml
window:
  start: 2026-07-27
  end: 2026-08-03
status: accepted
confidence: medium
evidence:
  - url: https://github.com/omnigent-ai/omnigent/releases/tag/v0.7.0
    precision: github_release
---
# 2026-08-03-omnigent-v070-routing-picks-the-harness

Omnigent v0.7.0 (2026-07-27T22:40Z, tagged) ships an 'Auto - smart routing' harness option that, in the release's words, 'lets the router pick both harness and model from your task', and states that smart routing 'activates automatically from your llm:/routing: config (no OMNIGENT_SMART_ROUTING env var)'. This is the source contract's intake question in shipped form: on a meta-harness, the governance layer an action lands under can change without the operator choosing it per action, and the switch that was an explicit environment variable is now implied by config. Also tagged: voice dictation with optional server-side transcription, where the notes say audio 'never leaves your server' while the engine is offloadable to a remote worker -- carried as open, not asserted either way; and sandboxed Linux agents now trusting CA roots under the system capath to reach hosts behind a corporate MITM proxy (#3263, #3264), a deliberate widening with a stated reason. Breaking: 'omni server start' and 'omni integration slack start' are removed in favour of --background (#3105, #3153). Channel: tagged-release.

## Receipt
- https://github.com/omnigent-ai/omnigent/releases/tag/v0.7.0
