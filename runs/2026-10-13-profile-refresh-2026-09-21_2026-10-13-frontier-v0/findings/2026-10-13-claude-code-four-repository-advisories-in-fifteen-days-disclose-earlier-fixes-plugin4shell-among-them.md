---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-claude-code-four-repository-advisories-in-fifteen-days-disclose-earlier-fixes-plugin4shell-among-them
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/anthropics/claude-code/security/advisories/GHSA-pq7j-f95f-qfcv
    precision: official_docs
  - url: https://github.com/anthropics/claude-code/security/advisories/GHSA-5j29-h97v-84ch
    precision: official_docs
  - url: https://github.com/anthropics/claude-code/security/advisories/GHSA-gfvf-j8jh-jxxw
    precision: official_docs
  - url: https://github.com/anthropics/claude-code/security/advisories/GHSA-v234-4jrq-mgg6
    precision: official_docs
  - url: https://nvd.nist.gov/vuln/detail/CVE-2026-103012
    precision: official_docs
  - url: https://nvd.nist.gov/vuln/detail/CVE-2026-103435
    precision: official_docs
---
# 2026-10-13-claude-code-four-repository-advisories-in-fifteen-days-disclose-earlier-fixes-plugin4shell-among-them

Four repository advisories in fifteen days disclose earlier fixes, Plugin4Shell among them as CVE-2026-86063. After three months with nothing new, the advisory list gained four entries between 2026-09-25 and 2026-10-09, each disclosing a fix that had already shipped; the three CLI fixes shipped 26 days to five months before their advisories. Plugin4Shell, fixed silently in 2.1.179, now has CVE-2026-86063 and an advisory crediting Air Security; a write-path symlink race fixed silently in 2.1.129 has CVE-2026-103435. GHSA-gfvf records that until 2.1.260, a machine holding a stored API key could run an Enterprise or Team session with no server-managed policy, or a stale one. None has reached the global GitHub advisory database at observation. The three CLI advisories have not reached npm dependency scanners yet; the Desktop advisory is outside their ecosystem. NVD already lists CVE-2026-103012 and CVE-2026-103435.

Channel: docs-only (advisory publication); the fixes are tagged-release in 2.1.129, 2.1.179 and 2.1.260, all before the window, and in Claude Desktop 1.15962.0. Half: defect. Date: 2026-09-25, 2026-09-29, 2026-10-05, 2026-10-09.

Operator consequence: The advisory list is now a delayed record, not an alert: it tells you weeks to months later that a changelog line, or a missing one, was a security fix. Fleets that relied on server-managed settings below 2.1.260 should treat policy as possibly unapplied on machines with a leftover API key and check which policy source `/status` reports. Watch the repository advisory page directly, because dependency scanners have not raised them yet; NVD lists CVE-2026-103012 and CVE-2026-103435. This is a dated database gap, not a claim that scanners can never report them. The changelog read line by line is still the only timely signal, and it remains incomplete.

## Receipt
- https://github.com/anthropics/claude-code/security/advisories/GHSA-pq7j-f95f-qfcv
- https://github.com/anthropics/claude-code/security/advisories/GHSA-5j29-h97v-84ch
- https://github.com/anthropics/claude-code/security/advisories/GHSA-gfvf-j8jh-jxxw
- https://github.com/anthropics/claude-code/security/advisories/GHSA-v234-4jrq-mgg6
- https://nvd.nist.gov/vuln/detail/CVE-2026-103012
- https://nvd.nist.gov/vuln/detail/CVE-2026-103435
