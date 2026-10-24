---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-deepseek-harness-native-macos-computer-use-reaches-tagged-source-as-an-explicitly-unmounted-experiment
source: deepseek-harness
source_contract: sources/deepseek-harness.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/experimental/cua-macos/README.md
    precision: tagged_commit_file
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/experimental/cua/README.md
    precision: tagged_commit_file
  - url: https://github.com/deepseek-ai/deepseek-harness/commit/f9c634d0920ef529f8677eb27af9012afe912234
    precision: commit
---
# 2026-10-24-deepseek-harness-native-macos-computer-use-reaches-tagged-source-as-an-explicitly-unmounted-experiment

Native macOS Computer Use reaches tagged source as an explicitly unmounted experiment. The source composition supports macOS 14+ application-scoped observation and input with consent before accessibility reads, titles, screenshots or actions. Saved application grants bind executable identity and code signature; task grants are revocable. It requires native local setup, has no shipped profile mount, and defers distribution/onboarding. Input delivery can return dispatched without proving the intended UI result; the contract requires a fresh observation. Private macOS interfaces and concurrent UI actors remain limitations.

Channel: preview-or-beta. Half: capability. Date: 2026-10-14.

Operator consequence: This is a concrete path for experiments in operating another application, not evidence that installing rc.3 enables autonomous desktop control. Budget native setup and consent review, isolate a trial, and verify the resulting screen after actions. The general agent can potentially replace app-specific click scripts, but application identity and outcome verification remain human responsibilities. No native component was built, signed or run here.

## Receipt
- https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/experimental/cua-macos/README.md
- https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/experimental/cua/README.md
- https://github.com/deepseek-ai/deepseek-harness/commit/f9c634d0920ef529f8677eb27af9012afe912234
