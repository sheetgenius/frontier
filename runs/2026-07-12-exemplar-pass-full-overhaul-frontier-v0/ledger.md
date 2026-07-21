# Fresh-eyes exemplar ledger - full Frontier overhaul, 2026-07-12

Status: complete.

Scope: the full strategic overhaul, with extra scrutiny on the Agent Flywheel
profile, July 1-2 brief, source contract, research trail, corrections workflow,
and every public path a first-time reader or Jeffrey Emanuel could reach.

This is a second cold pass. It does not inherit a presumption that the first
pass was correct.

## P0 - Historical truth

### Later Agent Flywheel research leaked into a July 1-2 brief

The brief correctly withdrew Agent Flywheel as an in-window signal, then still
used later methodology research to organize the historical issue. That made the
correction cosmetic: a June 26 source continued to govern a July 1-2 argument.

Resolution: artifact version 4 rebuilds the title, Operator Brief, lede,
argument, and verdict from the four accepted in-window signals. Agent Flywheel
remains only in a narrow withdrawal notice with a link to its current profile.

### Safe mode was described as removing or omitting passwordless sudo

The tagged branch proves only that safe mode does not create ACFS's own
`NOPASSWD` file during that run. It does not revoke an ACFS rule left by an
earlier vibe install, or passwordless sudo configured by a host or provider.

Resolution: profile, findings, signal history, source notes, and correction
records distinguish "does not create" from "guarantees absent". The dangerous
agent shortcuts remain a separate, receipted boundary.

### The repository-velocity result was allowed to imply causality

The paper reports repositories owned by an individual account with detected
coding-agent traces. It does not prove solo authorship, useful outcomes, or that
Agent Flywheel caused the count.

Resolution: the v1 paper and v1 source bundle are pinned. The profile calls the
result a remarkable account-level outlier and explicitly denies the unsupported
causal and quality conclusions.

## P1 - Source identity and scope

### The ecosystem study followed the wrong Agent Mail implementation

ACFS v0.7.0 installs `mcp_agent_mail_rust` and its `am` CLI. The study and source
contract had followed the older Python `mcp_agent_mail` repository without
labeling it as a legacy protocol reference.

Resolution: switch the active implementation receipts to the Rust repository
and identify any Python reference explicitly if it remains useful.

### The tagged license was omitted

The repository carries an "MIT License (with OpenAI/Anthropic Rider)," not an
ordinary MIT grant. That is material to adoption because the project configures
Claude Code and Codex.

Resolution: add a receipted license finding and a neutral profile disclosure.
Potentially covered users are told to review the tagged license; Frontier does
not offer an opinion on enforceability.

### The ecosystem study overstated an atomic transaction

Current NTM selects and ranks work before its guarded coordinator. The locked
coordinator covers claim, reservation, and dispatch with reconciliation; it is
not one atomic transaction across every external system.

Resolution: use "guarded claim-reserve-dispatch workflow," show the selection
boundary, pin current releases, and put receipts beside the cross-layer claims.

## P1 - Publication machinery

- Withdrawn signals were counted and rendered as accepted on run pages.
- Digest source trails selected the first finding ever seen for a source rather
  than a finding from the digest's run.
- Operator Brief signal links did not create digest backlinks.
- A source manifest object rendered as `/profiles/[object Object]/`.
- Three old finding IDs were linked as signal routes.
- Most finding meta descriptions stopped at an empty prefix.
- Evidence links could render with blank labels.
- A source contract used `related_surfaces` even though the schema rejected it,
  and the public source page claimed to render fields it hid.
- The corrections page dropped reporter, provenance, event date, pull request,
  and corrected-artifact links.
- The RSS feed had no new item to tell existing subscribers that a historical
  issue had been corrected.
- The sitemap stamped the build date onto the entire archive.
- The external-link checker could keep the process alive after reporting and
  could ingest its own generated reports.
- The build's internal link claim did not test the rendered site.
- Contributor guidance described a five-value evidence ladder that did not
  match the precision labels in the record, and it incorrectly said source
  contracts contained a single evidence floor.

Resolution: repair each reader-visible path, then make the checks enforce the
same invariants offline.

## P2 - First-contact editorial defects

- The digest H1 appeared below the Operator Brief.
- The Agent Flywheel profile led with schema vocabulary before the operator
  read.
- Profiles were called evergreen provider state even though they are dated and
  include projects above and around provider harnesses.
- About and source pages exposed pipeline taxonomy before reader value.
- Core reporting lacked a visible byline and Article author metadata.
- Publisher and RSS disclosure were too far from the homepage's first screen.
- Several phrases claimed reproducibility even though downstream versions can
  float.

Resolution: use project-level language, show the operator read first, disclose
the editor and publisher, expose the feed, and reserve audit vocabulary for the
research trail.

## External handoff still to update

The live SheetGenius portfolio card still describes Frontier as "Weekly field
notes on what changed in coding agents, what broke, and what to test before the
next rollout." That copy belongs to the pre-pivot publication and undersells the
two-axiom synthesis and authority-building role. It lives outside this
repository, so this pass does not silently mutate it.

Recommended replacement:

> Source-backed reporting on what coding agents made cheaper, where the
> bottleneck moved, and what deserves scarce human attention.

## Exit gate

This pass is not complete until all of the following are true:

- factual and source-contract audit closes;
- public copy receives an ASCII and cold-reader pass;
- `git diff --check` passes;
- the offline integrity checker passes;
- Astro type checking and production build pass;
- rendered internal links pass;
- smoke tests pass;
- external evidence links have no confirmed broken receipt;
- the Agent Flywheel share path is read one final time from the rendered site.

## Final validation

- Production build: 903 pages and 180 social cards generated; rendered internal
  link graph clean.
- Integrity: 335 findings and 151 signal records indexed; 150 accepted and one
  withdrawn; all source, signal, finding, digest, profile, and correction
  references resolve.
- Type and browser checks: zero Astro diagnostics, 11 of 11 Playwright checks
  passed, and two of two static-header tests passed.
- Link health: all 32 URLs on the current Agent Flywheel and July 1-2 share path
  passed a fresh network check. The full 544-URL inventory has no confirmed
  broken high-trust evidence receipt; remaining non-OK entries are API base
  endpoints, auth walls, or an illustrative credential-bearing URL in older
  research material.
- Rendered cold read: homepage, Agent Flywheel profile, and current brief passed
  at 1440px, 390px, and 320px, including dark mode. Each page has one H1, no
  horizontal overflow, correct bylines and dates, human-readable receipt labels,
  and no console errors. The profile's 13 internal links returned 200.
- House checks: `git diff --check` clean; public source punctuation scan clean;
  no em dash or other forbidden punctuation introduced.

The only outstanding handoff is the stale SheetGenius portfolio-card copy
documented above. That page lives outside this repository.
