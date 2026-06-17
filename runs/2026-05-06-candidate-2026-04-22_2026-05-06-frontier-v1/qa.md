# QA Review

Run: `2026-05-06-candidate-2026-04-22_2026-05-06-frontier-v1`

## Study Notes

This run improved concision but still flattened Codex `/goal` into generic
worker-native state.

That is the editorial miss:

```text
Persistent objectives are long-horizon autonomy primitives, not ordinary
memory features.
```

## Iteration Required

The next run should:

- split Codex `/goal` into its own signal
- introduce `long_horizon_state` as a change type
- frame worker goals as mission registers
- add a rule that worker goals must be reconciled against the operator's
  charter and the run's stated scope
- make the goal-weighted run canonical
