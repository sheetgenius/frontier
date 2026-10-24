---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-hermes-agent-desktop-trials-and-connectors-reduce-setup-with-account-and-data-use-boundaries-still-visi
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/NousResearch/hermes-agent/commit/4920f87b3fdd2cf0cb717d691c0f0f84fcc4f1da
    precision: commit
  - url: https://github.com/NousResearch/hermes-agent/commit/ea45ec3936720abef431439152e75b2fc7dd4039
    precision: commit
  - url: https://github.com/NousResearch/hermes-agent/blob/v0.22.5/tools/connectors/dispatch.py
    precision: tagged_commit_file
  - url: https://github.com/NousResearch/hermes-agent/commit/22fc8098691e9de5f5ee64c23d82078d94e4b122
    precision: commit
  - url: https://github.com/NousResearch/hermes-agent/releases/tag/v0.22.5
    precision: github_release
  - url: https://github.com/NousResearch/hermes-agent/blob/v0.22.5/hermes_cli/welcome_trial.py#L1-L11
    precision: tagged_commit_file
  - url: https://github.com/NousResearch/hermes-agent/blob/v0.22.5/hermes_cli/anon_auth.py#L210-L222
    precision: tagged_commit_file
  - url: https://github.com/NousResearch/hermes-agent/commit/6c5d3c97828f95fa69ecb0e9fd22d871ca1b7240
    precision: commit
  - url: https://github.com/NousResearch/hermes-agent/commit/c8029f51eb3273095469fc9ce1e488534dff1852
    precision: commit
---
# 2026-10-24-hermes-agent-desktop-trials-and-connectors-reduce-setup-with-account-and-data-use-boundaries-still-visi

Desktop trials and connectors reduce setup, with account and data-use boundaries still visible. The welcome trial is claimed through first-install local Desktop onboarding once per OS user on that computer. At v0.22.5, an already claimed trial can supply inference to the install's other surfaces, including CLI, gateway, cron and Kanban, while guest access remains allowed. This is a client implementation and entitlement path, not proof of unlimited inference or server-side enforcement. Connectors add guest/account-backed service connections and named account selection. At v0.22.5, simply opening the connector page no longer creates a guest; it offers sign-in, and Nous authentication uses device login with guest-to-account handoff. Connector results can also carry `no_training` and `zero_retention` requirements as persisted message metadata. On Nous routes the outgoing union becomes provider data-collection/retention constraints; a `data_policy_denied` response is non-retryable and has no fallback. This client code does not independently prove hosted team RBAC, a count of 50 integrations, or equivalent policy enforcement on other model providers.

Channel: tagged-release. Half: both. Date: 2026-10-23.

Operator consequence: A new Desktop user can test an agent before wiring a provider. A team still needs to inspect the connected account, effective tool permissions, and model route before unattended use. Treat a data-policy refusal as a routing/retention decision, not a transient error to work around with arbitrary fallback. Setup work shrinks; account custody and where retrieved data goes remain human decisions.

## Receipt
- https://github.com/NousResearch/hermes-agent/commit/4920f87b3fdd2cf0cb717d691c0f0f84fcc4f1da
- https://github.com/NousResearch/hermes-agent/commit/ea45ec3936720abef431439152e75b2fc7dd4039
- https://github.com/NousResearch/hermes-agent/blob/v0.22.5/tools/connectors/dispatch.py
- https://github.com/NousResearch/hermes-agent/commit/22fc8098691e9de5f5ee64c23d82078d94e4b122
- https://github.com/NousResearch/hermes-agent/releases/tag/v0.22.5
- https://github.com/NousResearch/hermes-agent/blob/v0.22.5/hermes_cli/welcome_trial.py#L1-L11
- https://github.com/NousResearch/hermes-agent/blob/v0.22.5/hermes_cli/anon_auth.py#L210-L222
- https://github.com/NousResearch/hermes-agent/commit/6c5d3c97828f95fa69ecb0e9fd22d871ca1b7240
- https://github.com/NousResearch/hermes-agent/commit/c8029f51eb3273095469fc9ce1e488534dff1852
