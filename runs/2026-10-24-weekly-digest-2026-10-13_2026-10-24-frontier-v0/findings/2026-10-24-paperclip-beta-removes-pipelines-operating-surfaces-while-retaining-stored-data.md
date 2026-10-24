---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-paperclip-beta-removes-pipelines-operating-surfaces-while-retaining-stored-data
source: paperclip
source_contract: sources/paperclip.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/paperclipai/paperclip/commit/90777488945fc2ceba6d27c407516d4a1df69b54
    precision: commit
  - url: https://github.com/paperclipai/paperclip/blob/d69631b01b9c658f80bf8bed389863dce82643e1/doc/DATABASE.md#L1106-L1113
    precision: tagged_commit_file
---
# 2026-10-24-paperclip-beta-removes-pipelines-operating-surfaces-while-retaining-stored-data

Beta removes Pipelines operating surfaces while retaining stored data. Pipelines loses its application, REST API, CLI, experimental setting, review queue, learnings and stage automation. Pipeline tables, schema definitions and migration history remain, with no data-dropping cleanup migration. Cases and Routines continue independently. The removal merged on 2026-10-19 and is delivered in the October 23 beta.

Channel: preview-or-beta. Half: both. Date: 2026-10-23.

Operator consequence: Before trialing 2026.1023.0-beta.0, inventory any Pipelines-dependent automation and preserve a usable operating/export path outside the removed surfaces. Retained database rows do not keep the experiment runnable, and Cases is not an automatic migration. Less orchestration code can mean less maintenance, but removing a workflow also creates human migration work.

## Receipt
- https://github.com/paperclipai/paperclip/commit/90777488945fc2ceba6d27c407516d4a1df69b54
- https://github.com/paperclipai/paperclip/blob/d69631b01b9c658f80bf8bed389863dce82643e1/doc/DATABASE.md#L1106-L1113
