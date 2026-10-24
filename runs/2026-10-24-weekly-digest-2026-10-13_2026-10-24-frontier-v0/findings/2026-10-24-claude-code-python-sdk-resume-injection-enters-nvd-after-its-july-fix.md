---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-claude-code-python-sdk-resume-injection-enters-nvd-after-its-july-fix
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://nvd.nist.gov/vuln/detail/CVE-2026-96620
    precision: official_docs
  - url: https://services.nvd.nist.gov/rest/json/cves/2.0?cveId=CVE-2026-96620
    precision: official_docs
  - url: https://github.com/anthropics/claude-agent-sdk-python/security/advisories/GHSA-h4mw-j7qp-8mwm
    precision: official_docs
  - url: https://github.com/anthropics/claude-agent-sdk-python/commit/347a1cb88d7652199399db1b7f914e0a459a6662
    precision: commit
  - url: https://github.com/anthropics/claude-agent-sdk-python/compare/347a1cb88d7652199399db1b7f914e0a459a6662...v0.2.121
    precision: git_compare
  - url: https://github.com/anthropics/claude-agent-sdk-python/releases/tag/v0.2.121
    precision: github_release
  - url: https://pypi.org/pypi/claude-agent-sdk/0.2.121/json
    precision: package_registry
---
# 2026-10-24-claude-code-python-sdk-resume-injection-enters-nvd-after-its-july-fix

Python SDK resume injection enters NVD after its July fix. NVD published CVE-2026-96620 at 2026-10-16T20:18:28.293Z and modified it at 2026-10-21T22:16:50.597Z. The canonical advisory was already public on 12 September. Python claude-agent-sdk below 0.2.121 passed an untrusted resume ID as a separate CLI argument: an attacker-controlled dash-leading ID could inject an MCP configuration and execute a stdio server at startup outside SDK permission controls. The July fix binds resume/session-id values with an equals sign.

Channel: tagged-release. Half: defect. Date: 2026-10-16.

Operator consequence: Check the installed Python SDK dependency separately from the CLI pin, especially applications accepting resume IDs from requests. Use a fixed SDK, 0.2.121 or later. This is a newly indexed disclosure of an older fixed boundary, not a new CLI 310 vulnerability or proof that upgrading the CLI repairs an old SDK.

## Receipt
- https://nvd.nist.gov/vuln/detail/CVE-2026-96620
- https://services.nvd.nist.gov/rest/json/cves/2.0?cveId=CVE-2026-96620
- https://github.com/anthropics/claude-agent-sdk-python/security/advisories/GHSA-h4mw-j7qp-8mwm
- https://github.com/anthropics/claude-agent-sdk-python/commit/347a1cb88d7652199399db1b7f914e0a459a6662
- https://github.com/anthropics/claude-agent-sdk-python/compare/347a1cb88d7652199399db1b7f914e0a459a6662...v0.2.121
- https://github.com/anthropics/claude-agent-sdk-python/releases/tag/v0.2.121
- https://pypi.org/pypi/claude-agent-sdk/0.2.121/json
