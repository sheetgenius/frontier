---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-agent-zero-v2-12-fixes-an-unauthenticated-telegram-webhook-that-let-anyone-forge-allowed-user-prompts
source: agent-zero
source_contract: sources/agent-zero.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/agent0ai/agent-zero/commit/675f6e7ccd
    precision: commit
  - url: https://github.com/agent0ai/agent-zero/blob/v2.12/security-review/LEDGER.md
    precision: tagged_commit_file
---
# 2026-09-21-agent-zero-v2-12-fixes-an-unauthenticated-telegram-webhook-that-let-anyone-forge-allowed-user-prompts

v2.12 fixes an unauthenticated Telegram webhook that let anyone forge allowed-user prompts. Before v2.12, `plugins/_telegram_integration/api/webhook.py` bypassed session auth and CSRF and checked the secret only `if instance.webhook_secret`. The secret was documented as optional. Two cases were open. Polling bots accepted HTTP updates at all, even with a secret set. Webhook bots with an empty secret accepted any POST. The update body carries the Telegram sender ID. The allowlist trusts that ID, and the handler then calls `context.communicate`. What this allowed: anyone who could reach the Agent Zero HTTP port could post as an allowed Telegram user and put a prompt into that user's agent context. The agent then runs it with its normal terminal and code-execution tools. The maintainer ledger rates this High. It calls Critical impact "conditional on agent capabilities and deployment exposure" and claims no host escape. Now the webhook must be active, the secret must be nonempty, and the header is checked with a constant-time compare. Setup rejects secrets that are not 32 to 256 characters of `[A-Za-z0-9_-]`.

Channel: tagged-release. Half: defect. Date: 2026-09-09.

Operator consequence: If a Telegram bot is configured and the WebUI port is reachable from anywhere you do not control, upgrade to v2.12 now. Treat pre-v2.12 agent history for that bot as possibly injected. Breaking: webhook bots without a valid secret will not start until you set one. The shipped bots list is empty, so installs without Telegram are not exposed.

## Receipt
- https://github.com/agent0ai/agent-zero/commit/675f6e7ccd
- https://github.com/agent0ai/agent-zero/blob/v2.12/security-review/LEDGER.md
