Bitter council dry-run
backend: real
macro: council.research.v1@0.1.0
name: receipt-phase1
cwd: /Users/c3po/co/bitterfrontier
question: file (/tmp/bitterfrontier-receipt-phase1-question.md)
reviewers: codex:gpt-5.5, gemini:gemini-2.5-pro
synthesizer: codex:gpt-5.5
estimated tokens: 5173 (input 1373, output reserve 3800)
definition budget: max_children=10 max_wall_ms=900000 soft_usd=0.5 hard_usd=2

Rendered research prompt:
You are an independent council researcher for a launch-readiness decision.
Do not implement. Produce source-bound research that helps choose the next worker target.

Research discipline:
- Prefer exact files, commands, tests, routes, commits, logs, and run handles.
- Separate observed facts from hypotheses.
- Name missing evidence and contradictions.
- Avoid broad unbounded commands. If using shell, bound output with targeted paths, `rg -n`, `sed -n`, `head`, or equivalent.
- Do not paste raw transcript bulk or huge command outputs.
- Identify tempting alternatives to reject and why.

Required answer shape:
- bottleneck ranking
- key source handles with one-line implications
- missing evidence or contradictions
- recommended smallest target
- bolder next target if the small target succeeds
- verification proof

End with this exact heading and one bounded target under it:
## Smallest Implementation Target

Question:
What would Phase 1 of the agent receipt spec proposal actually require?

Use the survey at research/agent-receipt-spec-survey-2026-05-11.md as source context. Focus on OTel GenAI emission plus a neutral bitter.run.receipt.v0 shape, and identify the smallest implementation slice that would produce receipts useful to Bitter Frontier's Control Plane / Runtime / Platform sections and the authority/evidence/accessibility/security axes.
