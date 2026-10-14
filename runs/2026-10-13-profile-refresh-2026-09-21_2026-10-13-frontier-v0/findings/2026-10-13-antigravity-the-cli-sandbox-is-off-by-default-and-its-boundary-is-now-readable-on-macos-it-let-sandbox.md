---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-antigravity-the-cli-sandbox-is-off-by-default-and-its-boundary-is-now-readable-on-macos-it-let-sandbox
source: antigravity
source_contract: sources/antigravity.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/google-antigravity/antigravity-cli/blob/1.3.3/CHANGELOG.md?plain=1#L12
    precision: tagged_commit_file
  - url: https://github.com/google-antigravity/antigravity-cli/blob/1.2.10/CHANGELOG.md?plain=1#L12
    precision: tagged_commit_file
  - url: https://github.com/google-antigravity/antigravity-cli/blob/1.2.17/CHANGELOG.md?plain=1#L10
    precision: tagged_commit_file
  - url: https://web.archive.org/web/20260916032705/https://antigravity.google/docs/cli/sandbox
    precision: official_docs
---
# 2026-10-13-antigravity-the-cli-sandbox-is-off-by-default-and-its-boundary-is-now-readable-on-macos-it-let-sandbox

The CLI sandbox is off by default and its boundary is now readable; on macOS it let sandboxed commands read ~/Library/Application Support until 1.3.3. The Terminal sandbox page (CLI tab) gives the boundary the profile said no primary text described. With the sandbox on, commands can write the workspace, temp directories and common build caches, can read system directories such as `/usr` and `/etc`, cannot see `~/.ssh`, `.env` or anything not mounted, and have no network except domains granted under `read_url`; Linux uses kernel namespaces and macOS uses `sandbox-exec` Seatbelt profiles; `read_file` grants become read-only mounts and `write_file` grants read-write mounts; an `unsandboxed` allow rule runs a command outside the sandbox without prompting. The same page says `enableTerminalSandbox` defaults to `false` and `--sandbox` turns it on for one session. In window, 1.3.3 changes the macOS sandbox "to block sandboxed commands from reading `~/Library/Application Support` by default, since desktop apps keep credentials and session tokens there; previously it was readable." 1.2.10 says sandboxed commands can read and write the agent's own artifact and scratch directories and that the agent "tries the sandbox first even after an earlier command needed a bypass." 1.2.17 drops the administrator requirement for the Windows command sandbox, and 1.3.3 falls back to Windows PowerShell when a Store-installed PowerShell 7 fails with `Access is denied.`

Channel: tagged-release (1.2.10, 1.2.17, 1.3.3); boundary description and defaults docs-only. Half: both. Date: 2026-09-24 (1.2.10), 2026-10-05 (1.2.17), 2026-10-10 (1.3.3); CLI boundary text present by 2026-09-16.

Operator consequence: A default install runs every approved command unsandboxed; the sandbox, and the `proceed-in-sandbox` auto-approval that depends on it, binds only after `enableTerminalSandbox: true` or `--sandbox`. If you run it on macOS, move to 1.3.3 or later, and treat sandboxed commands on earlier builds as able to read desktop-app tokens under `~/Library/Application Support`. The fix names one directory and the notes do not say what else under the home directory the macOS profile leaves readable, so put a canary file outside the workspace and check whether a sandboxed `cat` reaches it before relying on the documented boundary.

## Receipt
- https://github.com/google-antigravity/antigravity-cli/blob/1.3.3/CHANGELOG.md?plain=1#L12
- https://github.com/google-antigravity/antigravity-cli/blob/1.2.10/CHANGELOG.md?plain=1#L12
- https://github.com/google-antigravity/antigravity-cli/blob/1.2.17/CHANGELOG.md?plain=1#L10
- https://web.archive.org/web/20260916032705/https://antigravity.google/docs/cli/sandbox
