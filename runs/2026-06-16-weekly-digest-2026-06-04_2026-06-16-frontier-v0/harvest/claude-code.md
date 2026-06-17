# Harvest: Claude Code (window 2026-06-04 .. 2026-06-16)

coverage: tool_access_ok=true. Surfaces: code.claude.com/docs/en/changelog (canonical, full in-window sweep; current through 2.1.178 June 15 — NO entry dated June 16+), anthropic.com/news/claude-fable-5-mythos-5 (Fable 5 launch). In-window versions: 2.1.163(06-04), 2.1.165(06-05), 2.1.166/167/168(06-06), 2.1.169(06-08), 2.1.170(06-09), 2.1.172/173(06-10/11), 2.1.174/175/176(06-12), 2.1.178(06-15). 2.1.164/171/177 not on page. 165/167/168 are "bug fixes" stubs. All dates verified YEAR=2026 in-window. DEDUPE baseline 2026-06-03 (through 2.1.152); all net-new. Adjacency flagged: 2.1.172 WebFetch wildcard fix is distinct from the 06-03 webfetch-permission-rules finding.

## Findings (22)

1. **2026-06-09-claude-code-fable-5-launch** (06-09; 2.1.170) — capability. **Claude Fable 5** ("Mythos-class model… made safe for general use", "state-of-the-art on nearly all tested benchmarks"); access requires 2.1.170. Companion: "Claude Fable 5 and Claude Mythos 5". Receipts: changelog "2.1.170 — Introducing Claude Fable 5: a Mythos-class model… Update to version 2.1.170 for access"; anthropic.com/news/claude-fable-5-mythos-5.

2. **2026-06-10-claude-code-nested-subagent-spawning** (06-10; 2.1.172) — capability. "Sub-agents can now spawn their own sub-agents (up to 5 levels deep)" — recursive delegation tree. Cost+governance surface. Receipt: changelog 2.1.172.

3. **2026-06-15-claude-code-automode-classifies-subagent-spawns** (06-15; 2.1.178) — **security: closes**. "Improved auto mode: subagent spawns are now evaluated by the classifier before launch, closing a gap where a subagent could request a blocked action without review." attacker=subagent (poss. injected) spawning to request action classifier would block on parent; enforcement=runtime. Directly gates the F2 recursion. Receipt: changelog 2.1.178.

4. **2026-06-15-claude-code-tool-param-value-permission-syntax** (06-15; 2.1.178) — workflow/security:reframes. "Added Tool(param:value) syntax for permission rules to match a tool's input parameters (with * wildcard), e.g. Agent(model:opus) to block Opus subagents." Argument-aware permissions (first time). enforcement=policy. Receipt: changelog 2.1.178.

5. **2026-06-06-claude-code-sendmessage-authority-hardening** (06-06; 2.1.166) — **security: closes**. "messages relayed via SendMessage from other Claude sessions no longer carry user authority — receivers refuse relayed permission requests, and auto mode blocks them." Confused-deputy/authority-forwarding fix; enforcement=both. Receipt: changelog 2.1.166.

6. **2026-06-10-claude-code-webfetch-wildcard-domain-fix** (06-10; 2.1.172) — **security: closes**. Fixed WebFetch(domain:*.example.com) wildcard never matching subdomains in allow/deny/ask; + file rules with mid-pattern wildcards (Read(secrets-*/config.json)) rejected at startup. Fail-open on deny path. Receipt: changelog 2.1.172.

7. **2026-06-12-claude-code-enforce-available-models** (06-12; 2.1.175) — **security: closes**. "enforceAvailableModels managed setting — when enabled, the availableModels allowlist also constrains the Default model… user or project settings can no longer widen a managed availableModels list." enforcement=policy. Receipt: changelog 2.1.175.

8. **2026-06-12-claude-code-availablemodels-bypass-fixes** (06-12; 2.1.176 +172/174) — **security: closes**. alias picks can't be redirected to blocked model via ANTHROPIC_DEFAULT_*_MODEL env; /fast refuses out-of-allowlist toggle; 2.1.172 applied allowlist to subagent overrides/dispatch picker/advisor. Cluster of escape-hatch closures. Receipt: changelog 2.1.176 + 2.1.172.

9. **2026-06-08-claude-code-safe-mode-flag** (06-08; 2.1.169) — workflow. "--safe-mode flag (and CLAUDE_CODE_SAFE_MODE) to start Claude Code with all customizations (CLAUDE.md, plugins, skills, hooks, MCP servers) disabled for troubleshooting." Note: also disables security customizations. Receipt: changelog 2.1.169.

10. **2026-06-04-claude-code-required-version-managed-settings** (06-04; 2.1.163) — **security: closes**. "requiredMinimumVersion and requiredMaximumVersion managed settings — Claude Code refuses to start if its version is outside the allowed range." Pin approved version band (force past security fixes). enforcement=policy. Receipt: changelog 2.1.163.

11. **2026-06-08-claude-code-managed-mcp-policy-enforcement-gaps** (06-08; 2.1.169 +166) — **security: closes**. Fixed managed MCP policies (allowedMcpServers/deniedMcpServers) not enforced on reconnect, IDE-typed configs, --mcp-config first session, or before remote settings loaded; 2.1.166 fixed ${VAR} predicates + invalid-entry silently disabling remaining policies. Fail-open enforcement gaps. enforcement=both. Receipt: changelog 2.1.169 + 2.1.166.

12. **2026-06-08-claude-code-otel-cert-trust-fix** (06-08; 2.1.169) — **security: closes, ADVISORY**. "Fixed untrusted project settings being able to set OTEL client-certificate paths without trust confirmation." Untrusted repo could redirect OTEL client certs (credential-path injection/exfiltration). enforcement=runtime. Receipt: changelog 2.1.169.

13. **2026-06-10-claude-code-background-worker-settings-bleed** (06-10; 2.1.172 +169/174) — **security: closes**. Background agents could read another directory's project settings (.mcp.json approvals, trust) on a pre-warmed worker; 2.1.174 fixed inheriting another session's ANTHROPIC_* provider env. Cross-context config/trust bleed. enforcement=runtime. Receipt: changelog 2.1.172 + 2.1.174.

14. **2026-06-06-claude-code-fallback-model-chain** (06-06; 2.1.166 +178) — reliability. "fallbackModel setting to configure up to three fallback models tried in order when the primary is overloaded/unavailable; --fallback-model now also applies to interactive sessions." 2.1.178 made compaction honor the chain. Keeps unattended /goal+bg runs alive. Receipt: changelog 2.1.166.

15. **2026-06-08-claude-code-bundled-skills-toggle-and-cd-and-post-session-hook** (06-08; 2.1.169) — workflow. disableBundledSkills setting (hide bundled skills/workflows/built-in slash commands from model); /cd (move session dir w/o breaking prompt cache); self-hosted post-session lifecycle hook (snapshot before workspace deletion). Receipt: changelog 2.1.169.

16. **2026-06-15-claude-code-nested-claude-dir-resolution** (06-15; 2.1.178) — workflow. Nested .claude/skills load when working on files there; name clash → <dir>:<name>; closest-to-cwd agent/workflow/output-style wins on collision. Monorepo locality. Receipt: changelog 2.1.178.

17. **2026-06-12-claude-code-automode-fable5-opus-fallback** (06-12; 2.1.176) — reliability. "Fixed auto mode failing on Fable 5 for organizations without Opus 4.8 enabled — the classifier now falls back to the best available Opus model." (Auto-mode classifier runs on Opus — context for F3.) Receipt: changelog 2.1.176.

18. **2026-06-15-claude-code-subagent-disallowedtools-mcp-fix** (06-15; 2.1.178) — **security: closes**. "Fixed MCP server-level specs (mcp__server, mcp__server__*, mcp__*) in subagent disallowedTools being silently ignored." Subagent retained access to MCP server its disallowedTools meant to remove; compounds w/ nested spawning. enforcement=runtime. Receipt: changelog 2.1.178.

19. **2026-06-08-claude-code-agents-json-fields-and-deny-glob** (06-08; 2.1.169 +166) — ecosystem. claude agents --json stopped omitting blocked/just-dispatched sessions; gained --all + id + state fields; 2.1.166 added glob in deny-rule tool-name position ("*" denies all tools, unknown names warn). Programmatic fleet view. Receipt: changelog 2.1.169 + 2.1.166.

20. **2026-06-11-claude-code-fable5-1m-suffix-normalization** (06-11; 2.1.173 +172) — reliability. Fable 5 [1m] suffix now stripped (Fable 5 is 1M-context by default); 2.1.172 fixed doubled [1M][1m] + opusplan[1m] plan mode. Receipt: changelog 2.1.173.

21. **2026-06-12-claude-code-model-picker-and-usage-attribution** (06-12; 2.1.174) — economics. /model picker exposes Default-resolved family per plan; [VSCode] /usage attribution by subagent/skill/plugin/MCP over 24h/7d (governs nested-tree cost); fixed false "Fable 5 consuming credits" banner. Receipt: changelog 2.1.174.

22. **2026-06-15-claude-code-agents-gateway-auth-fixes** (06-15; 2.1.178) — reliability. Fixed claude agents workers 401 under custom ANTHROPIC_BASE_URL+ANTHROPIC_AUTH_TOKEN gateway; stale-credential refresh; Claude in Chrome wrong-account connect. Receipt: changelog 2.1.178.

## Top signals (harvester's pick)
1. fable-5-launch — new flagship Mythos-class model; ripples through picker/auto-mode/usage all window.
2. nested-subagent-spawning + automode-classifies-subagent-spawns (PAIRED) — subagents spawn subagents 5-deep AND auto-mode now gates spawns pre-launch. New recursive-delegation authority surface + its control.
3. tool-param-value-permission-syntax — argument-aware permissions (Agent(model:opus)); structural permission-grammar upgrade.
4. sendmessage-authority-hardening — confused-deputy fix for multi-session orchestration.
5. enforce-available-models + availablemodels-bypass-fixes — org model-allowlists finally binding (incl. Default); lever for gating Fable 5 per-org.
6. otel-cert-trust-fix + background-worker-settings-bleed — two trust-boundary fixes (untrusted-repo OTEL cert injection; pre-warmed worker trust/env bleed).
