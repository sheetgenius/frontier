# Implementation Plan - Structural Integrity Audit

## Objective
Audit and fix link graph integrity gaps, schema drift, and agent-readability issues identified in the Round 8 review.

## Key Files & Context
- `site/src/lib/frontier.ts`: Core link resolution and data loading.
- `site/src/pages/profiles/[slug].astro`: Profile rendering (claims and stance).
- `site/src/pages/signals/[id].astro`: Signal rendering and finding resolution.
- `content/profiles/*.md`: Provider profiles (source of dead references).
- `content/digests/*.md`: Weekly digests and rollups.

## Proposed Changes

### 1. Link Graph Integrity
- **Fix dead references in Profiles**: Update `content/profiles/gemini-cli.md` and `content/profiles/openclaw.md` to remove or correct dead Signal ID references in `posture_basis`.
- **Anchor un-anchored signals**: Locate and link source findings for `2026-05-07-agent-labor-needs-operating-state`.
- **Unify Source Labels**: Refactor `site/src/lib/frontier.ts` to use `listSources()` for all label resolution, removing the hardcoded `SOURCE_LABELS` map.

### 2. Schema Consistency
- **Backfill Operator Briefs**: Add missing `operator_brief` frontmatter to rollup digests (`2026-04-22_2026-05-06-frontier-rollup` and `2026-04-23_2026-05-07-frontier-rollup-expanded`).
- **Standardize Finding/Signal fields**: Update legacy data to use `evidence[]` and `finding_ids` exclusively, or update `llms.txt` to reflect the multi-field reality.

### 3. Agent-Readability
- **Surface Claim-level Evidence**: Modify `src/pages/profiles/[slug].astro` to render `finding_id` as a link to the corresponding finding page.
- **Link Posture Basis**: Update the profile template to automatically turn Signal IDs in `posture_basis` (if moved to frontmatter) into links, or ensure they are links in the markdown.

### 4. Verification & Testing
- **Integrity Test**: Create a new test script `site/scripts/check-integrity.ts` that:
    - Validates all `top_signal_ids` in digests resolve.
    - Validates all `findingIds` in signals resolve.
    - Validates all `posture_basis` references resolve.
    - Validates all profile claims with a `finding_id` point to an existing finding.
- **Build Check**: Ensure `npm run build` succeeds and `dist/llms.txt` contains no empty provider labels.

## Smallest Implementation Target
Fix dead Signal ID references in `content/profiles/gemini-cli.md` and `content/profiles/openclaw.md`.

## Bolder Next Target
Implement the `check-integrity.ts` validation script and integrate it into the CI/build process.
