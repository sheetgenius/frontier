# Hermes + Grok X social-discovery setup

This runbook wires one recurring step of the Bitter Frontier cycle: driving the
[Hermes agent](https://hermes-agent.nousresearch.com/docs/) and its web/X search
tools on Grok, using a SuperGrok or X Premium+ subscription, to harvest public
X/social signals as discovery leads for the watchlist.

It is operational plumbing, not reader-facing prose. It stays in `docs/` and
`ops/`, never in `content/`.

## The one rule that governs this lane

**Discovery only. Leads, never receipts.** Nothing Grok or X produces here may
become a finding, signal, digest, or profile until it clears the relevant source
contract's evidence floor against a primary source. The evidence rules,
run shape, and cross-check discipline live in
`docs/x-social-harvest-workflow.md` and `docs/deep-social-research-loop.md`. This
document only covers how to stand up the tool that feeds them.

A social post can tell you where to look. It cannot tell an operator to upgrade,
migrate, or trust a feature. That is the whole reason this lane is quarantined
from the receipted record.

## The access path, and its two known limits

We drive Grok through Hermes' `xai-oauth` provider, which authenticates against a
SuperGrok or X Premium+ **subscription**, not a metered xAI API key. That choice
has two consequences worth stating up front, because both bite exactly where an
automated cycle is weakest:

1. **The subscription catalog is not the API catalog.** Grok 4.5 and other newest
   models are on the metered API; the OAuth surface exposes an older, cache-derived
   list. Per the
   [xAI Grok OAuth guide](https://hermes-agent.nousresearch.com/docs/guides/xai-grok-oauth),
   known chat models include `grok-build-0.1` (auto-selected on login),
   `grok-4.3`, and the `grok-4.20-0309-*` reasoning variants. "Latest" is whatever
   the live `models.dev` cache exposes, so we select the best model actually
   present rather than hardcoding a version. Run `ops/hermes/grok-harvest.sh
   models` to see the current list.
2. **A valid subscriber can still be refused.** The same guide warns that xAI
   "enforces its own allowlist on the OAuth API surface and has been seen to reject
   standard SuperGrok subscribers with `HTTP 403`" even with an active
   subscription. The harvest script treats a 403 as a degraded lane, not a cycle
   failure: it records the gap and lets the primary-source harvest proceed without
   the social lane.

If you later want the newest model or a hard reliability guarantee for unattended
runs, the metered API key is the alternative. This runbook deliberately does not
use it, per the current operating choice to run on the existing X subscription.

## Prerequisites

- Hermes Agent installed and `hermes` on your PATH.
- An active SuperGrok or X Premium+ subscription on the account you will authorize.
- `curl` and `jq` available (the harvest script uses both).

## One-time setup

1. Authenticate Hermes to Grok over the subscription OAuth device-code flow:

   ```bash
   hermes auth add xai-oauth
   ```

   Approve access in the browser with your SuperGrok or X Premium+ account. The
   refresh token is stored under `~/.hermes/`. It never enters this repo.

2. Point the agent's model at the subscription provider. Either run
   `hermes model` interactively, or set the keys directly:

   ```bash
   hermes config set model.provider xai-oauth
   hermes config set model.default grok-4.20-0309-reasoning
   ```

   `ops/hermes/config.template.yaml` shows the shape of the resulting
   `~/.hermes/config.yaml`. It is a template with no credentials; the live config
   lives in your home directory, not here.

3. Confirm the wiring end to end:

   ```bash
   ops/hermes/grok-harvest.sh doctor
   ```

   `doctor` checks that `hermes` is present, the config exists, the gateway is
   reachable, and a one-token probe returns `200`. A `403` means the xAI allowlist
   rejected the subscriber (see limit 2 above); the lane is unavailable this cycle.

## Per-cycle run

1. Start the Hermes agent API server (the full agent, with its web/X search
   tools, over an OpenAI-compatible endpoint). Per the
   [API server docs](https://hermes-agent.nousresearch.com/docs/user-guide/features/api-server)
   it binds `127.0.0.1:8642` by default; override with `API_SERVER_HOST` /
   `API_SERVER_PORT`.

   ```bash
   ops/hermes/grok-harvest.sh gateway   # wraps 'hermes gateway'; leave it running
   ```

   The request `model` field on this endpoint is ignored: the model is whatever
   `~/.hermes/config.yaml` selects, so provider selection is a config act, not a
   per-request one.

2. In another shell, harvest one source into an `x-social-harvest` run:

   ```bash
   ops/hermes/grok-harvest.sh harvest codex 2026-07-02 2026-07-21
   ```

   This drives the agent to search public X for maintainer intent, adoption,
   ecosystem tension, and unverified feature chatter about that source in the
   window, and writes a candidate-claim file under
   `runs/<date>-x-social-harvest-<window>-frontier-v0/harvest/<source>.raw.md`.

3. Hand the raw harvest to the cross-check pass in
   `docs/x-social-harvest-workflow.md`: keep only exact public post URLs with
   resolved dates, mark every product or version claim `needs_primary_crosscheck`,
   and promote nothing until a primary source clears it.

## The secret boundary

- No credentials in this repo, ever. The OAuth refresh token lives in
  `~/.hermes/` and is managed by Hermes. This script and template never read,
  write, log, or print it.
- Keep the gateway on loopback. It accepts any bearer token and has no auth of
  its own, so a non-local bind exposes your subscription to the network.
- Do not paste raw API payloads, private prompts, session IDs, or local paths
  into public run artifacts, per the workflow doc.

## Where this plugs into the cycle

The `frontier-cycle` skill's harvest step names this as an optional
social-discovery lane. It runs alongside, never instead of, the primary-source
harvest, and it is subject to the same "released is not merged" and
receipt-on-the-claim-bearing-words discipline the moment any lead is considered
for promotion.

## Primary sources for this setup

- xAI Grok OAuth guide: https://hermes-agent.nousresearch.com/docs/guides/xai-grok-oauth
- Hermes API server: https://hermes-agent.nousresearch.com/docs/user-guide/features/api-server
- Hermes subscription proxy (for sharing the sub with other tools, not needed to drive Hermes itself): https://hermes-agent.nousresearch.com/docs/user-guide/features/subscription-proxy
- xAI pricing and API-versus-subscription distinction: https://docs.x.ai/grok/faq
