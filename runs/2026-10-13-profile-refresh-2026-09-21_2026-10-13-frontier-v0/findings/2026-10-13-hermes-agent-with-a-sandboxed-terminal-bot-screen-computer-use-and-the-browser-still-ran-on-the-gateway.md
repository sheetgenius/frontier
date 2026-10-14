---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-hermes-agent-with-a-sandboxed-terminal-bot-screen-computer-use-and-the-browser-still-ran-on-the-gateway
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/NousResearch/hermes-agent/commit/399d9569036d6e85420635c2f54e0177fb8b8d45
    precision: commit
  - url: https://github.com/NousResearch/hermes-agent/blob/v0.21.7/hermes_cli/config_defaults.py#L2518-L2543
    precision: tagged_commit_file
  - url: https://github.com/NousResearch/hermes-agent/blob/v0.21.7/hermes_cli/config_defaults.py#L8-L17
    precision: tagged_commit_file
  - url: https://github.com/NousResearch/hermes-agent/blob/v0.21.7/hermes_cli/config_migrations.py#L634-L654
    precision: tagged_commit_file
---
# 2026-10-13-hermes-agent-with-a-sandboxed-terminal-bot-screen-computer-use-and-the-browser-still-ran-on-the-gateway

With a sandboxed terminal, Bot Screen, computer_use and the browser still ran on the gateway host until v0.21.6; containers now default to a Nous desktop image. Before v0.21.6, sandboxing the terminal left Bot Screen, cua-driver and Chromium on the gateway host; computer_use could open a shell outside that terminal boundary. From v0.21.6 bot_desktop.placement: auto follows the terminal backend. Modal, Daytona and Vercel backends that cannot host a screen refuse instead of falling back to the host; placement: gateway explicitly selects the old host behavior. Fresh default containers use a Nous desktop image with Python 3.13 and Node 26, Xfce, TigerVNC, headed Chromium and cua-driver, rather than the earlier Python 3.11/Node 20 image. The change author records a 4.27 GB uncompressed image at that commit; this is not a permanent size guarantee for a moving Docker tag.

Channel: tagged-release. Half: both. Date: 2026-10-08.

Operator consequence: Audit host activity if browser/computer_use accompanied a sandboxed terminal before v0.21.6. Fresh or replaced default containers use nousresearch/hermes-sandbox:desktop. Migration removes a copied legacy default from configuration, but an existing persisted Docker container is retained until the operator chooses Switch; gateway and cron paths keep it and report the pending choice. Explicit image pins are retained. A smaller custom image needs the desktop stack for in-sandbox screen work. Choosing placement: gateway on an unsupported screen backend deliberately restores host access.

## Receipt
- https://github.com/NousResearch/hermes-agent/commit/399d9569036d6e85420635c2f54e0177fb8b8d45
- https://github.com/NousResearch/hermes-agent/blob/v0.21.7/hermes_cli/config_defaults.py#L2518-L2543
- https://github.com/NousResearch/hermes-agent/blob/v0.21.7/hermes_cli/config_defaults.py#L8-L17
- https://github.com/NousResearch/hermes-agent/blob/v0.21.7/hermes_cli/config_migrations.py#L634-L654
