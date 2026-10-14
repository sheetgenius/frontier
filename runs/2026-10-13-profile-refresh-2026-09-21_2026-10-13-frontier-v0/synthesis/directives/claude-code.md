# Claude Code: final-drafter directives

Profile date: 2026-10-13. Window: 2026-09-21..2026-10-13, inclusive, UTC.

Use the corrected [owning harvest](../../harvest/claude-code.primary.md) with its
[crosscheck](../../verify/claude-code.crosscheck.md). Preserve the dated profile shape
and primary receipts. Historical correction prose belongs in this research
record; the public body states the current operating rule.

## Must

1. **Give unmanaged users an admission action.** After the managed-fleet controls, add the unmanaged branch: inspect claude plugin validate for tool.check, remove unreviewed user mods, or use --safe-mode/disableAllHooks. State that built-in mods remain and validation is not a safety verdict. Preserve independent containment. Do not restore CLAUDE_CODE_ENABLE_FUNCTION_HOOKS=0 as an off switch.

   Evidence: [owning record, sections 1](../../harvest/claude-code.primary.md), [mods administration](https://code.claude.com/docs/en/plugins/mods/admin), [overview](https://code.claude.com/docs/en/plugins/mods/overview).

   Merged inputs: [utility U28](../utility.md).


## Should

1. **Keep the actual grader floor visible.** Retain "Pin graders to 2.1.295 or later and retain containment." Latest/next are 2.1.296 at the cutoff; vendor stable is 2.1.287 and lacks the late-registering-built-in repair. An explicit tools list does not repair that older release.

   Evidence: [owning record, sections 10, 13](../../harvest/claude-code.primary.md), [Released tool-limit repair](https://github.com/anthropics/claude-code/blob/2301018b1f61/CHANGELOG.md?plain=1#L123).

   Merged inputs: [thread T03](../thread.md).

2. **Treat advisory publication as delayed disclosure.** Keep the October Plugin4Shell advisory as disclosure of the fix shipped in 2.1.179 in June. Do not call it a newly repaired October vulnerability. Leave the second GitSpawn path unresolved, with a named current fix or probe as the settling evidence.

   Evidence: [owning record, sections 5](../../harvest/claude-code.primary.md), [Plugin4Shell advisory](https://github.com/anthropics/claude-code/security/advisories/GHSA-pq7j-f95f-qfcv).

   Merged inputs: [thread T04](../thread.md).

3. **Make one native replacement useful immediately.** Put a concrete gain in the initial decision layer: retire AGENTS.md forwarding shims after every fleet pin supports 2.1.281, subject to CLAUDE.local.md precedence and the combined-loader choice; or use onFailure: "block" on policy hooks at 2.1.295+. Hook failure still defaults to continue. These retire exact wrapper functions, not all governance code.

   Evidence: [owning record, sections 7, 14](../../harvest/claude-code.primary.md), [hook release](https://github.com/anthropics/claude-code/releases/tag/v2.1.295), [instruction loader](https://code.claude.com/docs/en/memory#project-instructions).

   Merged inputs: [utility U29](../utility.md).


## Could

No additional could-level edit from these six lenses.

## Resolutions

No factual conflict remains. Latest and vendor stable must stay separate. Mods can answer before the classifier, so native hook progress does not justify claiming every call receives classifier review. No peer paragraph is required; retain the empty comparison list.

