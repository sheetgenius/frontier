---
schema_version: bitter.frontier_harvest.v0
provider: hermes-agent
window: 2026-08-03..2026-08-10
run: 2026-08-10-weekly-digest-2026-08-03_2026-08-10-frontier-v0
source_contract: sources/hermes-agent.yml
channels_present: [tagged-release]
window_volume: 6 material changes, 4 capability-bearing, 3 defect-bearing, 5 security-relevant
lane: primary sources, read-only researcher, channel resolved by git ancestry
---

# Harvest -- hermes-agent (primary sources)

Punctuation is normalized to ASCII per house style. Every receipt below is
pinned to a tag or a SHA. Nothing here is published until it clears the
adversarial receipt pass.

## 1. Profile export/import ships a whole setup -- including unscrubbed secrets in skills and SOUL.md

- **Date:** 2026-08-04
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** merge_commit_sha 0a48af25bb22d569d84d35ba4d73f4934a5943ec; GET repos/NousResearch/hermes-agent/compare/0a48af25...v2026.8.13 -> status=ahead, ahead_by=1478, behind_by=0, i.e. the commit is an ancestor of the stable tag v2026.8.13.
- **Receipt:** https://github.com/NousResearch/hermes-agent/pull/78812
- **Half:** both | security-relevant | **Confidence:** high

**What changed.** `/export` and `/import` (CLI, TUI, REST, and desktop) package a profile as a shareable .tar.gz containing config.yaml, SOUL.md, MEMORY.md, USER.md, system_prompt.md, AGENTS.md, CLAUDE.md, .cursorrules, todo.json and the full unfiltered skills tree. The PR states plainly: credentials files (auth.json, .env) are stripped, but there is 'no content-level PII/secret scrub of skills, memories, sessions, or persona files.'

**Operator consequence.** If you shared a profile archive built from a Hermes between 2026-08-04 and 2026-08-10, assume any API key pasted into a skill, memory, or SOUL.md left the machine. Rotate those credentials and re-export on v0.20.1 or later, where the scrub exists (see the companion entry).

## 2. Writes to AGENTS.md, CLAUDE.md and SOUL.md now always stop for a human

- **Date:** 2026-08-07
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** merge_commit_sha fe66596df342c660d0cb42172884070ae02ac5a0; compare/fe66596d...v2026.8.13 -> status=ahead, ahead_by=1157, behind_by=0 (ancestor of stable tag v2026.8.13).
- **Receipt:** https://github.com/NousResearch/hermes-agent/pull/81152
- **Half:** capability | security-relevant | **Confidence:** high

**What changed.** A new `security.protected_instruction_files` gate (default on) makes write_file/patch against AGENTS.md, CLAUDE.md, SOUL.md, .cursorrules and project-local `.hermes` config prompt a human every time: one-operation grants only, no session or permanent scope, no yolo bypass, fail-closed when no human channel exists. Multi-file V4A patches are atomic -- one protected target gates the whole patch. Matching is on realpath, case-insensitive, any directory. The PR is explicit that this closes only the file-tools vector; the terminal vector (#58631) was still open at merge time.

**Operator consequence.** Adopt as-is -- this is the receipt rail for the one class of file whose contents steer every future session. But do not read it as complete: a prompt-injected `echo >> AGENTS.md` through the terminal tool was still ungated at this tag. Re-audit your terminal allowlist for appends to instruction files.

## 3. MCP servers can be marked untrusted, and every write-capable tool then asks

- **Date:** 2026-08-07
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** merge_commit_sha c8369e37f49a5d3633f357abe9d01f6b4f2149df; compare/c8369e37...v2026.8.13 -> status=ahead, ahead_by=1158, behind_by=0 (ancestor of stable tag v2026.8.13).
- **Receipt:** https://github.com/NousResearch/hermes-agent/pull/81151
- **Half:** capability | security-relevant | **Confidence:** high

**What changed.** Per-server `trust: full|untrusted` in MCP config. On an untrusted server every tool lacking a `readOnlyHint: true` annotation routes through the existing approval surface before the RPC fires -- including the lazy first-use spawn, so a denial means the server is never contacted at all. Denials, cancellations, timeouts and approval-system errors all fail closed; missing or malformed annotations count as write-capable; unrecognised trust values normalise to untrusted. Default stays `full`, so existing configs are unchanged. The PR states the security model honestly: readOnlyHint is server-supplied and a hostile server can lie -- the tiering is operator-side config precisely because the hint is not trustworthy.

**Operator consequence.** Set `trust: untrusted` on every MCP server you did not write, today. It costs approval prompts and buys you a gate a lying server can only use to skip approval on tools it claims are read-only -- never to widen access. Note that the default is `full`, so nothing happens until you edit config.yaml.

## 4. delegate_task gains caller-declared output contracts

- **Date:** 2026-08-07
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** merge_commit_sha 0ebaa490b515cc0a1cdaa6f8df7b20d94cf990b9; compare/0ebaa490...v2026.8.13 -> status=ahead, ahead_by=1154, behind_by=0 (ancestor of stable tag v2026.8.13).
- **Receipt:** https://github.com/NousResearch/hermes-agent/pull/81144
- **Half:** capability | **Confidence:** high

**What changed.** An optional `output_schema` (JSON Schema) per task item and on the single-goal form. The child receives it as an explicit OUTPUT CONTRACT block; the parent validates the final answer with jsonschema and, on failure, sends exactly one bounded retry turn carrying the validation errors verbatim. Result entries gain `schema_valid`, plus `schema_errors` and `schema_retries` when relevant -- only when a schema was requested, so schema-less delegations keep a byte-identical result shape. Malformed schemas fail loudly at dispatch before any child spawns.

**Operator consequence.** Try it wherever you currently parse subagent prose with regex. It converts 'the child returned something' into a checkable assertion with a bounded repair loop, and the wire shape for existing callers is unchanged, so adoption is per-call rather than a migration.

## 5. Terminal exception results and ACP stderr were handing raw secrets to the model

- **Date:** 2026-08-08
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** merge_commit_sha 72eda946be949a5932923df3325037a0d6c5da49; compare/72eda946...v2026.8.13 -> status=ahead, ahead_by=996, behind_by=0 (ancestor of stable tag v2026.8.13).
- **Receipt:** https://github.com/NousResearch/hermes-agent/pull/81675
- **Half:** defect | security-relevant | **Confidence:** high

**What changed.** Both terminal_tool exception paths (generic `except` and `TERMINAL_DEGRADED_MODE=fail`) returned raw `str(e)` plus `traceback.format_exc()` to the model -- only the logger copy was redacted, so a failing command with an inline secret put that secret in the model's context and in the transcript. Separately, the ACP adapter's `_setup_logging` cleared root handlers and installed a plain `logging.Formatter`, bypassing redaction on ACP stderr entirely. Both now pass through `redact_sensitive_text` / `RedactingFormatter`. The before/after table shows `OPENAI_API_KEY=sk-proj-AbCd...` verbatim becoming `OPENAI_API_KEY=***`.

**Operator consequence.** This is a transcript-contamination class, not a live-exploit class: the secret is in stored session data and in anything you exported or shared from it. If you ran commands with inline credentials on v0.20.0 or earlier, rotate them and treat old session exports as sensitive.

## 6. Docker-sandboxed sessions were sharing one container and each other's repo mounts

- **Date:** 2026-08-09
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** merge_commit_sha e95e13783bc4a17ce97926a4a6b226e6d297abc0; compare/e95e1378...v2026.8.13 -> status=ahead, ahead_by=661, behind_by=0 (ancestor of stable tag v2026.8.13).
- **Receipt:** https://github.com/NousResearch/hermes-agent/pull/82731
- **Half:** defect | security-relevant | **Confidence:** high

**What changed.** Reported from Discord by lpha3ch0 against a sandboxed security profile: with `container_persistent: false`, all sessions collapsed onto one shared "default" container, and the /workspace bind-mount source was read from the process-global TERMINAL_CWD env var written by the desktop workspace picker -- which outlives its session. A brand-new chat therefore attached to the previous session's container with the previous session's repo bind-mounted read-write. A second bug had the gateway record the *host* launch dir as session cwd, so every command in the sandbox prefixed `cd /Users/<user>/dev/<repo>` and returned exit 126. The fix keys containers per session, adds a subagent-to-parent container alias registry so children share the parent's sandbox deliberately, and makes `_resolve_task_host_cwd()` the single owner of mount policy across all four env-creation sites, refusing process-global cwd sources under isolation. Default `container_persistent: true` behaviour is unchanged.

**Operator consequence.** If you relied on `container_persistent: false` for per-session isolation before v0.20.1, you did not have it -- audit what repos were reachable from sessions you believed were sealed. Upgrade, and note that the *default* config was never isolated and still is not: one long-lived shared container remains the default.

## Researcher lane notes

Volume caveat, stated up front: this source moved at roughly 2,660 commits and ~1,180 merged PRs across the fourteen-day window, per the project's own counts in the three release bodies. This harvest is a selection, not a census. I searched merged PRs across the contract's high-signal patterns (mcp, cron, sandbox, approval, permission, security, memory, skill, subagent, delegate, bot mode, teammate) and read the full bodies of the 22 that looked decision-bearing. Material I saw and deliberately left out as below the bar or as detail folded into a reported entry: cron scheduler self-heal (EMFILE recovery #88335, wedged-job re-arm #88339, last_fire_error surfacing #88555, continuity=true #80774), the desktop MCP surface consolidation wave (#87525, #87572, #87576, #87579, #87581), PYTHONHOME/PYTHONPATH subprocess ownership hardening (#88285), the memory tool being hidden from cron agents where it had always failed at runtime (#79762), delegation truncation marking (#86641), and the ~20-skill bundled-skills authoring sweep (#82030 and siblings).

Channel discipline: every reported SHA was resolved by ancestry, not by date, using the GitHub compare API -- `GET /repos/NousResearch/hermes-agent/compare/<merge_commit_sha>...<tag>`, reading `status` and `behind_by`. status=ahead with behind_by=0 proves the commit is an ancestor of that tag; the one main-unreleased entry (#88643) returned status=behind against v2026.8.16.2, proving the newest stable tag does not contain it. All 27 releases in the repo are prerelease:false -- this project ships no rc/beta/nightly channel, so "preview-or-beta" is not an available classification here and no entry uses it.

Timing note worth carrying: the newest stable tag v2026.8.16.2 was created 2026-08-17T18:43:23Z, and main is 144 commits ahead of it by the end of the window. Two of the most operator-relevant items land on either side of that four-minute-to-two-hour boundary -- project-local skill discovery (#88566, merged 18:39Z, in the tag by four minutes) and its scan quarantine (#88643, merged 21:06Z, not in any tag). That is the cleanest illustration of the released-is-not-merged rule this source has produced.

Gaps recorded honestly. (1) The repo publishes no GitHub security advisories -- `GET /repos/NousResearch/hermes-agent/security-advisories` returned an empty array -- so no CVE or GHSA exists for the Windows approval bypass (#84428), the Docker mount leak (#82731), or the secret-leak paths (#81675, #83458). Those are maintainer-authored PR receipts only; there is no canonical advisory to link and I have not invented one. The blender supply-chain removal (#83404) likewise has no advisory: the primary evidence is the maintainer's own public report plus Hermes's independent verification of the 301 redirects to the MCPBlender org, which I could not re-verify myself without following links into attacker-controlled infrastructure and chose not to. (2) The three release bodies in the window contain no itemized changes, so I could not use release notes as a source of truth for anything and read PRs instead -- which also means anything that moved without a searchable keyword in its PR title is invisible to this pass. (3) Contributor-facing figures quoted in entries (commit counts, PR counts, false-positive audit results, test pass counts) are the project's own self-reported numbers from release and PR bodies; I did not independently recount them and they are attributed as claims, not verified as facts. (4) Discord is cited as the origin of two findings (#82731 by lpha3ch0, #88566 via masoria) inside maintainer-authored PR bodies; I did not visit Discord and treat the PR body as the receipt, per the contract's rejection of unsourced social claims.

## Surfaces checked

- sources/hermes-agent.yml (source contract, read first)
- https://github.com/NousResearch/hermes-agent/releases (GitHub releases API, 27 releases enumerated)
- https://github.com/NousResearch/hermes-agent/tags (tags API, 33 refs; prerelease vs stable checked)
- GitHub merged-PR search over 2026-08-03..2026-08-17 across contract high-signal patterns (mcp, cron, sandbox, approval, permission, security, memory, skill, subagent, delegate, bot mode, teammate)
- GitHub compare API for ancestry proof on every reported SHA
- repos/NousResearch/hermes-agent/security-advisories (returned [] -- no repo-published GHSA in window)
- default-branch commits after the newest stable tag (compare v2026.8.16.2...main, 144 commits ahead)
- https://hermes-agent.nousresearch.com/docs/user-guide/features/delegation (deployed docs)
- In-tree docs at tag: website/docs/user-guide/features/delegation.md @ v2026.8.16.2
