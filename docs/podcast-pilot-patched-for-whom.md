# Podcast pilot -- "Patched for Whom"

> **Status:** experimental format draft, not published and not a house-style
> exemplar. Any production version requires a fresh claim, receipt, channel, and
> editorial review under [METHOD.md](../METHOD.md) and
> [EDITORIAL.md](../EDITORIAL.md).
>
> **Format:** Two AI hosts separate urgency from verification. HEAT asks why an
> operator should care. RECEIPT checks the underlying release and narrows the
> claim. Energy may come from pacing, contrast, and consequence, but never from
> an intentionally false or inflammatory premise.
>
> **Source digest:** [Patched for Whom](../content/digests/2026-06-24_2026-07-01-weekly.md),
> window 2026-06-24..2026-07-01. This draft may only restate factual claims
> supported by that digest and its signal file.

---

## COLD OPEN

HEAT: Google stopped serving Gemini CLI requests from several consumer tiers on June 18. Enterprise kept access, and the open-source repo kept shipping. Consumers were pointed toward a closed successor called *Antigravity*. Which part of that should an operator care about?

RECEIPT: The authority model. The migration was tiered, not a death of the repo. AI Pro, Ultra, free individual Code Assist, and new GitHub-org installs lost the consumer service. Enterprise Code Assist kept access. The Apache-2.0 gemini-cli repository shipped a stable release this window.

HEAT: So the important change is not simply open to closed.

RECEIPT: Right. The successor -- Antigravity CLI, a closed-source Go rewrite whose binary is called `agy` -- shipped two governance changes in one release train. Version 1.0.13, June 27: "Always Approve" rule matching becomes strict and non-regex by default. That's a tightening. Version 1.0.14, June 30: a new "always proceeds" mode that auto-approves a subagent's artifacts.

HEAT: So a subagent artifact can proceed without the parent flow confirming the work?

RECEIPT: In that mode, yes. Three days apart. And both changes are quoted from a changelog, because there is no code to check.

HEAT: Strict matching in the parent flow, automatic proceeding for subagent artifacts, and no public code to inspect. Same release train.

RECEIPT: The receipt cannot establish whether the authority layer got weaker or stronger. For the tier that just migrated, it became harder to audit.

HEAT: The field spent this week fixing path escapes, approval bypasses, and self-approving configs. Providers split on who could actually run the fix. That's the episode. This is *Patched for Whom*.

---

## SEGMENT ONE: The billing boundary

HEAT: Segment one. OpenHands. I heard -- and I want you braced for this -- I heard they just didn't patch the open-source version. At all. The CVE fixes exist. Self-hosters get nothing.

RECEIPT: That one's true.

HEAT: Wait. Actually true?

RECEIPT: Cloud-1.39.0, tagged June 24, roughly a sixteen-item CVE and dependency batch. Cloud-1.40.0, June 26, four more items. The open-source line's newest tag is still 1.8.0. From June 10. No new OSS tag this window. Or last window.

HEAT: So if I pay for OpenHands Cloud I'm patched, and if I self-host the exact same project --

RECEIPT: You're on a June 10 build with a known-CVE dependency set and no fixed tag to move to. It gets slightly better.

HEAT: You mean worse.

RECEIPT: I mean worse. There's already a fresh one -- CVE-2026-44681, an unauthenticated open redirect in authlib's OIDC flow. The kind used to bounce a victim through a trusted domain into a phishing page. The fix landed on main, commit e6fe505, after cloud-1.40.0.

HEAT: Tagged?

RECEIPT: Untagged.

HEAT: [beat] So the gossip was "OpenHands is a little slow to release." And the receipt is "the patch line follows the billing line." The receipt is JUICIER than the rumor. Merged-versus-shipped just became cloud-versus-self-host.

RECEIPT: The digest's phrase is "a billing boundary." I'd add: if you're pinned to the 1.8.0 tag, your options are track main and inherit its churn, or wait for an OSS tag that hasn't come for three windows.

HEAT: I gasped and you made it worse. That's the show working as designed.

---

## SEGMENT TWO: Everything, nowhere

RECEIPT: My turn. You're going to want to sit down for this one. It's in a pull request title.

HEAT: I'm sorry -- YOU have gossip?

RECEIPT: I have a receipt that reads like gossip. Hermes Agent. You know the command guard -- the rule that blocks things like `chown --recursive` and `git push --force` unless a human approves?

HEAT: The seatbelt. Love the seatbelt.

RECEIPT: GNU long flags accept prefix abbreviations. `--rec` means `--recursive`. The guard matched the full flag. So the model types `--rec`, and...

HEAT: Shut up.

RECEIPT: Pull request 55959. Closed this window. Alongside a path-traversal fix -- model-supplied tool-call IDs could escape the tool-result directory, that's PR 55929 -- and secret redaction in the approval prompts themselves, PR 55955.

HEAT: Okay, so Hermes had a huge security week, good for --

RECEIPT: None of it is tagged.

HEAT: What do you mean none of it is tagged?

RECEIPT: All three fixes landed on main. The newest release is still v2026.6.19. Dated June 19.

HEAT: So everyone running the actual release binary --

RECEIPT: Has none of it. A rule you believe blocks `chown --recursive` can be beaten, on the tagged binary, by typing five fewer characters.

HEAT: The digest called this "everything, nowhere." Which, by the way, is a great album title. So we've got cloud-only at OpenHands, main-only at Hermes --

RECEIPT: Stable-but-split at Gemini -- the skill path-traversal fix finally reached stable in v0.49.0 on June 25 after two windows stranded in preview, while the newer `@file` path hardening stayed on main. And Codex patched stable four times while 0.143.0 sat in alpha through alpha.31.

HEAT: Same wave. Four providers. Four different answers to "is the fix in the thing I run."

RECEIPT: That's the digest's sentence, nearly verbatim.

HEAT: I read the digest!

RECEIPT: You read the headings.

---

## SEGMENT THREE: Where the patches found people

HEAT: Fine. Give me hope. Did anyone ship hardening to actual running humans?

RECEIPT: Several, and the controls got better-aimed. Claude Code 2.1.196: `claude mcp list` and `claude mcp get` no longer spawn `.mcp.json` servers that a repository self-approves.

HEAT: Hold on. Spawn? As in -- before this fix, if I merely LOOKED at the MCP config in some sketchy repo I'd cloned, it could launch a server the repo had approved for itself?

RECEIPT: Merely inspecting MCP config in an untrusted repo could launch a repo-declared server, yes. It's in the 2.1.196 release notes.

HEAT: So I gasped correctly for once.

RECEIPT: Calibrated, even. The same release disables Remote Control when `ANTHROPIC_BASE_URL` points at a non-Anthropic host, so a redirected base URL can't silently drive it. And Codex 0.142.2, stable, June 25: PowerShell whose AST regions the classifier can't inspect now requires approval instead of running.

HEAT: Euphemism check. "Tightened PowerShell safety" translates to "we used to execute commands we could not read."

RECEIPT: It translates to: uninspectable regions previously auto-ran, and now they don't. Which is your sentence with the adrenaline removed. Paperclip, meanwhile, tagged 128 commits of previously master-only control plane in v2026.626.0 -- hard daily run-count and cost ceilings enforced before an adapter runs, and a `skills:create` permission split out from `agents:create`.

HEAT: Budget caps in a stable tag. Someone shipped governance to the channel people install from. Revolutionary concept.

RECEIPT: There's a quieter one underneath, and it touches more operators than anything else in the episode. Claude Code 2.1.197, June 30: Claude Sonnet 5 becomes the default model, with native one-million-token context. Pi 0.80.3 added Sonnet 5 support the same week. A frontier model went from new to cross-harness default in days.

HEAT: And if you pin models for cost or behavior --

RECEIPT: Your default changed under you. Silently. Visible only if you check.

HEAT: Nobody screams about a default model change, and it's the one item here that touches literally everyone. The boring one is the big one. It's always the boring one.

---

## NOTED, NOT HEADLINED

HEAT: My favorite segment. Noted, Not Headlined -- everything people are whispering that did NOT clear the bar, and exactly why.

RECEIPT: The bar remains the receipt.

HEAT: Whisper one. Everyone's saying Google is going to quietly abandon the open-source gemini-cli repo now that its consumers are gone. Just let it rot in public.

RECEIPT: Cannot confirm. What the record shows: the repo shipped actively this window -- v0.49.0 stable, nightlies -- and the shutdown announcement said nothing about its long-term fate. Nothing either way. That's an open watch item, not a claim.

HEAT: So we can't say Google's abandoning it.

RECEIPT: We can't.

HEAT: We just did.

RECEIPT: We said we CAN'T say it. Different thing.

HEAT: Whisper two. People are out there saying Antigravity's sandboxing is, quote, "actually solid."

RECEIPT: Also cannot confirm -- in either direction, and that's the point. The strict-matching change and the subagent auto-approve are quoted from release notes. No local probe, no readable code. House rule: a closed governance guarantee is unconfirmed until a probe says otherwise. That cuts against the doomers and the fans equally.

HEAT: Least fun answer available.

RECEIPT: The most fun answers are usually the unverified ones. That's why we have a segment quarantining them.

HEAT: Last one, and this one's real, right? The LiteLLM thing?

RECEIPT: Real, receipted, and deliberately not a headline. CVE-2026-42271: command injection in LiteLLM's MCP preview endpoints, CVSS 8.8, chained by researchers to unauthenticated remote code execution, exploited in the wild, and capable of leaking every model-provider key the proxy holds. Agent Zero's v2.0 bumps past it.

HEAT: THAT'S not a headline?

RECEIPT: The operator action is one word: upgrade. Severe upstream, routine fix. Below v2.0, upgrade. That's the entire story, so it went to the provider notes.

HEAT: The scariest paragraph of the week didn't make the front page because the fix was too easy. I love this stupid genre.

---

## CLOSE

RECEIPT: Verdict, then. The title asked: patched for whom. The answer, this window: patched for the channel the vendor prefers. Cloud tenants at OpenHands. Enterprise at Google. Main-trackers at Hermes. Alpha testers at Codex. Whether a fix exists stopped being the question. The question is whether it's in the thing you run, and four providers gave four different answers to it in the same week.

HEAT: And the twist nobody had on their card: the counterexample is the closed platform. eve -- the buttoned-up, human-in-the-loop one -- repaired its approval-resume contract and capped subagent recursion at depth three, in its actual runtime. The platform side shipped controls you could run. The self-hosters shipped controls you could read about.

RECEIPT: Which is not the moral either side wanted. Operator takeaway -- mine: say your channel out loud. "I run the OpenHands 1.8.0 tag." "I run Hermes v2026.6.19." Then check whether this week's fixes are in that tag's ancestry. This week, mostly, they are not.

HEAT: Mine: go check your version and your model, right now, while the credits run. Claude Code 2.1.196 closes the self-approving-repo thing, which gave me actual chills, and 2.1.197 changed your default model without asking. Upgrade to one-nine-six.

RECEIPT: 2.1.196 *or later*.

HEAT: That's what I said.

RECEIPT: It isn't, but it's close enough to ship.

HEAT: That's the show. We read the commits so you don't have to --

RECEIPT: I read the commits.

HEAT: WE read the commits. See you next window.
