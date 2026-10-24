---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-gemini-cli-the-readme-stops-promising-obsolete-access-and-warns-about-gemini-4-optimization
source: gemini-cli
source_contract: sources/gemini-cli.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/google-gemini/gemini-cli/commit/21976e977ef833e9a03538119eac933fe89767a7
    precision: commit
  - url: https://github.com/google-gemini/gemini-cli/commit/b25669d84e1a404e30c176d779e732e25dafcec0
    precision: commit
  - url: https://github.com/google-gemini/gemini-cli/blob/v0.66.0-preview.0/README.md
    precision: tagged_commit_file
  - url: https://github.com/google-gemini/gemini-cli/blob/v0.65.0/docs/get-started/authentication.mdx
    precision: tagged_commit_file
---
# 2026-10-24-gemini-cli-the-readme-stops-promising-obsolete-access-and-warns-about-gemini-4-optimization

The README stops promising obsolete access and warns about Gemini 4 optimization. Google's README now says Gemini CLI is not optimized for Gemini 4 Argon and recommends Antigravity for current models. It removes obsolete free-access selling points and states that consumer Google-login access was replaced on 2026-06-18. The stable branch's older authentication guide still recommends consumer Google sign-in. The new pinned README is a receipt for Google's October statement; it does not establish the historical bytes of a service notice at the previous cutoff or a universal shutdown of API-key/Vertex access.

Channel: docs-only. Half: both. Date: 2026-10-16.

Operator consequence: Separate choosing a harness version from verifying an account's service entitlement. Do not promote Gemini 4 launch benchmarks into Gemini CLI performance, or treat an installable npm package as a service guarantee. For migration planning, verify the actual authentication route and export/import requirements before allocating operator time to repairing an intentionally unavailable login path.

## Receipt
- https://github.com/google-gemini/gemini-cli/commit/21976e977ef833e9a03538119eac933fe89767a7
- https://github.com/google-gemini/gemini-cli/commit/b25669d84e1a404e30c176d779e732e25dafcec0
- https://github.com/google-gemini/gemini-cli/blob/v0.66.0-preview.0/README.md
- https://github.com/google-gemini/gemini-cli/blob/v0.65.0/docs/get-started/authentication.mdx
