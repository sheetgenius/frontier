---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-github-copilot-cli-1-0-93-opens-local-sandboxing-to-every-user-it-stays-off-by-default-and-a-server-managed
source: github-copilot-cli
source_contract: sources/github-copilot-cli.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/github/copilot-cli/blob/a3f560eca2c0/changelog.md?plain=1#L42
    precision: tagged_commit_file
  - url: https://github.com/github/docs/commit/03b432e6d532
    precision: commit
  - url: https://github.com/github/docs/blob/602021b0ba16/content/copilot/concepts/security-governance-and-network-settings/about-cloud-and-local-sandboxes.md?plain=1#L42-L64
    precision: tagged_commit_file
  - url: https://github.com/github/docs/blob/602021b0ba16/content/copilot/concepts/security-governance-and-network-settings/about-cloud-and-local-sandboxes.md?plain=1#L116-L118
    precision: tagged_commit_file
  - url: https://github.com/github/docs/blob/602021b0ba16/content/copilot/reference/enterprise-administrators/enterprise-managed-settings.md?plain=1#L351-L363
    precision: tagged_commit_file
  - url: https://github.com/microsoft/mxc/releases/tag/v1.0.0
    precision: github_release
  - url: https://github.com/github/docs/blob/602021b0ba16/content/copilot/how-tos/cloud-and-local-sandboxes/configuring-local-sandbox-settings.md?plain=1#L136-L147
    precision: tagged_commit_file
---
# 2026-10-13-github-copilot-cli-1-0-93-opens-local-sandboxing-to-every-user-it-stays-off-by-default-and-a-server-managed

1.0.93 opens local sandboxing to every user; it stays off by default, and a server-managed requirement can still be declined. 1.0.93 makes "Command sandboxing ... available to all users via /sandbox and --sandbox" (L42); until then the CLI docs called it experimental. GA did not turn it on. The docs say "Local sandboxing is turned off by default", and until you enable it commands "can read, write, and delete wherever you can, reach any network your machine can reach, and use your credentials without restriction" (about page L42; `sandbox.enabled` defaults to `false`, cli-config-dir-reference.md L499). The GA docs also say what happens on a host that cannot sandbox. A user's saved preference is switched off for that session with a notice. "A server-managed request to enable sandboxing is declined unless effective managed settings also set `sandbox.failIfUnavailable` to `true`". Device-managed settings (MDM, a managed-settings file) still enforce, so commands fail instead of running unsandboxed (L116-L118; enterprise page L352, L363). The CLI's built-in file tools are not OS-sandboxed; they check the policy in software "on a best-effort basis" (L64). Platform floor: Windows 11 25H2 with KB5124010 or 26H1 with KB5124006, and on Linux bwrap 0.5.0 or later plus slirp4netns ([local-sandboxing-prereqs.md](https://github.com/github/docs/blob/602021b0ba16/data/reusables/cli/local-sandboxing-prereqs.md)). Local sandboxing is included in the seat, while cloud sandboxes stay public preview and metered ([billing page](https://github.com/github/docs/blob/602021b0ba16/content/billing/concepts/product-billing/cloud-and-local-sandboxes.md)). Marketing, kept separate: the 2026-10-07 github.blog changelog post announces GA for the CLI, the app and VS Code Agent Host, and it mentions neither the default nor any minimum version.

Channel: tagged-release (availability, changelog L42); docs-only (default and enforcement rules in the GA docs). Half: both. Date: 2026-10-07.

Operator consequence: Try it, on purpose: GA means available, not on. Run `/sandbox enable`, or `copilot --sandbox -p ...` per CI job, and confirm with `/sandbox status`. Admins who want the sandbox to bind must set `sandbox.enabled: true` and `sandbox.failIfUnavailable: true`, plus `allowBypass: false` if nobody should opt out. A server-managed `enabled: true` on its own lets unsupported hosts run unsandboxed: older Windows builds, or Linux without bwrap or slirp4netns. Deliver the requirement through the device channel. Human attention moves from approving commands one at a time to setting policy once and judging bypass prompts; the docs distinguish a bypass approved for one attempt from an explicit session-wide opt-out when policy permits it (configuring-local-sandbox-settings.md L136-L147). Managed sandbox settings also carry a documented CLI minimum of 1.0.93 at the cutoff; see the new minimum-version item.

## Receipt
- https://github.com/github/copilot-cli/blob/a3f560eca2c0/changelog.md?plain=1#L42
- https://github.com/github/docs/commit/03b432e6d532
- https://github.com/github/docs/blob/602021b0ba16/content/copilot/concepts/security-governance-and-network-settings/about-cloud-and-local-sandboxes.md?plain=1#L42-L64
- https://github.com/github/docs/blob/602021b0ba16/content/copilot/concepts/security-governance-and-network-settings/about-cloud-and-local-sandboxes.md?plain=1#L116-L118
- https://github.com/github/docs/blob/602021b0ba16/content/copilot/reference/enterprise-administrators/enterprise-managed-settings.md?plain=1#L351-L363
- https://github.com/microsoft/mxc/releases/tag/v1.0.0
- https://github.com/github/docs/blob/602021b0ba16/content/copilot/how-tos/cloud-and-local-sandboxes/configuring-local-sandbox-settings.md?plain=1#L136-L147
