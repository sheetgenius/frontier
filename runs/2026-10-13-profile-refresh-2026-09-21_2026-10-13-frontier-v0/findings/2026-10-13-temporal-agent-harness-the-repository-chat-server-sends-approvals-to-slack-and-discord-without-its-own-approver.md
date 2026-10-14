---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-temporal-agent-harness-the-repository-chat-server-sends-approvals-to-slack-and-discord-without-its-own-approver
source: temporal-agent-harness
source_contract: sources/temporal-agent-harness.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/temporal-community/temporal-agent-harness/pull/143
    precision: merged_pr
  - url: https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/third-party-platforms/chat-server/src/app.tsx#L104-L112
    precision: tagged_commit_file
  - url: https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/third-party-platforms/chat-server/src/app.tsx#L1073-L1127
    precision: tagged_commit_file
  - url: https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/third-party-platforms/chat-server/README.md#L202-L208
    precision: tagged_commit_file
  - url: https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/third-party-platforms/chat-server/README.md#L393-L394
    precision: tagged_commit_file
  - url: https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/docs/internal/human-in-the-loop-tool-approvals.md#L841-L844
    precision: tagged_commit_file
---
# 2026-10-13-temporal-agent-harness-the-repository-chat-server-sends-approvals-to-slack-and-discord-without-its-own-approver

The repository chat-server sends approvals to Slack and Discord without its own approver-identity check. A gated call posts its own message carrying its arguments, with "Approve once", "Always allow" and "Deny" buttons. Decisions made elsewhere retire the prompt, and an "Always allow" posts that the tool is allowed for the rest of the session, which is plainer than the OpenCode shim's "always". The click handler resolves the call for whoever clicked, with no check against the session's owner or any list of permitted users; "Always allow" sends `remember=true`, which also releases other pending calls of that tool while its name is allowed. The README says `model_callable` "is not used to decide what to show", so every handler is offered to every participant, and its own example is `@bot /set_approval_policy new_policy=allow_safe` against monty-chat, whose handler also accepts `dangerously_skip_all`. The clicker's display name goes into the thread, but the harness records no approver; the approvals doc lists approver identity as future work.

Channel: preview-or-beta (in the tag tree as a private Node package; not published to npm). Half: both. Date: 2026-09-30.

Operator consequence: In chat, any participant who can reach the bot's approval control under the platform's permissions can decide; no bypass of Slack/Discord access controls was established. Put the bot only where every member could be trusted to approve, keep agents with posture handlers out of shared channels, and audit decisions from the thread, because harness history cannot say who approved. The capability half: approvals reach people where they already work without a custom UI, and the attention cost moves from building approval plumbing to deciding who sits in the channel.

## Receipt
- https://github.com/temporal-community/temporal-agent-harness/pull/143
- https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/third-party-platforms/chat-server/src/app.tsx#L104-L112
- https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/third-party-platforms/chat-server/src/app.tsx#L1073-L1127
- https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/third-party-platforms/chat-server/README.md#L202-L208
- https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/third-party-platforms/chat-server/README.md#L393-L394
- https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/docs/internal/human-in-the-loop-tool-approvals.md#L841-L844
