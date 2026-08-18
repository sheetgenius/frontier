---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-10-flue-flue-v2-0-2-renames-the-sandbox-types-to-their-roles-and-replaces-the
source: flue
source_contract: sources/flue.yml
window:
  start: 2026-08-03
  end: 2026-08-10
status: accepted
confidence: high
evidence:
  - url: https://github.com/withastro/flue/blob/a171cc1bc8a552775a820ae3d343ccd09597cc8c/CHANGELOG.md
    precision: official_changelog
---
# 2026-08-10-flue-flue-v2-0-2-renames-the-sandbox-types-to-their-roles-and-replaces-the

Flue v2.0.2 renames the sandbox types to their roles and replaces the cloudflare-shell blueprint with cloudflare-computer.

The sandbox surface was renamed to match its roles, with the old names kept as deprecated aliases: `SessionEnv` becomes `Sandbox` (the live environment handle behind `harness.sandbox` and the standard tools), `SandboxApi` becomes `SandboxDriver` (the per-provider adapter interface), `createSandboxSessionEnv()` becomes `sandboxFromDriver()`, `SessionToolFactory`/`SessionToolFactoryOptions` become `SandboxToolFactory`/`SandboxToolFactoryOptions`, and `SandboxFactory.createSessionEnv()` becomes `createSandbox()`. A factory implementing only the legacy `createSessionEnv()` still initializes, with a one-time deprecation warning. In the same release the `cloudflare-shell` blueprint is replaced by `cloudflare-computer`, built on `@cloudflare/computer`, which hosts a durable SQLite-backed workspace inside the agent's own Durable Object with a `just-bash` shell backend and can escalate to a container backend where a JavaScript shell is not enough; the adapter provides a real `exec()` and keeps the framework's standard tool set instead of substituting a code tool. `flue add cloudflare-shell` and the old docs URLs redirect to the successor.

Channel: tagged-release. Ancestry: `gh api repos/withastro/flue/tags` lists v2.0.2 -> a171cc1bc8a552775a820ae3d343ccd09597cc8c (non-prerelease, no rc/beta/alpha suffix). `gh api repos/withastro/flue/compare/v2.0.2...a171cc1bc8a552775a820ae3d343ccd09597cc8c` returned {"status":"identical","ahead_by":0,"behind_by":0}, so the tag dereferences to that commit and the CHANGELOG 2.0.2 section is inside the tag's history. `gh api repos/withastro/flue/releases` returns an empty array, confirming the contract's note that the version-tagged CHANGELOG is the only receipt surface.

Operator consequence: No forced migration: upgrade to v2.0.2 and keep running on the deprecated aliases. Do rename in new code, because the rename is the project telling you which primitive it considers first-class  --  the repo description now reads "The sandbox agent framework" rather than the harness slogan the contract registered this source on. If you were standing on `cloudflare-shell`, treat the redirect as a real port: `cloudflare-computer` keeps the standard tool set instead of substituting a code tool, so an agent that was written around the old code-tool shape needs re-testing, not just a rename.

## Receipt
- https://github.com/withastro/flue/blob/a171cc1bc8a552775a820ae3d343ccd09597cc8c/CHANGELOG.md
