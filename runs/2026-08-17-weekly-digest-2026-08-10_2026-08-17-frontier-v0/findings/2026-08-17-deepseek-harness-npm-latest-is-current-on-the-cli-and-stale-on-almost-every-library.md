---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-deepseek-harness-npm-latest-is-current-on-the-cli-and-stale-on-almost-every-library
source: deepseek-harness
source_contract: sources/deepseek-harness.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://registry.npmjs.org/@deepseek-ai/dsh-base
    precision: package_registry
---
# 2026-08-17-deepseek-harness-npm-latest-is-current-on-the-cli-and-stale-on-almost-every-library

npm latest is current on the CLI and stale on almost every library package a plugin author would install.

The npm `latest` dist-tag on `@deepseek-ai/dsh` resolves to `0.1.0-rc.7` today (`next` likewise), so the README's `npx @deepseek-ai/dsh web` does fetch the current release candidate. But that is the only package where `latest` is current. Checked against the registry the same day: `dsh-base` latest=0.0.1-rc.1, `dsh-llm` 0.0.1-rc.1, `dsh-tool-bash` 0.0.1-rc.1, `dsh-sandbox` 0.0.1-rc.1, `dsh-user-approval` 0.0.1-rc.1, `dsh-web-app` 0.0.1-rc.1, `dsh-agent` 0.1.0-rc.6, `dsh-app-boot` 0.1.0-rc.6  --  while `next` is `0.1.0-rc.7` on all of them. `0.0.1-rc.1` was published 2026-08-10T19:37Z, three days before the public repo existed. The mechanism is documented in the repo: the publish script never assigns `latest` to a prerelease, so those tags are frozen at whatever npm set on each package's first publish, and scripts/publish-npm-baseline.ts moves `latest` for exactly one package  --  `this.ensureDistTag(RELEASE_ENTRY_PACKAGE, LATEST_DIST_TAG)` with `RELEASE_ENTRY_PACKAGE = '@deepseek-ai/dsh'`. Separately, no published dsh tarball carries a `gitHead`, so npm metadata cannot map an installed version back to a commit.

Channel: preview-or-beta. Ancestry: Every published version of every dsh package is a prerelease (`0.0.1-rc.*` or `0.1.0-rc.*`) per the npm packuments; only `dsh-v0.1.0-rc.7` exists as a git tag and the release API flags it `prerelease: true`. The publishing policy is in scripts/release/publish.ts at that tag: "A prerelease version never takes the latest dist-tag"  --  `const tagArgs = version.includes('-') ? ['--tag', 'next'] : []`.

Operator consequence: Adapt, if you are writing a plugin. `npm i @deepseek-ai/dsh-llm` today hands you a build from before the project was public, against a harness running rc.7. Install every dsh library with an explicit version or `@next`, never bare, and check `npm view <pkg> dist-tags` before believing a resolution. For provenance, do not expect the tarball to tell you its commit  --  it does not; the release notes' compare range (`fb826987...99f6f02`) is the only public mapping from a version to a set of commits.

## Receipt
- https://registry.npmjs.org/@deepseek-ai/dsh-base
