---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-07-02-agent-flywheel-openai-anthropic-license-rider
source: agent-flywheel
source_contract: sources/agent-flywheel.yml
window:
  start: 2026-07-01
  end: 2026-07-02
observation_kind: intake_baseline
event_date: 2026-06-26
status: accepted
confidence: high
evidence:
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/edaee4f6ceff772d4f56d42eda65b1d659fead73/LICENSE
    precision: tagged_commit_file
  - url: https://api.github.com/repos/Dicklesworthstone/agentic_coding_flywheel_setup/license?ref=edaee4f6ceff772d4f56d42eda65b1d659fead73
    precision: github_license_api_at_commit
---
# The tagged ACFS license includes an OpenAI and Anthropic rider

The `v0.7.0` LICENSE is headed "MIT License (with OpenAI/Anthropic Rider)," but
the rider says no rights are granted to OpenAI, Anthropic, their affiliates, or
people and entities acting for them. It also restricts making the software or a
derivative work available to or for those parties. GitHub classifies the license
as `NOASSERTION`, not standard MIT. Channel: tagged-release intake baseline.
Operator consequence: this is a material use and distribution constraint, not a
normal permissive-license footnote. Frontier is not offering a view on the
rider's interpretation or enforceability. A potentially covered operator should
read the tagged text and obtain their own legal guidance before use or
distribution. This was observed during intake, not introduced in the July 1-2
window.

## Receipt
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/edaee4f6ceff772d4f56d42eda65b1d659fead73/LICENSE
- https://api.github.com/repos/Dicklesworthstone/agentic_coding_flywheel_setup/license?ref=edaee4f6ceff772d4f56d42eda65b1d659fead73
