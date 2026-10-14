---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-omp-loaded-extensions-can-add-privileged-model-context-and-rewrite-finished-reply-text
source: omp
source_contract: sources/omp.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/can1357/oh-my-pi/commit/45cef58d859f0e9c720f996a6aebe7b3116056c4
    precision: commit
  - url: https://github.com/can1357/oh-my-pi/commit/844fdbf8dfee9234215b824d800214cef65eb089
    precision: commit
  - url: https://github.com/can1357/oh-my-pi/commit/7bcf6ac11106cb33a28ed008e5f8b06d820f300f
    precision: commit
  - url: https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/extensions.md#L642-L655
    precision: tagged_commit_file
  - url: https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/extensions.md#L490
    precision: tagged_commit_file
  - url: https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/extensibility/extensions/wrapper.ts#L243-L325
    precision: tagged_commit_file
---
# 2026-10-13-omp-loaded-extensions-can-add-privileged-model-context-and-rewrite-finished-reply-text

Loaded extensions can add privileged model context and rewrite finished reply text. additionalContext carries handler-authored instructions after tool results at developer/system priority where the provider transport supports it, without changing displayed tool results. Pre-tool context is delivered only for a successful executed call; post-tool context can also add failure guidance. assistant_message handlers may replace finished reply text in history, persistence and the next request. Text-block count, order and positions must stay fixed; non-text blocks remain unchanged, and streamed text is not retracted. These APIs are available to unconditionally loaded project extensions. Tool input rewriting is still approved again before execution, a defense that predates this window.

Channel: tagged-release. Half: both. Date: 2026-09-25 (v18.3.1); 2026-09-29 (v18.4.4).

Operator consequence: Inspect project extensions for additionalContext, addAdditionalContext and assistant_message handlers. The visible tool result is not the whole instruction stream; a streaming client can show text different from persisted history. Use reviewed extensions for policy injection rather than trusting all repository modules.

## Receipt
- https://github.com/can1357/oh-my-pi/commit/45cef58d859f0e9c720f996a6aebe7b3116056c4
- https://github.com/can1357/oh-my-pi/commit/844fdbf8dfee9234215b824d800214cef65eb089
- https://github.com/can1357/oh-my-pi/commit/7bcf6ac11106cb33a28ed008e5f8b06d820f300f
- https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/extensions.md#L642-L655
- https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/extensions.md#L490
- https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/extensibility/extensions/wrapper.ts#L243-L325
