I'll fetch each listed X post and return only the verbatim capture blocks.===CAPTURE===
url: https://x.com/thsottiaux/status/2068120572673077274
handle: @thsottiaux
display_name: Tibo
posted_at: 2026-06-19
VERBATIM_BEGIN
Remote / local handoff in Codex! Removing boundaries one at a time. 

When you let the model be in the driver seat, you actually need less infrastructure.
VERBATIM_END
===END===

===CAPTURE===
url: https://x.com/vihaanmotwani/status/2085124301863408082
handle: @vihaanmotwani
display_name: Vihaan Motwani
posted_at: 2026-08-05
VERBATIM_BEGIN
back in may at @aiDotEngineer, i asked @thsottiaux when they wait for a better model instead of patching the harness and he said:

> “oftentimes we actually ask ourselves: what if we don’t fix this in the harness today? how quickly is it going to be possible to improve the models?”

now he’s saying today’s codex will look primitive in 2-3 months lol

man i wish i could see what they’re testing right now
VERBATIM_END
===END===

===CAPTURE===
url: https://x.com/thsottiaux/status/2084483765158719542
handle: @thsottiaux
display_name: Tibo
posted_at: 2026-08-04
VERBATIM_BEGIN
Given some of the results I'm seeing recently, it's pretty clear Codex is a good harness.

But it will seem primitive in 2-3 months and we're about to go through another major evolution in how we use AI at the frontier. The next generation of models need more than your laptop.
VERBATIM_END
===END===

===CAPTURE===
url: https://x.com/thsottiaux/status/2091563530189521277
handle: @thsottiaux
display_name: Tibo
posted_at: 2026-08-23
VERBATIM_BEGIN
A better analogy would be to say that your brain suddenly gets placed in the pencil for it to moved around when you need to do the exam. 

These are entirely different things you are comparing. The harness is much more similar to the body than it is to the classroom and environment.
VERBATIM_END
===END===

===CAPTURE===
url: https://x.com/onusoz/status/2091434969151267162
handle: @onusoz
display_name: Onur Solmaz
posted_at: 2026-08-23
VERBATIM_BEGIN
We need to normalize measuring and judging models against a standardized test harness

"Oh but model X performs best in their own proprietary harness"

I could not care less. When I take exams, I go to the standardized classroom, get the standardized pencil and exam sheet, and have to solve it under 2 hours

This system arose because we have a LOT of people to test

Guess what? We now have a LOT of models, and they are multiplying by the day

"Oh but model X performs substantially better in ARC-AGI-3 with a custom harness"

I don't care... Then imbue model X with enough knowledge so that it can reconstruct that harness on the spot

The main harness could be mini-swe-agent, terminus 2, vanilla pi or something along those lines

It needs to be simple, and stay roughly the same over time

There is already too much complexity in the benchmarking space right now, and I feel like not enough people are putting their feet down to cut away some part of it
VERBATIM_END
===END===

===CAPTURE===
url: https://x.com/pvncher/status/2086829227886694782
handle: @pvncher
display_name: eric provencher
posted_at: 2026-08-10
VERBATIM_BEGIN
I only semi agree. 
Codex computer and chrome use are part of the harness and add a ton of leverage.

Multi agent collaboration is also a source of much complexity. Much of it is on the model, but there are harness primitives to get right, and there’s room to innovate on this.
VERBATIM_END
===END===

===CAPTURE===
url: https://x.com/pvncher/status/2088659020856828120
handle: @pvncher
display_name: eric provencher
posted_at: 2026-08-15
VERBATIM_BEGIN
It’s just tools the models are trained to use well, built into the harness
VERBATIM_END
===END===

===CAPTURE===
url: https://x.com/thsottiaux/status/2077630111499882637
handle: @thsottiaux
display_name: Tibo
posted_at: 2026-07-16
VERBATIM_BEGIN
On file deletions. We’ve investigated a handful of reports where GPT-5.6 unexpectedly deleted files. 

What we have  found is that this most commonly occurs when:
- Full access mode is enabled and codex is run without sandboxing protections, including without auto review being enabled
- The model attempts  to override the $HOME env var to define a temporary directory.
- The model makes an honest mistake and mistakenly deletes $HOME instead.

This is of course not how we want the system to behave, even when a user operates the model in full-access mode without the safeguards of our sandbox or without using auto review which checks for these kinds of high risk actions and rejects them. 

We are taking steps to mitigate this risk including by updating the developer message, guiding more users towards safer permission modes, and adding additional harness safeguards. Even though this happens extremely rarely, we’ll share a detailed post-mortem in the coming days that goes into more details and what we are doing to minimize risks further.
VERBATIM_END
===END===

===CAPTURE===
url: https://x.com/thsottiaux/status/2089891927659585918
handle: @thsottiaux
display_name: Tibo
posted_at: 2026-08-19
VERBATIM_BEGIN
Hi!

Recapping some changes we have rolled out over the last couple of weeks that have further reduced the risk associated to potentially destructive actions being performed by Codex during its work. 

A few weeks ago, we started investigating a small number of reports where GPT-5.6 in Codex took destructive actions outside what the user asked for. The most serious pattern we found was a command meant to clean up temporary work that could instead delete the user files. This should obviously not happen. 

Here’s what we found:
- Codex sometimes creates temporary folders while working and cleans them up afterward. In rare cases, GPT-5.6 got that cleanup wrong. One pattern involved reusing a system environment variable like $HOME for temporary work. A malformed cleanup command could then point at the actual home directory instead of the temporary folder. 
- There were cases where the model tried to delete or overwrite a temporary path without checking what was already there.

We’ve added protections at several layers:
- Codex is now explicitly instructed to check deletion targets before acting, create fresh temporary directories, avoid repurposing system environment variables, prefer recoverable actions, and stop when the scope is unclear.
- We strengthened the execution checks that identify high-risk deletion commands and escalate them for review. If a command is rejected, the model is directed to take a safer approach.
- We made Full access harder to enable accidentally, added clearer warnings, and further restricted especially risky permission combinations.
- We updated Auto-review to better identify destructive actions.
- We built targeted evaluations that replay the failures we observed. We’re also adding reinforcement-learning tasks and graders focused on these risks, and filtering destructive actions from training data.

In those replay evaluations, the changes substantially reduced the behavior while preserving Codex’s ability to complete normal coding work. 

Two things to do on your end:
- Keep the Codex app up to date. We are always improving safety, performance and many other things.
- Use one of the sandbox modes: "Ask for approval" or "Approve for me". Only use Full access for environments you trust and can recover.

Thanks and happy Codexing out there!
VERBATIM_END
===END===

===CAPTURE===
url: https://x.com/born2code/status/2077712273057944063
handle: @born2code
display_name: احمد
posted_at: 2026-07-16
VERBATIM_BEGIN
The reason we run yolo is because codex is useless if it stops to ask at every step. That doesn’t mean it should do rm -rf on $home. We want the safeguards but without the friction. The proper solution is it fix the permissions system while keeping the sandbox. I am happy to run in a sandbox if I didn’t have to babysit it
VERBATIM_END
===END===

===CAPTURE===
url: https://x.com/acsmif/status/2090477764109533376
handle: @acsmif
display_name: colin
posted_at: 2026-08-20
VERBATIM_BEGIN
The charitable interpretation is that codex-auto-review has been deprecated as more is routed to guardian-v2, which was never displayed. But removing auto-review from analytics while also keeping guardian-v2 invisible is nuts.

If we’re charged for it, we should obviously be able to see it in analytics.
VERBATIM_END
===END===

===CAPTURE===
url: https://x.com/OpenAIDevs/status/2090230646497251387
handle: @OpenAIDevs
display_name: OpenAI Developers
posted_at: 2026-08-20
VERBATIM_BEGIN
Teams are using the open-source Codex harness to bring agents into the tools they already use, from internal apps to operations dashboards.

Their applications control the interface, context, tools, and approvals while the harness handles the agent loop.

https://developers.openai.com/blog/codex-as-a-platform
VERBATIM_END
===END===

===CAPTURE===
url: https://x.com/thsottiaux/status/2082241730972442912
handle: @thsottiaux
display_name: Tibo
posted_at: 2026-07-28
VERBATIM_BEGIN
Different definition of harness. The agent code is the harness. The codex app is an app.

https://github.com/openai/codex
VERBATIM_END
===END===

===CAPTURE===
url: https://x.com/lucasmeijer/status/2082094287106216077
handle: @lucasmeijer
display_name: Lucas Meijer
posted_at: 2026-07-28
VERBATIM_BEGIN
openai folks keep saying that codex is an open source harnass,  but the actual code for the UI of the harnass is nowhere to be found.....
VERBATIM_END
===END===

===CAPTURE===
url: https://x.com/_lopopolo/status/2077149347528261712
handle: @_lopopolo
display_name: Ryan Lopopolo
posted_at: 2026-07-14
VERBATIM_BEGIN
I am guessing this is a local optimum for you because you have many skills and you invoke them most of the time. I keep saying “give the model tools and context and let it cook.” The skills are for the model and the harness injects the description, so it should be real prose that preserves “what is this and why might I want to learn more”. Most sessions should have no more than 6 skills linked in to them.
VERBATIM_END
===END===

===CAPTURE===
url: https://x.com/TheRohanVarma/status/2061680932630024321
handle: @TheRohanVarma
display_name: Rohan Varma
posted_at: 2026-06-02
VERBATIM_BEGIN
Our aspiration with Codex is to remove software creation as a limiting factor on the world’s ambition. 

Not just for product companies and engineers, but also for users across every role and beyond business use-cases (Codex is for everyone).

Writing code is the first step toward accelerating software creation, but we still haven’t yet seen the true explosion of software that should be possible with advances in AI coding.

Deploying useful software also requires clear specifications, well-designed code, security guarantees, careful deployment, production monitoring, and constant iteration.

Thinking of this system as a software factory feels pretty apt. We’ve already seen exciting examples of this working well within OAI, like the work @_lopopolo wrote about in the Harness Engineering blog post. I’ve also seen great examples from customers across startups and enterprises. However, doing this well requires a lot of laborious work to get right.

I think the model capabilities feel very close to supporting this end-to-end, though we'll make them even better. The limiting factor now is likely giving models and agents access to the right tools, and having them run at the right moments, so they can truly push the whole process forward.

Once we get there, I think we’ll be in an extremely exciting world where software can be both great and disposable. 

When we do see that software explosion, I think things will feel significantly different from even what we've seen so far.
VERBATIM_END
===END===

===CAPTURE===
url: https://x.com/patrickc/status/2088978205546017219
handle: @patrickc
display_name: Patrick Collison
posted_at: 2026-08-16
VERBATIM_BEGIN
I love agentic coding harnesses, but they shouldn't be primarily terminal-based. The terminal is great for quick and precise commands, but information density is extremely low and UI affordances are minimal. Maybe provision of TUIs is worthwhile for occasional use (when establishing a tunnel is too annoying, or something), but it feels very strange for this to be the default modality. It took a long time for dynamic language REPLs to break out of the terminal (Jupyter notebooks and similar); I hope we don't have to wait as long for the harnesses.
VERBATIM_END
===END===

===CAPTURE===
url: https://x.com/romainhuet/status/2088983216724078797
handle: @romainhuet
display_name: Romain Huet
posted_at: 2026-08-16
VERBATIM_BEGIN
Couldn’t agree more! A new kind of coding harness deserves a new kind of interface.

That’s a big part of why we built the Codex app: computer use, in-browser annotations, and a much richer surface to pair with agents.
VERBATIM_END
===END===
