---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-hermes-agent-core-shed-six-memory-providers-home-assistant-spotify-and-skill-sync-configured-homes-can
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/NousResearch/hermes-agent/blob/v0.21.7/hermes_cli/memory_provider_migration.py#L168-L299
    precision: tagged_commit_file
  - url: https://github.com/NousResearch/hermes-agent/blob/v0.21.7/hermes_cli/config_defaults.py#L1311-L1325
    precision: tagged_commit_file
  - url: https://github.com/NousResearch/hermes-agent/blob/v0.21.7/hermes_cli/config_defaults.py#L1717-L1755
    precision: tagged_commit_file
  - url: https://github.com/NousResearch/hermes-agent/blob/v0.21.7/plugin-catalog/holographic.yaml
    precision: tagged_commit_file
  - url: https://github.com/NousResearch/hermes-agent/blob/v0.21.7/plugin-catalog/mem0.yaml
    precision: tagged_commit_file
  - url: https://github.com/NousResearch/hermes-agent/blob/v0.21.7/plugin-catalog/honcho.yaml
    precision: tagged_commit_file
  - url: https://github.com/NousResearch/hermes-agent/commit/7e53b3ef82c9074649230b572dfcc76d4b629058
    precision: commit
  - url: https://github.com/NousResearch/hermes-agent/commit/9039b690fc34b965b2614bea33d88b0216752aa0
    precision: commit
  - url: https://github.com/NousResearch/hermes-agent/commit/cdf5732af67c9c1784ba4857191c499c3f3b741e
    precision: commit
---
# 2026-10-13-hermes-agent-core-shed-six-memory-providers-home-assistant-spotify-and-skill-sync-configured-homes-can

Core shed six memory providers, Home Assistant, Spotify and Skill Sync; configured homes can migrate to catalog plugins. Across the three stables, hindsight, honcho, mem0, supermemory, openviking and holographic left bundled memory; byterover and retaindb remain. Home Assistant, Spotify, tirith and Skill Sync also left core, as did compatibility for pre-September plugin import paths. A home configured for a departed provider can receive its catalog plugin automatically. Startup recovery honors security.allow_lazy_installs and only assumes consent for formerly bundled providers. During an interactive update, dependency consent can still be requested; refused or failed installs remain possible. The default memory.provider is empty, selecting built-in memory. Removing optional providers does not make a fresh default install run an external memory plugin. Plugins still default to plugins.isolation: in_process; host process isolation is opt-in and is not an OS sandbox by itself. Catalog entries name maintainers and reviewed SHA pins: most are vendor-maintained, holographic is community-maintained, and mem0 discloses PostHog telemetry unless MEM0_TELEMETRY=false. Plugin installs activate their MCP servers and skills in every open chat of that profile on the next turn from v2026.9.24; newly added skill indexing reaches v0.21.7. Langfuse extraction is in main and the October 13 canary, absent from v0.21.7.

Channel: tagged-release (v2026.9.24, v0.21.6, v0.21.7); main-unreleased and preview-or-beta for Langfuse. Half: both. Date: 2026-10-12.

Operator consequence: Check memory.provider on each existing home before upgrading. A removed optional provider changes maintainer and dependency custody; inspect its catalog pin and disclosures, plus security.allow_lazy_installs and any consent prompt. Fresh default homes keep built-in memory. Treat an accepted plugin install as a live change to the next turn of every open chat in that profile, including gateway sessions. Plugins still importing pre-September module paths lose compatibility from v0.21.6.

## Receipt
- https://github.com/NousResearch/hermes-agent/blob/v0.21.7/hermes_cli/memory_provider_migration.py#L168-L299
- https://github.com/NousResearch/hermes-agent/blob/v0.21.7/hermes_cli/config_defaults.py#L1311-L1325
- https://github.com/NousResearch/hermes-agent/blob/v0.21.7/hermes_cli/config_defaults.py#L1717-L1755
- https://github.com/NousResearch/hermes-agent/blob/v0.21.7/plugin-catalog/holographic.yaml
- https://github.com/NousResearch/hermes-agent/blob/v0.21.7/plugin-catalog/mem0.yaml
- https://github.com/NousResearch/hermes-agent/blob/v0.21.7/plugin-catalog/honcho.yaml
- https://github.com/NousResearch/hermes-agent/commit/7e53b3ef82c9074649230b572dfcc76d4b629058
- https://github.com/NousResearch/hermes-agent/commit/9039b690fc34b965b2614bea33d88b0216752aa0
- https://github.com/NousResearch/hermes-agent/commit/cdf5732af67c9c1784ba4857191c499c3f3b741e
