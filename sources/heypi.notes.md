# heypi Source Notes

Watch heypi as the **governance-shell calibration source**: the human-in-the-loop,
approval, and audit layer that wraps a minimal coding harness for team chat-ops.
It is the structural inverse of Pi. Pi (`@earendil-works/pi-coding-agent`, which
heypi pins as a hard dependency) deliberately refuses to bake governance into its
core — no permission popups, "build your own confirmation flow." heypi is that
flow, sold as a separate framework.

High-signal areas:

- approval mechanics: does an approval *block* the pending tool call, or only
  surface a notification? What is on by default vs opt-in per tool? (As of
  0.2.0-beta.0 the answer is: nothing requires approval by default; the bash
  `approval.command()` classifier is the main automatic gate.)
- audit completeness: heypi's "audit trail" is typed trace event persistence
  surfaced in the admin panel. There is no standalone audit-trail doc. Watch
  whether the trace record is complete, tamper-evident, and on by default (the
  admin panel is disabled by default and binds loopback).
- sandbox runtimes: `just-bash` (default, in-process, network off), Docker,
  Gondolin (`@earendil-works/gondolin`, QEMU-backed VM), and the gated host
  runtimes. Watch what each isolates and what crosses the boundary.
- secret handoff: client-side WebCrypto encryption so secrets never enter chat
  history or the model context — but secrets rest as plaintext-readable files in
  the scoped runtime workspace. Watch whether the at-rest story tightens.
- the Pi dependency pin and any drift: heypi rides Pi's release churn. A Pi
  breaking change can surface as a heypi break.
- the durability boundary: heypi explicitly does NOT replay in-flight turns after
  a crash and fails stale running calls on startup. This is a deliberate
  non-feature; watch whether operators are expected to own recovery.
- channel discipline: heypi ships git tags and a CHANGELOG but NO GitHub Releases;
  0.2.0 is a `-beta.0` pre-release and newest fixes sit post-tag on `main`. Resolve
  channel by tag ancestry, not by date.

Do not over-weight:

- landing-page marketing ("A multiplayer chat agent for your team", "An app you
  own, not a workflow platform"). These phrases appear only on heypi.dev, not in
  the README or docs. Require a doc or commit before treating a governance feature
  as real and enforced.
- the headline "audit trail" / "approvals" as if they bind by default; they are
  primitives the operator wires, with conservative defaults elsewhere.
- early `SOUL.md` references (HN, 2026-05-29): the durable instruction surface was
  renamed `prompt`/`soul` -> `instructions` in 0.2.0-beta.0. Current is
  `instructions.md`.
- star count / popularity. heypi is small and early (about 105 stars at first
  harvest); its editorial value is category position, not adoption.

Role in the watchlist: heypi sits at the intersection of three existing
calibration sources — Pi (minimal harness substrate), OpenClaw (chat-surface
reach, but single-user where heypi is multiplayer), and Paperclip (control-plane:
approvals, accountability). Read it as the test of whether the authority shell can
become its own well-made product rather than a feature bolted onto a harness.
