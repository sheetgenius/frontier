---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-10-openclaw-auto-updates-stop-being-silent-countdown-hold-1-h-and-an-updates
source: openclaw
source_contract: sources/openclaw.yml
window:
  start: 2026-08-03
  end: 2026-08-10
status: accepted
confidence: high
evidence:
  - url: https://github.com/openclaw/openclaw/pull/120506
    precision: merged_pr
---
# 2026-08-10-openclaw-auto-updates-stop-being-silent-countdown-hold-1-h-and-an-updates

Auto-updates stop being silent: countdown, Hold 1 h, and an Updates settings page.

Automatic updates previously applied the moment they came due, with no warning and no visible schedule. PR #120506 replaces that with a scheduled update campaign: when an update is due the Gateway announces it, waits while there is active work, then runs a one-minute countdown with a 15-minute hard deadline that forces the update through the existing restart-drain and session-recovery path. Operators get a one-shot admin `update.hold` (Hold 1 h) that honestly pushes the deadline back rather than racing the countdown, an 'Update now' button, and a new /settings/updates page showing channel, auto-update policy, campaign state and  --  for git installs  --  the exact pending commit subjects about to land. Dev-channel (git) installs get automatic updates for the first time, pinned to a frozen upstream SHA. Failed applies now clear their campaign instead of leaving the UI stuck on 'Updating...' forever. Non-admins see the page read-only.

Channel: preview-or-beta. Ancestry: Merge commit e3de98a451b480d1e52cd96c62ba850ab2042660 (PR #120506, merged 2026-08-08T18:19:54Z, base main). gh api repos/openclaw/openclaw/compare/v2026.8.1-beta.2...e3de98a45 -> status=behind, ahead_by=0 (contained in the beta tag). compare/v2026.7.1-2...e3de98a45 -> diverged, ahead_by=11942; compare/v2026.6.34...e3de98a45 -> diverged, ahead_by=15095. In no stable tag.

Operator consequence: Test it on the beta channel before it reaches you on stable, because it changes when your gateway restarts. The 15-minute forced deadline means a busy gateway can no longer defer an update indefinitely  --  if you were relying on 'it never restarts because it is always busy', that is over. Source installs running `update.channel: dev` should decide deliberately whether they want the new hourly auto-update, since that path previously never updated itself at all.

## Receipt
- https://github.com/openclaw/openclaw/pull/120506
