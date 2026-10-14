---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-omp-omp-ported-pi-cache-warming-and-filled-three-pi-1-x-compatibility-gaps-without-adopting
source: omp
source_contract: sources/omp.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/can1357/oh-my-pi/commit/5ee7b69ceba873b9566307485ddd8704a4d1b28e
    precision: commit
  - url: https://github.com/can1357/oh-my-pi/commit/597c8d17b54e1e30120f917f24bf0d2688be5821
    precision: commit
  - url: https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/session/settings.ts#L1137-L1141
    precision: tagged_commit_file
  - url: https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/extensibility/legacy-pi-transcript.ts#L1-L19
    precision: tagged_commit_file
  - url: https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/extension-loading.md#L280
    precision: tagged_commit_file
  - url: https://www.npmjs.com/package/@earendil-works/pi-coding-agent/v/1.2.0
    precision: package_registry
---
# 2026-10-13-omp-omp-ported-pi-cache-warming-and-filled-three-pi-1-x-compatibility-gaps-without-adopting

OMP ported Pi cache warming and filled three Pi 1.x compatibility gaps without adopting Pi trust. OMP explicitly ported Pi's cache-warming strategy. The main loop can replay the last request and stop at the first token to refresh an expiring five-minute cache; idle warming is on when its expected avoided-miss cost exceeds refresh cost by $0.05. Extensions can override the decision. Three exports, transcript helpers, compositeTuiLine and parseSkillBlock, filled named gaps seen with pi-optchat. That is not blanket Pi 1.x compatibility, nor independently established identity of complete upstream files. Pi-name imports resolve to OMP bundled copies, whose project-trust context still returns true.

Channel: tagged-release. Half: both. Date: 2026-09-27 (v18.3.5); 2026-10-11 (v18.9.0).

Operator consequence: Set providers.cacheWarming: off if idle requests are unwelcome. Test the exact Pi extension against OMP; an import that resolves does not establish matching authority behavior. Do not use its Pi trust check as an OMP guard. Write the full package scope in inventories.

## Receipt
- https://github.com/can1357/oh-my-pi/commit/5ee7b69ceba873b9566307485ddd8704a4d1b28e
- https://github.com/can1357/oh-my-pi/commit/597c8d17b54e1e30120f917f24bf0d2688be5821
- https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/session/settings.ts#L1137-L1141
- https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/extensibility/legacy-pi-transcript.ts#L1-L19
- https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/extension-loading.md#L280
- https://www.npmjs.com/package/@earendil-works/pi-coding-agent/v/1.2.0
