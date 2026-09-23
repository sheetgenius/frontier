---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-gemini-cli-extension-install-still-checks-out-fetch-head-after-plugin4shell-disclosure
source: gemini-cli
source_contract: sources/gemini-cli.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/google-gemini/gemini-cli/blob/v0.60.0/packages/cli/src/config/extensions/github.ts
    precision: tagged_commit_file
  - url: https://www.air.security/blog-posts/plugin4shell
    precision: third_party_research
---
# 2026-09-21-gemini-cli-extension-install-still-checks-out-fetch-head-after-plugin4shell-disclosure

AIR Security published Plugin4Shell on 2026-09-17: agents that install a plugin by pinned commit do not verify the checkout resolved to that commit. For Gemini CLI the write-up says the installer runs git fetch then git checkout FETCH_HEAD, and a repository whose default branch is named FETCH_HEAD makes checkout resolve to the branch and discard the fetched commit. AIR reports Google answered on 2026-08-04 that Gemini CLI is deprecated and will not be patched. At v0.60.0, packages/cli/src/config/extensions/github.ts line 72 is still git.checkout('FETCH_HEAD'). The same window shipped four security-heavy stables.

Channel: tagged-release (unfixed at v0.60.0). Half: defect.

Operator consequence: Install Gemini CLI extensions only from repositories you control or can re-verify by hash after install (git rev-parse HEAD inside the extension directory). The attack needs control of the extension repository; Whether a given git host accepts a branch named FETCH_HEAD is the host's answer, not Gemini CLI's.

## Receipt
- https://github.com/google-gemini/gemini-cli/blob/v0.60.0/packages/cli/src/config/extensions/github.ts
- https://www.air.security/blog-posts/plugin4shell
