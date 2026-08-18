# Hermes + Grok X social-discovery setup

> **Superseded 2026-08-18.** The lane now calls the `grok` CLI directly through
> `ops/grok/x-sweep.sh`, on `grok-4.6` at `xhigh` effort, authenticated to
> grok.com over OIDC. Same subscription rule, same discovery-only rule, one less
> moving part. The reason for the change is wall-clock: a Hermes one-shot took 20
> to 40 minutes and had to be serialized, which is why the cycle was built around
> keeping one call warm in the background. A direct call returns in seconds, so
> that whole scheduling constraint goes away. This runbook is kept because
> Hermes is itself a watched source and because the prompt mechanics below were
> learned the hard way and still apply.
>
> One new trap, learned immediately: do not pass `--json-schema` to a sweep. The
> model satisfies the schema on its first turn without ever running a search and
> returns a perfectly well-formed empty result. Pin the enums in the prompt and
> parse the blocks afterwards instead.

This runbook wires one recurring step of the Bitter Frontier cycle: the loop drives
the [Hermes agent](https://hermes-agent.nousresearch.com/docs/) as a one-shot
sub-agent that digs public X/social signals on Grok, using a SuperGrok or X
Premium+ subscription. Its output is discovery leads for the watchlist.

It is operational plumbing, not reader-facing prose. It lives in `docs/` and
`ops/`, never in `content/`. The short bootstrap is mirrored in the README so a
fresh clone can stand the lane up in four commands.

## The one rule that governs this lane

**Discovery only. Leads, never receipts.** Nothing Grok or X produces here may
become a finding, signal, digest, or profile until it clears the relevant source
contract's evidence floor against a primary source. The evidence rules, run shape,
and cross-check discipline live in `docs/x-social-harvest-workflow.md` and
`docs/deep-social-research-loop.md`. This document only covers standing up the tool
that feeds them.

A social post tells you where to look. It cannot tell an operator to upgrade,
migrate, or trust a feature. That is why this lane is quarantined from the
receipted record even though it runs every cycle.

## How the loop drives it

The orchestrating agent (the one running the cycle) drives Hermes as a subordinate
one-shot agent. `hermes -z "<prompt>"` is Hermes' purest headless entry point:
one prompt in, the agent's final text out, nothing else on stdout. The agent runs
its full toolset (web and X search) on Grok and returns the leads.
`ops/hermes/grok-harvest.sh harvest <source>` wraps that call for one watched
source and writes the result into an `x-social-harvest` run.

You do not need the HTTP gateway for this. `hermes gateway run` (an
OpenAI-compatible server on `127.0.0.1:8642`) is only useful if you want a
*different* application to borrow the subscription; driving Hermes from the loop
is a plain `hermes -z` call.

## The access path, and what to watch

We drive Grok through Hermes' `xai-oauth` provider, which authenticates against a
SuperGrok or X Premium+ **subscription**, not a metered xAI API key.

**The model catalog is live, so do not hardcode a version.** Hermes derives the
chat catalog from an on-disk `models.dev` cache, and new xAI releases appear once
that cache refreshes. The
[xAI Grok OAuth guide](https://hermes-agent.nousresearch.com/docs/guides/xai-grok-oauth)
lists older entries (`grok-build-0.1`, `grok-4.3`, the `grok-4.20-0309-*`
variants), but that list goes stale: verified on 2026-07-22 with Hermes v0.19.0,
`grok-4.5` was offered by `hermes model` and served normally over the subscription.
Run `hermes model` and take the best model the catalog actually shows you.

**A valid subscriber can still be refused.** xAI enforces its own allowlist on the
OAuth API surface and has been reported to reject active SuperGrok subscribers with
`HTTP 403`. Not encountered on this account as of 2026-07-22, but treat it as a
live failure mode: `grok-harvest.sh` classifies a 403 as a degraded lane rather
than a cycle failure, records the gap, and lets the primary-source harvest proceed.

The metered xAI API key remains the alternative if the subscription surface ever
becomes unreliable for unattended runs. This runbook deliberately runs on the
existing X subscription per the current operating choice.

## Bootstrap (fresh machine)

Hermes installs globally, not into this repo. The installer clones to
`~/.hermes/`, puts the binary at `~/.local/bin/hermes`, uses `sudo` for optional
system packages, and appends `~/.local/bin` to your shell rc. Prerequisite on
non-Windows is Git (the installer brings Python 3.11, Node 22, ripgrep, ffmpeg).

```bash
# 1. Install Hermes (system-wide; needs an interactive shell, may prompt for sudo)
curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash
exec "$SHELL" -l                              # reload so `hermes` is on PATH

# 2. Authenticate Grok over the subscription OAuth device-code flow (needs a
#    browser and your SuperGrok / X Premium+ login)
hermes auth add xai-oauth --type oauth        # or: hermes model  (pick "xAI Grok OAuth")

# 3. Select the model from the OAuth catalog
hermes model                                  # choose a grok-4.20-0309-* reasoning variant

# 4. Confirm the lane end to end
ops/hermes/grok-harvest.sh doctor
```

`doctor` runs `hermes doctor` (Hermes' own environment check) and then a one-shot
Grok probe. A `403`/allowlist refusal reports the lane as degraded (see limit 2).
The OAuth refresh token is stored under `~/.hermes/`; it never enters this repo.
`ops/hermes/config.template.yaml` shows the shape of `~/.hermes/config.yaml`.

## Per-cycle run

```bash
# Dig one source over the reporting window. Repeat per source, or let the
# frontier-cycle harvest step call it.
ops/hermes/grok-harvest.sh harvest codex 2026-07-02 2026-07-21
```

This drives `hermes -z` with a discovery prompt and writes candidate claims to
`runs/<date>-x-social-harvest-<window>-frontier-v0/harvest/<source>.raw.md`. Then
hand the raw harvest to the cross-check pass in `docs/x-social-harvest-workflow.md`:
keep only exact public post URLs with resolved dates, mark every product or version
claim `needs_primary_crosscheck`, and promote nothing until a primary source clears
it.

## The secret boundary

- No credentials in this repo, ever. The OAuth refresh token lives in `~/.hermes/`
  and is managed by Hermes. This script and template never read, write, log, or
  print it.
- If you ever run `hermes gateway run`, keep it on loopback: the endpoint accepts
  any bearer token and has no auth of its own, so a non-local bind exposes your
  subscription to the network.
- Do not paste raw API payloads, private prompts, session IDs, or local paths into
  public run artifacts, per the workflow doc.

## Primary sources for this setup

- Install: https://hermes-agent.nousresearch.com/docs/getting-started/installation/
- CLI commands (`hermes -z`, `auth add`, `model`, `doctor`, `gateway`): https://hermes-agent.nousresearch.com/docs/reference/cli-commands
- xAI Grok OAuth: https://hermes-agent.nousresearch.com/docs/guides/xai-grok-oauth
- xAI pricing and the API-versus-subscription distinction: https://docs.x.ai/grok/faq
