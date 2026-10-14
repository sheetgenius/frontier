---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-hermes-agent-correction-the-browser-credential-vault-is-on-by-default-only-real-profile-browsing-is-opt
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/NousResearch/hermes-agent/blob/v0.21.7/toolsets.py#L11-L22
    precision: tagged_commit_file
  - url: https://github.com/NousResearch/hermes-agent/blob/v0.21.7/hermes_cli/config_defaults.py#L2446-L2464
    precision: tagged_commit_file
  - url: https://github.com/NousResearch/hermes-agent/blob/v0.21.7/agent/vault_backends/onepassword.py#L30-L71
    precision: tagged_commit_file
  - url: https://github.com/NousResearch/hermes-agent/blob/v2026.9.21/toolsets.py#L21
    precision: tagged_commit_file
---
# 2026-10-13-hermes-agent-correction-the-browser-credential-vault-is-on-by-default-only-real-profile-browsing-is-opt

Correction: the browser credential vault is on by default; only real-profile browsing is opt-in. Nothing changed in the window; the 2026-09-21 profile said both new grants were off by default, and only one is. `browser.use_real_profile` is false and stays an opt-in. The credential vault is different: its tools are part of the default core tool set and are offered whenever the browser tools are installed; the local encrypted vault is "always on" (empty until the user adds items or the agent saves a login); detected 1Password and Bitwarden CLIs are login sources by default, unlocked per session with a masked master-password prompt; and when `OP_SERVICE_ACCOUNT_TOKEN`, the default service-account variable, is in the profile's secrets, the 1Password backend counts as unlocked with no prompt in any session. Fills are bound to each item's exact origin and payment items fill only after the user confirms, but there is still no per-site allowlist in config.

Channel: tagged-release (state at v2026.9.21, unchanged at v0.21.7); the consolidation into one deferred tool is main-unreleased and in the 2026-10-13 canary. Half: defect. Date: 2026-09-21.

Operator consequence: If a Hermes profile holds a 1Password service-account token, for example for `secrets.onepassword`, the agent can list and fill every Login item that account can see without asking, including in headless sessions that have the browser tools. Scope that service account to a vault made for the agent, or set `vault.onepassword.enabled: false` (and `vault.bitwarden.enabled: false` if `bw` is installed for other reasons). The question "which accounts may it act on" applies to a default install, not only after an opt-in.

## Receipt
- https://github.com/NousResearch/hermes-agent/blob/v0.21.7/toolsets.py#L11-L22
- https://github.com/NousResearch/hermes-agent/blob/v0.21.7/hermes_cli/config_defaults.py#L2446-L2464
- https://github.com/NousResearch/hermes-agent/blob/v0.21.7/agent/vault_backends/onepassword.py#L30-L71
- https://github.com/NousResearch/hermes-agent/blob/v2026.9.21/toolsets.py#L21
