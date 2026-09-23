---
schema_version: bitter.frontier_profile.v0
profile_id: unreal-agent
label: Unreal Agent
owner: unreallabsai
source_contract: sources/unreal-agent.yml
homepage: https://unreallabs.ai
docs: https://github.com/unreallabsai/unreal-agent/blob/v0.1.1/README.md
tagline: "The thinnest harness on the watchlist: three tools, idempotent inputs and forkable sessions, with a system prompt that promises a sandbox the runner does not enforce."
compared_with:
  - pi-coding-agent
  - temporal-agent-harness
  - openhands
repo: https://github.com/unreallabsai/unreal-agent
surface_class: open_source_commits
evidence_floor: official_docs
status: active_watch
last_updated: 2026-09-23
last_full_review: 2026-09-23
claims: []
stance:
  use_for: "Builders who want a small, durable agent loop to put their own sandbox and policy around: inputs are deduplicated by caller ID, sessions are append-only and forkable, and tool work is a serializable operation that can run in a remote box."
  avoid_for: "Running it directly on a workstation. The default system prompt tells the model it is in an isolated container, and nothing in the runner checks that it is. There is also no approval step in the library."
  watch_next: "Whether a release adds a container check or an approval seam; published benchmark results with a method; whether the vendor claims the look-alike Docker Hub namespace."
---

# Unreal Agent

Unreal Agent is on the watchlist as the purest bet on a thin harness. It
arrived the week a study found that swapping harnesses moves cost far more
than it moves success. The design reads like an answer to that: almost
nothing between the model and the work, and the engineering spent on
durability instead.

## Where it stands, 2026-09-23

**Channel.** Two releases, both on 22 September:
[v0.1.0](https://github.com/unreallabsai/unreal-agent/releases/tag/v0.1.0) and
[v0.1.1](https://github.com/unreallabsai/unreal-agent/releases/tag/v0.1.1),
neither a prerelease. It installs with `go install` or as a Docker image. The
repository says it carries
[selected components from a larger internal codebase](https://github.com/unreallabsai/unreal-agent/blob/v0.1.1/CONTRIBUTING.md)
and does not merge outside pull requests, so a quiet public history is not
evidence of quiet work.

**What it is.** Three tools: Bash, ViewImage and skill use. Around them, an
inbox that drops repeated inputs by a caller-supplied ID, an append-only
session store that can fork, tool translators that do no I/O, and versioned,
serializable operations run by a swappable operation manager. The
[README](https://github.com/unreallabsai/unreal-agent/blob/v0.1.1/README.md)
gives the intended extension: a proxy manager that ships operations to a
process inside a remote sandbox.

**The prompt promises a box the runner does not build.** At v0.1.1 the
default system prompt begins
["You are an AI agent running inside an isolated sandbox container."](https://github.com/unreallabsai/unreal-agent/blob/v0.1.1/cmd/internal/agentrunner/run.go#L45)
The [runner's first example](https://github.com/unreallabsai/unreal-agent/blob/v0.1.1/cmd/unreal-agent-runner/README.md)
runs it in your current directory. There is no approval step in the library.
Run the Docker image with a mounted workspace, the one setup where the prompt
is true, or put your own sandbox around it.

**Mind the image name.** The
[release workflow](https://github.com/unreallabsai/unreal-agent/blob/v0.1.1/.github/workflows/release.yml#L72)
publishes to `unrea1labs/unreal-agent`, with a digit one. The look-alike
`unreallabs` namespace was unclaimed on 23 September. Copy the name from the
README; do not type it from memory.

**It can borrow a ChatGPT login.** The `openai-codex` provider reads a ChatGPT
subscription token from the
[Codex auth file](https://github.com/unreallabsai/unreal-agent/blob/v0.1.1/harness/llm/clients/openaicodex/credentials.go)
and does not refresh it. A long run ends when the token expires.

## What is unresolved

- Whether any release adds a check that refuses to run outside a container.
- Which internal components are withheld, and whether a policy or approval
  layer is among them.
- Benchmark results. A Harbor evaluation adapter is published; scores are not.

## Profile hygiene

Dated, not evergreen. This page was written at intake from the v0.1.1 tag, and
every claim above links to the file or release that supports it. It has no
cycle findings yet; the next research cycle adds them. See
[METHOD.md](https://github.com/sheetgenius/frontier/blob/main/METHOD.md) for
the evidence contract.
