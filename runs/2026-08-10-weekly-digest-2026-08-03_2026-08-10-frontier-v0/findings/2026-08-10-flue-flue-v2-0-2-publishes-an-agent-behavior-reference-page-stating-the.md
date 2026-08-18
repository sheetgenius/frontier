---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-10-flue-flue-v2-0-2-publishes-an-agent-behavior-reference-page-stating-the
source: flue
source_contract: sources/flue.yml
window:
  start: 2026-08-03
  end: 2026-08-10
status: accepted
confidence: medium
evidence:
  - url: https://github.com/withastro/flue/blob/a171cc1bc8a552775a820ae3d343ccd09597cc8c/CHANGELOG.md
    precision: official_changelog
---
# 2026-08-10-flue-flue-v2-0-2-publishes-an-agent-behavior-reference-page-stating-the

Flue v2.0.2 publishes an Agent Behavior reference page stating the runtime's built-in limits as a versioned contract.

A new reference page collects the out-of-the-box runtime contract in one place: built-in tool parameters and truncation limits, environment defaults, message admission and turn-boundary joining, context composition and compaction, and the enforced limits. The live page states `read` truncates at 2000 lines or 50 KB (whichever hits first), `bash` tail-truncates at 2000 lines or 50 KB, `grep` caps at 100 matches and 500 characters per line, `glob` at 1000 paths, the compaction reserve is model-aware and capped at 20,000 tokens with 8,000 tokens kept verbatim by default, and delegation depth is capped at 4 (a deeper task chain fails).

Channel: tagged-release. Ancestry: The announcement of the page is a CHANGELOG entry inside stable tag v2.0.2 (`gh api repos/withastro/flue/compare/v2.0.2...a171cc1bc8a552775a820ae3d343ccd09597cc8c` -> status "identical"). The docs page itself is an unversioned marketing/docs surface with no tag or SHA behind it  --  I fetched flueframework.com/docs/reference/agent-behavior/ directly and it resolves with the sections and numbers below, but that URL is a moving target and is cited as the docs surface only. The receipt for the change is the tagged changelog, not the page.

Operator consequence: Read it before you attribute an agent's failure to the model. Most of the "the agent didn't see the file" and "the agent lost the thread" reports in a harness like this are one of these numbers firing silently, and until now you had to read source to find them. Two are worth writing into your own runbook: the delegation depth cap of 4 is a hard failure, not a degradation, and the 8,000-token verbatim keep is what actually survives compaction. Standing on a docs page, not on code  --  verify each number against your own runtime before you design around it.

## Receipt
- https://github.com/withastro/flue/blob/a171cc1bc8a552775a820ae3d343ccd09597cc8c/CHANGELOG.md
