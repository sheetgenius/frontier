---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-agent-zero-file-browser-advisories-require-authentication-and-mount-decisions
source: agent-zero
source_contract: sources/agent-zero.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://nvd.nist.gov/vuln/detail/CVE-2026-51852
    precision: official_docs
  - url: https://nvd.nist.gov/vuln/detail/CVE-2026-51853
    precision: official_docs
  - url: https://github.com/advisories/GHSA-h2gv-ghr5-8mhj
    precision: official_docs
  - url: https://github.com/advisories/GHSA-j6rq-qhh6-gpf5
    precision: official_docs
  - url: https://github.com/advisories/GHSA-rppc-c4xv-v29h
    precision: official_docs
  - url: https://github.com/agent0ai/agent-zero/blob/v2.14/helpers/file_browser.py#L83-L106
    precision: tagged_commit_file
  - url: https://github.com/agent0ai/agent-zero/blob/v2.14/helpers/login.py#L5-L15
    precision: tagged_commit_file
  - url: https://github.com/agent0ai/agent-zero/blob/v2.14/helpers/api.py#L175-L185
    precision: tagged_commit_file
  - url: https://github.com/agent0ai/agent-zero/blob/v2.14/docs/setup/installation.md#L71-L79
    precision: tagged_commit_file
---
# 2026-10-13-agent-zero-file-browser-advisories-require-authentication-and-mount-decisions

File-browser advisories require authentication and mount decisions. Two additional file-browser CVEs were published in this window: 51852 describes writes outside the intended workspace, and 51853 access to process-readable files. The advisory version/path combination does not map reliably to current tags. Tagged code independently roots the WebUI file browser at / and compares resolved directories against /; filename sanitization and normalization exist but do not confine directories. In Docker this is the container filesystem and mounts, subject to process permissions. Login is bypassed when no credentials hash exists; AUTH_LOGIN enables the login configuration. No scope restriction addressing this behavior was found through v2.14. The ledger's UID 0 result belongs to its named test container. Repository advisories remain empty; these two external records have no package mapping. An older MCP-configuration command-execution advisory already existed before the window, so these are not the first third-party CVEs.

Channel: docs-only. Half: defect. Date: 2026-09-30.

Operator consequence: Set AUTH_LOGIN and AUTH_PASSWORD before exposing the port outside a controlled network, and keep mounts narrow. Login limits who enters; authenticated users retain the file-browser scope. A version bump alone does not create workspace confinement. Do not promise a future Dependabot alert from records that presently lack package mappings, or infer maintainer intent from the root scope.

## Receipt
- https://nvd.nist.gov/vuln/detail/CVE-2026-51852
- https://nvd.nist.gov/vuln/detail/CVE-2026-51853
- https://github.com/advisories/GHSA-h2gv-ghr5-8mhj
- https://github.com/advisories/GHSA-j6rq-qhh6-gpf5
- https://github.com/advisories/GHSA-rppc-c4xv-v29h
- https://github.com/agent0ai/agent-zero/blob/v2.14/helpers/file_browser.py#L83-L106
- https://github.com/agent0ai/agent-zero/blob/v2.14/helpers/login.py#L5-L15
- https://github.com/agent0ai/agent-zero/blob/v2.14/helpers/api.py#L175-L185
- https://github.com/agent0ai/agent-zero/blob/v2.14/docs/setup/installation.md#L71-L79
