---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-gemini-cli-google-starts-merging-agent-authored-prs-into-the-gemini-cli-default
source: gemini-cli
source_contract: sources/gemini-cli.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://github.com/google-gemini/gemini-cli/pull/28812
    precision: merged_pr
---
# 2026-08-17-gemini-cli-google-starts-merging-agent-authored-prs-into-the-gemini-cli-default

Google starts merging agent-authored PRs into the Gemini CLI default branch.

Between 2026-08-14 and 2026-08-17, 29 PRs titled `[SSR Agent] Issue Fix (NNNNN): ...` were opened on google-gemini/gemini-cli by @joneba-google, each closing a long-standing issue. Eight merged to main inside the window (#28811, #28812, #28813, #28814, #28819, #28820, #28847, #28864); three more merged 2026-08-18T00:20Z; 13 were closed unmerged; 5 remained open at window end. They are output of the caretaker-agent PR-generation pipeline, not hand-authored: the body of #28811 leaks the generator's own paths, e.g. `.../tools/caretaker-agent/evals/pr-generation/run_outputs/onboarded_triaged_3.5_flash/agent_environments/issue_19826/...`, naming the model tier that wrote it. Humans are still in the loop  --  #28812 carries an APPROVED review from @adamfweidman on 2026-08-17T05:11Z and a `gemini-code-assist[bot]` comment. Content is not cosmetic: #28812 (commit a5c49a5c4ab5ebe8119c3b363772ad043bbc4ceb) adds 3s/5s `execAsync` timeouts to the `ps` and PowerShell calls in `packages/core/src/ide/process-utils.ts` and makes `getProcessInfo()` fall back to empty defaults, changing TUI startup behaviour. #28811 rewrote the a2a-server environment-isolation tests  --  the same package hardened by the v0.53.0 RCE fix. There is no doc, README, or roadmap entry describing the pipeline anywhere in the repo.

Channel: main-unreleased. Ancestry: `git tag --contains 2a87e7be1` / `a5c49a5c4` / `194edea47` / `e0e846bf0` returns empty  --  these commits are in no tag at all, stable or prerelease. Latest stable tag v0.55.1 was published 2026-08-11T21:15Z, before the first SSR merge on 2026-08-14T23:51Z. Confirmed against the tag list from `gh api repos/google-gemini/gemini-cli/tags`.

Operator consequence: Watch, and change how you read this repo's provenance. Starting 2026-08-14, `git log` on main no longer distinguishes human from machine authorship by author field  --  every one of these lands under a human Google account with an `[SSR Agent]` title prefix as the only marker. If you vendor, fork, or audit gemini-cli, grep for `[SSR Agent]` in the log to segregate machine-authored commits, and read those diffs yourself rather than trusting the PR body, which is also machine-written. None of this is in a stable tag yet: it will first reach operators in the release after v0.55.1, so audit before you upgrade past it, not after.

## Receipt
- https://github.com/google-gemini/gemini-cli/pull/28812
