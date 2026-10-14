---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-pi-coding-agent-codemode-lets-the-model-script-tool-calls-the-tool-calls-stay-gated-its-model-calls-do-not
source: pi-coding-agent
source_contract: sources/pi-coding-agent.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/core/agent-session.ts#L730-L760
    precision: tagged_commit_file
  - url: https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/core/agent-session.ts#L1562-L1571
    precision: tagged_commit_file
  - url: https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/extensions/codemode/execute.ts#L740-L751
    precision: tagged_commit_file
  - url: https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/extensions/mcp/index.ts#L501-L525
    precision: tagged_commit_file
  - url: https://github.com/earendil-works/pi/issues/10426
    precision: official_docs
  - url: https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/core/agent-session.ts#L652-L674
    precision: tagged_commit_file
  - url: https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/extensions/codemode/tool.ts#L371-L390
    precision: tagged_commit_file
  - url: https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/extensions/codemode/index.ts#L14-L45
    precision: tagged_commit_file
  - url: https://github.com/earendil-works/pi/releases/tag/v1.0.0
    precision: github_release
---
# 2026-10-13-pi-coding-agent-codemode-lets-the-model-script-tool-calls-the-tool-calls-stay-gated-its-model-calls-do-not

Codemode lets the model script tool calls: the tool calls stay gated, its model calls do not, and "only" mode hides tools without blocking them. `codemode` runs model-written JavaScript in a QuickJS WASM sandbox with "no Node APIs, file system, network, or timers" (codemode.md L7). Scripts reach the outside only through `tools.<name>()` and `models`. Codemode is off by default, but the MCP extension activates it whenever an enabled server has the default `codemode` exposure (mcp/index.ts L501-L525). `autoEnableCodemode: false` prevents that, and a project value overrides the user's (mcp.md L230). The code settles four authority facts. First, every nested tool call passes validation and the extension `tool_call`/`tool_result` hooks, tagged with `parentToolCallId`, so a permission extension still sees `bash` when a script calls it. Second, scripts can call registered codemode/deferred tools plus active direct tools. Hidden tools and inactive direct tools are excluded, including MCP tools with those exposures; removing an active direct bash tool keeps it out of scripts. Third, `models.classify()` and `models.generateImages()` spend the session's credentials outside the tool pipeline, so a hook cannot separately intercept these model operations after admitting the script, although it can reject the enclosing codemode call; the spend lands on the codemode result and the session cost (codemode.md L93). Fourth, `codemode.mode: "only"` hides direct tool declarations but does not gate execution: a model that names a hidden active tool still runs it (#10426, open). The v1.0.0 release notes report a GPT-5.6 request with default tools and codemode active falling from about 5,300 to 3,300 prompt tokens; that measurement was not reproduced here.

Channel: tagged-release. The "only"-mode gap is an open issue at v1.2.0 and on main.. Half: both. Date: 2026-09-29.

Operator consequence: Enabling codemode, including through enabled MCP with default exposure, permits scripts and classifier/image spend with available credentials. Keep tool policy in tool_call handlers. To enforce a codemode-only policy, explicitly allow the top-level codemode entry, deny other disallowed root calls, and inspect nested calls too; rejecting every event without parentToolCallId also blocks codemode itself. This is source-derived policy guidance, not a tested extension. A hook can reject the enclosing script but cannot separately intercept its model operations. Withhold credentials for unwanted classifier/image providers or replace the built-in with an extension constructed with models: false. autoEnableCodemode: false only prevents MCP automatic activation: it neither disables separately activated codemode nor turns off its models API. Watch #10426 and a tagged user-facing models control; only the factory option is established today.

## Receipt
- https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/core/agent-session.ts#L730-L760
- https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/core/agent-session.ts#L1562-L1571
- https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/extensions/codemode/execute.ts#L740-L751
- https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/extensions/mcp/index.ts#L501-L525
- https://github.com/earendil-works/pi/issues/10426
- https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/core/agent-session.ts#L652-L674
- https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/extensions/codemode/tool.ts#L371-L390
- https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/extensions/codemode/index.ts#L14-L45
- https://github.com/earendil-works/pi/releases/tag/v1.0.0
