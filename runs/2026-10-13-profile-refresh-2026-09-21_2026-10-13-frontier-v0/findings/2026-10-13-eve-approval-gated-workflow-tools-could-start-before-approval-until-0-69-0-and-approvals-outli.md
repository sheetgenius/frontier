---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-eve-approval-gated-workflow-tools-could-start-before-approval-until-0-69-0-and-approvals-outli
source: eve
source_contract: sources/eve.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/vercel/eve/commit/bb70743186612e13bd0b05c58d37e5b024d17a76
    precision: commit
  - url: https://github.com/vercel/eve/commit/1a5bc56e8539e0c7d555402a932a07cbd88ac4d6
    precision: commit
  - url: https://github.com/vercel/eve/blob/eve%400.63.0/packages/eve/src/harness/tool-loop.ts#L2967-L2971
    precision: tagged_commit_file
  - url: https://github.com/vercel/eve/pull/3983
    precision: merged_pr
  - url: https://github.com/vercel/eve/pull/3954
    precision: merged_pr
  - url: https://github.com/vercel/eve/releases/tag/eve%400.69.0
    precision: github_release
  - url: https://github.com/vercel/eve/blob/eve%400.63.0/docs/tools/workflows.mdx?plain=1#L301-L302
    precision: tagged_commit_file
  - url: https://github.com/vercel/eve/pull/4135
    precision: merged_pr
---
# 2026-10-13-eve-approval-gated-workflow-tools-could-start-before-approval-until-0-69-0-and-approvals-outli

Approval-gated workflow tools could start before approval until 0.69.0, and approvals outlived cancelled turns until 0.70.0. #3983: "Workflow tools could start while awaiting approval, and automatic policy denials did not prevent deferred dispatch." The 0.63.0 docs promised the opposite. #3954: "anyone could cancel a policy-guarded approval, so a requester-only policy ... still let someone else dismiss the request"; it also closed a path where "an approval parked alongside deferred workflow calls settled without its policy" and one where ACP's Deny was dropped instead of treated as Cancel. #4135: sign-in and approval prompts "outlived the turn that raised them" and "a later click started a fresh turn"; from 0.70.0, cancelling a turn withdraws its approval and "a later answer to it approves nothing."

Channel: tagged-release. Half: defect. Date: 2026-10-01 (eve@0.69.0), 2026-10-02 (eve@0.70.0).

Operator consequence: Audit approval-gated blocking/deferred workflow dispatch on 0.63.0 through 0.68.0; the first affected release and exposure of every legacy background path are not established. Compare start times with approval settlement and look for calls that ran despite denial. The baseline deferred-path predicate explicitly excludes `execution: "background"`, so this evidence cannot label every background path ungated or safe. The dispatch repair first shipped in 0.69.0 and prompt withdrawal in 0.70.0; install current stable 0.79.0, and include the later lifecycle and queued-text cases in authority tests. Write a test that a denied call never starts.

## Receipt
- https://github.com/vercel/eve/commit/bb70743186612e13bd0b05c58d37e5b024d17a76
- https://github.com/vercel/eve/commit/1a5bc56e8539e0c7d555402a932a07cbd88ac4d6
- https://github.com/vercel/eve/blob/eve%400.63.0/packages/eve/src/harness/tool-loop.ts#L2967-L2971
- https://github.com/vercel/eve/pull/3983
- https://github.com/vercel/eve/pull/3954
- https://github.com/vercel/eve/releases/tag/eve%400.69.0
- https://github.com/vercel/eve/blob/eve%400.63.0/docs/tools/workflows.mdx?plain=1#L301-L302
- https://github.com/vercel/eve/pull/4135
