# JOURNAL -- 2026-08-23-x-topic-omp2-rust-2026-08-08_2026-08-23-frontier-v0

## NOW

Ad hoc discovery dig requested by the editor on 2026-08-23: "talk on X of OMP
maintainers rewriting Pi in Rust." Not a cycle. No digest, brief, wire, finding, or
signal written. Material is staged here for the next weekly coordinator.

Done:
- `ops/grok/x-sweep.sh topic` (new mode) run for 2026-07-20..2026-08-23:
  30 records, coverage note with timeline. `social/topic-omp-pi-rust-rewrite.raw.md`.
- Capture pass on 16 URLs, no expected text: `social/capture-urls.txt`,
  `social/capture.raw.md`.
- Primary-source check of every claim the sweep surfaced: `harvest/omp2-primary.md`.

Answer in one line: the branch is real (can1357/oh-my-pi `omp2`, orphan, 453 commits,
one author, Rust core + embedded CPython for extensions, "rewritten in Rust" in its own
README), nothing is shipped, Pi itself is not going Rust, and the Pi authors dispute the
stated reasons for leaving.

Window for the run id is 2026-08-08 (first omp2 commit) to 2026-08-23 (read date).
AUTHORIZE_PUSH: yes (editor's standing rule; discovery material, no public page).

## J1 2026-08-23 capture result

16 URLs given, 16 blocks back, 1 UNAVAILABLE: the thread root
https://x.com/oleksoleksoleks/status/2090910311746297954 (404 at the URL; the sweep had
already said the thread fetch failed on that root and the id came from the replies'
conversation_id plus a web index). Do not quote that post. The other 15 are quotable
from `social/capture.raw.md` via `ops/social/slice-quote.mjs`, never retyped.

Quotable spine, in order: Can 08-14 "look at the omp2 branch"; Can 08-17 "omp2 is
significantly cleaner because Pi is not the limiting factor"; Can 08-21 "omp2's gonna
have to wait, omp blob-broker tmw"; Olek 08-21 "Pi's being completely deprecated. The
Bun runtime is being ripped out in lieu of CPython"; Olek 08-21 the four-paragraph
answer (2 weeks, core work paused, not backwards compatible on plugins, 15k text lines
to port); Mario 08-22 "pi has no dependency on Bun what so ever"; Can 08-22 "we're not
associated sir"; Armin 08-22 "I don't think we're going to port Pi to Rust"; plus the
operator voices (graykevinb, transpiracy, benvargas, ErdalToprak).

Harvest caveat: the sweep prompt misnamed the OMP maintainer; the capture confirms
display name "Can Bölük" on @_can1357. Grok ruled the identity out on its own.

## J2 2026-08-23 the thread earned a feature

Editor's call: the architecture should support this kind of editorial. Stood up
the feature unit (EDITORIAL.md "The feature bar", METHOD.md object grammar,
content/features/, /features/ routes, RSS, sitemap, llms.txt, OG, integrity
checks, frontier-cycle step 7b and Lane C brought current to the grok CLI) and
wrote the first one from this run:

  content/features/2026-08-23-oh-my-pi-without-the-pi.md

Cards: social-cards/x-cards.yml, 15 cards, verbatim only from social/capture.raw.md,
inline fragments sliced with ops/social/slice-quote.mjs; 13 placed inline, 2
featured; the unavailable thread root is not a card and is not quoted.

Facts added to harvest/omp2-primary.md during the editor's pass: all 453 omp2
commits are can1357 (re-walked at the pin); Pi npm is @earendil-works/pi-coding-agent
0.84.2 latest, tag v0.84.2 2026-08-14; OMP npm latest 18.0.3 and the Homebrew tap
formula reads 18.0.3; @oleksoleksoleks bio reads "whispering to GPUs | harness
engineering @ <t.co>" and the t.co 301s to https://omp.sh/ (checked with curl).

Not done on purpose: no finding, no signal, no profile edit. The weekly that
follows links the feature with one line.
