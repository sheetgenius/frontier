# Adversarial Verification — Claude Code & Codex (window 2026-06-16 → 2026-06-23)

Verifier: Opus 4.8, adversarial. Method: re-fetched primary sources and attempted
to refute each claim. A claim survives only on a verbatim primary-source receipt.

Primary sources:
- Claude Code: WebFetch https://code.claude.com/docs/en/changelog
- Codex: `gh api repos/openai/codex/releases` (tags + prerelease flags), release-body
  changelogs, PR bodies, and `gh api .../compare/<base>...<head>` ancestry.

---

## CLUSTER 1 — Claude Code (closed-source release notes)

| Claim | Verdict | Deciding verbatim receipt | Corrected framing |
|---|---|---|---|
| **A** — In-window versions are 2.1.179 (Jun 16), 2.1.181 (Jun 17), 2.1.183 (Jun 19), 2.1.185 (Jun 20), 2.1.186 (Jun 22); 2.1.180/182/184 NOT published. | **SURVIVES** | Changelog shows dated entries for 2.1.186 (June 22), 2.1.185 (June 20), 2.1.183 (June 19), 2.1.181 (June 17), 2.1.179 (June 16). 2.1.180, 2.1.182, 2.1.184 are absent (also 2.1.187 not present). | None. Note: dates are the changelog's own. 2.1.178 (Jun 15) is the prior-window anchor for B/C. |
| **B (sharp)** — 5-level nested-subagent depth cap (2.1.178) did NOT apply to FOREGROUND subagent spawns; they could recurse unbounded until fixed in 2.1.181. | **SURVIVES** | 2.1.181: "Fixed foreground subagents spawning unbounded nested chains; they now respect the same 5-level depth limit as background subagents" | None. The entry literally says foreground spawns were unbounded and only now share the same 5-level limit as background. Note the prior-window cap (2.1.178's classifier-before-launch evaluation) was background-scoped in effect; the depth limit itself binds foreground only as of 2.1.181. |
| **C (sharp)** — Agent()/Tool(param:value) permission grammar (2.1.178) silently FAILED for named subagent spawns until 2.1.186 enforced it. | **SURVIVES with corrected framing** | 2.1.186: "Fixed `Agent(type)` deny rules and `Agent(x,y)` allowed-types restrictions not being enforced for named subagent spawns" | The enforcement gap is real and 2.1.186 is the fix. BUT the deciding receipt names `Agent(type)` deny rules and `Agent(x,y)` allowed-types restrictions — NOT literally the `Tool(param:value)` / `Agent(model:opus)` param-matching syntax added in 2.1.178. Frame as: "named-subagent permission rules (`Agent(type)` deny, `Agent(x,y)` allowed-types) did not bind until 2.1.186." Do not assert the `param:value` syntax specifically was the thing that failed unless separately receipted. |
| **D** — 2.1.183 enumerated specific destructive git/IaC commands the auto-mode classifier now refuses. | **SURVIVES** | 2.1.183: "Improved auto mode safety: destructive git commands (`git reset --hard`, `git checkout -- .`, `git clean -fd`, `git stash drop`) are now blocked when you didn't ask to discard local work, `git commit --amend` is blocked when the commit wasn't made by the agent this session, and `terraform destroy`/`pulumi destroy`/`cdk destroy` are blocked unless you asked for the specific stack" | None. Note the blocks are conditional ("when you didn't ask…", "unless you asked for the specific stack"), not unconditional refusals. |
| **E1** — 2.1.186 fixed scheduled-task/webhook trigger input-classification (automated triggers could approve pending actions under auto mode). | **REFUTED on version; fact SURVIVES at 2.1.183** | The fix is in **2.1.183**, not 2.1.186: "Fixed scheduled task and webhook trigger deliveries being treated as keyboard input; they now classify as task notifications and can no longer approve a pending action or set the session title in auto mode" | Mis-attributed version. The substance (automated triggers could approve pending actions under auto mode until fixed) is exactly right, but it shipped 2.1.183 (Jun 19), not 2.1.186. Re-anchor in the digest. |
| **E2** — 2.1.186 moved background-subagent permission prompts to the main session. | **SURVIVES** | 2.1.186: "Changed background subagents to surface permission prompts in the main session instead of auto-denying; the dialog shows which agent is asking, and Esc denies just that tool" | None. Note prior behavior was auto-DENY (not auto-approve); the change surfaces a prompt instead of silently denying. |
| **E3** — 2.1.186 added `claude mcp login` / `logout`. | **SURVIVES** | 2.1.186: "Added `claude mcp login <name>` and `claude mcp logout <name>` to authenticate MCP servers from the CLI without opening the interactive `/mcp` menu, with `--no-browser` stdin redirect support for completing over SSH" | None. |

---

## CLUSTER 2 — Codex (openai/codex repo + developer changelog)

Release ancestry (decisive for channel attribution):
- In-window STABLE tags: **rust-v0.141.0** (published 2026-06-18T04:43Z, prerelease=false)
  and **rust-v0.142.0** (published 2026-06-22T22:19Z, prerelease=false).
- **rust-v0.143.0** exists in-window only as alpha tags (alpha.1–alpha.4, all
  prerelease=true). No stable 0.143.0 in window. So nothing in 0.143.0 "shipped."

| Claim | Verdict | Deciding verbatim receipt | Corrected framing |
|---|---|---|---|
| **F** — 0.141.0 (2026-06-18) and 0.142.0 (2026-06-22) are the only in-window STABLE tags; 0.143.0 is ALPHA-only. | **SURVIVES** | `gh api repos/openai/codex/releases`: rust-v0.141.0 prerelease=false pub 2026-06-18; rust-v0.142.0 prerelease=false pub 2026-06-22; all rust-v0.143.0-alpha.* prerelease=true. | None. |
| **G (top signal)** — Environment-scoped command + network approvals (0.142.0, #28738/#28899); approval in one env no longer leaks to another; ambiguous attribution fails closed. | **SURVIVES** | 0.142.0 changelog lists both PRs (#28738 "Scope command approvals by execution environment", #28899 "Scope network approvals by environment"). PR #28738 body: "An approval for `/workspace` locally could therefore be reused for the same command and path on an executor… Include the selected environment ID in shell and unified-exec approval cache keys." PR #28899 body: "Preserve legacy fallback for unattributed requests, but **deny when active-call attribution is ambiguous**" and "**Fail closed if an environment-specific proxy endpoint cannot be prepared.**" | None. Both PRs are ancestors of rust-v0.142.0 (compare PR…rust-v0.142.0 = ahead, behind_by=0) and NOT in rust-v0.141.0 (diverged). Tagged-release, not main-unreleased. "Fail closed on ambiguous attribution" is verbatim-supported. |
| **H (top signal)** — Rollout token budgets that ABORT turns on exhaustion (0.142.0, #28746/#28494/#28707/#29423); hard spend cap, not just a warning. | **SURVIVES, with one nuance** | 0.142.0 New Features (verbatim): "Configurable rollout token budgets track usage across agent threads, provide remaining-budget reminders, and **abort turns when exhausted**. (#28746, #28494, #28707, #29423)" PR #28707 body: "Once the ledger is exhausted, that usage update and all later usage updates return `TurnAborted`… the normal aborted-turn event and lifecycle instead of completing the turn." | It IS a hard cap (turns abort; not advisory), so the "not just a warning" framing holds. Nuance to preserve: PR #28707 calls it "intentionally a soft boundary: there is no cross-thread `Op::Interrupt` fanout. An in-flight thread can finish its current response… but every thread aborts at its next usage-accounting boundary." So enforcement is at the next accounting boundary, not an instantaneous mid-response kill. Shared ledger; sub-agent usage draws from it. All four PRs are ancestors of rust-v0.142.0, not in 0.141.0. |
| **I (carry-forward NEGATIVE)** — Codex browser/computer-use frontier did NOT advance; Chronicle still opt-in macOS research preview (only regionalized to EEA/UK/CH on 2026-06-16, not GA); Developer-mode "controlled CDP" boundary NOT clarified. | **NEGATIVE SURVIVES (safe; no refuting evidence)** | Only in-window Chronicle entry, dated 2026-06-16 under header "Codex app features are available in the EEA, UK, and Switzerland": "Chronicle is available as an opt-in research preview for ChatGPT Pro subscribers on macOS, helping Codex build memories from recent screen context." The controlled-CDP / Developer-mode browser entry is dated **2026-06-11 (OUT of window)**: "Added Developer mode for Browser use in Chrome and the Codex in-app browser. It gives Codex controlled Chrome DevTools Protocol (CDP) access for performance profiling and deeper debugging…" No in-window CDP / Developer-mode entry exists; live browser doc page carries no in-window revision. | None. Regionalization expands region only; every limiting qualifier (opt-in, research preview, ChatGPT Pro, macOS) is preserved — not GA. CDP boundary is pre-window doc text, not clarified in-window. Attempt to refute (search + changelog + live doc) found nothing. |

---

## Bottom line

The Claude Code "marquee authority features didn't bind until this window" framing
is **safe in substance** for the depth cap (B) and the named-subagent permission
rules (C), and for the destructive-command classifier (D) and the auto-mode trigger
fixes (E) — with two precision corrections:

1. **C**: the receipt covers `Agent(type)` deny + `Agent(x,y)` allowed-types
   enforcement, not literally the `Tool(param:value)` syntax. Frame around the
   former, not the latter, unless a separate receipt is found.
2. **E1**: the scheduled-task/webhook trigger-classification fix shipped in
   **2.1.183**, not 2.1.186. Re-anchor the version.

Codex: F, G, H all survive on verbatim receipts and verified tagged-release
ancestry. 0.143.0 is alpha-only; nothing in it shipped. CLAIM I (the carry-forward
NEGATIVE) is **safe** — the in-window Chronicle change is regionalization of an
opt-in macOS research preview, not GA, and there is no in-window CDP / Developer-mode
boundary clarification (that doc text is dated 2026-06-11, before the window).
