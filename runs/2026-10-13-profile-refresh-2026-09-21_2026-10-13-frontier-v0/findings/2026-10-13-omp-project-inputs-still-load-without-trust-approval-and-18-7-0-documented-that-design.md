---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-omp-project-inputs-still-load-without-trust-approval-and-18-7-0-documented-that-design
source: omp
source_contract: sources/omp.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/can1357/oh-my-pi/commit/a5a5f1d128fac3bbb558696b62f1c1cc5d5aa9f7
    precision: commit
  - url: https://github.com/can1357/oh-my-pi/blob/v18.10.4/README.md#L593-L602
    precision: tagged_commit_file
  - url: https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/extensibility/extensions/runner.ts#L1401-L1404
    precision: tagged_commit_file
  - url: https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/tools/settings.ts#L311-L315
    precision: tagged_commit_file
  - url: https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/approval-mode.md#L166
    precision: tagged_commit_file
  - url: https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/settings.md#L166-L168
    precision: tagged_commit_file
---
# 2026-10-13-omp-project-inputs-still-load-without-trust-approval-and-18-7-0-documented-that-design

Project inputs still load without trust approval, and 18.7.0 documented that design. The trust behavior did not change: settings, extensions, hooks, tools, commands, skills, rules and project MCP configuration load by design. Project config outranks global policy and can replace bash.patterns or disabledProviders and override individual tools.approval keys. The README now explicitly describes this and its partial controls. --no-extensions skips ambient discovery; --trusted-extension supplies an exact allowlist. --no-tools disables built-ins but project tool modules remain a separate surface. There is no inspected flag skipping the project settings layer. The README does not predict whether a future trust gate will ship.

Channel: tagged-release. Half: defect. Date: 2026-10-06 (v18.7.0); rechecked at v18.10.4.

Operator consequence: Before running in a repository you did not write, inspect its .omp directory and package.json extension declarations. Runtime approval controls and --config overlays outrank project config but do not exclude every input. For project MCP exclusion, use nested YAML with mcp followed by enableProjectConfig: false; a flat dotted key is ignored. Review hooks, commands and project tools too. A tagged gate preventing input loading before trust is decided would change this posture.

## Receipt
- https://github.com/can1357/oh-my-pi/commit/a5a5f1d128fac3bbb558696b62f1c1cc5d5aa9f7
- https://github.com/can1357/oh-my-pi/blob/v18.10.4/README.md#L593-L602
- https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/extensibility/extensions/runner.ts#L1401-L1404
- https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/tools/settings.ts#L311-L315
- https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/approval-mode.md#L166
- https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/settings.md#L166-L168
