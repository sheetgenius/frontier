---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-paperclip-command-injection-class-fix-cwe-78-in-paperclip-s-own-cli-guidance-on
source: paperclip
source_contract: sources/paperclip.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: medium
evidence:
  - url: https://github.com/paperclipai/paperclip/pull/11400
    precision: merged_pr
---
# 2026-08-17-paperclip-command-injection-class-fix-cwe-78-in-paperclip-s-own-cli-guidance-on

Command-injection-class fix (CWE-78) in Paperclip's own CLI guidance -- on master, not in any release.

Paperclip's copyable CLI guidance used the `pnpm paperclipai <sub> --flag "$VALUE"` form, which re-parses argument values through a shell -- so a command substitution inside a quoted value executes on the host before the CLI starts. The fix routes all guidance through the inert-argv `npx paperclipai` form, forbids host-derived values in copyable commands, and adds regression coverage. The PR classes it explicitly as CWE-78 and says it affects all deployment modes that show or use the affected guidance. Confidence is medium on impact only: the PR does not name the concrete path by which a hostile value reaches the guidance string, and no advisory has been filed.

Channel: main-unreleased. Ancestry: PR #11400 merge commit fdb9a4880, merged 2026-08-15T05:11:17Z, base master. compare fdb9a4880...master -> ahead. compare fdb9a4880...v2026.817.0 -> diverged, ahead=4, behind=123 (not contained in the stable). PR #11343 merge commit 5ca7b4c1f, merged 2026-08-13T23:43:22Z, likewise diverged from the tag. No GitHub security advisory has been published for either: gh api repos/paperclipai/paperclip/security-advisories returns 12 advisories, newest GHSA-x8hx-rhr2-9rf7 published 2026-07-22T23:12:15Z.

Operator consequence: Watch. Until this tags, do not paste Paperclip-generated `pnpm paperclipai ...` commands into a shell without reading them, particularly any command whose arguments contain values an agent produced. The safe form is `npx paperclipai`.

## Receipt
- https://github.com/paperclipai/paperclip/pull/11400
