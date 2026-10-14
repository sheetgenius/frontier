# OMP: final-drafter directives

Profile date: 2026-10-13. Window: 2026-09-21..2026-10-13, inclusive, UTC.

Use the corrected [owning harvest](../../harvest/omp.primary.md) with its
[crosscheck](../../verify/omp.crosscheck.md). Preserve the dated profile shape
and primary receipts. Historical correction prose belongs in this research
record; the public body states the current operating rule.

## Must

No additional must-level edit from these six lenses.

## Should

1. **Keep the unresolved successor to one channel sentence.** Add "18.10.4 remains the TypeScript shipping line; the Rust successor is still untagged at its September 4 tip." Keep plan-review work on the shipping line. Do not add a Rust-history section or reuse old startup/memory predictions.

   Evidence: [owning record, sections 8](../../harvest/omp.primary.md), [Unchanged omp2 tip](https://github.com/can1357/oh-my-pi/commit/2f92f3b5aa2035d21c9f016f9ff6350795e5685a).

   Merged inputs: [thread T13](../thread.md).

2. **Put machine-output migration before the integrator upgrade.** Task results became plain text by default in 18.10.2. Enable task.structured before upgrading consumers that require validated results. Eval agent()/workpool() spawns remain structured independently.

   Evidence: [owning record, sections 16](../../harvest/omp.primary.md), [18.10.2 release](https://github.com/can1357/oh-my-pi/releases/tag/v18.10.2), [task defaults](https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/task/settings.ts#L255-L265).

   Merged inputs: [utility U41](../utility.md).

3. **Describe programmable review as delegated plan authority.** After the 18.10.4 plan callback, give the useful case: reviewed extensions can connect remote or policy-based review to the actual decision. Preserve revision before execute, reopening idle review, tier selection and first-answer-wins. This delegates plan review without overriding downstream tool policy; extension admission remains a human authority decision. Keep the Ctrl+Enter tool-approval guard as separate progress.

   Evidence: [owning record, sections 7](../../harvest/omp.primary.md), [shipped review API](https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/extensions.md#L555-L560), [resolution implementation](https://github.com/can1357/oh-my-pi/commit/d40b86cf7d6607fc349545ec67ed321023e53425).

   Merged inputs: [lens L07](../lens.md), [utility U40](../utility.md).

4. **Explain the actual Pi trust-porting difference.** OMP redirects Pi imports to its own copies and its trust shim answers true. Pi 1.2.0's scoped resolver declines undecided protected resources in default headless ask-policy runs. Keep Pi's context/sessionDir exceptions and OMP's downstream tool policy. Three pi-optchat compatibility repairs do not establish blanket Pi 1.x compatibility or import Pi's guard. Retain only pi-coding-agent in compared_with.

   Evidence: [owning record, sections 5, 9](../../harvest/omp.primary.md), [OMP trust shim](https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/extensibility/extensions/runner.ts#L1401-L1404), [import redirection](https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/extension-loading.md#L280), [Pi resolver](https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/core/project-trust.ts#L47-L88).

   Merged inputs: [comparison P03](../comparison.md).


## Could

No additional could-level edit from these six lenses.

## Resolutions

No must-level edit was assigned. The plan callback and tool policy govern different decisions, so the affirmative remote-review use does not weaken the boundary warning. The owner records distinguish OMP's copied API from Pi's actual resolver. The Rust feature remains open.

