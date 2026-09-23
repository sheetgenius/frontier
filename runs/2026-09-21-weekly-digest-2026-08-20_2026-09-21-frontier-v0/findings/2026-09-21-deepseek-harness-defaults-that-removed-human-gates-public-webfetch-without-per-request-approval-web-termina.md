---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-deepseek-harness-defaults-that-removed-human-gates-public-webfetch-without-per-request-approval-web-termina
source: deepseek-harness
source_contract: sources/deepseek-harness.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/ddefc45fbc7f8e46dd73185e68295696d1297887/packages/experimental/auto-review/README.md
    precision: tagged_commit_file
---
# 2026-09-21-deepseek-harness-defaults-that-removed-human-gates-public-webfetch-without-per-request-approval-web-termina

Defaults that removed human gates: public WebFetch without per-request approval; Web terminals run outside the sandbox; Auto review delegates approval to the model. Fetching any public URL no longer asks, anywhere. Alpha adds a sidebar terminal the human types into as their own user, unrelated to the agent's sandbox, and an experimental mode where a model reviewer stands in for the approval gate over a full-access sandbox. If the reviewer plugin is removed, sessions stay in full access with no reviewer.

Channel: preview-or-beta. Half: both. Date: 2026-08-27 (WebFetch), 2026-09-15 (Auto review, alpha), 2026-09-17 (terminals, alpha).

Operator consequence: Treat WebFetch as an exfiltration path in `workspace-write` (the sandbox default does not confine network; parent finding). Do not install `dsh-experimental-auto-review` on a machine you care about; if you test it, uninstall only after switching sessions back to Workspace Write. The terminal change is benign for a local user but matters on an exposed Web UI: a Web session gets a real user shell.

## Receipt
- https://github.com/deepseek-ai/deepseek-harness/blob/ddefc45fbc7f8e46dd73185e68295696d1297887/packages/experimental/auto-review/README.md
