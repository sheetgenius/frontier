---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-temporal-agent-harness-the-nexus-mcp-extra-cannot-resolve-from-public-pypi-alone-as-observed
source: temporal-agent-harness
source_contract: sources/temporal-agent-harness.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/pyproject.toml#L91-L108
    precision: tagged_commit_file
  - url: https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/nexus/mcp/pyproject.toml#L1-L9
    precision: tagged_commit_file
  - url: https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/examples/nexus_hello/README.md#L197-L200
    precision: tagged_commit_file
  - url: https://pypi.org/project/temporal-agent-harness/0.6.0/
    precision: package_registry
  - url: https://github.com/temporal-community/temporal-agent-harness/commit/d2e7abc74d28d2248f8659cf577b438a96706ee4
    precision: commit
  - url: https://pypi.org/pypi/temporal-nexus-mcp/json
    precision: package_registry
  - url: https://pypi.org/simple/temporal-nexus-mcp/
    precision: package_registry
---
# 2026-10-13-temporal-agent-harness-the-nexus-mcp-extra-cannot-resolve-from-public-pypi-alone-as-observed

The nexus-mcp extra cannot resolve from public PyPI alone as observed. Nothing changed in the window; this is newly verified prior posture. The unqualified temporal-nexus-mcp requirement is in wheel metadata since 0.3.0 (originally with a Python >=3.13 marker). The project comments describe checkout-only workspace resolution; the local path source does not travel in built metadata. Public PyPI JSON and simple endpoints returned 404 in the recorded checks. The extra cannot resolve from public PyPI alone as observed. Its unqualified requirement would trust whatever compatible distribution a configured index supplies, if one became available. No malicious publication or dependency-confusion attack was observed. A 404 does not establish whether the name is owned, reserved, blocked or available. The example uses uv sync --extra nexus-mcp from a checkout where the workspace points at its local package.

Channel: preview-or-beta (published wheel metadata). Half: defect. Date: 2026-10-03 (verified at 0.6.0; present since 0.3.0, 2026-09-11).

Operator consequence: Use the documented checkout/workspace path for Nexus MCP, or verify a trusted private index explicitly. Do not expect a public-PyPI-only install of the extra to resolve. Inspect the source and hash of any temporal-nexus-mcp resolution in your lock. Removal of the extra from public metadata or an authenticated project distribution would settle the packaging gap.

## Receipt
- https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/pyproject.toml#L91-L108
- https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/nexus/mcp/pyproject.toml#L1-L9
- https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/examples/nexus_hello/README.md#L197-L200
- https://pypi.org/project/temporal-agent-harness/0.6.0/
- https://github.com/temporal-community/temporal-agent-harness/commit/d2e7abc74d28d2248f8659cf577b438a96706ee4
- https://pypi.org/pypi/temporal-nexus-mcp/json
- https://pypi.org/simple/temporal-nexus-mcp/
