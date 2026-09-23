---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-temporal-agent-harness-what-lands-in-workflow-history-and-where-the-default-payload-offload-goes
source: temporal-agent-harness
source_contract: sources/temporal-agent-harness.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/temporal-community/temporal-agent-harness/blob/e4bde4beb078d7ec3432c84b71e64e1efd554752/temporal_agent_harness/harness/agent_protocol/events.py#L500
    precision: tagged_commit_file
  - url: https://github.com/temporal-community/temporal-agent-harness/blob/e4bde4beb078d7ec3432c84b71e64e1efd554752/temporal_agent_harness/harness/agent_workflow.py#L154-L159
    precision: tagged_commit_file
  - url: https://github.com/temporal-community/temporal-agent-harness/blob/e4bde4beb078d7ec3432c84b71e64e1efd554752/temporal_agent_harness/utils/large_payload.py#L65-L72
    precision: tagged_commit_file
  - url: https://github.com/temporal-community/temporal-agent-harness/blob/e4bde4beb078d7ec3432c84b71e64e1efd554752/temporal_agent_harness/plugin.py#L146-L163
    precision: tagged_commit_file
---
# 2026-09-21-temporal-agent-harness-what-lands-in-workflow-history-and-where-the-default-payload-offload-goes

What lands in workflow history, and where the default payload offload goes. Answers operator question 5, on contents. The user message arrives as a `send_agent_message` update, and the web app reads it back from history (`_session_user_message_from_history_event`, app.py). Tool arguments, tool outputs, callback results and reply and thought deltas stream as signals into the workflow's history. Model calls run as activities, so their inputs and outputs are activity payloads in history too. In the coding example, `read`, `grep` and `glob` are auto-approved `inherently_safe` tools (T/examples/callback_tools/coding_agent/tools.py#L100, #L125, #L133), confined to the project root (opencode_shim/local_tools.py#L44-L50). Any file under the root that the model asks for, `.env` included, therefore goes to the remote worker and into history with no prompt. Payloads over 1.5 MB go by default to `/tmp/temporal-large-payloads` on the local host, keyed by SHA-256, never deleted. No payload codec or encryption appears anywhere in the package (`git grep -i "codec|encrypt"` empty), so against Temporal Cloud, history holds plaintext prompts, file contents and command output unless the operator adds a codec.

Channel: preview-or-beta. Half: both. Date: present at 0.4.0.

Operator consequence: Before pointing a harness agent at Temporal Cloud or a shared S3 bucket, add a data-converter codec. Also set the namespace retention you want and a bucket lifecycle rule. Treat the project root the coding example serves as fully readable by the remote side. Clear `/tmp/temporal-large-payloads` on dev hosts. Retention and who can read the history are properties of the Temporal service and namespace, not of the harness; those were not reached here.

## Receipt
- https://github.com/temporal-community/temporal-agent-harness/blob/e4bde4beb078d7ec3432c84b71e64e1efd554752/temporal_agent_harness/harness/agent_protocol/events.py#L500
- https://github.com/temporal-community/temporal-agent-harness/blob/e4bde4beb078d7ec3432c84b71e64e1efd554752/temporal_agent_harness/harness/agent_workflow.py#L154-L159
- https://github.com/temporal-community/temporal-agent-harness/blob/e4bde4beb078d7ec3432c84b71e64e1efd554752/temporal_agent_harness/utils/large_payload.py#L65-L72
- https://github.com/temporal-community/temporal-agent-harness/blob/e4bde4beb078d7ec3432c84b71e64e1efd554752/temporal_agent_harness/plugin.py#L146-L163
