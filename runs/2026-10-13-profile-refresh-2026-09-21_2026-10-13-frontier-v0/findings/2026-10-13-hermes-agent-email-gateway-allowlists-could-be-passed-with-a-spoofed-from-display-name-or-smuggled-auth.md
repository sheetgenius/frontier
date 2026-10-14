---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-hermes-agent-email-gateway-allowlists-could-be-passed-with-a-spoofed-from-display-name-or-smuggled-auth
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/NousResearch/hermes-agent/commit/6f7a7991bb069db07ae74a479823ce8310f8c7e0
    precision: commit
  - url: https://github.com/NousResearch/hermes-agent/pull/125212
    precision: merged_pr
  - url: https://github.com/NousResearch/hermes-agent/releases/tag/v0.21.6
    precision: github_release
  - url: https://github.com/NousResearch/hermes-agent/blob/v0.21.7/plugins/platforms/email/adapter.py#L286-L296
    precision: tagged_commit_file
---
# 2026-10-13-hermes-agent-email-gateway-allowlists-could-be-passed-with-a-spoofed-from-display-name-or-smuggled-auth

Email gateway allowlists could be passed with a spoofed From display name or smuggled Authentication-Results until v0.21.6. The email adapter took the first angle-bracketed address in From, so `"Victim <victim@example.com>" <attacker@evil.test>` resolved to the victim and passed `EMAIL_ALLOWED_USERS`. `dmarc=pass` was accepted without checking that it applied to the From domain, and SPF, DKIM and DMARC verdicts could be smuggled through sender-controlled text inside the receiving server's Authentication-Results header. The PR author reports the spoof plus about 23 of 40 crafted headers authenticating before the fix and none after; this was not independently reproduced. It follows an earlier, still-unpublished advisory on the same surface. Allow-all mode is unchanged; enforcing sender authentication there (#123256) is a separate, open question.

Channel: tagged-release. Half: defect. Date: 2026-10-08.

Operator consequence: On v2026.9.24 and earlier, anyone able to send you mail could pass an email allowlist as an allowed sender and command the agent with that sender's grants. Upgrade to v0.21.6+ and review email-originated sessions for senders you did not expect. An email allowlist is identity by header parsing; weight email as a lower-trust channel than platforms that hand Hermes authenticated user ids.

## Receipt
- https://github.com/NousResearch/hermes-agent/commit/6f7a7991bb069db07ae74a479823ce8310f8c7e0
- https://github.com/NousResearch/hermes-agent/pull/125212
- https://github.com/NousResearch/hermes-agent/releases/tag/v0.21.6
- https://github.com/NousResearch/hermes-agent/blob/v0.21.7/plugins/platforms/email/adapter.py#L286-L296
