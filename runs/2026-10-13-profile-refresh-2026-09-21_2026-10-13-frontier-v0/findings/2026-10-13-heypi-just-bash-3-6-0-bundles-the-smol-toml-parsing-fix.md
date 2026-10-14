---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-heypi-just-bash-3-6-0-bundles-the-smol-toml-parsing-fix
source: heypi
source_contract: sources/heypi.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/squirrelchat/smol-toml/security/advisories/GHSA-r4xh-jqrq-34v2
    precision: official_docs
  - url: https://github.com/vercel-labs/just-bash/commit/632090a60b710608e2180638a757172dc0316b2c
    precision: commit
  - url: https://github.com/vercel-labs/just-bash/releases/tag/just-bash%403.6.0
    precision: github_release
  - url: https://github.com/vercel-labs/just-bash/blob/7537a260e38648e8998db7a95504102ad80b0194/packages/just-bash/src/commands/yq/formats.ts#L219-L221
    precision: tagged_commit_file
---
# 2026-10-13-heypi-just-bash-3-6-0-bundles-the-smol-toml-parsing-fix

just-bash 3.6.0 bundles the smol-toml parsing fix. Attacker-controlled ordinary TOML with many keys can take quadratic parsing time in affected smol-toml versions and synchronously stall the event loop. just-bash's yq TOML path invokes that parser. The 3.6.0 release bundles patched 1.9.0; the Node artifact inlines smol-toml, so changing only a downstream smol-toml lock entry does not replace the embedded code. This is a receipted improvement in a dependency available within heypi's range, not proof of an observed heypi denial of service or that every older just-bash artifact embedded the same parser.

Channel: tagged-release just-bash 3.6.0, within heypi beta adapter ^3.1.0. Half: both. Date: 2026-10-01 (just-bash release); advisory published 2026-09-22T16:40:12Z.

Operator consequence: Replace an affected old just-bash artifact rather than relying on a downstream parser override. Inspect the actual artifact and TOML-processing exposure. Use 3.6.0's bundled fix while also addressing section 11's skills proxy regression; a security upgrade can carry a new integration problem.

## Receipt
- https://github.com/squirrelchat/smol-toml/security/advisories/GHSA-r4xh-jqrq-34v2
- https://github.com/vercel-labs/just-bash/commit/632090a60b710608e2180638a757172dc0316b2c
- https://github.com/vercel-labs/just-bash/releases/tag/just-bash%403.6.0
- https://github.com/vercel-labs/just-bash/blob/7537a260e38648e8998db7a95504102ad80b0194/packages/just-bash/src/commands/yq/formats.ts#L219-L221
