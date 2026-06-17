---
schema_version: bitter.frontier_digest_fragment.v0
fragment_id: 2026-05-11-gemini-fragment
window:
  start: 2026-05-08
  end: 2026-05-11
parent_run: 2026-05-11-partial-cycle-2026-05-08_2026-05-11-frontier-v0
status: not_published
note: >
  This is a digest fragment from a partial cycle, not itself a weekly digest.
  It exists to test the "write the digest, then update the profile"
  sequencing in the Profile doctrine.
---

# Gemini CLI Fragment (Partial Cycle, 2026-05-08 → 2026-05-11)

The big move is architectural: Gemini's subagents are no longer just
[approval-mode aware](https://github.com/google-gemini/gemini-cli/commit/40b384de2c1d251c9d13a6359216a9e6cff5a254);
they now sit behind a pluggable
[`AgentProtocol`](https://github.com/google-gemini/gemini-cli/commit/54f1e8c6d7e2)
with both
[local](https://github.com/google-gemini/gemini-cli/commit/014bfeb89bb7)
and remote backends. The split forces a previously implicit question — where
does delegated work actually run — into a surface that can be inspected and
configured. Pair this with a new
[session export/import](https://github.com/google-gemini/gemini-cli/commit/3805640530a9)
capability and Gemini's loop now treats agent identity and agent state as
serialisable objects rather than ambient context.

The [v0.41.0 stable release](https://github.com/google-gemini/gemini-cli/releases/tag/v0.41.0)
also extends two existing authority claims: workspace trust now enforces in
headless mode, and shell command validation gains a core-tools allowlist.
Neither is a category-creating change, but together they close the obvious
gaps where the previous evidence stopped.

## What To Try

- If you delegate work via Gemini's subagents, examine which protocol
  variant your run actually used and whether your trust assumptions still
  hold.
- If your CI uses Gemini in non-interactive contexts to bypass workspace
  trust prompts, that path is now closed. Re-run with explicit trust state.
- Try exporting a session, inspecting the file, and rehydrating it on a
  different machine to learn what state actually crosses the wire.

## What Remains Uncertain

- The session export format's coverage is not documented in the commit:
  whether accepted memory patches, approval-mode state, and active MCP
  connections cross the wire is the next probe.
- `RemoteSubagentProtocol` ships with tests but no observed remote target.
  Whether a remote subagent runs on a Google-hosted surface or a
  user-controlled one is not yet established.
