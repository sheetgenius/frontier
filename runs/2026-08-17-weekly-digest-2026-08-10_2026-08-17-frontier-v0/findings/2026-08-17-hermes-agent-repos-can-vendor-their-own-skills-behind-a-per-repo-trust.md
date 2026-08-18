---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-hermes-agent-repos-can-vendor-their-own-skills-behind-a-per-repo-trust
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://github.com/NousResearch/hermes-agent/pull/88566
    precision: merged_pr
---
# 2026-08-17-hermes-agent-repos-can-vendor-their-own-skills-behind-a-per-repo-trust

Repos can vendor their own skills, behind a per-repo trust gate.

Sessions started inside a git checkout now source skills from `<root>/.hermes/skills/` and `<root>/.agents/skills/` as the highest-precedence tier, so a repo can ship its own skills without profile-global config and same-named bundled skills are overridden inside the repo rather than silently shadowing the vendored ones. Loading is gated at discovery time by an explicit per-repo trust decision (`hermes skills trust` / `untrust`, stored in `skills.trusted_project_dirs`), and the PR states the reason plainly: skills are executable procedure documents, so OpenCode-style automatic loading from any cloned repo is a prompt-injection vector. An untrusted repo contributes nothing to the index, `skills_list`, `skill_view`, slash commands or backend mounts  --  the only surface is a one-line banner notice. cwd and the trust list resolve once at agent build and the resolved tier is part of the skills-prompt cache key, so the system prompt stays byte-stable and there are no mid-session rescans. The PR credits community feedback (masoria on Discord) and cites OpenCode's and Codex's repo-local skill sourcing, with Codex's trusted-projects gate as the model followed.

Channel: tagged-release. Ancestry: merge_commit_sha f891d702dfeb5351f8020e621ee257c40bffa0a8; compare/f891d702...v2026.8.16.2 -> status=ahead, ahead_by=3, behind_by=0  --  merged 18:39Z, tagged 18:43Z, an ancestor of stable tag v2026.8.16.2 by four minutes.

Operator consequence: Adopt this for shared repos  --  it is the right shape: opt-in per repo, gated at discovery rather than at use, and nothing leaks into the prompt before you say yes. The failure mode to watch for is trust-once-then-pull, which the follow-up below addresses and which is NOT in this tag.

## Receipt
- https://github.com/NousResearch/hermes-agent/pull/88566
