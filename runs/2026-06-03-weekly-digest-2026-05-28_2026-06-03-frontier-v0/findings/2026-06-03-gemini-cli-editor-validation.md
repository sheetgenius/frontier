---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-06-03-gemini-cli-editor-validation
source: gemini-cli
source_contract: sources/gemini-cli.yml
window:
  start: 2026-05-28
  end: 2026-06-03
versions_covered: "v0.45.0, v0.46.0-preview.0"
status: accepted
change_type: reliability
confidence: high
accessibility_impact: low
actionability: observe
evidence:
  - label: "Commit title: 'fix(cli): prevent spam loop when preferredEditor is invalid (#25324)' modifying EditorSettingsDialog.tsx and EditorSettingsDialog.test.tsx with isUnsupportedEditor tracking and useEffec"
    url: https://github.com/google-gemini/gemini-cli/commit/211e7d1aec61f64aaace702ed2a4b97ff9de1ace
    precision: commit
---
# Invalid preferredEditor Spam Loop Prevention

## What Changed

Editor settings dialog now detects unsupported editor configurations and emits error feedback exactly once via useEffect dependency array, preventing repeated error messages when an invalid preferred editor is configured.

## Operator Implication

Reduces UI spam and improves user experience for misconfigured editor settings. Prevents notification fatigue from repeated error feedback.

## Receipt

- [Commit title: 'fix(cli): prevent spam loop when preferredEditor is invalid (#25324)' modifying EditorSettingsDialog.tsx and EditorSettingsDialog.test.tsx with i](https://github.com/google-gemini/gemini-cli/commit/211e7d1aec61f64aaace702ed2a4b97ff9de1ace)
