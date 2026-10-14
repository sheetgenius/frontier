---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-omp-credential-fixes-include-a-github-plugin-token-exception-advisory-searches-found-no-matchi
source: omp
source_contract: sources/omp.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/can1357/oh-my-pi/commit/1f63a9b6bff918e1132af8e61c8aa93938d3bc1a
    precision: commit
  - url: https://github.com/can1357/oh-my-pi/commit/c17916900b66c48fe818750f0d2000152ec0bf14
    precision: commit
  - url: https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/extensibility/plugins/manager.ts#L77-L96
    precision: tagged_commit_file
  - url: https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/test/plugin-install-git.test.ts#L401-L447
    precision: tagged_commit_file
  - url: https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/plugin-manager-installer-plumbing.md#L82-L84
    precision: tagged_commit_file
  - url: https://github.com/can1357/oh-my-pi/commit/1d56352d20d8cabbb0ce739b4bc764de9efc1a82
    precision: commit
  - url: https://github.com/can1357/oh-my-pi/commit/2c3458ed2868835db5766b10b2836f4c32f989e2
    precision: commit
  - url: https://github.com/can1357/oh-my-pi/commit/4b6b3edbe19aaad4e376f9d82b660d030a868fca
    precision: commit
  - url: https://github.com/can1357/oh-my-pi/commit/9532eb39ca916cdfac3be58eb66427331343a4c7
    precision: commit
  - url: https://github.com/can1357/oh-my-pi/commit/ba9b31b9ba42d7fdd3456b0a5d6758587ef84fff
    precision: commit
  - url: https://github.com/can1357/oh-my-pi/security/advisories
    precision: official_docs
---
# 2026-10-13-omp-credential-fixes-include-a-github-plugin-token-exception-advisory-searches-found-no-matchi

Credential fixes include a GitHub plugin-token exception; advisory searches found no matching published record. v18.9.0 strips inline credentials from non-GitHub Git install specs. GitHub specs are forwarded unchanged, so upgrading does not establish that all plugin URLs are token-safe. The source and regression test prove forwarding, not fresh Bun persistence reproduced here. Other fixes tighten advisor preview redaction boundaries, Anthropic web-search header merging, gateway bearer handling and forwarded-header attribution/logging. No matching published advisory was found in the project, GitHub advisory, and NVD searches described in the crosscheck; that is a bounded negative search, not proof of no vulnerabilities or private reports.

Channel: tagged-release. Half: defect. Date: 2026-09-30 (v18.4.5); 2026-10-08 (v18.8.4, v18.8.5); 2026-10-11 (v18.9.0).

Operator consequence: Avoid embedded tokens and inspect existing ~/.omp/plugins/package.json and lockfiles regardless of version; rotate any credentials found. Use SSH or credential helpers for private repositories. For broker/gateway deployments, retain proxy-header trust only for your controlled proxy and use the newest fixed client. Read release notes as well as advisory feeds.

## Receipt
- https://github.com/can1357/oh-my-pi/commit/1f63a9b6bff918e1132af8e61c8aa93938d3bc1a
- https://github.com/can1357/oh-my-pi/commit/c17916900b66c48fe818750f0d2000152ec0bf14
- https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/extensibility/plugins/manager.ts#L77-L96
- https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/test/plugin-install-git.test.ts#L401-L447
- https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/plugin-manager-installer-plumbing.md#L82-L84
- https://github.com/can1357/oh-my-pi/commit/1d56352d20d8cabbb0ce739b4bc764de9efc1a82
- https://github.com/can1357/oh-my-pi/commit/2c3458ed2868835db5766b10b2836f4c32f989e2
- https://github.com/can1357/oh-my-pi/commit/4b6b3edbe19aaad4e376f9d82b660d030a868fca
- https://github.com/can1357/oh-my-pi/commit/9532eb39ca916cdfac3be58eb66427331343a4c7
- https://github.com/can1357/oh-my-pi/commit/ba9b31b9ba42d7fdd3456b0a5d6758587ef84fff
- https://github.com/can1357/oh-my-pi/security/advisories
