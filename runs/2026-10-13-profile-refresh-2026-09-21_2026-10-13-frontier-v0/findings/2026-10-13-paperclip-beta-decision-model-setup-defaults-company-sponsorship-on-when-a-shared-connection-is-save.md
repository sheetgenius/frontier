---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-paperclip-beta-decision-model-setup-defaults-company-sponsorship-on-when-a-shared-connection-is-save
source: paperclip
source_contract: sources/paperclip.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/paperclipai/paperclip/blob/1b4c803816e82b0265c8422e1a804327a7ed8c54/doc/decision-models.md#L3-L45
    precision: tagged_commit_file
  - url: https://github.com/paperclipai/paperclip/commit/a7a244ab33cea9e8c68d2c1fa54c4879361bfc07
    precision: commit
---
# 2026-10-13-paperclip-beta-decision-model-setup-defaults-company-sponsorship-on-when-a-shared-connection-is-save

Beta decision-model setup defaults company sponsorship on when a shared connection is saved. New companies remain unconfigured. Saving a supported shared API connection defaults Allow company-sponsored background decisions on; an explicit off survives later edits and connection changes. It authorizes internal calls without a responsible human when a registered background feature uses it. The setup test is the only product caller in this release. Provider contracts and fixture tests do not prove live account/model success or future background features. Decisions retain metadata/cost attribution without saving prompt state or answers; uncertain paid work remains unpriced rather than replayed.

Channel: preview-or-beta (2026.1012.1-beta.0). Half: both. Date: 2026-10-12.

Operator consequence: Review the sponsorship setting during setup as spending authorization. Explicitly turn it off if company background calls are not intended. Run the bounded setup test and inspect its saved charge before assuming the connection works. Do not mistake a foundation for already-running autonomous business decisions.

## Receipt
- https://github.com/paperclipai/paperclip/blob/1b4c803816e82b0265c8422e1a804327a7ed8c54/doc/decision-models.md#L3-L45
- https://github.com/paperclipai/paperclip/commit/a7a244ab33cea9e8c68d2c1fa54c4879361bfc07
