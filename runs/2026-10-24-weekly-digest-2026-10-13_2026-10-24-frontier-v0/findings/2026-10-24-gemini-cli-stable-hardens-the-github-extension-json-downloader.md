---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-gemini-cli-stable-hardens-the-github-extension-json-downloader
source: gemini-cli
source_contract: sources/gemini-cli.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/google-gemini/gemini-cli/commit/a15ed711f120578df9115892991babf74e0cd75c
    precision: commit
  - url: https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/cli/src/config/extensions/github_fetch.ts
    precision: tagged_commit_file
  - url: https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/cli/src/config/extensions/github_fetch.ts#L15-L205
    precision: tagged_commit_file
  - url: https://github.com/google-gemini/gemini-cli/releases/tag/v0.65.0
    precision: github_release
---
# 2026-10-24-gemini-cli-stable-hardens-the-github-extension-json-downloader

Stable hardens the GitHub extension JSON downloader. The old JSON helper attached GITHUB_TOKEN to each requested URL, including recursively followed redirect destinations, and did not validate destinations itself. Stable 0.65.0 restricts that token to HTTPS github.com or its subdomains, validates each destination, and supplies safeLookup to check the addresses used by the socket. It sets a 30-second request timeout and rejects invalid JSON, aborted/incomplete responses and redirect lifecycle failures through the promise. The commit diff and tagged code were read as data, never executed.

Channel: tagged-release. Half: both. Date: 2026-10-20.

Operator consequence: Upgrade extension-installation flows using GITHUB_TOKEN to stable 0.65.0. Test redirect destinations, private-host refusals and malformed or aborted responses. This narrows credential forwarding and adds bounded failure handling; it does not repair the separate unchecked FETCH_HEAD commit-pin path. No hosted token exfiltration, credential leak or advisory identifier was reproduced or assigned here.

## Receipt
- https://github.com/google-gemini/gemini-cli/commit/a15ed711f120578df9115892991babf74e0cd75c
- https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/cli/src/config/extensions/github_fetch.ts
- https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/cli/src/config/extensions/github_fetch.ts#L15-L205
- https://github.com/google-gemini/gemini-cli/releases/tag/v0.65.0
