---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-omnigent-v0-9-0-reverted-owner-only-approval-a-shared-editor-can-again-authorize
source: omnigent
source_contract: sources/omnigent.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://github.com/omnigent-ai/omnigent/pull/4318
    precision: merged_pr
---
# 2026-08-17-omnigent-v0-9-0-reverted-owner-only-approval-a-shared-editor-can-again-authorize

v0.9.0 reverted owner-only approval: a shared editor can again authorize tool calls that run with the owner's credentials.

The whole #2150 stack was unwound: delegated `can_approve` authority (#3446), model-visible shared-message attribution (#3422), and owner-only approval gating (#3416). #3416 was a security fix, and its revert is labelled a security regression in the PR body and again in the backport commit message: shared-session tools execute with the session owner's runner identity and ambient credentials, so with #3416 reverted a shared editor can once again authorize owner-credentialed tool calls. Issue #2150 was re-opened. Note the whiplash: the delegation feature was announced as a headline in the v0.8.0 notes eight days earlier.

Channel: tagged-release. Ancestry: PR #4318 landed on main as 7efe05623b687db9373191d323d58687ec383fb0 on 2026-08-07T04:54:05Z. Ancestry against the tag is misleading and must be read carefully: gh api repos/omnigent-ai/omnigent/compare/v0.9.0...7efe0562 returns status "diverged" (ahead_by 15, behind_by 2, merge base 0b00c53026642c3de4d8cc05003fae53a44ff76d), because releases are cut on release/vX.Y branches and this change was cherry-picked, not merged. The v0.9.0 tag object points at cc4720a79fbdf9ccee56724bf571e7d48e1d9ac2, whose commit message is "Backport six post-cut fixes onto release/v0.9.0 (#4596)" and contains the line "(cherry picked from commit 7efe05623b687db9373191d323d58687ec383fb0)". Content is in the tag; the SHA is not.

Operator consequence: Re-audit your session sharing before or immediately after upgrading to v0.9.0. Anyone you have granted edit access to a shared session can approve tool calls that then execute as you, with your credentials. Treat shared editor as equivalent to approver until #2150 lands again. Also note the process fact: a governance property that appeared in one release's headline features was removed in the next.

## Receipt
- https://github.com/omnigent-ai/omnigent/pull/4318
