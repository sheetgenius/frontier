---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-paperclip-beta-google-workspace-setup-initially-requests-read-and-write-across-three-services
source: paperclip
source_contract: sources/paperclip.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/paperclipai/paperclip/commit/23b2ceb0d19d4dff0e34f0d957aa41efec739816
    precision: commit
  - url: https://github.com/paperclipai/paperclip/blob/d69631b01b9c658f80bf8bed389863dce82643e1/doc/connections/GOOGLE-WORKSPACE.md#L3-L73
    precision: tagged_commit_file
  - url: https://github.com/paperclipai/paperclip/blob/d69631b01b9c658f80bf8bed389863dce82643e1/doc/connections/GOOGLE-WORKSPACE.md#L91-L113
    precision: tagged_commit_file
---
# 2026-10-24-paperclip-beta-google-workspace-setup-initially-requests-read-and-write-across-three-services

Beta Google Workspace setup initially requests read and write across three services. New-account setup combines Gmail, Drive including Docs/Sheets/Slides, and Calendar under one google-workspace connection and grant. All three start enabled with read/write authority; users can disable or narrow groups before consent. The default request has nine scopes, and actual provider-granted scopes are rechecked per call. Existing individual connections stay supported without automatic merger. Managed OAuth remains limited to registered internal testers during preview; other companies need their own eligible OAuth app and enrollment. The implementation merged on 2026-10-19.

Channel: preview-or-beta. Half: both. Date: 2026-10-23.

Operator consequence: On 2026.1023.0-beta.0, review the combined scope request rather than assuming earlier individual-app choices constrain a new account. Deploy matching instance/broker registries and qualify the provider-granted subset. One setup flow can eliminate repeated consent plumbing, while increasing the consequence of accepting broad defaults.

## Receipt
- https://github.com/paperclipai/paperclip/commit/23b2ceb0d19d4dff0e34f0d957aa41efec739816
- https://github.com/paperclipai/paperclip/blob/d69631b01b9c658f80bf8bed389863dce82643e1/doc/connections/GOOGLE-WORKSPACE.md#L3-L73
- https://github.com/paperclipai/paperclip/blob/d69631b01b9c658f80bf8bed389863dce82643e1/doc/connections/GOOGLE-WORKSPACE.md#L91-L113
