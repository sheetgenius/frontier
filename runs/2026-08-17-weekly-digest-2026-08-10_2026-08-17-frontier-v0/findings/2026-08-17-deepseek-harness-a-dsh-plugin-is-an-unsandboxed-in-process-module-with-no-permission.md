---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-deepseek-harness-a-dsh-plugin-is-an-unsandboxed-in-process-module-with-no-permission
source: deepseek-harness
source_contract: sources/deepseek-harness.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://github.com/deepseek-ai/deepseek-harness/discussions/1797
    precision: official_docs
---
# 2026-08-17-deepseek-harness-a-dsh-plugin-is-an-unsandboxed-in-process-module-with-no-permission

A dsh plugin is an unsandboxed in-process module with no permission declaration, and 6,958 repositories already claim the topic.

The plugin contract enforces types and dependency order, not privilege. The official first-plugin tutorial defines the whole contract: "a plugin is a TypeScript module that exports an `apply` function" taking a Cordis `Context`  --  no manifest, no declared capabilities, no permission grant, no isolation. It runs in the harness process with whatever Node can do. The harness does sandbox code the *model* writes  --  packages/extensions/README.md describes `cordis-host-runner` as owning "the `node:vm` sandbox for host halves" for agent-defined dynamic packages  --  but nothing sandboxes the plugins an *operator* installs, and `node:vm` is not a security boundary in any case. Against that contract, `topic:dsh-plugin` already returns 6,958 repositories, and both README and CONTRIBUTING push authors to tag their repos with it. The maintainers' own community post is explicit about what that index is worth: "Third-party content is independently maintained and has not necessarily been reviewed or endorsed by DeepSeek. Please verify its source and assess any risks before using it." CONTRIBUTING goes further and disclaims curation as a matter of design: "We do not believe that packages in the official repository are inherently more important than packages created by the community."

Channel: preview-or-beta. Ancestry: The plugin contract is read from docs/user/develop/basic/index.md and packages/extensions/README.md at 99f6f02, the sole tag, prerelease per the release API. The maintainer statement is a Discussions post by a COLLABORATOR (Gniy7Ga) dated 2026-08-15T07:47:07Z; the topic count is a live GitHub search index, not a repo channel.

Operator consequence: Treat installing a dsh plugin as running arbitrary code as your user, because that is what it is  --  closer to `curl | sh` than to installing a VS Code extension. Review the source of every plugin you mount, pin it by version, and never install one on a machine holding credentials you are not prepared to rotate. Note too that plugin installs build on install: apps/cli/src/plugin.ts warns that "git-hosted plugins build on install via their prepare script." Ignore the topic count as an adoption signal; count it as attack surface.

## Receipt
- https://github.com/deepseek-ai/deepseek-harness/discussions/1797
