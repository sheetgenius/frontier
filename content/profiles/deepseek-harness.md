---
schema_version: bitter.frontier_profile.v0
profile_id: deepseek-harness
label: DeepSeek Harness
owner: deepseek-ai
source_contract: sources/deepseek-harness.yml
homepage: https://deepseek.com/harness/en/
docs: https://github.com/deepseek-ai/deepseek-harness/tree/master/docs
tagline: "A frontier lab's own agent harness, MIT-licensed and built so that everything is a plugin -- including the components that enforce the limits."
compared_with:
  - codex
  - claude-code
  - gemini-cli
  - omnigent
repo: https://github.com/deepseek-ai/deepseek-harness
surface_class: open_source_commits
evidence_floor: official_docs
status: active_watch
last_updated: 2026-08-20
last_full_review: 2026-08-20
claims:
  - id: gate-is-a-plugin
    finding_id: 2026-08-17-deepseek-harness-everything-is-a-plugin-including-the-components-that-enforce-the-limits
    last_verified: 2026-08-20
    status: active
  - id: web-ui-unauthenticated
    finding_id: 2026-08-17-deepseek-harness-nothing-authenticates-the-web-ui-on-127-0-0-1-3080-and-the-api-fence
    last_verified: 2026-08-20
    status: active
  - id: plugins-are-unsandboxed-in-process
    finding_id: 2026-08-17-deepseek-harness-a-dsh-plugin-is-an-unsandboxed-in-process-module-with-no-permission
    last_verified: 2026-08-18
    status: active
  - id: one-channel-and-it-is-a-prerelease
    finding_id: 2026-08-17-deepseek-harness-the-whole-project-ships-to-exactly-one-channel-and-it-is-a
    last_verified: 2026-08-20
    status: active
  - id: runs-rival-models-and-harnesses
    finding_id: 2026-08-17-deepseek-harness-deepseek-s-own-harness-ships-a-supported-path-to-run-openai-and
    last_verified: 2026-08-18
    status: active
  - id: rc-8-still-plugin-gate
    finding_id: 2026-08-20-deepseek-harness-still-prerelease-gate-still-a-plugin-ui-still-unauthenticated
    last_verified: 2026-08-20
    status: active
---

# DeepSeek Harness

A frontier model lab shipped its own harness. That alone puts it in the bracket
this publication watches most closely, the one Codex, Claude Code and Gemini CLI
occupy: the organisation that trains the model also decides what its agent may do
with a machine.

It is not here for the attention. The repository took roughly 154,000 stars in
four days, the largest number this watchlist has recorded at intake, and that
figure tells an operator nothing. `star_count_as_adoption` is written into the
source contract's rejected evidence for exactly that reason.

## Where it stands, 2026-08-20

**Channel.** In-window tag is `dsh-v0.1.0-rc.8` (2026-08-19, SHA
`141eb6fe`), still prerelease. There is still no non-prerelease tag.
`dsh-v0.1.1-rc.1` and `rc.2` published 2026-08-21 sit outside this
window and are still prereleases.

**The architecture claim, re-tested.** docs/architecture.md at `141eb6fe`
still says every part is a plugin and a patch can insert a row ahead of
any other. The request-trust module still says it is not an auth layer.
`trustedHosts` is a Host grant, not a login.

## Where it stood, 2026-08-18

**Channel.** One tag existed, `dsh-v0.1.0-rc.7`, flagged prerelease, and the npm
`latest` dist-tag on `@deepseek-ai/dsh` resolved to that same release
candidate. The README's own install command therefore installs an rc, under a
warning in capitals that there will be compatibility-breaking changes. There is
no stable channel. Nothing here has shipped to something an operator should
depend on, and that is a statement about maturity rather than quality.

**The architecture claim, tested.** "Everything is a plugin" covers models,
tools, skills, sessions, sandboxes, storage, loops, scheduling and the UI. Read
at a pinned commit, the approval path is one of those layers and composes as a
waterfall, so a plugin can be placed ahead of the component that would have
refused. The question written into this source's contract at intake was whether
the component enforcing a limit can be replaced by the thing it limits. The code
answers yes.

That is worth stating without alarm. It is a developer preview, the design is
coherent, and a replaceable enforcement layer is a legitimate choice in a system
built for composition. It is also the thing an operator has to know before
trusting a plugin, and it is the question the rest of the field should be asked
now that somebody has made it explicit.

**The local surface.** The documented entry point starts a web interface on
loopback. The request-trust module is candid in its own header comment about what
it does not do: nothing authenticates that surface. Loopback binding is the
entire access control, which makes any tunnel, container port mapping or reverse
proxy in front of it the whole security boundary.

**Plugins as a supply chain.** A plugin is an unsandboxed in-process module with
no permission declaration, and a public discovery topic for third-party plugins
already exists. Installing one is running code in-process with no declared
permissions.

**The bet underneath.** The harness ships a supported path to run models from
rival providers and to drive rival harnesses. A model vendor whose harness is
model-agnostic is telling you where it thinks the durable layer is, and the
answer is not the model.

## What is unresolved

- Whether a first stable tag changes any of the above, particularly whether the
  gate becomes privileged over the plugins.
- Whether the public repository is a mirror. A `.gitlab-ci.yml` is committed,
  and if an internal pipeline gates what lands, the public commit history is a
  partial record and a gap in it proves nothing.
- Which of English or Chinese documentation is normative when the two drift.
- What an operator inherits from Cordis, the third-party framework the plugin
  paradigm comes from, and who ships a fix when that layer breaks.

## Profile hygiene

Dated, not evergreen. Every claim above resolves to a finding in
[the run that produced it](/runs/2026-08-17-weekly-digest-2026-08-10_2026-08-17-frontier-v0/), and this page says what was true on the
date at the top rather than what is true now. See [METHOD.md](https://github.com/sheetgenius/frontier/blob/main/METHOD.md)
for the evidence contract.
