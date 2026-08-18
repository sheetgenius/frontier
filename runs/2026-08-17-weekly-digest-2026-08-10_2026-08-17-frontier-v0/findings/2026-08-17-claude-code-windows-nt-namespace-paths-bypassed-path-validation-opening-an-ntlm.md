---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-claude-code-windows-nt-namespace-paths-bypassed-path-validation-opening-an-ntlm
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://code.claude.com/docs/en/changelog#2-1-233
    precision: official_changelog
---
# 2026-08-17-claude-code-windows-nt-namespace-paths-bypassed-path-validation-opening-an-ntlm

Windows NT-namespace (`\??\`) paths bypassed path validation, opening an NTLM credential-leak vector  --  closed across two releases.

v2.1.233: "Fixed Windows paths spelled with the NT `\??\` device prefix bypassing UNC path validation, closing an NTLM credential-leak vector." v2.1.234 finished the job on the paths that are read before any approval: "Security: remote file reads, session restore, CLAUDE.md includes, workflow scripts and file uploads now reject Windows NT-namespace (`\??\`) paths, hardening the remaining pre-approval file accesses against the NTLM credential-leak vector." The vulnerability class is credential disclosure via forced authentication: on Windows, a path resolving to a remote UNC share makes the OS authenticate to that host, handing an attacker-controlled SMB server the machine account's NTLM material for offline cracking or relay. The guard existed; the `\??\` NT device-namespace spelling walked around it. The v2.1.234 half matters more than the v2.1.233 half, because the surfaces it names  --  CLAUDE.md includes, session restore, workflow scripts, remote file reads  --  are read before the permission prompt, so no human approval stood between a poisoned repository and the leak.

Channel: tagged-release. Ancestry: Closed source; npm publish record is the release proof. registry `time[]`: 2.1.233 = 2026-08-14T18:50:44Z, 2.1.234 = 2026-08-17T18:19:13Z, both plain semver under dist-tag `latest`. Per-version manifests resolve HTTP 200 at registry.npmjs.org/@anthropic-ai/claude-code/2.1.233 and /2.1.234. Neither is in `stable`, which was pinned at 2.1.226. No GHSA or CVE exists  --  Anthropic publishes no separate advisory feed for Claude Code, so the changelog is the de-facto advisory surface, per the standing rule in sources/claude-code.notes.md.

Operator consequence: Upgrade Windows fleets to 2.1.234 now; 2.1.233 is a partial fix. This is the one finding in the window where the exposure needs no user mistake: cloning a repository whose CLAUDE.md carried a crafted include was enough, because that file is read before you are asked anything. Treat any Windows machine that ran Claude Code against untrusted repositories on 2.1.232 or earlier as having potentially transmitted NTLM material off-network, and check egress logs for outbound SMB (445/139) if you have them. macOS and Linux are unaffected  --  the vector is Windows-specific.

## Receipt
- https://code.claude.com/docs/en/changelog#2-1-233
