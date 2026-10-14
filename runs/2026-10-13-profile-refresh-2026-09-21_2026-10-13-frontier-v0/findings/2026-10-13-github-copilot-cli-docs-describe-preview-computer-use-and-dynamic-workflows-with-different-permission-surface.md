---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-github-copilot-cli-docs-describe-preview-computer-use-and-dynamic-workflows-with-different-permission-surface
source: github-copilot-cli
source_contract: sources/github-copilot-cli.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: medium
evidence:
  - url: https://github.com/github/docs/blob/602021b0ba16/content/copilot/concepts/agents/computer-use.md?plain=1#L47-L55
    precision: tagged_commit_file
  - url: https://github.com/github/docs/blob/602021b0ba16/content/copilot/reference/enterprise-administrators/enterprise-managed-settings.md?plain=1#L132
    precision: tagged_commit_file
  - url: https://github.com/github/docs/blob/602021b0ba16/content/copilot/concepts/agents/dynamic-workflows.md?plain=1#L104-L114
    precision: tagged_commit_file
  - url: https://github.com/github/docs/blob/602021b0ba16/content/copilot/reference/copilot-cli-reference/cli-programmatic-reference.md?plain=1#L66-L68
    precision: tagged_commit_file
  - url: https://github.com/github/docs/commit/1230337ad5f6292d236569791a6fe5d79777c76f
    precision: commit
---
# 2026-10-13-github-copilot-cli-docs-describe-preview-computer-use-and-dynamic-workflows-with-different-permission-surface

Docs describe preview computer use and dynamic workflows with different permission surfaces. Computer use lets Copilot drive local desktop apps on macOS and Windows through the accessibility tree and screenshots. It is "disabled by default". An "Always allow" approval for an app persists and is shared with the Copilot app on the same machine. Managed `features.computerUse: false` blocks it, and a local setting cannot override that (L47-L55; enterprise L132). Dynamic workflows run extension-defined multi-agent workflows whose subagents inherit the session's grants. `copilot workflow run` "does not display permission approval prompts", and "An extension can also run its own code directly, outside these permission prompts" (L104-L114). Project extensions load only in trusted folders or with `GITHUB_COPILOT_PROMPT_MODE_EXTENSIONS=true` (programmatic L68). Computer-use actions follow tool permissions; saved app approval is not proof of a policy or sandbox bypass. The 2026-10-05 availability edit excludes existing annual Pro/Pro+ subscribers still on legacy premium request billing from dynamic workflows.

Channel: docs-only (computer use was already in the binary before the window, 1.0.85 L279; dynamic workflows and copilot workflow run have no changelog line). Half: capability. Date: 2026-10-01 to 2026-10-05.

Operator consequence: For a desktop-control trial, check the supported OS and explicitly enable computer use; managed features.computerUse: false can prohibit it. Its relationship to the local command sandbox remains untested. Dynamic workflow trials also require billing eligibility; existing annual Pro/Pro+ plans on legacy premium request billing are excluded. Pre-grant only the permissions needed by copilot workflow run, which does not display approval prompts. Extension code can run outside those prompts. That is a different surface from computer-use tool requests and from the historical extension-registered hook-callback repair.

## Receipt
- https://github.com/github/docs/blob/602021b0ba16/content/copilot/concepts/agents/computer-use.md?plain=1#L47-L55
- https://github.com/github/docs/blob/602021b0ba16/content/copilot/reference/enterprise-administrators/enterprise-managed-settings.md?plain=1#L132
- https://github.com/github/docs/blob/602021b0ba16/content/copilot/concepts/agents/dynamic-workflows.md?plain=1#L104-L114
- https://github.com/github/docs/blob/602021b0ba16/content/copilot/reference/copilot-cli-reference/cli-programmatic-reference.md?plain=1#L66-L68
- https://github.com/github/docs/commit/1230337ad5f6292d236569791a6fe5d79777c76f
