---
schema_version: bitter.frontier_feature.v0
feature_id: 2026-08-23-oh-my-pi-without-the-pi
title: "Oh My Pi, without the Pi"
dek: "OMP's maintainers are rewriting their Pi fork in Rust on an orphan branch, with CPython for plugins and the upstream gone. Pi's maintainers dispute the reasons given. The tree supports both halves."
published: 2026-08-23
last_updated: 2026-08-23
window:
  start: 2026-08-08
  end: 2026-08-23
run_id: 2026-08-23-x-topic-omp2-rust-2026-08-08_2026-08-23-frontier-v0
sources:
  - omp
  - pi-coding-agent
status: published
what_would_settle_it:
  - "A tag or release on <code>can1357/oh-my-pi</code> that contains the <code>omp2</code> tree, or an install script that ships it. Until then the shipping line is the TypeScript one."
  - "<code>stencil-hq/omp</code> becoming public, which is where the branch's own Cargo metadata says it lives."
  - "The \"How to design a harness 101\" essay the maintainer promised on 14 August, and the Pi 2 design post the Pi maintainers promised on 22 August."
  - "A measured startup time and resident memory for a built <code>omp2</code> binary against OMP 18.0.x on the same machine. Every speed claim in the thread is a prediction."
  - "What happens to the roughly 80 extensions the branch says were ported: whether they are published, and whether anyone outside the team ports one."
---

# Oh My Pi, without the Pi

On 8 August 2026, an orphan branch called
[`omp2`](https://github.com/can1357/oh-my-pi/tree/omp2) appeared in the
repository of oh-my-pi, the fork of Pi that publishes as `omp`. Its first commit
is
["Initial commit"](https://github.com/can1357/oh-my-pi/commit/9c85c97b6af88f04970dd7a0ba03b7d0914c17df),
and GitHub's compare view reports
[no common ancestor](https://github.com/can1357/oh-my-pi/compare/main...omp2)
with `main`. By 23 August it held 453 commits, every one by the project's
maintainer, and a
[README](https://github.com/can1357/oh-my-pi/blob/ccec31b613ee551f393fb3435b7e2fd569d095c1/README.md)
whose first line ends "rewritten in Rust."

For six days it went unmentioned in public, as far as a sweep of X can tell.
Over the nine after that, the maintainer pointed at it twice, the fork's team
said in public that it was leaving its upstream, Pi's maintainers said the
stated reasons were wrong, and the fork's maintainer said the two projects were
never associated. Nothing
has shipped. What exists is a tree, a thread, and a name that still has Pi in
it.

## Two projects, one basename

[Pi](/profiles/pi-coding-agent/) is the coding agent from Earendil, written in
TypeScript, published to npm as `@earendil-works/pi-coding-agent`, at 0.84.2
since 14 August. [OMP](/profiles/omp/) began as a fork of it and outran it,
publishing `@oh-my-pi/pi-coding-agent` under the same basename, with a
language server and a live debugger wired in, and it already carries
[seven Rust crates](https://github.com/can1357/oh-my-pi/tree/160ed439ac0df594347e7d7018b813a7ffdb5e81/crates)
under `crates/pi-*` as native addons. On 22 August, while this thread was
running, OMP
[cut 18.0.0](https://github.com/can1357/oh-my-pi/releases/tag/v18.0.0), a new
major on the TypeScript line, and 18.0.3 the next day; npm `latest` and the
Homebrew tap both carry 18.0.3. That is the channel an operator installs
today. `omp2` is not in it.

## What was said, in order

The branch surfaced in public on 14 August, when a reader noticed the Rust
and the maintainer, Can Bölük, replied: [[q:can-look-at-the-omp2-branch]].
Three days later he compared the two trees himself:
[[q:can-omp2-pi-not-the-limiting-factor]]. On 21 August he said
[[q:can-omp2-has-to-wait-blob-broker]].

That evening the announcement came from Olek, whose bio reads "harness
engineering @" a link to omp.sh: [[q:olek-pi-completely-deprecated]]. He gave
the reasons: [[q:olek-pi-had-a-lot-of-problems]]. In the replies, he gave the
most specific account anyone has:

<!--card:olek-two-weeks-not-backwards-compatible-->

One operator asked the right question: [[q:graykevinb-is-this-mainline-omp]].
The next day Olek drew the line where the architecture draws it:
[[q:olek-python-for-plugins-rust-core]].

The objections arrived on 22 August. One operator who likes the language
choice did not like the cost: [[q:transpiracy-breaking-plugin-compat]].
A Pi user who already runs the remote setup OMP said Pi was not designed for
put it more sharply: [[q:erdal-pi-with-ssh-core-tools]]. Then Mario Zechner,
who wrote Pi:

<!--card:mario-pi-has-no-dependency-on-bun-->

The maintainer's reply was one line: [[q:can-not-associated]].

The same day Armin Ronacher, who maintains Pi with Zechner, closed the other
reading of the story: [[q:armin-not-going-to-port-pi-to-rust]]. On whether
Pi 2 stays small: [[q:armin-pi-was-never-small]]. And one operator who had used
OMP for the shared base said he had [[q:benvargas-deleted-omp-ahead-of-omp2]],
and asked whether the name would still make sense.

## What the tree says

The branch is real and it is what the thread says it is. At commit
[`ccec31b6`](https://github.com/can1357/oh-my-pi/commit/ccec31b613ee551f393fb3435b7e2fd569d095c1)
(23 August, 08:54 UTC) the
[workspace manifest](https://github.com/can1357/oh-my-pi/blob/ccec31b613ee551f393fb3435b7e2fd569d095c1/Cargo.toml)
declares `members = ["crates/*"]`, 48 crates, edition 2024, version 0.1.0.
There is no `packages/` directory; the TypeScript tree is absent, not carried.
[`crates/py`](https://github.com/can1357/oh-my-pi/blob/ccec31b613ee551f393fb3435b7e2fd569d095c1/crates/py/Cargo.toml)
is `omp-py`, "Self-contained embedded CPython runtime with frozen
standard-library and project modules," on pyo3. The README calls the whole
thing pre-release: "expect renames and breaking changes without notice."

The branch also says why, in its own words. A
[PHILOSOPHY.md](https://github.com/can1357/oh-my-pi/blob/ccec31b613ee551f393fb3435b7e2fd569d095c1/PHILOSOPHY.md)
at the tip describes the project as having begun "as a growing pile of diffs
against Pi" and being now "a ground-up Rust rewrite," and states the language
rule plainly:
"Rust engine; embedded free-threaded Python for extensions." It says the Python
extension SDK "was frozen only after waves of subagents ported ~80 real
extensions against it." That is the plugin break, documented by the people
making it.

Two things in the tree are not in the thread. The workspace manifest names its
authors as "Stencil Labs, Inc." and its repository as `stencil-hq/omp`, which
is not public; the `stencil-hq` organisation exists, created in June, with two
Rust repositories, one of them "a design language for agents." And the "blob-
broker" the maintainer said would ship first does not appear by that name in
the 18.0.0 release notes or in `main`'s commit subjects, which carry an auth
broker the same day. We report the delay; we do not equate the two.

One hundred and sixty-five commits landed on the branch on 22 August alone,
a hundred on 14 August, the day it surfaced. It is moving. It has no tag.

## Three reasons, checked

Olek gave three reasons for leaving Pi. Zechner disputed all three. A receipt
settles one of them and bounds the other two.

**Bun.** Pi's npm package declares
[`engines.node >=22.19.0`](https://github.com/earendil-works/pi/blob/a69bef789bc95abf0acee16f7b4660b70b650bb9/packages/coding-agent/package.json)
and its `bin` is a Node bundle. Bun appears in Pi only in an optional
`build:binary` path that compiles a standalone executable, and in the helpers
that path uses. OMP's own
[`package.json`](https://github.com/can1357/oh-my-pi/blob/160ed439ac0df594347e7d7018b813a7ffdb5e81/package.json)
declares `packageManager: bun@1.4.0` and runs on it. So Zechner is right for
the channel operators install, and the Bun that the rewrite is getting out from
under is OMP's, not Pi's. Pi's upstream runtime is Node.

**Plugins and the trust model.** Pi's position, as Zechner put it, is that the
trust model "is what you make it." OMP's position, as its maintainer put it, is
"against trust model anyway." Those are two design stances, not a fact and an
error. The fork is choosing to put the
engine behind a native boundary and the extensions behind an embedded
interpreter; the upstream is choosing a runtime language end to end. Neither
tree proves the other wrong.

**Remote workspaces.** One Pi operator says he runs the core tools over ssh so
the agent stays local and works against any sandbox. We have not inspected his
setup. Zechner says it is "pretty simple to do if you need it." OMP's branch
has `envd`, a project-environment daemon, and an `rpc` crate, and its
philosophy document says the same RPC boundary "makes local, VM, remote, and
headless-fleet deployments one topology." That is a difference in where the
work was done, not evidence that it cannot be done upstream.

Pi itself is not going Rust. [`main` and `dev`](https://github.com/earendil-works/pi)
contain no `.rs` file at 23 August. Pi's new harness is on `dev`, in TypeScript, 264 commits past `main`
at the last pin, and
[not in any tag](/profiles/pi-coding-agent/); Ronacher's "we need a runtime
language for the extensibility" is the reason, and the tree agrees with him.

## If you run either tool

If you run OMP, nothing changes this week. 18.0.3 is the TypeScript line and
it is what npm `latest` and the Homebrew tap deliver. Your TypeScript
extensions work. The team has said, in public, that the next thing is a
different program under the same name, that your extensions will not carry
over, and that core work on the current line is paused while they get there.
Plan the extension port or plan the exit; do not plan for neither.

If you run Pi, nothing about this thread touches your install. The dispute is
about a fork's reasons for leaving, and the fork's maintainer has said the two
projects are not associated. The thing to watch on your side is Pi 2 on `dev`,
which is a harness redesign, not a language change.

## The layer bet

[Bitter Lesson Maxing](/bitter-lesson/) asks which layer of a system survives
the next model. Both projects answer the same way on one point: extensibility
needs a runtime language, because that is where agents and people write the
code that is not the harness. They differ on everything under it. OMP is
betting that the engine -- renderer, shell, document layer, inference spine --
is worth rebuilding in a language "your agents can't ruin," and that the
plugin contract can break once to get there. Pi's answer, as its maintainers
put it, is that a runtime language is what extensibility needs and that small
means context footprint, not code size; nothing they said claims the engine is
the moat. Only one of those two designs has shipped.

[Amdahl Maxing](/amdahls-law/) asks where the human attention goes. The
rewrite's stated win is startup time and memory, which is latency on every
session and a real serial cost for an operator who opens many. Its stated
price is that every extension author re-ports, and that the current line's
core work waits. One operator in this thread paid the price early and left.
Another named the latency as the thing he wanted fixed. Whether the trade is
good depends on which of those two people you are, and the thread has both.

The fork is leaving the upstream. The name is staying.
