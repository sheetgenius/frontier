---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-10-antigravity-1-1-11-makes-config-json-the-sole-owner-of-plugin-enablement-so-a
source: antigravity
source_contract: sources/antigravity.yml
window:
  start: 2026-08-03
  end: 2026-08-10
status: accepted
confidence: high
evidence:
  - url: https://github.com/google-antigravity/antigravity-cli/releases/tag/1.1.11
    precision: github_release
---
# 2026-08-10-antigravity-1-1-11-makes-config-json-the-sole-owner-of-plugin-enablement-so-a

1.1.11 makes config.json the sole owner of plugin enablement, so a plugin can no longer disable itself under you.

'Improved plugin enable and disable so `config.json` is the only place enablement lives, seeded once from each plugin's manifest, which stops a plugin that later ships "disabled": true from switching itself off under someone who was already running it and stops a shipped-default change from moving every user on the next release.' Before this, a plugin author's manifest could flip the enabled state of an already-installed plugin on the operator's machine at upgrade time.

Channel: tagged-release. Ancestry: Tag 1.1.11 -> 1d853acd23f2b0fc55da42377aab1a05f5e34aa8, stable, on main; entry verbatim in release body and pinned CHANGELOG.md.

Operator consequence: This is a control-plane hardening worth noting on a watchlist that tracks who owns your configuration: after 1.1.11 the enablement decision is yours and is seeded from the manifest exactly once. If you previously saw a plugin silently turn itself off (or a fleet-wide default change on an upgrade) and could not explain it, that is the cause. No action beyond upgrading, but re-check `config.json` after the upgrade to confirm the seeded state matches what you intended.

## Receipt
- https://github.com/google-antigravity/antigravity-cli/releases/tag/1.1.11
