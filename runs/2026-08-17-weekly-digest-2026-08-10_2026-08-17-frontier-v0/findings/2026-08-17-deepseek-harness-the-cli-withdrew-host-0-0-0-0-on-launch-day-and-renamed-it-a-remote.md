---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-deepseek-harness-the-cli-withdrew-host-0-0-0-0-on-launch-day-and-renamed-it-a-remote
source: deepseek-harness
source_contract: sources/deepseek-harness.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://github.com/deepseek-ai/deepseek-harness/commit/0633add19d
    precision: commit
---
# 2026-08-17-deepseek-harness-the-cli-withdrew-host-0-0-0-0-on-launch-day-and-renamed-it-a-remote

The CLI withdrew --host 0.0.0.0 on launch day and renamed it a remote-code-execution exposure.

Until commit 6cbf927e0a (2026-08-13T06:54:15Z) the web command advertised LAN serving in its own help text: `--option('--host <host>', 'bind host; pass 0.0.0.0 to reach it from another machine')` and the worked example `dsh --profile web --host 0.0.0.0    reach it from another machine on the LAN`. That commit deleted both lines and turned the flag into a hard usage error. Sixteen minutes later commit 0633add19d rewrote the error text to say why. At the tag, packages/bundle/web-app/src/startup.ts reads: `if (options.host === '0.0.0.0') { program.error('error: --host 0.0.0.0 is intentionally not supported yet for safety: it would expose remote code execution to the network; use 127.0.0.1 instead') }`. The CLI reference repeats it. Note the guard sits only in the flag parser. docs/subsystems/web-server.md still documents the webserver's `host` config as accepting `'127.0.0.1' | '0.0.0.0'`, and the shipped web composition sets that host in an ordinary Cordis row (`- id: webserver ... config: host: !!js ctx.webStartup.host ?? '127.0.0.1'`) that architecture.md says any patch may replace.

Channel: preview-or-beta. Ancestry: Both commits are ancestors of the only tag: `gh api repos/deepseek-ai/deepseek-harness/compare/dsh-v0.1.0-rc.7...6cbf927e0a` returns `"status":"behind", "ahead_by":0`, and the same for `0633add19d`. That tag is a prerelease, so the change has shipped only to preview.

Operator consequence: Re-audit. If anyone stood dsh up on a LAN before 2026-08-13 by following the flag's own help text, they are serving remote code execution to that network and should stop today: bind loopback and reach it over an SSH tunnel. Do not treat the new error as a control  --  it guards one flag, not the port. The webserver row is patchable config, so a `cordis.patch.yml` overlay or any bundle layered above the shipped one can bind 0.0.0.0 without touching the CLI.

## Receipt
- https://github.com/deepseek-ai/deepseek-harness/commit/0633add19d
