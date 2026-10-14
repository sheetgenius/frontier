---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-openclaw-chatgpt-sign-in-and-new-provider-integrations-reduce-entry-barriers
source: openclaw
source_contract: sources/openclaw.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/providers/openai/authentication.md#L11-L42
    precision: tagged_commit_file
  - url: https://github.com/openclaw/openclaw/blob/v2026.9.6/CHANGELOG/2026.9.6.md
    precision: tagged_commit_file
  - url: https://github.com/openclaw/openclaw/blob/v2026.9.7/CHANGELOG/2026.9.7.md
    precision: tagged_commit_file
  - url: https://github.com/openclaw/openclaw/releases/tag/v2026.9.9
    precision: github_release
---
# 2026-10-13-openclaw-chatgpt-sign-in-and-new-provider-integrations-reduce-entry-barriers

ChatGPT sign-in and new provider integrations reduce entry barriers. 9.7 adds Sign in with ChatGPT (Beta) alongside Codex login and API keys, an OpenAI Agents API plugin for hosted/self-hosted environments, Slack huddles as a signed-in Slack user, and experimental Google Meet participation. 9.6 adds an experimental FaceTime bridge. OpenClaw model integrations add Opus 5.5 and GPT-6 Sol/Luna in 9.6, Sonnet 5.5 in 9.7, GPT-6.1 Sol on the managed Codex runtime in 9.9 and extended-stable 8.35, and Haiku 5.5 in 10.1. The sign-in matrix uses app-specific grants and eligible account capabilities; hosted plugins and connected apps are not supported through Sign in with ChatGPT. These are OpenClaw's documented integrations, not independently exercised provider sessions.

Channel: tagged-release, with Beta and experimental subfeatures. Half: capability. Date: 2026-09-23 (9.6), 2026-09-30 (9.7), 2026-10-08 (9.9), 2026-10-10 (10.1).

Operator consequence: A user with eligible ChatGPT access can start without an API key or separate Codex CLI login, but must choose the authentication method against the capabilities needed. Preserve Beta and experimental labels when deciding which communication routes to deploy.

## Receipt
- https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/providers/openai/authentication.md#L11-L42
- https://github.com/openclaw/openclaw/blob/v2026.9.6/CHANGELOG/2026.9.6.md
- https://github.com/openclaw/openclaw/blob/v2026.9.7/CHANGELOG/2026.9.7.md
- https://github.com/openclaw/openclaw/releases/tag/v2026.9.9
