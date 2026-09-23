# Unreal Agent Source Notes

Added 2026-09-23. MIT, Go, `unreallabsai/unreal-agent`, created 2026-09-21, 132
commits, 1,183 stars and 55 forks at intake. v0.1.0 and v0.1.1 were both published
on 2026-09-22, neither a prerelease. The contribution guide says the repository
carries "selected components from a larger internal codebase" and that the team
cannot currently review or merge pull requests.

## Why it is on the watchlist

It is the thinnest harness on the list, and it arrived the week the HarnessTax
study found that harness choice moves cost far more than task success. The design
reads like an answer to that: an inbox that deduplicates inputs by caller-supplied
ID, an append-only session store that can fork, tool translators that do no I/O,
and serializable, versioned operations run by a swappable operation manager. The
README's own example is a proxy manager that ships operations to a process inside
a remote sandbox. Three tools only: Bash, ViewImage and skill use.

## What is checkable

- **The prompt claims a sandbox the runner does not provide.** At v0.1.1 the
  default system prompt in `cmd/internal/agentrunner/run.go` begins "You are an AI
  agent running inside an isolated sandbox container." The runner README's first
  example runs `unreal-agent-runner -p ...` in the current directory after
  `go install`. No approval step is visible in the library. The Docker image, run
  with a mounted workspace, is the configuration where the prompt is true.
- **The official image namespace looks like a typo.** The release workflow
  publishes `unrea1labs/unreal-agent`, digit one. Tags `v0.1.0`, `v0.1.1` and
  `latest` exist there. The look-alike `unreallabs` namespace returned 404 on
  2026-09-23. An operator who types the org name will reach an empty, claimable
  namespace.
- **It reuses a ChatGPT subscription login.** The `openai-codex` provider reads
  `~/.codex/auth.json` (or `CODEX_HOME`), requires a ChatGPT-mode login, and does
  not refresh the token; an expired token ends the run.
- **Egress.** The runner forwards a `SANDBOX_EGRESS_PROXY` setting; what enforces
  it is the operator's environment.
- **Benchmarks.** A Harbor adapter is published with a reproducible bundle
  build. No scores are published at intake.

## Handling rules

- **Tier 2, weekly.** Star count is not adoption.
- **Report prompt and enforcement separately.** A system-prompt statement about
  isolation is not isolation; `system_prompt_claim_treated_as_enforced_isolation`
  is rejected evidence.
- **Public history is partial by design.** Absence of a commit is not absence of
  work.
- **A Codex-credential behaviour seen here is a fact about this runner.**

## Comparison set

`pi-coding-agent` for the minimal-harness bracket and the HarnessTax result,
`temporal-agent-harness` for durable, replayable execution, and `openhands` for
remote runtimes.
