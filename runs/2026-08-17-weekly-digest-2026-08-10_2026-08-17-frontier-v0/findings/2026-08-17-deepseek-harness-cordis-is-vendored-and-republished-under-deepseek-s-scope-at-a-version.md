---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-deepseek-harness-cordis-is-vendored-and-republished-under-deepseek-s-scope-at-a-version
source: deepseek-harness
source_contract: sources/deepseek-harness.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://registry.npmjs.org/@deepseek-ai/cordis
    precision: package_registry
---
# 2026-08-17-deepseek-harness-cordis-is-vendored-and-republished-under-deepseek-s-scope-at-a-version

Cordis is vendored and republished under DeepSeek's scope, at a version upstream has never shipped.

The contract flags that the plugin boundary dsh sells is defined in someone else's repo. In practice it is defined in a fork of someone else's repo. `@deepseek-ai/dsh@0.1.0-rc.7` depends on `@deepseek-ai/cordis: ^4.0.1`, not on `cordis`. DeepSeek vendored the framework as source in its second-ever commit ("Vendor Cordis framework packages as source," 2026-06-11) and republishes it under its own npm scope from `vendor/cordis`. The version numbers diverge in a way worth noticing: DeepSeek's `latest` is `4.0.1`, a plain non-prerelease number, while upstream cordiverse has never released a stable 4.x  --  its `latest` is `4.0.0-rc.8`, published 2026-08-10. So the one component in the dsh install tree carrying a stable-looking version is a fork of a framework its own authors still call a release candidate.

Channel: preview-or-beta. Ancestry: The npm packument for `@deepseek-ai/cordis` gives dist-tags `{latest: 4.0.1, next: 4.0.1-rc.4}` and a repository field of `git+https://github.com/deepseek-ai/deepseek-harness.git` with `directory: vendor/cordis`  --  built from this repo's tree, which at 99f6f02 (sole tag, prerelease) contains vendor/cordis alongside vendored cosmokit, group, hmr, include, loader, logger-console, schemastery and timer. The upstream `cordis` packument gives dist-tags `{latest: 4.0.0-rc.8, next: 4.0.0-beta.5}` with repository `git+https://github.com/cordiverse/cordis.git`.

Operator consequence: Watch the right repo. A Cordis fix landing at cordiverse does not reach your dsh install; DeepSeek ships it out of vendor/, on DeepSeek's schedule. Conversely a change to the plugin paradigm can arrive in your tree from a package whose upstream you were not watching. If you are diagnosing plugin lifecycle, service resolution or hot-reload behaviour, read vendor/cordis in this repo at your installed version  --  not cordiverse/cordis, which is a different codebase on a different version line.

## Receipt
- https://registry.npmjs.org/@deepseek-ai/cordis
