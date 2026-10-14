---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-hermes-agent-the-default-on-tirith-command-scanner-left-core-in-v0-21-6-two-of-its-catches-moved-into
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/NousResearch/hermes-agent/commit/911da42e9e03ba8594ab2af5dfd1e50e7e721e3e
    precision: commit
  - url: https://github.com/NousResearch/hermes-agent/commit/68dd9927691e66058bf2347937e7dc276ceb50cd
    precision: commit
  - url: https://github.com/NousResearch/hermes-agent/blob/v0.21.7/hermes_cli/config_defaults.py#L1769-L1792
    precision: tagged_commit_file
  - url: https://github.com/NousResearch/hermes-agent/blob/v2026.9.21/hermes_cli/config_defaults.py#L1717-L1741
    precision: tagged_commit_file
  - url: https://github.com/NousResearch/hermes-agent/blob/v0.21.7/tools/approval_detection.py#L347-L351
    precision: tagged_commit_file
---
# 2026-10-13-hermes-agent-the-default-on-tirith-command-scanner-left-core-in-v0-21-6-two-of-its-catches-moved-into

The default-on tirith command scanner left core in v0.21.6; two of its catches moved into the built-in detector and nothing replaces the rest. tirith ran `tirith check` on every terminal command, on by default and fail-open, from a binary downloaded at startup. The removal commit records the vendor's measurement against tirith 0.4.2: 14 of 16 attack commands caught, but 12 of 24 everyday agent commands flagged, each one a hard block in cron and -q deny mode; it only saw terminal strings, and fail-open meant no protection where the binary could not install (Windows, Termux, x64 musl). v0.21.6 deletes the scanner, its installers and the `security.tirith_*` keys (config v50), "enables nothing in its place", and ships no tirith plugin. The built-in detector gained the two shapes only tirith had caught: curl or wget uploads of secret-named variables or credential files, and invisible or bidirectional Unicode that makes the approved command differ from the executed one. The removal author reports core at 13 of 16 attacks and 5 of 24 false flags on that small command corpus. Neither comparison was independently reproduced, and neither is a general security benchmark.

Channel: tagged-release. Half: both. Date: 2026-10-08.

Operator consequence: Tirith-specific refusals disappear; other detectors, policy hooks, user denies, and unattended policy can still block those jobs. The prior scanner-restart fix is moot. If tirith was in your threat model, install and operate it yourself as a pre_tool_call hook. Test the exact response: `{"action":"approve"}` requests human approval from v2026.9.24, while `{"decision":"approve"}` means allow. Model judging and string patterns are not substitutes for isolating execution.

## Receipt
- https://github.com/NousResearch/hermes-agent/commit/911da42e9e03ba8594ab2af5dfd1e50e7e721e3e
- https://github.com/NousResearch/hermes-agent/commit/68dd9927691e66058bf2347937e7dc276ceb50cd
- https://github.com/NousResearch/hermes-agent/blob/v0.21.7/hermes_cli/config_defaults.py#L1769-L1792
- https://github.com/NousResearch/hermes-agent/blob/v2026.9.21/hermes_cli/config_defaults.py#L1717-L1741
- https://github.com/NousResearch/hermes-agent/blob/v0.21.7/tools/approval_detection.py#L347-L351
