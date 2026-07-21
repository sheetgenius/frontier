# Exemplar-pass ledger -- Agent Flywheel, 2026-07-12

Cold-context review of every Agent Flywheel surface: profile, digest, signal,
seven findings, source contract, source notes, and rendered page order. Ranked
worst-first against `.claude/skills/exemplar-pass/SKILL.md`.

## Current exemplars for this pass

- "The Installer Is the Control Plane": title names a real architectural claim.
- Corrected Agent Flywheel profile: operating method first, authority tradeoff
  second, explicit Bitter Lesson and Amdahl interpretation, dated correction.
- Antigravity profile: severe technical claims without turning the project or
  maintainer into a caricature.

## Ranked defects

### 1. Safe mode recommendation exceeded the tagged implementation -- CORRECTED

Original public guidance said to "choose safe mode on anything durable" and
described safe mode as keeping standard agent confirmations. At v0.7.0, safe
mode omits the passwordless-sudo write, but the installer still deploys and
sources the shared zsh file. That file defines dangerous `cc` and `cod`
shortcuts and routes `agy`/`gmi` through the locked always-proceed wrapper.

Pass result: profile, digest, signal record, finding, harvest note, stance, and
operator action now distinguish the partial sudo boundary from the remaining
agent shortcuts. Revision notes identify this as a factual correction.

### 2. A pre-window intake baseline was counted as a July 2 signal -- CORRECTED

The digest called Agent Flywheel "the live-window case" even though v0.7.0
shipped 2026-06-26. Source intake is not an upstream product event.

Pass result: the item is withdrawn from the accepted signal count. Its URL is
preserved as a visible correction record pointing to the profile. All seven
findings declare their actual event date and intake role. The digest now has
four accepted in-window signals.

### 3. The paper comparison mixed two unlike counts -- CORRECTED

The original finding paired the top-35 figure's 110 count for
`dicklesworthstone` with a 52-repository total from a different Microsoft table.

Pass result: the finding and profile use the same figure's 110 and 97 counts,
linked to the arXiv source bundle. The digest removes the numeric aside and its
revision note records the correction.

### 4. The coverage inspected aliases and missed the operating system -- REWRITTEN

The original profile moved directly from "assembly layer" into dangerous flags,
cost, velocity, and a defensive portfolio fence. It did not explain the
plan-to-task-graph-to-routing-to-coordination-to-memory loop.

Pass result: the profile now leads with the durable method. It explains how
provider agents become replaceable because plans, dependencies, messages,
reservations, verification, and memory survive outside them. The authority
critique remains, now as the cost of owning that valuable layer.

### 5. Public scope language objectified the maintainer -- REWRITTEN

Removed "extreme-use specimen," "free-harvest," and "impossible and worthless
in equal measure." Those phrases described Frontier's research anxiety rather
than the project.

Pass result: recurring coverage stays finite, while a named constellation of
Agent Mail, `br`, `bv`, NTM, CASS/CM, DCG, and SLB can enter explicitly scoped,
dated studies through pinned receipts.

### 6. Cost copy became an access requirement -- CORRECTED

The project's reference `$440-656/month` stack was described as if it were a
technical minimum.

Pass result: the profile and finding identify it as project-authored reference
pricing, not independent pricing or an installer-enforced floor.

### 7. The DCG failure description was incomplete -- CORRECTED

The original finding named only unavailable and timed-out DCG. The tagged hook
also allows malformed input, missing commands, and results without a blocking
decision.

Pass result: profile, digest, signal record, finding, and harvest note now state
the broader indeterminate-check boundary.

### 8. Repetition buried the digest's verdict -- REWRITTEN

Agent Flywheel's permission facts appeared in the standfirst, try list, lede,
third-party-default section, provider note, signal, and profile. The digest then
ended in provider inventory.

Pass result: the digest keeps one Agent Flywheel case, one live-window synthesis,
and a closing verdict that resolves the title. The repeated provider-notes block
was removed.

### 9. Audit layers arrived before the profile's story -- CORRECTED

The rendered profile placed active claims and inbound composition before its
editorial body.

Pass result: the dated stance and editorial read now precede the claim register.
Auditability remains on the page without becoming the first impression.

## Thirteen-point result

| Criterion | Result | Note |
| --- | --- | --- |
| Title is an argument | Pass | "The Installer Is the Control Plane" retained. |
| Lede is a case | Pass | Opens on the corrected intake/event distinction and the durable loop. |
| Receipts ride claims | Pass | Safe-mode and paper claims use pinned code/source links. |
| One home per fact | Pass | Provider-note repetition removed; profile owns cost and velocity depth. |
| Brief is a standfirst | Pass | Three sentences, window status explicit. |
| Provider notes earn space | Pass | Repeated inventory block removed. |
| Reader vocabulary | Pass | Public process policing removed. |
| No template refrains | Pass | No borrowed cadence or recurring formula added. |
| Uncertainty is scoped | Pass | Runtime not executed; closed `agy` not inspected; attention outcome unmeasured. |
| Severity without sneer | Pass | Mode mismatch is flat, precise, and consequential. |
| Lens sharpens the case | Pass | Replaceable agents and human liaison work are concrete. |
| Comparison is earned | Pass | Live providers show where authority and release status moved. |
| Prose has a pulse | Pass | "The fleet can change without taking the work graph with it" carries the mechanism. |

## Durable learning artifact

`docs/doodlestein-agency-study.md` separates current ecosystem research from the
historical brief. It records primary receipts, inferred lessons for Bitter and
Frontier, counter-lessons, and the next main-only editorial lead.

## Saturation

Sweep 1 found nine defect classes, including three factual/window blockers. All
nine are addressed in the working tree. A second cold editorial and rendered-page
sweep found two presentation blockers: raw finding IDs interrupted the profile,
and the public corrections route exposed the source YAML instead of presenting a
reader-facing record. The IDs were removed from the prose, where the Active
Claims register already preserves them, and the corrections route now renders
each before/after entry with a clickable primary receipt.

Final corrected-state validation passed: integrity is clean at 334 findings and
151 signals; the site built 902 pages and 180 OG cards with a clean link graph;
all 8 Playwright smoke tests passed. No third cold-read blocker remains. The pass
is saturated for this revision.
