---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-06-02-codex-amazon-bedrock-integration
source: codex
source_contract: sources/codex.yml
window:
  start: 2026-05-28
  end: 2026-06-03
versions_covered: "bedrock-1.0"
status: accepted_signal
change_type: capability
confidence: high
accessibility_impact: none
actionability: test
evidence:
  - label: "June 2, 2026: Amazon Bedrock Integration - Codex now supports OpenAI models through Amazon Bedrock. Enables local operation with AWS-managed authentication and billing."
    url: https://developers.openai.com/codex/changelog
    precision: release_note
---
# Amazon Bedrock integration - AWS-managed model deployment

## What Changed

Codex now supports OpenAI models through Amazon Bedrock, enabling local operation with AWS-managed authentication and billing. This allows customers to run Codex models within AWS environments with integrated identity and cost management.

## Operator Implication

Operators with AWS deployments can now embed OpenAI models within Bedrock without external API calls, leveraging AWS IAM and cost allocation. This extends Codex into AWS-native environments and simplifies compliance for organizations with cloud-specific infrastructure policies.

## Receipt

- [June 2, 2026: Amazon Bedrock Integration - Codex now supports OpenAI models through Amazon Bedrock. Enables local operation with AWS-managed authentication and ](https://developers.openai.com/codex/changelog)
