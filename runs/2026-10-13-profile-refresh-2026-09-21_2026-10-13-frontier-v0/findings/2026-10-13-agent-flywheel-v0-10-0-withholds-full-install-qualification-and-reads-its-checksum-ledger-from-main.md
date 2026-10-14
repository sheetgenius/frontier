---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-agent-flywheel-v0-10-0-withholds-full-install-qualification-and-reads-its-checksum-ledger-from-main
source: agent-flywheel
source_contract: sources/agent-flywheel.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/releases/tag/v0.10.0
    precision: github_release
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/issues/427
    precision: official_docs
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/issues/427#issuecomment-5981082040
    precision: official_docs
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/install.sh#L173-L185
    precision: tagged_commit_file
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/scripts/lib/update.sh#L3998-L4022
    precision: tagged_commit_file
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/checksums.yaml
    precision: tagged_commit_file
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/0bf744a81c319accaa62d763bce97073ac693ef5/checksums.yaml
    precision: tagged_commit_file
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/8616be9cd387e4258752f98e4b18922a098d3819
    precision: commit
---
# 2026-10-13-agent-flywheel-v0-10-0-withholds-full-install-qualification-and-reads-its-checksum-ledger-from-main

v0.10.0 withholds full-install qualification and reads its checksum ledger from main. The newest stable is a source installer whose release explicitly declines to claim a successful full factory installation. The maintainer reports that the published tag retained Ubuntu 24.04.5 and passed eight critical smoke checks but exited 1 after uv and dcg checksum refusals. On 2026-10-04 the maintainer closed #427 after reviewing and repinning those upstream bytes, while still calling for a factory re-run. The repin is outside stable but can affect a tagged install because its ledger defaults to main; acfs update refreshes from main independently. Comparing the pinned ledgers establishes 21 changed URL/hash pairs since v0.10.0, not a retained receipt that every upstream URL served matching bytes on October 13. The original live 48/48 assertion stays an attributed lead.

Channel: tagged-release. Half: defect. Date: 2026-10-03.

Operator consequence: For a disposable evaluation host, use the release entrypoint with --ref v0.10.0 and record the checksum-ledger revision separately. --checksums-ref <sha> fixes which hashes are accepted; it does not preserve the moving upstream downloads or guarantee installation. Inspect the exit code, failure list and acfs doctor before handing work to the host. No complete post-repin factory run is established in this record.

## Receipt
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/releases/tag/v0.10.0
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/issues/427
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/issues/427#issuecomment-5981082040
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/install.sh#L173-L185
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/scripts/lib/update.sh#L3998-L4022
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/checksums.yaml
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/0bf744a81c319accaa62d763bce97073ac693ef5/checksums.yaml
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/8616be9cd387e4258752f98e4b18922a098d3819
