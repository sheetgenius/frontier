---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-gemini-cli-build-file-tool-gates-reach-stable-and-override-yolo
source: gemini-cli
source_contract: sources/gemini-cli.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/google-gemini/gemini-cli/releases/tag/v0.61.0
    precision: github_release
  - url: https://github.com/google-gemini/gemini-cli/pull/29250
    precision: merged_pr
  - url: https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/policy/policy-engine.ts#L903-L956
    precision: tagged_commit_file
  - url: https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/utils/buildFileUtils.ts#L14-L71
    precision: tagged_commit_file
  - url: https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/policy/policies/yolo.toml#L50-L56
    precision: tagged_commit_file
  - url: https://github.com/google-gemini/gemini-cli/blob/v0.63.0/packages/core/src/policy/policy-engine.test.ts#L4290-L4335
    precision: tagged_commit_file
  - url: https://github.com/google-gemini/gemini-cli/blob/v0.63.0/packages/core/src/tools/shell.ts#L272-L325
    precision: tagged_commit_file
---
# 2026-10-13-gemini-cli-build-file-tool-gates-reach-stable-and-override-yolo

Build-file tool gates reach stable and override YOLO. Recognized edit-tool calls with an extractable file_path, path, filePath or file target now ask for confirmation when the target is a recognized build/dependency file, including package.json, package-lock.json, pnpm-lock.yaml, yarn.lock, bun.lockb, Makefile, pyproject.toml, go.mod, Cargo.toml, Dockerfile and the other exact names/extensions in buildFileUtils.ts. The Bun entry is bun.lockb, not all Bun lockfiles. These gates override ALLOW in YOLO and trusted workspaces, and become DENY when non-interactive. After a tracked build-file edit, recognized build/test commands ask again and cannot become always-allow. Untrusted-output argument checks also run before shell YOLO bypass, with stable v0.64.0 narrowing their matcher (section 4). This is tool-path enforcement, not a prohibition on all filesystem writes: the YOLO shell rule permits redirection. It does not close every injection-to-build path.

Channel: tagged-release. Half: both. Date: 2026-09-23.

Operator consequence: Headless dependency/config-edit jobs using the recognized edit tools can be denied even with YOLO. Move those steps to explicit automation or interactive review, and test the actual tools/commands your job uses. Preserve a filesystem or sandbox boundary when a file must be unwritable; an edit-tool gate alone is insufficient. The benefit is a deliberate confirmation point on the tracked edit-to-build path, with a compatibility cost for unattended jobs.

## Receipt
- https://github.com/google-gemini/gemini-cli/releases/tag/v0.61.0
- https://github.com/google-gemini/gemini-cli/pull/29250
- https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/policy/policy-engine.ts#L903-L956
- https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/utils/buildFileUtils.ts#L14-L71
- https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/policy/policies/yolo.toml#L50-L56
- https://github.com/google-gemini/gemini-cli/blob/v0.63.0/packages/core/src/policy/policy-engine.test.ts#L4290-L4335
- https://github.com/google-gemini/gemini-cli/blob/v0.63.0/packages/core/src/tools/shell.ts#L272-L325
