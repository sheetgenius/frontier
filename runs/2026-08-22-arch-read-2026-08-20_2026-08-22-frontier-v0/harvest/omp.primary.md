---
schema_version: bitter.frontier_harvest.v0
provider: omp
window: 2026-08-20..2026-08-22
run: 2026-08-22-arch-read-2026-08-20_2026-08-22-frontier-v0
source_contract: sources/omp.yml
channels_present: [tagged-release]
window_volume: 2 tags after 17.4.0
lane: primary sources, coordinator
---

# Harvest -- omp (primary sources)

Punctuation is ASCII. Identity: can1357/oh-my-pi, npm `@oh-my-pi/pi-coding-agent`. Not earendil-works/pi.

## 1. v17.4.1 and v17.4.2 are tagged; npm latest is 17.4.2

- **Date:** 2026-08-21
- **Channel:** `tagged-release`
- **Ancestry evidence:** GitHub releases: v17.4.1 published 2026-08-21T14:53:59Z, tag SHA `9350b7990d26ebf69a604edc82d8558ef04adf30`. v17.4.2 published 2026-08-21T20:34:50Z, tag SHA `7ab849ade53d905c30ba2d1ae2126d92a47d2db8`. npm dist-tag latest=17.4.2. Last brief's window-close Homebrew/npm/Bun/script land was 17.4.0 (tokenizer API break, `/handoff` overwrites the session). 17.4.1 notes add an optional `tokenizer` family field and Codex region-pinned residency headers; they do not say the 17.4.0 tokenizer break was reverted. 17.4.2 notes: Cursor thinking-effort was cosmetic (now sends the effort-routed wire id); ACP `session/prompt` hung forever on a locally resolved slash command; `/compact` over RPC blocked abort.
- **Receipt:** https://github.com/can1357/oh-my-pi/releases/tag/v17.4.2
- **Half:** both | **Confidence:** high on tags and npm; medium that 17.4.0 `/handoff` overwrite still holds (not re-read that file at 17.4.2)

**What changed.** Unpinned npm is 17.4.2. The 17.4.0 pin last brief recommended (if you only wanted the write hook, pin 17.3.7) is two minors behind latest.

**Operator consequence.** If you pinned 17.3.7 for the write hook, stay there unless you want 17.4.x. If you already took 17.4.0, 17.4.2 is the current tagged latest. Do not assume `/handoff` stopped overwriting the session without a file read at 7ab849ad.

## Surfaces checked

- GitHub releases v17.4.0 / v17.4.1 / v17.4.2
- npm dist-tag latest
