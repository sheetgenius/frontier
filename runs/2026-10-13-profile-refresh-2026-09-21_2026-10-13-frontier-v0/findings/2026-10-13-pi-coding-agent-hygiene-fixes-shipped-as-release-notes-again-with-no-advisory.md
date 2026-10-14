---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-pi-coding-agent-hygiene-fixes-shipped-as-release-notes-again-with-no-advisory
source: pi-coding-agent
source_contract: sources/pi-coding-agent.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/earendil-works/pi/commit/d677d0ee7134f834dfc163bf6bdb395df9e57c6b
    precision: commit
  - url: https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/utils/output-files.ts#L14-L34
    precision: tagged_commit_file
  - url: https://github.com/earendil-works/pi/releases/tag/v1.0.1
    precision: github_release
  - url: https://github.com/advisories/GHSA-qhr7-859c-m2p7
    precision: official_docs
  - url: https://github.com/earendil-works/pi/security/advisories
    precision: official_docs
  - url: https://github.com/advisories/GHSA-q2hr-2g5m-vwhr
    precision: official_docs
  - url: https://github.com/advisories/GHSA-6j4f-fj2g-mc7p
    precision: official_docs
  - url: https://github.com/advisories/GHSA-jfgx-wxx8-mp94
    precision: official_docs
---
# 2026-10-13-pi-coding-agent-hygiene-fixes-shipped-as-release-notes-again-with-no-advisory

Hygiene fixes shipped as release notes, again with no advisory. Before 1.0.3, some bash/PowerShell overflow and binary MCP resource output files used default process permissions. Under umask 022 on a shared temp filesystem, another local user could read them. From 1.0.3 new files use 0600 and exclusive wx creation. The old output names already used randomness. June's GHSA-jfgx-wxx8-mp94 / CVE-2026-54328 was a different mechanism: a local attacker could preplant extension code in a predictable directory and execute it as the Pi user. The October change establishes output confidentiality and exclusive creation, not that same code-execution exploit. No new Pi-repository advisory was found for the output-file or dotenv fixes; the brace-expansion dependency fixes explicitly address three GHSAs. These allow CPU/event-loop exhaustion (GHSA-q2hr-2g5m-vwhr / CVE-2026-102277, fixed in 5.0.12), nested-expansion stack exhaustion (GHSA-qhr7-859c-m2p7 / CVE-2026-102278, fixed in 5.0.11), and recursive-comma/argument stack exhaustion (GHSA-6j4f-fj2g-mc7p / CVE-2026-102276, fixed in 5.0.10). Pi 1.0.1 pins 5.0.12 and covers all three availability defects; none establishes credential theft or arbitrary code execution.

Channel: tagged-release (v1.0.0 to v1.2.0). Half: defect. Date: 2026-10-05.

Operator consequence: On shared Linux hosts, move to 1.0.3 or later and clear old `pi-bash-*`, `pi-output-*`, `pi-powershell-*` and `pi-mcp-*` files from `/tmp`. Track release notes, not the advisory feed: the repository has published no advisory since 8 June while shipping these fixes.

## Receipt
- https://github.com/earendil-works/pi/commit/d677d0ee7134f834dfc163bf6bdb395df9e57c6b
- https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/utils/output-files.ts#L14-L34
- https://github.com/earendil-works/pi/releases/tag/v1.0.1
- https://github.com/advisories/GHSA-qhr7-859c-m2p7
- https://github.com/earendil-works/pi/security/advisories
- https://github.com/advisories/GHSA-q2hr-2g5m-vwhr
- https://github.com/advisories/GHSA-6j4f-fj2g-mc7p
- https://github.com/advisories/GHSA-jfgx-wxx8-mp94
