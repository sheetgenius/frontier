# Council Dossier: OpenHands Profile (mixed_official_docs)

**Question file**: q-openhands-mixed-official-docs.md
**Council type**: council.research.v1
**Providers**: claude, codex, gemini (synthesis: codex)
**Date**: 2026-05-12

## Synthesis

The profile should pass the council only after a narrow correction pass. The
strongest critique is not "OpenHands is not platformized"; it is that the
profile sometimes describes advisory or partially verified mechanisms as
enforced platform structure.

1. **Structural constraint claim**: The structural-vs-instructional objection
   is real. PR #14122 and SDK PR #2948 support "per-user opt-in, default false,
   adds `TaskToolSet` when enabled," but they do not by themselves prove each
   sub-agent's tool surface is runtime-enforced. Markdown/frontmatter specs are
   stronger than plain prompt text, but "structurally constrained" needs
   code/diff evidence showing the registry/parser constructs agents with fixed
   tool lists, plus tests or a runtime probe showing unavailable tools cannot
   be invoked.

2. **Critic default**: The critic default claim is weaker than the profile
   says. PR #14133 initially says critic is enabled by default for new app
   users, but the review thread narrows that to `OH_ENABLE_CRITIC_BY_DEFAULT`:
   default disabled unless a deployment opts in. Replace "on by default for
   new users" with "deployment-controlled default for newly created user
   settings; disabled unless explicitly enabled in the deployment."

3. **Comparative claim**: "most complete productized surface in the watchlist"
   is not profile-grade unless backed by systematic cross-provider comparison.
   Keep "OpenHands is the productized platform calibration source" as
   doctrine/source-contract framing, but move comparative superiority into a
   digest only if the digest actually compares SDK, CLI, GUI, cloud, enterprise,
   integrations, RBAC, budgets, and evidence surfaces across providers.

4. **Platform map**: The platformization angle is directionally right but
   under-specified. OpenHands docs support SDK, CLI, Local GUI, Cloud,
   Enterprise, integrations, multi-user, RBAC, collaboration, usage reporting,
   budgeting, and VPC/Kubernetes enterprise deployment. The profile should
   describe what is SDK/harness, what is hosted product, what is enterprise
   governance, and where authority/cost/evidence move from operator-owned to
   platform-owned.

5. **What to Watch Next**: Sharpen around governance: deployment/org-level
   controls for sub-agents and critic, runtime enforcement of custom-agent
   tool lists, auditability of delegation, critic calibration and cost routing,
   and whether RBAC/budgets/usage reporting cover these new agentic surfaces.

Sources checked: OpenHands PR #14122, SDK PR #2948, OpenHands PR #14133,
OpenHands docs introduction, file-based agents docs, TaskToolSet docs,
critic docs.

## Smallest Implementation Target

Patch `content/profiles/openhands.md` only:
- Downgrade "structurally constrained" to source-supported wording
- Downgrade "critic on by default for new users" to deployment-controlled default
- Remove or relocate any "most complete" comparative claim
- Replace "What To Watch Next" with enforcement/default/platform-governance
  questions cited to PR #14122, SDK #2948, PR #14133, and official OpenHands docs
