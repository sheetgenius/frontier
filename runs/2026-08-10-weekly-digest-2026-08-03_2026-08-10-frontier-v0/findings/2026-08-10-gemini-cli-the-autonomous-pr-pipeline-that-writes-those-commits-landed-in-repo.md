---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-10-gemini-cli-the-autonomous-pr-pipeline-that-writes-those-commits-landed-in-repo
source: gemini-cli
source_contract: sources/gemini-cli.yml
window:
  start: 2026-08-03
  end: 2026-08-10
status: accepted
confidence: high
evidence:
  - url: https://github.com/google-gemini/gemini-cli/pull/28431
    precision: merged_pr
---
# 2026-08-10-gemini-cli-the-autonomous-pr-pipeline-that-writes-those-commits-landed-in-repo

The autonomous PR pipeline that writes those commits landed in-repo, undocumented.

Between 2026-08-05 and 2026-08-07, twelve PRs from @joneba-google and @chadd28 built out `tools/caretaker-agent/` in the Gemini CLI repo: a Cloud Run job, Workflows definition and Dockerfile for a PR generator (#28431, commit bde504f2500bd2326fd578c5828476cede9442d8); an iterative bug-fixing state machine and container worker entrypoint (#28433); an environment-config parser, command executor and GitHub client (#28435); an Antigravity agent runner with prompt templates (#28434); a Firestore-backed job store with dual locking (#28432); an LLM triage orchestrator with prompt hill-climbing (#28345, #28524); a triage evaluation framework with a judge runner and golden-issue collection (#28530, #28532); a Pub/Sub `ready-for-code` topic publisher (#28588); and a GCP deployment script (#28529). Google is running the loop against its own issue tracker  --  earlier work in the same series (#28352) sanitizes and wraps GitHub issue titles in `untrusted_context` before feeding them to the triage model. No entry for any of this exists in `docs/`, README.md, or ROADMAP.md: `grep -rli 'caretaker|SSR agent|pr-generator' docs/ README.md ROADMAP.md` matches only the auto-generated changelog files.

Channel: tagged-release. Ancestry: `git tag --contains bde504f25` -> v0.55.1 (stable). Same for cf22ac7e8 and the rest of the 2026-08-05..08-07 batch. Nuance: this code sits under `tools/caretaker-agent/`, and `git show v0.55.1:package.json` gives `workspaces: ["packages/*"]`  --  so it is inside the stable tag's tree but is not part of the published npm package.

Operator consequence: Observe  --  this is the mechanism, not the product. Nothing here ships in `@google/gemini-cli`, so it changes no runtime behaviour. What it changes is what a commit on this repo means: from 2026-08-14 the same pipeline began landing fixes on main. If you maintain an adapter, a fork, or a security posture that assumes human authorship of upstream changes, that assumption expired in this window, and there is no upstream documentation to tell you so.

## Receipt
- https://github.com/google-gemini/gemini-cli/pull/28431
