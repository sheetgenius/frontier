---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-omp-omp-tags-v17-3-6-and-v17-3-7-carry-an-extension-hook-that-brokers
source: omp
source_contract: sources/omp.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://github.com/can1357/oh-my-pi/blob/54e1a8c900d30e5b6185975ab02a4a923faf1717/packages/coding-agent/CHANGELOG.md
    precision: official_changelog
---
# 2026-08-17-omp-omp-tags-v17-3-6-and-v17-3-7-carry-an-extension-hook-that-brokers

OMP tags v17.3.6 and v17.3.7 carry an extension hook that brokers around a denied filesystem write  --  and no install channel but Nix can reach them.

v17.3.6 adds `ExtensionAPI.registerFileWriteFallback(handler)` and `ExtensionAPI.registerFileDeleteFallback(handler)`. An extension supplies a fallback writer or deleter that is consulted when a native `write`, `edit` or `apply_patch` byte-write or unlink is denied with a permission error (EPERM/EACCES/EROFS). The stated purpose is hosts that embed the agent inside a sandbox denying direct filesystem access while exposing a privileged channel. The changelog names three guards on the brokered path: it is symlink-resolved so a handler's allowlist sees the real destination, a destination that cannot be resolved is not brokered at all, and `req.sessionId` identifies the issuing session so a handler sharing the process-wide registry can enforce per-session policy. v17.3.7 adds only a User-Agent change on xAI chat.

Channel: tagged-release. Ancestry: Tag v17.3.6 -> 54e1a8c900d30e5b6185975ab02a4a923faf1717, commit dated 2026-08-17T14:16:40Z, "chore: bump version to 17.3.6"; tag v17.3.7 -> 644ad30d6e9436074a00f8bd08ecadcd98992fc1, 2026-08-17T20:55:09Z. Both are non-prerelease tags. Neither has a GitHub release: the releases API for can1357/oh-my-pi returns v17.3.5 (2026-08-16T08:00:13Z) as the newest. npm dist-tags for @oh-my-pi/pi-coding-agent read {"latest": "17.3.5"} and the newest published version is 17.3.5. The project's own normal tag-to-release lag is roughly 20-40 minutes (v17.3.5: commit 07:21:05Z, release 08:00:13Z; v17.3.4: commit 12:38:16Z, release 13:14:09Z), so at harvest time v17.3.6 is many hours past that.

Operator consequence: Watch rather than act, and know that on three of four install paths you do not have it. The mechanism is legitimate  --  a sandboxed host brokering writes through a privileged channel  --  but its shape is a documented route by which an OS-level denial becomes an extension-mediated allow, so any host that registers such a handler has moved the real write policy into the handler. If you embed OMP, the handler's allowlist is now your filesystem boundary and it needs to be reviewed as such. As of this harvest the code is reachable only by `nix run github:can1357/oh-my-pi` or an explicit `--ref`; the install script, Homebrew and Bun all land on 17.3.5.

## Receipt
- https://github.com/can1357/oh-my-pi/blob/54e1a8c900d30e5b6185975ab02a4a923faf1717/packages/coding-agent/CHANGELOG.md
