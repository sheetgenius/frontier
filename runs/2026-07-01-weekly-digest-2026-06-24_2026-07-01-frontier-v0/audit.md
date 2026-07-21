# Audit -- 2026-07-01 weekly ("Patched for Whom")

## What was read
- All 12 watched source contracts + their primary surfaces (releases/tags, changelogs, default-branch commits, PRs, docs) for 2026-06-24..2026-07-01, via a parallel per-source researcher fan-out.
- The prior manifest's carry-forward items (gemini skill fix, paperclip master controls, agent-zero ready branch, openhands CVE batch, hermes MCP-persistence wave, heypi post-beta).
- Primary lifecycle sources for the Gemini/Antigravity transition: the Google Developers Blog announcement and the gemini-cli transition discussion (#27274), plus the google-antigravity/antigravity-cli releases + CHANGELOG.

## Key decisions
- **New source: Antigravity CLI.** After the harvest surfaced an actively-shipping gemini-cli repo, a coordinator probe confirmed the *consumer* service was discontinued 2026-06-18 and the closed-source Antigravity CLI is the successor. Registered Antigravity as a separate tier-1 source (its own contract/profile), rather than folding it under Gemini.
- **Gemini reframed as tiered discontinuation**, not decline: consumer dark, enterprise retained, OSS repo active. A correction was filed (prior digests called an executed shutdown prospective).
- **Thesis:** a cross-provider hardening wave that split by channel; Gemini->Antigravity is the lead specimen. Same axis as the prior "merged vs shipped" story, sharpened to "released for whom."
- **Signal curation:** 8 of 47 verified candidates promoted. Kept rarer than the 60 findings; grouped control-plane / runtime / platform.
- **Dropped:** Codex Remote GA -- backed only by an unanchored developer-site changelog entry, refuted by the verifier as lacking a repo/tag receipt; recorded as a finding, not a signal.

## Channel resolutions (by ancestry)
- Stable: Gemini v0.49.0, Codex 0.142.x, Claude Code 2.1.19x, Paperclip v2026.626.0, OpenClaw v2026.6.11, Agent Zero v2.0/2.1, Antigravity 1.0.12-14, eve 0.17.1.
- Cloud-only: OpenHands CVE batch (cloud-1.39.0/1.40.0); OSS 1.8.0 frozen.
- Main-unreleased: Hermes security wave; Gemini @file hardening; OpenClaw permission-boundary fix; OpenHands authlib CVE.
- Preview/alpha: Codex 0.143.0-alpha.31; Flue 1.0.0-beta.6-9.
