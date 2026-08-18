---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-claude-code-managed-settings-gateway-now-fails-boot-on-malformed-policy-instead-of
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: medium
evidence:
  - url: https://code.claude.com/docs/en/changelog#2-1-232
    precision: official_changelog
---
# 2026-08-17-claude-code-managed-settings-gateway-now-fails-boot-on-malformed-policy-instead-of

Managed-settings gateway now fails boot on malformed policy instead of silently matching no one  --  or granting admin.

"Gateway: empty `managed.policies[].match.groups`/`admin.admin_groups` entries and malformed `email_domain` values (empty, or containing `@`, whitespace, or commas) now fail at boot instead of silently matching no one or granting admin access." Both failure directions are named in Anthropic's own words: a policy that matched nobody, and an admin group that granted admin. The same release tightened the gateway's `desktop:` overlay to accept "every released Desktop setting (was 11 hand-listed keys), validated at boot against Desktop's own schema; unknown or invalid keys fail boot", and improved the managed-settings approval dialog to show endpoint URLs and to require explicit approval for server-managed sandbox binary overrides (`sandbox.bwrapPath`, `sandbox.socatPath`, `sandbox.ripgrep`). Adjacent in v2.1.223: "server-delivered settings no longer disable the env block of a machine-local `managed-settings.json` or MDM profile; admin env now merges per key."

Channel: tagged-release. Ancestry: Closed source; npm publish record is the release proof. registry `time[]` gives 2.1.232 = 2026-08-13T21:30:53Z, plain non-prerelease semver, per-version manifest resolves HTTP 200, dist-tag `latest`. Not in `stable` (2.1.226). Changelog only  --  this one has no corroborating docs page, so it stands on a single surface and I have marked confidence accordingly.

Operator consequence: Re-audit your gateway policy file before upgrading, because 2.1.232 turns a silent misconfiguration into a boot failure  --  which is the correct behaviour and will also stop your gateway starting if you have been living with one. The consequential half is `admin.admin_groups`: a malformed entry there previously granted admin rather than denying it, so any organization whose policy file has an empty or comma-containing value should assume its admin set was wider than intended for as long as that file has been deployed. Diff the effective policy against the intended one rather than assuming the fix is purely defensive. The new approval requirement on server-managed sandbox binary overrides is worth keeping strict: those three keys name the binaries the sandbox itself executes.

## Receipt
- https://code.claude.com/docs/en/changelog#2-1-232
