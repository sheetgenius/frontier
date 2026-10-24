---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-gemini-cli-preview-forwards-parent-signals-nightly-blocks-further-work-after-cancellation
source: gemini-cli
source_contract: sources/gemini-cli.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/google-gemini/gemini-cli/commit/ed96faedfd5571f055c44f2c9509d62321d1138d
    precision: commit
  - url: https://github.com/google-gemini/gemini-cli/commit/451a02ff03f1d2a8fe870c120fd5342cfd6f9fd1
    precision: commit
  - url: https://github.com/google-gemini/gemini-cli/commit/a3dd9f8c7bcb495a46d0b505b6f179996ccd8332
    precision: commit
  - url: https://github.com/google-gemini/gemini-cli/blob/v0.67.0-nightly.20261024.gcd1b45c2d/packages/cli/src/nonInteractiveCli.ts
    precision: tagged_commit_file
---
# 2026-10-24-gemini-cli-preview-forwards-parent-signals-nightly-blocks-further-work-after-cancellation

Preview forwards parent signals; nightly blocks further work after cancellation. The bootstrap parent forwards termination signals to the child, with Windows-specific handling for interrupt/quit. Nightly installs headless termination handlers even without a TTY, checks cancellation before consuming more responses and before scheduling tool calls, and returns cancellation-shaped output. The latest UI repair stops continuation processing and suppresses automatic nudges after cancellation and other terminal outcomes. Stable's history repair in section 2 does not include these execution-loop changes.

Channel: preview-or-beta. Half: both. Date: 2026-10-23.

Operator consequence: Test the nightly with the actual supervisor, piped input and output mode before relying on cancellation as a run boundary. Test that no new tool begins after cancellation as well as whether the already-running process stops. The implementation reduces the need to watch for a cancelled agent restarting itself; it does not establish process-tree termination across every platform or tool.

## Receipt
- https://github.com/google-gemini/gemini-cli/commit/ed96faedfd5571f055c44f2c9509d62321d1138d
- https://github.com/google-gemini/gemini-cli/commit/451a02ff03f1d2a8fe870c120fd5342cfd6f9fd1
- https://github.com/google-gemini/gemini-cli/commit/a3dd9f8c7bcb495a46d0b505b6f179996ccd8332
- https://github.com/google-gemini/gemini-cli/blob/v0.67.0-nightly.20261024.gcd1b45c2d/packages/cli/src/nonInteractiveCli.ts
