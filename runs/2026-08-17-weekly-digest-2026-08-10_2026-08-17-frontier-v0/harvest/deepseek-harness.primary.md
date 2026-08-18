---
schema_version: bitter.frontier_harvest.v0
provider: deepseek-harness
window: 2026-08-10..2026-08-17
run: 2026-08-17-weekly-digest-2026-08-10_2026-08-17-frontier-v0
source_contract: sources/deepseek-harness.yml
channels_present: [preview-or-beta]
window_volume: 12 material changes, 5 capability-bearing, 7 defect-bearing, 5 security-relevant
lane: primary sources, read-only researcher, channel resolved by git ancestry
---

# Harvest -- deepseek-harness (primary sources)

Punctuation is normalized to ASCII per house style. Every receipt below is
pinned to a tag or a SHA. Nothing here is published until it clears the
adversarial receipt pass.

## 1. The whole project ships to exactly one channel, and it is a prerelease

- **Date:** 2026-08-17
- **Channel:** `preview-or-beta` (only in a prerelease tag)
- **Ancestry evidence:** `git ls-remote --tags https://github.com/deepseek-ai/deepseek-harness.git` returns exactly one ref: `99f6f02fecdb7dff40c3fbc9470f5907c29f74ca refs/tags/dsh-v0.1.0-rc.7`. The GitHub release for that tag returns `"prerelease": true, "draft": false, "published_at": "2026-08-17T12:01:58Z"`. `gh api repos/deepseek-ai/deepseek-harness/compare/dsh-v0.1.0-rc.7...master` returns `{"status":"identical","ahead_by":0,"behind_by":0}`, so master carries nothing the prerelease tag does not. There is no non-prerelease tag and there has never been a second tag of any kind.
- **Receipt:** https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.1.0-rc.7
- **Half:** neither | **Confidence:** high

**What changed.** The public repo appeared on 2026-08-13 and cut its first public release on 2026-08-17: dsh-v0.1.0-rc.7, flagged prerelease. It is the only tag in the repository. Because master and the tag are the same commit, there is currently no main-unreleased surface either: everything an operator can read sits inside a release candidate. The README states the position in capitals: "DeepSeek Harness is currently in _developer preview_ and is iterating rapidly. **THERE WILL BE COMPATIBILITY-BREAKING CHANGES.**" The README's own install line, `npx @deepseek-ai/dsh web`, therefore installs that release candidate.

**Operator consequence.** Watch. There is no channel here to depend on. Do not pin production work to any dsh package, and do not build a plugin against an API the project has told you in capitals it will break. The one event worth a calendar reminder is the first non-prerelease tag; re-run `git ls-remote --tags` each window, because that is the cheapest true test of whether a stable channel exists.

## 2. The CLI withdrew --host 0.0.0.0 on launch day and renamed it a remote-code-execution exposure

- **Date:** 2026-08-13
- **Channel:** `preview-or-beta` (only in a prerelease tag)
- **Ancestry evidence:** Both commits are ancestors of the only tag: `gh api repos/deepseek-ai/deepseek-harness/compare/dsh-v0.1.0-rc.7...6cbf927e0a` returns `"status":"behind", "ahead_by":0`, and the same for `0633add19d`. That tag is a prerelease, so the change has shipped only to preview.
- **Receipt:** https://github.com/deepseek-ai/deepseek-harness/commit/0633add19d
- **Half:** both | security-relevant | **Confidence:** high

**What changed.** Until commit 6cbf927e0a (2026-08-13T06:54:15Z) the web command advertised LAN serving in its own help text: `--option('--host <host>', 'bind host; pass 0.0.0.0 to reach it from another machine')` and the worked example `dsh --profile web --host 0.0.0.0    reach it from another machine on the LAN`. That commit deleted both lines and turned the flag into a hard usage error. Sixteen minutes later commit 0633add19d rewrote the error text to say why. At the tag, packages/bundle/web-app/src/startup.ts reads: `if (options.host === '0.0.0.0') { program.error('error: --host 0.0.0.0 is intentionally not supported yet for safety: it would expose remote code execution to the network; use 127.0.0.1 instead') }`. The CLI reference repeats it. Note the guard sits only in the flag parser. docs/subsystems/web-server.md still documents the webserver's `host` config as accepting `'127.0.0.1' | '0.0.0.0'`, and the shipped web composition sets that host in an ordinary Cordis row (`- id: webserver ... config: host: !!js ctx.webStartup.host ?? '127.0.0.1'`) that architecture.md says any patch may replace.

**Operator consequence.** Re-audit. If anyone stood dsh up on a LAN before 2026-08-13 by following the flag's own help text, they are serving remote code execution to that network and should stop today: bind loopback and reach it over an SSH tunnel. Do not treat the new error as a control -- it guards one flag, not the port. The webserver row is patchable config, so a `cordis.patch.yml` overlay or any bundle layered above the shipped one can bind 0.0.0.0 without touching the CLI.

## 3. Nothing authenticates the Web UI on 127.0.0.1:3080, and the /api fence says so in its own header comment

- **Date:** 2026-08-13
- **Channel:** `preview-or-beta` (only in a prerelease tag)
- **Ancestry evidence:** Both files read at tag commit 99f6f02fecdb7dff40c3fbc9470f5907c29f74ca, which `git ls-remote --tags` shows is the sole tag and which the release API flags `prerelease: true`. The fence's last change, 0a42836fbb (2026-08-13), compares `behind` / `ahead_by 0` against that tag.
- **Receipt:** https://github.com/deepseek-ai/deepseek-harness/blob/99f6f02fecdb7dff40c3fbc9470f5907c29f74ca/packages/client/connection/src/api-request-trust.ts
- **Half:** defect | security-relevant | **Confidence:** high

**What changed.** The answer to "what authenticates a request to the Web UI" is: nothing, and DeepSeek documents that rather than implying otherwise. packages/client/connection/src/api-request-trust.ts opens with "Network reachability and authentication stay out of scope: binding policy belongs to the webserver config, and this fence is not an auth layer." What `isTrustedApiRequest()` does is check the Host header against loopback or a declared `trustedHosts` authority, refuse an explicit `sec-fetch-site: cross-site`, and require any attached Origin to match the Host -- a DNS-rebinding and cross-site fence, not an identity check; an absent Origin passes. docs/subsystems/web-server.md is equally plain about the carrier: "there is no TLS, auth, or origin policy, so a non-loopback bind exposes the server to that network." The consequence is that any local process, any other user on a shared machine, and anything that can run `curl` against 127.0.0.1:3080 has the full API -- sessions, agents, and the bash tool behind them.

**Operator consequence.** Re-audit, and treat port 3080 as a shell. On a multi-user or shared-tenant host, `dsh web` hands every local account the agent's command execution. Do not add `--trusted-host` to make a LAN bind work -- that flag exists to satisfy the rebinding fence, and satisfying the fence is not authenticating anyone. Until an auth layer lands, the only defensible deployment is a single-user machine on loopback, reached remotely by SSH tunnel.

## 4. Everything is a plugin, including the components that enforce the limits -- the approval gate is a waterfall a plugin can prepend to

- **Date:** 2026-08-13 | **Version:** 0.1.0-rc.7
- **Channel:** `preview-or-beta` (only in a prerelease tag)
- **Ancestry evidence:** All cited documents and the composition file are read at 99f6f02fecdb7dff40c3fbc9470f5907c29f74ca, the sole tag, flagged prerelease by the GitHub release API. No stable tag exists to compare against.
- **Receipt:** https://github.com/deepseek-ai/deepseek-harness/blob/99f6f02fecdb7dff40c3fbc9470f5907c29f74ca/docs/architecture.md
- **Half:** both | security-relevant | **Confidence:** high

**What changed.** Testing the architectural claim against the code rather than repeating it: the answer to "can a plugin replace the component that would have refused it" is mostly yes, with one deliberate exception. architecture.md states the design outright -- "Every part of the product is a plugin, including the model adapter, the tool registry, the session log, and the agent loop itself, so every part is replaceable from configuration. There is no privileged core to patch" -- then makes it operational: "A patch targets a row by id and replaces its whole config... Any row it prints can be replaced by a patch of your own." The enforcement points are ordinary rows. capability-seams.md classifies `ctx.approval` as a `seam` and `ctx.sandbox` as a `seam` with a single implementation. The approval decision dispatches over the `approval/request` waterfall, where "the first answer occupies the single decision slot," so a plugin registering an answerer with `prepend` claims every permission question and can return `allowed-once`. sandbox.md adds that the consumer, not the sandbox, decides whether confinement is consulted at all: "A `danger-full-access` consumer spawns its original argv and does not call `ctx.sandbox`" -- and the shell executor is itself a swappable seam (`bash-sandbox` confines, `bash-local` does not). The one hard stop is the `never` approval policy, enforced "inside the service before waterfall dispatch, so even an answerer registered later with `prepend` cannot bypass it." Two honest mitigations: permission-presets refuses to load over a non-confining shell executor ("composing over a bash executor that does not confine ... throws"), so silently swapping in `bash-local` breaks a visible feature; and a missing or throwing answerer fails closed to `unavailable` rather than opening the gate.

**Operator consequence.** Test before trusting, and read `dsh --profile web --dump-config` as a security document rather than a debug aid. Every row it prints is a thing a bundle, profile patch, home patch or `--patch` overlay can replace -- the approval seam, the shell executor, the webserver bind host. If you intend to run dsh under any policy, the policy has to live outside the harness (OS user, container, network), because inside it the enforcing component and the enforced code are the same kind of object. The one control that survives a hostile plugin is `approval/policy: never`, which is deterministic and pre-dispatch.

## 5. A dsh plugin is an unsandboxed in-process module with no permission declaration, and 6,958 repositories already claim the topic

- **Date:** 2026-08-15
- **Channel:** `preview-or-beta` (only in a prerelease tag)
- **Ancestry evidence:** The plugin contract is read from docs/user/develop/basic/index.md and packages/extensions/README.md at 99f6f02, the sole tag, prerelease per the release API. The maintainer statement is a Discussions post by a COLLABORATOR (Gniy7Ga) dated 2026-08-15T07:47:07Z; the topic count is a live GitHub search index, not a repo channel.
- **Receipt:** https://github.com/deepseek-ai/deepseek-harness/discussions/1797
- **Half:** both | security-relevant | **Confidence:** high

**What changed.** The plugin contract enforces types and dependency order, not privilege. The official first-plugin tutorial defines the whole contract: "a plugin is a TypeScript module that exports an `apply` function" taking a Cordis `Context` -- no manifest, no declared capabilities, no permission grant, no isolation. It runs in the harness process with whatever Node can do. The harness does sandbox code the *model* writes -- packages/extensions/README.md describes `cordis-host-runner` as owning "the `node:vm` sandbox for host halves" for agent-defined dynamic packages -- but nothing sandboxes the plugins an *operator* installs, and `node:vm` is not a security boundary in any case. Against that contract, `topic:dsh-plugin` already returns 6,958 repositories, and both README and CONTRIBUTING push authors to tag their repos with it. The maintainers' own community post is explicit about what that index is worth: "Third-party content is independently maintained and has not necessarily been reviewed or endorsed by DeepSeek. Please verify its source and assess any risks before using it." CONTRIBUTING goes further and disclaims curation as a matter of design: "We do not believe that packages in the official repository are inherently more important than packages created by the community."

**Operator consequence.** Treat installing a dsh plugin as running arbitrary code as your user, because that is what it is -- closer to `curl | sh` than to installing a VS Code extension. Review the source of every plugin you mount, pin it by version, and never install one on a machine holding credentials you are not prepared to rotate. Note too that plugin installs build on install: apps/cli/src/plugin.ts warns that "git-hosted plugins build on install via their prepare script." Ignore the topic count as an adoption signal; count it as attack surface.

## 6. Sandbox escalation dead-loops any danger-full-access session, and rc.7 still ships the loop

- **Date:** 2026-08-14
- **Channel:** `preview-or-beta` (only in a prerelease tag)
- **Ancestry evidence:** Verified in source at the tag rather than taken from the report: packages/sandbox/sandbox/src/escalation.ts at 99f6f02 (the sole tag, prerelease) still defines `WIDER_MODES` with keys `read-only` and `workspace-write` only, and `ESCALATION_TARGETS = ['workspace-write', 'danger-full-access']`. The file's last change is 2dc62497ce (2026-07-14), well before the tag, so nothing in rc.7 addressed it.
- **Receipt:** https://github.com/deepseek-ai/deepseek-harness/discussions/1069
- **Half:** defect | **Confidence:** high

**What changed.** A session on the `danger-full-access` preset (sandbox `danger-full-access` + approval `never`) can be driven into an unbreakable retry loop. `approveEscalation()` does `if (!(WIDER_MODES[effectiveMode] ?? []).includes(mode)) throw new Error(`sandbox escalation to "${mode}" is not strictly wider than this call's current "${effectiveMode}" mode`)`. `WIDER_MODES` has no `danger-full-access` key, so from that mode every escalation throws -- there is no wider mode to name. Meanwhile the tool schema keeps advertising the escalation arguments regardless, by design: the file's own comment says the widening table is "Checked at EXECUTION, never baked into a tool schema -- the schema's enum is ESCALATION_TARGETS, because schemas are registry-global while the effective mode is per-call truth." So bash, pwsh, edit and write keep offering `sandbox_permissions` in a session where no value can ever succeed, the model keeps filling it in, and every call is refused with a message that reads like an invitation to pick a wider value. Reported 2026-08-14 by wizzy-yang against rc.6 with source line references, reproduced by four other users through 2026-08-17, and a commenter who pulled master at rc.7 confirms the code is unchanged. The report is model-independent: it reproduces through an OpenAI-compatible gateway, and models in that family tend to send the escalation arguments pre-emptively rather than only after a denial marker.

**Operator consequence.** Watch, and work around it rather than waiting. If you use the `danger-full-access` preset with a non-DeepSeek model, expect the agent to burn tokens in a refusal loop. The no-code workaround with the best evidence behind it is one line in your project or home `AGENTS.md` telling the model never to send `sandbox_permissions` or `justification`; under `danger-full-access` those fields have no success path, so stripping them loses nothing. Report follow-ups in Discussions, since there is no issue tracker. Structurally this is what a schema that is registry-global while policy is per-call costs -- worth remembering when evaluating any harness that separates the two.

## 7. npm latest is current on the CLI and stale on almost every library package a plugin author would install

- **Date:** 2026-08-17 | **Version:** 0.1.0-rc.7
- **Channel:** `preview-or-beta` (only in a prerelease tag)
- **Ancestry evidence:** Every published version of every dsh package is a prerelease (`0.0.1-rc.*` or `0.1.0-rc.*`) per the npm packuments; only `dsh-v0.1.0-rc.7` exists as a git tag and the release API flags it `prerelease: true`. The publishing policy is in scripts/release/publish.ts at that tag: "A prerelease version never takes the latest dist-tag" -- `const tagArgs = version.includes('-') ? ['--tag', 'next'] : []`.
- **Receipt:** https://registry.npmjs.org/@deepseek-ai/dsh-base
- **Half:** defect | **Confidence:** high

**What changed.** The npm `latest` dist-tag on `@deepseek-ai/dsh` resolves to `0.1.0-rc.7` today (`next` likewise), so the README's `npx @deepseek-ai/dsh web` does fetch the current release candidate. But that is the only package where `latest` is current. Checked against the registry the same day: `dsh-base` latest=0.0.1-rc.1, `dsh-llm` 0.0.1-rc.1, `dsh-tool-bash` 0.0.1-rc.1, `dsh-sandbox` 0.0.1-rc.1, `dsh-user-approval` 0.0.1-rc.1, `dsh-web-app` 0.0.1-rc.1, `dsh-agent` 0.1.0-rc.6, `dsh-app-boot` 0.1.0-rc.6 -- while `next` is `0.1.0-rc.7` on all of them. `0.0.1-rc.1` was published 2026-08-10T19:37Z, three days before the public repo existed. The mechanism is documented in the repo: the publish script never assigns `latest` to a prerelease, so those tags are frozen at whatever npm set on each package's first publish, and scripts/publish-npm-baseline.ts moves `latest` for exactly one package -- `this.ensureDistTag(RELEASE_ENTRY_PACKAGE, LATEST_DIST_TAG)` with `RELEASE_ENTRY_PACKAGE = '@deepseek-ai/dsh'`. Separately, no published dsh tarball carries a `gitHead`, so npm metadata cannot map an installed version back to a commit.

**Operator consequence.** Adapt, if you are writing a plugin. `npm i @deepseek-ai/dsh-llm` today hands you a build from before the project was public, against a harness running rc.7. Install every dsh library with an explicit version or `@next`, never bare, and check `npm view <pkg> dist-tags` before believing a resolution. For provenance, do not expect the tarball to tell you its commit -- it does not; the release notes' compare range (`fb826987...99f6f02`) is the only public mapping from a version to a set of commits.

## 8. The public repo is a mirror; the release identity is a private repository the project deliberately does not name

- **Date:** 2026-08-13
- **Channel:** `preview-or-beta` (only in a prerelease tag)
- **Ancestry evidence:** All cited files are read at 99f6f02, the sole tag, flagged prerelease. Repo metadata from `gh api repos/deepseek-ai/deepseek-harness` returns `has_issues: false`, `has_pull_requests: false`, `created_at: 2026-08-13T11:56:32Z`. Org metadata from `gh api users/deepseek-harness` returns `type: Organization, created_at: 2026-05-26T23:40:12Z, public_repos: 0`.
- **Receipt:** https://github.com/deepseek-ai/deepseek-harness/blob/99f6f02fecdb7dff40c3fbc9470f5907c29f74ca/.github/workflows/python-release.yml
- **Half:** neither | **Confidence:** high

**What changed.** The contract asked whether the public repo is the development home. It is not, and the repo says so in its own CI. .github/workflows/python-release.yml gates publication on `[ "$REPOSITORY" = "$PYPI_PUBLISHER_REPOSITORY" ]` with the error "This repository is not the configured PyPI publisher repository," its header speaks of "the private publisher-repository identity," and it disables PyPI attestations with the comment "Public attestations reveal the private publisher repository." Around it: .gitlab-ci.yml publishes Python wheels to a GitLab package registry (`TWINE_REPOSITORY_URL="$CI_API_V4_URL/projects/$CI_PROJECT_ID/packages/pypi"`) on `python-v*` tags that do not exist here; scripts/publish-npm-baseline.ts defaults to an internal registry, `https://registry.npm.harnessment.com`; issue templates, an issue-lifecycle policy engine and a pull_request_template are all committed while issues and PRs are both disabled; merge commits reference PR numbers up to #2620 in the `deepseek-harness` org, which has existed since 2026-05-26 with zero public repos, and `gh api .../pulls/2620` returns 404 here; and npm publishing began 2026-08-10, three days before this repo was created. The good news, and it is genuinely good: the mirror is not shallow. Master carries 12,404 commits back to "Initialize repo with README, AGENTS.md, and CLAUDE.md symlink" on 2026-06-10, so the two months of development before the launch are readable, and one of the first public commits is f33f8583b5, "fix(docs): point source links at public master."

**Operator consequence.** Watch, and calibrate your reading. The commit history is unusually complete for a mirror, so ordinary archaeology works. But the tag surface is not the release record -- six of the seven npm versions have no tag here -- and PR numbers in commit messages point at a repo you cannot open, so a merge commit is often the deepest available receipt. Report defects in Discussions and keep your own copy of the text and permalink, because a discussion can be edited or deleted without trace and there is no issue tracker behind it. Do not read a gap in this history as evidence that no work happened.

## 9. DeepSeek's own harness ships a supported path to run OpenAI and Anthropic models, and to drive Codex and Claude Code as subagents

- **Date:** 2026-08-17 | **Version:** 0.1.0-rc.7
- **Channel:** `preview-or-beta` (only in a prerelease tag)
- **Ancestry evidence:** `gh api repos/deepseek-ai/deepseek-harness/compare/dsh-v0.1.0-rc.7...226600147e` returns `"status":"behind", "ahead_by":0`, so the llm work is contained in the sole tag, which the release API flags `prerelease: true`. The subagent providers are listed in docs/capability-seams.md at the same tag, and the Job Panel integration is named in that tag's own release notes.
- **Receipt:** https://github.com/deepseek-ai/deepseek-harness/blob/99f6f02fecdb7dff40c3fbc9470f5907c29f74ca/packages/llm/llm-pi-ai/README.md
- **Half:** capability | **Confidence:** high

**What changed.** The lab that trains the model did not build a single-vendor harness. `@deepseek-ai/dsh-llm-pi-ai` is a first-party "generic multi-provider adapter for the harness LLM seam," it is a declared dependency of `@deepseek-ai/dsh-base` -- the bundle architecture.md calls "the first layer of every profile" -- and its README's worked config shows an `openai` route with `apiKeyEnv: OPENAI_API_KEY`, an `anthropic` route pinned to `claude-sonnet-4-5`, and a hand-declared `acme-gateway` route for any OpenAI-compatible endpoint. It is supported rather than incidental: there is a dedicated CI workflow, .github/workflows/pi-ai-provider-e2e.yml. On the delegation side, docs/capability-seams.md lists `subagent-codex` and `subagent-claude-code` as shipped implementations of the `ctx.subagents` seam, spawning through `ctx.subprocess`, and the rc.7 release notes add "Manage Codex and Claude Code subagent tasks through the Job Panel." Worth attributing precisely: the multi-provider layer is not DeepSeek's own, it is backed by the third-party `@earendil-works/pi-ai` (repo github.com/earendil-works/pi, latest 0.84.2 published 2026-08-14), so provider coverage and wire-protocol behaviour are facts about that pair.

**Operator consequence.** Try it, if you are evaluating harnesses independently of model choice -- this is the rare lab-first-party harness that does not assume its own model, and it will drive Codex and Claude Code as subagents behind one interface. Two cautions. Provider behaviour you observe through this adapter is a fact about dsh plus pi-ai, and a pi-ai release can change it with no commit landing in deepseek-harness. And note the interaction with the escalation defect above: the loop reproduces specifically with OpenAI-family models through this path, so the multi-provider road is where the sharpest current bug lives.

## 10. Cordis is vendored and republished under DeepSeek's scope, at a version upstream has never shipped

- **Date:** 2026-08-13
- **Channel:** `preview-or-beta` (only in a prerelease tag)
- **Ancestry evidence:** The npm packument for `@deepseek-ai/cordis` gives dist-tags `{latest: 4.0.1, next: 4.0.1-rc.4}` and a repository field of `git+https://github.com/deepseek-ai/deepseek-harness.git` with `directory: vendor/cordis` -- built from this repo's tree, which at 99f6f02 (sole tag, prerelease) contains vendor/cordis alongside vendored cosmokit, group, hmr, include, loader, logger-console, schemastery and timer. The upstream `cordis` packument gives dist-tags `{latest: 4.0.0-rc.8, next: 4.0.0-beta.5}` with repository `git+https://github.com/cordiverse/cordis.git`.
- **Receipt:** https://registry.npmjs.org/@deepseek-ai/cordis
- **Half:** neither | **Confidence:** high

**What changed.** The contract flags that the plugin boundary dsh sells is defined in someone else's repo. In practice it is defined in a fork of someone else's repo. `@deepseek-ai/dsh@0.1.0-rc.7` depends on `@deepseek-ai/cordis: ^4.0.1`, not on `cordis`. DeepSeek vendored the framework as source in its second-ever commit ("Vendor Cordis framework packages as source," 2026-06-11) and republishes it under its own npm scope from `vendor/cordis`. The version numbers diverge in a way worth noticing: DeepSeek's `latest` is `4.0.1`, a plain non-prerelease number, while upstream cordiverse has never released a stable 4.x -- its `latest` is `4.0.0-rc.8`, published 2026-08-10. So the one component in the dsh install tree carrying a stable-looking version is a fork of a framework its own authors still call a release candidate.

**Operator consequence.** Watch the right repo. A Cordis fix landing at cordiverse does not reach your dsh install; DeepSeek ships it out of vendor/, on DeepSeek's schedule. Conversely a change to the plugin paradigm can arrive in your tree from a package whose upstream you were not watching. If you are diagnosing plugin lifecycle, service resolution or hot-reload behaviour, read vendor/cordis in this repo at your installed version -- not cordiverse/cordis, which is a different codebase on a different version line.

## 11. rc.7's actual contents: plugin-owned settings cards, low reasoning effort, and a Job Panel for Codex and Claude Code subagents

- **Date:** 2026-08-17 | **Version:** 0.1.0-rc.7
- **Channel:** `preview-or-beta` (only in a prerelease tag)
- **Ancestry evidence:** The release notes belong to tag dsh-v0.1.0-rc.7 (`prerelease: true`), and the named commits are ancestors of it: `compare/dsh-v0.1.0-rc.7...8f998186a9` and `...226600147e` both return `"status":"behind", "ahead_by":0`. The notes close with the compare range `fb82698709c39f1860b0ab0ed147e1fa30c1d5d0...99f6f02fecdb7dff40c3fbc9470f5907c29f74ca`, i.e. everything since rc.6.
- **Receipt:** https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.1.0-rc.7
- **Half:** both | **Confidence:** high

**What changed.** The first public release note, four days after the repo appeared, covers the range from rc.6 (2026-08-13) to rc.7 (2026-08-17). Capability side: plugins can now register their own settings cards (merge 8f998186a9, branch `feat/plugin-owned-settings-surface`) -- a real widening of the plugin contract, since a plugin previously could not own UI in the settings surface; Codex and Claude Code subagent tasks are managed through the Job Panel; MCP and ACP gained durable image attachments with nested image forwarding in PTC Mode; and DeepSeek models gained a `low` reasoning effort with `high` still the default (226600147e). Defect side: persistent Bash latency in minimal mode, stack overflows in large-history pagination, sessions lost after max-token truncation, Safari composer cursor misalignment, and a node-pty 1.2-beta upgrade for broader PTY compatibility. One naming change an operator will notice: the English `Code mode` preset is renamed `PTC mode`. The notes are published bilingually, Chinese first.

**Operator consequence.** Observe, and if you are already running dsh, take rc.7 -- the max-token truncation fix alone recovers sessions that previously became unusable. Plugin authors should read docs/cookbook/adding-a-settings-card.md before designing configuration UI, because the surface it targets did not exist in rc.6. Note the node-pty dependency is a beta, so terminal behaviour is the first place to look if rc.7 regresses on your platform. And expect the `Code mode` to `PTC mode` rename to break any documentation or automation of yours that names the preset.

## 12. The default posture confines file writes only -- reads, network and process visibility are unconfined by design

- **Date:** 2026-08-13
- **Channel:** `preview-or-beta` (only in a prerelease tag)
- **Ancestry evidence:** Both documents are read at 99f6f02, the sole tag, flagged prerelease by the GitHub release API. There is no stable tag to compare against.
- **Receipt:** https://github.com/deepseek-ai/deepseek-harness/blob/99f6f02fecdb7dff40c3fbc9470f5907c29f74ca/apps/cli/reference/README.md
- **Half:** neither | security-relevant | **Confidence:** high

**What changed.** Worth stating plainly because the landing page's phrasing invites the opposite reading. apps/cli/reference/README.md at the tag: "New sessions default to the `workspace-write` permission preset. Bash and filesystem mutations are restricted to the session workspace and platform temporary roots; reads, network access, and process visibility are not confined." docs/subsystems/sandbox.md agrees at the vocabulary level -- `SandboxMode` "governs filesystem effects only... Network and process visibility are outside this vocabulary" -- and adds that enforcement completeness is a reported fact, not a guarantee: `partial` means "an active backend or older kernel ABI cannot govern every promised file effect," with older Landlock ABIs and the Windows ACL runner's Everyone and hard-link boundaries named as current partial cases. The backends are Linux bwrap/Landlock, macOS Seatbelt, and a Windows ACL restricted-token runner.

**Operator consequence.** Calibrate, and do not describe this to your security team as a sandbox. The default preset stops the agent writing outside your workspace; it does not stop it reading your SSH keys, your cloud credential files or your browser profile, and it does not stop it making network calls with what it read. On Windows, or on a Linux kernel with an older Landlock ABI, even the write confinement can report `partial`. If the threat you care about is exfiltration rather than accidental writes, the boundary has to be a container, a VM or a separate machine.

## Researcher lane notes

First cycle for this source; contract and notes file read before any web access, as required. Everything reported is w2: the public repo was created 2026-08-13T11:56:32Z and the earliest npm publish is 2026-08-10T19:41Z, both inside w2 [2026-08-10, 2026-08-17]. Nothing falls in w1, and nothing before 2026-08-03 needed reporting except as context inside a change body.

Channel resolution is unusually simple and unusually blunt here. `git ls-remote --tags` returns exactly one ref, dsh-v0.1.0-rc.7; the release API flags it `prerelease: true`; and `compare/dsh-v0.1.0-rc.7...master` returns `identical`. So every code finding is preview-or-beta by ancestry, and there is currently no main-unreleased surface at all. I verified ancestry individually for the five commits I cite (6cbf927e0a, 0633add19d, 0a42836fbb, 8f998186a9, 226600147e), each returning `status: behind, ahead_by: 0` against the tag. Every source and doc receipt is pinned to a blob URL at 99f6f02fecdb7dff40c3fbc9470f5907c29f74ca; no /blob/master/ URL appears in this report.

Timing caveat worth recording. The window ends 2026-08-17, but GitHub's clock had rolled past midnight UTC while I harvested: the repo reports `updated_at: 2026-08-18T06:36:10Z` and a dozen discussions carry 2026-08-18 timestamps. I excluded all of them. Two are worth flagging for next window because they bear on findings here: discussion #3006 asks whether an auth layer is planned so 0.0.0.0 binding can be opened up, and #3002/#3007 report further defects. The rc.7 release itself (2026-08-17T12:01:58Z) is inside the window by twelve hours.

Gaps and unresolved items. (1) No public roadmap or stabilisation date for 0.1.0 proper exists on any surface I checked -- the maintainer announcement says only "v0.1 is just the beginning." The contract's open question about a stabilisation target remains open. (2) The canonical ship signal is still ambiguous but less so than at intake: npm publish leads (rc.7 at 11:50Z), the GitHub release follows (12:01Z), and the git tag is the least reliable of the three, since six of seven npm versions have no tag here at all. On current evidence npm is the ship signal and the tag surface is a partial mirror artefact. (3) I could not name the private publisher repository, by design -- python-release.yml disables PyPI attestations specifically to avoid revealing it -- so "a private repo exists and gates publication" is as far as the receipts go. (4) I did not run dsh. The Web UI auth finding, the escalation dead-loop and the patchability of the webserver row are all read from source at a pinned SHA and from the project's own docs, not from a local probe; a reproducible probe would strengthen the escalation finding in particular, though a community reporter's line-referenced analysis and my own reading of escalation.ts at the tag already agree. (5) I asserted that `node:vm` is not a security boundary from general knowledge, not from a receipt in this repo; the repo calls it a sandbox and I have reported only what the repo says.

Attribution notes, per the contract's pair rule. The multi-provider LLM behaviour is a fact about dsh plus `@earendil-works/pi-ai`, not about DeepSeek alone. The plugin paradigm is a fact about dsh plus DeepSeek's *vendored* Cordis -- not upstream cordiverse/cordis, which is a different codebase on a different version line (upstream latest 4.0.0-rc.8; DeepSeek's republication 4.0.1). Any future finding about plugin lifecycle should say "dsh's vendored Cordis."

Contract compliance: `star_count_as_adoption` is rejected evidence and the star count appears nowhere in this report. The 6,958 `dsh-plugin` topic repositories are cited only as attack surface against an unsandboxed plugin contract, never as adoption. The landing page was read but treated strictly as a marketing surface, and its claim that sandboxes are swappable capabilities is reported only where code at the tag confirms it. Both halves of the harvest are present: five capability findings and five defect or posture findings, with two marked `both`.

## Surfaces checked

- sources/deepseek-harness.yml (source contract, read first) and sources/deepseek-harness.notes.md
- GitHub repo metadata: gh api repos/deepseek-ai/deepseek-harness (created 2026-08-13T11:56:32Z, default branch master, has_issues=false, has_pull_requests=false, has_discussions=true, MIT)
- Tags: git ls-remote --tags https://github.com/deepseek-ai/deepseek-harness.git and gh api .../tags
- Releases: gh api .../releases and .../releases/tags/dsh-v0.1.0-rc.7
- Default-branch commits: gh api .../commits?sha=master --paginate (12,404 commits, back to 2026-06-10)
- Ancestry: gh api .../compare/dsh-v0.1.0-rc.7...<sha> for master and five feature commits
- Security advisories: gh api repos/deepseek-ai/deepseek-harness/security-advisories (empty array)
- Discussions: GraphQL repository.discussions (2,981 total), plus full read of #1797 and #1069
- npm packuments: @deepseek-ai/dsh, dsh-base, dsh-agent, dsh-llm, dsh-tool-bash, dsh-app-boot, dsh-sandbox, dsh-user-approval, dsh-web-app, @deepseek-ai/cordis, upstream cordis, @earendil-works/pi-ai
- PyPI: deepseek-harness-sdk and deepseek-harness-runtime-bin (both HTTP 200)
- Docs at pinned SHA 99f6f02: architecture.md, capability-seams.md, subsystems/{web-server,approval,sandbox,permission-presets,invariants,extensions}.md, api-gateway.md, i18n/README.md, user/develop/basic/index.md
- Source at pinned SHA: packages/client/connection/src/api-request-trust.ts, packages/sandbox/sandbox/src/escalation.ts, packages/bundle/web-app/src/startup.ts, packages/bundle/web-app/cordis.patch.yml, scripts/release/publish.ts, scripts/publish-npm-baseline.ts, apps/cli/reference/README.md, packages/llm/llm-pi-ai/README.md, packages/extensions/README.md
- CI at pinned SHA: .gitlab-ci.yml, .github/workflows/release.yml, .github/workflows/python-release.yml, .github/ISSUE_TEMPLATE/config.yml, full .github tree listing
- Ecosystem index: GitHub topic search topic:dsh-plugin (6,958 repositories)
- Landing page: https://deepseek.com/harness/en/ (HTTP 200, rendered text)
- GitHub org github.com/deepseek-harness (exists, created 2026-05-26, 0 public repos)
