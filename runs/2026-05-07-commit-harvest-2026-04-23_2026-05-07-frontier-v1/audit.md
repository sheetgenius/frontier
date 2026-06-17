# Audit

## Source Window

This run covers public GitHub commits from `2026-04-23T00:00:00Z` through `2026-05-07T23:59:59Z`.

## Harvest Method

Commits were harvested with `gh api --paginate` against the configured GitHub repositories in `sources/index.yml`.

Local raw harvest files were written outside the repo under `/tmp/bitterfrontier-harvest/`.

## Search Bias

The manual scan prioritized commits matching the v0 research facets:

- persistent goals and memory
- permissions, credentials, auth, trust, sandboxing, and secrets
- runtime, browser, desktop, file, and workcell surfaces
- plugins, skills, extensions, MCP, providers, and transports
- gateways, messaging, voice, onboarding, UI, and accessibility
- coordination, roles, cost, liveness, provisioning, and remote execution
- verification, review, evals, telemetry, logs, and evidence

## Editorial Standard

This run avoids social claims and third-party summaries. It uses primary GitHub commits as receipts.

The digest intentionally uses public editorial language: "coding agent", "harness", "memory", "permissions", "visible computer", and "workcell" instead of the heavier internal vocabulary where possible.

## Manual Judgment

This is still a human/model-assisted editorial run. It should be treated as a gold-candidate artifact for shaping the formal machine, not as a fully automated output.
