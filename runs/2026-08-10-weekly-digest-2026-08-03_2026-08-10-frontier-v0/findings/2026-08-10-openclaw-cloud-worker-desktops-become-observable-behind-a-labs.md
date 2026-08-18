---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-10-openclaw-cloud-worker-desktops-become-observable-behind-a-labs
source: openclaw
source_contract: sources/openclaw.yml
window:
  start: 2026-08-03
  end: 2026-08-10
status: accepted
confidence: high
evidence:
  - url: https://github.com/openclaw/openclaw/pull/120727
    precision: merged_pr
---
# 2026-08-10-openclaw-cloud-worker-desktops-become-observable-behind-a-labs

Cloud-worker desktops become observable behind a Labs flag.

The foundation the rest of the Desktop work sits on: Crabbox provisions a loopback VNC desktop at warm time, the Gateway SSH-forwards it to a local Unix socket, an authenticated one-shot-token WebSocket proxy exposes it, and the Control UI renders it with noVNC in a lazy-loaded panel. The `worker.desktop.observe` method is advertised only when the Labs flag is on. Connections are view-only by default with explicit take-control and a server-enforced single controller. The VNC password is read over SSH per tunnel, held in memory only, registered for redaction, and never persisted or placed in a URL. Windows Gateway hosts get a typed unsupported error.

Channel: preview-or-beta. Ancestry: Merge commit 8fdf7570a17ffbbafe825bd379bab858f263b8ca (PR #120727, merged 2026-08-09T16:37:02Z, base main). compare/v2026.8.1-beta.2...8fdf7570a -> status=behind, ahead_by=0. compare/v2026.7.1-2...8fdf7570a -> diverged, ahead_by=12282. Additionally gated at runtime behind the `cloudWorkers.desktop` Labs flag, so even on beta it is off by default.

Operator consequence: Ignore unless you run cloud workers and want to watch them. If you do turn it on, the thing to verify in your own environment is the one-shot token boundary and the single-controller enforcement  --  that is where a 'just let me watch' feature becomes an input path into a leased box.

## Receipt
- https://github.com/openclaw/openclaw/pull/120727
