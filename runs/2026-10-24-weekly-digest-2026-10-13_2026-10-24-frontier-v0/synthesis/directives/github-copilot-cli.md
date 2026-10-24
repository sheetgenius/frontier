# GitHub Copilot CLI final-draft directives

Profile date: 2026-10-24. Merged inputs: consistency `github-copilot-cli:C02`; lens `github-copilot-cli`; thread `github-copilot-cli`. The [owning harvest](../../harvest/github-copilot-cli.primary.md) controls facts and timestamped selectors.

## Must

No additional must correction was identified by the three lenses.

## Should

1. Replace the generic "We watch GitHub's standalone..." opening with the concrete development-loop change: released local-service access plus structured child handoffs. Keep workflow eligibility, initial grants and denied-child tests visible. Validate content separately from schema conformance. Evidence: harvest sections 1 and 6; [1.0.100 network changes](https://github.com/github/copilot-cli/releases/tag/v1.0.100), [1.0.101 structured output](https://github.com/github/copilot-cli/releases/tag/v1.0.101), [1.0.102 grant inheritance](https://github.com/github/copilot-cli/releases/tag/v1.0.102).
2. Use the concise operational takeaway: "Copilot CLI 1.0.100 enables localhost and private-network access inside enabled sandboxes; set sandbox.allowLocalNetwork explicitly before expanding a 1.0.103 rollout." Keep sandbox enablement separately default off. Retire only the superseded blanket macOS self-connect warning; preserve the enabled-local-access/no-host-filter conditions and the separate Windows limitation. Evidence: harvest sections 1-2 and carry-forward answers; [1.0.101 macOS exception](https://github.com/github/copilot-cli/releases/tag/v1.0.101), [1.0.103 ACP settings repair](https://github.com/github/copilot-cli/releases/tag/v1.0.103).
3. Replace the unscoped model-retirement sentence with: "GitHub records the retirement of Gemini 3.7 Flash, GPT-5 mini, GPT-5.4, GPT-5.4 mini and GPT-5.5 from Copilot on 19 October." Preserve the following explore/task routing as built-in-agent defaults, not the top-level default or provider-wide retirement. Evidence: harvest section 16; [retirement diff](https://github.com/github/docs/commit/4dd188c2c92f0b57e7f7ec863fd9cca1e093b09b), [dated table](https://github.com/github/docs/blob/4dd188c2c92f0b57e7f7ec863fd9cca1e093b09b/data/tables/copilot/model-deprecation-history.yml#L14-L32).
4. Retain the Manual/Assisted managed-ask test and inspect who answered. The release allows safe managed asks to avoid confirmation, while the pinned enterprise contract promises fresh approval without automatic shortcuts. Evidence: harvest section 5; [1.0.100](https://github.com/github/copilot-cli/releases/tag/v1.0.100), [enterprise contract](https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/reference/enterprise-administrators/enterprise-managed-settings.md#L253-L261). Do not resolve this conflict using the separate explicit-extension approval rule.

## Could

None.

## Resolution

Local reach is both a capability and an exposure change; pair them rather than choosing one lens's emphasis. The owning release record controls the new default, while the docs contradiction remains visible. GitHub's model retirement does not conflict with a different OpenAI account route or Pi's Copilot-provider routing. Keep the supported `.claude/rules` ingestion comparison and `compared_with: [claude-code]`; shared input syntax does not establish shared enforcement.
