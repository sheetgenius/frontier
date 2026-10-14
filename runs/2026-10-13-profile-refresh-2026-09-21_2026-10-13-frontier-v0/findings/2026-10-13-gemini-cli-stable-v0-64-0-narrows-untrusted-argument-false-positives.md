---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-gemini-cli-stable-v0-64-0-narrows-untrusted-argument-false-positives
source: gemini-cli
source_contract: sources/gemini-cli.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/google-gemini/gemini-cli/pull/29672
    precision: merged_pr
  - url: https://github.com/google-gemini/gemini-cli/commit/581fdbbface8dff93f24db861395f22581099a45
    precision: commit
  - url: https://github.com/google-gemini/gemini-cli/releases/tag/v0.64.0
    precision: github_release
  - url: https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/utils/untrustedContextTracker.ts
    precision: tagged_commit_file
  - url: https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/policy/policy-engine.ts#L633-L669
    precision: tagged_commit_file
  - url: https://github.com/google-gemini/gemini-cli/issues/29579
    precision: official_docs
  - url: https://github.com/google-gemini/gemini-cli/issues/29650
    precision: official_docs
---
# 2026-10-13-gemini-cli-stable-v0-64-0-narrows-untrusted-argument-false-positives

Stable v0.64.0 narrows untrusted-argument false positives. On 0.61.0 through 0.63.0 the tracker indexed ordinary words and path segments from output marked untrusted, including the shell's own output. Later matching flags/path-like arguments could ask again or fail headless. Users reported ls -ld on 0.61.0 and ls -la, grep -rn and git diff on 0.62.0; those are reports, not measured prevalence. Stable 0.64.0 stops indexing path segments, exempts safe flags, preserves shell variables, limits argument matches to URLs/absolute paths/script extensions, and permits compound commands or loops when every subcommand matches an explicit ALLOW rule.

Channel: tagged-release. Half: both. Date: 2026-10-13.

Operator consequence: Upgrade/test 0.64.0 for jobs affected by false-positive prompts or DENY on older stables. Check the same routine commands after output has accumulated. The fix can remove accidental human approvals while preserving narrower taint checks; it is not proof that every legitimate workload proceeds or every hostile one is stopped.

## Receipt
- https://github.com/google-gemini/gemini-cli/pull/29672
- https://github.com/google-gemini/gemini-cli/commit/581fdbbface8dff93f24db861395f22581099a45
- https://github.com/google-gemini/gemini-cli/releases/tag/v0.64.0
- https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/utils/untrustedContextTracker.ts
- https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/policy/policy-engine.ts#L633-L669
- https://github.com/google-gemini/gemini-cli/issues/29579
- https://github.com/google-gemini/gemini-cli/issues/29650
