---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-agent-flywheel-website-dependency-fixes-change-one-lockfile-six-advisories-have-conditional-mechanisms
source: agent-flywheel
source_contract: sources/agent-flywheel.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/37f5c6defa9ad2757c0becce72c3eca4ab0edd66
    precision: commit
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/bun.lock
    precision: tagged_commit_file
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/0bf744a81c319accaa62d763bce97073ac693ef5/apps/web/bun.lock#L675
    precision: tagged_commit_file
  - url: https://github.com/advisories/GHSA-cjq9-62q9-8jv4
    precision: official_docs
  - url: https://github.com/advisories/GHSA-39w2-rjm5-chcv
    precision: official_docs
  - url: https://github.com/advisories/GHSA-f87g-xv8r-7p7x
    precision: official_docs
  - url: https://github.com/advisories/GHSA-mcj8-r9mp-w47p
    precision: official_docs
  - url: https://github.com/advisories/GHSA-4jqv-mc3x-m676
    precision: official_docs
  - url: https://github.com/lovell/sharp/security/advisories/GHSA-wq5f-xc86-pv6w
    precision: official_docs
  - url: https://nvd.nist.gov/vuln/detail/CVE-2026-96889
    precision: official_docs
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/apps/web/next.config.ts#L80-L87
    precision: tagged_commit_file
---
# 2026-10-13-agent-flywheel-website-dependency-fixes-change-one-lockfile-six-advisories-have-conditional-mechanisms

Website dependency fixes change one lockfile; six advisories have conditional mechanisms. Five Next advisories published October 7 match 16.1.4 and name 16.3.8 as the first fixed 16.x version. GHSA-cjq9 allows internal-address image requests through an attacker-controlled allowed remote endpoint; ACFS restricts remotePatterns to its GitHub repository. GHSA-39w2 exposes dev paths, source snippets, routes and logs through next dev MCP, not production. GHSA-f87g exposes omitted dynamic metadata-image routes in App Router webpack builds. GHSA-mcj8 permits shared-cache poisoning with root catch-all plus SSG/ISR routes. GHSA-4jqv permits cross-route cached-content substitution in self-hosted Pages Router SSG/ISR and excludes Vercel. Sharp GHSA-wq5f, published October 6, references CVE-2026-96889, which NVD published September 23: crafted SVG nested XML inclusions can trigger librsvg use-after-free and a crash or possible code execution, with Sharp limiting RCE to specific glibc/Linux conditions and recommending 0.35.5 prebuilt binaries. Deployment prerequisites are unverified. The older Next AVIF disclosure is outside the window.

Channel: main-unreleased. Half: defect. Date: 2026-10-11.

Operator consequence: For website development or self-hosting, identify the authoritative install lock and image/rendering routes before assigning exposure. Do not extend web/build dependency findings to every provisioned VPS or claim the live site is fixed. The root upgrade is untagged and does not repair the independent web lock.

## Receipt
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/37f5c6defa9ad2757c0becce72c3eca4ab0edd66
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/bun.lock
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/0bf744a81c319accaa62d763bce97073ac693ef5/apps/web/bun.lock#L675
- https://github.com/advisories/GHSA-cjq9-62q9-8jv4
- https://github.com/advisories/GHSA-39w2-rjm5-chcv
- https://github.com/advisories/GHSA-f87g-xv8r-7p7x
- https://github.com/advisories/GHSA-mcj8-r9mp-w47p
- https://github.com/advisories/GHSA-4jqv-mc3x-m676
- https://github.com/lovell/sharp/security/advisories/GHSA-wq5f-xc86-pv6w
- https://nvd.nist.gov/vuln/detail/CVE-2026-96889
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/apps/web/next.config.ts#L80-L87
