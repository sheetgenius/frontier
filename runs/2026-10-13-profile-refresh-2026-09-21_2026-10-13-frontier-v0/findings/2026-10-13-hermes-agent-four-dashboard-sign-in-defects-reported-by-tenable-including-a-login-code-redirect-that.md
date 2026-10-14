---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-hermes-agent-four-dashboard-sign-in-defects-reported-by-tenable-including-a-login-code-redirect-that
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/NousResearch/hermes-agent/releases/tag/v0.21.6
    precision: github_release
  - url: https://github.com/NousResearch/hermes-agent/commit/725c3ec4bc4283f73fce3e881e8187f4e30fb4e4
    precision: commit
  - url: https://github.com/NousResearch/hermes-agent/commit/c83fe1b2c4eabe0765430b8e78e362247f0be37e
    precision: commit
  - url: https://github.com/NousResearch/hermes-agent/commit/66fa864f1950fd57bec0df72dd94dec880621b8c
    precision: commit
  - url: https://github.com/NousResearch/hermes-agent/commit/ed4c35076b797bf93c09e611e4f129983dcdc2d3
    precision: commit
  - url: https://github.com/NousResearch/hermes-agent/blob/v0.21.7/plugins/dashboard_auth/basic/__init__.py#L125-L202
    precision: tagged_commit_file
  - url: https://github.com/NousResearch/hermes-agent/blob/v0.21.7/hermes_cli/web_server.py#L522-L565
    precision: tagged_commit_file
  - url: https://github.com/NousResearch/hermes-agent/blob/v0.21.7/docker/s6-rc.d/dashboard/run#L30-L46
    precision: tagged_commit_file
---
# 2026-10-13-hermes-agent-four-dashboard-sign-in-defects-reported-by-tenable-including-a-login-code-redirect-that

Four dashboard sign-in defects reported by Tenable, including a login-code redirect that allowed session takeover, fixed in v0.21.6. The v0.21.6 notes credit Tenable Research (TRA-725 to TRA-728) for four dashboard-auth issues. The public `GET /auth/native/authorize` route validated `redirect_uri` with Python's URL parser but stored the raw string, so a URI the server read as loopback could send the browser, and the one-time login code, to another host after a real sign-in; the PR calls this the public counterpart of a privately reported advisory. A spoofed X-Forwarded-For reset the password-login rate limit, unauthenticated login requests could write unbounded values to the auth audit log, and the public /auth/ routes had no request-body limit. The auth gate normally engages on non-loopback binds, and configured public URLs can engage it even on loopback. There is a credentialed Desktop-owned exception. The container entry point ignores HERMES_DASHBOARD_INSECURE as an auth bypass. Tenable attribution comes from the vendor release; its private reports were not opened.

Channel: tagged-release. Half: defect. Date: 2026-10-08.

Operator consequence: For a remotely reachable dashboard, upgrade to v0.21.6+ and revoke sessions minted before the fix. For Basic Auth, rotate the effective signing secret and restart to load it. HERMES_DASHBOARD_BASIC_AUTH_SECRET overrides the config secret; if neither is set, restart rotates the process-random key. This does not revoke sessions issued by other auth providers; use their revocation mechanism. Configure dashboard.trusted_proxies for your actual proxy chain. No public Tenable write-up or issue-specific GHSA was recovered in the checked surfaces.

## Receipt
- https://github.com/NousResearch/hermes-agent/releases/tag/v0.21.6
- https://github.com/NousResearch/hermes-agent/commit/725c3ec4bc4283f73fce3e881e8187f4e30fb4e4
- https://github.com/NousResearch/hermes-agent/commit/c83fe1b2c4eabe0765430b8e78e362247f0be37e
- https://github.com/NousResearch/hermes-agent/commit/66fa864f1950fd57bec0df72dd94dec880621b8c
- https://github.com/NousResearch/hermes-agent/commit/ed4c35076b797bf93c09e611e4f129983dcdc2d3
- https://github.com/NousResearch/hermes-agent/blob/v0.21.7/plugins/dashboard_auth/basic/__init__.py#L125-L202
- https://github.com/NousResearch/hermes-agent/blob/v0.21.7/hermes_cli/web_server.py#L522-L565
- https://github.com/NousResearch/hermes-agent/blob/v0.21.7/docker/s6-rc.d/dashboard/run#L30-L46
