# Harvest: OpenHands (window 2026-06-04 .. 2026-06-16) — productized-platform calibration source

coverage: tool_access_ok=true (gh api + WebFetch). repo_url_used=github.com/OpenHands/OpenHands (canonical confirmed, NOT All-Hands-AI). One tagged release 1.8.0 (2026-06-10, largely CONSOLIDATES pre-window May work) + 83 in-window commits. App versions 1.7→1.8.0; SDK 1.25→1.28.0 (the "5.x" expectation N/A). Almost all substantive in-window work = enterprise/SaaS multi-tenant (OHE = OpenHands Enterprise, Replicated/KOTS). 4 security items: 2 CVEs + 2 credential/error hardening + 1 auth-revocation. Sibling repos OpenHands-Cloud/software-agent-sdk out of scope.

## Findings (17)

1. **2026-06-05-openhands-cve-2026-42342-react-router** (06-05; PR#14684, in 1.8.0) — **security ADVISORY**. react-router ^7.12→^7.15 (lockfile 7.17.0) fixes CVE-2026-42342 (frontend). Receipt: PR#14684.

2. **2026-06-12-openhands-cve-2026-41305-postcss-xss** (06-12; PR#14770) — **security ADVISORY**. Transitive postcss 8.5.6→8.5.15 fixes GHSA-qx2v-qp2m-jg93/CVE-2026-41305 (moderate XSS via unescaped </style>, CVSS 6.1). Build-time, low runtime exposure. Receipt: PR#14770.

3. **2026-06-13-openhands-pluginspec-source-credential-redaction** (06-13; PR#14795, closes #12959) — **security**. PluginSpec.source like https://oauth2:token@gitlab.com/... was persisted to SQL via model_dump() → git OAuth tokens in plaintext in DB. @field_serializer redacts user:token→**** at dump time (runtime value preserved). Rotate pre-fix embedded tokens. Receipt: PR#14795.

4. **2026-06-05-openhands-offline-token-revocation-fix** (06-05; PR#14666) — security/reliability. A transient Keycloak failure (or browser logout carrying bearer+cookie) could PERMANENTLY revoke every API key for a user. Now _logout gated on AuthType.COOKIE + keycloak_auth cookie presence. Receipt: PR#14666.

5. **2026-06-10-openhands-ohe-default-org-bootstrap** (06-08..06-10; PR#14713/#14740/#14752) — **capability/governance (top)**. Login-time default-org bootstrap for OHE: **first user to sign in after enabling becomes org owner** (owner-email lists removed); org.is_default flag (migration 119, partial-unique = ≤1 default org), freely renameable; existing users moved into default org on first auto-add. Multi-tenant foundation the window's enterprise work stacks on. attacker=first-signer claims ownership (operational trust assumption). Receipt: PR#14752.

6. **2026-06-10-openhands-hide-personal-workspaces** (06-10; PR#14741) — governance (multi-tenant, UI-only). hide_personal_workspaces flag: bootstrapped default org is only workspace users see; members on personal org moved to default on login. **Explicitly UI-LEVEL ONLY** — orgs API still returns personal orgs, nothing deleted, hard server-side enforcement deliberately out of scope. NOT an access-control boundary (honest caveat). Receipt: PR#14741.

7. **2026-06-15-openhands-conversation-concurrency-limits** (06-15; PR#14168) — **economics/governance**. Max concurrent conversations/sandboxes: Personal=3, default/commercial=10. org.max_concurrent_sandboxes + org_member override columns; exceed → HTTP 429 + modal. Concurrency now a governed/billable resource w/ per-org + per-user knobs. Receipt: PR#14168.

8. **2026-06-13-openhands-deployment-mode-flag** (06-13; PR#14794) — workflow/governance. Explicit OH_DEPLOYMENT_MODE (cloud|self_hosted) replaces WEB_HOST host heuristic (which mislabeled self-hosted OHE under *.all-hands.dev as cloud); gates cloud-account CTA on isEnterpriseCloud. Sharpens OSS/SaaS/enterprise boundary. Receipt: PR#14794.

9. **2026-06-14-openhands-ohe-multimodel-discovery-byok-gating** (06-14; PR#14773) — **capability/governance (LLM policy)**. LiteLLMProxyModelService makes bundled LiteLLM proxy single source of truth for model dropdown (never propagates litellm_params); **BYOK gating** via allow_user_llm_configuration — off=hide custom model/base-URL/API-key inputs (lock to curated set), on=union with full SDK catalogue. Platform owns model-access policy. Receipt: PR#14773.

10. **2026-06-16-openhands-jira-dc-per-user-oauth-injection** (06-16; PR#14650+#14697) — capability/ecosystem (credential flow). Jira Data Center OAuth tokens persisted PER-USER + injected into sandboxes (JIRA_DC_BASE_URL + LookupSecret JIRA_DC_TOKEN) for web/Slack/API-started convos when effective user has active link. Per-user token scoping (vs shared service account). Receipt: PR#14697.

11. **2026-06-15-openhands-mcp-for-acp-agents** (06-15; PR#14613) — **protocol (MCP+ACP) + security**. Un-gates MCP config for ACP agents (SDK forwards mcp_config to ACP subprocess). FIXES plaintext leak: frontend serialized remote MCP API keys as bare `auth:<key>` (SDK secret serializer didn't redact) → now headers:{Authorization:Bearer <key>} (redacted), legacy auth migrated on save. Receipt: PR#14613.

12. **2026-06-11-openhands-acp-cloud-model-switching** (06-11; PR#14744/#14733/#14760) — **capability/protocol**. Per-conversation ACP model switching + credential entry to Docker/cloud: POST .../switch_acp_model proxy; per-provider model dropdown (ACP_PROVIDERS); credentials section (Claude Code ANTHROPIC_API_KEY; Codex OPENAI_API_KEY; Gemini Vertex SA) saved as global secrets injected at subprocess spawn (ACP works where shell-env can't inherit); proxy error-body sanitized. OpenHands-as-GUI-shell-around-third-party-agents continues. Receipt: PR#14733.

13. **2026-06-09-openhands-ownership-assertion-org-id-removed** (06-09; PR#14727) — reliability (access-control). Removed mutable org_id (→user.current_org_id) leg from save_app_conversation_info ownership assertion; kept stable user_id. Multi-org users no longer trip AssertionError after switching orgs. Receipt: PR#14727.

14. **2026-06-08-openhands-org-llm-profiles-in-settings** (06-08; PR#14715) — governance (LLM policy). Surfaces org-level LLM profiles in org settings UI (storage landed pre-window #14406): owners/admins add/edit/activate/rename/delete; members read-only. Completes operator-facing half of the 05-27 governance finding. Receipt: PR#14715.

15. **2026-06-09-openhands-workflow-context-hardening** (06-09; PR#14537) — security (CI). issue-opened workflow routes attacker-influenceable GitHub context through env: instead of ${{}} in run: (prevents Actions script injection). 33 YAMLs, 0 remaining suspicious blocks. Receipt: PR#14537.

16. **2026-06-15-openhands-sdk-bumps-1.25-to-1.28** (06-04..06-15; PR#14653/#14679/#14726/#14753) — runtime (engine). 4 automated bumps openhands-sdk/tools/agent-server 1.25→1.28.0; AGENT_SERVER_IMAGE bumped (1.27.1 Gemini cache fix, 1.28.0). Enabled in-window features (mcp_config→ACP, acp_isolate_data_dir). Substance in sibling software-agent-sdk repo (out of scope). Receipt: PR#14753.

17. **2026-06-10-openhands-release-1.8.0** (06-10; tag 1.8.0) — ecosystem (release). Consolidates pre-window May work to release channel: LLM profiles (#14149), sandbox grouping (#14291), sub-agent delegation (#14122), minimal generic ACP agent UI (#14401); removed App tab. In-window enterprise/security work NOT in 1.8.0 (lands later; #14752 targets 1.39.0; release-please adopted). Receipt: release 1.8.0.

## Top signals (harvester's pick)
1. ohe-default-org-bootstrap — turnkey first-signer-owns-it default org (migration 119); multi-tenant foundation the window's enterprise work stacks on. Platform → tenant-provisioning system.
2. pluginspec-source-credential-redaction + security cluster (2 CVEs, offline-token, MCP-key plaintext, ACP error sanitize) — credential-at-rest/supply-chain fixes-as-they-ship; real rotation implications.
3. ohe-multimodel-discovery-byok-gating — admins lock org to curated proxy-served model set (hide custom key inputs). Platform owns model-access policy.
4. conversation-concurrency-limits — concurrency a governed/billable resource (Personal=3/commercial=10, 429). Economics+governance; tightens free tier.
5. acp-cloud-model-switching + mcp-for-acp-agents — ACP front-end (Claude Code/Codex/Gemini under OpenHands) graduates to Docker/cloud + MCP attachable. GUI-shell-around-third-party-agents thread.
6. deployment-mode-flag — OH_DEPLOYMENT_MODE cloud|self_hosted; draws OSS/cloud/enterprise boundary cleanly.
