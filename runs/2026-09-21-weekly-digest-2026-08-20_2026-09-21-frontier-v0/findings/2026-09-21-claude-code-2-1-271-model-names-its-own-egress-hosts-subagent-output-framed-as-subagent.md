---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-claude-code-2-1-271-model-names-its-own-egress-hosts-subagent-output-framed-as-subagent
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/anthropics/claude-code/releases/tag/v2.1.271
    precision: github_release
  - url: https://github.com/anthropics/claude-code/releases/tag/v2.1.277
    precision: github_release
  - url: https://code.claude.com/docs/en/sandboxing#per-command-allowed-domains-in-auto-mode
    precision: official_docs
---
# 2026-09-21-claude-code-2-1-271-model-names-its-own-egress-hosts-subagent-output-framed-as-subagent

2.1.271 (2026-09-14) adds per-command allowed_domains to Bash, PowerShell and Monitor in sandboxed auto mode: the classifier reviews the hosts with the command, the sandbox opens them for that command alone, and a host no approved command listed is refused without a prompt or a classifier check. strictAllowlist or allowManagedDomainsOnly refuses per-command lists. The same release routes a skill's inline ! shell through default-mode rules instead of the classifier, has subagents hand back through a reviewed call, and adds omitClaudeMd for subagents. 2.1.277 (2026-09-18) delivers subagent results under a header marking them as subagent output so they cannot pass as the session's own instructions, and strips invisible Unicode tag characters from prompts. 2.1.268 names the rule that blocked an auto-mode action.

Channel: tagged-release (2.1.271, 2.1.277; latest only). Half: both.

Operator consequence: Per-command domains remove per-host network prompts under sandboxing and move egress proposal to the model and approval to the classifier. Set strictAllowlist or allowManagedDomainsOnly if the org must own the allowlist. Adapters that parsed subagent results verbatim must handle the new header and indentation.

## Receipt
- https://github.com/anthropics/claude-code/releases/tag/v2.1.271
- https://github.com/anthropics/claude-code/releases/tag/v2.1.277
- https://code.claude.com/docs/en/sandboxing#per-command-allowed-domains-in-auto-mode
