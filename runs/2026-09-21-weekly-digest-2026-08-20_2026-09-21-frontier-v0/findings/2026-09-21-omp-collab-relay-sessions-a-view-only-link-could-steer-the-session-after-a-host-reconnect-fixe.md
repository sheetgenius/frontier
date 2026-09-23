---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-omp-collab-relay-sessions-a-view-only-link-could-steer-the-session-after-a-host-reconnect-fixe
source: omp
source_contract: sources/omp.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/can1357/oh-my-pi/commit/156093b9a1de550a553625f16517d180a330be4b
    precision: commit
  - url: https://github.com/can1357/oh-my-pi/blob/v18.2.8/docs/collab.md
    precision: tagged_commit_file
---
# 2026-09-21-omp-collab-relay-sessions-a-view-only-link-could-steer-the-session-after-a-host-reconnect-fixe

Collab (relay sessions): a view-only link could steer the session after a host reconnect; fixed in 18.2.1. Auto-hosting arrived in 18.1.20. Answers the contract's relay question from the docs: the relay is maintainer-operated at my.omp.sh, not self-hostable in production, content-blind by design, and the link is the credential. The defect meant a view link was not reliably read-only before 18.2.1. The capability: with `collab.autoStart` every interactive session can host itself at start, and `omp collab list` / `omp collab link` hand out URLs from a local Unix-socket registry, so a phone or dashboard reaches any running session.

Channel: tagged-release. Half: both. Date: 2026-09-09 (fix commit), 2026-09-15 (released); 2026-09-13 (autoStart).

Operator consequence: Treat every view link issued on OMP before 18.2.1 as a control link and stop those rooms. Leave `collab.autoStart` at `off` unless you want every session reachable by link; `control` makes each session steerable by anyone holding its URL. Guests can prompt the host's agent, which runs the host's tools under the host's approval mode.

## Receipt
- https://github.com/can1357/oh-my-pi/commit/156093b9a1de550a553625f16517d180a330be4b
- https://github.com/can1357/oh-my-pi/blob/v18.2.8/docs/collab.md
