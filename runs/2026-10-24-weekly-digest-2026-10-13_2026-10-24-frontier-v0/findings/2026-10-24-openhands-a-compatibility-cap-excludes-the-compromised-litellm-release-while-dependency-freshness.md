---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-openhands-a-compatibility-cap-excludes-the-compromised-litellm-release-while-dependency-freshness
source: openhands
source_contract: sources/openhands.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/OpenHands/software-agent-sdk/commit/3e8e17bee85494eb5ec2eae71ad0bb011e35b33d
    precision: commit
  - url: https://pypi.org/pypi/openhands-sdk/1.58.1/json
    precision: package_registry
  - url: https://github.com/OpenHands/automation/commit/4bcd95d4d18fde89fa344c31fe1427ea1fb1d480
    precision: commit
  - url: https://github.com/OpenHands/OpenHands/commit/542aa917de74d24d3f1eb7abd86622097bfff21f
    precision: commit
  - url: https://docs.litellm.ai/blog/security-incident-oct-21-2026-attack-chain
    precision: official_docs
---
# 2026-10-24-openhands-a-compatibility-cap-excludes-the-compromised-litellm-release-while-dependency-freshness

A compatibility cap excludes the compromised LiteLLM release, while dependency freshness becomes explicit. SDK 1.56.0 caps LiteLLM below 1.106 because of MCP compatibility; published SDK 1.58.1 retains `litellm>=1.93.0,<1.106`. That excludes LiteLLM 1.107.0, which the supplier says was compromised on 2026-10-21. The older [SDK 1.54.0 metadata](https://pypi.org/pypi/openhands-sdk/1.54.0/json) has no upper bound. Automation production images now install from `uv.lock`. Canvas pins its npm toolchain and documents a seven-day minimum age for new dependency resolution; CI's locked install is not proof that every consumer install automatically enforces that age.

Channel: tagged-release. Half: both. Date: 2026-10-19 (SDK cap and locked automation images); 2026-10-23 (Canvas v1.32.0).

Operator consequence: Check actual installed package versions and image provenance, especially for older or independently resolved environments. A compliant fresh SDK 1.58.1 resolution excludes the named compromised release; this does not establish what an existing machine installed, or that an unrelated LiteLLM proxy is covered. Do not report OpenHands compromise from dependency adjacency. The actionable gain is a bounded resolver and reproducible image dependencies, with human attention concentrated on installation receipts and deliberate exceptions rather than a reassuring policy label.

## Receipt
- https://github.com/OpenHands/software-agent-sdk/commit/3e8e17bee85494eb5ec2eae71ad0bb011e35b33d
- https://pypi.org/pypi/openhands-sdk/1.58.1/json
- https://github.com/OpenHands/automation/commit/4bcd95d4d18fde89fa344c31fe1427ea1fb1d480
- https://github.com/OpenHands/OpenHands/commit/542aa917de74d24d3f1eb7abd86622097bfff21f
- https://docs.litellm.ai/blog/security-incident-oct-21-2026-attack-chain
