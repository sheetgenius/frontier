---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-claude-code-managed-settings-an-os-denied-read-now-starts-sessions-without-that-source-s-policy-parse
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/anthropics/claude-code/blob/2301018b1f61/CHANGELOG.md?plain=1#L920
    precision: tagged_commit_file
  - url: https://github.com/anthropics/claude-code/releases/tag/v2.1.285
    precision: github_release
  - url: https://code.claude.com/docs/en/managed-settings
    precision: official_docs
---
# 2026-10-13-claude-code-managed-settings-an-os-denied-read-now-starts-sessions-without-that-source-s-policy-parse

Managed settings: an OS-denied read now starts sessions without that source's policy; parse errors still stop them. Until 2.1.285 Claude Code refused to start when the operating system denied it a managed settings file; 2.1.285 calls that a bug. Now, when the read is denied, as with a root-only file a developer's account cannot open, and no other admin source supplies policy, every session starts without that source's policy and only records it in `/status`, `claude doctor` and `-p` stderr. Unparseable sources and other read errors still stop every session. Elsewhere the fail-closed surface grew: single-value locks such as `disableAutoMode` read as their restrictive value when mistyped, one bad entry no longer discards a whole `permissions` or `sandbox` block, and on Windows an unreadable HKLM policy now locks out user-writable HKCU. Two policy-skipping paths closed: `ANTHROPIC_AUTH_TOKEN` sessions loaded no org policy until 2.1.285, and a tampered cache could disable the policy plugin until 2.1.292, which stable lacks.

Channel: tagged-release (2.1.282 to 2.1.285 on stable; 2.1.290 and 2.1.292 latest only). Half: both. Date: 2026-09-24 (2.1.282), 2026-09-25 (2.1.283), 2026-09-29 (2.1.285), 2026-10-05 (2.1.290), 2026-10-06 (2.1.292).

Operator consequence: Check the file mode of every managed-settings deployment: a file the developer's account cannot read now means an unmanaged session, not a refused one. Make sure the account that runs Claude Code can read it, and alert on the failure line in `/status` and `-p` stderr. If refusal to start was your proof of enforcement, it no longer covers this case. Keep secrets out of managed files (use helpers), so readability costs nothing. Fleets on stable 2.1.287 still lack the 2.1.292 cache-tamper fix.

## Receipt
- https://github.com/anthropics/claude-code/blob/2301018b1f61/CHANGELOG.md?plain=1#L920
- https://github.com/anthropics/claude-code/releases/tag/v2.1.285
- https://code.claude.com/docs/en/managed-settings
