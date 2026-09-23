---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-grok-build-the-channel-question-now-has-an-answer-version-string-per-version-binary-digest-and-a-sour
source: grok-build
source_contract: sources/grok-build.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/xai-org/grok-build/blob/4247f661689354b831191f11eeeac8424993fe3d/SOURCE_REV
    precision: tagged_commit_file
  - url: https://github.com/xai-org/grok-build/blob/4247f661689354b831191f11eeeac8424993fe3d/crates/codegen/xai-grok-shell/Cargo.toml
    precision: tagged_commit_file
  - url: https://x.ai/cli/install.sh
    precision: official_docs
---
# 2026-09-21-grok-build-the-channel-question-now-has-an-answer-version-string-per-version-binary-digest-and-a-sour

The channel question now has an answer: version string, per-version binary, digest, and a source join. At intake the contract said the channel could not be pinned. It can: a version can be installed by name, each binary carries a GCS md5 (1.0.38 linux-x86_64: md5=L+vB046em3UEGVxsK6GQFQ==, 164567296 bytes, Last-Modified 2026-09-19T00:52:45Z), and each public sync names the crate version it mirrors. The mirror trails builds by 0 to 3 days (1.0.38 binary 09-19T00:52Z; sync naming 1.0.38 09-19T17:07Z).

Channel: tagged-release (artifact store) + mirror SHA. Half: capability. Date: window.

Operator consequence: Pin with `curl -fsSL https://x.ai/cli/install.sh | bash -s 1.0.38` and record the `x-goog-hash` md5 of the artifact yourself, because the script will not check it. For a code claim, read at the sync whose Cargo.toml version equals `grok --version`. Enterprise installs lag: the `enterprise` channel sat on 1.0.35 from 09-16 while stable moved on; name the channel you ran.

## Receipt
- https://github.com/xai-org/grok-build/blob/4247f661689354b831191f11eeeac8424993fe3d/SOURCE_REV
- https://github.com/xai-org/grok-build/blob/4247f661689354b831191f11eeeac8424993fe3d/crates/codegen/xai-grok-shell/Cargo.toml
- https://x.ai/cli/install.sh
