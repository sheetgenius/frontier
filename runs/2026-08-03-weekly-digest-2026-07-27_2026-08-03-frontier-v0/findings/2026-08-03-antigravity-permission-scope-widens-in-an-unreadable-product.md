---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-03-antigravity-permission-scope-widens-in-an-unreadable-product
source: antigravity
source_contract: sources/antigravity.yml
window:
  start: 2026-07-27
  end: 2026-08-03
status: accepted
confidence: high
evidence:
  - url: https://github.com/google-antigravity/antigravity-cli/releases/tag/1.1.9
    precision: github_release
  - url: https://github.com/google-antigravity/antigravity-cli/releases/tag/1.1.10
    precision: github_release
  - url: https://github.com/google-antigravity/antigravity-cli
    precision: official_repo
---
# 2026-08-03-antigravity-permission-scope-widens-in-an-unreadable-product

Antigravity CLI 1.1.9 (2026-07-31, tagged) widened what a single approval covers.
The changelog states it in one sentence: "Improved permission grants so a pattern
approved at a prompt is recorded for the rest of the conversation, letting later
commands that match it run without prompting again." That is a defensible design
and several harnesses on this watchlist do the same; it is recorded because it
changes the scope of an operator's yes, from one command to every later command
matching the pattern for the remainder of the conversation.

What makes it worth a finding rather than a line is where it landed. The
successor's public repository, google-antigravity/antigravity-cli, contains
`.github`, `CHANGELOG.md`, `README.md`, a demo gif and `examples` -- no source,
no license, and GitHub detects no primary language. The repository is a changelog
and issue front for a closed binary. Google has not claimed otherwise; the
observation is about what an operator can verify, and the answer is that the
sentence above is the entire available description of the new boundary. There is
no code to check it against and no way to establish what "matches" means for a
pattern.

This continues an arc the publication has been tracking since the 2026-06-16
issue, where Google's consumer Gemini CLI stopped serving requests while a
security fix sat in preview, and the objection recorded then was that six
thousand community pull requests went into an Apache-2.0 tool whose replacement
cannot be read. This is the first window in which that replacement changed a
permission behaviour.

Also tagged in the window: 1.1.8 (2026-07-28) added machine-readable print mode
(`--output-format` with `text`, `json`, `stream-json`, plus `--json-schema`), a
strongly-typed NDJSON event stream with a closed-vocabulary `step_type`
discriminator, so headless runs in CI and eval harnesses can consume output
incrementally. 1.1.10 (2026-08-03) added Business sign-in for Gemini Enterprise
accounts under Google Cloud terms with regional inference and administrator
controls, Workforce Identity Federation sign-in for organisations federating
through an external identity provider, and sign-in with Application Default
Credentials. Channel: tagged-release throughout.

## Receipt
- https://github.com/google-antigravity/antigravity-cli/releases/tag/1.1.9
- https://github.com/google-antigravity/antigravity-cli/releases/tag/1.1.10
- https://github.com/google-antigravity/antigravity-cli
