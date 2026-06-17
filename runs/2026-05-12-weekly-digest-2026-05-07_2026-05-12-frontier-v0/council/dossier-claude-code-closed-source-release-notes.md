# Council Dossier: Claude Code Profile (closed_source_release_notes)

**Question file**: q-claude-code-closed-source-release-notes.md
**Council type**: council.research.v1
**Providers**: claude, codex, gemini (synthesis: codex)
**Date**: 2026-05-12

## Synthesis

The Claude Code profile mostly handles the `closed_source_release_notes`
constraint, but it overstates a few interpretive claims as current-state
fact. Do not average the council feedback: the strongest issue is
governance/API-key framing, not the `claude agents` persistence claim.

1. **`claude agents` persistence**: Defensible when cited to the official
   agent-view docs, which explicitly describe background sessions, a
   supervisor process, disk state, and no-terminal execution. It would not
   be defensible from the changelog line alone. Observed behavior is only
   required before treating that as a reliability guarantee for adapter
   design.

2. **`/ultrareview`**: Should remain an open question, not an
   absence-as-proof claim. Source-checking shows Anthropic documents
   `claude ultrareview --json` as printing raw `bugs.json`, but not a
   stable field schema in the visible docs. Safe wording: output mode
   exists; stable ingest schema remains unverified. If the schema is
   documented and the reviewer missed it, the profile must correct
   the claim.

3. **`settings.autoMode.hard_deny`**: The changelog supports "unconditional
   block regardless of user intent or allow exceptions," but "completes the
   three-tier policy model" is reviewer interpretation. Keep that in the
   Governance Lens, explicitly framed as interpretation.

4. **API key auth change**: The current "clarification, not restriction"
   wording is too soft. Operators using API keys lose Remote Control,
   `/schedule`, claude.ai MCP connectors, and notifications unless they
   unset the key. That changes workflow and should be stated directly as
   capability loss.

5. **Cross-provider discipline**: Mostly fine. The profile does not appear
   to make explicit provider-vs-provider comparisons.

## Smallest Implementation Target

Patch only `content/profiles/claude-code.md`:
- Tighten `/ultrareview` wording (open question, not absence-as-proof)
- Label "completes three-tier policy model" as reviewer interpretation
  in the Governance Lens
- Rewrite API key auth consequence as capability loss, not clarification
