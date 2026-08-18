---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-claude-code-remote-control-hardens-into-an-operable-surface-account-switch-kill
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://code.claude.com/docs/en/changelog#2-1-234
    precision: official_changelog
---
# 2026-08-17-claude-code-remote-control-hardens-into-an-operable-surface-account-switch-kill

Remote Control hardens into an operable surface: account-switch kill, permission-mode propagation, and session-identity fixes.

Roughly twenty Remote Control entries landed across the window, and the pattern in them is a feature being made accountable. The governance items: v2.1.222 changed auto-start so "repo-local settings (`.claude/settings.json` or `.claude/settings.local.json`) can no longer turn it on (they can still turn it off); enable it at user scope via `/config`"  --  a checked-in repository file could previously switch on remote access to a developer's machine. v2.1.234: "signing this computer in to a different claude.ai account or organization now stops the running session within seconds and says why, instead of a misleading HTTP 404 hours later." The leak fixes: v2.1.228 fixed "Remote Control `/resume` while connected leaking the resumed conversation's title or history into the connected session"; v2.1.224 fixed "a Remote Control session recreated after its server session expired uploading prior local conversation history into the new session"; v2.1.232 fixed bridge sessions inside a cloud session "inheriting that session's transcript or credentials." The operability items: v2.1.234 propagates permission mode and effort level between phones, claude.ai/code and terminal- or Desktop-hosted sessions in both directions, and v2.1.234 fixed relayed permission previews so credential masking "can no longer hide commands, paths, or destinations from the approver" and previews relay "only to channel servers admitted by the inbound trust gate."

Channel: tagged-release. Ancestry: Closed source; npm publish record is the release proof. The changes span 2.1.224 (2026-08-07T01:36:32Z) through 2.1.234 (2026-08-17T18:19:13Z) in the registry `time[]` map, every one a plain non-prerelease semver published under dist-tag `latest`. Dated to the last release in the span. Changelog is the only surface for most of these individual entries; /docs/en/remote-control is referenced from the Week 32 digest for the auto-start scoping change specifically, which is the one item here with two surfaces.

Operator consequence: Re-audit whether Remote Control is on anywhere you did not choose. The v2.1.222 scoping change is the actionable one for anyone who works in repositories they did not write: before it, a `.claude/settings.json` committed by someone else could enable remote access to your machine, and the fix means you must now enable it at user scope  --  so check whether any of your machines currently has it on and cannot account for why. The v2.1.234 masking fix is the subtler lesson and worth internalising beyond this product: over-aggressive credential redaction had been hiding the command, path or destination from the person being asked to approve it, which is a security control degrading the security decision it exists to protect. If you approve actions from a phone, upgrade to 2.1.234 before trusting what that prompt shows you.

## Receipt
- https://code.claude.com/docs/en/changelog#2-1-234
