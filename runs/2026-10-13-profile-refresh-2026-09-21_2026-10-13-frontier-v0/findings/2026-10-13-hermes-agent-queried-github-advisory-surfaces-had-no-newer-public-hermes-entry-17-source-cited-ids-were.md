---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-hermes-agent-queried-github-advisory-surfaces-had-no-newer-public-hermes-entry-17-source-cited-ids-were
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/NousResearch/hermes-agent/security/advisories
    precision: official_docs
  - url: https://api.github.com/advisories?affects=hermes-agent&per_page=100
    precision: official_docs
  - url: https://github.com/NousResearch/hermes-agent/blob/v0.21.7/plugins/platforms/telegram/adapter.py#L3096-L3110
    precision: tagged_commit_file
  - url: https://github.com/NousResearch/hermes-agent/blob/v0.21.7/gateway/platforms/webhook.py#L370-L380
    precision: tagged_commit_file
  - url: https://nvd.nist.gov/vuln/detail/CVE-2026-71963
    precision: official_docs
  - url: https://nvd.nist.gov/vuln/detail/CVE-2026-108593
    precision: official_docs
---
# 2026-10-13-hermes-agent-queried-github-advisory-surfaces-had-no-newer-public-hermes-entry-17-source-cited-ids-were

Queried GitHub advisory surfaces had no newer public Hermes entry; 17 source-cited ids were inaccessible. No newer public Hermes entry was found in the queried GitHub advisory surfaces. Seventeen source-cited IDs were inaccessible. NVD contains a September GitSpawn CVE, and this search found no new Hermes-product CVE published in the UTC window. These observations do not establish complete coverage of OSV, Dependabot, every ecosystem alias, private advisories, or every vendor disclosure. VulnCheck's CVE-2026-71963, published September 3 and Deferred at NVD, gives 0.18.2 through 0.21.0 and f6234d0 for the earlier fixed-key GitSpawn issue; that range does not describe the later filter-driver bypass. October 10 CVE-2026-108593 describes configuration injection by an authenticated 9router dashboard user, not a new Hermes-product flaw. Tagged Telegram and webhook files cite inaccessible GHSA references.

Channel: tagged-release (state of the v0.21.7 source and the public advisory record). Half: defect. Date: 2026-10-13.

Operator consequence: Use versioned release notes and pinned security changes alongside advisory feeds, rather than assuming those feeds are complete for Hermes. For affected-range work, distinguish the issuing record's earlier GitSpawn range from the source inclusion checks for later fixes. Inaccessible IDs cannot prove a bug mechanism or range. Publication of those IDs with explicit affected ranges would close the specific disclosure gap.

## Receipt
- https://github.com/NousResearch/hermes-agent/security/advisories
- https://api.github.com/advisories?affects=hermes-agent&per_page=100
- https://github.com/NousResearch/hermes-agent/blob/v0.21.7/plugins/platforms/telegram/adapter.py#L3096-L3110
- https://github.com/NousResearch/hermes-agent/blob/v0.21.7/gateway/platforms/webhook.py#L370-L380
- https://nvd.nist.gov/vuln/detail/CVE-2026-71963
- https://nvd.nist.gov/vuln/detail/CVE-2026-108593
