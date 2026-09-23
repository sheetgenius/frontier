---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-paperclip-v2026-916-0-authority-moved-to-people-and-connections-some-defaults-widened
source: paperclip
source_contract: sources/paperclip.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/paperclipai/paperclip/blob/v2026.916.0/server/src/services/agent-permissions.ts
    precision: tagged_commit_file
---
# 2026-09-21-paperclip-v2026-916-0-authority-moved-to-people-and-connections-some-defaults-widened

v2026.916.0: authority moved to people and connections; some defaults widened. Capability: AI runtime credentials (Claude and Codex subscriptions, API keys) move into Connections with grants and ownership (#13247); GitHub access becomes App-backed per-person identities, and when several people steer one agent, git/gh resolve to the responsible person's credentials per accepted instruction "with no fallback to a teammate's access" (#12843, #13005). AgentMail inboxes and Slack/Discord/Telegram/Teams/iMessage connectors are experimental. Removals: cheap model profiles are gone (one model path for normal and recovery work, #12683; migration 0236 discards stored profiles); the automatic productivity-review detector is deleted because infrastructure failures could manufacture review work (#13263). Widened defaults: new standard-trust agents can hire other agents by default (#12814); in-app announcements are on by default and fetch `https://pages.paperclip.ing/announcements/v1/current.json` (#13403); the experimental native runner gate `enableNativeRunner` defaults on for self-hosted (explicitly configured agents only); the server loads a `.env` from its working directory unless `PAPERCLIP_DISABLE_CWD_ENV_FILE=true`.

Channel: tagged-release. Half: both. Date: 2026-09-16.

Operator consequence: Try Connections if you manage shared subscriptions; it is the first time who-paid and who-authorized follows the responsible human rather than the agent config. Re-audit: after upgrading, new standard-trust agents can create agents unless you mark them low-trust or override `canCreateAgents`; set `PAPERCLIP_ANNOUNCEMENTS_ENABLED=false` on air-gapped or policy-restricted instances (outbound fetch to a vendor feed). Recovery rules that named a cheap model profile now run on the normal model: expect cost to rise on recovery-heavy fleets.

## Receipt
- https://github.com/paperclipai/paperclip/blob/v2026.916.0/server/src/services/agent-permissions.ts
