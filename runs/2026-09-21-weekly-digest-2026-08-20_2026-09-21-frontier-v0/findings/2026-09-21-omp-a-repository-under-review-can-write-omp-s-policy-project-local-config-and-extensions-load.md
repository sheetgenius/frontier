---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-omp-a-repository-under-review-can-write-omp-s-policy-project-local-config-and-extensions-load
source: omp
source_contract: sources/omp.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/can1357/oh-my-pi/blob/v18.2.8/packages/coding-agent/src/extensibility/extensions/types.ts#L508-L520
    precision: tagged_commit_file
---
# 2026-09-21-omp-a-repository-under-review-can-write-omp-s-policy-project-local-config-and-extensions-load

A repository under review can write OMP's policy: project-local config and extensions load unconditionally, and `isProjectTrusted()` always returns `true`. This answers the contract's stored-state question for config and extensions: yes, the workspace writes it. A cloned repo's `.omp/config.yml` sits above the user's global config in precedence, and its `.omp/extensions` load without a prompt. Those extensions can register `registerFileWriteFallback` (still present at v18.2.8 types.ts line 1298) and, from v18.2.1, `tool_call` handlers can rewrite a tool's arguments rather than only block them. A Pi extension written to consult Pi's trust gate, imported as `@earendil-works/pi-coding-agent`, runs against OMP's shim and is told the project is trusted. That answers operator question 1: the scope confusion is deliberate at the extension layer, where OMP answers for the upstream package name.

Channel: tagged-release. Half: defect. Date: 2026-08-21 (shim added, v17.4.1); 2026-09-09 (fixed to load, v18.1.16); docs read at v18.2.8.

Operator consequence: Do not open an untrusted repository in OMP. Before running `omp` in any clone, inspect `.omp/config.yml`, `.omp/extensions`, `.omp/settings.json`, and `package.json` `omp.extensions` / `pi.extensions`. Do not reuse a Pi extension's trust check as a guard under OMP; it always passes. This is a fact about OMP only. Pi has had a per-directory trust prompt since the 2026-06-08 advisory GHSA-mqxh-6gq7-558m.

## Receipt
- https://github.com/can1357/oh-my-pi/blob/v18.2.8/packages/coding-agent/src/extensibility/extensions/types.ts#L508-L520
