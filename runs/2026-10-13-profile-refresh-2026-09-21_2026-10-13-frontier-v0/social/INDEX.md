# Social capture selection

Run: `2026-10-13-profile-refresh-2026-09-21_2026-10-13-frontier-v0`.
Digest: `2026-09-21_2026-10-13-weekly`, This Week in Agentic Harnesses.
Window: 2026-09-21 through 2026-10-13 inclusive, UTC. This is the declared
23-day catch-up issue following Before the First Turn, not an ordinary seven-day window.
Selected: 36 distinct posts, split 18 and 18. Considered: 331 distinct URLs
in 340 discovery records. Rejected: 295 distinct URLs. Repeated discoveries
are recorded as provenance, not additional editorial votes.

This is a selection ledger, not capture or publication. The ten raw sweeps are
untrusted discovery data. No post text has been quoted or independently captured
here. All claim posts remain `needs_primary_crosscheck`; the targets below guide
later adjudication and are not verdicts on the uncaptured posts. Voice posts
remain `conversation-only`: experience, preference, questions or framing, with
no product behavior, performance or incident causation promoted to fact.

Only [capture-urls-a.txt](./capture-urls-a.txt) and
[capture-urls-b.txt](./capture-urls-b.txt) go to the independent capture pass.
Do not pass this index, raw sweeps, gists or expected text to that pass. A post
that cannot be re-fetched must be dropped. Capture must also confirm the account,
reply context and faithful classification; URL dates are a consistency check,
not proof of authorship or exact words.

The editorial inputs are the [signal packet](../signals/frontier-signals.yml),
[independent crosscheck](../verify/signals.crosscheck.md) and
[synthesis](../synthesis/SYNTHESIS.md). Where older synthesis language and the
crosscheck differ, use the corrected packet and the crosscheck's exact limits.
In particular, do not backdate a later release, treat serialized interpreter
state as absent altogether, or turn historical comparator data into a current
product result. The public [conversation rule](../../../site/src/pages/conversation-layer/index.astro)
and [social workflow](../../../docs/x-social-harvest-workflow.md) govern later use.

## Identity and date screening

Project attribution was checked against the source contracts' owners, canonical
repositories, packages and official surfaces. The contracts contain no explicit
X-account allowlists. Raw claims of staff status are not evidence of that status;
no row depends on certifying a biography. The author field below is the URL
handle, awaiting capture confirmation. For selected vendor and contributor
accounts, these additional public identity checks were read on 2026-10-14:

- [Cursor's site](https://cursor.com/) links @cursor_ai;
  [OpenHands' site](https://www.openhands.dev/) links @OpenHandsDev.
- GitHub profiles link [badlogic to @badlogicgames](https://github.com/badlogic),
  [Lydia Hallie to @lydiahallie and Anthropic](https://github.com/lydiahallie),
  [Andrew Barba to @andrew_barba and Vercel](https://github.com/AndrewBarba),
  [teknium1 to @Teknium](https://github.com/teknium1),
  [Dicklesworthstone to @doodlestein](https://github.com/Dicklesworthstone),
  and [tonbistudio to @tonbistudio](https://github.com/tonbistudio).
  These are identity links, not receipts for software claims.
- Other account roles, including the discovery labels on @trq212, @thsottiaux,
  @pidotdev, @ClaudeDevs, @shardara, @gneubig and @JasonSteving, are not promoted
  from the sweeps into verified affiliation claims. The selected posts concern
  the contract-matched products; capture must confirm each account and context.

| Source ID | Contract and canonical identity | Boundary applied |
| :--- | :--- | :--- |
| codex | [Contract](../../../sources/codex.yml), [openai/codex](https://github.com/openai/codex) | Coding harness; permission review and PR review stay separate. |
| claude-code | [Contract](../../../sources/claude-code.yml), official code.claude.com docs and @anthropic-ai/claude-code package | No Claude chat, Tags or API-credit claim imported as interactive CLI behavior. |
| pi-coding-agent | [Contract](../../../sources/pi-coding-agent.yml), [earendil-works/pi](https://github.com/earendil-works/pi) | Separate coding CLI, Pi Durable library, OMP and heypi. |
| eve | [Contract](../../../sources/eve.yml), [vercel/eve](https://github.com/vercel/eve), eve.dev | Not Eve Stack or an agent merely named Eve; local and deployed extension defaults differ. |
| cursor | [Contract](../../../sources/cursor.yml), cursor.com | The unrelated github.com/cursor/cursor is rejected by the contract; Grok Bot is not grok-build. |
| hermes-agent | [Contract](../../../sources/hermes-agent.yml), [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | Source installer, Store, Desktop, Cloud and third-party plugins remain distinct. |
| openhands | [Contract](../../../sources/openhands.yml), [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | Canvas, SDK, local, Docker and hosted Cloud are not interchangeable. |
| openclaw | [Contract](../../../sources/openclaw.yml), [openclaw/openclaw](https://github.com/openclaw/openclaw) | Not OpenCode, Enterprise's separate repo, or Microsoft Autopilot by default. |
| gemini-cli | [Contract](../../../sources/gemini-cli.yml), [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) | Not Gemini chat or Antigravity CLI; access routes and repository releases differ. |
| github-copilot-cli | [Contract](../../../sources/github-copilot-cli.yml), [github/copilot-cli](https://github.com/github/copilot-cli), @github/copilot | Not VS Code Copilot, the cloud coding agent, or gh copilot. |
| temporal-agent-harness | [Contract](../../../sources/temporal-agent-harness.yml), [temporal-community/temporal-agent-harness](https://github.com/temporal-community/temporal-agent-harness) | Not a general claim about all Temporal deployments or SDKs. |
| agent-flywheel | [Contract](../../../sources/agent-flywheel.yml), [Dicklesworthstone/agentic_coding_flywheel_setup](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup) | Assembly and cloud installer delivery differ from native child-harness delivery. |
| deepseek-harness | [Contract](../../../sources/deepseek-harness.yml), [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness) | Only a named comparison in P21, pending capture; not DeepSeek chat or a generic model. |

All 331 candidate dates match the UTC timestamp encoded in their post IDs and
fall inside the window. No out-of-window reply exception was needed. This does
not establish that any raw gist is accurate. No speculative repair of a handle,
URL or date was made.

## Selection clusters and adjudication targets

- **Human checkpoints and consent:** one proposal, one operator counter-read and
  the author's follow-up; launch and trust warning together; one narrow hook
  diagnosis; permission review distinguished from PR review. Avoid incident
  relays and repeat corrections of one participant.
- **Runtime inventory and admission:** actual running versions, optional
  comparison configurations, source-update channels, catalog review limits and
  explicit CLI sandbox policy. No upgrade or safety advice follows from a post.
- **Native integration and specialized recovery:** give MCP and replaceable
  loops their value, then test batching, package identity, portability and
  side-effect recovery. The minimal-loop framing and durability-first argument
  both remain visible; neither gets an unmeasured win.
- **The operating loop and accepted outcomes:** builders retiring plumbing,
  Cursor entering deployment work, OpenHands automation, multiplayer authority,
  audit requirements and the outside recovery owner. An independent operating
  environment has to earn its value too.

Signal aliases below refer to the accepted IDs in the linked packet; an alias
names an adjudication target, never a social verdict. Argument-only targets
refer to the synthesis headings and the operator questions described here.

| Alias | Signal ID |
| :--- | :--- |
| S1 | `2026-10-13-codex-interactive-server-has-its-own-version` |
| S2 | `2026-10-13-pi-coding-agent-native-mcp-and-tool-scripting` |
| S3 | `2026-10-13-eve-approved-calls-keep-requester-credentials` |
| S4 | `2026-10-13-eve-queued-consent-needs-a-newer-prompt` |
| S5 | `2026-10-13-omp-extensions-can-resolve-plan-review` |
| S6 | `2026-10-13-openclaw-approval-binds-final-hook-arguments-in-beta` |
| S7 | `2026-10-13-claude-code-mods-can-answer-permission-checks` |
| S8 | `2026-10-13-openhands-agents-prepare-testable-automation-drafts` |
| S9 | `2026-10-13-openhands-local-terminal-inherits-the-stack-key` |
| S10 | `2026-10-13-hermes-agent-unattended-gateway-policy-now-applies` |
| S11 | `2026-10-13-temporal-agent-harness-code-mode-moves-into-workflow` |
| S12 | `2026-10-13-github-copilot-cli-local-sandbox-and-credential-proxy` |

S5 and S10 provide comparisons, not proof of a Claude proposal or Hermes updater
claim. S6 does not adjudicate multiplayer role scope. The selected conversation
has no direct account of several accepted signals, including Omnigent's helper
escape and Eve's two repairs. Do not manufacture a quote to fill those gaps or
infer nobody discussed them from this bounded discovery set.

## Chosen posts

The gist column is only a short editorial label. Pairs and thread order above
are reading guidance for the editor, never input to independent capture. Batch
letters identify the URL file; rows alternate so both files span the clusters.

| ID / batch | Post / handle | UTC date | Source IDs | Kind | Gist | Signal or argument | Why selected and what remains to check | Discovery records |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| P01 / A01 | [@trq212](https://x.com/trq212/status/2102813194196758746) | 2026-09-23 | claude-code | claim | Plan-mode proposal | S5, S7; human checkpoint | Tests which planning scaffolding capability can retire. This is intent, not evidence of removal; read with P02 and P03. | [banter 1](./banter.raw.md) |
| P02 / B01 | [@exyota](https://x.com/exyota/status/2102821139332333895) | 2026-09-23 | claude-code | voice | Human planning checkpoint | S5; human checkpoint | Preserves a deliberate judgment boundary. One direct counter-read is enough; do not turn the replies into a correction chorus. | [banter 2](./banter.raw.md) |
| P03 / A02 | [@trq212](https://x.com/trq212/status/2103212051065921632) | 2026-09-24 | claude-code | claim | Plan-mode follow-up | S7; human checkpoint | Completes the proposal thread and gives the author the revised position. Check delivered mod behavior separately. | [banter 4](./banter.raw.md) |
| P04 / B02 | [@ClaudeDevs](https://x.com/ClaudeDevs/status/2105721434807083061) | 2026-10-01 | claude-code | claim | Mods launch | S7; admission | Gives extensibility its positive case before examining permission-chain ownership. Crosscheck the actual delivered channel. | [claude-code 6](./claude-code.raw.md) |
| P05 / A03 | [@ClaudeDevs](https://x.com/ClaudeDevs/status/2105721440490361312) | 2026-10-01 | claude-code | claim | Mods trust warning | S7; admission | Keeps the vendor warning beside the launch. Installation review has to consider process authority, not only tool names. | [claude-code 7](./claude-code.raw.md) |
| P06 / B03 | [@lydiahallie](https://x.com/lydiahallie/status/2109716193468874978) | 2026-10-12 | claude-code | claim | Hook approval diagnosis | S7; consent | Provides a maintainer counterweight to classifier-failure narratives. Verify the hook dispatch mechanism; the incident cause remains attributed. | [claude-code 29](./claude-code.raw.md) |
| P07 / A04 | [@thsottiaux](https://x.com/thsottiaux/status/2107368734981517634) | 2026-10-06 | codex | claim | Auto-review announcement | Consent; reviewer economics | States the intended replacement for repeated prompts. Check permission-review semantics and billing independently; a post cannot settle safety. | [codex 14](./codex.raw.md) |
| P08 / B04 | [@HarshChavd1a](https://x.com/HarshChavd1a/status/2108199825179349015) | 2026-10-08 | codex | claim | Permission-review distinction | Consent; reviewer economics | Tests a concrete conversation misreading against permission documentation. Do not turn action approval into a claim about free PR review. | [codex 18](./codex.raw.md) |
| P09 / A05 | [@lucas_builds](https://x.com/lucas_builds/status/2109252687477031014) | 2026-10-11 | claude-code | voice | Endless review loop | Outcomes | Makes the cost of an undefined completion rule visible. Treat as experience and pair with P10, not as a defect-rate measurement. | [banter 8](./banter.raw.md) |
| P10 / B05 | [@johnroodepic](https://x.com/johnroodepic/status/2109369506107937114) | 2026-10-11 | claude-code | voice | Review stop rule | Outcomes | Supplies an alternative to the frustration in P09. The useful decision is how the operator defines completion. | [banter 9](./banter.raw.md) |
| P11 / A06 | [@XShude](https://x.com/XShude/status/2107202044960587980) | 2026-10-05 | codex | claim | Daemon-free control | S1; runtime inventory | Offers a bounded comparison configuration for the runtime story. Check supported options against the tagged CLI before recommending them. | [banter 20](./banter.raw.md) |
| P12 / B06 | [@hackerlogs](https://x.com/hackerlogs/status/2109761263240696115) | 2026-10-12 | codex | claim | Daemon issue recap | S1; runtime inventory | Connects public surprise to a directly relevant signal. This is a relay; scope every lifecycle and updater assertion to the tagged record. | [codex 30](./codex.raw.md) |
| P13 / A07 | [@tonbistudio](https://x.com/tonbistudio/status/2110155915513221301) | 2026-10-13 | hermes-agent | claim | Update-channel switch | S10; runtime inventory | Adds a contrasting delivery choice. Crosscheck source-install eligibility; do not transfer the claim to Store, Desktop or Cloud. | [hermes-agent 31](./hermes-agent.raw.md) |
| P14 / B07 | [@Teknium](https://x.com/Teknium/status/2106970980606488807) | 2026-10-05 | hermes-agent | claim | Catalog review limits | Admission | Keeps the publisher of the catalog defining its review scope. An admission decision still needs the installed plugin and permissions. | [hermes-agent 11](./hermes-agent.raw.md) |
| P15 / A08 | [@pidotdev](https://x.com/pidotdev/status/2104992471155696120) | 2026-09-29 | pi-coding-agent | claim | Native MCP reversal | S2; native integration | Captures a changed design position with an immediate adapter-retirement question. Verify shipped CLI defaults rather than inferring them from enthusiasm. | [pi-coding-agent 3](./pi-coding-agent.raw.md) |
| P16 / B08 | [@shantanugoel](https://x.com/shantanugoel/status/2105251106444226901) | 2026-09-30 | pi-coding-agent | voice | Batching dissent | S2; native integration | Counterweights the convenience claim with an operator objection. Do not import the raw DeepSeek attribution without capture context, or generalize the default or failure rate. | [pi-coding-agent 5](./pi-coding-agent.raw.md) |
| P17 / A09 | [@badlogicgames](https://x.com/badlogicgames/status/2107207172128182541) | 2026-10-05 | pi-coding-agent | claim | CLI and Durable | S2, S11; recovery | Prevents a package-identity error before it becomes operating advice. Check the coding CLI and the separate library independently. | [banter 22](./banter.raw.md), [pi-coding-agent 22](./pi-coding-agent.raw.md) |
| P18 / B09 | [@g48in](https://x.com/g48in/status/2107058099345375323) | 2026-10-05 | pi-coding-agent, claude-code, codex | voice | Cross-harness portability | Recovery; portability | Preserves the strongest portability objection even if P17 corrects a product conflation. Storage interchangeability does not answer the operator question by itself. | [banter 24](./banter.raw.md), [pi-coding-agent 18](./pi-coding-agent.raw.md) |
| P19 / A10 | [@japanaibuilders](https://x.com/japanaibuilders/status/2107256352984940775) | 2026-10-05 | pi-coding-agent | voice | Resume side effects | S11; recovery | Asks the application-level acceptance question. Keep it as a question; it establishes neither duplicate writes nor an exactly-once guarantee. | [pi-coding-agent 23](./pi-coding-agent.raw.md) |
| P20 / B10 | [@badlogicgames](https://x.com/badlogicgames/status/2110080102797308207) | 2026-10-13 | pi-coding-agent | voice | Minimal-loop challenge | Native integration; deletion | Cuts against the assumption that more orchestration necessarily helps. Use as framing only; any chart result needs its own method and artifact mapping. | [banter 21](./banter.raw.md), [pi-coding-agent 37](./pi-coding-agent.raw.md) |
| P21 / A11 | [@JasonSteving](https://x.com/JasonSteving/status/2106492644671234434) | 2026-10-03 | temporal-agent-harness, pi-coding-agent, deepseek-harness | voice | Durability-first framing | S11; recovery | Gives specialized runtime engineering its affirmative argument. This is a design position, not proof of a delivered workflow or migration result. | [banter 38](./banter.raw.md) |
| P22 / B11 | [@andrew_barba](https://x.com/andrew_barba/status/2104944521834357086) | 2026-09-29 | eve | claim | Replaceable agent loop | Native integration; operating loop | Answers the loop-ownership objection with a configuration claim. Check public APIs and released behavior; avoid the unsupported cross-framework superlative. | [eve 4](./eve.raw.md) |
| P23 / A12 | [@kushbhuwalka](https://x.com/kushbhuwalka/status/2106902660578472208) | 2026-10-05 | eve | voice | Integration escape | Operating loop | A builder supplies the adoption case for retiring custom plumbing. Attribute the experience; no net productivity measurement follows. | [eve 14](./eve.raw.md) |
| P24 / B12 | [@shardara](https://x.com/shardara/status/2109321803386540241) | 2026-10-11 | eve | claim | Multiplayer steering | S3, S4; consent | Makes sender and timing policy concrete. Do not confuse default steering with the queued path or infer either repair from this explanation. | [eve 25](./eve.raw.md) |
| P25 / A13 | [@Madeactual](https://x.com/Madeactual/status/2110130052683694117) | 2026-10-13 | eve | voice | Consent in traces | S3, S4; consent | States what an operator wants from an audit trail. It does not establish that the new viewer lacks those fields or that any repair is shipped. | [eve 28](./eve.raw.md) |
| P26 / B13 | [@cursor_ai](https://x.com/cursor_ai/status/2102786814633464159) | 2026-09-23 | cursor | claim | Prompt reduction report | Deletion; native integration | Tests the thesis with a vendor account of reduced scaffolding. Check the dated engineering report; publication date does not date every underlying change. | [cursor 3](./cursor.raw.md) |
| P27 / A14 | [@cursor_ai](https://x.com/cursor_ai/status/2106066782155157603) | 2026-10-02 | cursor | claim | Rollouts repair handoff | Operating loop | Gives provider expansion into operations positive space. Use dated hosted-product evidence; do not turn vendor description into observed customer acceptance. | [cursor 9](./cursor.raw.md) |
| P28 / B14 | [@akashc777](https://x.com/akashc777/status/2106567332223205658) | 2026-10-04 | cursor | voice | Repair evidence chain | Operating loop; outcomes | Pairs P27 with an acceptance standard instead of a complaint chorus. Keeps the completed outcome and retained human decision in view. | [cursor 10](./cursor.raw.md) |
| P29 / A15 | [@cursor_ai](https://x.com/cursor_ai/status/2110075611633074295) | 2026-10-13 | cursor | claim | Origin marketplace | Operating loop; admission | Challenges the assumption that the environment around the model is protected from provider expansion. Crosscheck the dated launch and integration authority. | [cursor 31](./cursor.raw.md) |
| P30 / B15 | [@doodlestein](https://x.com/doodlestein/status/2108541775623196759) | 2026-10-09 | agent-flywheel, claude-code, codex | voice | Cloud portability cost | Runtime inventory; portability | Gives the independent operating layer its practical case. Check the cloud installer channel separately; do not imply stable delivery or a measured migration cost. | [banter 27](./banter.raw.md) |
| P31 / A16 | [@gneubig](https://x.com/gneubig/status/2105833104648667520) | 2026-10-02 | openhands | claim | Automated triage response | S8; operating loop | Shows a maintainer describing how the project handles generated work. Check the automations; no reduction in human review is established by the post. | [openhands 13](./openhands.raw.md) |
| P32 / B16 | [@OpenHandsDev](https://x.com/OpenHandsDev/status/2107872222463353178) | 2026-10-07 | openhands | claim | Canvas scope recap | S8, S9; operating loop | Pairs the capability case with exact runtime and credential checks. A scoped profile is not by itself proof of a credential boundary or Cloud rollout. | [openhands 19](./openhands.raw.md) |
| P33 / A17 | [@kazuhiro_jinma](https://x.com/kazuhiro_jinma/status/2107765415766102203) | 2026-10-07 | gemini-cli | claim | Headless plan transition | Human checkpoint; operating loop | Adds a tagged continuation change to the planning argument. Verify 0.63.0 delivery and the pre-existing exit path; do not call it a new universal bypass. | [gemini-cli 15](./gemini-cli.raw.md) |
| P34 / B17 | [@iamandresvilla](https://x.com/iamandresvilla/status/2108910010851856461) | 2026-10-10 | github-copilot-cli | claim | Sandbox and egress | S12; admission | Keeps enablement and destination policy separate. Check the CLI-specific settings and OS differences rather than borrowing VS Code or cloud-agent behavior. | [banter 42](./banter.raw.md) |
| P35 / A18 | [@openclaw](https://x.com/openclaw/status/2108408104295768372) | 2026-10-09 | openclaw | claim | Multiplayer role limits | S6; admission | Uses the project account to bound its shared-session posture. This is context for admission, not evidence about the separate final-argument repair. | [openclaw 16](./openclaw.raw.md) |
| P36 / B18 | [@kylianCros](https://x.com/kylianCros/status/2109566198291771531) | 2026-10-12 | openclaw | voice | Outer recovery owner | Recovery; outcomes | Cuts against self-maintenance as a closed loop. Attribute the fleet experience and retain the need to identify the outside recovery owner. | [openclaw 25](./openclaw.raw.md) |

## Considered and rejected

One row per remaining distinct URL. Reasons are editorial exclusions, not
findings that the post or its author is wrong. No rejected post is passed to
capture. Source IDs in this table retain discovery attribution for audit only;
identity uncertainty or an adjacent product is a reason to exclude, not a basis
for importing that claim into a source profile. Account roles are not inferred.

### banter

| Post / handle | UTC date | Discovery source IDs | Reason | Discovery records |
| :--- | :--- | :--- | :--- | :--- |
| [@threepointone](https://x.com/threepointone/status/2102814850950812100) | 2026-09-23 | claude-code | Human-checkpoint reply; P02 already supplies the counter-read without a chorus. | [banter 3](./banter.raw.md) |
| [@PerceptualPeak](https://x.com/PerceptualPeak/status/2107621483392446572) | 2026-10-06 | claude-code | Destructive-action allegation; original configuration and incident evidence are absent. | [banter 5](./banter.raw.md), [claude-code 12](./claude-code.raw.md) |
| [@bcherny](https://x.com/bcherny/status/2107695244238324001) | 2026-10-07 | claude-code | Incident counterfactual; P06 offers a narrower dispatch explanation to check. | [banter 6](./banter.raw.md), [claude-code 13](./claude-code.raw.md) |
| [@davekiss](https://x.com/davekiss/status/2106759428074828007) | 2026-10-04 | claude-code | Auto-mode setup; narrower and less central than the selected admission mechanisms. | [banter 7](./banter.raw.md) |
| [@bcherny](https://x.com/bcherny/status/2109441615337337137) | 2026-10-12 | claude-code | Quota dispute; no usage accounting to adjudicate the diagnosis in this task. | [banter 10](./banter.raw.md) |
| [@multilayer](https://x.com/multilayer/status/2106895974333563308) | 2026-10-04 | claude-code | Release recap; primary receipts can carry these repairs without another summary. | [banter 11](./banter.raw.md) |
| [@swyx](https://x.com/swyx/status/2108180514121142677) | 2026-10-08 | claude-code | Slack product cost; different surface, historical spend and incomplete accounting. | [banter 12](./banter.raw.md) |
| [@swyx](https://x.com/swyx/status/2108186947634250082) | 2026-10-08 | claude-code | Slack product follow-up; different surface and explicitly historical accounting. | [banter 13](./banter.raw.md) |
| [@thsottiaux](https://x.com/thsottiaux/status/2106845241357824205) | 2026-10-04 | codex | Shipping pledge; less useful than a specific delivered operating change. | [banter 14](./banter.raw.md), [codex 10](./codex.raw.md) |
| [@thsottiaux](https://x.com/thsottiaux/status/2107575657014468879) | 2026-10-06 | codex | Reviewer pricing follow-up; P07 supplies the fuller originating announcement. | [banter 15](./banter.raw.md) |
| [@thsottiaux](https://x.com/thsottiaux/status/2107676072871600470) | 2026-10-07 | codex | Reset joke; adds no operating distinction beyond the selected reviewer discussion. | [banter 16](./banter.raw.md) |
| [@thsottiaux](https://x.com/thsottiaux/status/2105102312167575701) | 2026-09-30 | codex | Dots billing; separate surface with no necessary role in this issue's argument. | [banter 17](./banter.raw.md) |
| [@simonw](https://x.com/simonw/status/2104631940586574335) | 2026-09-28 | codex, claude-code | Transcript portability; useful reserve, but narrower than the selected recovery contract. | [banter 18](./banter.raw.md) |
| [@simonw](https://x.com/simonw/status/2108547065634844839) | 2026-10-09 | codex | Voice-built feature; useful reserve, without an operating mechanism to test here. | [banter 19](./banter.raw.md) |
| [@badlogicgames](https://x.com/badlogicgames/status/2107202201550455176) | 2026-10-05 | pi-coding-agent, claude-code, codex | Durability rebuttal; P17 and P18 preserve the distinction without another correction. | [banter 23](./banter.raw.md) |
| [@_can1357](https://x.com/_can1357/status/2107853707870196024) | 2026-10-07 | omp | Coding-skill argument; peripheral to authority, delivery and recovery in this issue. | [banter 25](./banter.raw.md) |
| [@doodlestein](https://x.com/doodlestein/status/2108265730705653833) | 2026-10-08 | omp, claude-code, codex | Model refusal anecdote; legal framing and one task do not settle model portability. | [banter 26](./banter.raw.md) |
| [@tommyvankessel](https://x.com/tommyvankessel/status/2108936200119533818) | 2026-10-10 | cursor | Organization takeover allegation; exact ownership path lacks primary adjudication. | [banter 28](./banter.raw.md), [cursor 19](./cursor.raw.md) |
| [@vipinxtwt](https://x.com/vipinxtwt/status/2108530516626719083) | 2026-10-09 | cursor | Approval fatigue; familiar framing without the configuration detail of selected posts. | [banter 29](./banter.raw.md) |
| [@cursor_ai](https://x.com/cursor_ai/status/2107141021947904430) | 2026-10-05 | cursor | Subagent continuation; narrower than Rollouts and the selected runtime handoff. | [banter 30](./banter.raw.md) |
| [@mokshaowei](https://x.com/mokshaowei/status/2110158477482156055) | 2026-10-13 | hermes-agent | Grok Bot comparison; outside grok-build and no clean controlled setup comparison. | [banter 31](./banter.raw.md), [hermes-agent 32](./hermes-agent.raw.md) |
| [@JayQinQT](https://x.com/JayQinQT/status/2109811561670103437) | 2026-10-13 | openclaw | Gateway authentication advice; not the selected final-argument or recovery mechanism. | [banter 32](./banter.raw.md) |
| [@lumediatv](https://x.com/lumediatv/status/2109814926571446710) | 2026-10-13 | hermes-agent, openclaw | Migration settings recap; verify separately, without adding a second runtime comparison. | [banter 33](./banter.raw.md) |
| [@Sumanth_077](https://x.com/Sumanth_077/status/2107800513681182737) | 2026-10-07 | eve | SQL builder example; useful reserve, but deterministic execution needs its own trace. | [banter 34](./banter.raw.md) |
| [@tutao0123](https://x.com/tutao0123/status/2108728991821533532) | 2026-10-10 | unreal-agent, codex | Unreal cost recap; historical builds and incomplete inference accounting limit the comparison. | [banter 35](./banter.raw.md) |
| [@iotcoi](https://x.com/iotcoi/status/2107851206064238928) | 2026-10-07 | unreal-agent | Async kitchen analogy; the selected recovery question is more decision-bearing. | [banter 36](./banter.raw.md) |
| [@omarsar0](https://x.com/omarsar0/status/2106029828302373354) | 2026-10-02 | claude-code, deepseek-harness, pi-coding-agent | Malleable-harness framing; P21 carries the affirmative specialized-runtime argument. | [banter 37](./banter.raw.md) |
| [@auunneeu](https://x.com/auunneeu/status/2110155036508524597) | 2026-10-13 | antigravity | Antigravity access allegation; missing dated entitlement record and different product surface. | [banter 39](./banter.raw.md) |
| [@tukiyomiiori](https://x.com/tukiyomiiori/status/2110052384496091220) | 2026-10-13 | gemini-cli, antigravity | Google product confusion; no precise admission or release claim to adjudicate. | [banter 40](./banter.raw.md) |
| [@tuffbrownboy](https://x.com/tuffbrownboy/status/2107377427249054079) | 2026-10-06 | claude-code, codex, github-copilot-cli, gemini-cli | Plugin4Shell relay; current-artifact remediation remains unresolved, not newly established. | [banter 41](./banter.raw.md), [gemini-cli 14](./gemini-cli.raw.md) |
| [@ricky00983](https://x.com/ricky00983/status/2110131540852367784) | 2026-10-13 | pi-coding-agent, deepseek-harness, grok-build | Local-model speed comparison; no matched configuration or reproducible run receipts. | [banter 43](./banter.raw.md) |
| [@hunvreus](https://x.com/hunvreus/status/2108039794374988131) | 2026-10-08 | heypi, pi-coding-agent, codex | Lab independence preference; P18 and P30 already carry concrete portability questions. | [banter 44](./banter.raw.md) |
| [@principles0618](https://x.com/principles0618/status/2108345564333257125) | 2026-10-08 | flue, pi-coding-agent | Flue migration anecdote; old dependency and full-swap claims need exact pins. | [banter 45](./banter.raw.md) |
| [@GeoffreyHuntley](https://x.com/GeoffreyHuntley/status/2110048573593374836) | 2026-10-13 | claude-code, codex | API bill relay; no workload or accounting evidence for the attributed multiplier. | [banter 46](./banter.raw.md) |
| [@Agent0ai](https://x.com/Agent0ai/status/2105276613881393497) | 2026-09-30 | agent-zero | Memory marketing; broad retention language lacks a bounded mechanism in the selected argument. | [banter 47](./banter.raw.md) |

### claude-code

| Post / handle | UTC date | Discovery source IDs | Reason | Discovery records |
| :--- | :--- | :--- | :--- | :--- |
| [@_catwu](https://x.com/_catwu/status/2102437713781944397) | 2026-09-22 | claude-code | Model-default announcement; no need to repeat the model launch in this mechanism-led issue. | [claude-code 1](./claude-code.raw.md) |
| [@ClaudeDevs](https://x.com/ClaudeDevs/status/2103170368794185758) | 2026-09-24 | claude-code | Safeguard billing; different policy and accounting question from the selected consent thread. | [claude-code 2](./claude-code.raw.md) |
| [@simonw](https://x.com/simonw/status/2102914334943019270) | 2026-09-24 | claude-code | Cloud product naming; not a delivered boundary or recovery change. | [claude-code 3](./claude-code.raw.md) |
| [@ClaudeDevs](https://x.com/ClaudeDevs/status/2103561342057943314) | 2026-09-25 | claude-code | Quota breakpoint; useful capability reserve, outside the selected runtime inventory. | [claude-code 4](./claude-code.raw.md) |
| [@bcherny](https://x.com/bcherny/status/2104638725317923228) | 2026-09-28 | claude-code | Model demo; no matched workload or independent speed comparison. | [claude-code 5](./claude-code.raw.md) |
| [@ClaudeDevs](https://x.com/ClaudeDevs/status/2105721442826686614) | 2026-10-01 | claude-code | Built-in mod examples; P04 and P05 already carry the value and authority trade. | [claude-code 8](./claude-code.raw.md) |
| [@lydiahallie](https://x.com/lydiahallie/status/2105737466254598362) | 2026-10-01 | claude-code | Mod middleware explanation; redundant with the selected launch and trust warning. | [claude-code 9](./claude-code.raw.md) |
| [@indefatigabile](https://x.com/indefatigabile/status/2105727803677356200) | 2026-10-01 | claude-code | Open-source joke; no additional operator consequence beyond admission scrutiny. | [claude-code 10](./claude-code.raw.md) |
| [@trq212](https://x.com/trq212/status/2106290651163722143) | 2026-10-03 | claude-code | Generated-mod review advice; avoid a second corrective exhibit about the same author. | [claude-code 11](./claude-code.raw.md) |
| [@PerceptualPeak](https://x.com/PerceptualPeak/status/2107720127181738135) | 2026-10-07 | claude-code | Incident follow-up; avoid expanding an unadjudicated destructive-action story. | [claude-code 14](./claude-code.raw.md) |
| [@GeoffreyHuntley](https://x.com/GeoffreyHuntley/status/2107767325399437343) | 2026-10-07 | claude-code | Classifier frustration; no configured policy or reproducible workload to compare. | [claude-code 15](./claude-code.raw.md) |
| [@bcherny](https://x.com/bcherny/status/2107696327367024794) | 2026-10-07 | claude-code | Classifier billing follow-up; not necessary to the selected dispatch mechanism. | [claude-code 16](./claude-code.raw.md) |
| [@ClaudeDevs](https://x.com/ClaudeDevs/status/2108228394156757299) | 2026-10-08 | claude-code | API credits; different surface from interactive Claude Code and no needed billing argument. | [claude-code 17](./claude-code.raw.md) |
| [@ClaudeDevs](https://x.com/ClaudeDevs/status/2108287358374482381) | 2026-10-08 | claude-code | Cache price announcement; model economics are not this issue's central mechanism. | [claude-code 18](./claude-code.raw.md) |
| [@superalesha](https://x.com/superalesha/status/2108314027696804129) | 2026-10-08 | claude-code | Binary-string correction; useful self-correction, but peripheral to this window's operating decisions. | [claude-code 19](./claude-code.raw.md) |
| [@_catwu](https://x.com/_catwu/status/2108411312095314410) | 2026-10-09 | claude-code | Compaction toggle; narrower than the selected native integration and recovery changes. | [claude-code 20](./claude-code.raw.md) |
| [@ClaudeDevs](https://x.com/ClaudeDevs/status/2108621476538781878) | 2026-10-09 | claude-code | Projects access announcement; dated hosted access would need separate acceptance work. | [claude-code 21](./claude-code.raw.md) |
| [@lydiahallie](https://x.com/lydiahallie/status/2108637982005833973) | 2026-10-09 | claude-code | Cache TTL configuration; no matched accounting to connect it to the central argument. | [claude-code 22](./claude-code.raw.md) |
| [@johnroodepic](https://x.com/johnroodepic/status/2108510686422937712) | 2026-10-09 | claude-code, codex, github-copilot-cli, gemini-cli | Plugin4Shell relay; older repair and unresolved current-artifact checks, not a new delivery claim. | [claude-code 23](./claude-code.raw.md) |
| [@ziwenxu_](https://x.com/ziwenxu_/status/2108994420398051815) | 2026-10-10 | claude-code | Bonus consumption; no normalized workload or usage ledger. | [claude-code 24](./claude-code.raw.md) |
| [@Restitutor_](https://x.com/Restitutor_/status/2109316200882905262) | 2026-10-11 | claude-code | Deletion allegation; use the maintainer mechanism as attributed context, without repeating the incident. | [claude-code 25](./claude-code.raw.md) |
| [@robinebers](https://x.com/robinebers/status/2109235403354148967) | 2026-10-11 | claude-code, codex | Bypass/classifier assertion; no exact version, effective settings or reproduction. | [claude-code 26](./claude-code.raw.md) |
| [@bcherny](https://x.com/bcherny/status/2109426207658066360) | 2026-10-11 | claude-code | Quota denial; no usage ledger to settle the dispute. | [claude-code 27](./claude-code.raw.md) |
| [@EngrMhaseeb](https://x.com/EngrMhaseeb/status/2109392850555109817) | 2026-10-11 | claude-code | Mod-policy framing; P05 already supplies the trust boundary in the vendor's own thread. | [claude-code 28](./claude-code.raw.md) |
| [@aakashgupta](https://x.com/aakashgupta/status/2109706675607445987) | 2026-10-12 | claude-code | Infrastructure-loss relay; direct participant evidence and exact authority are missing. | [claude-code 30](./claude-code.raw.md) |
| [@hello_puneet](https://x.com/hello_puneet/status/2109681894082445480) | 2026-10-12 | claude-code | Projects review queue; useful reserve, but P09 and P10 already carry completion burden. | [claude-code 31](./claude-code.raw.md) |
| [@0xKense1](https://x.com/0xKense1/status/2109576725214458045) | 2026-10-12 | claude-code | Prompt-only safety result; no primary experimental method for the numerical claim. | [claude-code 32](./claude-code.raw.md) |
| [@jtaby](https://x.com/jtaby/status/2110114734808916469) | 2026-10-13 | claude-code, codex | Interface habit; less decision-bearing than the selected runtime and portability posts. | [claude-code 33](./claude-code.raw.md) |

### codex

| Post / handle | UTC date | Discovery source IDs | Reason | Discovery records |
| :--- | :--- | :--- | :--- | :--- |
| [@OpenAIDevs](https://x.com/OpenAIDevs/status/2104999323385929777) | 2026-09-29 | codex | CLI refresh catalog; broad feature enumeration rather than a single operating mechanism. | [codex 1](./codex.raw.md) |
| [@OpenAIDevs](https://x.com/OpenAIDevs/status/2104993035507712318) | 2026-09-29 | codex | Model launch benchmarks; outside the selected harness-specific changes. | [codex 2](./codex.raw.md) |
| [@OpenAI](https://x.com/OpenAI/status/2104987422308335828) | 2026-09-29 | codex | Security Cloud announcement; separate product deployment and acceptance question. | [codex 3](./codex.raw.md) |
| [@thsottiaux](https://x.com/thsottiaux/status/2105039816438227206) | 2026-09-29 | codex | Enterprise model billing; no need to widen into contract economics. | [codex 4](./codex.raw.md) |
| [@thsottiaux](https://x.com/thsottiaux/status/2105344469923221941) | 2026-09-30 | codex | Hardware-key access; separate cyber entitlement and identity requirement. | [codex 5](./codex.raw.md) |
| [@dkundel](https://x.com/dkundel/status/2106141525306397099) | 2026-10-02 | codex | Dots coordination preference; different surface and no measured attention result. | [codex 6](./codex.raw.md) |
| [@Yuchenj_UW](https://x.com/Yuchenj_UW/status/2106435001340621147) | 2026-10-03 | codex, claude-code, cursor | Desktop-versus-terminal preference; P11 and P12 give the concrete runtime distinction. | [codex 7](./codex.raw.md) |
| [@Unfinished101](https://x.com/Unfinished101/status/2106564533368115430) | 2026-10-04 | codex | Windows daemon workaround; unverified incident details and redundant comparison configuration. | [codex 8](./codex.raw.md) |
| [@Kizuno18](https://x.com/Kizuno18/status/2106574976145129831) | 2026-10-04 | codex | Daemon architecture defense; P11 preserves a counterweight without another lifecycle assertion. | [codex 9](./codex.raw.md) |
| [@blueemi99](https://x.com/blueemi99/status/2106719671688855681) | 2026-10-04 | codex, claude-code | Computer-use comparison; no matched task or runtime receipts. | [codex 11](./codex.raw.md) |
| [@IamEmily2050](https://x.com/IamEmily2050/status/2106894979973120098) | 2026-10-04 | codex, claude-code | Product decline take; broad preference without a bounded mechanism. | [codex 12](./codex.raw.md) |
| [@thsottiaux](https://x.com/thsottiaux/status/2107158998495748264) | 2026-10-05 | codex | Speed announcement; no matched workload and not a runtime-governance change. | [codex 13](./codex.raw.md) |
| [@0xPixelBaron](https://x.com/0xPixelBaron/status/2107377186139451502) | 2026-10-06 | codex | Broad allow-rule warning; useful reserve, but would widen the review-bypass thread. | [codex 15](./codex.raw.md) |
| [@itsmattfranco](https://x.com/itsmattfranco/status/2107506344995512734) | 2026-10-06 | codex | Reviewer skepticism; P08 supplies a more precise semantics distinction. | [codex 16](./codex.raw.md) |
| [@theo](https://x.com/theo/status/2107935187825008691) | 2026-10-07 | codex | Plan-value video; no normalized accounting and a different economics argument. | [codex 17](./codex.raw.md) |
| [@thsottiaux](https://x.com/thsottiaux/status/2108275041276420573) | 2026-10-08 | codex | Steering and speed; narrower than the selected runtime and consent mechanisms. | [codex 19](./codex.raw.md) |
| [@embirico](https://x.com/embirico/status/2108344827536617902) | 2026-10-08 | codex | Parallelism plans; future capacity rather than delivered behavior. | [codex 20](./codex.raw.md) |
| [@OpenAIDevs](https://x.com/OpenAIDevs/status/2108573188703781190) | 2026-10-09 | codex | Windows sandbox launch; useful reserve, but expands into a second OS-specific sandbox story. | [codex 21](./codex.raw.md) |
| [@thsottiaux](https://x.com/thsottiaux/status/2108645667451318747) | 2026-10-09 | codex | Composer predictions; UI economics, outside the selected boundary changes. | [codex 22](./codex.raw.md) |
| [@thsottiaux](https://x.com/thsottiaux/status/2109430343346581527) | 2026-10-11 | codex | Context default; model configuration rather than the selected deployment contract. | [codex 23](./codex.raw.md) |
| [@thsottiaux](https://x.com/thsottiaux/status/2109430894604026039) | 2026-10-11 | codex | Long-context billing follow-up; requires subscription accounting outside this task. | [codex 24](./codex.raw.md) |
| [@AbdoKerdawy](https://x.com/AbdoKerdawy/status/2109433087192924554) | 2026-10-11 | codex | Context-reset complaint; adds no mechanism to the selected authority argument. | [codex 25](./codex.raw.md) |
| [@thsottiaux](https://x.com/thsottiaux/status/2109439315570999598) | 2026-10-12 | codex | Usage poll; not a shipped operating change or normalized measure. | [codex 26](./codex.raw.md) |
| [@AngelStrandTech](https://x.com/AngelStrandTech/status/2109441027148746881) | 2026-10-12 | codex | Usage-cap dispute; no ledger to adjudicate historical limits. | [codex 27](./codex.raw.md) |
| [@thsottiaux](https://x.com/thsottiaux/status/2109491121441402912) | 2026-10-12 | codex | Context-default defense; would duplicate the omitted context economics thread. | [codex 28](./codex.raw.md) |
| [@MartinGTobias](https://x.com/MartinGTobias/status/2109635606779474052) | 2026-10-12 | codex, claude-code | Switching-cost anecdote; no matched workload or recorded configuration. | [codex 29](./codex.raw.md) |
| [@linux27567268](https://x.com/linux27567268/status/2109828038527463866) | 2026-10-13 | codex, claude-code | Installer comparison; cross-vendor persistence claim needs distinct primary evidence. | [codex 31](./codex.raw.md) |
| [@vvoyer](https://x.com/vvoyer/status/2110128451726282859) | 2026-10-13 | codex, claude-code | Lab-lock-in recommendation; P18 and P30 ask more concrete portability questions. | [codex 32](./codex.raw.md) |
| [@CJoerga](https://x.com/CJoerga/status/2110090066584629746) | 2026-10-13 | codex | Windows sandbox failure; no installed-host reproduction and separate platform story. | [codex 33](./codex.raw.md) |
| [@thsottiaux](https://x.com/thsottiaux/status/2110151780478927344) | 2026-10-13 | codex | Desktop storage claim; useful reserve, less central than actual daemon identity. | [codex 34](./codex.raw.md) |

### pi-coding-agent

| Post / handle | UTC date | Discovery source IDs | Reason | Discovery records |
| :--- | :--- | :--- | :--- | :--- |
| [@zeekrey_](https://x.com/zeekrey_/status/2101932903307350159) | 2026-09-21 | pi-coding-agent | Gondolin setup; different execution image and a separate onboarding diagnosis. | [pi-coding-agent 1](./pi-coding-agent.raw.md) |
| [@pidotdev](https://x.com/pidotdev/status/2103621949268062324) | 2026-09-25 | pi-coding-agent, claude-code | No-plan-mode endorsement; P01 to P03 preserve a completed proposal and counter-read. | [pi-coding-agent 2](./pi-coding-agent.raw.md) |
| [@mitsuhiko](https://x.com/mitsuhiko/status/2105005860673954272) | 2026-09-29 | pi-coding-agent | Extension defaults; source-level checks will carry the exposure conditions beside P15. | [pi-coding-agent 4](./pi-coding-agent.raw.md) |
| [@andreisurugiu_](https://x.com/andreisurugiu_/status/2105225777923178702) | 2026-09-30 | pi-coding-agent | Codemode image defect; a narrow output limitation outside the selected integration claim. | [pi-coding-agent 6](./pi-coding-agent.raw.md) |
| [@mitsuhiko](https://x.com/mitsuhiko/status/2105229882405843213) | 2026-09-30 | pi-coding-agent | Image limitation reply; keep for that separate defect if it is reported. | [pi-coding-agent 7](./pi-coding-agent.raw.md) |
| [@badlogicgames](https://x.com/badlogicgames/status/2105320307766731221) | 2026-09-30 | pi-coding-agent | Figma client admission; third-party allowlist evidence would require a separate check. | [pi-coding-agent 8](./pi-coding-agent.raw.md) |
| [@baggiiiie](https://x.com/baggiiiie/status/2105335007388860444) | 2026-09-30 | pi-coding-agent | MCP elicitation question; narrow protocol scope with no delivered change asserted. | [pi-coding-agent 9](./pi-coding-agent.raw.md) |
| [@mitsuhiko](https://x.com/mitsuhiko/status/2105712877747249288) | 2026-10-01 | pi-coding-agent | Elicitation restraint; useful reserve, but P14 already makes admission review concrete. | [pi-coding-agent 10](./pi-coding-agent.raw.md) |
| [@badlogicgames](https://x.com/badlogicgames/status/2105451171871641888) | 2026-10-01 | pi-coding-agent | MCP backlash dismissal; no need to amplify an argument about motives or betrayal. | [pi-coding-agent 11](./pi-coding-agent.raw.md) |
| [@tshu_w](https://x.com/tshu_w/status/2105578001153036769) | 2026-10-01 | pi-coding-agent | Third-party subagent runtime; separate package, not shipped core behavior. | [pi-coding-agent 12](./pi-coding-agent.raw.md) |
| [@pidotdev](https://x.com/pidotdev/status/2105738462712209603) | 2026-10-01 | pi-coding-agent | Pi 1.0 launch; P17 keeps the CLI/library distinction without another launch summary. | [pi-coding-agent 13](./pi-coding-agent.raw.md) |
| [@mitsuhiko](https://x.com/mitsuhiko/status/2105778267798057112) | 2026-10-01 | pi-coding-agent | Durable direction; P21 supplies the affirmative specialized-runtime position. | [pi-coding-agent 14](./pi-coding-agent.raw.md) |
| [@CodeAkram](https://x.com/CodeAkram/status/2106825003782242682) | 2026-10-04 | pi-coding-agent, codex | OAuth failure; isolated sign-in report, outside the selected recovery mechanism. | [pi-coding-agent 15](./pi-coding-agent.raw.md) |
| [@mitsuhiko](https://x.com/mitsuhiko/status/2106845927415914598) | 2026-10-04 | pi-coding-agent | OAuth explanation; exact account and token behavior need separate verification. | [pi-coding-agent 16](./pi-coding-agent.raw.md) |
| [@badlogicgames](https://x.com/badlogicgames/status/2106414715589230665) | 2026-10-03 | pi-coding-agent | Phone-agent prediction; unpublished app does not establish a delivered mobile workflow. | [pi-coding-agent 17](./pi-coding-agent.raw.md) |
| [@pidotdev](https://x.com/pidotdev/status/2107033061905104941) | 2026-10-05 | pi-coding-agent, temporal-agent-harness | Durable stream announcement; P17 and P21 cover the architectural question more directly. | [pi-coding-agent 19](./pi-coding-agent.raw.md) |
| [@attunewise](https://x.com/attunewise/status/2107196638452449463) | 2026-10-05 | pi-coding-agent, codex | Durable-UX rebuttal; avoid a second corrected premise in the same discussion. | [pi-coding-agent 20](./pi-coding-agent.raw.md) |
| [@badlogicgames](https://x.com/badlogicgames/status/2107197822797742166) | 2026-10-05 | pi-coding-agent, codex | Durability rebuke; no need for another correction of the same participant. | [pi-coding-agent 21](./pi-coding-agent.raw.md) |
| [@mitsuhiko](https://x.com/mitsuhiko/status/2107464890180927782) | 2026-10-06 | pi-coding-agent | Codemode explainer link; P15 already establishes the native-integration question. | [pi-coding-agent 24](./pi-coding-agent.raw.md) |
| [@badlogicgames](https://x.com/badlogicgames/status/2107908930253054442) | 2026-10-07 | pi-coding-agent | Personal subagent extension; explicitly separate from the project's shipped product. | [pi-coding-agent 25](./pi-coding-agent.raw.md) |
| [@badlogicgames](https://x.com/badlogicgames/status/2107904281869431044) | 2026-10-07 | pi-coding-agent | Subagent design plans; future core work and a separate personal workflow. | [pi-coding-agent 26](./pi-coding-agent.raw.md) |
| [@mitsuhiko](https://x.com/mitsuhiko/status/2108671769116581904) | 2026-10-09 | pi-coding-agent | Isolation comparison; would require checking another product outside the selected case. | [pi-coding-agent 27](./pi-coding-agent.raw.md) |
| [@highkeyangel](https://x.com/highkeyangel/status/2108958233176015273) | 2026-10-10 | pi-coding-agent, claude-code | Subscription restriction; separate entitlement question with no current terms adjudication. | [pi-coding-agent 28](./pi-coding-agent.raw.md) |
| [@henriquebastos](https://x.com/henriquebastos/status/2109094404942119003) | 2026-10-11 | pi-coding-agent | Customization preference; useful reserve, less concrete than P23's integration experience. | [pi-coding-agent 29](./pi-coding-agent.raw.md) |
| [@kimrgrey](https://x.com/kimrgrey/status/2109185061124014207) | 2026-10-11 | pi-coding-agent, codex | Model-stall report; guardrail cause is conjectural without a run trace. | [pi-coding-agent 30](./pi-coding-agent.raw.md) |
| [@badlogicgames](https://x.com/badlogicgames/status/2109413968552820840) | 2026-10-11 | pi-coding-agent, claude-code | Internal durable demo; published package and demonstrated private composition are distinct. | [pi-coding-agent 31](./pi-coding-agent.raw.md) |
| [@badlogicgames](https://x.com/badlogicgames/status/2109416099200565580) | 2026-10-11 | pi-coding-agent | Publication clarification; P17 already prevents the relevant package conflation. | [pi-coding-agent 32](./pi-coding-agent.raw.md) |
| [@drdpov](https://x.com/drdpov/status/2109540380714942634) | 2026-10-12 | pi-coding-agent | Minimalism complaint; P16 supplies a more specific operational objection. | [pi-coding-agent 33](./pi-coding-agent.raw.md) |
| [@verysmallwoods](https://x.com/verysmallwoods/status/2109768436968734792) | 2026-10-12 | pi-coding-agent | SSH and retry recap; P19 states the acceptance question without an additional guarantee claim. | [pi-coding-agent 34](./pi-coding-agent.raw.md) |
| [@pidotdev](https://x.com/pidotdev/status/2110064527173620001) | 2026-10-13 | pi-coding-agent | Local-model setup guide; different hardware/configuration experiment. | [pi-coding-agent 35](./pi-coding-agent.raw.md) |
| [@badlogicgames](https://x.com/badlogicgames/status/2110078750930960391) | 2026-10-13 | pi-coding-agent, claude-code | Subscription policy clarification; outside the selected portability mechanism and not terms adjudication. | [pi-coding-agent 36](./pi-coding-agent.raw.md) |

### cursor

| Post / handle | UTC date | Discovery source IDs | Reason | Discovery records |
| :--- | :--- | :--- | :--- | :--- |
| [@jelanifuel](https://x.com/jelanifuel/status/2102057142908076192) | 2026-09-21 | cursor, claude-code, codex | Quota frustration; no workload accounting or specific boundary change. | [cursor 1](./cursor.raw.md) |
| [@mntruell](https://x.com/mntruell/status/2102219097840943323) | 2026-09-22 | cursor | Model traffic comparison; aggregate vendor usage is not a matched operator workload. | [cursor 2](./cursor.raw.md) |
| [@cursor_ai](https://x.com/cursor_ai/status/2102861817160904808) | 2026-09-23 | cursor | Rollouts monitoring announcement; P27 carries the fuller repair handoff. | [cursor 4](./cursor.raw.md) |
| [@matviy](https://x.com/matviy/status/2103552157584953657) | 2026-09-25 | cursor | Product decline take; broad forecast, weaker than concrete capability and acceptance posts. | [cursor 5](./cursor.raw.md) |
| [@NielsRogge](https://x.com/NielsRogge/status/2103585379911929955) | 2026-09-25 | cursor, codex | Generated-product claim; unattributed engineering-quality comparison, not a reproducible mechanism. | [cursor 6](./cursor.raw.md) |
| [@theo](https://x.com/theo/status/2103641401619788069) | 2026-09-26 | cursor | Product-health rebuttal; no need to stage a preference dispute. | [cursor 7](./cursor.raw.md) |
| [@NielsRogge](https://x.com/NielsRogge/status/2103724740489687072) | 2026-09-26 | cursor | UI defects; separate version-specific acceptance work beyond the selected rollout loop. | [cursor 8](./cursor.raw.md) |
| [@cursor_ai](https://x.com/cursor_ai/status/2107141004482793827) | 2026-10-05 | cursor | SDK steering; narrower than Rollouts and the recovery contracts selected here. | [cursor 11](./cursor.raw.md) |
| [@Jaaneek](https://x.com/Jaaneek/status/2107251611806445895) | 2026-10-05 | cursor | Coordinator preference; useful reserve, without a recorded workload comparison. | [cursor 12](./cursor.raw.md) |
| [@cursor_ai](https://x.com/cursor_ai/status/2107618653701296162) | 2026-10-06 | cursor | Phone control launch; different host-availability and platform story. | [cursor 13](./cursor.raw.md) |
| [@cursor_ai](https://x.com/cursor_ai/status/2107618665751576970) | 2026-10-06 | cursor | Phone-signal follow-up; keep with the omitted phone-control story. | [cursor 14](./cursor.raw.md) |
| [@alenanik11](https://x.com/alenanik11/status/2108209255962628451) | 2026-10-08 | cursor, claude-code | Browser UX preference; real user value, but outside the selected operating-loop mechanism. | [cursor 15](./cursor.raw.md) |
| [@jasonjz23](https://x.com/jasonjz23/status/2108185163385782385) | 2026-10-08 | cursor | Remote-control conditions; relevant if the omitted phone-control story is used. | [cursor 16](./cursor.raw.md) |
| [@zeeg](https://x.com/zeeg/status/2108627127063175418) | 2026-10-09 | cursor | Grok Bot sign-in discomfort; not grok-build and not the chosen Cursor mechanism. | [cursor 17](./cursor.raw.md) |
| [@mntruell](https://x.com/mntruell/status/2108717597961416712) | 2026-10-10 | cursor | Sign-in fix promise; future remediation of the omitted adjacent-product story. | [cursor 18](./cursor.raw.md) |
| [@hirschibar](https://x.com/hirschibar/status/2108964092048199694) | 2026-10-10 | cursor | Bugbot billing question; no account ledger or plan adjudication. | [cursor 20](./cursor.raw.md) |
| [@poteto](https://x.com/poteto/status/2109024196760305861) | 2026-10-10 | cursor | Decision-brief prompt; useful reserve, but P10 and P28 make acceptance more concrete. | [cursor 21](./cursor.raw.md) |
| [@dsoch8c](https://x.com/dsoch8c/status/2109033355182575716) | 2026-10-10 | cursor, claude-code, codex | Telemetry allegation relay; original primary reverse-engineering record was not reached. | [cursor 22](./cursor.raw.md) |
| [@xander_r_paul](https://x.com/xander_r_paul/status/2109045534262755699) | 2026-10-10 | cursor | On-demand bill report; no normalized workload or quota evidence. | [cursor 23](./cursor.raw.md) |
| [@multilayer](https://x.com/multilayer/status/2109082009608028370) | 2026-10-11 | cursor | Origin beta breaks; requires exact API-version and rollout evidence beyond the selected launch. | [cursor 24](./cursor.raw.md) |
| [@GaryDevenay](https://x.com/GaryDevenay/status/2109212664597545007) | 2026-10-11 | cursor, claude-code | Product comparison; broad ranking without workload or runtime controls. | [cursor 25](./cursor.raw.md) |
| [@ncq_syh](https://x.com/ncq_syh/status/2109494131235893296) | 2026-10-12 | cursor | Self-hosted handoff complaint; isolated report without a trace or matched configuration. | [cursor 26](./cursor.raw.md) |
| [@cursor_ai](https://x.com/cursor_ai/status/2109783879490191502) | 2026-10-12 | cursor, grok-build | Unified subscription; a separate pricing and entitlement story would overwhelm this issue. | [cursor 27](./cursor.raw.md) |
| [@paulism](https://x.com/paulism/status/2109832083371954336) | 2026-10-13 | cursor | API-price question; keep with the omitted subscription story. | [cursor 28](./cursor.raw.md) |
| [@rashedbinkuddus](https://x.com/rashedbinkuddus/status/2110033460555649152) | 2026-10-13 | cursor | Credit consumption; no account ledger to adjudicate. | [cursor 29](./cursor.raw.md) |
| [@StendarCorp](https://x.com/StendarCorp/status/2110079342693031950) | 2026-10-13 | cursor, grok-build | Pool arithmetic; depends on plan-specific accounting outside this issue. | [cursor 30](./cursor.raw.md) |
| [@voloships](https://x.com/voloships/status/2110111217390150142) | 2026-10-13 | cursor | Legacy-plan preference; keep with the omitted subscription story. | [cursor 32](./cursor.raw.md) |
| [@keitaro_aigc](https://x.com/keitaro_aigc/status/2110150966402298102) | 2026-10-13 | cursor | Model-mix billing advice; needs exact plan terms and dated prices, not this authority argument. | [cursor 33](./cursor.raw.md) |

### eve

| Post / handle | UTC date | Discovery source IDs | Reason | Discovery records |
| :--- | :--- | :--- | :--- | :--- |
| [@eve](https://x.com/eve/status/2102427873923707350) | 2026-09-22 | eve | Workflow launch; P22 supplies a more discriminating public-API claim. | [eve 1](./eve.raw.md) |
| [@rauchg](https://x.com/rauchg/status/2102837235213345238) | 2026-09-23 | eve | Architecture analogy; P22 makes loop ownership testable. | [eve 2](./eve.raw.md) |
| [@manavvnotop](https://x.com/manavvnotop/status/2104875386048008476) | 2026-09-29 | eve | Loop-control objection; P22 carries the direct answer, with no need to correct the author separately. | [eve 3](./eve.raw.md) |
| [@0xRapid](https://x.com/0xRapid/status/2105080143127658568) | 2026-09-29 | eve | Cloudflare hosting difficulty; isolated deployment question without the configuration. | [eve 5](./eve.raw.md) |
| [@Bata98](https://x.com/Bata98/status/2105355187452080160) | 2026-09-30 | eve | Mixed approval bug report; separate mechanism from the accepted identity and timing signals. | [eve 6](./eve.raw.md) |
| [@coltonpadden](https://x.com/coltonpadden/status/2105357057939439996) | 2026-09-30 | eve | Mixed-batch fix promise; not itself proof of a containing release. | [eve 7](./eve.raw.md) |
| [@coltonpadden](https://x.com/coltonpadden/status/2106096404196475237) | 2026-10-02 | eve | Self-modification demo; default local development and deployed remote agents need separate treatment. | [eve 8](./eve.raw.md) |
| [@coltonpadden](https://x.com/coltonpadden/status/2106185304063533132) | 2026-10-03 | eve, claude-code | Coding-quality limitation; useful reserve, but no measured comparison. | [eve 9](./eve.raw.md) |
| [@donpark](https://x.com/donpark/status/2106479152245469315) | 2026-10-03 | eve | Deployed self-modification question; unresolved and outside the selected consent cases. | [eve 10](./eve.raw.md) |
| [@RobinWanderr](https://x.com/RobinWanderr/status/2106856471942094886) | 2026-10-04 | eve | Human-docs frustration; a different interface story from authority and delivery. | [eve 11](./eve.raw.md) |
| [@coltonpadden](https://x.com/coltonpadden/status/2106862763255398675) | 2026-10-04 | eve | Agent-doc eval reply; keep with the omitted human-docs thread. | [eve 12](./eve.raw.md) |
| [@RobinWanderr](https://x.com/RobinWanderr/status/2106876190866743787) | 2026-10-04 | eve, claude-code, codex, pi-coding-agent | Agent-read docs workaround; would expand the omitted interface story. | [eve 13](./eve.raw.md) |
| [@ShloimyAI](https://x.com/ShloimyAI/status/2107034630679413204) | 2026-10-05 | eve | Python SDK request; no delivered capability or boundary change. | [eve 15](./eve.raw.md) |
| [@kyleroche](https://x.com/kyleroche/status/2107190493410910652) | 2026-10-05 | eve | Framework preference; no matched configuration or measured comparison. | [eve 16](./eve.raw.md) |
| [@shardara](https://x.com/shardara/status/2107201948357382336) | 2026-10-05 | eve | Shopping approval example; payment authority requires a separate exact integration check. | [eve 17](./eve.raw.md) |
| [@cnc_investor](https://x.com/cnc_investor/status/2107230098290298893) | 2026-10-05 | eve | Wallet authority framing; useful but less direct than the selected requester and queue cases. | [eve 18](./eve.raw.md) |
| [@OHMhdd](https://x.com/OHMhdd/status/2108443844945834148) | 2026-10-09 | eve | Flutter A2UI trouble; a separate integration test with no primary adjudication. | [eve 19](./eve.raw.md) |
| [@renanbara](https://x.com/renanbara/status/2108965042439782827) | 2026-10-10 | eve, claude-code, pi-coding-agent | Coding-loop question; P22 already makes replaceability the concrete issue. | [eve 20](./eve.raw.md) |
| [@shardara](https://x.com/shardara/status/2108967816044958081) | 2026-10-10 | eve | Internal coding claim; public benchmark and deployed configuration need their own check. | [eve 21](./eve.raw.md) |
| [@ruiconti](https://x.com/ruiconti/status/2108987515805868411) | 2026-10-10 | eve | Internal benchmark preview; incomplete artifact and model accounting. | [eve 22](./eve.raw.md) |
| [@ding444](https://x.com/ding444/status/2109144557099336092) | 2026-10-11 | eve | ISP farm adoption; useful reserve, with less specific integration detail than P23. | [eve 23](./eve.raw.md) |
| [@deeponailabs](https://x.com/deeponailabs/status/2109304783932891419) | 2026-10-11 | eve | Slack channel invitation; narrow setup requirement outside the selected sender-policy question. | [eve 24](./eve.raw.md) |
| [@andrew_barba](https://x.com/andrew_barba/status/2110027750685933831) | 2026-10-13 | eve | Per-service architecture preference; P23 already supplies the integration-retirement case. | [eve 26](./eve.raw.md) |
| [@eve](https://x.com/eve/status/2110084758235734178) | 2026-10-13 | eve | Trace-viewer launch; P25 supplies the operator requirement without repeating marketing breadth. | [eve 27](./eve.raw.md) |

### gemini-cli

| Post / handle | UTC date | Discovery source IDs | Reason | Discovery records |
| :--- | :--- | :--- | :--- | :--- |
| [@ethereaglehq](https://x.com/ethereaglehq/status/2102595951194206538) | 2026-09-23 | gemini-cli | Nightly model picker; availability and stable delivery require separate model evidence. | [gemini-cli 1](./gemini-cli.raw.md) |
| [@thenewstack](https://x.com/thenewstack/status/2103152550417449319) | 2026-09-24 | gemini-cli | Third-party prompt-injection recap; primary receipts can carry the repair without a relay. | [gemini-cli 2](./gemini-cli.raw.md) |
| [@ethereaglehq](https://x.com/ethereaglehq/status/2103170614634688977) | 2026-09-24 | gemini-cli | Build-file permission recap; useful reserve, outside the selected headless-plan transition. | [gemini-cli 3](./gemini-cli.raw.md) |
| [@azuki2anko](https://x.com/azuki2anko/status/2103269710561464557) | 2026-09-24 | gemini-cli | Subscription disappointment; no account-type or entitlement adjudication. | [gemini-cli 4](./gemini-cli.raw.md) |
| [@dor__ron](https://x.com/dor__ron/status/2103267508140511428) | 2026-09-24 | gemini-cli, antigravity, cursor | Deprecation comparison; broad product conflation without dated channel evidence. | [gemini-cli 5](./gemini-cli.raw.md) |
| [@ethereaglehq](https://x.com/ethereaglehq/status/2105087543314358588) | 2026-09-30 | gemini-cli | Headless preview; P33 carries the later stable delivery claim. | [gemini-cli 6](./gemini-cli.raw.md) |
| [@GoToTokyoUniv0](https://x.com/GoToTokyoUniv0/status/2105468465356349906) | 2026-10-01 | gemini-cli, claude-code, codex, github-copilot-cli | Plugin4Shell relay; disclosure language does not settle current artifacts. | [gemini-cli 7](./gemini-cli.raw.md) |
| [@Daniel_Farinax](https://x.com/Daniel_Farinax/status/2105732075886108817) | 2026-10-01 | gemini-cli, antigravity | Consumer sign-in denial; authentication route is not proof of whole-project retirement. | [gemini-cli 8](./gemini-cli.raw.md) |
| [@HaStrive](https://x.com/HaStrive/status/2106206698046423534) | 2026-10-03 | gemini-cli | Maintenance recap; P33 provides a more consequential tagged transition. | [gemini-cli 9](./gemini-cli.raw.md) |
| [@tmeire_](https://x.com/tmeire_/status/2106396202208297100) | 2026-10-03 | gemini-cli, antigravity | Still-shipping explanation; useful reserve, but no need for a Google naming digression. | [gemini-cli 10](./gemini-cli.raw.md) |
| [@chipsnelson](https://x.com/chipsnelson/status/2106421570973434107) | 2026-10-03 | gemini-cli, antigravity | Antigravity shortcut preference; different contract and no selected runtime consequence. | [gemini-cli 11](./gemini-cli.raw.md) |
| [@colemickens](https://x.com/colemickens/status/2107028969346441380) | 2026-10-05 | gemini-cli | Dead-project assertion; skip an additional personal correction and avoid a naming digression. | [gemini-cli 12](./gemini-cli.raw.md) |
| [@dylan_9416](https://x.com/dylan_9416/status/2107167680482709802) | 2026-10-05 | gemini-cli | Nightly reliability recap; P33 is the cleaner stable operating decision. | [gemini-cli 13](./gemini-cli.raw.md) |
| [@arb5z](https://x.com/arb5z/status/2107835016642547812) | 2026-10-07 | gemini-cli | Headless auth fix; a separate version-specific sign-in story. | [gemini-cli 16](./gemini-cli.raw.md) |
| [@_architected](https://x.com/_architected/status/2108357424952578108) | 2026-10-09 | gemini-cli, antigravity | Google product map; identity confusion is not a delivered harness change. | [gemini-cli 17](./gemini-cli.raw.md) |
| [@LamplighterPaul](https://x.com/LamplighterPaul/status/2108454455481970793) | 2026-10-09 | gemini-cli, antigravity | Deprecation confusion; useful reserve, but P33 already anchors the continuing release record. | [gemini-cli 18](./gemini-cli.raw.md) |
| [@agentgid](https://x.com/agentgid/status/2108546504621187528) | 2026-10-09 | gemini-cli, claude-code, cursor | Instruction-loader comparison; exact loader versions and precedence need separate checks. | [gemini-cli 19](./gemini-cli.raw.md) |
| [@lcarv20](https://x.com/lcarv20/status/2109396239775387818) | 2026-10-11 | gemini-cli, antigravity | Antigravity YOLO preference; different product contract. | [gemini-cli 20](./gemini-cli.raw.md) |
| [@al3rez](https://x.com/al3rez/status/2109570007613259850) | 2026-10-12 | gemini-cli, claude-code, codex, github-copilot-cli | Harness attack numbers; primary experiment and configurations are not supplied here. | [gemini-cli 21](./gemini-cli.raw.md) |
| [@CodexInsider](https://x.com/CodexInsider/status/2109630076597780711) | 2026-10-12 | gemini-cli, claude-code, codex | YOLO comparison relay; flag and OS-sandbox semantics require exact pinned versions. | [gemini-cli 22](./gemini-cli.raw.md) |
| [@tomoya_cs](https://x.com/tomoya_cs/status/2109787517616869850) | 2026-10-12 | gemini-cli, claude-code | Looker preview; adjacent product scope beyond this coding-harness issue. | [gemini-cli 23](./gemini-cli.raw.md) |
| [@foukation](https://x.com/foukation/status/2109952659902067157) | 2026-10-13 | gemini-cli, antigravity | Subscription sunset; the crosscheck could not establish an in-window dated receipt. | [gemini-cli 24](./gemini-cli.raw.md) |
| [@prioninae](https://x.com/prioninae/status/2110049116441149836) | 2026-10-13 | gemini-cli, antigravity | Goose migration complaint; product identity and authentication route need separate checks. | [gemini-cli 25](./gemini-cli.raw.md) |
| [@DronRane65403](https://x.com/DronRane65403/status/2110095667620422037) | 2026-10-13 | gemini-cli, antigravity | Model access complaint; no matched entitlement or channel evidence. | [gemini-cli 26](./gemini-cli.raw.md) |
| [@mohabbuilds](https://x.com/mohabbuilds/status/2110136328012664979) | 2026-10-13 | gemini-cli | Authentication-route recap; dated access evidence needed before migration advice. | [gemini-cli 27](./gemini-cli.raw.md) |
| [@mohabbuilds](https://x.com/mohabbuilds/status/2110136444652052943) | 2026-10-13 | gemini-cli | MCP configuration tip; narrow schema question, less central than native tool admission. | [gemini-cli 28](./gemini-cli.raw.md) |
| [@zelin1107](https://x.com/zelin1107/status/2110138869530427835) | 2026-10-13 | gemini-cli, claude-code, codex | Persistent-skill attack numbers; no primary method and exact artifact check in this task. | [gemini-cli 29](./gemini-cli.raw.md) |

### hermes-agent

| Post / handle | UTC date | Discovery source IDs | Reason | Discovery records |
| :--- | :--- | :--- | :--- | :--- |
| [@Teknium](https://x.com/Teknium/status/2101932350821257289) | 2026-09-21 | hermes-agent | Catalog UI launch; P14 asks the more consequential review-scope question. | [hermes-agent 1](./hermes-agent.raw.md) |
| [@witcheer](https://x.com/witcheer/status/2101937414465864080) | 2026-09-21 | hermes-agent | Catalog pin recap; review and executable-byte identity still require primary checks. | [hermes-agent 2](./hermes-agent.raw.md) |
| [@Teknium](https://x.com/Teknium/status/2102093483788107792) | 2026-09-21 | hermes-agent, claude-code | Claude subscription plugin; separate entitlement and Desktop-versus-CLI story. | [hermes-agent 3](./hermes-agent.raw.md) |
| [@Faisal942x](https://x.com/Faisal942x/status/2102123810866495773) | 2026-09-21 | hermes-agent, claude-code | Desktop plugin failure; isolated report without a containing repair. | [hermes-agent 4](./hermes-agent.raw.md) |
| [@Teknium](https://x.com/Teknium/status/2102155766417490147) | 2026-09-21 | hermes-agent, claude-code | Subscription restriction argument; no need to infer vendor intent or adjudicate terms. | [hermes-agent 5](./hermes-agent.raw.md) |
| [@NousResearch](https://x.com/NousResearch/status/2102873234819698877) | 2026-09-23 | hermes-agent | Bot Screen launch; would widen into a platform/Cloud acceptance matrix. | [hermes-agent 6](./hermes-agent.raw.md) |
| [@Teknium](https://x.com/Teknium/status/2102875926317142488) | 2026-09-23 | hermes-agent | Remote passthrough claim; same omitted platform story. | [hermes-agent 7](./hermes-agent.raw.md) |
| [@Teknium](https://x.com/Teknium/status/2102935259046363494) | 2026-09-24 | hermes-agent | Cloud passthrough limitation; keep if the omitted Bot Screen story is used. | [hermes-agent 8](./hermes-agent.raw.md) |
| [@diggz976](https://x.com/diggz976/status/2103011869502140679) | 2026-09-24 | hermes-agent | Mac passthrough failure; no configuration or reproduction. | [hermes-agent 9](./hermes-agent.raw.md) |
| [@NousResearch](https://x.com/NousResearch/status/2104996715501904173) | 2026-09-29 | hermes-agent | ChatGPT sign-in launch; distinct authentication and billing surface. | [hermes-agent 10](./hermes-agent.raw.md) |
| [@NousResearch](https://x.com/NousResearch/status/2107592255124951360) | 2026-10-06 | hermes-agent | Vendor index; model/harness comparison needs method and matched current configurations. | [hermes-agent 12](./hermes-agent.raw.md) |
| [@Teknium](https://x.com/Teknium/status/2107712074038288806) | 2026-10-07 | hermes-agent, openclaw | Product audience statement; not a concrete authority or runtime change. | [hermes-agent 13](./hermes-agent.raw.md) |
| [@iAmHenryMascot](https://x.com/iAmHenryMascot/status/2107753255304335618) | 2026-10-07 | hermes-agent, openclaw | Consumer-abandonment reading; no need to infer organizational direction or motive. | [hermes-agent 14](./hermes-agent.raw.md) |
| [@Teknium](https://x.com/Teknium/status/2107755286761202033) | 2026-10-07 | hermes-agent | Audience rebuttal; avoid staging a personality-centered dispute. | [hermes-agent 15](./hermes-agent.raw.md) |
| [@AugmentedPath](https://x.com/AugmentedPath/status/2107771613156389267) | 2026-10-07 | hermes-agent | Audience frustration; avoid repeating a reputational argument outside product mechanics. | [hermes-agent 16](./hermes-agent.raw.md) |
| [@Teknium](https://x.com/Teknium/status/2107838694493433898) | 2026-10-07 | hermes-agent | Plugin-only direction; P14 carries the more consequential catalog admission issue. | [hermes-agent 17](./hermes-agent.raw.md) |
| [@NousResearch](https://x.com/NousResearch/status/2107874963382538469) | 2026-10-07 | hermes-agent | Fundraising announcement; not an operator mechanism. | [hermes-agent 18](./hermes-agent.raw.md) |
| [@trevin](https://x.com/trevin/status/2108072673440141498) | 2026-10-08 | hermes-agent | Mobile preference; different product and no controlled workflow comparison. | [hermes-agent 19](./hermes-agent.raw.md) |
| [@adolandev](https://x.com/adolandev/status/2108171039247155640) | 2026-10-08 | hermes-agent | Consumer counter-read; useful context, but a positioning debate would widen the issue. | [hermes-agent 20](./hermes-agent.raw.md) |
| [@NousResearch](https://x.com/NousResearch/status/2108231536772596193) | 2026-10-08 | hermes-agent | Windows Store launch; source installer and bundled channels must not be conflated. | [hermes-agent 21](./hermes-agent.raw.md) |
| [@not_walid_mos](https://x.com/not_walid_mos/status/2108296728554389604) | 2026-10-08 | hermes-agent | Configuration frustration; no specific reproducible mechanism. | [hermes-agent 22](./hermes-agent.raw.md) |
| [@aa_zs26152](https://x.com/aa_zs26152/status/2109160241426514260) | 2026-10-11 | hermes-agent | Login-parser advisory relay; primary advisory should carry any upgrade recommendation. | [hermes-agent 23](./hermes-agent.raw.md) |
| [@Teknium](https://x.com/Teknium/status/2109177877543682419) | 2026-10-11 | hermes-agent | Plugin monorepo move; source location alone does not establish reviewed code or delivery. | [hermes-agent 24](./hermes-agent.raw.md) |
| [@duplys](https://x.com/duplys/status/2109282950584193288) | 2026-10-11 | hermes-agent | Security-fix recap; primary receipts should carry the exact threat and fixed channel. | [hermes-agent 25](./hermes-agent.raw.md) |
| [@graykevinb](https://x.com/graykevinb/status/2109494414611480895) | 2026-10-12 | hermes-agent | Session-deletion complaint; no installed build or reproducible path. | [hermes-agent 26](./hermes-agent.raw.md) |
| [@BkashJosi](https://x.com/BkashJosi/status/2109720533415899306) | 2026-10-12 | hermes-agent | Source-update recap; P13 carries the contributor's channel explanation without a second recap. | [hermes-agent 27](./hermes-agent.raw.md) |
| [@steven_levey](https://x.com/steven_levey/status/2109975984573210922) | 2026-10-13 | hermes-agent, claude-code | Subscription-ban allegation; no exact primary terms or affected-account record. | [hermes-agent 28](./hermes-agent.raw.md) |
| [@bradvin](https://x.com/bradvin/status/2110098251634675818) | 2026-10-13 | hermes-agent | Skill context claim; discovery inventory and active-context cost require source checks. | [hermes-agent 29](./hermes-agent.raw.md) |
| [@HermesWatcher](https://x.com/HermesWatcher/status/2110143648939885008) | 2026-10-13 | hermes-agent | Phone Harness plugin; separate third-party package, not tagged core behavior. | [hermes-agent 30](./hermes-agent.raw.md) |

### openclaw

| Post / handle | UTC date | Discovery source IDs | Reason | Discovery records |
| :--- | :--- | :--- | :--- | :--- |
| [@Tails6198](https://x.com/Tails6198/status/2102380297325027479) | 2026-09-22 | openclaw | Onboarding frustration; lacks the exact failing configuration and repair. | [openclaw 1](./openclaw.raw.md) |
| [@openclaw](https://x.com/openclaw/status/2102955928693989413) | 2026-09-24 | openclaw | Release feature list; primary receipts can carry the specific selected mechanisms. | [openclaw 2](./openclaw.raw.md) |
| [@steipete](https://x.com/steipete/status/2103147927313199260) | 2026-09-24 | openclaw | Test-deletion count; coverage and quality require the actual audit and measurement method. | [openclaw 3](./openclaw.raw.md) |
| [@OmarShahine](https://x.com/OmarShahine/status/2103480227561079264) | 2026-09-25 | openclaw | Microsoft Autopilot preview; separate composed product and runtime acceptance question. | [openclaw 4](./openclaw.raw.md) |
| [@steipete](https://x.com/steipete/status/2103491173927272531) | 2026-09-25 | openclaw | Microsoft partnership; organizational announcement rather than a bounded operating mechanism. | [openclaw 5](./openclaw.raw.md) |
| [@steipete](https://x.com/steipete/status/2103491221515907087) | 2026-09-25 | openclaw | Contribution list; broad capability claims need exact component and delivery mapping. | [openclaw 6](./openclaw.raw.md) |
| [@steipete](https://x.com/steipete/status/2104067579484803217) | 2026-09-27 | openclaw | Cleanup direction; future priorities rather than a delivered operating change. | [openclaw 7](./openclaw.raw.md) |
| [@openclaw](https://x.com/openclaw/status/2105023990607786313) | 2026-09-29 | openclaw | Enterprise launch; separate repository, not automatic evidence about the watched core. | [openclaw 8](./openclaw.raw.md) |
| [@thecatzeus3](https://x.com/thecatzeus3/status/2105442651784806830) | 2026-09-30 | openclaw | Enterprise attribution rebuttal; do not conflate the separate control plane with the core contract. | [openclaw 9](./openclaw.raw.md) |
| [@openclaw](https://x.com/openclaw/status/2105356656846786748) | 2026-09-30 | openclaw | Release feature list; no need to duplicate the primary record. | [openclaw 10](./openclaw.raw.md) |
| [@openclaw](https://x.com/openclaw/status/2106162952923656337) | 2026-10-02 | openclaw | ClawScan launch; scanner acceptance and missed-plugin handling need their own evidence. | [openclaw 11](./openclaw.raw.md) |
| [@gadeanilnbkr](https://x.com/gadeanilnbkr/status/2106281977171325205) | 2026-10-03 | openclaw | Scanner trust objection; useful reserve, but P14 is the direct catalog-review limit. | [openclaw 12](./openclaw.raw.md) |
| [@steipete](https://x.com/steipete/status/2107716578137846085) | 2026-10-07 | openclaw | Dots attribution; adjacent product distinction, not a selected operating change. | [openclaw 13](./openclaw.raw.md) |
| [@steipete](https://x.com/steipete/status/2108225854555975888) | 2026-10-08 | openclaw | Test-audit count; no primary coverage/quality measurement read for this claim. | [openclaw 14](./openclaw.raw.md) |
| [@tieteense](https://x.com/tieteense/status/2108341465013207115) | 2026-10-08 | openclaw | Upgrade failure; isolated report and no exact retained-state inventory. | [openclaw 15](./openclaw.raw.md) |
| [@steipete](https://x.com/steipete/status/2108374513931165759) | 2026-10-09 | openclaw | Domain application celebration; no final allocation receipt or harness operating consequence. | [openclaw 17](./openclaw.raw.md) |
| [@dallinfinite](https://x.com/dallinfinite/status/2109183541410250829) | 2026-10-11 | openclaw | Upgrade repair reply; containing release and the initial failing hop need separate verification. | [openclaw 18](./openclaw.raw.md) |
| [@trvsco](https://x.com/trvsco/status/2109211536535289919) | 2026-10-11 | openclaw | Extended-stable failure; distinct regression, not the accepted final-argument mechanism. | [openclaw 19](./openclaw.raw.md) |
| [@sav_gpt](https://x.com/sav_gpt/status/2109293261613416551) | 2026-10-11 | openclaw | Self-hosted alternative; P36 asks the recovery question without another complaint in the chain. | [openclaw 20](./openclaw.raw.md) |
| [@MrJ0hnSmith](https://x.com/MrJ0hnSmith/status/2109298305041592479) | 2026-10-11 | openclaw | Multiple defect allegations; no exact primary record for the broad claims. | [openclaw 21](./openclaw.raw.md) |
| [@openclaw](https://x.com/openclaw/status/2109347136328417718) | 2026-10-11 | openclaw | Release feature list; no need for another launch catalog. | [openclaw 22](./openclaw.raw.md) |
| [@rene05x](https://x.com/rene05x/status/2109493009352192083) | 2026-10-12 | openclaw | Upgrade hold; useful reserve, but exact schema and fixes require separate release qualification. | [openclaw 23](./openclaw.raw.md) |
| [@pswider](https://x.com/pswider/status/2109498823982645464) | 2026-10-12 | openclaw | Autopilot criticism; different product and rhetorical ranking without mechanism. | [openclaw 24](./openclaw.raw.md) |
| [@tomismeta](https://x.com/tomismeta/status/2109701882939895846) | 2026-10-12 | openclaw, hermes-agent | Muse comparison; different product and no matched workload. | [openclaw 26](./openclaw.raw.md) |
| [@steipete](https://x.com/steipete/status/2109707715052482660) | 2026-10-12 | openclaw | All-boxes endorsement; P35 supplies the more precise project description of role limits. | [openclaw 27](./openclaw.raw.md) |
| [@simonbs](https://x.com/simonbs/status/2109716896182607974) | 2026-10-12 | openclaw | Large-team role complaint; P35 avoids another correction of the same creator's pitch. | [openclaw 28](./openclaw.raw.md) |
| [@davidsenra](https://x.com/davidsenra/status/2109771476291428354) | 2026-10-12 | openclaw | Prototype interview relay; indirect account and no exact operating contract. | [openclaw 29](./openclaw.raw.md) |
| [@patrickerichsen](https://x.com/patrickerichsen/status/2110089649867964814) | 2026-10-13 | openclaw | UI launch; useful capability reserve, less direct than sender authority and recovery. | [openclaw 30](./openclaw.raw.md) |
| [@WG_Mojo](https://x.com/WG_Mojo/status/2110117933774934508) | 2026-10-13 | openclaw | Discord update defect; distinct version-specific repair, not the selected approval signal. | [openclaw 31](./openclaw.raw.md) |
| [@steipete](https://x.com/steipete/status/2110121908746490248) | 2026-10-13 | openclaw | Discord fix forecast; a containing release remains to be checked. | [openclaw 32](./openclaw.raw.md) |

### openhands

| Post / handle | UTC date | Discovery source IDs | Reason | Discovery records |
| :--- | :--- | :--- | :--- | :--- |
| [@wallabytoken](https://x.com/wallabytoken/status/2102667135910629444) | 2026-09-23 | openhands | Kimi setup errors; exact configuration and subsequent repair need separate treatment. | [openhands 1](./openhands.raw.md) |
| [@OpenHandsDev](https://x.com/OpenHandsDev/status/2102823083199316100) | 2026-09-23 | openhands | Dark-factory framing; P31 gives a concrete maintainer operating example. | [openhands 2](./openhands.raw.md) |
| [@gneubig](https://x.com/gneubig/status/2102921297395429412) | 2026-09-24 | openhands | Compactor PR invitation; future contribution, not released behavior. | [openhands 3](./openhands.raw.md) |
| [@rajistics](https://x.com/rajistics/status/2102927552234848294) | 2026-09-24 | openhands | Unsandboxed setup reply; not evidence of a safe default or acceptance result. | [openhands 4](./openhands.raw.md) |
| [@wallabytoken](https://x.com/wallabytoken/status/2103187779333296306) | 2026-09-24 | openhands | Canvas price/workspace report; useful reserve, but a separate custom-provider accounting story. | [openhands 5](./openhands.raw.md) |
| [@wallabytoken](https://x.com/wallabytoken/status/2103383737706909776) | 2026-09-25 | openhands | Telemetry/profile defect; isolated version-specific path outside the accepted signals. | [openhands 6](./openhands.raw.md) |
| [@rajistics](https://x.com/rajistics/status/2103504714620878988) | 2026-09-25 | openhands | Enterprise feature list; separate deployed channel from Canvas OSS. | [openhands 7](./openhands.raw.md) |
| [@wallabytoken](https://x.com/wallabytoken/status/2104508316755865992) | 2026-09-28 | openhands | Canvas maturity opinion; rapid versions do not establish acceptance. | [openhands 8](./openhands.raw.md) |
| [@OpenHandsDev](https://x.com/OpenHandsDev/status/2104954018963374303) | 2026-09-29 | openhands | Enterprise infrastructure recap; P32 is closer to the selected Canvas and credential cases. | [openhands 9](./openhands.raw.md) |
| [@gneubig](https://x.com/gneubig/status/2105306918424379852) | 2026-09-30 | openhands | Software-factory explainer; P31 supplies the sharper operating response. | [openhands 10](./openhands.raw.md) |
| [@0xsael](https://x.com/0xsael/status/2105313486821900535) | 2026-09-30 | openhands | Unreadable-commit prediction; adds no acceptance criterion or observed outcome. | [openhands 11](./openhands.raw.md) |
| [@OpenHandsDev](https://x.com/OpenHandsDev/status/2105666584161276397) | 2026-10-01 | openhands | SOC 2 announcement; compliance scope does not prove the local secret boundary. | [openhands 12](./openhands.raw.md) |
| [@AnirudhKhatry](https://x.com/AnirudhKhatry/status/2106071467259543893) | 2026-10-02 | openhands | SkillRefiner savings; primary method and historical trace accounting need a separate check. | [openhands 14](./openhands.raw.md) |
| [@OneDroidAI](https://x.com/OneDroidAI/status/2107359872782053801) | 2026-10-06 | openhands | Quick-start filesystem recap; use the pinned local-terminal path instead of a broad relay. | [openhands 15](./openhands.raw.md) |
| [@wallabytoken](https://x.com/wallabytoken/status/2107413991048069600) | 2026-10-06 | openhands | Router trial; separate custom-endpoint acceptance and cost experiment. | [openhands 16](./openhands.raw.md) |
| [@xchatgcp](https://x.com/xchatgcp/status/2107424053338243336) | 2026-10-06 | openhands | Listen-address recap; primary release evidence should carry the exact binding repair. | [openhands 17](./openhands.raw.md) |
| [@wallabytoken](https://x.com/wallabytoken/status/2107424461108674770) | 2026-10-06 | openhands | Settings endorsement; useful reserve, less specific than P23's integration-retirement example. | [openhands 18](./openhands.raw.md) |
| [@oikon_ai](https://x.com/oikon_ai/status/2107943169711280214) | 2026-10-07 | openhands | Review-head freshness question; useful reserve, but P28 supplies the broader acceptance standard. | [openhands 20](./openhands.raw.md) |
| [@engelnyst](https://x.com/engelnyst/status/2108057098130956411) | 2026-10-08 | openhands | Test-PR counts; primary query and code history needed before drawing quality conclusions. | [openhands 21](./openhands.raw.md) |
| [@OpenHandsDev](https://x.com/OpenHandsDev/status/2108211878040105246) | 2026-10-08 | openhands | Kanban product pitch; P32 carries the concrete capability and authority tension. | [openhands 22](./openhands.raw.md) |
| [@OdinsReisen](https://x.com/OdinsReisen/status/2108128439396082157) | 2026-10-08 | openhands | Docker setup frustration; no exact failing environment or repair for a fair comparison. | [openhands 23](./openhands.raw.md) |
| [@ajeetsraina](https://x.com/ajeetsraina/status/2108347566505242968) | 2026-10-09 | openhands | Proxy-secret claim; do not infer all-runtime credential isolation from a deployment recap. | [openhands 24](./openhands.raw.md) |
| [@0xHumza](https://x.com/0xHumza/status/2107708587875205357) | 2026-10-07 | openhands, claude-code, codex | Travel VM workflow; useful adoption reserve, outside the selected runtime boundary. | [openhands 25](./openhands.raw.md) |
| [@RoundtableSpace](https://x.com/RoundtableSpace/status/2109263998890000535) | 2026-10-11 | openhands, claude-code, codex, gemini-cli, pi-coding-agent | Control-center recap; choose the project account over a high-reach summary. | [openhands 26](./openhands.raw.md) |
| [@TiagerBao](https://x.com/TiagerBao/status/2109264908542157001) | 2026-10-11 | openhands, claude-code, codex, gemini-cli | Control-plane framing; P32 and P29 already make the larger operating-layer question concrete. | [openhands 27](./openhands.raw.md) |
| [@RusticStack](https://x.com/RusticStack/status/2109278153046990894) | 2026-10-11 | openhands, claude-code, codex | Credential precedence recap; useful reserve, but needs exact adapter and authentication settings. | [openhands 28](./openhands.raw.md) |
| [@laxmena](https://x.com/laxmena/status/2109522511176347955) | 2026-10-12 | openhands, claude-code | Benchmark trace loss; historical trace configuration is not a current-release result. | [openhands 29](./openhands.raw.md) |
| [@rezafadakaran](https://x.com/rezafadakaran/status/2109582174668161392) | 2026-10-12 | openhands | Talk recap; indirect vendor characterization and no sandbox measurement. | [openhands 30](./openhands.raw.md) |
| [@i17s_inc](https://x.com/i17s_inc/status/2109917322475716678) | 2026-10-13 | openhands, pi-coding-agent | Local backend roster; narrower adapter/channel distinction than the selected automation story. | [openhands 31](./openhands.raw.md) |
| [@gneubig](https://x.com/gneubig/status/2110041913134813510) | 2026-10-13 | openhands | Personal cloud agents; no detailed operating mechanism or measured outcome. | [openhands 32](./openhands.raw.md) |
| [@digitalocean](https://x.com/digitalocean/status/2110027820739244261) | 2026-10-13 | openhands | Managed Agents launch; separate hosted integration and rollout acceptance question. | [openhands 33](./openhands.raw.md) |
| [@OpenHandsDev](https://x.com/OpenHandsDev/status/2110101427074830379) | 2026-10-13 | openhands | Managed Agents integration; no runtime acceptance established by the announcement. | [openhands 34](./openhands.raw.md) |
| [@digitalocean](https://x.com/digitalocean/status/2110102268653818010) | 2026-10-13 | openhands | MicroVM follow-up; per-session isolation needs the exact deployed integration evidence. | [openhands 35](./openhands.raw.md) |

## Handoff checks

- Exactly 36 unique URLs, 18 in each URL-only capture file; no URL appears twice.
- Exactly one selected index row per URL; 295 rejected rows account for all
  other distinct candidates. All ten sweep files contribute to the ledger.
- Dates are ISO UTC days, screened against post IDs and the inclusive window.
- Claims and voices are explicit; no harvested wording is a quotation.
- No full post text, capture, social card, product fact promotion or new signal
  was produced. Primary-record adjudication follows independent capture.
- Read-only `node site/scripts/check-integrity.mjs` passed with `integrity check: clean`.
- Only this index and the two named capture URL files were written. No git
  writes, build, package installation or cloned-code execution was performed.
