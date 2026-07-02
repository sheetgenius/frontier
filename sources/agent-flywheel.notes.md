# Agent Flywheel: Source Notes

**Homepage:** https://agent-flywheel.com/
**Repo:** https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup
**Owner:** Dicklesworthstone (Jeffrey Emanuel)
**Added:** 2026-07-02
**Tier:** 2 (weekly cadence)

## Why it's on the watchlist

Agent Flywheel is a setup framework and methodology: a single-command
installer that turns a fresh Ubuntu VPS into a multi-agent development
environment with Claude Code, Codex CLI, and Antigravity CLI pre-configured
side by side, ~30 supporting tools, session management, and agent
coordination infrastructure (NTM, Agent Mail). At intake: 1.5k stars, 7
tagged releases (latest v0.7.0, 2026-06-26), 3,440 main-branch commits.

It fills a slot nothing else on the watchlist covers: the **assembly
layer**. Every week the digests track what defaults, permission postures,
and channels the individual harness vendors ship. Agent Flywheel is a third
party overriding those decisions for three tier-1 agents at once, behind one
curl command, with sudo, on operator-owned infrastructure. "What did the
installer configure" is the operator-consequence question one level up the
stack -- including whether it pins versions and channels, which makes it
inherit the released-is-not-merged problem for every tool it bundles.

Secondary angles: published cost transparency ($440-656/month at intake) is
directly on the publication's core question; and the author is the cleanest
public specimen of solo-developer-at-vendor-velocity -- 183+ public repos,
and an individual account appearing in the top-35-organizations
coding-agent-adoption figure of arXiv:2606.07448 (submitted 2026-06-05),
alongside corporate orgs.

## The scope fence (load-bearing)

This is the first contract that names an author's other work as rejected
evidence. The two named surfaces (the setup repo at release/tag/docs
precision, and the site) are the whole contract. The author's portfolio
velocity makes commit-level or portfolio-wide tracking impossible and
worthless in equal measure; if another Dicklesworthstone project matters, it
enters as an ordinary finding with an external receipt, not as standing
coverage. The velocity phenomenon itself is a story to receipt once (the
arXiv paper is that receipt), not a tracking obligation.

## Editorial angle for Bitter Frontier

**Signal:** operators are increasingly not configuring their agents -- an
assembly layer is. Trust in the harness is becoming trust in whoever
assembled the harness.

**First-harvest probe candidates:** what install.sh actually does (sudo
surface, credential paths, settings files written for each agent, version
pins); whether the bundled "safety tools" enforce or advise.
