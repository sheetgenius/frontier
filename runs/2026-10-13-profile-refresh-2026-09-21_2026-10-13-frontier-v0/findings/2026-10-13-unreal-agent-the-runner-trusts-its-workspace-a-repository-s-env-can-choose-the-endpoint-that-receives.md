---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-unreal-agent-the-runner-trusts-its-workspace-a-repository-s-env-can-choose-the-endpoint-that-receives
source: unreal-agent
source_contract: sources/unreal-agent.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/cmd/internal/agentrunner/run.go#L222-L258
    precision: tagged_commit_file
  - url: https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/cmd/internal/agentrunner/run.go#L525-L565
    precision: tagged_commit_file
  - url: https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/llm/clients/openai/client.go#L28-L46
    precision: tagged_commit_file
  - url: https://github.com/unreallabsai/unreal-agent/issues/5#issuecomment-5797105219
    precision: official_docs
---
# 2026-10-13-unreal-agent-the-runner-trusts-its-workspace-a-repository-s-env-can-choose-the-endpoint-that-receives

The runner trusts its workspace: a repository's .env can choose the endpoint that receives your API key, and the maintainers call that the design. The code did not change; the record did. A reporter showed on 2026-09-23 that the runner loads `<workspace>/.env` and then uses its `UNREAL_HARNESS_LLM_BASE_URL` with the operator's existing key, needing "no prompt injection or tool execution" (#5). The maintainer replied that `cmd/unreal-agent-runner` and `cmd/internal/agentrunner` "are intended for unsupervised agents in a trusted environment: workspace, host, proxies etc." The code at v0.3.1 matches that account. Every `NAME=value` in `.env` whose name is not already set in the process is applied (L550-L558). A `SANDBOX_EGRESS_PROXY` from the file wins even over an operator-set value, and it is copied into `HTTPS_PROXY` (L552, L559-L561). The provider, base URL and key are then read from the environment. The openai client sends `Authorization: Bearer <key>` to `<base URL>/responses` without checking the destination (openai/client.go L32-L41); the openrouter, fireworks, ollama and anthropic clients take a base URL the same way, and only `openai-codex` pins its host. Bash children inherit the process environment, so values from `.env` also reach every command the agent runs. The Docker image mounts the project at /workspace and loads that project's `.env` too. The TUI does not load `.env`. Since v0.3.1, the Homebrew cask puts this runner on PATH on developer machines.

Channel: tagged-release. Half: defect. Date: 2026-09-23.

Operator consequence: Use the runner the way the maintainers describe it: only on a workspace you already trust. Do not use `unreal-agent-runner` to vet an unknown repository, even for a read-only review. Inspect or delete its `.env` first, or use the TUI, which ignores `.env`, inside a sandbox. If you must run it on untrusted code, export `UNREAL_HARNESS_LLM_PROVIDER` and `UNREAL_HARNESS_LLM_BASE_URL` yourself, because values you set win over the file's. Do not treat `SANDBOX_EGRESS_PROXY` as an enforcement point, since a workspace file can replace it; enforce egress at the network layer. The maintainers frame this as the intended trust boundary. #5 is still open, and no fix commit exists. The trust decision lands on the operator's choice of directory, and the tool never surfaces it.

## Receipt
- https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/cmd/internal/agentrunner/run.go#L222-L258
- https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/cmd/internal/agentrunner/run.go#L525-L565
- https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/llm/clients/openai/client.go#L28-L46
- https://github.com/unreallabsai/unreal-agent/issues/5#issuecomment-5797105219
