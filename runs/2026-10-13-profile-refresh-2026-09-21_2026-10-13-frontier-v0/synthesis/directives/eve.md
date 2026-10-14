# Eve: final-drafter directives

Profile date: 2026-10-13. Window: 2026-09-21..2026-10-13, inclusive, UTC.

Use the corrected [owning harvest](../../harvest/eve.primary.md) with its
[crosscheck](../../verify/eve.crosscheck.md). Preserve the dated profile shape
and primary receipts. Historical correction prose belongs in this research
record; the public body states the current operating rule.

## Must

1. **Avoid the known-unfixed queued-text consent path.** Replace test-only advice with keeping consequential effects off the affected queued-text approval path on 0.79.0. Require a containing release and the sequence where approve is queued before a later prompt before adopting that path; do not invent a verified alternative. Separately credit 0.78.0 for keeping approved execution under the requester instead of borrowing approver credentials. Do not extend the confirmed lending range before 0.70.0 or revive stay-on-0.63.0 advice.

   Evidence: [owning record, sections 1, 2, 4, 14](../../harvest/eve.primary.md), [Admission-sequence repair](https://github.com/vercel/eve/commit/0dea0ded869be7db30ae90ed8072d29e6e57df61), [Requester-identity repair](https://github.com/vercel/eve/commit/9559de83b65e89c24172c2b9c1a80382033556aa).

   Merged inputs: [utility U09](../utility.md), [thread T12](../thread.md).

2. **Name both sides of the historical benchmark.** Identify the 3 October vendor test as 12 tasks with three attempts each on anthropic/claude-sonnet-5.5: Pi 0.85.1 resolves 26/36, Eve source 4d1491477a2e4f220131a3eb857a030c9eec0419 resolves 24/36, and opencode 1.18.30 resolves 18/36. Put the tested Eve source in the sentence or its immediately adjoining evidence. Preserve overlapping intervals and attribution. This establishes neither equivalence nor a winner and measures neither Eve 0.79.0 nor current Pi 1.2.0.

   Evidence: [owning record, sections 11](../../harvest/eve.primary.md), [tagged benchmark JSON](https://github.com/vercel/eve/blob/eve%400.79.0/apps/docs/lib/evals/eve-code-benchmark.json), [1.2.0](https://github.com/earendil-works/pi/releases/tag/v1.2.0).

   Merged inputs: [consistency C04](../consistency.md), [comparison P01](../comparison.md).


## Should

1. **Show the opt-in MCP use early.** Bring mcpChannel({ tools: true, skills: true }) near the opening as a way another harness can call eligible authored tools without a model turn. Keep route-authenticated caller identity, excluded conversation-only tools, approval_required for a call needing a person, and tool/policy authorization. Both publication flags are opt-in; parallel calls and retries are not ordered exactly-once effects.

   Evidence: [owning record, sections 6](../../harvest/eve.primary.md), [MCP contract](https://github.com/vercel/eve/blob/eve%400.79.0/docs/channels/mcp.mdx#L216-L346).

   Merged inputs: [utility U10](../utility.md).

2. **Test the smaller default tool set.** Replace "Remove scaffolding where it has stopped earning its keep" with "Test the smaller default tool set." Retain planning code where it supplies needed oversight and say deletion alone does not measure model progress. Do not use Eve's statement about another provider as the primary receipt for that provider.

   Evidence: [owning record, sections 7](../../harvest/eve.primary.md), [default-tool removal](https://github.com/vercel/eve/commit/60998d606bfceb4ab367de869d73769065eadd04).

   Merged inputs: [lens L02](../lens.md).


## Could

No additional could-level edit from these six lenses.

## Resolutions

Utility's immediate avoidance instruction takes precedence over thread's test-only candidate sentence because the owning harvest establishes a stable defect and a main-only fix. Testing is an adoption gate after delivery, not a remedy for 0.79.0. Merge the benchmark edits at must priority; exact tested identities can sit in a quiet adjacent source layer without disappearing.

