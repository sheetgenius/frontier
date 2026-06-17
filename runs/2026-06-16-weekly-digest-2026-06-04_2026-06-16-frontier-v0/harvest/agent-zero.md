# Harvest: Agent Zero (window 2026-06-04 .. 2026-06-16)

coverage: tool_access_ok=true (WebFetch + GitHub REST API; API authoritative for dates/SHAs). nothing_in_window=false but **entire window = a single day, 2026-06-04**: release v1.20 (published 2026-06-04T16:32Z) + 7 commits all authored 06-04 by maintainer 3clyp50. **Zero commits/releases June 5-16** (verified `commits?since=2026-06-05` count 0; releases/latest = v1.20). DATE-TRAP CAUGHT: WebFetch hallucinated year "2024" on the v1.20 page; overridden by API `2026-06-04`. Out-of-window caveat: several v1.20 release-note bullets (secure post-login redirection, document query index reuse, folder attachments, page-connector history replay, OAuth model slots) were authored June 2-3 (out of window) but shipped under the 06-04 tag — EXCLUDED from in-window findings; attributed only the 7 commits authored 06-04.

## Findings

1. **2026-06-04-agent-zero-v1-20-release** (2026-06-04; v1.20) — release/packaging. First post-v1.19 release, 13-item rollup. No breaking changes flagged. Receipt: https://github.com/agent0ai/agent-zero/releases/tag/v1.20 (released_at 2026-06-04T16:32:20Z).

2. **2026-06-04-agent-zero-remote-control-csrf-ws-origin-hardening** (2026-06-04; commit ca4efe6e6) — **security (strongest)**. Active Remote Control (public Tailscale Funnel tunnel surface) URLs normalized to bare scheme://host[:port] before CSRF allowlisting (new helpers/tunnel_origins.py); WS origin validation now trusts ONLY the currently active Remote Control origin (incl. Docker split-process tunnel URLs), rejects unrelated external origins. security: closes; attacker=cross-origin CSRF or WS connection from non-active origin / origin-confusion via path/slash/port variants; enforcement=runtime (validate_ws_origin) + regression tests; no CVE. Receipt: https://github.com/agent0ai/agent-zero/commit/ca4efe6e6 — "Normalize active Remote Control URLs to same-origin values before adding them to CSRF allowlists … trust only the currently active Remote Control origin … preserving rejection for unrelated external origins."

3. **2026-06-04-agent-zero-oauth-dummy-key-gated-on-connection** (2026-06-04; ca4c9306c) — security (credential hygiene). Removed static OAuth API-key placeholder from provider defaults; gated runtime dummy key on connection status — unconnected OAuth providers show blank. security: closes (low; hygiene not exploit); enforcement=runtime. Receipt: https://github.com/agent0ai/agent-zero/commit/ca4c9306c.

4. **2026-06-04-agent-zero-oauth-device-flow-polling-intervals** (2026-06-04; 85e28d079) — reliability (auth). OAuth poller waits provider interval, carries slow_down bumps, respects expiration — fixes GitHub Copilot device-code auth completing. security=none. Receipt: https://github.com/agent0ai/agent-zero/commit/85e28d079.

5. **2026-06-04-agent-zero-oauth-inline-pending-controls** (2026-06-04; 3facd6879) — accessibility (UI). Device-code/manual-callback/setup controls render inline under the provider row. security=none. Receipt: https://github.com/agent0ai/agent-zero/commit/3facd6879.

6. **2026-06-04-agent-zero-file-browser-editable-paths** (2026-06-04; f9d8167a0, v1.20 HEAD) — accessibility (workflow). File-browser path bar supports direct navigation, preserves listing on failed path, default-on remember-last-dir. Operator's inspection window onto the agent's filesystem. security=none. Receipt: https://github.com/agent0ai/agent-zero/commit/f9d8167a0.

7. **2026-06-04-agent-zero-editor-open-and-toolbar** (2026-06-04; 16f724226, 8c6157301) — reliability+accessibility. Manual Editor opens from active project context; stops auto-creating blank Markdown files on open; preview/source toggle + dedicated Save button. State-hygiene fix for the persistent workspace. security=none. Receipt: https://github.com/agent0ai/agent-zero/commit/16f724226.

## Top signals (harvester's pick)
1. remote-control-csrf-ws-origin-hardening — tunnel/remote-access trust boundary (the visible-computer exposure axis).
2. oauth-dummy-key-gated-on-connection — credential-surface hygiene.
3. editor-open-and-toolbar — persistence/cleanup (plugging incidental-state leaks in the never-reset desktop).
4. file-browser-editable-paths — operator visibility onto the agent filesystem.

CAVEAT for digest: whole window is one maintenance day; no capability expansion to computer-access/isolation/subagents in-window. The substantive computer-use/screenshot-durability work is v1.19 (prior cycle, already profiled).
