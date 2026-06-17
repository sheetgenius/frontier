# QA: 2026-06-03 weekly digest (window 2026-05-28 .. 2026-06-03)

## Verdict

**First-pass QA: FAIL. Published after remediation: PASS (receipt-clean).**

The QA gate is scored separately for recall and editorial quality. Recall was
strong; the editorial/citation gate failed on first assembly because the
adversarial receipt-verification stage refuted a cluster of cited claims. None
of the failures reached the published digest — they were corrected first. This
file records what failed and how it was fixed, because "record unsupported or
uncertain claims" is part of the evidence standard, not an afterthought.

## Recall

All ten providers returned in-window movement (`nothing_in_window=false`,
`tool_access_ok=true` for each). No section had to be declared silent. No
material miss identified against the coverage notes.

## Adversarial verification result

63 promoted signals were each re-fetched against their receipt URL by an
independent verifier instructed to refute. Result: 48 supported + in-window,
**15 unsupported, 8 out-of-window**. The failures, and the remediation applied
before publish:

1. **Pi v0.78.0 "named sessions / file hyperlinks" — OUT OF WINDOW.** The
   release page shows a conflicting **2024**-05-29 date; one verifier read 2024,
   the harvester recorded 2026. In-window status unverifiable. *Fix:* dropped
   the v0.78.0 release finding and both v0.78.0-sourced signals; Pi's published
   story is its commit-level security cluster (all in-window, verified).

2. **Pi "three regional providers" signal — wrong receipt.** The signal cited
   one commit (51df39b = ZAI China only) for three providers. The providers are
   real but live in three separate commits (ZAI China, Ant Ling `25a4a8e`,
   NVIDIA NIM `6014801`), preserved correctly in `findings/pi-coding-agent.md`.
   *Fix:* dropped the mis-receipted signal; findings keep the per-commit truth.

3. **Pi extension-developer-exports / model-catalog-maintenance signals —
   bundled / misattributed.** *Fix:* dropped as signals; underlying commits
   remain as findings.

4. **OpenHands axios + dompurify "same single action" — refuted.** The two CVEs
   are two separate commits (73d1d9a axios, b025cd2 dompurify). *Fix:* reframed
   as one signal `openhands-frontend-cve-cluster` carrying **both** commit
   receipts, with the honest framing "two commits, one operator action: rebuild
   the frontend." Operator-brief and security-advisories lists updated to match.

5. **Flue receipts (7 signals) — pointed at an EMPTY `/releases` page.** Flue
   publishes no GitHub Releases; its canonical receipt is the version-tagged
   `CHANGELOG.md`. The underlying facts (0.8.1–0.9.2) all verified against
   `CHANGELOG.md` and npm. *Fix:* every Flue receipt repointed to
   `https://github.com/withastro/flue/blob/main/CHANGELOG.md` in the digest,
   signals, and findings. (Source-contract follow-up in audit.md.)

6. **Agent Zero plugin-toggle — framing overreach.** Release note says
   "protected" toggle endpoint; the signal claimed "authenticated / role-based /
   audited." *Fix:* softened in body and signal to a disable lever with an
   explicit "no documented auth model" residual.

7. **OpenClaw MiniMax M3 / Tailscale service-name — elaboration exceeded the
   note.** *Fix:* digest reduced to the bare confirmed facts; the over-elaborated
   framings were not promoted to the curated signal set.

8. **Editorial: "fortnight" vs a 7-day window.** *Fix:* reconciled to "this
   week" throughout.

Non-blocking: Gemini PTY-resize hardening verified on the commit but the
version-availability claim was ambiguous; the resize fix is attributed instead
to the verified v0.45.0 bundle, and the standalone signal was not promoted.

## Citation

Post-remediation, every claim in the published digest carries an inline receipt;
every receipt in `signals/frontier-signals.yml` was either verified true and
in-window, or repointed to a source that was (Flue CHANGELOG). No signal in the
published set rests on a refuted or out-of-window receipt.

## Editorial

Disciplined, operator-first, no product-as-protagonist problem. The cross-provider
synthesis thesis ("the policy you wrote wasn't the policy the runtime enforced")
is concrete and earns its length; the second thread (skills/plugins becoming
governed state) is real and threaded across four providers. Accessibility axis is
answered where relevant.
