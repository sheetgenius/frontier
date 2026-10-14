---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-antigravity-headless-as-a-ci-driver-daemons-now-end-with-the-run-late-errors-exit-3-and-an-unknown-age
source: antigravity
source_contract: sources/antigravity.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/google-antigravity/antigravity-cli/blob/1.2.9/CHANGELOG.md?plain=1#L15
    precision: tagged_commit_file
  - url: https://github.com/google-antigravity/antigravity-cli/blob/1.2.10/CHANGELOG.md?plain=1#L17
    precision: tagged_commit_file
  - url: https://github.com/google-antigravity/antigravity-cli/blob/1.2.11/CHANGELOG.md?plain=1#L13
    precision: tagged_commit_file
  - url: https://github.com/google-antigravity/antigravity-cli/blob/1.2.14/CHANGELOG.md?plain=1#L14
    precision: tagged_commit_file
  - url: https://github.com/google-antigravity/antigravity-cli/blob/1.3.4/CHANGELOG.md?plain=1#L15
    precision: tagged_commit_file
  - url: https://github.com/google-antigravity/antigravity-cli/blob/1.3.4/CHANGELOG.md?plain=1#L10
    precision: tagged_commit_file
  - url: https://github.com/google-antigravity/antigravity-cli/blob/1.3.4/CHANGELOG.md?plain=1#L16
    precision: tagged_commit_file
  - url: https://web.archive.org/web/20261003090204id_/https://antigravity.google/docs/cli/headless.md
    precision: official_docs
  - url: https://github.com/google-antigravity/antigravity-cli/blob/1.2.6/CHANGELOG.md?plain=1#L10
    precision: tagged_commit_file
---
# 2026-10-13-antigravity-headless-as-a-ci-driver-daemons-now-end-with-the-run-late-errors-exit-3-and-an-unknown-age

Headless as a CI driver: daemons now end with the run, late errors exit 3, and an unknown --agent fails instead of running the default agent. 1.2.9 reverses the daemon persistence in 1.1.28 and the 1.2.6 addition for `GEMINI_API_KEY` sessions (https://github.com/google-antigravity/antigravity-cli/blob/1.2.6/CHANGELOG.md?plain=1#L10): headless runs no longer leave daemon background processes running after exit, which "could hang scripts reading the CLI's output until end-of-file", and runs now wait for background tasks until the `--print-timeout` deadline, "up to a 30-minute cap", instead of cancelling them about five seconds after the agent went idle. 1.2.10 makes a run that streamed part of a response and then hit a model or agent error exit 3 with an `AGY_ERROR` line instead of 0. 1.2.11 fixes project custom agents in `.agents/agents/` not being found "under execution with --agent, in headless (-p / --prompt) runs", and 1.3.4 fixes `--agent` "silently running the default agent when the name matches no agent": headless runs now exit 1 and list the agents. Taken together, a pre-1.2.11 headless run that named a project agent most likely ran the default agent with no error. 1.2.14 makes `--json-schema` reject plain text, bare type names, missing files, and any schema whose root is not an object, with exit 1 at startup. 1.2.12 stops `GEMINI_API_KEY` runs at once on an exhausted daily quota or spend cap, 1.3.4 makes `--print` with `--prompt-interactive` exit 2, and 1.3.4 lets `--model` take a base name without `--effort`, falling back to the server's default thinking level instead of failing.

Channel: tagged-release; the headless docs page that contradicts 1.2.6 and 1.2.14 is docs-only. Half: both. Date: 2026-09-23 to 2026-10-13 (1.2.9, 1.2.10, 1.2.11, 1.2.12, 1.2.14, 1.2.16, 1.3.4).

Operator consequence: Put CI on 1.3.4 and handle exit 1 (startup and agent-name errors), 2 (usage conflicts) and 3 (API or agent failure). Tests that relied on a dev server outliving the run now have to start it themselves, and a run with a background task can sit up to 30 minutes past the agent's last turn, so keep an explicit `--print-timeout`. If CI used `--agent` with project agents before 1.2.11, assume those runs used the default agent's tools and permissions and re-run anything whose result depended on the custom agent. Pin `--effort` next to `--model` when reproducibility matters, and validate schemas as object-root JSON Schema. The headless docs page is behind the changelog on timeouts and schemas; trust the notes.

## Receipt
- https://github.com/google-antigravity/antigravity-cli/blob/1.2.9/CHANGELOG.md?plain=1#L15
- https://github.com/google-antigravity/antigravity-cli/blob/1.2.10/CHANGELOG.md?plain=1#L17
- https://github.com/google-antigravity/antigravity-cli/blob/1.2.11/CHANGELOG.md?plain=1#L13
- https://github.com/google-antigravity/antigravity-cli/blob/1.2.14/CHANGELOG.md?plain=1#L14
- https://github.com/google-antigravity/antigravity-cli/blob/1.3.4/CHANGELOG.md?plain=1#L15
- https://github.com/google-antigravity/antigravity-cli/blob/1.3.4/CHANGELOG.md?plain=1#L10
- https://github.com/google-antigravity/antigravity-cli/blob/1.3.4/CHANGELOG.md?plain=1#L16
- https://web.archive.org/web/20261003090204id_/https://antigravity.google/docs/cli/headless.md
- https://github.com/google-antigravity/antigravity-cli/blob/1.2.6/CHANGELOG.md?plain=1#L10
