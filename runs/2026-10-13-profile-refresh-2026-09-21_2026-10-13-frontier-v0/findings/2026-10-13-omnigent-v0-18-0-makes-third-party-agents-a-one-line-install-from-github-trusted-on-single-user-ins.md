---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-omnigent-v0-18-0-makes-third-party-agents-a-one-line-install-from-github-trusted-on-single-user-ins
source: omnigent
source_contract: sources/omnigent.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/cli.py#L11742-L11830
    precision: tagged_commit_file
  - url: https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/server/routes/builtin_agents.py#L338-L366
    precision: tagged_commit_file
  - url: https://github.com/omnigent-ai/omnigent/blob/v0.18.0/docs/AGENT_YAML_SPEC.md#L570-L588
    precision: tagged_commit_file
  - url: https://github.com/omnigent-ai/omnigent/pull/8677
    precision: merged_pr
  - url: https://github.com/omnigent-ai/omnigent/releases/tag/v0.18.0
    precision: github_release
---
# 2026-10-13-omnigent-v0-18-0-makes-third-party-agents-a-one-line-install-from-github-trusted-on-single-user-ins

v0.18.0 makes third-party agents a one-line install from GitHub, trusted on single-user installs and rejected if they contain server-side source tools on multi-user servers. Reusable custom agents can now be installed from a local directory, a YAML file, a tarball or a GitHub repository with `omnigent agent add`, listed and removed, and they follow the user to every host. On a multi-user server an installed bundle gets the untrusted-upload treatment, and from this release it may not carry server-side Python or TypeScript source tools at all, nested agents included; existing uploaded agents that use them fail validation when re-uploaded or when their MCP settings are edited, and must move those tools to MCP, upload the replacement and start new sessions; re-uploading does not rewrite old sessions. On a single-user local install the same command treats a GitHub repository's bundle as operator-authored: execution occurs later at tool discovery, policy loading or MCP startup, rather than every declaration executing at installation. Source-tool module bodies run in-process during discovery and function policies import Python during loading. The install confirmation is a trust warning, not containment.

Channel: tagged-release. Half: both. Date: 2026-10-13.

Operator consequence: Treat `omnigent agent add owner/repo` like `pip install` from that repository: read the bundle's tools, policies and MCP servers before confirming, and never script `--yes` against repositories you do not control. Shared-server admins should inventory uploaded agents for `.py` and `.ts` server tools and plan the MCP migration before upgrading; that migration is the price of closing GHSA-jw77. Agents becoming installable packages moves the review burden from writing agents to vetting them.

## Receipt
- https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/cli.py#L11742-L11830
- https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/server/routes/builtin_agents.py#L338-L366
- https://github.com/omnigent-ai/omnigent/blob/v0.18.0/docs/AGENT_YAML_SPEC.md#L570-L588
- https://github.com/omnigent-ai/omnigent/pull/8677
- https://github.com/omnigent-ai/omnigent/releases/tag/v0.18.0
