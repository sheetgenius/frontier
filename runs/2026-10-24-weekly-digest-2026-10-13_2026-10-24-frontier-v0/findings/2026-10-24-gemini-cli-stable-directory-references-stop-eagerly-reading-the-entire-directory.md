---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-gemini-cli-stable-directory-references-stop-eagerly-reading-the-entire-directory
source: gemini-cli
source_contract: sources/gemini-cli.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/google-gemini/gemini-cli/commit/9b6e0265d16bbd29ca51e33c9e0c01dc4cec5e83
    precision: commit
  - url: https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/cli/src/ui/hooks/atCommandProcessor.ts
    precision: tagged_commit_file
  - url: https://github.com/google-gemini/gemini-cli/commit/8b5cb8a6491e17b2dd3ba0cfb49fcfe41c48c4a3
    precision: commit
---
# 2026-10-24-gemini-cli-stable-directory-references-stop-eagerly-reading-the-entire-directory

Stable directory references stop eagerly reading the entire directory. The at-command processor tracks directory references and excludes them from the eager `read_many_files` input. It leaves a resolved directory reference in the query so the agent can discover and read what it needs. A separate ignore traversal change prunes ignored paths earlier. This does not disable GEMINI.md discovery or prevent later explicit tool reads.

Channel: tagged-release. Half: both. Date: 2026-10-20.

Operator consequence: On stable 0.65.0, use a directory reference to point the agent at an area of a large repository without assuming all its contents were injected. If a workflow depends on a particular file being present immediately, name or read that file explicitly. The harness shifts selection to the agent and removes some up-front context work; no latency, token or memory reduction was measured here.

## Receipt
- https://github.com/google-gemini/gemini-cli/commit/9b6e0265d16bbd29ca51e33c9e0c01dc4cec5e83
- https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/cli/src/ui/hooks/atCommandProcessor.ts
- https://github.com/google-gemini/gemini-cli/commit/8b5cb8a6491e17b2dd3ba0cfb49fcfe41c48c4a3
