---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-github-copilot-cli-ga-docs-rewrite-the-sandbox-network-rules-local-network-off-macos-and-linux-egress-forced
source: github-copilot-cli
source_contract: sources/github-copilot-cli.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: medium
evidence:
  - url: https://github.com/github/docs/blob/2c5e31e02c95/content/copilot/concepts/security-governance-and-network-settings/about-cloud-and-local-sandboxes.md?plain=1#L112
    precision: tagged_commit_file
  - url: https://github.com/github/docs/blob/602021b0ba16/content/copilot/how-tos/cloud-and-local-sandboxes/configuring-local-sandbox-settings.md?plain=1#L250-L291
    precision: tagged_commit_file
  - url: https://github.com/microsoft/mxc/blob/v1.0.0/src/mxc-sdk/src/backends/seatbelt/common/profile_builder.rs#L507-L536
    precision: tagged_commit_file
  - url: https://github.com/microsoft/mxc/blob/v1.0.0/docs/backends/seatbelt/seatbelt-backend.md?plain=1#L274-L315
    precision: tagged_commit_file
---
# 2026-10-13-github-copilot-cli-ga-docs-rewrite-the-sandbox-network-rules-local-network-off-macos-and-linux-egress-forced

GA docs rewrite the sandbox network rules: local network off, macOS and Linux egress forced through a local proxy, Windows host rules bypassable. Three statements flipped on 2026-10-07. (a) Egress: on macOS and Linux "the sandbox restricts outbound connections to the local proxy", so programs that ignore proxy settings cannot connect directly. On Windows "the sandbox relies on programs honoring the proxy settings", and programs that ignore them "can connect directly and get around your host rules" (about page L107-L108; config ref L546; how-to L291). From 2026-09-15 until that commit, the docs had said host rules were enforced strictly on every platform. (b) Local network: `Allow local network` is "Turned off by default" in the CLI (how-to L250; config ref L503), unlike the app. (c) macOS self-connect: when a local proxy is active on macOS, turning local access on "lets a command listen on a port, but does not let it connect directly to that port itself", and credential masking for Git and `gh`, which is on by default, always starts that proxy (how-to L264-L266). Two binary changes in window loosened the 1.0.83 localhost cut: on Windows, sandboxed commands can reach localhost when local access is on (1.0.89, L154), and local-network allowlists now include localhost and loopback (1.0.93, L36; config ref L505). The engine explains (c). With a proxy set and outbound denied by default, MXC's Seatbelt builder emits only `(allow network-outbound (remote ip "localhost:<proxy-port>"))` (profile_builder.rs L507-L520), and allowing local network adds only `(allow network-inbound (local ip))` (L530-L536). MXC's own doc warns that opening host loopback would widen outbound to every local port, and that a listener bound to 0.0.0.0 can be reached from the LAN (seatbelt-backend.md L298-L308).

Channel: docs-only (enforcement descriptions in 03b432e6d532); tagged-release for 1.0.89 L154 and 1.0.93 L36. Half: both. Date: 2026-09-28 to 2026-10-07.

Operator consequence: Re-test anything sandboxed that talks to localhost. On macOS with default credential settings, a test suite that starts a server and then connects to it can fail even with Allow local network on. The only case the docs describe where a command can connect to a local server is "no proxy, host rules, or credential masking" (L258), which means turning off Git and `gh` credential injection for that work. Bind listeners to 127.0.0.1, because 0.0.0.0 exposes them to the network. On Windows, treat `allowedHosts` and `blockedHosts` as advisory and keep an OS firewall rule if egress matters. Check `/sandbox policy` on your own hosts before trusting either page; this lane did not run the binary.

## Receipt
- https://github.com/github/docs/blob/2c5e31e02c95/content/copilot/concepts/security-governance-and-network-settings/about-cloud-and-local-sandboxes.md?plain=1#L112
- https://github.com/github/docs/blob/602021b0ba16/content/copilot/how-tos/cloud-and-local-sandboxes/configuring-local-sandbox-settings.md?plain=1#L250-L291
- https://github.com/microsoft/mxc/blob/v1.0.0/src/mxc-sdk/src/backends/seatbelt/common/profile_builder.rs#L507-L536
- https://github.com/microsoft/mxc/blob/v1.0.0/docs/backends/seatbelt/seatbelt-backend.md?plain=1#L274-L315
