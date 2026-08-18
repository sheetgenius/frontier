---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-10-eve-eve-0-30-0-closes-a-host-header-path-to-the-synthetic-local-dev
source: eve
source_contract: sources/eve.yml
window:
  start: 2026-08-03
  end: 2026-08-10
status: accepted
confidence: high
evidence:
  - url: https://github.com/vercel/eve/releases/tag/eve%400.30.0
    precision: github_release
---
# 2026-08-10-eve-eve-0-30-0-closes-a-host-header-path-to-the-synthetic-local-dev

eve 0.30.0 closes a Host-header path to the synthetic local-dev principal on self-hosted servers.

`localDev()` now grants the synthetic local principal based on the deployment  --  an `eve dev` or `vercel dev` process  --  instead of on the request URL host. Before this, a request `Host` header could obtain local-dev access on a self-hosted server. The previously exported `isLoopbackRequest` helper is removed, and the default eve channel now falls back to `[vercelOidc(), localDev(), placeholderAuth()]`, which keeps local development working while rejecting all production traffic.

Channel: tagged-release. Ancestry: `gh api repos/vercel/eve/releases` lists eve@0.30.0 published 2026-08-04T14:26:36Z with prerelease=false, draft=false. Ancestry: `gh api 'repos/vercel/eve/compare/eve%400.29.5...eve%400.30.0'` returned the commit list 021dbbf 136749f ee50ae7 13420ab 15ab367 39662ad f43b22d 56651ee e1cd7b7 5e3119b cbf6f25 6c5f4fe, which contains the change commit f43b22d  --  so f43b22d is in the history of the stable tag eve@0.30.0. No GitHub Security Advisory exists for this repo (`gh api repos/vercel/eve/security-advisories` returned empty), so there is no CVE or GHSA to cite; the release note is the only primary record.

Operator consequence: This is an authentication bypass class  --  attacker-controlled request metadata (the `Host` header) was sufficient to be admitted as the trusted local principal. It bites self-hosted deployments specifically, not Vercel-hosted ones behind OIDC. If you run eve anywhere other than Vercel and your channel auth chain includes `localDev()`, upgrade to eve@0.30.0 or later and then re-audit: assume the local principal was reachable from outside for the life of your deployment, and check what tools and connections that principal could call. Anyone importing `isLoopbackRequest` has a compile break and should treat that break as the signal to re-derive their auth boundary, not to reimplement the helper.

## Receipt
- https://github.com/vercel/eve/releases/tag/eve%400.30.0
