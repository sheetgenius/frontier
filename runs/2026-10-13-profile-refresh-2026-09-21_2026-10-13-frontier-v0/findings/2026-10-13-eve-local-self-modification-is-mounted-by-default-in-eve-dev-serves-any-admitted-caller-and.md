---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-eve-local-self-modification-is-mounted-by-default-in-eve-dev-serves-any-admitted-caller-and
source: eve
source_contract: sources/eve.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/vercel/eve/blob/eve%400.79.0/docs/guides/self-modification.md?plain=1#L79-L87
    precision: tagged_commit_file
  - url: https://github.com/vercel/eve/commit/aceb298cc31a296636223beaebbe9a1e235d9738
    precision: commit
  - url: https://github.com/vercel/eve/commit/7e4ceb80221fcec27674d6315d61023b26566a90
    precision: commit
  - url: https://github.com/vercel/eve/blob/eve%400.78.0/packages/eve/src/runtime/local-dev-capability.ts#L30-L37
    precision: tagged_commit_file
  - url: https://github.com/vercel/eve/blob/eve%400.78.0/docs/guides/self-modification.md?plain=1#L6-L8
    precision: tagged_commit_file
  - url: https://github.com/vercel/eve/pull/3590
    precision: merged_pr
  - url: https://github.com/vercel/eve/pull/4056
    precision: merged_pr
  - url: https://github.com/vercel/eve/blob/eve%400.78.0/packages/eve/src/internal/nitro/host/start-development-server.ts#L457-L458
    precision: tagged_commit_file
---
# 2026-10-13-eve-local-self-modification-is-mounted-by-default-in-eve-dev-serves-any-admitted-caller-and

Local self-modification is mounted by default in eve dev, serves any admitted caller, and installs registry items without approval. The relaxed guard flagged after the last window stayed and widened. 0.64.0 made local self-modification depend on `eve dev` host facilities instead of request provenance. The PR says operators "must protect access to the server", that "direct remote and forwarded callers alike can exercise self-modification when admitted to the agent", and that `localDev()` "is a permissive development-server fallback, not individual caller authentication". 0.65.0 mounts the self-modification subagent in every `eve dev` server unless you pass `--no-default-extensions` (self-modification.md L6, L81-L87). 0.69.0 removed the `registry_add` approval in both local and deployed modes as "a deliberate behavior change". 0.73.0 split the extension: `eve/self-modification` (now an alias of `/local`) rejects the `deployed` option, and deployed proposals come from `eve/self-modification/remote`, which still requires an `authorize` function (`remote/config.ts` L83-L95) and opens draft pull requests only (`github-publisher.ts` L137-L138, L306). Eve's fallback is 127.0.0.1; explicit host or Nitro hostname takes precedence. Actual network binding was not tested, and the CLI table still says all interfaces.

Channel: tagged-release. Half: both. Date: 2026-09-22 (eve@0.64.0) to 2026-10-07 (eve@0.73.0).

Operator consequence: Treat access to an admitted development host as authority to edit authored tools, based on source rather than an executed remote-code-execution demonstration. Protect server access and use `eve dev --no-default-extensions` where others can reach it. That flag disables bundled defaults, not explicit mounts: also inspect and disable unwanted local self-modification under `agent/extensions/`. Verify explicit host and Nitro hostname configuration rather than assuming the loopback fallback wins. Staying on 0.63.0 leaves approval fixes absent. Migrate deployed self-modification to `eve/self-modification/remote`; its authorize callback and draft-PR review remain deliberate boundaries.

## Receipt
- https://github.com/vercel/eve/blob/eve%400.79.0/docs/guides/self-modification.md?plain=1#L79-L87
- https://github.com/vercel/eve/commit/aceb298cc31a296636223beaebbe9a1e235d9738
- https://github.com/vercel/eve/commit/7e4ceb80221fcec27674d6315d61023b26566a90
- https://github.com/vercel/eve/blob/eve%400.78.0/packages/eve/src/runtime/local-dev-capability.ts#L30-L37
- https://github.com/vercel/eve/blob/eve%400.78.0/docs/guides/self-modification.md?plain=1#L6-L8
- https://github.com/vercel/eve/pull/3590
- https://github.com/vercel/eve/pull/4056
- https://github.com/vercel/eve/blob/eve%400.78.0/packages/eve/src/internal/nitro/host/start-development-server.ts#L457-L458
