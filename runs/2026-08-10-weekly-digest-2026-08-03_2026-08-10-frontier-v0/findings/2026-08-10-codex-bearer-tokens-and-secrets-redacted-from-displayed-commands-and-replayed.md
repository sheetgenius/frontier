---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-10-codex-bearer-tokens-and-secrets-redacted-from-displayed-commands-and-replayed
source: codex
source_contract: sources/codex.yml
window:
  start: 2026-08-03
  end: 2026-08-10
status: accepted
confidence: high
evidence:
  - url: https://github.com/openai/codex/pull/36908
    precision: merged_pr
---
# 2026-08-10-codex-bearer-tokens-and-secrets-redacted-from-displayed-commands-and-replayed

Bearer tokens and secrets redacted from displayed commands and replayed history.

#36893 redacts secrets from app-server command-execution items. #36908 widens bearer-token redaction to credentials containing URL-safe and base64-style characters, optional padding, and horizontal whitespace after the scheme, and redacts the bearer credential before the narrower OpenAI and AWS key patterns run so the whole credential is replaced rather than partially. The PR states the defect explicitly: the previous pattern could leave part of the credential visible after redaction.

Channel: tagged-release. Ancestry: grep of the rust-v0.146.0...rust-v0.147.0 compare commit list finds fcf636a41dbcd8372ad64301b7092621a155747b 'Redact secrets from app-server command execution items (#36893)' and a match for (#36908) 'Improve bearer token secret redaction'. Both merged 2026-08-04; first non-prerelease tag containing them is rust-v0.147.0.

Operator consequence: Re-audit any transcripts, rollout files, or app-server logs captured on 0.146.x or earlier. This is a disclosure defect, not a hardening nicety: partially-redacted bearer tokens were being rendered into displayed commands and replayed conversation history, which means they are sitting in whatever you archived. Upgrade to 0.147.0 and treat previously exported session history as potentially credential-bearing.

## Receipt
- https://github.com/openai/codex/pull/36908
