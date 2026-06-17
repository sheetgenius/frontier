# QA Review

Run: `2026-05-06-goal-weighted-2026-04-22_2026-05-06-frontier-v2`

## Result

This run incorporates the v1 study lesson and is the canonical published
version for the first window.

## Key Improvement

Codex `/goal` is elevated from generic worker-native state to:

```text
worker-native objective register
```

That better reflects its product importance: persistent objectives unlock
ultra-long-horizon work but introduce a new authority question.

## Doctrine Captured

```text
The worker may carry a goal.
The operator owns the charter.
The record maps the two.
```

## Remaining Work

- Create a real Codex `/goal` probe.
- Define `worker_goal` receipt fields.
- Compare how provider-native goals differ from the operator's charter and
  the run's stated scope.
