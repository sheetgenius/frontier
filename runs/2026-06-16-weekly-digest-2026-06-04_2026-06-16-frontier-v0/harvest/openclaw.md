# Harvest: OpenClaw (window 2026-06-04 .. 2026-06-16) — accessibility calibration source

coverage: tool_access_ok=yes (gh api authoritative + WebFetch). 7 release tags 06-06→06-16 + hundreds of commits. OUT: v2026.6.1 stable + v2026.6.2-beta.1 (06-03, prior profile). Train renamed YYYY.M.PATCH, June floor pinned at 2026.6.5 (explains 2026.6.1→2026.6.5 jump). No v2026.6.7 stable (404) — 2026.6.7 content only in v2026.6.7-beta.1. Beta→stable consolidation verified.

## Findings (16, accessibility-weighted)

1. **2026-06-13-openclaw-control-ui-accessibility-pass** (06-13; v2026.6.7-beta.1, PR#89822) — **accessibility=HIGH**. CSS-only WCAG 2.1 AA pass on browser Control UI: muted-text contrast →≥4.8:1 (was below 4.5:1 AA floor in dark themes), global `:focus-visible` ring (2px outline+offset), 12px font-size floor across 136 sub-12px elements. Zero JS. Low-vision + keyboard-only operators now included. Only in beta, not stable. Receipt: PR#89822 "fix(a11y): B-1+B-2+B-3 — contrast, focus states, minimum font sizes… 136 instances 8-11px→12px. CSS-only."

2. **2026-06-13-openclaw-design-system-wcag-docs** (06-13; v2026.6.7-beta.1, PR#89827) — accessibility=medium. ui/docs/design-system/ (5 files): glass tiers, per-token WCAG contrast table, WCAG 2.1 AA checklist (contrast, :focus-visible, 44px tap targets, skip link, focus trap, ARIA, reduced-motion). Values read from source CSS. Receipt: PR#89827.

3. **2026-06-12-openclaw-control-ui-startup-latency** (06-12; v2026.6.6) — accessibility=medium. Control UI startup + first-reply latency lower (cached model metadata, removed startup catalog wait, lazy slash-command loading, first-event tracing + slow-reply diagnostics). Receipt: release v2026.6.6 (#91531 etc).

4. **2026-06-16-openclaw-control-ui-plain-http-clipboard** (06-16; v2026.6.8, commit a6b348a) — accessibility=medium. "copy code block" works over plain HTTP via clipboard fallback (navigator.clipboard restricted to secure contexts; LAN http:// dashboard previously failed silently). Helps lowest-setup (no-TLS LAN) operators. Receipt: commit a6b348a "fix(control-ui): copy code blocks over plain HTTP via clipboard fallback (#93666)".

5. **2026-06-16-openclaw-keyfree-web-search-opt-in** (06-16; v2026.6.8, commit c48b36a) — **workflow / consent-over-convenience (editorial tension)**. Key-free search providers (Parallel Free, DuckDuckGo, Ollama, Codex Hosted Search) now EXPLICIT opt-ins, no longer auto-selected when no API-keyed provider configured. RAISES the floor by one choice — deliberately trades frictionless onboarding for explicit consent on where queries egress. authority_visibility=IMPROVED. Receipt: release v2026.6.8 "(#93616)".

6. **2026-06-12-openclaw-explicit-intent-before-chat-open** (06-12; v2026.6.6, #91480) — workflow/authority-visibility. UI requires explicit user intent before opening chat sessions; drains restored chat queues after session switches. Agent work starts on intent, not as a side effect. Receipt: release v2026.6.6 "#91480".

7. **2026-06-16-openclaw-admin-gated-http-override-surfaces** (06-16; v2026.6.8, #92646) — **security**. HTTP session/model override surfaces now require admin privileges; "ignore stale sudo scope for root user services" (#93693); approval-route notices sent with write scope (#93656). Receipt: release v2026.6.8.

8. **2026-06-12-openclaw-security-boundary-sweep** (06-12; v2026.6.6, #91529+13PRs) — **security**. Fail-closed sweep across transcripts, sandbox binds, host-env inheritance, MCP stdio, Codex HTTP, native search policy, elevated-sender checks, deleted-agent ACP bypasses, loopback tools, Discord/Teams; **exec approvals now fail closed on timeout**. Receipt: release v2026.6.6.

9. **2026-06-12-openclaw-openrouter-oauth-onboarding** (06-12; v2026.6.6 #91830; v2026.6.5 Parallel picker) — accessibility=medium. OpenRouter OAuth onboarding (browser sign-in vs API-key paste); Parallel bundled web_search. ALSO: release notes mention "Claude Fable 5 adaptive thinking" (cross-provider Fable 5 adoption). Receipt: release v2026.6.6.

10. **2026-06-16-openclaw-telegram-rich-text-delivery** (06-16; v2026.6.8, #92679 etc) — capability. Telegram delivers structured rich text (tables, lists, expandable blockquotes, preserved line breaks) + safer rich-media boundaries; WhatsApp honors ACP bindings. Familiar-channel legibility. Receipt: release v2026.6.8.

11. **2026-06-16-openclaw-ios-watch-action-surface** (06-16; commit c45c87a, #93387) — capability (distribution frontier). Apple Watch "action surface" added to iOS app. Mobile span now Android+iPhone+iPad+Watch. Open question: what authority/approval can a watch-sized surface show? (study-grade). Receipt: commit c45c87a "feat(ios): add watch action surface (#93387)".

12. **2026-06-09-openclaw-mobile-state-clarity-and-clawhub-skills** (06-09; v2026.6.5) — **accessibility=HIGH + ecosystem**. (a) Android provider/model screens surface expiring/unavailable/unresolved/attention states in plain words; Android theme mode; iOS diagnostics reachable. (b) ClawHub installs GitHub-repo skills via resolved install API, downloads PINNED GitHub commit, keeps install-policy checks. More auditable supply path (uploaded-archive signing still undocumented). Google Chat native approval cards. Receipt: release v2026.6.5 (#90752, #90478).

13. **2026-06-13-openclaw-hide-empty-workboard-columns** (06-13; v2026.6.7-beta.1 #89615; v2026.6.8 collapsible workspace files) — accessibility=low-medium. Workboard toolbar checkbox to hide empty status columns. Receipt: PR#89615.

14. **2026-06-13-openclaw-skill-workshop-symlink-gating** (06-13; v2026.6.7-beta.1 #92175) — security. Skill Workshop symlink writes gated/validated before rollback metadata; local-setup trust hardening; CLI /btw fails closed. Hardens the "make authoring approachable" surface. Receipt: release v2026.6.7-beta.1.

15. **2026-06-16-openclaw-usage-footer-native-renderer** (06-16; v2026.6.8 #92657) — accessibility=medium. /usage native footer renderer, default template, credential-aware limits, warns on broken templates instead of silent bad output. Cost visibility by default. Receipt: release v2026.6.8.

16. **2026-06-16-openclaw-wizard-preserves-default-model** (06-16; commit b836946 #93658) — reliability. Setup wizard preserves existing default model during auth-choice re-run. (timestamp 17:13Z after v2026.6.8 tag 16:32Z — verify if in 2026.6.8 or next beta). Receipt: commit b836946.

## Top signals (harvester's pick)
1. control-ui-accessibility-pass — WCAG 2.1 AA pass (contrast/focus/font); rare harness treating legibility for low-vision/keyboard as shipped obligation. THE accessibility signal. (beta only)
2. mobile-state-clarity-and-clawhub-skills — plain-language provider states + pinned-commit skill installs (accessibility + authority-visibility).
3. keyfree-web-search-opt-in — REMOVED a zero-config convenience to force explicit consent on query egress (authority-over-reach; editorial tension).
4. explicit-intent-before-chat-open — agent work starts on explicit intent (visible deliberate handoff).
5. ios-watch-action-surface — agent actions on the wrist; distribution frontier; authority-at-watch-size = open question.
