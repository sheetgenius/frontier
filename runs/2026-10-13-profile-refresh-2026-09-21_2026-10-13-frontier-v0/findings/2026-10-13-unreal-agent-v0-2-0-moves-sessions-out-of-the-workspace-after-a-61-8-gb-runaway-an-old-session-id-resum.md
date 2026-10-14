---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-unreal-agent-v0-2-0-moves-sessions-out-of-the-workspace-after-a-61-8-gb-runaway-an-old-session-id-resum
source: unreal-agent
source_contract: sources/unreal-agent.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/unreallabsai/unreal-agent/releases/tag/v0.2.0
    precision: github_release
  - url: https://github.com/unreallabsai/unreal-agent/pull/9
    precision: merged_pr
  - url: https://github.com/unreallabsai/unreal-agent/issues/3#issuecomment-5797715378
    precision: official_docs
  - url: https://github.com/unreallabsai/unreal-agent/blob/v0.1.1/cmd/internal/agentrunner/run.go#L37
    precision: tagged_commit_file
  - url: https://github.com/unreallabsai/unreal-agent/blob/v0.2.0/cmd/internal/agentrunner/run.go#L664-L685
    precision: tagged_commit_file
  - url: https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/cmd/internal/agentrunner/run.go#L658-L679
    precision: tagged_commit_file
  - url: https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/Dockerfile
    precision: tagged_commit_file
  - url: https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/cmd/unreal-agent-runner/README.md#L59-L62
    precision: tagged_commit_file
  - url: https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/operation/shell.go
    precision: tagged_commit_file
  - url: https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/primitives/process.go
    precision: tagged_commit_file
---
# 2026-10-13-unreal-agent-v0-2-0-moves-sessions-out-of-the-workspace-after-a-61-8-gb-runaway-an-old-session-id-resum

v0.2.0 moves sessions out of the workspace after a 61.8 GB runaway; an old session ID resumed without its old path starts empty. At v0.1.1 the runner kept sessions in `.harness/sessions`, relative to the process's current directory, and by default wrote a JSONL log to `<workspace>/logs`. Issue #3 (2026-09-22) showed the cost: a background `grep -R .` read its own capture file inside the workspace, the file reached 61.8 GB in about ten minutes, and the runner never exited. The maintainer answered on 2026-09-23 that the log default "wasn't the intended behaviour" and promised fixes for both problems. v0.2.0 shipped them the same evening. Sessions now live under `$XDG_STATE_HOME/unreal-agent/sessions` (default `~/.local/state/unreal-agent/sessions`), the log is written only with `-log-directory`, and the Docker image gained a writable `/state` directory and `XDG_STATE_HOME=/state`; the README shows mounting a named volume there. The release body names the XDG-state and opt-in-log change; it does not explain the old-session lookup trap. The upgrade trap sits in `openSession`, which at every tag creates a fresh session when the requested `session_id` is not found. A v0.1.x session resumed on v0.2.0 or later without `-session-directory .harness/sessions` therefore starts empty under the same ID, with no error. The file format did not change (version 2 at every tag), and v0.3.0 upgrades legacy `reasoning` items when it reads them (itemjson.go L63, L101), so moved files still resume. The rest of #3 is unfixed. The Bash execution code is identical at v0.1.1 and v0.3.1: there is no per-command timeout and no cap on the on-disk capture. Only the text the model sees is bounded.

Channel: tagged-release. Half: both. Date: 2026-09-23.

Operator consequence: On any host that ran 0.1.x, resume old sessions with `-session-directory <old cwd>/.harness/sessions`, or move the files into the XDG path. After migrating sessions and reviewing retention, remove unneeded `.harness/sessions` and `logs/` directories from repositories; they hold full transcripts and tool output. Wrap long commands in `timeout` and put a disk quota on the state directory, because nothing in the harness stops a runaway command. By code reading, the self-feeding loop can come back whenever the workspace contains the state directory, for example when the TUI is started from `$HOME`. Launch it from the project directory instead.

## Receipt
- https://github.com/unreallabsai/unreal-agent/releases/tag/v0.2.0
- https://github.com/unreallabsai/unreal-agent/pull/9
- https://github.com/unreallabsai/unreal-agent/issues/3#issuecomment-5797715378
- https://github.com/unreallabsai/unreal-agent/blob/v0.1.1/cmd/internal/agentrunner/run.go#L37
- https://github.com/unreallabsai/unreal-agent/blob/v0.2.0/cmd/internal/agentrunner/run.go#L664-L685
- https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/cmd/internal/agentrunner/run.go#L658-L679
- https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/Dockerfile
- https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/cmd/unreal-agent-runner/README.md#L59-L62
- https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/operation/shell.go
- https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/primitives/process.go
