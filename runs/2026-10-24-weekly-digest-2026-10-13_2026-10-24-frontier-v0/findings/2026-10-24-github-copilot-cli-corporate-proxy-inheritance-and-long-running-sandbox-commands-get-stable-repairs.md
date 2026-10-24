---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-github-copilot-cli-corporate-proxy-inheritance-and-long-running-sandbox-commands-get-stable-repairs
source: github-copilot-cli
source_contract: sources/github-copilot-cli.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/github/copilot-cli/releases/tag/v1.0.100
    precision: github_release
  - url: https://github.com/github/copilot-cli/releases/tag/v1.0.102
    precision: github_release
  - url: https://github.com/github/copilot-cli/releases/tag/v1.0.103
    precision: github_release
  - url: https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/reference/copilot-cli-reference/cli-config-dir-reference.md#L546-L552
    precision: tagged_commit_file
---
# 2026-10-24-github-copilot-cli-corporate-proxy-inheritance-and-long-running-sandbox-commands-get-stable-repairs

Corporate proxy inheritance and long-running sandbox commands get stable repairs. Host-rule traffic can inherit `HTTPS_PROXY` and `HTTP_PROXY` from 1.0.100; 1.0.102 adds `NO_PROXY` and `ALL_PROXY` and fixes sandboxed commands becoming unreliable after ten seconds. Docs specify HTTPS_PROXY, HTTP_PROXY, then ALL_PROXY; only HTTP(S) upstreams are supported. NO_PROXY skips the inherited upstream, not the local policy proxy, and does not override an explicitly configured sandbox proxy. Releases also repair Linux loopback startup, explain credential-proxy certificate failures, allow an approved unsandboxed retry, and broaden enabled developer-tool cache grants to package/build caches, dnx, and Windows shims. Configured GITHUB_TOKEN injection for sandboxed Git on github.com is supported in 1.0.100.

Channel: tagged-release. Half: both. Date: 2026-10-21.

Operator consequence: Retest a real proxy destination, a NO_PROXY destination, a blocked host, and a command lasting over ten seconds on 1.0.103. Review `/sandbox policy COMMAND` for cache writes before removing local workarounds. A certificate-error retry outside the sandbox trades containment for completion; fix trust first when possible. These repairs cover sandbox traffic, not every helper process: the separate voice-runtime report in Leads not promoted remains unconfirmed.

## Receipt
- https://github.com/github/copilot-cli/releases/tag/v1.0.100
- https://github.com/github/copilot-cli/releases/tag/v1.0.102
- https://github.com/github/copilot-cli/releases/tag/v1.0.103
- https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/reference/copilot-cli-reference/cli-config-dir-reference.md#L546-L552
