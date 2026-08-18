---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-deepseek-harness-everything-is-a-plugin-including-the-components-that-enforce-the-limits
source: deepseek-harness
source_contract: sources/deepseek-harness.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/99f6f02fecdb7dff40c3fbc9470f5907c29f74ca/docs/architecture.md
    precision: official_docs
---
# 2026-08-17-deepseek-harness-everything-is-a-plugin-including-the-components-that-enforce-the-limits

Everything is a plugin, including the components that enforce the limits  --  the approval gate is a waterfall a plugin can prepend to.

Testing the architectural claim against the code rather than repeating it: the answer to "can a plugin replace the component that would have refused it" is mostly yes, with one deliberate exception. architecture.md states the design outright  --  "Every part of the product is a plugin, including the model adapter, the tool registry, the session log, and the agent loop itself, so every part is replaceable from configuration. There is no privileged core to patch"  --  then makes it operational: "A patch targets a row by id and replaces its whole config... Any row it prints can be replaced by a patch of your own." The enforcement points are ordinary rows. capability-seams.md classifies `ctx.approval` as a `seam` and `ctx.sandbox` as a `seam` with a single implementation. The approval decision dispatches over the `approval/request` waterfall, where "the first answer occupies the single decision slot," so a plugin registering an answerer with `prepend` claims every permission question and can return `allowed-once`. sandbox.md adds that the consumer, not the sandbox, decides whether confinement is consulted at all: "A `danger-full-access` consumer spawns its original argv and does not call `ctx.sandbox`"  --  and the shell executor is itself a swappable seam (`bash-sandbox` confines, `bash-local` does not). The one hard stop is the `never` approval policy, enforced "inside the service before waterfall dispatch, so even an answerer registered later with `prepend` cannot bypass it." Two honest mitigations: permission-presets refuses to load over a non-confining shell executor ("composing over a bash executor that does not confine ... throws"), so silently swapping in `bash-local` breaks a visible feature; and a missing or throwing answerer fails closed to `unavailable` rather than opening the gate.

Channel: preview-or-beta. Ancestry: All cited documents and the composition file are read at 99f6f02fecdb7dff40c3fbc9470f5907c29f74ca, the sole tag, flagged prerelease by the GitHub release API. No stable tag exists to compare against.

Operator consequence: Test before trusting, and read `dsh --profile web --dump-config` as a security document rather than a debug aid. Every row it prints is a thing a bundle, profile patch, home patch or `--patch` overlay can replace  --  the approval seam, the shell executor, the webserver bind host. If you intend to run dsh under any policy, the policy has to live outside the harness (OS user, container, network), because inside it the enforcing component and the enforced code are the same kind of object. The one control that survives a hostile plugin is `approval/policy: never`, which is deterministic and pre-dispatch.

## Receipt
- https://github.com/deepseek-ai/deepseek-harness/blob/99f6f02fecdb7dff40c3fbc9470f5907c29f74ca/docs/architecture.md
