# OpenHands adversarial crosscheck

Source: `openhands`.
Run: `2026-10-24-weekly-digest-2026-10-13_2026-10-24-frontier-v0`.
Window: after 2026-10-13T23:59:59Z through the independent reads on 2026-10-24 UTC.

**Result: 11 VERIFIED, 4 CORRECTED, 0 REFUTED, 0 UNVERIFIABLE numbered sections.** The newest-stable versions and all four release ledgers are right. Install today needs correction for selectable-mode network behavior and the omitted Enterprise child-launch gate. The harvest also misses material changes in the bundled extensions and other authority/default controls. Do not publish the harvest unchanged.

## Independent method and channel snapshot

I read the researcher brief, AGENTS.md, THESIS.md, METHOD.md, EDITORIAL.md, CONTRIBUTING.md, the source contract/notes, the current profile, and the complete assigned harvest. Independent blobless, no-checkout clones are under `/Users/c3po/co/frontier/tmp/cycle-2026-10-24/clones/openhands-verify/` in `canvas`, `sdk`, `automation`, `enterprise`, `docs`, and `extensions`. Origin identity and `blob:none` were checked for the five original repositories. All 68 GitHub links in numbered Receipt fields resolved through independent git object/file reads. Commit/date/content checks, latest-tag source reads and additional consumer reads underpin the verdicts below. Cloned code, tests, installers, containers and upstream skills were never executed or treated as instructions.

Independent mutable observations:

| Read UTC on 2026-10-24 | Surface | Result |
|---|---|---|
| 10:17:55 | GitHub release lists for the four original streams | Canvas v1.33.0, SDK v1.58.1, automation 1.25.1, Enterprise 1.79.0; all non-prerelease, none newer |
| 10:18:50.900801 | [Canvas npm metadata](https://registry.npmjs.org/@openhands%2fagent-canvas) | latest 1.33.0; alpha 1.0.0-alpha.4; beta 1.0.0-beta.1 |
| 10:18:50.901338 | [TypeScript client npm metadata](https://registry.npmjs.org/@openhands%2ftypescript-client) | latest 1.58.1 |
| 10:18:50.901505 / .901706 / .901803 | [agent-server](https://pypi.org/pypi/openhands-agent-server/json), [SDK](https://pypi.org/pypi/openhands-sdk/json), [automation](https://pypi.org/pypi/openhands-automation/json) | 1.58.1 / 1.58.1 / 1.25.1; current artifacts not yanked |
| 10:19:30.564927 / 10:19:31.743778 | Anonymous GHCR manifests for 1.33.0 / latest | Both sha256:49e2517eb14a133cb952e0575c24ec59db963ac096b404932f7a1bc9a12e666c |
| 10:29:09.151243 | [Extensions npm metadata](https://registry.npmjs.org/@openhands%2fextensions) | latest 0.35.0; alpha 0.0.1-alpha |

[Canvas v1.33.0](https://github.com/OpenHands/OpenHands/releases/tag/v1.33.0) was published 2026-10-23T13:46:20Z. Its independently listed assets include the universal macOS DMG, Windows installer, amd64 Debian package and Linux AppImage. [Package metadata](https://github.com/OpenHands/OpenHands/blob/v1.33.0/package.json) confirms the npm package/bin and Node >=24; [the README](https://github.com/OpenHands/OpenHands/blob/v1.33.0/README.md) confirms the npm/uv and Docker install paths. Pinning `@openhands/agent-canvas@1.33.0` is correct.

[Released defaults](https://github.com/OpenHands/OpenHands/blob/v1.33.0/config/defaults.json) independently confirm server 1.58.1, automation 1.25.1 and remote floor 1.55.0. [Canvas package metadata](https://github.com/OpenHands/OpenHands/blob/v1.33.0/package.json) also pins extensions 0.35.0. The standalone [CLI selector](https://api.github.com/repos/OpenHands/OpenHands-CLI/releases/latest) still chooses 1.16.0, published 2026-05-08T15:56:44Z. None of these establishes hosted Cloud's serving version.

Fetched main identities and independent ahead/behind counts match the harvest:

| Repository | Stable to pinned main | Ahead / behind |
|---|---|---|
| Canvas | [v1.33.0 to fee10e3d2909ebbf9950578575b1ee011492171e](https://github.com/OpenHands/OpenHands/compare/v1.33.0...fee10e3d2909ebbf9950578575b1ee011492171e) | 6 / 0 |
| SDK | [v1.58.1 to acd96e6fa424c02432304395b9208f99be24b54d](https://github.com/OpenHands/software-agent-sdk/compare/v1.58.1...acd96e6fa424c02432304395b9208f99be24b54d) | 4 / 0 |
| Automation | [1.25.1 to 2c110703bbe91e4113a57adc1fa64a912ac7f4f8](https://github.com/OpenHands/automation/compare/1.25.1...2c110703bbe91e4113a57adc1fa64a912ac7f4f8) | 2 / 0 |
| Enterprise | [1.79.0 to 7486d8411038d21e97e8edf6aa3e282e464e223b](https://github.com/OpenHands/enterprise/compare/1.79.0...7486d8411038d21e97e8edf6aa3e282e464e223b) | 9 / 0 |

## Release ledger: VERIFIED

I independently listed releases with `gh release list`, re-read release objects, and compared all 37 rows including the four baselines against tag names, full 2026 publication timestamps and prerelease flags. There were zero field mismatches. Every Canvas registry timestamp matched npm. Every agent-server and automation registry timestamp matched the earliest PyPI artifact upload. The three original package histories and npm histories contain no newer stable than reported. All in-window semantic stable tag names also agree with the release inventory.

Independent consecutive-stable ahead counts, with zero behind throughout:

- Canvas, v1.27.1 to v1.33.0: 102, 3, 25, 15, 5, 11, 9, 16; total 186. Baseline versus v1.27.0 is 4.
- SDK, v1.54.0 to v1.58.1: 55, 5, 61, 15, 31, 3; total 170. Baseline versus v1.53.0 is 33.
- Automation, 1.19.3 to 1.25.1: 3, 2, 3, 4, 7, 3, 2, 6, 10, 3; total 43. Baseline versus 1.19.2 is 2.
- Enterprise, 1.71.0 to 1.79.0: 45, 4, 10, 19, 18, 9, 6, 28, 4; total 143. Baseline versus 1.70.0 is 37.

Thus 33 new non-prerelease releases across those four streams is correct. The [versioned Enterprise distribution notes](https://github.com/OpenHands/docs/blob/b918604b96b43485fe5db4d92df704e04fb0207c/enterprise/release-notes/0.81.0.mdx) date 0.81.0 to 2026-10-13; their 2026-10-15 documentation commit does not move that distribution into the window. The separate extensions stream adds six stable releases, v0.31.0 through v0.35.0 including v0.32.1, which were omitted from the material-change investigation.

## Numbered-section verification

In each ancestry line, `previous=1; first=0` means independent `git merge-base --is-ancestor` calls returned exit 1 for the preceding stable and exit 0 for the first stated stable. All released changes also remain ancestors of the newest relevant stable. Main-only lines were independently checked absent from newest stable, present on the pinned main above, and in no tag. Full SHAs are in the linked receipts. Release dates refer to publication, not merely commit timestamps.


## 1. Local launches keep the selected profile, and profiles take ownership of behavior

**Verdict: CORRECTED.**

The local launch correction, migration failure behavior, removal of inline SDK profile launches, and profile-owned routing/skills are supported at the stated tags and release dates.

C1: Replace the sentence saying Cloud falls back for a profile with neither an LLM reference nor explicit secret references. At v1.33.0, `cloudFallsBackToDefault` returns false when `llm_profile_ref` is absent. It falls back for an OpenHands profile whose nonempty LLM reference cannot be found in the fetched LLM-profile list, and whose fetched detail does not contain a `secret_refs` array. A failed detail fetch refuses that fallback. A Cloud launch with no selected/active profile separately returns an empty launch. These conditions matter when deciding whether the selected profile's scope reaches the backend. The precise evidence is [resolver lines 72-90 and 159-193](https://github.com/OpenHands/OpenHands/blob/v1.33.0/src/hooks/mutation/resolve-conversation-launch.ts#L159-L193).


**Evidence read:** [launch resolver](https://github.com/OpenHands/OpenHands/blob/v1.33.0/src/hooks/mutation/resolve-conversation-launch.ts), [profile behavior](https://github.com/OpenHands/OpenHands/blob/v1.33.0/src/api/agent-profiles-service/profile-behavior.ts), [SDK profile launch change](https://github.com/OpenHands/software-agent-sdk/commit/818c161b534477849716d445b2927b433f9dd9ab), [public skill selection](https://github.com/OpenHands/software-agent-sdk/commit/d332f8156f12014df1b3522ab01c2508eabf6e8b), [profile-owned settings](https://github.com/OpenHands/OpenHands/commit/61cd03c89ed7e5581d1f304f5791962612701b37)


**Independent ancestry:** sdk 818c161b5: v1.54.0=1; v1.55.0=0; sdk d332f8156: v1.54.0=1; v1.55.0=0; canvas 61cd03c89: v1.28.1=1; v1.29.0=0; canvas 5958302c1: v1.27.1=1; v1.28.0=0.


## 2. In-conversation secret requests reach stable, with server-side profile filtering

**Verdict: VERIFIED.**

Secret requests first ship in Canvas v1.28.0 on 2026-10-19; masking first ships in v1.33.0 on 2026-10-23. At current stable, the UI's saved-secret lookup is unscoped; its completion reports saved after the update returns. Local `EventService.update_secrets` and the Docker forwarding route filter through the launched profile's `allows_secret`. The Cloud helper returns without updating. The harvest correctly distinguishes an apparent success from effective credential delivery and does not claim a request-endpoint bypass or a runtime acceptance result.


**Evidence read:** [request handler](https://github.com/OpenHands/OpenHands/blob/v1.33.0/src/services/secret-request.ts), [conversation secret update](https://github.com/OpenHands/OpenHands/blob/v1.33.0/src/hooks/mutation/conversation-mutation-utils.ts), [local server filtering](https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/openhands-agent-server/openhands/agent_server/event_service.py), [Docker filtering](https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/openhands-agent-server/openhands/agent_server/docker_runtime/routers.py), [masked forms](https://github.com/OpenHands/OpenHands/commit/04f6dd5fcc428b816803b040943a2b7bbc9d14b8)


**Independent ancestry:** canvas 04f6dd5fc: v1.32.0=1; v1.33.0=0; canvas da4c7564d: v1.27.1=1; v1.28.0=0; canvas 045290739: v1.27.1=1; v1.28.0=0.


## 3. Tmux starts honoring secret sanitization, while the automation-key alias still survives

**Verdict: VERIFIED.**

The tmux patch explicitly unsets inherited keys missing from the sanitized environment. It first ships in SDK v1.58.0 on 2026-10-22. Completion-log credential redaction first ships in v1.55.0 on 2026-10-15, although its commit is dated 2026-10-12. At Canvas v1.33.0, the launcher still exports the shared key as `OPENHANDS_AUTOMATION_API_KEY`. SDK v1.58.1's sanitizer excludes session-key names but not that alias; the authenticated raw-secret route has no profile argument/check. The Docker custom-key export gap also remains. This supports the stated code-derived path, not a claim that an exploit was executed.


**Evidence read:** [tmux fix](https://github.com/OpenHands/software-agent-sdk/commit/ec6655cc181db85c9583d0c42956f6bb5e34687d), [completion-log fix](https://github.com/OpenHands/software-agent-sdk/commit/e3a26821f8f7c85e98078c7b5e1a80647fc7d0c7), [sanitized environment](https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/openhands-sdk/openhands/sdk/utils/command.py), [launcher alias](https://github.com/OpenHands/OpenHands/blob/v1.33.0/scripts/dev-with-automation.mjs#L927-L935), [Docker entrypoint](https://github.com/OpenHands/OpenHands/blob/v1.33.0/docker/entrypoint.sh#L210-L239), [saved-secret value route](https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/openhands-agent-server/openhands/agent_server/settings_router.py#L539-L569)


**Independent ancestry:** sdk ec6655cc1: v1.57.0=1; v1.58.0=0; sdk e3a26821f: v1.54.0=1; v1.55.0=0.


## 4. Children inherit exactly the parent's MCP set, and policy rails parse shell structure

**Verdict: VERIFIED.**

Both changes first ship in SDK v1.55.0 on 2026-10-15. At v1.58.1, `inherit_mcp_config` replaces the child's MCP configuration with a copy of the parent's resolved set. Tool restrictions remain separately conditional on `SubAgentScope.tools`; MCP inheritance does not silently make every tool scope mandatory. The AST rails return HIGH for a matched rail, UNKNOWN for unresolved relevant structure, and leave prompting to confirmation policy. `task_tool_set` remains outside the standard tool names. The harvest preserves these distinctions.


**Evidence read:** [exact MCP inheritance](https://github.com/OpenHands/software-agent-sdk/commit/0bd5cc2d322d61f785816a29ef1f2e4c86db2460), [shell AST change](https://github.com/OpenHands/software-agent-sdk/commit/d97eb76f60829a4250dd313f5a9d4d03e2951de8), [current policy rails](https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/openhands-sdk/openhands/sdk/security/defense_in_depth/policy_rails.py), [tool defaults](https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/openhands-sdk/openhands/sdk/tool/defaults.py)


**Independent ancestry:** sdk 0bd5cc2d3: v1.54.0=1; v1.55.0=0; sdk d97eb76f6: v1.54.0=1; v1.55.0=0.


## 5. Cipher-key rotation gains a migration path and refuses destructive writes under a lost key

**Verdict: VERIFIED.**

SDK v1.57.0 ships on 2026-10-21, and Canvas v1.30.1 is the first inspected Canvas pin for that SDK line. The current server README documents old-key decryption, new-key encryption, startup migration of settings/secrets, migration of other records on save, and refusal of destructive writes when values cannot be decrypted. It also explicitly documents the first-session-key encryption fallback. The harvest correctly leaves automation KV migration and external provider-key revocation outside this repair.


**Evidence read:** [rotation change](https://github.com/OpenHands/software-agent-sdk/commit/53757a33283d8d412189421b852640b83a8868cf), [current server documentation](https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/openhands-agent-server/openhands/agent_server/README.md#L273-L286), [Canvas v1.30.1 pins](https://github.com/OpenHands/OpenHands/blob/v1.30.1/config/defaults.json)


**Independent ancestry:** sdk 53757a332: v1.56.0=1; v1.57.0=0.


## 6. A server can offer local and Docker conversations, but client resource values are not capped

**Verdict: CORRECTED.**

Selectable runtimes, client-replaceable CPU/memory defaults, child launch APIs, and explicit OTEL/Laminar forwarding are supported at the stated releases. The CPU/memory values are replacements, not ceilings.

C2: Add the missing Enterprise opt-in. At Enterprise 1.79.0, `enable_child_conversation_launcher` defaults to false. The tool requires `OH_ENABLE_CHILD_CONVERSATION_LAUNCHER`, `web_url`, sandbox images that contain the tool, and compatible Canvas handling. A source release alone does not enable Cloud parent launching. See [released configuration](https://github.com/OpenHands/enterprise/blob/1.79.0/openhands/app_server/config.py#L190-L198) and the cited child-launch commit.

C3: Correct Install today's assertion that both Docker and selectable modes automatically make the Canvas launcher listen on all interfaces. The docs claim that behavior, but [v1.33.0's actual bind selection](https://github.com/OpenHands/OpenHands/blob/v1.33.0/scripts/dev-with-automation.mjs#L506-L511) only recognizes `OH_CONVERSATION_RUNTIME=docker`. `OH_CONVERSATION_RUNTIME_SELECTABLE=1` alone is not tested by that branch. `getAgentHostAlias` likewise only tests the Docker default. A search of the released `scripts`, `config`, and `docker` trees found no selectable-flag handling. State the docs/source mismatch and configure/verify the bind and host reachability explicitly for selectable mode. Do not promise either automatic network exposure or working container callbacks from that flag alone.


**Evidence read:** [runtime selection](https://github.com/OpenHands/software-agent-sdk/commit/77c6ee584101b929fbb50b7b09a66d3a5a0a1053), [child-conversation tool](https://github.com/OpenHands/software-agent-sdk/commit/5966c781ed014efc96c028a99bddd4ff78426741), [Cloud parent launcher](https://github.com/OpenHands/enterprise/commit/c7225f7dc9e506a914e33fd0b95e3146c1fdea6a), [runtime guide](https://github.com/OpenHands/docs/blob/339de53ec95a6b85b5b0f61973aa3ed2e013a91f/openhands/usage/agent-canvas/backend-setup/docker-execution.mdx)


**Independent ancestry:** sdk 77c6ee584: v1.56.0=1; v1.57.0=0; sdk 5966c781e: v1.55.1=1; v1.56.0=0; enterprise c7225f7dc: 1.74.0=1; 1.75.0=0; sdk 4b8cb431a: v1.57.0=1; v1.58.0=0.


## 7. Plugin manifests can carry executable automations, and Azure DevOps joins the event path

**Verdict: VERIFIED.**

Executable plugins first ship in automation 1.21.0 on 2026-10-19. The current schema supports script/conversation entrypoints, requires a profile for conversation entrypoints, describes all-and-only tool/MCP/secret matches, rejects credential-bearing source URLs, and restricts Cloud sources. Azure events, clone capability advertisement, and preset repository edits first ship in 1.24.0 on 2026-10-22; Canvas first consumes the provider capabilities in v1.32.0 on 2026-10-23. A manifest's requirements are not a safety certificate. The bundled extension changes listed under Misses are additional material behavior.


**Evidence read:** [executable plugin change](https://github.com/OpenHands/automation/commit/2a6a77936257de43d312690f942211f1999ef1b4), [current plugin specification](https://github.com/OpenHands/automation/blob/1.25.1/openhands/automation/plugin_specs.py), [Azure events](https://github.com/OpenHands/automation/commit/576b6e548a1f0d0a2b0c207b3cc255a90dc92231), [clone capabilities](https://github.com/OpenHands/automation/commit/e97d865e4b1e640b39162c74d36a4e9c6b602160), [repository updates](https://github.com/OpenHands/automation/commit/8416846361474c811be7b21f7997d7399692b4c0), [Canvas provider picker](https://github.com/OpenHands/OpenHands/commit/ee80223e76501c61177d0857670ad108e7d008ca)


**Independent ancestry:** automation 2a6a77936: 1.20.1=1; 1.21.0=0; automation 576b6e548: 1.23.2=1; 1.24.0=0; automation e97d865e4: 1.23.2=1; 1.24.0=0; automation 841684636: 1.23.2=1; 1.24.0=0; canvas ee80223e7: v1.31.0=1; v1.32.0=0.


## 8. Daily quotas count sandbox creation, and members can save their own automation drafts

**Verdict: CORRECTED.**

The accounting change first ships in Enterprise 1.73.0 on 2026-10-19. Automation's quota-skip behavior first ships in 1.22.0 that day; members' own drafts/uploads are repaired in 1.23.1 on 2026-10-20.

C4: Qualify the quota's enforcement scope. The [released remote sandbox service](https://github.com/OpenHands/enterprise/blob/1.79.0/openhands/app_server/sandbox/remote_sandbox_service.py) meters attributed new sandboxes in SaaS mode on the remote backend. Its own implementation explicitly excludes Docker, E2B and process backends, unattributed/warm starts, and resuming an existing sandbox. Some asynchronous failures retain reservations when no waiter in the same service instance settles them. Replace any general Enterprise capacity-boundary implication with this scope. The draft permission claim itself is supported and retains ownership checks.


**Evidence read:** [sandbox quota](https://github.com/OpenHands/enterprise/commit/9ba3626e20cba1ff7184f3a2b2fb56b073c8fef7), [quota skip behavior](https://github.com/OpenHands/automation/commit/a7c47ca038aa4d44654ce108037c57675ea6b93f), [member drafts and uploads](https://github.com/OpenHands/automation/commit/cb092d344341f721bef9d24e5e7021c602901578), [current UI permissions](https://github.com/OpenHands/OpenHands/blob/v1.33.0/src/hooks/use-automation-permissions.ts)


**Independent ancestry:** enterprise 9ba3626e2: 1.72.1=1; 1.73.0=0; automation a7c47ca03: 1.21.0=1; 1.22.0=0; automation cb092d344: 1.23.0=1; 1.23.1=0.


## 9. Enterprise binds account linking to the browser but makes email-verification enforcement opt-in

**Verdict: VERIFIED.**

SAML routes, generic OAuth rejection, browser-bound link state and the email-verification opt-in are in the stated first stable tags. The current constants default `REQUIRE_VERIFIED_EMAILS` to false, and middleware gates its rejection on that value. Browser-bound linking first ships in 1.74.0 on 2026-10-20; the verification default first ships in 1.75.0 on 2026-10-21. The two later email/UI changes remain outside 1.79.0 with no containing tags. This verifies released source, not hosted policy or a completed identity-provider test. Additional provider and super-admin controls were missed below.


**Evidence read:** [browser-bound linking](https://github.com/OpenHands/enterprise/commit/87f7fcb30523fa07fd3ff0a7ae29c8e7b473839f), [SAML routes](https://github.com/OpenHands/enterprise/commit/6ce81f28801f3b1072fa0c1224235f134f82fe10), [generic-route rejection](https://github.com/OpenHands/enterprise/commit/d1df819e9e616f58b629cd92e198018fe31d2bf4), [email-match setting](https://github.com/OpenHands/enterprise/commit/c975ffb5798b0b626bc81239687c15328ca0336a), [current defaults](https://github.com/OpenHands/enterprise/blob/1.79.0/server/constants.py#L32-L55), [verification middleware](https://github.com/OpenHands/enterprise/blob/1.79.0/server/middleware.py#L87-L104)


**Independent ancestry:** enterprise 87f7fcb30: 1.73.0=1; 1.74.0=0; enterprise 6ce81f288: 1.71.0=1; 1.72.0=0; enterprise d1df819e9: 1.71.0=1; 1.72.0=0; enterprise c975ffb57: 1.71.0=1; 1.72.0=0; enterprise adc90a428: stable=1; main=0; no containing tag; enterprise 5516e2484: stable=1; main=0; no containing tag; enterprise 20d3da16c: 1.74.0=1; 1.75.0=0.


## 10. Enterprise packages a local Compose stack and clarifies the licensed Helm path

**Verdict: VERIFIED.**

The Compose stack first ships in Enterprise 1.72.0 on 2026-10-19; released-image defaults and startup migrations enter 1.74.0 on 2026-10-20; persistence enters 1.76.0 on 2026-10-22. The persistence diff actually adds named volumes that survive ordinary Compose down, rather than leaving persistence universally off. The harvest's general persistence description is supported. The 2026-10-23 Helm clarification is a pinned docs change, not proof of an account's authorized chart selector. The current LICENSE remains PolyForm Free Trial 1.0.0. Compose's new grouping default is an additional miss below.


**Evidence read:** [Compose stack](https://github.com/OpenHands/enterprise/commit/aeca9943f56d6d6f75ae94336c060dacc9031c3e), [released images](https://github.com/OpenHands/enterprise/commit/4f332f6768d424e31ee5a9eca2e724a0be143815), [database migration](https://github.com/OpenHands/enterprise/commit/385d5a572ea737f6a8c941987197b6206b996b6f), [optional persistence](https://github.com/OpenHands/enterprise/commit/d20518bd0014d671d8cb583c84f1d253d4c10356), [Helm clarification](https://github.com/OpenHands/docs/commit/a903c5fc29d616d1df39cfc8482e5175e9dca2ad), [license](https://github.com/OpenHands/enterprise/blob/1.79.0/LICENSE)


**Independent ancestry:** enterprise aeca9943f: 1.71.0=1; 1.72.0=0; enterprise 4f332f676: 1.73.0=1; 1.74.0=0; enterprise 385d5a572: 1.73.0=1; 1.74.0=0; enterprise d20518bd0: 1.75.0=1; 1.76.0=0.


## 11. The DigitalOcean web bridge ships default-on, then returns to opt-in

**Verdict: VERIFIED.**

The default-on bridge merge first reaches Canvas v1.28.0 on 2026-10-19; explicit `MARS_WEB=1` returns in v1.30.0 on 2026-10-22. Typed-key forwarding first reaches v1.31.0 on 2026-10-22; persisted sign-ins and smallest-VM selection reach v1.33.0 on 2026-10-23. The current config still calls the bridge experimental. DigitalOcean's live primary page was also opened and says public preview; treat that mutable page as current posture at the read, not as an immutable historical release receipt. No partner runtime was launched.


**Evidence read:** [opt-in restored](https://github.com/OpenHands/OpenHands/commit/1e850162beea360c61b75bee8c0d818b405be184), [typed-key forwarding](https://github.com/OpenHands/OpenHands/commit/84a5d30a4afef6a9fd805c272b1f88d2f0909569), [sign-in persistence](https://github.com/OpenHands/OpenHands/commit/6eb91bb8097d2a2b8da6b3ac5655ee6b6d8912b3), [VM default](https://github.com/OpenHands/OpenHands/commit/801a3c72886f731ffb7c4af130b46d10e1906e4c), [current configuration](https://github.com/OpenHands/OpenHands/blob/v1.33.0/config/defaults.json)


**Independent ancestry:** canvas 1e850162b: v1.29.0=1; v1.30.0=0; canvas 84a5d30a4: v1.30.1=1; v1.31.0=0; canvas 6eb91bb80: v1.32.0=1; v1.33.0=0; canvas 801a3c728: v1.32.0=1; v1.33.0=0; canvas 0cb2fa70d: v1.27.1=1; v1.28.0=0.


## 12. MCP OAuth installation and refresh improve, while ACP credential forwarding remains unreleased

**Verdict: CORRECTED.**

Canvas OAuth-only installation and SDK registration/refresh fixes ship in the claimed tags. ACP credential forwarding remains main-only and absent from v1.58.1, with no containing tag.

C5: Split the release date: Canvas v1.31.0 and SDK v1.58.0 ship on 2026-10-22, but Enterprise 1.78.0 ships on 2026-10-23, not the section's single 2026-10-22 released-repairs date. Also qualify the Enterprise secret-reference claim: [the tool-call route](https://github.com/OpenHands/enterprise/blob/1.79.0/openhands/app_server/mcp/mcp_tool_call_router.py#L128-L140) expands references only when `server.oauth_auth is None`, deliberately avoiding copying OAuth client secrets into refreshed state. [The connection-test route](https://github.com/OpenHands/enterprise/blob/1.79.0/openhands/app_server/mcp/mcp_test_router.py#L418-L435) rejects OAuth-authenticated probes. Do not imply that these two probe paths resolve secret references for every OAuth server.


**Evidence read:** [Canvas OAuth-only servers](https://github.com/OpenHands/OpenHands/commit/55c5b7dd54d22fef5bc14ac8b0ce357c16f4f933), [client auth method](https://github.com/OpenHands/software-agent-sdk/commit/df393e38d8f1436c14414ab011386fae351c9d83), [refresh preservation](https://github.com/OpenHands/software-agent-sdk/commit/f331fa667b7a55b1573121993a8a843593c75de9), [Enterprise secret resolution](https://github.com/OpenHands/enterprise/commit/015214afbfe404a7ea54badb03e51728577d275e), [unreleased ACP forwarding](https://github.com/OpenHands/software-agent-sdk/commit/87bec04de8e08117399d5cab68042cc794bc2199)


**Independent ancestry:** canvas 55c5b7dd5: v1.30.1=1; v1.31.0=0; sdk df393e38d: v1.57.0=1; v1.58.0=0; sdk f331fa667: v1.57.0=1; v1.58.0=0; enterprise 015214afb: 1.77.0=1; 1.78.0=0; sdk 87bec04de: stable=1; main=0; no containing tag.


## 13. A compatibility cap excludes the compromised LiteLLM release, while dependency freshness becomes explicit

**Verdict: VERIFIED.**

SDK v1.56.0's compatibility cap precedes the 2026-10-21 LiteLLM incident. Independently read PyPI metadata for SDK 1.54.0 has `litellm>=1.93.0`; 1.58.1 has `litellm<1.106,>=1.93.0`. That excludes the supplier's identified malicious 1.107.0, without proving any installed environment's history. The supplier account is dated 2026-10-23 and attributes malicious publication to 2026-10-21. Automation's locked production install and Canvas's contributor release-age/toolchain changes are supported. The harvest correctly avoids converting contributor policy into a downstream install guarantee or dependency adjacency into OpenHands compromise.


**Evidence read:** [LiteLLM cap](https://github.com/OpenHands/software-agent-sdk/commit/3e8e17bee85494eb5ec2eae71ad0bb011e35b33d), [published SDK 1.58.1 metadata](https://pypi.org/pypi/openhands-sdk/1.58.1/json), [locked production image installs](https://github.com/OpenHands/automation/commit/4bcd95d4d18fde89fa344c31fe1427ea1fb1d480), [Canvas dependency policy](https://github.com/OpenHands/OpenHands/commit/542aa917de74d24d3f1eb7abd86622097bfff21f), [supplier incident account](https://docs.litellm.ai/blog/security-incident-oct-21-2026-attack-chain)


**Independent ancestry:** sdk 3e8e17bee: v1.55.1=1; v1.56.0=0; automation 4bcd95d4d: 1.21.0=1; 1.22.0=0; canvas 542aa917d: v1.31.0=1; v1.32.0=0.


## 14. Certificate distrust ships in Python dependencies, with an OS-bundle repair still on main

**Verdict: VERIFIED.**

The canonical certifi advisory identifies compromised emSign intermediate keys: an on-path attacker holding one can issue valid-looking endpoint certificates and intercept or modify TLS traffic. It names 2026.10.19 as the fixed floor. SDK v1.58.1, automation 1.25.1, and Enterprise 1.78.0 ship on 2026-10-23 and their current locks select that version. SDK and automation publish explicit floors. Enterprise's explicit metadata floor is still main-only. SDK's later Debian repair is also main-only; its diff additionally fixes the initial pip build stage. The harvest does not claim that a Python lock repairs every OS/build-stage trust store.


**Evidence read:** [SDK distrust](https://github.com/OpenHands/software-agent-sdk/commit/e8a071f511222697caf2df0dd0498c54590c9707), [automation distrust](https://github.com/OpenHands/automation/commit/872e32295b0f7f33da275845626ff4000d189f2e), [Enterprise distrust](https://github.com/OpenHands/enterprise/commit/177fbeb699613a04e473c0f10fe17f36b30f7c60), [certifi advisory](https://github.com/advisories/GHSA-6q48-6c7w-9gw2), [unreleased Debian update](https://github.com/OpenHands/software-agent-sdk/commit/acd96e6fa424c02432304395b9208f99be24b54d), [unreleased Enterprise metadata floor](https://github.com/OpenHands/enterprise/commit/04a28974b73d99e333102336d7ccfdd449dca889)


**Independent ancestry:** sdk e8a071f51: v1.58.0=1; v1.58.1=0; automation 872e32295: 1.25.0=1; 1.25.1=0; enterprise 177fbeb69: 1.77.0=1; 1.78.0=0; sdk acd96e6fa: stable=1; main=0; no containing tag; enterprise 04a28974b: stable=1; main=0; no containing tag.


## 15. Canvas removes the session key from a child command line only after v1.33.0

**Verdict: VERIFIED.**

The 2026-10-23 commit removes the static child key argument and passes `SESSION_API_KEY` in the child environment, with key-policy checks retained. It is absent from Canvas v1.33.0 and present on the inspected main, and no tag contains it. The current release's process-argument exposure therefore must remain open. The patch does not remove the separate automation alias or repair Docker's custom-key export branch.


**Evidence read:** [argv-to-environment change](https://github.com/OpenHands/OpenHands/commit/8fdd6859aee5779ebbc12e44dc32823d7cb08527), [stable-to-main comparison](https://github.com/OpenHands/OpenHands/compare/v1.33.0...fee10e3d2909ebbf9950578575b1ee011492171e)


**Independent ancestry:** canvas 8fdd6859a: stable=1; main=0; no containing tag.


## Prior claims re-checked at newest stable

- **Default local terminal exposure: holds as a code-derived path.** The [Canvas alias export](https://github.com/OpenHands/OpenHands/blob/v1.33.0/scripts/dev-with-automation.mjs#L926-L935), [SDK sanitizer](https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/openhands-sdk/openhands/sdk/utils/command.py), [raw-secret route](https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/openhands-agent-server/openhands/agent_server/settings_router.py#L539-L569), and [API-wide authentication wiring](https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/openhands-agent-server/openhands/agent_server/api.py#L573-L606) compose the asserted path. The key is authenticated but is shared with an agent terminal under the surviving alias. Tmux's repaired stripping of other names does not close it. No secret was retrieved.
- **Docker custom-key gap: holds.** The [current entrypoint](https://github.com/OpenHands/OpenHands/blob/v1.33.0/docker/entrypoint.sh#L210-L239) exports `OH_SESSION_API_KEYS_0` only inside the both-unset branch; [server auth](https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/openhands-agent-server/openhands/agent_server/dependencies.py#L27-L39) requires a key only when the list is nonempty. [Issue 17763](https://github.com/OpenHands/OpenHands/issues/17763) was independently still OPEN. Test a protected route without the header before exposure; a public server-info response does not settle this.
- **LAN key policy: holds, with C3 correcting the runtime qualification.** [Bind policy](https://github.com/OpenHands/OpenHands/blob/v1.33.0/scripts/bind-host.mjs) defaults to 127.0.0.1 and strips key injection off loopback unless explicitly overridden. Selectable mode alone does not trigger the automatic bind claimed by the docs/harvest.
- **Whole-conversation Docker separation: holds as construction, not universal isolation.** The [current registry](https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/openhands-agent-server/openhands/agent_server/docker_runtime/registry.py) creates distinct container keys and builds an explicit environment; [update routing](https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/openhands-agent-server/openhands/agent_server/docker_runtime/routers.py) filters secrets. Telemetry forwarding, mounted workspaces and request-replaceable resource limits remain qualifications.
- **Delegation MCP scope and opt-in: holds.** [Current scope code](https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/openhands-sdk/openhands/sdk/subagent/scope.py) enforces exact parent MCP inheritance; [standard tool defaults](https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/openhands-sdk/openhands/sdk/tool/defaults.py) do not include the delegation tool. Tool scoping is separate. No nested-delegation rejection was executed.
- **Automation creator/management split and org-readable transcripts: holds in source.** [Current Canvas permissions](https://github.com/OpenHands/OpenHands/blob/v1.33.0/src/hooks/use-automation-permissions.ts), [automation routes](https://github.com/OpenHands/automation/blob/1.25.1/openhands/automation/router.py), and [Enterprise transcript query](https://github.com/OpenHands/enterprise/blob/1.79.0/server/sharing/sql_shared_conversation_info_service.py#L90-L106) preserve these distinctions. Local mode is effectively one user. An org member can read qualifying non-deleted automation conversations through the source rule; hosted deployment remains unverified.
- **Enterprise export/proxy defaults: holds.** [The export gate](https://github.com/OpenHands/enterprise/blob/1.79.0/storage/org_service.py#L867-L913) refuses non-billing exports without the opt-in. [Constants](https://github.com/OpenHands/enterprise/blob/1.79.0/server/constants.py) keep `ENABLE_BYOR_EXPORT=false` and `ENABLE_LEGACY_LITELLM=true`. Previously issued external keys are not revoked by a code upgrade.
- **Residual component alerts: holds as version matching.** [SDK's current lock](https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/uv.lock) has PyJWT 2.14.0 and fsspec 2025.9.0; [automation's lock](https://github.com/OpenHands/automation/blob/1.25.1/uv.lock) has PyJWT 2.15.1 and fsspec 2026.3.0; [Enterprise's lock](https://github.com/OpenHands/enterprise/blob/1.79.0/uv.lock) has PyJWT 2.15.0 and fsspec 2026.9.0. [CVE-2026-101918 / GHSA-42vr-xj54-vc7v](https://github.com/advisories/GHSA-42vr-xj54-vc7v) allows an unauthenticated attacker to crash a pre-verification JWT parsing/auth handler with deeply nested JSON, causing denial of service; it is not signature forgery. [CVE-2026-104851 / GHSA-27vj-qcqg-25rc](https://github.com/advisories/GHSA-27vj-qcqg-25rc) allows arbitrary Python execution when attacker-controlled ReferenceFileSystem template JSON is rendered. Reachable OpenHands endpoints and installed resolutions were not established.
- **Changed defaults/floors: the re-check's update is right subject to C1.** [Current launch resolution](https://github.com/OpenHands/OpenHands/blob/v1.33.0/src/hooks/mutation/resolve-conversation-launch.ts) replaces the old local fallback; [current defaults](https://github.com/OpenHands/OpenHands/blob/v1.33.0/config/defaults.json) raise the remote floor to 1.55.0. [Current trajectory archives](https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/openhands-agent-server/openhands/agent_server/file_router.py#L176-L198) still exclude top-level `acp`. These are independently inspected source holds, not live acceptance.

## Misses

Each item below is absent as a concrete material finding in the harvest. For every cited commit I independently checked absence from its immediately preceding stable, presence in the first stable stated, and presence at current stable. Channels are `tagged-release` throughout. Dates below are first release publication dates, including when a prior commit first becomes runnable.

1. **GitHub mention authorization and code-changing default, 2026-10-23.** Extensions v0.35.0 changes the repository monitor to repository-write authorization and an `implement` work mode. The [pinned change](https://github.com/OpenHands/extensions/commit/af0a4b816b0b711c79771b91a950726c0c6ed896), [current polling authorization](https://github.com/OpenHands/extensions/blob/v0.35.0/skills/github-repo-monitor/scripts/main.py#L641-L663), and [template defaults](https://github.com/OpenHands/extensions/blob/v0.35.0/automations/catalog/github-repo-monitor/manifest.json#L78-L114) show the important distinction: the script checks permissions, with explicit allowlist/token-owner bypasses and an `anyone` option; the template's fallback expresses its gate and work restrictions in the agent prompt. `reply` is the narrower work mode. Audit deployed monitor definitions, bypass lists and token scope; pairing anyone with implement delegates code changes to arbitrary commenters. Do not claim old installed bundles were migrated or prompt restrictions are mechanical enforcement. [Canvas v1.32.0](https://github.com/OpenHands/OpenHands/blob/v1.32.0/package.json) first pins extensions 0.35.0; v1.33.0 retains it.
2. **Software-factory guidance becomes default-enabled, 2026-10-20.** Extensions v0.31.0 [adds the onboarding recipe](https://github.com/OpenHands/extensions/commit/25fab14cac53f1795302a92dc099554c5f46c7d7) on 2026-10-19; v0.32.0 [marks it default-enabled](https://github.com/OpenHands/extensions/commit/5f0bc702a65b2165e4406227d845b87efd5d445a). Canvas v1.29.0 first pins that extension line. The [current recipe](https://github.com/OpenHands/extensions/blob/v0.35.0/skills/software-factory/README.md) assembles catalog stations for issue-to-PR, review and triage with checkpoints, credentials and backend capability requirements. This is a shipped recipe, not just a livestream lead, and default-enabled guidance does not mean jobs run on installation. Review the default skill selection and the unattended jobs/credentials created when invoked.
3. **Enterprise login-provider staging and registration controls, 2026-10-19 / 2026-10-23.** [Registration control](https://github.com/OpenHands/enterprise/commit/f31c63a7bf677150f36f8a94920d2a84504b0a7f) first ships in 1.72.0 and defaults to permitting registration; it gates new-user creation rather than all existing-user linking. [Provider enabled state](https://github.com/OpenHands/enterprise/commit/0893792cd133eae70aa79852769e059577b43238) first ships in 1.78.0: new providers start disabled, existing rows are migrated enabled, and disabling blocks new login/link flows without revoking existing sessions/tokens. Operators can stage providers, but must enable them deliberately and handle revocation separately.
4. **Email-based super-admin grants, 2026-10-23.** Enterprise 1.78.0 [adds `SUPER_ADMIN_EMAILS`](https://github.com/OpenHands/enterprise/commit/dbdbf0d60c648d9f3f9ec059387dcba20e0b0914), empty by default. Every successful OAuth v2 login grants instance super-admin when the stored user email matches the configured list. This is a new privilege-grant input, not an automatically active bypass or proof of an exploit. Audit the list alongside provider email identity/linking policy; reviewing only the verification middleware misses this authority path.
5. **Compose packs conversations into shared sandboxes by default, 2026-10-23.** Enterprise 1.79.0 [adds deployment grouping configuration](https://github.com/OpenHands/enterprise/commit/029c81a049f978aa8db14a6ba08fbeebcddc621c). User/org overrides win, then the deployment default, then NO_GROUPING; the released Compose stack sets `OH_APP_CONVERSATION_SANDBOX_GROUPING_STRATEGY=FEWEST_CONVERSATIONS`. The app's unset fallback remains NO_GROUPING. Inspect workspace and capacity sharing before treating the packaged evaluation stack as one sandbox per conversation. This matters directly to sections 8 and 10.
6. **Canvas backend logs default to WARNING, 2026-10-23.** Canvas v1.32.0 [changes launcher and Docker log defaults](https://github.com/OpenHands/OpenHands/commit/39891795e0bb31494fcdbe15cfe47cec0a76f00f), retained in v1.33.0. Explicit log settings still override them. This reduces startup noise but changes which INFO/access records appear in ordinary logs; explicitly configure the detail needed for debugging or operational collection.
7. **Additional GitHub token literal redaction, 2026-10-19.** SDK v1.56.0 [adds ghu_, ghs_ and gho_ token patterns](https://github.com/OpenHands/software-agent-sdk/commit/6ae64079cfd30cfe2f01a060c59168a4d650d883), covering user-to-server, server-to-server and OAuth literals in the corresponding redactor. This is distinct from section 3's earlier completion-log fix. Upgrade affected redaction consumers and assess retained logs; pattern coverage is not proof that every output path is scrubbed.
8. **TypeScript run controls start reaching the server, 2026-10-19.** SDK/client v1.56.0 [forwards `maxIterations` and `stuckDetection`](https://github.com/OpenHands/software-agent-sdk/commit/1fbfd37f6fb21491ed733fc92d409aff1517ff4a) through `ConversationManager.createConversation` and constructor defaults. The comment is corrected to the actual 500-iteration fallback. Recheck integrations that believed constructor limits were already effective; this repairs ignored settings, rather than proving a new lower global default or a hard monetary cap.
9. **SessionStart hook context is delivered, 2026-10-22.** SDK v1.58.0 [injects collected `additionalContext`](https://github.com/OpenHands/software-agent-sdk/commit/f8ac42498066b409a41988a3d7ea1486ff0c1347) after the system-prompt event as environment-sourced user context. Previously returned context could be lost. Re-test startup hooks that inject project context and retain the distinction between contextual text and enforced policy.
10. **Strict plugin preflight is a released API, 2026-10-16.** SDK v1.55.1 [adds strict plugin fetch](https://github.com/OpenHands/software-agent-sdk/commit/db9c54b71c8c9ed46a2454fc65eee804d3c1e8aa) and the [current implementation](https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/openhands-sdk/openhands/sdk/plugin/strict_fetch.py) resolves remote sources to a SHA, validates paths/manifests and returns structured fetch failures without enabling the plugin. This is additional install/extension infrastructure beneath section 7. Use the resolved revision for review; parsing a plugin is not approving its executable content.
11. **Failed automation sandboxes are cleaned up and retried, 2026-10-20.** Automation 1.23.1 [adds provisioning error classification, cleanup and retry handling](https://github.com/OpenHands/automation/commit/567bdbdf3bef1e0866563786d109f986b979a912). Before propagating unusable-start failures, the Cloud backend attempts to delete the never-used sandbox; status details are reduced to safe classes. Check failed-run cleanup and retry receipts rather than manually deleting every provisioning failure. This is independent of quota skips and hosted rollout remains unverified.
12. **Disabled browser configuration reaches discovery surfaces, 2026-10-15.** SDK v1.55.0 [filters the server's usable-tool list](https://github.com/OpenHands/software-agent-sdk/commit/8efff8d3cf1a5a3fcf7ce5e3b97c7f00684d9547) and [omits browser-only built-in sub-agents](https://github.com/OpenHands/software-agent-sdk/commit/4804aa0be06f3a90e88037a3a580e7c069a2195b) according to the server browser configuration. Audit advertised tools and built-ins for browser-disabled deployments. These catalog repairs do not establish an OS-level browser prohibition.
13. **LLM profile validation is bounded and rejects exhausted quota, 2026-10-19.** SDK v1.56.0 [limits preflight to one attempt, at most 15 seconds, without fallback LLMs](https://github.com/OpenHands/software-agent-sdk/commit/76055f697a5e9295252e0d54ab4ea822946e5c54). A quota-exhaustion 429 fails validation, while ordinary transient rate limits/timeouts remain non-blocking. Recheck saved-profile validation and error handling instead of treating all 429s alike. This shortens setup waiting and avoids validating a broken primary through a working fallback.
14. **Sentry integration gains MCP OAuth and self-hosted token choices, 2026-10-22.** Extensions v0.34.0 [adds the catalog choices](https://github.com/OpenHands/extensions/commit/afb59307703c68162a61cea088620b75f6221a45); [current tagged metadata](https://github.com/OpenHands/extensions/blob/v0.35.0/integrations/catalog/sentry.json) includes hosted MCP OAuth and a local stdio path with personal token and optional SENTRY_HOST. Current Canvas carries extensions 0.35.0 from v1.32.0. Choose auth and host deliberately and test a real operation; catalog metadata does not verify Sentry deployment compatibility.

The extension first-containing checks were v0.34.0 exit 1 / v0.35.0 exit 0 for af0a4b816; v0.31.0 exit 1 / v0.32.0 exit 0 for 5f0bc702a; and v0.33.0 exit 1 / v0.34.0 exit 0 for afb593077. All remain in v0.35.0. [Extension release objects](https://github.com/OpenHands/extensions/releases/tag/v0.35.0) and npm metadata establish publication separately from recipe text. Existing saved automation bundles need their own update checks.

## Security inventories and rule checks

Public repository advisory inventories were independently read at 2026-10-24T10:18:50Z for [Canvas](https://api.github.com/repos/OpenHands/OpenHands/security-advisories), [SDK](https://api.github.com/repos/OpenHands/software-agent-sdk/security-advisories), [automation](https://api.github.com/repos/OpenHands/automation/security-advisories) and [Enterprise](https://api.github.com/repos/OpenHands/enterprise/security-advisories). Only Canvas returned the earlier GHSA-7h8w-hj9j-8rjw, published 2026-03-23; the other three lists were empty. The extensions inventory was also empty. The global GitHub advisory query for the pip package `openhands` returned no additional entry.

The [NVD OpenHands keyword inventory](https://services.nvd.nist.gov/rest/json/cves/2.0?keywordSearch=OpenHands), read at 2026-10-24T10:23:49.928171Z, returned CVE-2026-33718 and CVE-2026-19022, both published before the window. No newly published in-window OpenHands advisory was found through these inventories. This bounded negative does not mean there were no private reports, undisclosed defects, or supplier advisories.

C6: Complete the harvest's identifier-only security descriptions wherever retained in the profile. [CVE-2026-33718 / GHSA-7h8w-hj9j-8rjw](https://github.com/OpenHands/OpenHands/security/advisories/GHSA-7h8w-hj9j-8rjw) allows an authenticated caller to inject shell commands through the legacy git-diff path parameter and execute commands in the agent sandbox. Its canonical package range is <=1.4.0, patched in 1.5.0; it is not a new Canvas v1.33.0 advisory. For the residual PyJWT item, explicitly say denial of service through pre-verification parsing, as above. Merely saying uncaught recursion does not tell the reader what the bug allows. The harvest already explains the fsspec execution and certifi interception consequences.

All numbered GitHub receipts use tags or full SHAs, with no moving main/HEAD blobs. GitHub advisories and version-specific registry records are canonical/version-bound evidence. The supplier incident report and DigitalOcean partner page are mutable primary pages, not tag-pinned artifacts; keep them dated and attributed as current observations, without treating them as historical code or runtime proof. Marketing, the removed beta badge, benchmark leads and demonstrations are separated from shipped capability. No social-post text is quoted in this crosscheck; no social claim was used as product evidence. The supplied harvest is ASCII.

## Limits and disposition

This crosscheck establishes release objects, registry selectors, ancestry and inspected source behavior. It does not establish hosted serving identity, protected-route rejection, credential exfiltration, installed dependency reachability, identity-provider acceptance, monitor behavior in a live repository, container boot, or performance. No missing acceptance test was silently counted as VERIFIED behavior. The numbered verdicts apply to the bounded claims actually made, with exact corrections above.

Only this requested crosscheck was authored in the publication repository, apart from explicitly authorized upstream clones in the gitignored scratch directory. No git write command targeted the publication checkout. No npm install, site build, upstream tests or cloned code ran. The harvest was left unchanged.


Independent verification completed: 2026-10-24T10:35:36Z.
