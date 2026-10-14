# Set review: 2026-10-13 profile refresh

Reviewed all 22 requested final profiles together with [SYNTHESIS.md](./SYNTHESIS.md). The product window is 2026-09-21 through 2026-10-13, inclusive, UTC.

No direct cross-profile factual contradiction or opposing comparison verdict found. All 22 profiles set `last_updated` and `last_full_review` to 2026-10-13. Three set-level issues remain: uneven comparison dating, repeated tagline posture, and a repeated body-heading formula. Quotations below reproduce the sentence words; Markdown link destinations are omitted from quotations.

## SET-01: Unreal's historical comparators need versions

**Profile id:** unreal-agent.

**Exact sentence:**

> The vendor's 22 September 2026 comparisons report lower input-token use than Codex and Pi.

**Problem:** This sits inside the v0.3.1 recommendation without naming the comparator versions. Elsewhere in this set, Codex recommends 0.162.1 and Pi recommends 1.2.0. Eve explicitly identifies its historical Pi comparator as 0.85.1. Unreal's less precise wording invites a comparison with the current profiles even though these are historical runs. [Unreal's owning harvest, section 9](../harvest/unreal-agent.primary.md), establishes Codex 0.154.0/0.155.1, Pi 0.85.1 with one 0.86.1 comparator, and Unreal builds unmapped to public tags. The synthesis preserves that boundary explicitly.

**Fix:** Replace the sentence with:

> The vendor's 22 September 2026 comparisons report lower aggregate input-token use against historical Codex 0.154.0/0.155.1 and Pi 0.85.1, with one Pi 0.86.1 comparator, using Unreal builds unmapped to public tags.

Keep the existing archive receipt on the reported result and attach the comparison-job receipts from the owning harvest to the comparator versions. Keep the adjacent statement that public-release savings remain unresolved.

## SET-02: Ten taglines repeat operator responsibility or a conditional trial

Seven taglines follow a capability with generic responsibility left to the operator. Three more use the same "worth a trial if you own or test the boundaries" condition. Read together, the repeated turn becomes a standing cautionary posture and obscures the different product changes. Use each tool's specific mechanism in these taglines; keep its concrete restrictions in the body and stance.

| Profile id | Exact sentence | Fix: replacement tagline |
| :--- | :--- | :--- |
| openclaw | Chat can configure OpenClaw; the owner still has to choose who may change it. | OpenClaw lets owners request configuration and credential changes through chat. |
| pi-coding-agent | Pi now supplies MCP and tool scripting; containment and credential policy are still your job. | Pi 1.2.0 puts MCP connections and JavaScript tool composition in the CLI. |
| flue | Flue 2.3.0 repairs execution and leaves your team responsible for approval and upgrade proof. | Flue's approval recipe stores exact arguments and ends the response while a person decides. |
| cursor | Cursor can monitor deployments; bounded access and final decisions remain the operator's job. | Cursor offers Rollouts for deployment monitoring and repair handoff to cloud agents. |
| grok-build | Take stable's approval fixes; keep the version and execution boundaries under your control. | Grok 1.0.52 documents a repair for repeated HTTP MCP execution after a JSON-RPC error. |
| agent-flywheel | Flywheel batches swarm starts; you still qualify the host and set worker authority. | Flywheel v0.10.0 launches up to 32 Claude and Codex workers from a reviewed plan. |
| temporal-agent-harness | Temporal keeps the approval waiting, but leaves access control to you. | Temporal 0.6.0 puts Code Mode in workflow workers and makes history compatibility part of the upgrade. |
| hermes-agent | Hermes v0.21.7 is worth an unattended trial if you choose its authority and test the release yourself. | Hermes v0.21.7 makes Gateway requests without a human approval channel consult unattended policy before model review. |
| heypi | heypi is worth a bounded trial when your team owns the runtime boundary and dependency audit. | heypi's optional just-bash adapter needs a read-only skills guard for createExclusive. |
| unreal-agent | A thin loop is worth a trial if you can own its boundaries and count the recovery work. | Unreal's runner resumes saved sessions around an asynchronous Go tool loop. |

## SET-03: Four body headings use "Try X before maintaining Y"

The same instruction introduces four different capabilities. The repeated formula makes the native-interface argument sound prewritten. Name the operation or comparison in the heading and keep the existing acceptance checks underneath it.

| Profile id | Exact sentence | Fix: replacement heading |
| :--- | :--- | :--- |
| codex | Try native orchestration before maintaining equivalent adapters. | Compare native discovery and result streaming with your existing adapters. |
| eve | Try Eve's tools beneath another harness before maintaining a private bridge. | Serve Eve tools over MCP under the caller's identity. |
| grok-build | Try headless goal waiting before maintaining a completion poller. | Let `grok -p` wait for background goals. |
| antigravity | Try the built-in image loop before maintaining a wrapper. | Delegate prompt writing and image checks to `image-generator`. |
