---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-omp-broker-clients-stopped-letting-a-delayed-refresh-resurrect-logout-or-replace-a-newer-login
source: omp
source_contract: sources/omp.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/can1357/oh-my-pi/commit/9b54ded2389745ffd6ed36e892ceefc8512ab5e7
    precision: commit
  - url: https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/ai/src/auth-broker/remote-store.ts
    precision: tagged_commit_file
---
# 2026-10-13-omp-broker-clients-stopped-letting-a-delayed-refresh-resurrect-logout-or-replace-a-newer-login

Broker clients stopped letting a delayed refresh resurrect logout or replace a newer login. A refresh reply used to overwrite newer local knowledge of broker credentials, potentially restoring a removed account to a client's rotation or replacing a newer login. The client now refreshes its snapshot when its copy changed during the outstanding request and keeps current broker state.

Channel: tagged-release. Half: defect. Date: 2026-10-02 (v18.4.11).

Operator consequence: Upgrade the broker client, including gateways using that client, to v18.4.11 or later. This closes the inspected refresh-reply race; it is not proof that every delayed credential mutation is guarded.

## Receipt
- https://github.com/can1357/oh-my-pi/commit/9b54ded2389745ffd6ed36e892ceefc8512ab5e7
- https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/ai/src/auth-broker/remote-store.ts
