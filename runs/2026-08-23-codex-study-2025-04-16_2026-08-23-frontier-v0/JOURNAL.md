# JOURNAL -- 2026-08-23-codex-study-2025-04-16_2026-08-23-frontier-v0

## NOW

Editor commissioned a feature on how Codex is evolving ("industry leader;
study it and infer the deeper patterns"). Editorial hypothesis supplied to
test, not to assert: the harness leans on model inference over deterministic
logic. The hypothesis has no public receipt of its own; it shapes questions
only. If a maintainer said it in public, the X sweep finds the quotable form.

Done:
- harvest/codex-tree.primary.md: pins from a blobless clone read 2026-08-23
  (velocity, crate growth, flag table, deletion receipts, guardian prompt).
- X topic sweep + capture: social/.
Next: cards, feature draft at content/features/, passes, build, publish.

## J1 2026-08-23 sweep, capture, cards, feature

- Topic sweep: 29 records, maintainer voices found (thsottiaux, dkundel,
  TheRohanVarma, guinnesschen, pvncher, romainhuet, OpenAIDevs) plus outside
  reads (_lopopolo, lucasmeijer, born2code, acsmif, onusoz, patrickc). The
  public form of the editorial hypothesis exists: driver-seat post (06-19),
  the May AI Engineer rule via vihaanmotwani's recollection (08-05), and the
  harness-as-body reply (08-23). Coverage note records what was not reached.
- Capture: 18/18, 0 unavailable. Cards: 16 (14 inline via slice-quote, 2
  featured); 2 captures uncarded (patrickc, romainhuet -- the terminal-surface
  thread did not make the piece).
- Feature: content/features/2026-08-23-codex-the-body-not-the-pencil.md,
  ~1,900 words. Editor's verification pass caught and fixed before publish:
  a from-memory full commit hash (wrong; corrected via git rev-parse), PR
  #39700 cited as in 0.149.0 (ancestry says post-tag; replaced with #39307,
  which is in-tag), and an unreceipted "for weeks" on the egress-work lag.
  See harvest/codex-tree.primary.md "Corrections made during the editor's
  pass".
- Not done on purpose: no finding, no signal, no profile rewrite (the profile
  already carries the 0.148/0.149 read from the 08-20 brief). The next weekly
  links the feature with one line.

## J2 2026-08-24 outside review, adjudication, revision, critic panel

Editor commissioned an outside review of the published feature and a deep
revision. Adjudication in verify/outside-review-adjudication.md: the review's
three central factual claims verified TRUE against the tree (rules survive
with Allow/Prompt/Forbidden and most-restrictive-wins confirmed in policy.rs;
App Server routing "Defaults to `user`"; auto_review exposed with legacy alias
guardian_subagent). Two published sentences were false as stated; corrections
appended to content/corrections.md. New primary receipts fetched and pinned:
PR #39630 and #38011 bodies, alignment.openai.com/auto-review (2026-04-30
numbers), developers.openai.com/blog/codex-as-a-platform (ARC-AGI-3, ownership
split), code.claude.com/docs/en/hooks (deterministic vs prompt hooks),
arXiv 2606.07682 (SWE-Marathon).

Feature rewritten on the three-way spine (judgment to models; boundaries in
rules and OS; control plane thicker), with a forecast section carrying named
falsifiers. Three Fable critic subagents ran against the revision: precision
(builder lens), house voice (EDITORIAL.md passes), forecast quality. Their
reports and the integration are recorded in this journal's next entry.
