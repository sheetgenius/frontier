---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-hermes-agent-the-gap-in-that-trust-gate-a-git-pull-could-inject-a-skill-into-an
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://github.com/NousResearch/hermes-agent/pull/88643
    precision: merged_pr
---
# 2026-08-17-hermes-agent-the-gap-in-that-trust-gate-a-git-pull-could-inject-a-skill-into-an

The gap in that trust gate  --  a git pull could inject a skill into an already-trusted repo  --  is fixed only on main.

The follow-up to #88566 names the hole its predecessor left: trust via `hermes skills trust` is a repo-level decision made once, but the repo's skill content changes with every pull  --  the hub install path scans, a checkout did not, so a `git pull` could inject a malicious skill into an already-trusted repo with no scan anywhere. This PR runs every project SKILL.md dir through `skills_guard.scan_skill_cached`, the same scanner as hub installs, with the cache under `~/.hermes/cache/project_skill_scans/` and explicitly never inside the repo; a `dangerous` verdict quarantines and a scanner failure fails closed. `iter_project_skill_files()` becomes the single iteration chokepoint so no consumer can bypass the gate. It also makes non-interactive surfaces (cron, API, ACP) inherit the human's trust decision by project identity via TERMINAL_CWD rather than prompting or auto-trusting  --  untrusted or no workdir loads nothing, and it never prompts. Tests include a real malicious fixture scoring `dangerous` on six findings including prompt_injection_ignore and hermes_env_access.

Channel: main-unreleased. Ancestry: merge_commit_sha 6e22d265835fe035e648f53b9f28d772037566f0, merged 2026-08-17T21:06:17Z into main. GET repos/NousResearch/hermes-agent/compare/6e22d265...v2026.8.16.2 -> status=behind, i.e. the newest stable tag is BEHIND this commit and does not contain it. The tag was created 2026-08-17T18:43:23Z, roughly 2h23m before the merge. No later tag exists as of 2026-08-17.

Operator consequence: This is the entry that matters for the publication's central rule. Project-local skills are in a stable tag; the scan that keeps a trusted repo trustworthy across pulls is not. If you turn on project skill discovery on v0.20.3, you are running the tier without its quarantine  --  trust only repos you control, and re-check for a tag containing 6e22d265 before you widen that.

## Receipt
- https://github.com/NousResearch/hermes-agent/pull/88643
