---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-pi-coding-agent-main-rewrites-gemini-const-schemas-while-preserving-literal-data
source: pi-coding-agent
source_contract: sources/pi-coding-agent.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/earendil-works/pi/commit/7314819f0fe30fa616f32fa3a1fc8d1a856a1446
    precision: commit
  - url: https://github.com/earendil-works/pi/commit/a7b94a03f09f20f4937fa1a76339014c60d261ad
    precision: commit
---
# 2026-10-24-pi-coding-agent-main-rewrites-gemini-const-schemas-while-preserving-literal-data

Main rewrites Gemini const schemas while preserving literal data. The Gemini adapter rewrites string and number schema `const` values as singleton enums because Gemini ignores `const` in that request field. The follow-up confines traversal to schema-bearing keywords, leaving literal/default/example data intact and preserving property names such as `__proto__`. This is pending on main, not in 1.4.0.

Channel: main-unreleased. Half: both. Date: 2026-10-23.

Operator consequence: Custom-tool authors can plan to remove a provider-specific schema workaround, while adding next-release checks for literal data and named property maps. Correct schema transmission does not by itself enforce authority or establish model compliance on every request.

## Receipt
- https://github.com/earendil-works/pi/commit/7314819f0fe30fa616f32fa3a1fc8d1a856a1446
- https://github.com/earendil-works/pi/commit/a7b94a03f09f20f4937fa1a76339014c60d261ad
