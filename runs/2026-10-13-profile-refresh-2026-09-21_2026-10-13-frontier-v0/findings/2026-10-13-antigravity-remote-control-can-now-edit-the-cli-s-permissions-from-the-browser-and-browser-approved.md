---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-antigravity-remote-control-can-now-edit-the-cli-s-permissions-from-the-browser-and-browser-approved
source: antigravity
source_contract: sources/antigravity.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/google-antigravity/antigravity-cli/blob/1.3.4/CHANGELOG.md?plain=1#L11
    precision: tagged_commit_file
  - url: https://github.com/google-antigravity/antigravity-cli/blob/1.3.4/CHANGELOG.md?plain=1#L20
    precision: tagged_commit_file
  - url: https://github.com/google-antigravity/antigravity-cli/blob/1.2.14/CHANGELOG.md?plain=1#L10
    precision: tagged_commit_file
  - url: https://web.archive.org/web/20261010210146/https://www.antigravity.google/docs/remote-control?tab=cli
    precision: official_docs
---
# 2026-10-13-antigravity-remote-control-can-now-edit-the-cli-s-permissions-from-the-browser-and-browser-approved

Remote Control can now edit the CLI's permissions from the browser, and browser-approved Always allow rules outlived their removal until 1.3.4. 1.3.4 opens the browser's Settings modal for CLI sessions and shows "the settings the CLI actually uses (project and global permissions, queued messages, AI credits, telemetry, and artifact review)" instead of a notice that settings cannot be changed in the browser, and `agy remote-control serve` sessions "now use your saved `settings.json` and save changes made in the browser back to it." Before 1.3.4, `remote-control serve` sessions did not use the saved settings.json; the note does not say what they ran under. The same cut fixes "Always allow" rules approved from a Remote Control browser session "still applying after you removed them in the browser's rules editor or the shared tab of `/permissions`"; those rules are now saved only to the shared `config.json` (the docs place it at `~/.gemini/config/config.json`, read by both the CLI daemon and the desktop editor). Around it: 1.2.14 lets `remote-control start` run on Linux hosts without a systemd user manager, "such as most containers", as a plain background process that does not restart after a crash or start at boot; 1.2.10 unregisters services left by "the old Remote Control installer script" that crash-looped after upgrades; 1.3.3 makes `--remote-control` exit with an error under Application Default Credentials (`AGY_ADC_AUTH`) and hides `/remote-control`. The Remote Control docs page retrieved the same day still tells readers that settings are CLI-controlled. Capability: an operator can manage a remote agent's settings from a phone. Defect: before 1.3.4, removing a browser-approved rule did not revoke it.

Channel: tagged-release (all four cuts prerelease=false); the Remote Control docs page that contradicts 1.3.4 is docs-only. Half: both. Date: 2026-09-24 (1.2.10), 2026-09-30 (1.2.14), 2026-10-10 (1.3.3), 2026-10-13 (1.3.4).

Operator consequence: On 1.3.4 a browser signed in to the same Google account can change a CLI's project and global permissions and its artifact review policy, and for `serve` sessions the change persists to disk. Treat that Google account as part of the permission boundary of every machine that runs Remote Control, and keep `agy remote-control status` in host inventory: on Linux with a systemd user manager the daemon starts at boot; the container fallback is a plain background process without boot or crash restart. If you ran the daemon (`remote-control start`) on a build below 1.3.4, do not assume your saved deny rules or permission mode applied to browser-driven sessions; review those transcripts as you would pre-1.2.6 ones. If you approved "Always allow" from the browser and removed it on a build below 1.3.4, open `~/.gemini/antigravity-cli/settings.json` and `~/.gemini/config/config.json` and delete the leftovers by hand; the note does not say the upgrade cleans them. Ignore the docs line that says settings are CLI-controlled.

## Receipt
- https://github.com/google-antigravity/antigravity-cli/blob/1.3.4/CHANGELOG.md?plain=1#L11
- https://github.com/google-antigravity/antigravity-cli/blob/1.3.4/CHANGELOG.md?plain=1#L20
- https://github.com/google-antigravity/antigravity-cli/blob/1.2.14/CHANGELOG.md?plain=1#L10
- https://web.archive.org/web/20261010210146/https://www.antigravity.google/docs/remote-control?tab=cli
