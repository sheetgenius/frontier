---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-github-copilot-cli-sandboxed-commands-now-get-placeholder-credentials-github-token-withheld-1-0-92-and-a-loca
source: github-copilot-cli
source_contract: sources/github-copilot-cli.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/github/copilot-cli/blob/a3f560eca2c0/changelog.md?plain=1#L60
    precision: tagged_commit_file
  - url: https://github.com/github/copilot-cli/blob/a3f560eca2c0/changelog.md?plain=1#L75
    precision: tagged_commit_file
  - url: https://github.com/github/copilot-cli/blob/a3f560eca2c0/changelog.md?plain=1#L93
    precision: tagged_commit_file
  - url: https://github.com/github/docs/blob/602021b0ba16/content/copilot/how-tos/cloud-and-local-sandboxes/configuring-local-sandbox-settings.md?plain=1#L155-L157
    precision: tagged_commit_file
  - url: https://github.com/github/docs/blob/602021b0ba16/content/copilot/how-tos/cloud-and-local-sandboxes/using-local-sandboxing.md?plain=1#L103
    precision: tagged_commit_file
  - url: https://github.com/github/docs/blob/602021b0ba16/content/copilot/how-tos/cloud-and-local-sandboxes/using-local-sandboxing.md?plain=1#L176-L182
    precision: tagged_commit_file
---
# 2026-10-13-github-copilot-cli-sandboxed-commands-now-get-placeholder-credentials-github-token-withheld-1-0-92-and-a-loca

Sandboxed commands now get placeholder credentials: GITHUB_TOKEN withheld (1.0.92), and a local proxy injects the real Git, gh and chosen secrets per host. In 1.0.92, sandboxed shells "withhold ambient GITHUB_TOKEN unless explicitly configured" (L60), and sandboxed Git authenticates "with masked credentials and SSH remote rewrites" (L75). 1.0.91 adds `copilot sandbox ca` to create, trust, rotate and remove the proxy's CA (L93). Per the docs, sandboxed processes get placeholders. The local proxy supplies real Git credentials only at their original host, port and repository path, and the real `gh` token only to github.com, api.github.com and uploads.github.com (how-to L155-L156). For any other secret, `sandbox.credentials.envVars.<NAME>.injectHosts` masks the variable, and the proxy puts the real value only into HTTPS request headers sent to the listed hosts (config ref L502; how-to L157). 1.0.95 lets `copilot config` set injectHosts keys (L16), and 1.0.96 suggests likely secrets in the settings dialog (L3). The docs state four limits. A full approved bypass "skips credential masking and the sandbox proxy", restoring the ordinary environment, which can contain real secrets (using L103). Masking does not hide credential files, other variables, or remote MCP auth (L182). Trusting the CA in the OS store "also changes certificate trust for applications outside" the CLI (L176). On Windows, masking needs Allow local network, which also opens private-network access.

Channel: tagged-release (1.0.91 L93; 1.0.92 L60, L75; 1.0.95 L16; 1.0.96 L3); docs-only for the masked-variable how-to (64d77f5e0fcf, 2026-10-08). Half: capability. Date: 2026-10-01 to 2026-10-12.

Operator consequence: The vendor documents withholding ambient GITHUB_TOKEN unless configured, and placeholder substitution for configured masked variables and enabled Git/gh authentication. Exfiltration resistance has not been tested; credential files and unmasked variables remain outside this protection. List the API tokens your agent uses as masked variables with tight injectHosts. Install the CA in the OS trust store only if a tool requires it, because that changes trust outside the CLI. Token files such as ~/.npmrc remain a separate exposure under default developer-tool access. A full bypass restores the ordinary environment, which can contain real secrets. The proposed attention saving is less inspection of ambient credentials in every command; the new maintenance cost is an injection-host list per secret.

## Receipt
- https://github.com/github/copilot-cli/blob/a3f560eca2c0/changelog.md?plain=1#L60
- https://github.com/github/copilot-cli/blob/a3f560eca2c0/changelog.md?plain=1#L75
- https://github.com/github/copilot-cli/blob/a3f560eca2c0/changelog.md?plain=1#L93
- https://github.com/github/docs/blob/602021b0ba16/content/copilot/how-tos/cloud-and-local-sandboxes/configuring-local-sandbox-settings.md?plain=1#L155-L157
- https://github.com/github/docs/blob/602021b0ba16/content/copilot/how-tos/cloud-and-local-sandboxes/using-local-sandboxing.md?plain=1#L103
- https://github.com/github/docs/blob/602021b0ba16/content/copilot/how-tos/cloud-and-local-sandboxes/using-local-sandboxing.md?plain=1#L176-L182
