---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-flue-flue-s-cloudflare-sandbox-adapter-targets-the-0-x-sdk-cloudflare-s-sandbox-sdk-1-0-dropped
source: flue
source_contract: sources/flue.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/withastro/flue/blob/v2.3.0/blueprints/sandbox--cloudflare.md#L77-L91
    precision: tagged_commit_file
  - url: https://github.com/withastro/flue/blob/v2.3.0/packages/runtime/src/cloudflare/cf-sandbox.ts#L1-L53
    precision: tagged_commit_file
  - url: https://www.npmjs.com/package/@cloudflare/sandbox/v/1.0.0
    precision: package_registry
  - url: https://registry.npmjs.org/@cloudflare%2Fsandbox/1.0.0
    precision: official_docs
---
# 2026-10-13-flue-flue-s-cloudflare-sandbox-adapter-targets-the-0-x-sdk-cloudflare-s-sandbox-sdk-1-0-dropped

Flue's Cloudflare Sandbox adapter targets the 0.x SDK; Cloudflare's Sandbox SDK 1.0 dropped the API it wraps. Nothing in Flue changed; its platform did. Cloudflare's 2026-09-30 Containers post (marketing) says the native `ctx.container` model, with no wrapper class in between, carries into Sandbox SDK 1.0. The 1.0 package no longer has the `Sandbox` Durable Object class or `getSandbox()` that Flue's adapter and blueprint use. The blueprint's `^0.11.0` range excludes 1.0 and the separately published 0.12.x line. Only 0.11.0 exists on the admitted 0.11.x line at the window close. This preserves the API the blueprint uses; no end-to-end setup was executed here.

Channel: tagged-release (blueprint pin at v2.3.0; external registry release). Half: defect. Date: 2026-09-30 (SDK 1.0.0 on npm); state re-read at 2.3.0 (2026-10-12).

Operator consequence: Keep `@cloudflare/sandbox` on the blueprint's 0.11 range, and stop dependency bots from taking it to 1.0. The rebuilt-container features cannot be reached through Flue's adapter at 2.3.0. A 1.x path in the blueprint or adapter, or a fix for #829, settles it.

## Receipt
- https://github.com/withastro/flue/blob/v2.3.0/blueprints/sandbox--cloudflare.md#L77-L91
- https://github.com/withastro/flue/blob/v2.3.0/packages/runtime/src/cloudflare/cf-sandbox.ts#L1-L53
- https://www.npmjs.com/package/@cloudflare/sandbox/v/1.0.0
- https://registry.npmjs.org/@cloudflare%2Fsandbox/1.0.0
