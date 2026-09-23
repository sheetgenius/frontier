---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-github-copilot-cli-1-0-83-sandbox-cuts-localhost-and-pins-linux-egress-to-the-proxy-breaking-default
source: github-copilot-cli
source_contract: sources/github-copilot-cli.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/github/copilot-cli/blob/c13b3dcae4f1/changelog.md?plain=1#L181-L185
    precision: tagged_commit_file
  - url: https://github.com/github/copilot-cli/releases/tag/v1.0.83
    precision: github_release
---
# 2026-09-21-github-copilot-cli-1-0-83-sandbox-cuts-localhost-and-pins-linux-egress-to-the-proxy-breaking-default

1.0.83 sandbox cuts localhost and pins Linux egress to the proxy (breaking default). On macOS and Linux, sandboxed commands can no longer reach services on the local machine. On macOS that includes a server the command itself starts on 127.0.0.1, so test suites that bind a local port fail until "Allow local network" is turned on in `/sandbox` (L181). Linux sandboxing now requires slirp4netns, nsenter, iptables, ip6tables and the restore tools on PATH (L182), and Linux sandboxes restrict network egress to the configured proxy (L185). 1.0.86 made `/sandbox policy` report local-network access from the configured setting (L33). 1.0.87 made sandbox proxies work on Windows and with username/password everywhere (L7).

Channel: tagged-release. Half: both. Date: 2026-09-04.

Operator consequence: Upgrade test: if you run the sandbox, rerun any test suite that binds a port after moving to 1.0.83 or later; expect failures on macOS until you set Allow local network. On Linux hosts and containers, install the listed network tools first or sandboxed commands fail to launch. The capability half: sandbox network isolation now covers loopback, which closes a lateral path to local dev services (databases, metadata proxies) that the prior sandbox left open.

## Receipt
- https://github.com/github/copilot-cli/blob/c13b3dcae4f1/changelog.md?plain=1#L181-L185
- https://github.com/github/copilot-cli/releases/tag/v1.0.83
