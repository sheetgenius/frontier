---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-10-claude-code-claude-code-sessions-can-now-message-each-other-and-mentions-another
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-08-03
  end: 2026-08-10
status: accepted
confidence: high
evidence:
  - url: https://code.claude.com/docs/en/whats-new/2026-w32
    precision: official_docs
---
# 2026-08-10-claude-code-claude-code-sessions-can-now-message-each-other-and-mentions-another

Claude Code sessions can now message each other, and `@` mentions another session by name.

v2.1.224 added cross-session `SendMessage`: "Claude Code sessions can now message each other, on any of your machines, with `ListAgents` to discover them (macOS and Linux)." The digest is precise about the payload boundary  --  "A message is text Claude writes for the other session, never your conversation history or files." v2.1.232 made it usable: typing `@` in the prompt mentions another session by name, `SendMessage` delivers to a bare name that exactly matches one live session instead of demanding a ref, and sessions on one machine are forced to unique names (a collision gets a `name-word-word` variant). The governance surface arrived with the feature rather than after it: v2.1.224 added `crossSessionInbound` and `dialogExpiry` settings, where "cross-session messages sent to a session running with bypassed permissions are held for your approval", and v2.1.222 put the classifier in front of the send  --  "messages sent to other agent sessions via `SendMessage` are now evaluated by the permission classifier before dispatch." v2.1.232 exposed both as `/config` rows.

Channel: tagged-release. Ancestry: Closed source; npm publish record is the release proof. registry `time[]` gives 2.1.224 = 2026-08-07T01:36:32Z and 2.1.232 = 2026-08-13T21:30:53Z, both plain semver under dist-tag `latest`. The feature is documented on its own docs page, https://code.claude.com/docs/en/cross-session-messaging (HTTP 200), and the Week 32 digest pins it to v2.1.224 with the line "Requires v2.1.224 or later"  --  a version pin, so this is a code channel and not a marketing surface.

Operator consequence: Try it if you run several long-lived sessions on one machine, but decide the inbound policy deliberately rather than inheriting it. The interesting property for anyone building on Claude Code is that a message is now an untrusted input channel between agents: text one session's model wrote lands in another session's context. Set `crossSessionInbound` to hold or refuse on any session you start with bypassed permissions  --  the default already holds there, and that default is the tell that Anthropic considers the channel a privilege boundary. macOS and Linux only; Windows operators can ignore this entirely for now.

## Receipt
- https://code.claude.com/docs/en/whats-new/2026-w32
