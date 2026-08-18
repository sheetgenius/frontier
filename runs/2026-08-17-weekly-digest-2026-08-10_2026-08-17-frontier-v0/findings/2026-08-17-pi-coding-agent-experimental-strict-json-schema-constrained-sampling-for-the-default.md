---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-pi-coding-agent-experimental-strict-json-schema-constrained-sampling-for-the-default
source: pi-coding-agent
source_contract: sources/pi-coding-agent.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://github.com/earendil-works/pi/releases/tag/v0.84.2
    precision: github_release
---
# 2026-08-17-pi-coding-agent-experimental-strict-json-schema-constrained-sampling-for-the-default

Experimental strict JSON-schema constrained sampling for the default read, bash, edit, and write tools.

v0.84.2 adds "experimental strict JSON-schema constrained sampling for the default `read`, `bash`, `edit`, and `write` tools under `PI_EXPERIMENTAL=1`." Related in the same release: `createGatewayBindingFetch()` for routing Cloudflare AI Gateway requests through a Workers AI binding without an API token (PR #7901, @Maximo-Guk), and a change to OpenAI Responses deferred tool loading to prefer message-anchored `additional_tools` where the provider supports it, retaining tool-search and top-level fallbacks (#7709).

Channel: tagged-release. Ancestry: Commit 7915cdac64abdb5fe8674d017e69f8c4f3bf6ff9 ("feat(ai): add strict tool schema conversion", authored 2026-08-11T09:32:32Z). `gh api repos/earendil-works/pi/compare/v0.84.2...7915cdac` returned status=behind, behind_by=53  --  ancestor of the stable v0.84.2 tag (prerelease=false). Listed under Added in the v0.84.2 release body and in packages/coding-agent/CHANGELOG.md at that tag.

Operator consequence: Watch, and test behind the flag if malformed tool arguments are costing you turns. Constrained decoding on the four tools an agent uses most is the direct attack on the failure mode where a model emits an `edit` call that will not parse and burns a round trip. It is gated behind `PI_EXPERIMENTAL=1` and labelled experimental, so it is not a production recommendation this week  --  but it is the thing to re-test at the next release if your loop wastes calls on schema violations. Provider support varies, which is why it is opt-in.

## Receipt
- https://github.com/earendil-works/pi/releases/tag/v0.84.2
