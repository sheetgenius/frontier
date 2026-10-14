---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-eve-eve-deleted-scaffolding-the-todo-tool-default-ask-question-background-tasks-and-per-connec
source: eve
source_contract: sources/eve.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/vercel/eve/commit/60998d606bfceb4ab367de869d73769065eadd04
    precision: commit
  - url: https://github.com/vercel/eve/commit/8c55ea7c132f9a23829214bda48069d710da77fa
    precision: commit
  - url: https://github.com/vercel/eve/commit/db71190b2c3abce9f375b06fc890d90b035d1fe7
    precision: commit
  - url: https://github.com/vercel/eve/pull/3648
    precision: merged_pr
  - url: https://github.com/vercel/eve/pull/4400
    precision: merged_pr
  - url: https://github.com/vercel/eve/releases/tag/eve%400.69.0
    precision: github_release
  - url: https://github.com/vercel/eve/releases/tag/eve%400.76.0
    precision: github_release
---
# 2026-10-13-eve-eve-deleted-scaffolding-the-todo-tool-default-ask-question-background-tasks-and-per-connec

eve deleted scaffolding: the todo tool, default ask_question, background tasks, and per-connection tool listings. 0.65.0 removed the default `todo` tool and made `ask_question` an opt-in workflow tool; the PR says "Codex and opencode v2 have both removed or opted out of equivalent default tools." 0.69.0 removed background tasks, and with them the `taskDeliveryPolicy` setting that had shipped nine days earlier, in favor of `task()` and `serve()` tools that return a receipt and a resumable task id. 0.76.0 put deferred tools, subagents, connection tools and skills behind three fixed catalog tools (`eve__search`, `eve__tool`, `eve__skill`) and deleted `load_skill`, `connection_search` and `connection_execute` with no compatibility layer; the PR reports about 85% fewer tool tokens per request on a 70-tool catalog as a vendor example, not an independent measurement. From 0.78.0, catalog tools appear only when the session first reaches an eligible entry, then stay present, so the set can grow at that point. 0.71.0 lets a slow `bash` command keep running as a sandbox job after 30 seconds instead of blocking the turn.

Channel: tagged-release. Half: capability. Date: 2026-09-23 (eve@0.65.0) to 2026-10-09 (eve@0.76.0).

Operator consequence: Remove a hand-built planning shim only after checking whether it adds needed oversight; the removal itself does not measure a general-model improvement. Add `ask_question` back with `eve add tool/ask_question` only if you want it. Agents with large connection catalogs can stop hand-pruning tool lists and mark entries `deferred: true`. Update anything that matches tool names: approval policies, hooks and evals that name `load_skill`, `connection_execute`, `task_wait`, `task_cancel` or `final_output` (now `eve__*`), and expect saved "always approve" decisions for connection tools to reset at 0.76.0. Code reading `BashToolOutput.exitCode` must check `status` first. Lens: the harness is shedding planning scaffolding as models improve, the same move Codex made when rust-v0.152.0 turned `update_plan` off by default (recorded in the 2026-09-21 Codex harvest).

## Receipt
- https://github.com/vercel/eve/commit/60998d606bfceb4ab367de869d73769065eadd04
- https://github.com/vercel/eve/commit/8c55ea7c132f9a23829214bda48069d710da77fa
- https://github.com/vercel/eve/commit/db71190b2c3abce9f375b06fc890d90b035d1fe7
- https://github.com/vercel/eve/pull/3648
- https://github.com/vercel/eve/pull/4400
- https://github.com/vercel/eve/releases/tag/eve%400.69.0
- https://github.com/vercel/eve/releases/tag/eve%400.76.0
