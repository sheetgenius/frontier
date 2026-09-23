---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-temporal-agent-harness-readme-drift-the-repo-front-page-at-window-close-documents-a-dispatch-model-the-wheel-does
source: temporal-agent-harness
source_contract: sources/temporal-agent-harness.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/temporal-community/temporal-agent-harness/blob/e4bde4beb078d7ec3432c84b71e64e1efd554752/README.md
    precision: tagged_commit_file
  - url: https://github.com/temporal-community/temporal-agent-harness/blob/d7a55f8855c31eb1a3281d2502f626c8a153aa44/README.md
    precision: tagged_commit_file
---
# 2026-09-21-temporal-agent-harness-readme-drift-the-repo-front-page-at-window-close-documents-a-dispatch-model-the-wheel-does

README drift: the repo front page at window close documents a dispatch model the wheel does not have. Answers operator question 8 and the brief's question 6. The sections that differ between tag 0.4.0 and d7a55f8855 are:
- "## Slash Commands" (0.4.0 line 439), with its `/approvals strict|safe|skip` / `/allow-tools` / `/status` / `/stop` table. It is replaced on main by "## Accepted Messages" (line 438) and a new "### Discovery" (line 537), which cover `@agent.accepts`, `MidTurn`, `model_callable` and the `message_id` event vocabulary.
- "## A taste". The imports change (`slash_commands` out, `MidTurn` in) and the `slash_commands=slash_commands.default_commands()` constructor arg is removed.
- "### Try it -- run the example agents". "all six" becomes "all seven".
- "### All examples behind one UI". The tic-tac-toe agent is added.
"Versioning and stability", "What you get" and "Self-hosting the web app" are unchanged. None of the mid-turn dispatch semantics are in the 0.4.0 wheel.

Channel: main-unreleased (docs). Half: both. Date: 2026-09-17 (#137, #139).

Operator consequence: Read the README at the tag you install (`/blob/0.4.0/README.md`). On main, the front page describes a model with no slash commands and per-handler mid-turn modes. The installed wheel still has global message queuing and the packaged `/approvals skip`.

## Receipt
- https://github.com/temporal-community/temporal-agent-harness/blob/e4bde4beb078d7ec3432c84b71e64e1efd554752/README.md
- https://github.com/temporal-community/temporal-agent-harness/blob/d7a55f8855c31eb1a3281d2502f626c8a153aa44/README.md
