---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-heypi-just-bash-3-6-0-bypasses-heypi-s-read-only-skills-proxy-with-createexclusive
source: heypi
source_contract: sources/heypi.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/vercel-labs/just-bash/releases/tag/just-bash%403.6.0
    precision: github_release
  - url: https://github.com/vercel-labs/just-bash/commit/cc35fab4ffdd7498dd45ab6d2247a95b5db551ee
    precision: commit
  - url: https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi-runtime-just-bash/src/index.ts#L26-L64
    precision: tagged_commit_file
  - url: https://github.com/vercel-labs/just-bash/blob/7537a260e38648e8998db7a95504102ad80b0194/packages/just-bash/src/commands/mktemp/mktemp.ts#L407-L417
    precision: tagged_commit_file
  - url: https://github.com/vercel-labs/just-bash/blob/7537a260e38648e8998db7a95504102ad80b0194/packages/just-bash/src/fs/create-exclusive.ts#L38-L49
    precision: tagged_commit_file
  - url: https://github.com/vercel-labs/just-bash/blob/7537a260e38648e8998db7a95504102ad80b0194/packages/just-bash/src/fs/mountable-fs/mountable-fs.ts#L407-L437
    precision: tagged_commit_file
  - url: https://github.com/vercel-labs/just-bash/blob/7537a260e38648e8998db7a95504102ad80b0194/packages/just-bash/src/fs/read-write-fs/read-write-fs.ts#L714-L771
    precision: tagged_commit_file
  - url: https://registry.npmjs.org/%40hunvreus%2Fheypi-runtime-just-bash/0.3.0-beta.2
    precision: official_docs
  - url: https://registry.npmjs.org/just-bash/3.6.0
    precision: official_docs
---
# 2026-10-13-heypi-just-bash-3-6-0-bypasses-heypi-s-read-only-skills-proxy-with-createexclusive

just-bash 3.6.0 bypasses heypi's read-only skills proxy with createExclusive. The new mktemp command makes unique private temporary files/directories possible, using the newly added createExclusive filesystem method. heypi's skills mount is a proxy around ReadWriteFs that blocks ten named mutators and binds every other method directly to the underlying filesystem. createExclusive is absent from that list. mktemp calls the helper, MountableFs delegates to the mounted proxy, and ReadWriteFs creates the host entry. When mktemp is available and the service account can write the staged skills directory, this source path permits empty file or directory creation inside a mount described as read-only. This is source-traced dependency drift despite no heypi release, not an executed exploit; it does not establish overwriting existing skills or arbitrary outside-root writes.

Channel: tagged-release just-bash 3.6.0, eligible under heypi beta adapter ^3.1.0; no heypi fix. Half: both. Date: 2026-10-01 (3.6.0 release); introduction committed 2026-09-27T21:16:32Z.

Operator consequence: Inspect the installed just-bash version and re-audit heypi's wrapper against the full current filesystem mutation API. Repair or replace that boundary and validate that temporary-entry creation is refused in /agent/skills before relying on read-only behavior. Account for service-account permissions and command availability. Keep the upstream hard-link and parser fixes; downgrading to heypi's vulnerable 3.1.0 lock is not an adequate mitigation. The human cost is now dependency-boundary review, not merely watching heypi tags.

## Receipt
- https://github.com/vercel-labs/just-bash/releases/tag/just-bash%403.6.0
- https://github.com/vercel-labs/just-bash/commit/cc35fab4ffdd7498dd45ab6d2247a95b5db551ee
- https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi-runtime-just-bash/src/index.ts#L26-L64
- https://github.com/vercel-labs/just-bash/blob/7537a260e38648e8998db7a95504102ad80b0194/packages/just-bash/src/commands/mktemp/mktemp.ts#L407-L417
- https://github.com/vercel-labs/just-bash/blob/7537a260e38648e8998db7a95504102ad80b0194/packages/just-bash/src/fs/create-exclusive.ts#L38-L49
- https://github.com/vercel-labs/just-bash/blob/7537a260e38648e8998db7a95504102ad80b0194/packages/just-bash/src/fs/mountable-fs/mountable-fs.ts#L407-L437
- https://github.com/vercel-labs/just-bash/blob/7537a260e38648e8998db7a95504102ad80b0194/packages/just-bash/src/fs/read-write-fs/read-write-fs.ts#L714-L771
- https://registry.npmjs.org/%40hunvreus%2Fheypi-runtime-just-bash/0.3.0-beta.2
- https://registry.npmjs.org/just-bash/3.6.0
