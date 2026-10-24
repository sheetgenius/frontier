# OpenCode final-draft directives

Profile date: 2026-10-24. Merged inputs: lens `opencode`; thread `opencode`. Consistency found no cross-profile fact correction. The [owning harvest](../../harvest/opencode.primary.md) controls facts and timestamped selectors. This is new profile intake.

## Must

No additional must correction was identified by the three lenses.

## Should

1. Keep the compatibility paragraph as the first material change after installation choices: "OpenCode 2.1 keeps older sessions readable while changing SDK, event and plugin contracts; test the installed client/server pair before replacing integration glue." Test a saved conversation, tool call/result, compaction and provider switch. Evidence: harvest section 8; [20 October contract change](https://github.com/anomalyco/opencode/commit/acdcdb8dd9f6dcb6f80f268325d9cae2684a67fd), [2.1.4 breaking-change contract](https://github.com/anomalyco/opencode/blob/v2.1.4/CHANGELOG.md#breaking-changes). Backward-readable storage does not preserve public clients.
2. Keep the independent reusable execution host as positive counterevidence to provider-only progress, with the compatibility bill beside it. A supported client/SDK can replace a parallel loop; plugin trust, permissions and external effects remain application responsibilities. Evidence: harvest section 5; [embedding SDK](https://github.com/anomalyco/opencode/blob/v2.1.4/services/www/src/docs/content/build/sdk/index.mdx), [migration contract](https://github.com/anomalyco/opencode/blob/v2.1.4/services/www/src/docs/content/migrate-v1.mdx). Do not imply V2 launched inside this window or manufacture a prior OpenCode profile.
3. Keep optional background compaction in a bounded latency/cost trial, distinct from durable execution. The speculative summary is held in memory, can consume unused inference and can still cause a wait. Keep third-party malware packages distinct from official runtime upgrades and the unconfirmed Console incident mechanism. Evidence: harvest sections 7 and 23; [compaction contract](https://github.com/anomalyco/opencode/blob/v2.1.4/services/www/src/docs/content/compaction.mdx), [one exact malicious-package advisory](https://github.com/advisories/GHSA-9855-prwc-mfp2). The harvest records the complete affected-package inventory and different response paths.

## Could

None.

## Resolution

The lens's reusable-host argument and the thread's compatibility warning belong in one interpretation: a useful native integration can displace glue while requiring client migration. Neither contradicts older stored-session readability. Preserve V2 `@opencode/cli@2.1.4` versus V1 `opencode-ai@1.19.4`, which both provide `opencode`, and the separately observed preview pointers. Dropping the `CLAUDE.md` fallback and retaining controlled `.claude` skill discovery concern different inputs. Keep `compared_with: []`; do not invent symmetry from integration leads.
