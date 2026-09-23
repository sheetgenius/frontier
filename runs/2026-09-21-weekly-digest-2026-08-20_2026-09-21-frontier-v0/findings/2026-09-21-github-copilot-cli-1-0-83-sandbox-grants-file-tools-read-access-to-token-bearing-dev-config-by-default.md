---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-github-copilot-cli-1-0-83-sandbox-grants-file-tools-read-access-to-token-bearing-dev-config-by-default
source: github-copilot-cli
source_contract: sources/github-copilot-cli.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/github/copilot-cli/blob/c13b3dcae4f1/changelog.md?plain=1#L168
    precision: tagged_commit_file
---
# 2026-09-21-github-copilot-cli-1-0-83-sandbox-grants-file-tools-read-access-to-token-bearing-dev-config-by-default

1.0.83 sandbox grants file tools read access to token-bearing dev config by default. Sandboxed file tools now read the same developer-tool paths as sandboxed shell commands, "including token-bearing registry config such as ~/.npmrc". The opt-out is `sandbox.allowDevToolAccess: false`.

Channel: tagged-release. Half: defect. Date: 2026-09-04.

Operator consequence: Re-audit: the sandbox's default read set now includes registry credentials for the agent's file tools, not only its shell. If your threat model is prompt injection exfiltrating tokens, set `allowDevToolAccess` to false, and check that any managed/MDM policy uses the new key name (the 1.0.79 rename means an old `allowDevToolCaches: false` does nothing).

## Receipt
- https://github.com/github/copilot-cli/blob/c13b3dcae4f1/changelog.md?plain=1#L168
