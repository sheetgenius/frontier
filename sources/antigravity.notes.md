# Antigravity CLI -- source notes

Closed-source Go successor to consumer Gemini CLI (`agy` binary). Owner: Google.

- **Lifecycle context.** Announced 2026-05-19; consumer Gemini CLI stopped serving
  2026-06-18 (AI Pro/Ultra, free individual Code Assist, new GitHub-org installs).
  Enterprise Code Assist retained; the open-source `gemini-cli` repo stays
  Apache-2.0 and enterprise-serving. Antigravity is the consumer path now.
- **Receipt surfaces.** The reliable, fetchable surfaces are the GitHub releases
  page and `CHANGELOG.md` on `google-antigravity/antigravity-cli`. `antigravity.google/docs`
  is JS-rendered and often does not fetch cleanly -- prefer the changelog for
  version-pinned receipts, and cite specific doc pages only when they render.
- **Verifiability caveat.** The code is closed. Governance/enforcement claims rest
  on the changelog and docs, not readable source -- confirm behavior with a local
  probe before asserting a control binds.
- **Watch the gate tension.** The approval/sandbox model is active and moving in
  both directions at once (strict "Always Approve" matching hardened in 1.0.13;
  subagent "always proceeds" auto-approval added in 1.0.14). Separate hardening
  from loosening on every release.
- **Compare with** gemini-cli (the OSS predecessor it replaced for consumers) and
  the other closed/hosted control planes.
