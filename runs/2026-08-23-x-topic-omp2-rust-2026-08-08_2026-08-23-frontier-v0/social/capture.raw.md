I'll fetch each listed post and return its published text exactly, with no reconstruction if a post cannot be retrieved.Two posts failed to load as threads. I’ll fetch those two another way and keep the rest as retrieved.The original root post is 404 at the URL. I’ll check a few more captures before marking it unavailable, and keep quoted copies from being treated as the post itself.
I'll recapture the remaining posts from a source that keeps original punctuation, t.co links, and line breaks.===CAPTURE===
url: https://x.com/oleksoleksoleks/status/2090910311746297954
handle: @oleksoleksoleks
display_name: UNKNOWN
posted_at: UNKNOWN
VERBATIM_BEGIN
UNAVAILABLE
VERBATIM_END
===END===
===CAPTURE===
url: https://x.com/oleksoleksoleks/status/2090947411581796564
handle: @oleksoleksoleks
display_name: Olek
posted_at: 2026-08-21
VERBATIM_BEGIN
It was started 2 weeks ago; and right now the goal is to get Pi and Bun out as quickly as possible -- because all of the core work has been paused, and we're racking up PRs/fixes that need to be pushed

It won't be backwards compatible on the plugins/extensions side -- everything will need to be ported because TS/Bun is being replaced with CPython

User-facing behavior should be as close to 1-to-1 as possible. There are 15k text lines of omp features to port, but we'll be dogfooding

WASM should be able to be added on as a future backend without issue -- and you're free to push a PR once Omp2 is out
VERBATIM_END
===END===
===CAPTURE===
url: https://x.com/oleksoleksoleks/status/2090933443483881566
handle: @oleksoleksoleks
display_name: Olek
posted_at: 2026-08-21
VERBATIM_BEGIN
Pi's being completely deprecated. The Bun runtime is being ripped out in lieu of CPython
VERBATIM_END
===END===
===CAPTURE===
url: https://x.com/oleksoleksoleks/status/2090923286892892518
handle: @oleksoleksoleks
display_name: Olek
posted_at: 2026-08-21
VERBATIM_BEGIN
Pi had a lot of problems -- namely the reliance on Bun + the way it did plugins, the poor sandboxing/trust model, and how it wasn't designed for remote workspaces in mind
VERBATIM_END
===END===
===CAPTURE===
url: https://x.com/oleksoleksoleks/status/2090964492439929058
handle: @oleksoleksoleks
display_name: Olek
posted_at: 2026-08-22
VERBATIM_BEGIN
The Python runtime is for the plugin system -- the core omp will be Rust. The speed + memory footprint improvements should be self-explanatory
VERBATIM_END
===END===
===CAPTURE===
url: https://x.com/badlogicgames/status/2091099037629866446
handle: @badlogicgames
display_name: Mario Zechner
posted_at: 2026-08-22
VERBATIM_BEGIN
can we not do the "bash the others" shit? pi has no dependency on Bun what so ever. the sandboxing/trust model is what you make it, as explained everywhere in the docs, and "remote workspace" is pretty simple to do if you need it. @_can1357 let's not, okay?
VERBATIM_END
===END===
===CAPTURE===
url: https://x.com/_can1357/status/2091100053171519995
handle: @_can1357
display_name: Can Bölük
posted_at: 2026-08-22
VERBATIM_BEGIN
we're not associated sir, i'm against trust model anyway
VERBATIM_END
===END===
===CAPTURE===
url: https://x.com/mitsuhiko/status/2091185628922757259
handle: @mitsuhiko
display_name: Armin Ronacher ⇌
posted_at: 2026-08-22
VERBATIM_BEGIN
I don't think we're going to port Pi to Rust, because we need a runtime language for the extensibility but I think once the new harness is here we might be a bit more adventurous with the UI layer at least.
VERBATIM_END
===END===
===CAPTURE===
url: https://x.com/mitsuhiko/status/2091210687091491308
handle: @mitsuhiko
display_name: Armin Ronacher ⇌
posted_at: 2026-08-22
VERBATIM_BEGIN
Pi was never small by code. Pi is small in that it's lightweight in context usage and out of the box workflow invasiveness. We will not change that. We're going to make a longer post into the why for the new harness.
VERBATIM_END
===END===
===CAPTURE===
url: https://x.com/_can1357/status/2089358681171182043
handle: @_can1357
display_name: Can Bölük
posted_at: 2026-08-17
VERBATIM_BEGIN
like compare omp source vs. omp2 branch, both are completely agent written, omp2 is significantly cleaner because Pi is not the limiting factor and this is a DSL https://t.co/Bp29v7EdCJ instead of a TS data type filled during the runtime because I knew it was necessary beforehand
VERBATIM_END
===END===
===CAPTURE===
url: https://x.com/_can1357/status/2090591535628706092
handle: @_can1357
display_name: Can Bölük
posted_at: 2026-08-21
VERBATIM_BEGIN
omp2's gonna have to wait, omp blob-broker tmw
VERBATIM_END
===END===
===CAPTURE===
url: https://x.com/_can1357/status/2088291293394837861
handle: @_can1357
display_name: Can Bölük
posted_at: 2026-08-14
VERBATIM_BEGIN
ask it to look at the omp2 branch, that was always there haha, although I'd assume it will miss why we're doing it.

Very long "How to design a harness 101" soon ™️
VERBATIM_END
===END===
===CAPTURE===
url: https://x.com/transpiracy/status/2090974440834343293
handle: @transpiracy
display_name: ㅤㅤㅤ
posted_at: 2026-08-22
VERBATIM_BEGIN
sounds like poor extensibility (native boundary) and worse plugin performance (V8 / JSC run circles around CPython)

probs a sign i should move to opencode2, sigh. rust is a wise choice but breaking plugin compat is just going to alienate users
VERBATIM_END
===END===
===CAPTURE===
url: https://x.com/benvargas/status/2091279099436417197
handle: @benvargas
display_name: Ben Vargas
posted_at: 2026-08-22
VERBATIM_BEGIN
The bigger question... omp is ripping out pi and rewriting in rust... will you still run it? should it even be called oh-my-pi at that point?

I actually don't want such an opinionated and completely custom base... I don't really use omp much, but deleted it today ahead of omp2.
VERBATIM_END
===END===
===CAPTURE===
url: https://x.com/ErdalToprak/status/2091087596642328866
handle: @ErdalToprak
display_name: Erdal
posted_at: 2026-08-22
VERBATIM_BEGIN
I have Pi (@pidotdev @badlogicgames) with the core tools rewritten with ssh so that the agent can stay local and transparently work on any sandbox 

At most it’s an architecture challenge but saying Pi isn’t designed for X is just bad faith
VERBATIM_END
===END===
===CAPTURE===
url: https://x.com/graykevinb/status/2090911436507693097
handle: @graykevinb
display_name: Kevin Gray
posted_at: 2026-08-21
VERBATIM_BEGIN
sounds cool. Omp is great its just the startup time and ram use is brutal.

Is this mainline omp? Cuz most of it was already omp
VERBATIM_END
===END===
