# heypi: final-drafter directives

Profile date: 2026-10-13. Window: 2026-09-21..2026-10-13, inclusive, UTC.

Use the corrected [owning harvest](../../harvest/heypi.primary.md) with its
[crosscheck](../../verify/heypi.crosscheck.md). Preserve the dated profile shape
and primary receipts. Historical correction prose belongs in this research
record; the public body states the current operating rule.

## Must

1. **Scope dependency drift to the optional runtime.** Start the skills-mount case with "If you use the optional just-bash runtime." Its ^3.1.0 range admits 3.6.0; existing consumer locks may resolve differently. The scaffold chooses Docker. With mktemp available and writable staged skills, the new createExclusive method passes the old proxy and can create empty entries inside the mount. Do not imply arbitrary outside-root writes or overwriting existing skill content.

   Evidence: [owning record, sections 11, 15](../../harvest/heypi.primary.md), [template](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/examples/codex-tag/index.ts#L7-L35).

   Merged inputs: [utility U01](../utility.md).

2. **Retain the compatible backup/restore progress.** Add that Cloudflare 0.12.10 fixes intercepted-HTTPS multipart backups above 10 MiB and file recreation after restore. For deployments using these features, validate a bounded backup/restore on the actual caller-owned Worker SDK. heypi does not automatically configure credential-proxy mounts. Keep Pi Durable outside installed heypi; this is compatible upstream progress, not a heypi release.

   Evidence: [owning record, sections 12](../../harvest/heypi.primary.md), [Cloudflare 0.12.10](https://github.com/cloudflare/sandbox-sdk/releases/tag/%40cloudflare/sandbox%400.12.10).

   Merged inputs: [utility U02](../utility.md).

3. **Replace the historical admin take-back with today's rule.** Replace the paragraph headed "The earlier admin warning was wrong," including the blanket withdrawal sentence, with: "The beta.2 admin server requires a bearer token off loopback; its secret-submission route has separate handling." Preserve current host/request qualifications. Do not revive blanket pre-0.3 exposure or credential-rotation advice.

   Evidence: [owning record, sections 17](../../harvest/heypi.primary.md), [Current admin handling](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/admin.ts#L287-L318).

   Merged inputs: [thread T20](../thread.md).


## Should

1. **Make the rebuild cost explicit.** Moving 0.2.x configuration and persistence to 0.3.0-beta.2 requires a rebuild, not an ordinary package update. Keep evaluation-only advice. Pi remains on ^0.79.6, excluding Pi 1.x; an override cannot restore the removed AuthStorage export or install Durable.

   Evidence: [owning record, sections 2, 15](../../harvest/heypi.primary.md), [migration statement](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/CHANGELOG.md#L60-L63).

   Merged inputs: [utility U03](../utility.md).


## Could

1. **Put the optional-runtime scope in the tagline too.** Use "An unchanged heypi beta still needs a dependency audit: its optional just-bash runtime outgrew the read-only skills wrapper." Keep pi-coding-agent as the sole comparison for the actual embedded API and porting decision.

   Evidence: [owning record, sections 11, 15](../../harvest/heypi.primary.md), [section 11 primary source](https://github.com/vercel-labs/just-bash/releases/tag/just-bash%403.6.0), [section 11 primary source](https://github.com/vercel-labs/just-bash/commit/cc35fab4ffdd7498dd45ab6d2247a95b5db551ee), [section 11 primary source](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi-runtime-just-bash/src/index.ts#L26-L64), [section 15 primary source](https://registry.npmjs.org/%40earendil-works%2Fpi-coding-agent/0.79.10).

   Merged inputs: [skeptic S10](../skeptic.md).


## Resolutions

The body scope correction is must; the matching tagline clarification stays could. No new heypi release does not mean resolved dependencies stayed unchanged. The owning harvest refutes blanket historical admin exposure and supports the smaller current rule; it also supports the compatible Cloudflare gains.

