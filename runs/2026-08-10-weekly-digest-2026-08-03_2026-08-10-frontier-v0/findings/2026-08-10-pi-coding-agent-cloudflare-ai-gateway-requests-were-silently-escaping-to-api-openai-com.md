---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-10-pi-coding-agent-cloudflare-ai-gateway-requests-were-silently-escaping-to-api-openai-com
source: pi-coding-agent
source_contract: sources/pi-coding-agent.yml
window:
  start: 2026-08-03
  end: 2026-08-10
status: accepted
confidence: high
evidence:
  - url: https://github.com/earendil-works/pi/issues/7030
    precision: issue
---
# 2026-08-10-pi-coding-agent-cloudflare-ai-gateway-requests-were-silently-escaping-to-api-openai-com

Cloudflare AI Gateway requests were silently escaping to api.openai.com; header-deletion markers now preserved.

Issue #7030 reports that when an OpenAI model was routed through Cloudflare AI Gateway, `getBuiltinProviderForModel()` returned undefined and the code fell back to the raw `openai-responses` API provider. That fallback skipped the Cloudflare stream wrapper, so the base URL still contained unresolved `{CLOUDFLARE_ACCOUNT_ID}`/`{CLOUDFLARE_GATEWAY_ID}` template placeholders, the OpenAI SDK defaulted to `api.openai.com`, and the request went straight to OpenAI carrying the placeholder key literal `"unused"`. v0.84.0's fix changes `ModelRegistry.getApiKeyAndHeaders()` to return `ProviderHeaders` with `string | null` values and to preserve `null` header-deletion markers  --  the release notes state this "prevents placeholder OpenAI credentials from being sent through Cloudflare AI Gateway." It is a listed Breaking Change: extensions inspecting returned headers must now handle `null`.

Channel: tagged-release. Ancestry: Commit a24fb9e96a3fbc7be2a87e81aa1aa5c0ddf95d35 ("fix(coding-agent): preserve auth header deletion markers (#7539)", authored 2026-08-03T12:28:26Z) appears in `gh api repos/earendil-works/pi/compare/v0.83.0...v0.84.0 -q '.commits[]'`, i.e. it is in the range of commits added between the v0.83.0 and v0.84.0 stable tags. v0.84.0 has prerelease=false per the releases API.

Operator consequence: Re-audit, then upgrade. This is an egress finding, not a key leak: no real credential was disclosed, but requests an operator believed were confined to their own Cloudflare AI Gateway were leaving directly to api.openai.com. If you route Pi through a gateway for logging, rate limiting, or data-residency reasons, check your gateway logs against your provider logs for the pre-0.84.0 period  --  the traffic you thought you were seeing may not be all of it. Extension authors forwarding headers to pi-ai streams must pass them through unchanged rather than filtering nulls.

## Receipt
- https://github.com/earendil-works/pi/issues/7030
