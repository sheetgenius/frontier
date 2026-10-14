---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-heypi-relevant-shared-memory-is-eligible-for-recall-across-conversations-by-default
source: heypi
source_contract: sources/heypi.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/docs/configuration/memory.md#L3-L21
    precision: tagged_commit_file
  - url: https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/app.ts#L417-L430
    precision: tagged_commit_file
  - url: https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/memory.ts#L272-L280
    precision: tagged_commit_file
  - url: https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/memory.ts#L336-L368
    precision: tagged_commit_file
  - url: https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/memory.ts#L439-L464
    precision: tagged_commit_file
  - url: https://github.com/hunvreus/heypi/blob/19f1062bc0993a620ac5de4f263c0d78086cbeee/packages/heypi/docs/configuration/memory.md#L3
    precision: tagged_commit_file
---
# 2026-10-13-heypi-relevant-shared-memory-is-eligible-for-recall-across-conversations-by-default

Relevant shared memory is eligible for recall across conversations by default. This corrects the older memory-off claim. Memory is enabled by default. Relevant shared records are eligible for recall across conversations with the same adapter ID; they are not all injected into every turn. Recall considers user records before conversation and shared records, selects for relevance, limits records/characters and escapes text before labelling it untrusted reference context. Separate adapter IDs retain a storage boundary. These measures do not establish immunity to prompt injection.

Channel: preview-or-beta heypi 0.3.0-beta.2; legacy 0.1.3 still documents memory off. Half: both. Date: 2026-07-21 (historical beta.0 default); re-verified for the 2026-10-13 profile.

Operator consequence: Use memory: false when this cross-conversation recall surface is unwanted; separate adapters when their state must stay apart. Include memory files in retention and review. The name-based approval configuration can target the memory tool as a source inference, but no integration test of that policy was run. Do not describe bounded relevant recall as universal injection or as only a prompt label.

## Receipt
- https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/docs/configuration/memory.md#L3-L21
- https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/app.ts#L417-L430
- https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/memory.ts#L272-L280
- https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/memory.ts#L336-L368
- https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/memory.ts#L439-L464
- https://github.com/hunvreus/heypi/blob/19f1062bc0993a620ac5de4f263c0d78086cbeee/packages/heypi/docs/configuration/memory.md#L3
