---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-gemini-cli-nightly-checks-existing-file-writability-and-preserves-hard-links
source: gemini-cli
source_contract: sources/gemini-cli.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/google-gemini/gemini-cli/commit/09d81bf116b6f0ef084731dc996aa9d56438bb70
    precision: commit
  - url: https://github.com/google-gemini/gemini-cli/blob/v0.67.0-nightly.20261024.gcd1b45c2d/packages/core/src/services/fileSystemService.ts#L57-L129
    precision: tagged_commit_file
  - url: https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/core/src/services/fileSystemService.ts#L53-L100
    precision: tagged_commit_file
---
# 2026-10-24-gemini-cli-nightly-checks-existing-file-writability-and-preserves-hard-links

Nightly checks existing-file writability and preserves hard links. Before replacing an existing file, the nightly implementation checks `W_OK` access for the executing user. For a file with multiple hard links it writes in place to preserve the inode/link relationship; ordinary files retain the temporary-file-and-rename path and mode preservation. Stable's rename-based implementation lacks those checks. In-place writing trades atomic replacement for hard-link fidelity.

Channel: preview-or-beta. Half: both. Date: 2026-10-21.

Operator consequence: Use a nightly canary if file permissions or hard-linked working files are part of the job contract. Verify both the intended permission failure and link behavior under the real execution identity; a privileged user may have access that an ordinary user does not. This repairs a concrete filesystem semantic mismatch without establishing a universal write-protection or cross-process-locking guarantee.

## Receipt
- https://github.com/google-gemini/gemini-cli/commit/09d81bf116b6f0ef084731dc996aa9d56438bb70
- https://github.com/google-gemini/gemini-cli/blob/v0.67.0-nightly.20261024.gcd1b45c2d/packages/core/src/services/fileSystemService.ts#L57-L129
- https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/core/src/services/fileSystemService.ts#L53-L100
