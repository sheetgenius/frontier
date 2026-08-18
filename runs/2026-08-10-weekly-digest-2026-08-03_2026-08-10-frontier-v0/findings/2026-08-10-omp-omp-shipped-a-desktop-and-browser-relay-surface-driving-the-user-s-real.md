---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-10-omp-omp-shipped-a-desktop-and-browser-relay-surface-driving-the-user-s-real
source: omp
source_contract: sources/omp.yml
window:
  start: 2026-08-03
  end: 2026-08-10
status: accepted
confidence: high
evidence:
  - url: https://github.com/can1357/oh-my-pi/releases/tag/v17.2.5
    precision: github_release
---
# 2026-08-10-omp-omp-shipped-a-desktop-and-browser-relay-surface-driving-the-user-s-real

OMP shipped a desktop and browser-relay surface: driving the user's real Chrome tabs, plus window capture, input injection, accessibility trees and clipboard.

Three things landed together. A relay browser mode drives the operator's own local Chrome tabs through a new MV3 extension using chrome.debugger, with automatic daemon startup and per-window tab grouping. A scriptable desktop session adds window-targeted screen capture, input injection, native accessibility trees, clipboard access and streamed screenshots. And broker-shared language servers (the `lsp.shared` setting) multiplex one LSP server across multiple OMP instances in a project. The same release carries two breaking tool-schema changes: the computer tool's coordinate-batch schema was replaced by persistent JavaScript runs (and `computer.backend` plus model-specific controller switching were removed), and the edit tool's replace mode went from a multi-edit batch schema to a single-edit `{ path, old_string, new_string, replace_all? }` schema.

Channel: tagged-release. Ancestry: Published GitHub release https://github.com/can1357/oh-my-pi/releases/tag/v17.2.5, published_at 2026-08-03T05:06:56Z, prerelease=false, draft=false; tag v17.2.5 points at 5039b33a11b4a5cb0b74e7a3080d06ef5daa0813. The release body carries a first-party @oh-my-pi/browser-relay section ("Initial release of the Chrome MV3 extension, enabling the omp browser tool to attach to and drive existing browser tabs via chrome.debugger"). npm published 17.2.5 on the same day, so all package channels carry it.

Operator consequence: Adapt, then decide deliberately whether to enable it. The breaking schema changes will break any extension, hook or automation that constructs edit or computer tool calls. The larger point is scope: an agent that attaches to your live logged-in Chrome via chrome.debugger and can capture windows, inject input and read the clipboard is no longer confined to a terminal, and the changelog documents no permission surface specific to that reach  --  the tool-approval layer is the same one that gates a file write. If you run OMP on a workstation with authenticated browser sessions, treat relay mode as a separate trust decision. This is a fact about OMP; do not carry it to upstream Pi.

## Receipt
- https://github.com/can1357/oh-my-pi/releases/tag/v17.2.5
