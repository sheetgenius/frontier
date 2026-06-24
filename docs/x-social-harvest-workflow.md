# X Social Harvest Workflow

This workflow captures public X/social signals as discovery input for Bitter
Frontier. It does not create findings, signals, digests, or profile updates by
itself. Promotion happens only in a later source-contract pass.

## When to use it

Use this workflow when X/social posts may reveal maintainer intent, public
adoption, ecosystem tension, or feature announcements that are not yet obvious
from releases and changelogs.

Do not use it to publish claims directly. A social post can seed a candidate; it
does not satisfy the evidence floor for product/version claims unless the source
contract explicitly accepts that evidence kind.

## Run shape

Create a run directory:

```text
runs/YYYY-MM-DD-x-social-harvest-YYYY-MM-DD-frontier-v0/
  manifest.yml
  harvest/<source>.md
  social-cards/<cluster>.yml
  research-journal.md
  verify/x-post-dates.md
  qa.md
```

Keep the run public and reproducible. Do not mention local paths, session IDs,
private prompts, private API payloads, reviewer names, or internal coordination.

## Harvest fields

Each claim record should include these fields:

```text
claim_id:
source:
claim:
primary_url:
author:
observed_at: YYYY-MM-DD
event_date: YYYY-MM-DD
date_precision: day | month_only | year_only | unknown
date_note:
evidence_kind: maintainer_authored_post | official_account_post | community_discussion | community_account_post
channel: x.com
status: candidate | needs_primary_crosscheck | single-source-unconfirmed | refuted | superseded
secondary_receipts:
crosscheck_status: verified_primary | verified_secondary | needs_primary_crosscheck | single_source_unconfirmed | social_only | refuted | superseded
release_channel: tagged-release | main-unreleased | preview-or-beta | social_only | not_applicable | mixed
operator_consequence:
notes:
```

`secondary_receipts` is optional. When present, use public URLs such as GitHub
release tags, commits, pull requests, changelog entries, or official docs.

## Evidence rules

- Persist exact public post URLs, not paraphrased search results.
- Resolve post dates to full ISO `YYYY-MM-DD` when possible.
- If only month or year is available, record `date_precision` and explain the
  limitation in `date_note`.
- Use cautious `operator_consequence` language. Social evidence can suggest what
  to investigate; it should not tell operators to upgrade, migrate, or trust a
  feature.
- Mark product/version claims `needs_primary_crosscheck` until checked against
  the relevant source contract.
- Mark drama, adoption, benchmark, and ranking claims
  `single-source-unconfirmed` unless independently supported.

For richer public context, use the
[Deep Social Research Loop](./deep-social-research-loop.md). It defines the
static social-card format used to render tweet-like cards from repo data without
loading X at runtime.

## Cross-check pass

For each product/version/capability claim, check the public source contract
surface before promotion:

- GitHub releases or tags
- commit or pull request receipts
- official docs or changelog
- reproducible local probe, when appropriate

Record the result as `crosscheck_status`. If the claim is only social evidence,
leave it as `needs_primary_crosscheck` or `single_source_unconfirmed`.

When upgrading a claim to `verified_secondary`, record the receipt-to-claim map.
The secondary receipt must prove the same bounded claim, not merely a nearby
claim in the same project. Narrow the claim text when the receipt verifies only
part of the social post.

Examples:

- A release tag that includes an Antigravity transition banner and migration
  commands can verify transition/migration support, but not a broader social
  claim about a hard cutoff or quota pain.
- A release PR that adds an ACP settings UI can partially support an ACP post,
  but it should not verify every SDK, cloud, or product-surface claim unless the
  receipt names those surfaces.
- A release that contains adjacent orchestration or adapter work should not
  verify an aspirational maintainer post unless it names the same shipped
  feature.

For drama, affiliation, takedown, funding, hiring, or motive claims naming
people or organizations, keep the item as journal context until direct
participant posts, public organization records, or other primary receipts
support the exact claim. Date precision alone is not enough.

When a social cluster is user pain or drama, look for counterweight before
publishing the run: maintainer replies, release fixes, docs, issue threads, or
changelog entries that show remediation or disconfirmation.

## QA checklist

Before opening or updating a PR:

- Every claim has a public `primary_url`.
- Every claim has `observed_at`, `event_date`, `date_precision`, and `date_note`.
- Every product/version claim has `crosscheck_status`.
- Every `verified_secondary` claim has a public receipt-to-claim explanation.
- Reputational or conduct claims remain journal-only unless exact primary
  evidence supports them.
- User-pain clusters include counterweight search notes where public releases,
  issues, or maintainer replies exist.
- No claim is promoted into `content/digests`, `content/profiles`, or
  `signals/frontier-signals.yml`.
- `verify/x-post-dates.md` explains how dates were resolved.
- `qa.md` lists what was checked, what remains unchecked, and the discovery-only
  boundary.
- `git diff --check` passes.
- `node site/scripts/check-integrity.mjs` passes.

## PR language

Describe the PR as a discovery harvest, not a verified digest. A good summary is:

```text
Public X/social discovery harvest for candidate Frontier claims. The run records
public post URLs, exact or qualified dates, evidence kind, status, and
cross-check state. No claims are promoted to findings, signals, digests, or
profiles.
```
