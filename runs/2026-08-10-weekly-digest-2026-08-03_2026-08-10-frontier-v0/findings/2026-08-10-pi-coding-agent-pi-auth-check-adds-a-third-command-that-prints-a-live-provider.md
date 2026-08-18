---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-10-pi-coding-agent-pi-auth-check-adds-a-third-command-that-prints-a-live-provider
source: pi-coding-agent
source_contract: sources/pi-coding-agent.yml
window:
  start: 2026-08-03
  end: 2026-08-10
status: accepted
confidence: high
evidence:
  - url: https://github.com/earendil-works/pi/blob/v0.84.2/packages/coding-agent/src/cli/auth-command.ts
    precision: official_docs
---
# 2026-08-10-pi-coding-agent-pi-auth-check-adds-a-third-command-that-prints-a-live-provider

`pi auth check` adds a third command that prints a live provider credential to stdout.

v0.84.1 adds `pi auth check --provider <p> [--model <m>] [--json] [--credentials] [--no-refresh]`, a credential preflight (issue #7152). The help text in `auth-command.ts` at v0.84.2 states: "Checks refresh expired OAuth credentials by default; --no-refresh prevents this. --credentials emits the credential, or includes it in JSON output." This joins the two commands added on 2026-07-27 (commit 99e34013, "feat: auth print (#7168)", which `gh api compare/v0.83.0...99e34013` shows as behind/ancestor of v0.83.0): `pi auth print-api-key` and `pi auth print-bearer-token`. The test file `test/credential-print.test.ts` at v0.84.2 confirms behaviour: `resolveCredentialForPrint` resolves a stored API key to plaintext, extracts a bearer token out of an `Authorization` header, and  --  for an expired OAuth entry  --  calls the provider's `refresh` and prints the freshly minted token, persisting it back to storage.

Channel: tagged-release. Ancestry: Commit a261366bde90c24826eb77bfc600f1bb62ad36e2 ("feat(coding-agent): add auth preflight", authored 2026-08-06T17:43:52Z). `gh api repos/earendil-works/pi/compare/v0.84.1...a261366b` returned status=behind, behind_by=13  --  ancestor of the v0.84.1 tag. `gh api repos/earendil-works/pi/compare/v0.84.0...a261366b` returned status=ahead, ahead_by=17  --  not in v0.84.0. v0.84.1 is stable: prerelease=false, draft=false, published 2026-08-07T06:07:00Z.

Operator consequence: Watch, and treat it as a design decision to plan around. The capability is legitimate  --  a preflight that tells you whether credentials will resolve before a long unattended run is genuinely useful, and `--no-refresh` lets you check without minting. But it also means a third command surface can print a live secret, including one refreshed on demand from an expired OAuth grant. See the carry-forward answer: none of the three is gated from Pi's own shell tool. If you share a host or a container with an agent session, the mitigation is process isolation and short-lived credentials, not a Pi-side flag.

## Receipt
- https://github.com/earendil-works/pi/blob/v0.84.2/packages/coding-agent/src/cli/auth-command.ts
