---
schema_version: bitter.frontier_harvest.v0
provider: openhands
window: 2026-10-13..2026-10-24
run: 2026-10-24-weekly-digest-2026-10-13_2026-10-24-frontier-v0
source_contract: sources/openhands.yml
channels_present: [tagged-release, main-unreleased, docs-only]
window_volume: 39 new non-prerelease releases across Canvas (8), SDK (6), automation (10), Enterprise (9), and extensions (6); 29 material changes plus an install snapshot; 36 source-sweep posts dispositioned
lane: primary sources, profile-refresh researcher
---

# Harvest: openhands (primary sources)

Identity: the watched product is OpenHands Agent Canvas in [OpenHands/OpenHands at v1.33.0](https://github.com/OpenHands/OpenHands/tree/v1.33.0), with the separately released [Software Agent SDK](https://github.com/OpenHands/software-agent-sdk/tree/v1.58.1), [automation service](https://github.com/OpenHands/automation/tree/1.25.1), and [Enterprise backend](https://github.com/OpenHands/enterprise/tree/1.79.0). Canvas' [package metadata](https://github.com/OpenHands/OpenHands/blob/v1.33.0/package.json) and [service pins](https://github.com/OpenHands/OpenHands/blob/v1.33.0/config/defaults.json) connect those repositories to the install. All five upstream repositories, including docs, were read through blobless, no-checkout clones under `/Users/c3po/co/frontier/tmp/cycle-2026-10-24/clones/openhands/`; their origin URLs and `blob:none` filters were checked. No cloned program, test, installer or image was executed. The window starts after 2026-10-13T23:59:59Z. Earlier commits that first reach a stable tag in this window are release changes, not newly merged changes. Marketing and social reports remain leads unless a primary record establishes the claimed behavior.

## Install today

Primary-record read completed at 2026-10-24T10:16:03Z. Mutable selectors below retain their individual observation times; no historical pointer is inferred from a later read.

**Run Canvas v1.33.0, with its coordinated services.** Its non-prerelease GitHub release was published on 2026-10-23T13:46:20Z. The [tagged README](https://github.com/OpenHands/OpenHands/blob/v1.33.0/README.md) and [package metadata](https://github.com/OpenHands/OpenHands/blob/v1.33.0/package.json) specify `npm install -g @openhands/agent-canvas@1.33.0`, then `agent-canvas`, with Node >=24 and uv. The [release assets](https://github.com/OpenHands/OpenHands/releases/tag/v1.33.0) include a universal macOS DMG, a Windows installer, an amd64 Debian package and a Linux AppImage. Pin the all-in-one Docker image to `ghcr.io/openhands/agent-canvas:1.33.0`. The README's beta badge was removed in this release; [that edit](https://github.com/OpenHands/OpenHands/commit/4d1c4d1048b7ae93544c7113b4a56da4cd1bddd1) is not evidence of a service-level guarantee or a security acceptance test.

**Pointers and their UTC read times, all on 2026-10-24.** [npm Canvas metadata](https://registry.npmjs.org/@openhands%2fagent-canvas), read at 09:37:22.368895Z, returned `latest=1.33.0`, `alpha=1.0.0-alpha.4`, and `beta=1.0.0-beta.1`. The alpha/beta pointers are old publications, not newer preview alternatives. [npm TypeScript client metadata](https://registry.npmjs.org/@openhands%2ftypescript-client), read at 09:37:23.867365Z, returned `latest=1.58.1`. [PyPI agent-server](https://pypi.org/pypi/openhands-agent-server/json), [SDK](https://pypi.org/pypi/openhands-sdk/json), and [automation](https://pypi.org/pypi/openhands-automation/json), read at 09:37:54.831195Z, 09:37:55.443440Z, and 09:37:56.051544Z respectively, returned 1.58.1, 1.58.1, and 1.25.1. GitHub release-object ledger reads were 09:40:54.043224Z for Canvas, 09:40:55.864683Z for SDK, 09:40:56.784825Z for automation, and 09:40:57.726789Z for Enterprise. Their newest non-prereleases are the tags in the tables below. These are observations of current pointers, not reconstructed historical dist-tags.

**Docker selector checked separately.** Anonymous manifest reads of [GHCR `1.33.0`](https://ghcr.io/v2/openhands/agent-canvas/manifests/1.33.0) at 09:42:02.594565Z and [`latest`](https://ghcr.io/v2/openhands/agent-canvas/manifests/latest) at 09:42:03.575697Z returned the same manifest digest, `sha256:49e2517eb14a133cb952e0575c24ec59db963ac096b404932f7a1bc9a12e666c`. The [package page](https://github.com/OpenHands/OpenHands/pkgs/container/agent-canvas) is the human-readable registry surface. This confirms selector equality at the read, not a boot test or inspection of every image layer.

**The bundle is not one version number.** Canvas v1.33.0 [pins agent-server 1.58.1 and automation 1.25.1, and requires remote agent-server >=1.55.0](https://github.com/OpenHands/OpenHands/blob/v1.33.0/config/defaults.json). The floor rose from 1.51.0 in [v1.28.1](https://github.com/OpenHands/OpenHands/blob/v1.28.1/config/defaults.json) to 1.55.0 in [v1.29.0](https://github.com/OpenHands/OpenHands/blob/v1.29.0/config/defaults.json). SDK/agent-server 1.58.1 and automation 1.25.1 are also independently published Python packages. [Canvas package metadata](https://github.com/OpenHands/OpenHands/blob/v1.33.0/package.json) pins extensions 0.35.0, including the monitor and factory changes in sections 16 and 17. The crosscheck read [extensions npm metadata](https://registry.npmjs.org/@openhands%2fextensions) at 2026-10-24T10:29:09.151243Z: `latest=0.35.0`, `alpha=0.0.1-alpha`. Enterprise's newest source release is [1.79.0](https://github.com/OpenHands/enterprise/releases/tag/1.79.0), published 2026-10-23T13:24:40Z; its [Compose dependency update](https://github.com/OpenHands/enterprise/commit/8b923c3568a8809adbb9b648d2a0ee95d5cc527a) uses Canvas 1.32.0, SDK 1.58.1, and automation 1.25.1. Do not infer Cloud's serving version from any of these tags. The older standalone CLI's [latest release selector](https://api.github.com/repos/OpenHands/OpenHands-CLI/releases/latest), read at 09:44:46.696903Z, still selected [1.16.0, published 2026-05-08](https://github.com/OpenHands/OpenHands-CLI/releases/tag/1.16.0); it is not the current Canvas version.

**Install-path repairs that matter.** Canvas v1.29.0 first contains [the Python >=3.12,<3.15 launcher constraint](https://github.com/OpenHands/OpenHands/commit/4b147dcff2917c783214e09bb75a098486b22de5), avoiding a fresh uv selection of Python 3.15 before dependency wheels are ready; an explicit `UV_PYTHON` remains an override. Canvas v1.28.0 first contains [startup failure on a prematurely exited automation backend](https://github.com/OpenHands/OpenHands/commit/33fcb2e1b394349d4f003a04807abcbca6161b4f), [waiting for a Cloud runtime before sending](https://github.com/OpenHands/OpenHands/commit/ecc8735e7d16277e2acd51345d27640b8758b3cc), and [resuming a paused Cloud sandbox through its control plane](https://github.com/OpenHands/OpenHands/commit/71427af5b426b3f1270db86341dffe30a947d53c). Each named commit is absent from the preceding stable and present in the stated first stable by local merge-base checks. These reduce startup and retry babysitting; no Cloud session was exercised here.

**Opt-ins and remaining exposure.** Whole-conversation Docker remains opt-in through `OH_CONVERSATION_RUNTIME=docker`; per-conversation runtime selection is separately off by default through `OH_CONVERSATION_RUNTIME_SELECTABLE` (section 6). Pin `OH_CONVERSATION_IMAGE=ghcr.io/openhands/agent-server:1.58.1-python` for the matched bundle. The [pinned runtime guide](https://github.com/OpenHands/docs/blob/f742b438db2d5a2d316ebea67a18c46b4ab56a48/openhands/usage/agent-canvas/backend-setup/docker-execution.mdx) says both modes change the bind, but [the released launcher](https://github.com/OpenHands/OpenHands/blob/v1.33.0/scripts/dev-with-automation.mjs#L506-L511) only tests `OH_CONVERSATION_RUNTIME=docker`; its host-alias selection also only tests that default. Selectable mode alone promises neither automatic all-interface binding nor working container callbacks. Configure and verify bind and host reachability explicitly. Enterprise child launching separately defaults off and requires `OH_ENABLE_CHILD_CONVERSATION_LAUNCHER`, `web_url`, compatible sandbox images and Canvas handling (section 6). The DigitalOcean web bridge again requires `MARS_WEB=1` (section 11). Delegation's `task_tool_set` remains outside [Standard tools](https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/openhands-sdk/openhands/sdk/tool/defaults.py). The custom Docker key-export gap and the local automation-key alias remain (section 3 and claim audit). Keep the Docker README's LAN-key convenience flag confined to its loopback-bound example; the [bind policy](https://github.com/OpenHands/OpenHands/blob/v1.33.0/scripts/bind-host.mjs) explicitly governs when the page may receive the key.

**Main is ahead, not another stable channel.** Counts re-read from fetched refs at 09:55:53Z were Canvas 6 ahead / 0 behind [v1.33.0 to fee10e3](https://github.com/OpenHands/OpenHands/compare/v1.33.0...fee10e3d2909ebbf9950578575b1ee011492171e), SDK 4 / 0 [v1.58.1 to acd96e6](https://github.com/OpenHands/software-agent-sdk/compare/v1.58.1...acd96e6fa424c02432304395b9208f99be24b54d), automation 2 / 0 [1.25.1 to 2c11070](https://github.com/OpenHands/automation/compare/1.25.1...2c110703bbe91e4113a57adc1fa64a912ac7f4f8), and Enterprise 9 / 0 [1.79.0 to 7486d84](https://github.com/OpenHands/enterprise/compare/1.79.0...7486d8411038d21e97e8edf6aa3e282e464e223b). Material main-only items are Canvas' session-key argv removal (section 15), SDK's ACP OAuth credential forwarding (section 12), and the Debian CA snapshot repair (section 14). No new prerelease or tag-only alternative was found in the inspected release/tag interval. No nightly registry selector was established.

## Release ledger

GitHub release publication times and `prerelease` fields are from the release objects. Registry times are npm's version time or the earliest PyPI agent-server/automation artifact upload. Counts are local `rev-list` comparisons, written as ahead / behind for the new tag relative to the previous stable. Baseline rows precede the window and are not counted among its 33 releases. Git commit dates can precede publication by a day or more.

Canvas, [npm publication record](https://registry.npmjs.org/@openhands%2fagent-canvas):

| Tag | Published UTC | Prerelease | Ahead / behind | Registry publish UTC |
|---|---|---|---|---|
| [v1.27.1 baseline](https://github.com/OpenHands/OpenHands/releases/tag/v1.27.1) | 2026-10-12T19:33:56Z | false | 4 / 0 vs v1.27.0 | 2026-10-12T19:55:10.533Z |
| [v1.28.0](https://github.com/OpenHands/OpenHands/releases/tag/v1.28.0) | 2026-10-19T14:29:10Z | false | 102 / 0 | 2026-10-19T14:45:47.044Z |
| [v1.28.1](https://github.com/OpenHands/OpenHands/releases/tag/v1.28.1) | 2026-10-19T17:09:42Z | false | 3 / 0 | 2026-10-19T17:43:57.094Z |
| [v1.29.0](https://github.com/OpenHands/OpenHands/releases/tag/v1.29.0) | 2026-10-20T22:22:52Z | false | 25 / 0 | 2026-10-20T22:43:49.999Z |
| [v1.30.0](https://github.com/OpenHands/OpenHands/releases/tag/v1.30.0) | 2026-10-22T01:08:52Z | false | 15 / 0 | 2026-10-22T01:28:10.534Z |
| [v1.30.1](https://github.com/OpenHands/OpenHands/releases/tag/v1.30.1) | 2026-10-22T07:12:31Z | false | 5 / 0 | 2026-10-22T10:18:28.562Z |
| [v1.31.0](https://github.com/OpenHands/OpenHands/releases/tag/v1.31.0) | 2026-10-22T16:09:18Z | false | 11 / 0 | 2026-10-22T16:25:51.925Z |
| [v1.32.0](https://github.com/OpenHands/OpenHands/releases/tag/v1.32.0) | 2026-10-23T03:03:37Z | false | 9 / 0 | 2026-10-23T03:37:46.648Z |
| [v1.33.0](https://github.com/OpenHands/OpenHands/releases/tag/v1.33.0) | 2026-10-23T13:46:20Z | false | 16 / 0 | 2026-10-23T15:03:48.319Z |

SDK, [PyPI agent-server publication record](https://pypi.org/pypi/openhands-agent-server/json):

| Tag | Published UTC | Prerelease | Ahead / behind | Registry publish UTC |
|---|---|---|---|---|
| [v1.54.0 baseline](https://github.com/OpenHands/software-agent-sdk/releases/tag/v1.54.0) | 2026-10-09T18:36:49Z | false | 33 / 0 vs v1.53.0 | 2026-10-09T18:37:10.289641Z |
| [v1.55.0](https://github.com/OpenHands/software-agent-sdk/releases/tag/v1.55.0) | 2026-10-15T13:43:27Z | false | 55 / 0 | 2026-10-15T13:44:16.710418Z |
| [v1.55.1](https://github.com/OpenHands/software-agent-sdk/releases/tag/v1.55.1) | 2026-10-16T01:58:53Z | false | 5 / 0 | 2026-10-16T01:59:11.576126Z |
| [v1.56.0](https://github.com/OpenHands/software-agent-sdk/releases/tag/v1.56.0) | 2026-10-19T13:32:29Z | false | 61 / 0 | 2026-10-19T13:32:50.545656Z |
| [v1.57.0](https://github.com/OpenHands/software-agent-sdk/releases/tag/v1.57.0) | 2026-10-21T15:39:56Z | false | 15 / 0 | 2026-10-21T15:40:14.618539Z |
| [v1.58.0](https://github.com/OpenHands/software-agent-sdk/releases/tag/v1.58.0) | 2026-10-22T16:00:18Z | false | 31 / 0 | 2026-10-22T16:00:44.256186Z |
| [v1.58.1](https://github.com/OpenHands/software-agent-sdk/releases/tag/v1.58.1) | 2026-10-23T00:44:35Z | false | 3 / 0 | 2026-10-23T00:44:52.626535Z |

Automation, [PyPI publication record](https://pypi.org/pypi/openhands-automation/json):

| Tag | Published UTC | Prerelease | Ahead / behind | Registry publish UTC |
|---|---|---|---|---|
| [1.19.3 baseline](https://github.com/OpenHands/automation/releases/tag/1.19.3) | 2026-10-09T19:29:27Z | false | 2 / 0 vs 1.19.2 | 2026-10-09T19:29:52.178878Z |
| [1.20.0](https://github.com/OpenHands/automation/releases/tag/1.20.0) | 2026-10-15T14:08:26Z | false | 3 / 0 | 2026-10-15T14:08:53.097495Z |
| [1.20.1](https://github.com/OpenHands/automation/releases/tag/1.20.1) | 2026-10-16T03:31:55Z | false | 2 / 0 | 2026-10-16T03:32:31.058966Z |
| [1.21.0](https://github.com/OpenHands/automation/releases/tag/1.21.0) | 2026-10-19T03:17:43Z | false | 3 / 0 | 2026-10-19T03:18:08.519289Z |
| [1.22.0](https://github.com/OpenHands/automation/releases/tag/1.22.0) | 2026-10-19T15:07:15Z | false | 4 / 0 | 2026-10-19T15:07:48.847332Z |
| [1.23.0](https://github.com/OpenHands/automation/releases/tag/1.23.0) | 2026-10-20T14:52:07Z | false | 7 / 0 | 2026-10-20T14:52:32.421550Z |
| [1.23.1](https://github.com/OpenHands/automation/releases/tag/1.23.1) | 2026-10-20T19:04:13Z | false | 3 / 0 | 2026-10-20T19:04:41.557733Z |
| [1.23.2](https://github.com/OpenHands/automation/releases/tag/1.23.2) | 2026-10-21T17:12:59Z | false | 2 / 0 | 2026-10-21T17:13:40.451422Z |
| [1.24.0](https://github.com/OpenHands/automation/releases/tag/1.24.0) | 2026-10-22T14:47:31Z | false | 6 / 0 | 2026-10-22T14:48:00.071644Z |
| [1.25.0](https://github.com/OpenHands/automation/releases/tag/1.25.0) | 2026-10-22T18:03:33Z | false | 10 / 0 | 2026-10-22T18:04:00.130972Z |
| [1.25.1](https://github.com/OpenHands/automation/releases/tag/1.25.1) | 2026-10-23T01:16:22Z | false | 3 / 0 | 2026-10-23T01:16:53.748274Z |

Enterprise source releases; no authenticated Replicated/chart or Enterprise image publication ledger was obtained:

| Tag | Published UTC | Prerelease | Ahead / behind | Registry publish UTC |
|---|---|---|---|---|
| [1.71.0 baseline](https://github.com/OpenHands/enterprise/releases/tag/1.71.0) | 2026-10-13T16:15:03Z | false | 37 / 0 vs 1.70.0 | not established |
| [1.72.0](https://github.com/OpenHands/enterprise/releases/tag/1.72.0) | 2026-10-19T11:58:00Z | false | 45 / 0 | not established |
| [1.72.1](https://github.com/OpenHands/enterprise/releases/tag/1.72.1) | 2026-10-19T14:46:00Z | false | 4 / 0 | not established |
| [1.73.0](https://github.com/OpenHands/enterprise/releases/tag/1.73.0) | 2026-10-19T22:03:31Z | false | 10 / 0 | not established |
| [1.74.0](https://github.com/OpenHands/enterprise/releases/tag/1.74.0) | 2026-10-20T18:29:27Z | false | 19 / 0 | not established |
| [1.75.0](https://github.com/OpenHands/enterprise/releases/tag/1.75.0) | 2026-10-21T15:51:19Z | false | 18 / 0 | not established |
| [1.76.0](https://github.com/OpenHands/enterprise/releases/tag/1.76.0) | 2026-10-22T10:06:44Z | false | 9 / 0 | not established |
| [1.77.0](https://github.com/OpenHands/enterprise/releases/tag/1.77.0) | 2026-10-22T12:33:51Z | false | 6 / 0 | not established |
| [1.78.0](https://github.com/OpenHands/enterprise/releases/tag/1.78.0) | 2026-10-23T11:03:12Z | false | 28 / 0 | not established |
| [1.79.0](https://github.com/OpenHands/enterprise/releases/tag/1.79.0) | 2026-10-23T13:24:40Z | false | 4 / 0 | not established |

Extensions, independently re-read from [GitHub release objects](https://api.github.com/repos/OpenHands/extensions/releases) during this author pass on 2026-10-24 at 10:40 UTC; registry publication times and ahead/behind counts were not re-established:

| Tag | Published UTC | Prerelease |
|---|---|---|
| [v0.30.0 baseline](https://github.com/OpenHands/extensions/releases/tag/v0.30.0) | 2026-10-12T11:40:44Z | false |
| [v0.31.0](https://github.com/OpenHands/extensions/releases/tag/v0.31.0) | 2026-10-19T13:45:16Z | false |
| [v0.32.0](https://github.com/OpenHands/extensions/releases/tag/v0.32.0) | 2026-10-20T18:32:27Z | false |
| [v0.32.1](https://github.com/OpenHands/extensions/releases/tag/v0.32.1) | 2026-10-21T15:20:47Z | false |
| [v0.33.0](https://github.com/OpenHands/extensions/releases/tag/v0.33.0) | 2026-10-21T22:44:07Z | false |
| [v0.34.0](https://github.com/OpenHands/extensions/releases/tag/v0.34.0) | 2026-10-22T18:59:04Z | false |
| [v0.35.0](https://github.com/OpenHands/extensions/releases/tag/v0.35.0) | 2026-10-23T00:24:24Z | false |

The four stable intervals contain 186, 170, 43, and 143 commits respectively. The [Enterprise 0.81.0 documentation added on 2026-10-15](https://github.com/OpenHands/docs/blob/b918604b96b43485fe5db4d92df704e04fb0207c/enterprise/release-notes/0.81.0.mdx) explicitly dates that distribution to 2026-10-13 and lists Enterprise server 1.71.0, agent-server 1.50.1-python, Canvas 1.27.1, automation 1.19.1, and runtime-api 0.11.1. Its later documentation is not a new in-window distribution release, and its component versions are not today's Canvas bundle.

## 1. Local launches keep the selected profile, and profiles take ownership of behavior

- **Date:** 2026-10-15 (SDK v1.55.0); 2026-10-19 (Canvas v1.28.0); 2026-10-20 (Canvas v1.29.0)
- **Channel:** `tagged-release`
- **Ancestry evidence:** SDK 818c161b534477849716d445b2927b433f9dd9ab and d332f8156f12014df1b3522ab01c2508eabf6e8b first enter v1.55.0. Canvas 5958302c1c5dbdc441cbb7d85dc650ffc4d606bd first enters v1.28.0; 61cd03c89ed7e5581d1f304f5791962612701b37 first enters v1.29.0. Merge-base checks against consecutive stable tags establish absence from each predecessor and presence through the newest stable.
- **Receipt:** [launch resolver](https://github.com/OpenHands/OpenHands/blob/v1.33.0/src/hooks/mutation/resolve-conversation-launch.ts), [profile behavior](https://github.com/OpenHands/OpenHands/blob/v1.33.0/src/api/agent-profiles-service/profile-behavior.ts), [SDK profile launch change](https://github.com/OpenHands/software-agent-sdk/commit/818c161b534477849716d445b2927b433f9dd9ab), [public skill selection](https://github.com/OpenHands/software-agent-sdk/commit/d332f8156f12014df1b3522ab01c2508eabf6e8b), [profile-owned settings](https://github.com/OpenHands/OpenHands/commit/61cd03c89ed7e5581d1f304f5791962612701b37)
- **Half:** both | **Confidence:** high

**What changed.** The old local launch path could substitute inline global settings when a profile lacked an explicit secret allow-list. At v1.33.0, local launch awaits default-profile migration, requires a selected or active profile, and sends its ID with a separate per-launch LLM override. Migration failure stops the launch. SDK 1.55.0 removes inline agent-profile launches. Canvas 1.29.0 also puts skills, condenser, verification and Model Router selection on profiles. A public-skill allow-list now complements the deny-list. The Cloud branch falls back for an OpenHands profile with a nonempty `llm_profile_ref` not found in the fetched LLM-profile list and fetched detail lacking a `secret_refs` array. An absent LLM reference returns false from that fallback; a failed detail fetch also refuses it. A Cloud launch with no selected or active profile separately returns an empty launch. These are distinct from the local path.

**Operator consequence.** Upgrade Canvas and a remote server together to at least the new 1.55.0 floor, then inspect the migrated default profile and saved profile-specific choices. A model pick need no longer discard the local profile's other authority. This removes a fragile global-settings workaround and shifts human attention to reviewing a reusable profile. Router prompting still depends on the agent using the routing tool; profile ownership does not make it a hard spending boundary.

## 2. In-conversation secret requests reach stable, with server-side profile filtering

- **Date:** 2026-10-19 (Canvas v1.28.0); 2026-10-23 (masking in v1.33.0)
- **Channel:** `tagged-release`
- **Ancestry evidence:** da4c7564dcf460f80d1889fee1c951802c448c56 was main-only in the parent harvest and first enters v1.28.0, together with inline-card change 045290739f0af2ae4cc89d2a209c6bd930bb81ee. Masking 04f6dd5fcc428b816803b040943a2b7bbc9d14b8 first enters v1.33.0. Local and Docker consumers were read at SDK v1.58.1.
- **Receipt:** [request handler](https://github.com/OpenHands/OpenHands/blob/v1.33.0/src/services/secret-request.ts), [conversation secret update](https://github.com/OpenHands/OpenHands/blob/v1.33.0/src/hooks/mutation/conversation-mutation-utils.ts), [local server filtering](https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/openhands-agent-server/openhands/agent_server/event_service.py), [Docker filtering](https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/openhands-agent-server/openhands/agent_server/docker_runtime/routers.py), [masked forms](https://github.com/OpenHands/OpenHands/commit/04f6dd5fcc428b816803b040943a2b7bbc9d14b8)
- **Half:** capability | **Confidence:** high

**What changed.** An agent can ask for a named credential in the conversation. The UI reuses an existing saved secret when found or presents an inline entry card; v1.33.0 masks secret input. For local backends it sends a lookup reference to update the conversation. Both local `update_secrets` and Docker's corresponding route filter names through the launched profile's `allows_secret` before materialization. The UI's saved-secret discovery is unscoped, however, and a successful update response can follow server filtering that removed the requested name. The Cloud update helper takes a separate no-op path. A displayed success is not evidence that the credential became effective.

**Operator consequence.** Retire the profile's claim that the request UI is unreleased. On the matched bundle, test a saved-but-excluded secret and inspect effective credentials on both local and Docker conversations before treating this as an approval boundary. Source inspection supports filtering, not a bypass through this request endpoint; the terminal alias in section 3 is a different path. The useful capability is asking for missing access at the point of need, reducing trips through Settings without silently changing the profile's intended scope.

## 3. Tmux starts honoring secret sanitization, while the automation-key alias still survives

- **Date:** 2026-10-15 (completion-log repair); 2026-10-22 (SDK v1.58.0)
- **Channel:** `tagged-release`
- **Ancestry evidence:** ec6655cc181db85c9583d0c42956f6bb5e34687d first enters SDK v1.58.0, first bundled by Canvas v1.32.0 through v1.58.1. e3a26821f8f7c85e98078c7b5e1a80647fc7d0c7, committed before the window, first ships in SDK v1.55.0. Current alias/export and raw-secret consumers were read at Canvas v1.33.0 and SDK v1.58.1.
- **Receipt:** [tmux fix](https://github.com/OpenHands/software-agent-sdk/commit/ec6655cc181db85c9583d0c42956f6bb5e34687d), [completion-log fix](https://github.com/OpenHands/software-agent-sdk/commit/e3a26821f8f7c85e98078c7b5e1a80647fc7d0c7), [sanitized environment](https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/openhands-sdk/openhands/sdk/utils/command.py), [launcher alias](https://github.com/OpenHands/OpenHands/blob/v1.33.0/scripts/dev-with-automation.mjs#L927-L935), [Docker entrypoint](https://github.com/OpenHands/OpenHands/blob/v1.33.0/docker/entrypoint.sh#L210-L239), [saved-secret value route](https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/openhands-agent-server/openhands/agent_server/settings_router.py#L539-L569)
- **Half:** defect | **Confidence:** high

**What changed.** Passing a reduced environment to libtmux did not delete inherited variables. The fix explicitly removes inherited keys absent from the sanitized environment when preparing tmux. The SDK also releases earlier work keeping provider credentials out of completion logs. These are material repairs, but the sanitizer still does not remove `OPENHANDS_AUTOMATION_API_KEY`; Canvas deliberately exports that alias with the stack session key. The authenticated saved-secret-value route still has no profile check. Separately, setting only `LOCAL_BACKEND_API_KEY` in the Docker entrypoint still skips the block exporting `OH_SESSION_API_KEYS_0`; the [server dependency](https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/openhands-agent-server/openhands/agent_server/dependencies.py) only demands a key when its configured key list is nonempty.

**Operator consequence.** Upgrade for the real tmux repair, but do not retire the default-local-runtime credential warning or the Docker configuration warning. The code still implies an alias-mediated route from terminal access to saved secrets outside the profile; no exploit was executed here. Configure both Docker key variables consistently and require an unauthenticated protected-route rejection before exposure. Human review of a profile cannot substitute for testing the process credential boundary.

## 4. Children inherit exactly the parent's MCP set, and policy rails parse shell structure

- **Date:** 2026-10-15
- **Channel:** `tagged-release`
- **Ancestry evidence:** SDK 0bd5cc2d322d61f785816a29ef1f2e4c86db2460 and d97eb76f60829a4250dd313f5a9d4d03e2951de8 first enter v1.55.0 by merge-base checks, absent v1.54.0 and present v1.58.1. The latter was already merged before the previous cutoff; its release is new.
- **Receipt:** [exact MCP inheritance](https://github.com/OpenHands/software-agent-sdk/commit/0bd5cc2d322d61f785816a29ef1f2e4c86db2460), [shell AST change](https://github.com/OpenHands/software-agent-sdk/commit/d97eb76f60829a4250dd313f5a9d4d03e2951de8), [current policy rails](https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/openhands-sdk/openhands/sdk/security/defense_in_depth/policy_rails.py), [tool defaults](https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/openhands-sdk/openhands/sdk/tool/defaults.py)
- **Half:** both | **Confidence:** high

**What changed.** Delegated children receive exactly the resolved parent MCP configuration; child-declared MCP entries and plugin merging cannot enlarge it. Tools retain their separate scope checks. Policy rails move from regexes to shell AST analysis for composed fetch-to-execute, raw-disk and catastrophic-delete patterns. A matched rail yields HIGH risk and unresolved relevant shell structure yields UNKNOWN. The confirmation policy decides whether to prompt; a LOW result is not a general authorization decision.

**Operator consequence.** Recheck custom child configurations that relied on adding MCP servers, and test extra-tool, extra-MCP and nested delegation attempts against SDK 1.58.1. Keep `task_tool_set` an intentional opt-in. The durable improvement is carrying authority through delegation and examining composed commands; the human bottleneck moves to the parent grant and confirmation policy. Neither code change establishes universal isolation or repairs the separate session-key path.

## 5. Cipher-key rotation gains a migration path and refuses destructive writes under a lost key

- **Date:** 2026-10-21
- **Channel:** `tagged-release`
- **Ancestry evidence:** SDK 53757a33283d8d412189421b852640b83a8868cf first enters v1.57.0, absent v1.56.0 and present v1.58.1. Canvas first pins this SDK line in v1.30.1.
- **Receipt:** [rotation change](https://github.com/OpenHands/software-agent-sdk/commit/53757a33283d8d412189421b852640b83a8868cf), [current server documentation](https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/openhands-agent-server/openhands/agent_server/README.md#L273-L286), [Canvas v1.30.1 pins](https://github.com/OpenHands/OpenHands/blob/v1.30.1/config/defaults.json)
- **Half:** both | **Confidence:** high

**What changed.** `OH_PREVIOUS_SECRET_KEYS` supplies old decryption keys while `OH_SECRET_KEY` supplies the new encryption key. Settings and secret stores are re-encrypted at startup; other encrypted records migrate when saved. If encrypted settings or secrets cannot be decrypted, writes refuse with HTTP 409 instead of overwriting the unreadable data. Without an explicit encryption key the first session API key is a fallback, so rotating an authentication key can also change decryption behavior.

**Operator consequence.** Upgrade, back up encrypted state, retain old keys until all relevant stores are migrated, and distinguish authentication rotation from encryption rotation. This gives operators a supported recovery mechanism instead of a destructive trial-and-error sequence. It does not itself migrate the separate automation key-value store or revoke exported provider keys; those remain separate responsibilities.

## 6. A server can offer local and Docker conversations, but client resource values are not capped

- **Date:** 2026-10-19 (child launcher); 2026-10-21 (runtime choice)
- **Channel:** `tagged-release`
- **Ancestry evidence:** SDK 5966c781ed014efc96c028a99bddd4ff78426741 first enters v1.56.0; 77c6ee584101b929fbb50b7b09a66d3a5a0a1053 first enters v1.57.0. Enterprise c7225f7dc9e506a914e33fd0b95e3146c1fdea6a first enters 1.75.0. These remain ancestors of v1.58.1/1.79.0. Docs 339de53ec95a6b85b5b0f61973aa3ed2e013a91f records the limits explicitly.
- **Receipt:** [runtime selection](https://github.com/OpenHands/software-agent-sdk/commit/77c6ee584101b929fbb50b7b09a66d3a5a0a1053), [child-conversation tool](https://github.com/OpenHands/software-agent-sdk/commit/5966c781ed014efc96c028a99bddd4ff78426741), [Cloud parent launcher](https://github.com/OpenHands/enterprise/commit/c7225f7dc9e506a914e33fd0b95e3146c1fdea6a), [Enterprise child-launch gate](https://github.com/OpenHands/enterprise/blob/1.79.0/openhands/app_server/config.py#L190-L198), [Canvas bind selection](https://github.com/OpenHands/OpenHands/blob/v1.33.0/scripts/dev-with-automation.mjs#L506-L511), [runtime guide](https://github.com/OpenHands/docs/blob/339de53ec95a6b85b5b0f61973aa3ed2e013a91f/openhands/usage/agent-canvas/backend-setup/docker-execution.mdx)
- **Half:** both | **Confidence:** high

**What changed.** `OH_CONVERSATION_RUNTIME_SELECTABLE=1` lets requests choose local or Docker execution on the same server, while `OH_CONVERSATION_RUNTIME` remains the default. The feature requires the Docker setup and a configured secret key. Request `container.memory` and `container.cpus` replace the server defaults rather than being bounded by them. Separately, `start_child_conversation` gets a pluggable launcher, and the Enterprise backend contains support for children of Cloud parents. Enterprise 1.79.0 defaults `enable_child_conversation_launcher` to false; enabling it requires `OH_ENABLE_CHILD_CONVERSATION_LAUNCHER`, `web_url`, sandbox images containing the tool, and compatible Canvas handling. A source release alone does not enable hosted launching. These are distinct from the existing delegated-agent tool set. [Released SDK code also forwards configured OTEL/Laminar environment into conversation containers](https://github.com/OpenHands/software-agent-sdk/commit/4b8cb431a66c1f4b813d6c9c0181ce63a4e30d0a), so the container is not intended to contain no telemetry credentials.

**Operator consequence.** On Canvas v1.33.0 with SDK 1.58.1, select the runtime deliberately and pin the inner image. If multiple users can start work, enforce resource ceilings outside these request defaults; otherwise any authorized starter can request a larger container. Inspect the bind, container-to-host reachability and inner environment. The guide says selectable mode changes the bind automatically, but Canvas v1.33.0 only checks a Docker default in both bind and host-alias selection. Configure and verify those paths explicitly for selectable mode. Per-conversation isolation and hosted child orchestration delete useful custom glue, while resource authority and credential acceptance remain operator work. Cloud serving support was not established here.

## 7. Plugin manifests can carry executable automations, and Azure DevOps joins the event path

- **Date:** 2026-10-19 (automation 1.21.0); 2026-10-22 (automation 1.24.0)
- **Channel:** `tagged-release`
- **Ancestry evidence:** Automation 2a6a77936257de43d312690f942211f1999ef1b4 first enters 1.21.0; 576b6e548a1f0d0a2b0c207b3cc255a90dc92231, e97d865e4b1e640b39162c74d36a4e9c6b602160, and 8416846361474c811be7b21f7997d7399692b4c0 first enter 1.24.0. Canvas ee80223e76501c61177d0857670ad108e7d008ca first enters v1.32.0. All are present at the newest stable by merge-base checks.
- **Receipt:** [executable plugin change](https://github.com/OpenHands/automation/commit/2a6a77936257de43d312690f942211f1999ef1b4), [current plugin specification](https://github.com/OpenHands/automation/blob/1.25.1/openhands/automation/plugin_specs.py), [Azure events](https://github.com/OpenHands/automation/commit/576b6e548a1f0d0a2b0c207b3cc255a90dc92231), [clone capabilities](https://github.com/OpenHands/automation/commit/e97d865e4b1e640b39162c74d36a4e9c6b602160), [repository updates](https://github.com/OpenHands/automation/commit/8416846361474c811be7b21f7997d7399692b4c0), [Canvas provider picker](https://github.com/OpenHands/OpenHands/commit/ee80223e76501c61177d0857670ad108e7d008ca)
- **Half:** capability | **Confidence:** high

**What changed.** A plugin can supply an `openhands.automation.plugin.v1` specification through its manifest, with script or conversation entrypoints. Conversation entrypoints require a profile; declared runtime requirements cover tools, MCP references and secret references. The schema calls for an exact required profile match, not a loose extra-permissions allowance. Source validation rejects credential-bearing URLs and limits Cloud plugin sources to the supported GitHub forms. Automation 1.24.0 adds Azure DevOps as an event source, advertises which Git providers runs can clone from, and permits changing a preset's repository selection. Canvas 1.32.0 consumes the advertised clone capabilities instead of presenting only GitHub repositories.

**Operator consequence.** On automation 1.25.1 and Canvas v1.33.0, evaluate packaging repeatable work as a reviewed plugin instead of maintaining separate form-filling and trigger glue. Review executable entrypoints, source revision, and the required profile together; a manifest is code-distribution metadata, not a safety certificate. The new provider path broadens the work an automation can own, while the serial human decision remains what code and credentials deserve unattended execution. No plugin was fetched for execution or run here.

## 8. Daily quotas count sandbox creation, and members can save their own automation drafts

- **Date:** 2026-10-19 (quota); 2026-10-20 (draft permission)
- **Channel:** `tagged-release`
- **Ancestry evidence:** Enterprise 9ba3626e20cba1ff7184f3a2b2fb56b073c8fef7 first enters 1.73.0; automation a7c47ca038aa4d44654ce108037c57675ea6b93f first enters 1.22.0; cb092d344341f721bef9d24e5e7021c602901578 first enters 1.23.1. All remain in 1.79.0/1.25.1.
- **Receipt:** [sandbox quota](https://github.com/OpenHands/enterprise/commit/9ba3626e20cba1ff7184f3a2b2fb56b073c8fef7), [released quota scope](https://github.com/OpenHands/enterprise/blob/1.79.0/openhands/app_server/sandbox/remote_sandbox_service.py#L428-L453), [quota skip behavior](https://github.com/OpenHands/automation/commit/a7c47ca038aa4d44654ce108037c57675ea6b93f), [member drafts and uploads](https://github.com/OpenHands/automation/commit/cb092d344341f721bef9d24e5e7021c602901578), [current UI permissions](https://github.com/OpenHands/OpenHands/blob/v1.33.0/src/hooks/use-automation-permissions.ts)
- **Half:** both | **Confidence:** high

**What changed.** The Enterprise daily limit changes its accounting unit from conversations to attributed new sandboxes in SaaS mode on the remote backend. It does not meter Docker, E2B or process backends, unattributed/system/warm starts, or resuming an existing sandbox. Some asynchronous failed starts retain reservations unless a waiter in the same service instance settles them. Automation recognizes the daily-sandbox limit and skips affected runs rather than treating it as an ordinary provisioning failure. Members who already could create automations can now save drafts and delete their own uploads. This repairs a mismatch in the preparation workflow; it does not grant every member management over everyone else's jobs.

**Operator consequence.** For SaaS remote-backend deployments, review the metered starts and reservation settlement, and distinguish quota skips from broken jobs. Do not treat this daily counter as an Enterprise-wide capacity boundary. Check sandbox reuse and the separate Compose grouping default (section 20). Members can prepare and test work without an administrator completing the draft for them. That removes clerical attention while preserving creator and management checks. Verify the serving Enterprise/automation versions before applying these rules to Cloud; this harvest establishes released source behavior only.

## 9. Enterprise binds account linking to the browser but makes email-verification enforcement opt-in

- **Date:** 2026-10-19 (1.72.0); 2026-10-20 (1.74.0); 2026-10-21 (1.75.0)
- **Channel:** `tagged-release`
- **Ancestry evidence:** SAML routes 6ce81f28801f3b1072fa0c1224235f134f82fe10, non-OAuth fail-closed change d1df819e9e616f58b629cd92e198018fe31d2bf4, and provider email-match setting c975ffb5798b0b626bc81239687c15328ca0336a first enter 1.72.0. Browser-bound linking 87f7fcb30523fa07fd3ff0a7ae29c8e7b473839f first enters 1.74.0. Verification gate 20d3da16ca990319a8bed65a837e53638b8cfa20 first enters 1.75.0. All are present in 1.79.0.
- **Receipt:** [browser-bound linking](https://github.com/OpenHands/enterprise/commit/87f7fcb30523fa07fd3ff0a7ae29c8e7b473839f), [SAML routes](https://github.com/OpenHands/enterprise/commit/6ce81f28801f3b1072fa0c1224235f134f82fe10), [generic-route rejection](https://github.com/OpenHands/enterprise/commit/d1df819e9e616f58b629cd92e198018fe31d2bf4), [email-match setting](https://github.com/OpenHands/enterprise/commit/c975ffb5798b0b626bc81239687c15328ca0336a), [current defaults](https://github.com/OpenHands/enterprise/blob/1.79.0/server/constants.py#L32-L55), [verification middleware](https://github.com/OpenHands/enterprise/blob/1.79.0/server/middleware.py#L87-L104)
- **Half:** both | **Confidence:** high

**What changed.** OAuth v2 linking validates a browser-held nonce cookie against link state, with expiry and callback cleanup; a link state alone is no longer sufficient in a different browser. Generic OAuth routes reject non-OAuth providers, while dedicated SAML login, callback and metadata routes ship. Provider configuration gains email-match control. Separately, `REQUIRE_VERIFIED_EMAILS` now defaults to false because some configured identity providers omit the verification claim and previously locked new users out. Enforcing that middleware condition requires explicit opt-in. This is a changed access default, not evidence of an incident.

**Operator consequence.** Upgrade Enterprise separately, review each identity provider's login, linking and email-match policy, and set `REQUIRE_VERIFIED_EMAILS` explicitly if verification is part of the deployment's admission rule. Test both new-user login and cross-browser linking. The release removes provider-specific integration work but makes the administrator responsible for an explicit verification choice. A [frontend reconciliation](https://github.com/OpenHands/enterprise/commit/adc90a4280c639d6ab5d6e72dfc4e332a28cb38b) and a [further email-match behavior change](https://github.com/OpenHands/enterprise/commit/5516e2484b02fe06c515b0c54a46a2d7186f01c9) are in the inspected main range, not 1.79.0; no claim of complete UI parity or hosted rollout follows.

## 10. Enterprise packages a local Compose stack and clarifies the licensed Helm path

- **Date:** 2026-10-19 (first source release); 2026-10-23 (Helm documentation)
- **Channel:** `tagged-release` (Compose); `docs-only` (Helm instructions)
- **Ancestry evidence:** aeca9943f56d6d6f75ae94336c060dacc9031c3e first enters Enterprise 1.72.0, absent 1.71.0 and present 1.79.0. Released-image commit 4f332f6768d424e31ee5a9eca2e724a0be143815 and migration commit 385d5a572ea737f6a8c941987197b6206b996b6f first enter 1.74.0; persistence commit d20518bd0014d671d8cb583c84f1d253d4c10356 first enters 1.76.0, by consecutive-tag merge-base checks. Docs a903c5fc29d616d1df39cfc8482e5175e9dca2ad is in inspected docs main f742b438db2d5a2d316ebea67a18c46b4ab56a48; no product release is inferred from that documentation commit.
- **Receipt:** [Compose stack](https://github.com/OpenHands/enterprise/commit/aeca9943f56d6d6f75ae94336c060dacc9031c3e), [released images](https://github.com/OpenHands/enterprise/commit/4f332f6768d424e31ee5a9eca2e724a0be143815), [database migration](https://github.com/OpenHands/enterprise/commit/385d5a572ea737f6a8c941987197b6206b996b6f), [optional persistence](https://github.com/OpenHands/enterprise/commit/d20518bd0014d671d8cb583c84f1d253d4c10356), [Helm clarification](https://github.com/OpenHands/docs/commit/a903c5fc29d616d1df39cfc8482e5175e9dca2ad), [license](https://github.com/OpenHands/enterprise/blob/1.79.0/LICENSE)
- **Half:** capability | **Confidence:** high

**What changed.** The source distribution now includes a Compose route for running the Enterprise stack locally, with subsequent fixes for released images, worker connectivity, startup migration and persistence. New provider-specific deployment and model-gateway guides cover more infrastructure combinations. The 2026-10-23 Helm instructions require a license enabled for Helm and registry credentials, including confirmation for existing trial users. They distinguish a licensed chart version from the independently released backend source. Enterprise remains under PolyForm Free Trial 1.0.0.

**Operator consequence.** Use the packaged stack for a version-pinned evaluation instead of assembling services from unrelated current tags. Plan persistence before putting valuable data into it. For Kubernetes, obtain the authorized chart and provider-specific values rather than assuming the latest public source tag is the chart you can install. This lowers deployment assembly work, but license access, storage, authentication and a real first-conversation test remain the operator's responsibility. No Compose or Helm installation was performed here.

## 11. The DigitalOcean web bridge ships default-on, then returns to opt-in

- **Date:** 2026-10-19; 2026-10-22; 2026-10-23
- **Channel:** `tagged-release`
- **Ancestry evidence:** 0cb2fa70d76d9bca284359ec7f9116d1c7ad16f4, main-only at the previous cutoff, first enters Canvas v1.28.0. Reversal 1e850162beea360c61b75bee8c0d818b405be184 first enters v1.30.0. Typed-key forwarding 84a5d30a4afef6a9fd805c272b1f88d2f0909569 first enters v1.31.0; persistent sign-in 6eb91bb8097d2a2b8da6b3ac5655ee6b6d8912b3 and smallest-VM default 801a3c72886f731ffb7c4af130b46d10e1906e4c first enter v1.33.0.
- **Receipt:** [opt-in restored](https://github.com/OpenHands/OpenHands/commit/1e850162beea360c61b75bee8c0d818b405be184), [typed-key forwarding](https://github.com/OpenHands/OpenHands/commit/84a5d30a4afef6a9fd805c272b1f88d2f0909569), [sign-in persistence](https://github.com/OpenHands/OpenHands/commit/6eb91bb8097d2a2b8da6b3ac5655ee6b6d8912b3), [VM default](https://github.com/OpenHands/OpenHands/commit/801a3c72886f731ffb7c4af130b46d10e1906e4c), [current configuration](https://github.com/OpenHands/OpenHands/blob/v1.33.0/config/defaults.json)
- **Half:** both | **Confidence:** high

**What changed.** The integration itself was already released before this window. What changes now is the bridge default: v1.28.0 includes the earlier default-on merge, but v1.30.0 restores `MARS_WEB=1`. Subsequent releases forward the key typed by the user when it was not embedded in the page, preserve signed-in state, and choose the smallest VM for a new agent. The current code still describes the bridge as experimental.

**Operator consequence.** Set the flag explicitly on v1.33.0 when using this path; do not carry forward an expectation that an upgrade enables it automatically. Recheck sign-in and selected VM size before creating paid resources. The lifecycle repairs reduce repeated authentication and setup work, while provider selection and resource sizing remain deliberate. DigitalOcean's current [Managed Agents documentation](https://docs.digitalocean.com/products/managed-agents/) describes public preview; a stable Canvas tag does not change the partner service's channel.

## 12. MCP OAuth installation and refresh improve, while ACP credential forwarding remains unreleased

- **Date:** 2026-10-22 (Canvas v1.31.0 and SDK v1.58.0); 2026-10-23 (Enterprise 1.78.0 and ACP main change)
- **Channel:** `tagged-release` (installation and refresh); `main-unreleased` (ACP forwarding)
- **Ancestry evidence:** Canvas 55c5b7dd54d22fef5bc14ac8b0ce357c16f4f933 first enters v1.31.0. SDK df393e38d8f1436c14414ab011386fae351c9d83 and f331fa667b7a55b1573121993a8a843593c75de9 first enter v1.58.0. Enterprise 015214afbfe404a7ea54badb03e51728577d275e first enters 1.78.0. SDK 87bec04de8e08117399d5cab68042cc794bc2199 is an ancestor of inspected main, absent v1.58.1, and `git tag --contains` returns no tags.
- **Receipt:** [Canvas OAuth-only servers](https://github.com/OpenHands/OpenHands/commit/55c5b7dd54d22fef5bc14ac8b0ce357c16f4f933), [client auth method](https://github.com/OpenHands/software-agent-sdk/commit/df393e38d8f1436c14414ab011386fae351c9d83), [refresh preservation](https://github.com/OpenHands/software-agent-sdk/commit/f331fa667b7a55b1573121993a8a843593c75de9), [Enterprise secret resolution](https://github.com/OpenHands/enterprise/commit/015214afbfe404a7ea54badb03e51728577d275e), [tool-call condition](https://github.com/OpenHands/enterprise/blob/1.79.0/openhands/app_server/mcp/mcp_tool_call_router.py#L128-L140), [OAuth probe rejection](https://github.com/OpenHands/enterprise/blob/1.79.0/openhands/app_server/mcp/mcp_test_router.py#L418-L435), [unreleased ACP forwarding](https://github.com/OpenHands/software-agent-sdk/commit/87bec04de8e08117399d5cab68042cc794bc2199)
- **Half:** both | **Confidence:** high

**What changed.** Canvas can install library MCP servers that require OAuth without another auth mechanism. SDK registration chooses an authentication method supported by the server and avoids duplicate Basic credentials. A conversation's failed refresh no longer destroys its stored OAuth credentials. Enterprise resolves saved-secret references in the connection-test path, which then rejects OAuth-authenticated probes. The tool-call route expands references only when `server.oauth_auth is None`, avoiding copying OAuth client secrets into refreshed state. These are not general OAuth-server probe support. The separate change forwarding OAuth2 MCP credentials into ACP agents is only on main.

**Operator consequence.** Upgrade the matched stable bundle for installation and refresh failures before manually recreating credentials. Test the actual MCP operation, not only the connection indicator. Operators using an ACP engine must not assume stable 1.58.1 includes the forwarding repair. This reduces auth glue and repeated consent work, while backend and engine compatibility still determine which credential path is in use.

## 13. A compatibility cap excludes the compromised LiteLLM release, while dependency freshness becomes explicit

- **Date:** 2026-10-19 (SDK cap and locked automation images); 2026-10-23 (Canvas v1.32.0)
- **Channel:** `tagged-release`
- **Ancestry evidence:** SDK 3e8e17bee85494eb5ec2eae71ad0bb011e35b33d first enters v1.56.0. Automation 4bcd95d4d18fde89fa344c31fe1427ea1fb1d480 first enters 1.22.0. Canvas 542aa917de74d24d3f1eb7abd86622097bfff21f first enters v1.32.0. All remain in the newest stable. The cap predates the supplier's 2026-10-21 incident.
- **Receipt:** [LiteLLM cap](https://github.com/OpenHands/software-agent-sdk/commit/3e8e17bee85494eb5ec2eae71ad0bb011e35b33d), [published SDK 1.58.1 metadata](https://pypi.org/pypi/openhands-sdk/1.58.1/json), [locked production image installs](https://github.com/OpenHands/automation/commit/4bcd95d4d18fde89fa344c31fe1427ea1fb1d480), [Canvas dependency policy](https://github.com/OpenHands/OpenHands/commit/542aa917de74d24d3f1eb7abd86622097bfff21f), [supplier incident account](https://docs.litellm.ai/blog/security-incident-oct-21-2026-attack-chain)
- **Half:** both | **Confidence:** high

**What changed.** SDK 1.56.0 caps LiteLLM below 1.106 because of MCP compatibility; published SDK 1.58.1 retains `litellm>=1.93.0,<1.106`. That excludes LiteLLM 1.107.0, which the supplier says was compromised on 2026-10-21. The older [SDK 1.54.0 metadata](https://pypi.org/pypi/openhands-sdk/1.54.0/json) has no upper bound. Automation production images now install from `uv.lock`. Canvas pins its npm toolchain and documents a seven-day minimum age for new dependency resolution; CI's locked install is not proof that every consumer install automatically enforces that age.

**Operator consequence.** Check actual installed package versions and image provenance, especially for older or independently resolved environments. A compliant fresh SDK 1.58.1 resolution excludes the named compromised release; this does not establish what an existing machine installed, or that an unrelated LiteLLM proxy is covered. Do not report OpenHands compromise from dependency adjacency. The actionable gain is a bounded resolver and reproducible image dependencies, with human attention concentrated on installation receipts and deliberate exceptions rather than a reassuring policy label.

## 14. Certificate distrust ships in Python dependencies, with an OS-bundle repair still on main

- **Date:** 2026-10-23 (SDK v1.58.1, automation 1.25.1, Enterprise 1.78.0)
- **Channel:** `tagged-release` (Python dependencies); `main-unreleased` (SDK Debian snapshot)
- **Ancestry evidence:** SDK e8a071f511222697caf2df0dd0498c54590c9707 first enters v1.58.1; automation 872e32295b0f7f33da275845626ff4000d189f2e first enters 1.25.1; Enterprise 177fbeb699613a04e473c0f10fe17f36b30f7c60 first enters 1.78.0. SDK acd96e6fa424c02432304395b9208f99be24b54d is main-only, absent v1.58.1 with no containing tag. Enterprise 04a28974b73d99e333102336d7ccfdd449dca889 adds a metadata floor only after 1.79.0.
- **Receipt:** [SDK distrust](https://github.com/OpenHands/software-agent-sdk/commit/e8a071f511222697caf2df0dd0498c54590c9707), [automation distrust](https://github.com/OpenHands/automation/commit/872e32295b0f7f33da275845626ff4000d189f2e), [Enterprise distrust](https://github.com/OpenHands/enterprise/commit/177fbeb699613a04e473c0f10fe17f36b30f7c60), [certifi advisory](https://github.com/advisories/GHSA-6q48-6c7w-9gw2), [unreleased Debian update](https://github.com/OpenHands/software-agent-sdk/commit/acd96e6fa424c02432304395b9208f99be24b54d), [unreleased Enterprise metadata floor](https://github.com/OpenHands/enterprise/commit/04a28974b73d99e333102336d7ccfdd449dca889)
- **Half:** defect | **Confidence:** high

**What changed.** The certifi advisory concerns compromised intermediate CA keys: an on-path attacker with such a key can impersonate TLS endpoints trusted through the affected root. It names certifi 2026.10.19 as the patched version. The three current locks select that version, and SDK/automation published requirements establish a floor. SDK's repair also addresses vendored pip and uv. Enterprise 1.79.0 has the repaired lock, but its explicit project-metadata floor is a later main-only change. SDK's Debian snapshot update is likewise not in the newest tag, so the Python repair is not a receipt for every OS trust store.

**Operator consequence.** Upgrade the full bundle, rebuild separately managed environments from the repaired artifacts, and inspect the Python, vendored and OS trust stores actually used. Do not label the entire deployment remediated solely because `certifi` is fixed. The remaining work is dependency and image acceptance, not another model prompt or permission dialog. This is a supplier trust-store issue with a concrete interception precondition, not evidence of an observed OpenHands interception.

## 15. Canvas removes the session key from a child command line only after v1.33.0

- **Date:** 2026-10-23
- **Channel:** `main-unreleased`
- **Ancestry evidence:** 8fdd6859aee5779ebbc12e44dc32823d7cb08527 is absent from v1.33.0 and is an ancestor of fetched main fee10e3d2909ebbf9950578575b1ee011492171e. `git tag --contains` returns no tags. Main is 6 ahead / 0 behind v1.33.0 at the read.
- **Receipt:** [argv-to-environment change](https://github.com/OpenHands/OpenHands/commit/8fdd6859aee5779ebbc12e44dc32823d7cb08527), [stable-to-main comparison](https://github.com/OpenHands/OpenHands/compare/v1.33.0...fee10e3d2909ebbf9950578575b1ee011492171e)
- **Half:** defect | **Confidence:** high

**What changed.** The launcher stops passing the static server's session key as a command-line argument and uses a child environment value instead. The key therefore leaves that process-argument surface. This patch is after the latest stable release. It does not remove the automation-key alias from agent terminals or correct the Docker custom-key export branch.

**Operator consequence.** Track the first containing release and inspect the launched process arguments before closing this exposure path. Do not promise the repair from an ordinary v1.33.0 upgrade. Moving a credential between process surfaces reduces one disclosure path; acceptance still requires checking which subprocesses inherit it.

## 16. GitHub mentions can request code changes under a repository-write gate

- **Date:** 2026-10-23 (extensions v0.35.0; Canvas v1.32.0)
- **Channel:** `tagged-release`
- **Ancestry evidence:** Extensions af0a4b816b0b711c79771b91a950726c0c6ed896 is absent v0.34.0, first present v0.35.0. Canvas v1.31.0 pins extensions 0.33.0; v1.32.0 first pins 0.35.0 and v1.33.0 retains it.
- **Receipt:** [monitor change](https://github.com/OpenHands/extensions/commit/af0a4b816b0b711c79771b91a950726c0c6ed896), [polling authorization](https://github.com/OpenHands/extensions/blob/v0.35.0/skills/github-repo-monitor/scripts/main.py#L641-L663), [template defaults and prompt](https://github.com/OpenHands/extensions/blob/v0.35.0/automations/catalog/github-repo-monitor/manifest.json#L78-L114), [Canvas bundle](https://github.com/OpenHands/OpenHands/blob/v1.32.0/package.json)
- **Half:** both | **Confidence:** high

**What changed.** The monitor defaults to repository-write authorization and `implement` work mode, allowing authorized requests to lead to branch creation, commits, pushes and updates to existing pull requests. The polling script mechanically checks GitHub repository permissions for other authors, but explicit allowlists and the token owner bypass that check; `anyone` bypasses it generally. Work restrictions are agent instructions. The catalog fallback template expresses both its authorization check and work restrictions in the prompt. `reply` is the narrower work mode.

**Operator consequence.** Audit the actual deployed monitor definition, bypass list, token scope and work mode before enabling it. Pairing `anyone` with `implement` lets arbitrary commenters request code changes using the automation's token. This can replace manual request-to-branch coordination, but moves the critical human decision to who may start work. Do not infer migration of existing saved bundles or mechanical enforcement of prompt restrictions. No live repository monitor was exercised.

## 17. Software-factory guidance ships and becomes default-enabled

- **Date:** 2026-10-19 (extensions v0.31.0); 2026-10-20 (v0.32.0; Canvas v1.29.0)
- **Channel:** `tagged-release`
- **Ancestry evidence:** 25fab14cac53f1795302a92dc099554c5f46c7d7 is absent v0.30.0 and first present v0.31.0. 5f0bc702a65b2165e4406227d845b87efd5d445a is absent v0.31.0 and first present v0.32.0. Both remain in v0.35.0. Canvas v1.28.1 pins 0.31.0; v1.29.0 pins 0.32.0.
- **Receipt:** [onboarding recipe](https://github.com/OpenHands/extensions/commit/25fab14cac53f1795302a92dc099554c5f46c7d7), [default enablement](https://github.com/OpenHands/extensions/commit/5f0bc702a65b2165e4406227d845b87efd5d445a), [current recipe](https://github.com/OpenHands/extensions/blob/v0.35.0/skills/software-factory/README.md), [first Canvas pin](https://github.com/OpenHands/OpenHands/blob/v1.29.0/package.json)
- **Half:** capability | **Confidence:** high

**What changed.** The shipped recipe assembles catalog stations for issue-to-PR, review and triage, with checkpoints, credentials and backend-capability requirements. It is default-enabled guidance from extensions v0.32.0. Default-enabled text does not mean unattended jobs start merely by installing Canvas.

**Operator consequence.** Try a bounded repository setup and review the profiles, credentials and jobs it proposes when invoked. This reduces custom onboarding and automation assembly, while deciding which jobs deserve unattended authority remains human work. The livestream outcome is still unverified; this released recipe is independent evidence of packaged capability.

## 18. Enterprise providers can be staged and new-user registration controlled

- **Date:** 2026-10-19 (Enterprise 1.72.0); 2026-10-23 (1.78.0)
- **Channel:** `tagged-release`
- **Ancestry evidence:** f31c63a7bf677150f36f8a94920d2a84504b0a7f is absent 1.71.0, first present 1.72.0. 0893792cd133eae70aa79852769e059577b43238 is absent 1.77.0, first present 1.78.0. Both remain in 1.79.0.
- **Receipt:** [registration control](https://github.com/OpenHands/enterprise/commit/f31c63a7bf677150f36f8a94920d2a84504b0a7f), [provider enabled state](https://github.com/OpenHands/enterprise/commit/0893792cd133eae70aa79852769e059577b43238), [enabled-state migration](https://github.com/OpenHands/enterprise/blob/1.79.0/migrations/versions/196_add_auth_provider_enabled.py)
- **Half:** both | **Confidence:** high

**What changed.** Provider registration is permitted by default; disabling registration gates new-user creation rather than all existing-user linking. New providers now start disabled, while pre-existing rows migrate enabled. Disabling a provider blocks new login/link flows without revoking existing sessions or tokens.

**Operator consequence.** Stage provider configuration before enabling it and test registration, existing-user linking and disabled-provider login separately. Handle session/token revocation separately when removing access. This removes the need to expose half-configured providers, but the enabled flag is not an emergency sign-out control.

## 19. Configured emails can receive instance super-admin on OAuth login

- **Date:** 2026-10-23 (Enterprise 1.78.0)
- **Channel:** `tagged-release`
- **Ancestry evidence:** dbdbf0d60c648d9f3f9ec059387dcba20e0b0914 is absent 1.77.0, first present 1.78.0, and present 1.79.0.
- **Receipt:** [super-admin grant change](https://github.com/OpenHands/enterprise/commit/dbdbf0d60c648d9f3f9ec059387dcba20e0b0914), [released grant input](https://github.com/OpenHands/enterprise/blob/1.79.0/server/auth/constants.py), [OAuth callback](https://github.com/OpenHands/enterprise/blob/1.79.0/server/routes/oauth_v2.py)
- **Half:** both | **Confidence:** high

**What changed.** `SUPER_ADMIN_EMAILS` is empty by default. On every successful OAuth v2 login, a stored user email matching the configured case-insensitive list receives instance super-admin if needed. This supplies a recovery/grant input independent of first-user designation.

**Operator consequence.** Audit this list alongside provider email identity, linking and verification policy. Removing a configured address is not itself evidence of revoking an already granted role. This is an explicit privilege input, not an automatically active bypass or proof of exploitation; no login was tested.

## 20. Enterprise Compose shares sandboxes across conversations by default

- **Date:** 2026-10-23 (Enterprise 1.79.0)
- **Channel:** `tagged-release`
- **Ancestry evidence:** 029c81a049f978aa8db14a6ba08fbeebcddc621c is absent 1.78.0 and first present 1.79.0.
- **Receipt:** [grouping configuration](https://github.com/OpenHands/enterprise/commit/029c81a049f978aa8db14a6ba08fbeebcddc621c), [Compose default](https://github.com/OpenHands/enterprise/blob/1.79.0/docker-compose.yml), [grouping precedence](https://github.com/OpenHands/enterprise/blob/1.79.0/openhands/app_server/app_conversation/live_status_app_conversation_service.py)
- **Half:** both | **Confidence:** high

**What changed.** User/org grouping overrides take precedence, then the deployment default, then NO_GROUPING. The released Compose stack sets `OH_APP_CONVERSATION_SANDBOX_GROUPING_STRATEGY=FEWEST_CONVERSATIONS`, packing conversations into shared sandboxes. The app's unset fallback remains NO_GROUPING.

**Operator consequence.** Inspect effective grouping, workspace separation and capacity sharing before treating the packaged evaluation stack as one sandbox per conversation. Packing can reduce container sprawl, but reuse changes the isolation and capacity model. Keep this separate from the scoped remote-SaaS daily quota in section 8.

## 21. Canvas backend logs default to WARNING

- **Date:** 2026-10-23 (Canvas v1.32.0)
- **Channel:** `tagged-release`
- **Ancestry evidence:** 39891795e0bb31494fcdbe15cfe47cec0a76f00f is absent v1.31.0, first present v1.32.0, and present v1.33.0.
- **Receipt:** [logging default change](https://github.com/OpenHands/OpenHands/commit/39891795e0bb31494fcdbe15cfe47cec0a76f00f), [launcher](https://github.com/OpenHands/OpenHands/blob/v1.33.0/scripts/dev-with-automation.mjs), [Docker entrypoint](https://github.com/OpenHands/OpenHands/blob/v1.33.0/docker/entrypoint.sh)
- **Half:** both | **Confidence:** high

**What changed.** The launcher and Docker path choose WARNING for backend logs unless explicit settings override it. Ordinary startup output becomes quieter, including fewer INFO/access records.

**Operator consequence.** Set the log detail required for debugging and operational collection explicitly. Reduced startup chatter saves attention, while missing routine records can increase diagnosis work if a collector silently relied on the old default.

## 22. GitHub user server and OAuth token literals gain redaction patterns

- **Date:** 2026-10-19 (SDK v1.56.0)
- **Channel:** `tagged-release`
- **Ancestry evidence:** 6ae64079cfd30cfe2f01a060c59168a4d650d883 is absent v1.55.1, first present v1.56.0, and present v1.58.1.
- **Receipt:** [literal redaction change](https://github.com/OpenHands/software-agent-sdk/commit/6ae64079cfd30cfe2f01a060c59168a4d650d883), [current redactor](https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/openhands-sdk/openhands/sdk/utils/redact.py)
- **Half:** defect | **Confidence:** high

**What changed.** The API-key literal redactor adds `ghu_`, `ghs_` and `gho_` token patterns, covering GitHub user-to-server, server-to-server and OAuth token forms. This is distinct from the earlier completion-log fix in section 3.

**Operator consequence.** Upgrade redaction consumers and review retained output for these forms where needed. More literal coverage reduces accidental disclosure, but does not prove every output path invokes this redactor.

## 23. TypeScript conversation limits now reach the server

- **Date:** 2026-10-19 (SDK and TypeScript client v1.56.0)
- **Channel:** `tagged-release`
- **Ancestry evidence:** 1fbfd37f6fb21491ed733fc92d409aff1517ff4a is absent v1.55.1, first present v1.56.0, and present v1.58.1.
- **Receipt:** [run-control forwarding](https://github.com/OpenHands/software-agent-sdk/commit/1fbfd37f6fb21491ed733fc92d409aff1517ff4a), [current manager](https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/clients/typescript/src/conversation/conversation-manager.ts), [constructor defaults](https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/clients/typescript/src/conversation/remote-conversation.ts)
- **Half:** both | **Confidence:** high

**What changed.** `ConversationManager.createConversation` forwards `maxIterations` and `stuckDetection` into start, and remote conversation creation respects constructor defaults. The comment changes from a claimed 50-iteration default to the actual 500 fallback.

**Operator consequence.** Retest integrations whose run budgets relied on previously ignored constructor settings. This repairs a control path; it is not a new lower global default or a monetary cap. Record an actual stop before retiring an external iteration guard.

## 24. SessionStart hooks deliver their additional context to the agent

- **Date:** 2026-10-22 (SDK v1.58.0)
- **Channel:** `tagged-release`
- **Ancestry evidence:** f8ac42498066b409a41988a3d7ea1486ff0c1347 is absent v1.57.0, first present v1.58.0, and present v1.58.1.
- **Receipt:** [context delivery change](https://github.com/OpenHands/software-agent-sdk/commit/f8ac42498066b409a41988a3d7ea1486ff0c1347), [current hook processor](https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/openhands-sdk/openhands/sdk/hooks/conversation_hooks.py)
- **Half:** capability | **Confidence:** high

**What changed.** Collected SessionStart `additionalContext` is injected after the system-prompt event as a user-role message sourced from the environment. Previously returned startup context could be lost.

**Operator consequence.** Retest hooks supplying project context before removing duplicate prompt injection. Delivery restores useful startup information; contextual text remains different from enforced policy.

## 25. Strict plugin preflight resolves a revision without enabling the plugin

- **Date:** 2026-10-16 (SDK v1.55.1)
- **Channel:** `tagged-release`
- **Ancestry evidence:** db9c54b71c8c9ed46a2454fc65eee804d3c1e8aa is absent v1.55.0, first present v1.55.1, and present v1.58.1.
- **Receipt:** [strict preflight change](https://github.com/OpenHands/software-agent-sdk/commit/db9c54b71c8c9ed46a2454fc65eee804d3c1e8aa), [current implementation](https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/openhands-sdk/openhands/sdk/plugin/strict_fetch.py)
- **Half:** capability | **Confidence:** high

**What changed.** The released preflight API resolves remote plugin sources to a full commit SHA, validates paths/manifests and reports structured fetch errors without enabling the plugin. Explicitly allowed local sources do not have a remote resolved SHA.

**Operator consequence.** Review and retain the resolved remote revision before enabling executable extensions. This gives plugin review a concrete object and avoids custom fetch/error glue, while successful parsing does not approve executable content. No fetched plugin was run here.

## 26. Failed automation sandbox starts get cleanup and bounded retries

- **Date:** 2026-10-20 (automation 1.23.1)
- **Channel:** `tagged-release`
- **Ancestry evidence:** 567bdbdf3bef1e0866563786d109f986b979a912 is absent 1.23.0, first present 1.23.1, and present 1.25.1.
- **Receipt:** [provisioning repair](https://github.com/OpenHands/automation/commit/567bdbdf3bef1e0866563786d109f986b979a912), [Cloud backend](https://github.com/OpenHands/automation/blob/1.25.1/openhands/automation/backends/cloud.py), [retry dispatcher](https://github.com/OpenHands/automation/blob/1.25.1/openhands/automation/dispatcher.py)
- **Half:** both | **Confidence:** high

**What changed.** Before propagating an unusable-start failure, the Cloud backend attempts to delete the never-used sandbox. The dispatcher classifies and retries provisioning errors within its configured attempt budget; safe status classes replace raw runtime detail in run status. Cleanup is best effort.

**Operator consequence.** Check failed-run cleanup and retry records before manually deleting every failed start. Retrying before automation code ran can remove routine intervention without duplicating its work. This is separate from quota skips, and released source does not establish hosted rollout or successful deletion.

## 27. Browser-disabled servers stop advertising browser tools and built-in agents

- **Date:** 2026-10-15 (SDK v1.55.0)
- **Channel:** `tagged-release`
- **Ancestry evidence:** 8efff8d3cf1a5a3fcf7ce5e3b97c7f00684d9547 and 4804aa0be06f3a90e88037a3a580e7c069a2195b are absent v1.54.0, first present v1.55.0, and present v1.58.1.
- **Receipt:** [usable-tool filtering](https://github.com/OpenHands/software-agent-sdk/commit/8efff8d3cf1a5a3fcf7ce5e3b97c7f00684d9547), [built-in agent filtering](https://github.com/OpenHands/software-agent-sdk/commit/4804aa0be06f3a90e88037a3a580e7c069a2195b)
- **Half:** both | **Confidence:** high

**What changed.** The server's usable-tool list and browser-only built-in sub-agent discovery now follow the configured browser availability, instead of advertising choices disabled by server configuration.

**Operator consequence.** Inspect advertised tools and built-in agents on browser-disabled deployments and remove custom catalog filtering only after checking the result. This aligns discovery with configuration; it does not establish an OS-level prohibition on browser execution.

## 28. LLM profile validation stops after one bounded primary-model attempt

- **Date:** 2026-10-19 (SDK v1.56.0)
- **Channel:** `tagged-release`
- **Ancestry evidence:** 76055f697a5e9295252e0d54ab4ea822946e5c54 is absent v1.55.1, first present v1.56.0, and present v1.58.1.
- **Receipt:** [validation repair](https://github.com/OpenHands/software-agent-sdk/commit/76055f697a5e9295252e0d54ab4ea822946e5c54), [current validation](https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/openhands-agent-server/openhands/agent_server/profiles_router.py)
- **Half:** both | **Confidence:** high

**What changed.** Preflight makes one attempt with a timeout of at most 15 seconds, no retries and no fallback LLMs. A quota-exhaustion 429 fails validation; ordinary transient rate limits/timeouts remain non-blocking.

**Operator consequence.** Recheck setup error handling rather than treating every 429 alike. This shortens waiting and prevents a working fallback from validating a broken primary, while a non-blocking transient response still is not a successful model call.

## 29. Sentry catalog offers MCP OAuth and a self-hosted token path

- **Date:** 2026-10-22 (extensions v0.34.0); 2026-10-23 (Canvas v1.32.0 bundle)
- **Channel:** `tagged-release`
- **Ancestry evidence:** afb59307703c68162a61cea088620b75f6221a45 is absent v0.33.0, first present v0.34.0, and present v0.35.0. Canvas v1.32.0 first pins 0.35.0; v1.33.0 retains it.
- **Receipt:** [catalog change](https://github.com/OpenHands/extensions/commit/afb59307703c68162a61cea088620b75f6221a45), [tagged integration metadata](https://github.com/OpenHands/extensions/blob/v0.35.0/integrations/catalog/sentry.json), [Canvas bundle](https://github.com/OpenHands/OpenHands/blob/v1.33.0/package.json)
- **Half:** capability | **Confidence:** high

**What changed.** The catalog adds a hosted MCP OAuth choice without client authentication and a local stdio MCP path using a personal token with optional `SENTRY_HOST` for a self-hosted server. Other existing connection choices remain.

**Operator consequence.** Choose the intended host, transport and token scopes, then test a real Sentry operation. Catalog support can replace integration setup glue, but does not prove compatibility with a particular self-hosted deployment.

## 30. Install snapshot is Canvas v1.33.0 with separately pinned services and extensions

- **Date:** 2026-10-24 (pointer observations); 2026-10-23 (Canvas v1.33.0 publication)
- **Channel:** `tagged-release`
- **Ancestry evidence:** Canvas v1.33.0 is the newest non-prerelease in the original 09:40:54Z release ledger and independent 10:17:55Z read. Its tagged defaults and package metadata establish the coordinated versions; pointer times remain the exact individual reads in Install today.
- **Receipt:** [Canvas release](https://github.com/OpenHands/OpenHands/releases/tag/v1.33.0), [tagged install instructions](https://github.com/OpenHands/OpenHands/blob/v1.33.0/README.md), [package and extensions pin](https://github.com/OpenHands/OpenHands/blob/v1.33.0/package.json), [service defaults](https://github.com/OpenHands/OpenHands/blob/v1.33.0/config/defaults.json), [Canvas registry](https://registry.npmjs.org/@openhands%2fagent-canvas), [Enterprise 1.79.0](https://github.com/OpenHands/enterprise/releases/tag/1.79.0), [Enterprise component update](https://github.com/OpenHands/enterprise/commit/8b923c3568a8809adbb9b648d2a0ee95d5cc527a)
- **Half:** capability | **Confidence:** high

**What changed.** As observed on 24 October, npm latest selects Canvas 1.33.0; alpha/beta selectors are older publications. Install `npm install -g @openhands/agent-canvas@1.33.0`, then `agent-canvas`, with Node >=24 and uv, or use the release's desktop assets. The all-in-one image can be pinned to `ghcr.io/openhands/agent-canvas:1.33.0`; its latest and version selectors returned the same digest at their recorded reads. The bundle pins agent-server 1.58.1, automation 1.25.1 and extensions 0.35.0, and rejects remote servers below 1.55.0. Enterprise source 1.79.0 is separate, with Compose selecting Canvas 1.32.0 plus SDK 1.58.1 and automation 1.25.1. The Canvas beta-badge removal is not an operational guarantee.

**Operator consequence.** Coordinate separately managed services and pin both outer Canvas and any inner conversation-server image. Keep licensed Enterprise distribution and Cloud serving identity separate from public source releases. Selectable Docker and Enterprise child launching are opt-ins with the exact network/gate qualifications in section 6; the DigitalOcean bridge requires `MARS_WEB=1`. Session-key argv removal, ACP OAuth forwarding and Debian CA repair remain on the inspected main branches, outside the current stable bundle. No install or container was executed.

## Prior claims re-checked

Each active claim below was checked against the newest relevant source tag. A source-level hold does not claim that a live deployment passed its acceptance test.

- `automation-permissions-run-as`: holds at Canvas v1.33.0 / automation 1.25.1, with the draft-permission extension in section 8. The [UI permission and ownership resolver](https://github.com/OpenHands/OpenHands/blob/v1.33.0/src/hooks/use-automation-permissions.ts), [run-as display](https://github.com/OpenHands/OpenHands/blob/v1.33.0/src/components/features/automations/detail/configuration-section.tsx), and [automation routes](https://github.com/OpenHands/automation/blob/1.25.1/openhands/automation/router.py) retain creator and management distinctions. Local mode remains effectively single-user authority.
- `lan-key-policy`: holds at Canvas v1.33.0. [Bind policy](https://github.com/OpenHands/OpenHands/blob/v1.33.0/scripts/bind-host.mjs) retains loopback defaults and blocks off-loopback key injection without the explicit LAN override. A Docker default deliberately alters the bind; selectable mode alone is absent from the launcher's bind/host-alias checks despite the docs, so verify its reachability explicitly.
- `docker-auth-env-gap`: holds at Canvas v1.33.0 / SDK v1.58.1. The [entrypoint's key branch](https://github.com/OpenHands/OpenHands/blob/v1.33.0/docker/entrypoint.sh#L210-L239) still skips server-key export when only `LOCAL_BACKEND_API_KEY` is set; [authentication](https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/openhands-agent-server/openhands/agent_server/dependencies.py) remains conditional on a nonempty configured key list. [Issue 17763](https://github.com/OpenHands/OpenHands/issues/17763) was still open at the read. Section 15 is not this repair.
- `docker-package-repair`: holds as a source and release-history claim at Canvas v1.33.0. The [Docker workflow](https://github.com/OpenHands/OpenHands/blob/v1.33.0/.github/workflows/docker.yml) still smoke-tests the built image before promoting stable tags, using the configured service pins. The current manifest selector was checked; the image was not booted, and the upstream CI recipe is not this researcher's runtime evidence.
- `local-terminal-secret-path`: holds as a code-derived exposure path at Canvas v1.33.0 / SDK v1.58.1; changed only in the narrower tmux repair (section 3). The [launcher alias](https://github.com/OpenHands/OpenHands/blob/v1.33.0/scripts/dev-with-automation.mjs#L927-L935), [sanitizer](https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/openhands-sdk/openhands/sdk/utils/command.py), and [unscoped raw-secret route](https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/openhands-agent-server/openhands/agent_server/settings_router.py#L539-L569) still compose the path. No live retrieval was attempted.
- `whole-conversation-docker`: holds at SDK v1.58.1, expanded by selectable runtimes in section 6. The [container registry](https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/openhands-agent-server/openhands/agent_server/docker_runtime/registry.py) constructs a separate server and credentials rather than copying the entire outer environment; [secret updates](https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/openhands-agent-server/openhands/agent_server/docker_runtime/routers.py) remain profile-filtered. Explicit telemetry forwarding and client-replaceable resource defaults qualify any blanket isolation claim.
- `conditional-profile-fallback`: changed (section 1). The old local fallback no longer describes [v1.33.0's launch resolver](https://github.com/OpenHands/OpenHands/blob/v1.33.0/src/hooks/mutation/resolve-conversation-launch.ts). Local launches use the profile ID, including `default`, and a separate LLM override. The conditional Cloud fallback still exists; do not generalize the local correction to it.
- `remote-server-floor`: superseded. [Canvas v1.33.0 requires 1.55.0](https://github.com/OpenHands/OpenHands/blob/v1.33.0/config/defaults.json), not the profile's 1.51.0. The bundled server is 1.58.1.
- `credential-telemetry-repairs`: holds at Canvas v1.33.0 / SDK v1.58.1. [Settings caches](https://github.com/OpenHands/OpenHands/blob/v1.33.0/src/api/settings-service/settings-service.api.ts) remain partitioned by backend, connection revision and exposure mode; [telemetry](https://github.com/OpenHands/OpenHands/blob/v1.33.0/src/services/telemetry.ts) checks consent and Do Not Track; [confirmation shortcuts](https://github.com/OpenHands/OpenHands/blob/v1.33.0/src/components/shared/buttons/conversation-confirmation-buttons.tsx) suppress repeat/submitted responses; [archives](https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/openhands-agent-server/openhands/agent_server/file_router.py) exclude top-level `acp/`. These do not establish the local terminal boundary.
- `acp-engines-and-models`: holds at Canvas v1.33.0 / SDK v1.58.1. [Pi and OpenCode remain local-only entries](https://github.com/OpenHands/OpenHands/blob/v1.33.0/src/constants/acp-providers.ts); [ACP model information](https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/openhands-sdk/openhands/sdk/agent/acp_models.py) retains server-provided model IDs. The additional MCP OAuth forwarding repair is still unreleased (section 12).
- `automation-assistant-and-transcripts`: holds at Canvas v1.33.0 / Enterprise 1.79.0. The [setup panel](https://github.com/OpenHands/OpenHands/blob/v1.33.0/src/components/features/automations/setup/automation-setup-panel.tsx) still consumes agent-updated form fields and supports saving/testing drafts; the [shared-conversation service](https://github.com/OpenHands/enterprise/blob/1.79.0/server/sharing/sql_shared_conversation_info_service.py) still admits authenticated org members to non-deleted automation conversations in their org. Cloud deployment and cross-member behavior remain unverified.
- `router-prompt-and-toggle`: changed (section 1). The prior caveat that named profiles miss inline router setup is superseded by [profile-owned routing behavior](https://github.com/OpenHands/OpenHands/blob/v1.33.0/src/api/agent-profiles-service/profile-behavior.ts) and the [per-profile router change](https://github.com/OpenHands/OpenHands/commit/3bf5e85c01dce3cc1a8ebdfce5cd801bd133dd27). The operator still needs to inspect actual routing calls and profile enablement; this is not hard enforcement of classifier use or cost.
- `delegated-tool-mcp-limits`: holds and is strengthened at SDK v1.58.1 (section 4). [Current scope code](https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/openhands-sdk/openhands/sdk/subagent/scope.py) gives children exactly the parent's MCP configuration and separately restricts tools. No adversarial runtime rejection suite was run.
- `residual-dependency-version-alerts`: holds at the current locks. [SDK v1.58.1](https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/uv.lock) still selects PyJWT 2.14.0 and fsspec 2025.9.0; [automation 1.25.1](https://github.com/OpenHands/automation/blob/1.25.1/uv.lock) selects fsspec 2026.3.0. [CVE-2026-101918 / GHSA-42vr-xj54-vc7v](https://github.com/advisories/GHSA-42vr-xj54-vc7v) allows denial of service by crashing a pre-verification JWT parsing/auth handler with deeply nested JSON, patched in 2.15.0; it is not signature forgery. [CVE-2026-104851 / GHSA-27vj-qcqg-25rc](https://github.com/advisories/GHSA-27vj-qcqg-25rc) concerns Python execution through attacker-controlled ReferenceFileSystem templates, patched in 2026.6.0. Enterprise's current lock has PyJWT 2.15.0 and fsspec 2026.9.0; automation has PyJWT 2.15.1. This is component-specific version matching, not a traced reachable OpenHands exploit.
- `enterprise-key-export-and-proxy-switch`: holds at Enterprise 1.79.0. [OrgService.check_byor_export_enabled](https://github.com/OpenHands/enterprise/blob/1.79.0/storage/org_service.py#L867-L913) still refuses non-billing exports without `ENABLE_BYOR_EXPORT`; [constants](https://github.com/OpenHands/enterprise/blob/1.79.0/server/constants.py) keep that false and `ENABLE_LEGACY_LITELLM` true by default. A code upgrade does not revoke previously minted external proxy keys.
- `member-create-and-cloud-compatibility`: holds in released source, extended by section 8. [Automation routes](https://github.com/OpenHands/automation/blob/1.25.1/openhands/automation/router.py) retain creator authority, [draft routes](https://github.com/OpenHands/automation/blob/1.25.1/openhands/automation/draft_router.py) now support members' own preparation work, and [Canvas's resolver](https://github.com/OpenHands/OpenHands/blob/v1.33.0/src/hooks/mutation/resolve-conversation-launch.ts) retains Cloud-specific compatibility handling. This is not Cloud acceptance evidence.
- `gemini-model-correctness`: holds as a transport repair at SDK v1.58.1. [ACP model application and legacy session/set_model transport](https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/openhands-sdk/openhands/sdk/agent/acp_agent.py) remain present. A live engine's requested and reported model was not measured; a correct transport is not proof of the selected vendor model or its cost.
- `unreleased-secret-requests`: superseded by Canvas v1.28.0 and present in [v1.33.0's request service](https://github.com/OpenHands/OpenHands/blob/v1.33.0/src/services/secret-request.ts). Section 2 establishes release and source-level filtering, not the outstanding local/Docker acceptance test.
- `install-channel-at-cutoff`: superseded as advice for today, while still historically true at the old cutoff. [Canvas v1.33.0 pins server 1.58.1 and automation 1.25.1](https://github.com/OpenHands/OpenHands/blob/v1.33.0/config/defaults.json). Registry selectors, the new server floor and separate Enterprise version are recorded above.

The ten bolded "Where it stands" paragraphs were also checked individually:

- **Pin the install and coordinate its services:** changed. [v1.33.0's pins](https://github.com/OpenHands/OpenHands/blob/v1.33.0/config/defaults.json) replace v1.27.1/1.54.0/1.19.3; the server floor rises to 1.55.0. The [README](https://github.com/OpenHands/OpenHands/blob/v1.33.0/README.md) no longer carries the old beta badge. The principle of coordinated, pinned services holds.
- **Keep production secrets off the default local runtime:** holds as the conservative consequence of the current [alias export](https://github.com/OpenHands/OpenHands/blob/v1.33.0/scripts/dev-with-automation.mjs#L927-L935), [sanitizer](https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/openhands-sdk/openhands/sdk/utils/command.py) and [saved-secret route](https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/openhands-agent-server/openhands/agent_server/settings_router.py#L539-L569). Section 3 does not close the path.
- **Give the Docker image its server key before exposing the port:** holds at v1.33.0. The [entrypoint](https://github.com/OpenHands/OpenHands/blob/v1.33.0/docker/entrypoint.sh#L210-L239) still requires consistent configuration to avoid the gap. A UI prompt is not a substitute for rejection by [protected API routes](https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/openhands-agent-server/openhands/agent_server/api.py).
- **Use whole-conversation containers when separation matters:** holds with a new resource-control qualification (section 6). Pin the inner server to 1.58.1 and use the [current runtime guide](https://github.com/OpenHands/docs/blob/f742b438db2d5a2d316ebea67a18c46b4ab56a48/openhands/usage/agent-canvas/backend-setup/docker-execution.mdx); execution-only settings do not replace whole-conversation isolation, and request limits are not ceilings.
- **Review older reachable installs for credential exposure:** holds. The repaired [current bind policy](https://github.com/OpenHands/OpenHands/blob/v1.33.0/scripts/bind-host.mjs) does not erase exposure from older deployments. Rotation now has the [SDK migration mechanism](https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/openhands-agent-server/openhands/agent_server/README.md#L273-L286), with separate automation-store and provider-key responsibilities.
- **Verify the profile before enabling delegation:** changed in mechanism, still useful as an acceptance step. The old local global-settings fallback is gone from [the resolver](https://github.com/OpenHands/OpenHands/blob/v1.33.0/src/hooks/mutation/resolve-conversation-launch.ts); [profile public-skill selection](https://github.com/OpenHands/OpenHands/blob/v1.33.0/src/api/agent-profiles-service/profile-behavior.ts) and [exact child MCP inheritance](https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/openhands-sdk/openhands/sdk/subagent/scope.py) strengthen the intended path. Live nested-authority tests remain open.
- **Approve future work under the right identity:** holds at v1.33.0 / automation 1.25.1. The [creator display](https://github.com/OpenHands/OpenHands/blob/v1.33.0/src/components/features/automations/detail/configuration-section.tsx) and [backend routes](https://github.com/OpenHands/automation/blob/1.25.1/openhands/automation/router.py) preserve the identity question. New plugin entrypoints and member drafts expand what must be reviewed (sections 7 and 8).
- **Keep shared run output free of credentials:** holds at Enterprise 1.79.0 / SDK v1.58.1. [Org-readable automation conversations](https://github.com/OpenHands/enterprise/blob/1.79.0/server/sharing/sql_shared_conversation_info_service.py) remain a reason to inspect output; [trajectory archive exclusions](https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/openhands-agent-server/openhands/agent_server/file_router.py) remain a separate repair. No Cloud serving receipt was obtained.
- **Upgrade Enterprise separately and revoke unwanted key exports:** holds at 1.79.0. [The export gate](https://github.com/OpenHands/enterprise/blob/1.79.0/storage/org_service.py#L867-L913) and [license](https://github.com/OpenHands/enterprise/blob/1.79.0/LICENSE) remain. Neither a Canvas upgrade nor source remediation demonstrates external key revocation.
- **Verify model identity before trusting a cost baseline:** holds, with the router caveat updated. [ACP model transport](https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/openhands-sdk/openhands/sdk/agent/acp_agent.py) supports the earlier repair, while [per-profile router behavior](https://github.com/OpenHands/OpenHands/blob/v1.33.0/src/api/agent-profiles-service/profile-behavior.ts) supersedes the named-profile omission. Record requested/reported models and actual classifier calls in the installed engine.

## Carry-forward answers

- `stance.watch_next`, a released credential repair passing local and Docker tests: **no closure**. Tmux sanitization ships (section 3), but the [alias export](https://github.com/OpenHands/OpenHands/blob/v1.33.0/scripts/dev-with-automation.mjs#L927-L935) and [raw-secret route](https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/openhands-agent-server/openhands/agent_server/settings_router.py#L539-L569) remain. No local/Docker credential acceptance run was performed.
- Require live tests before trusting credential limits: **still open**. A current test must inspect the effective terminal environment and demonstrate denial of a saved secret excluded by the selected profile, in both modes. The [current sanitizer](https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/openhands-sdk/openhands/sdk/utils/command.py) and [container construction](https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/openhands-agent-server/openhands/agent_server/docker_runtime/registry.py) establish source behavior, not universal denial.
- Test delegated authority at runtime: **still open**, with stronger released code. [Exact parent MCP inheritance](https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/openhands-sdk/openhands/sdk/subagent/scope.py) is now present. Extra-tool, extra-MCP and nested-delegation rejection need independent runtime evidence.
- Accept Docker auth repair only after release and rejection: **no**. [Current entrypoint](https://github.com/OpenHands/OpenHands/blob/v1.33.0/docker/entrypoint.sh#L210-L239) retains the custom-key gap and [17763](https://github.com/OpenHands/OpenHands/issues/17763) remains open. Test protected `GET /api/conversations/search` without `X-Session-API-Key`, not public server-info availability. No rejection test was run.
- Wait for a tested secret-request release: **yes on release, still open on acceptance**. It first ships in v1.28.0; [v1.33.0's handler](https://github.com/OpenHands/OpenHands/blob/v1.33.0/src/services/secret-request.ts) and both [local](https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/openhands-agent-server/openhands/agent_server/event_service.py) and [Docker](https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/openhands-agent-server/openhands/agent_server/docker_runtime/routers.py) filters were traced. A saved-but-excluded secret can still produce a UI success after filtering, so inspect the effective credential result.
- Check Cloud serving version and cross-member transcript read: **still open**. [Enterprise 1.79.0's rule](https://github.com/OpenHands/enterprise/blob/1.79.0/server/sharing/sql_shared_conversation_info_service.py) is confirmed; a dated Cloud deployment identity and cross-member test were not obtained.
- Trace installed dependencies and endpoint impact: **still open**. [SDK](https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/uv.lock) and [automation](https://github.com/OpenHands/automation/blob/1.25.1/uv.lock) retain the specific PyJWT/fsspec version alerts described above. The installed resolution and reachable JWT pre-verification/ReferenceFileSystem consumers were not established. The separate LiteLLM incident was checked against current published constraints, not assumed to affect OpenHands (section 13).
- Parent main-only leads: **secret requests reached stable; the bridge default shipped and was reversed** (sections 2 and 11). The parent contained no separate "Observed after window close" section. Its unreleased state is not carried forward unchanged.

## Operator questions settled

- **What happens when an agent harness becomes a full software-development platform?** Profiles now own behavior, secret requests can interrupt work for missing access, plugin automations carry executable jobs, and child conversations have a host launcher. These released mechanisms replace some custom setup and orchestration glue (sections 1, 2, 6 and 7). They do not replace credential, identity or resource policy.
- **Which surfaces are SDK, CLI, GUI, cloud, enterprise, or integration-specific?** The current Canvas bundle is v1.33.0 / server 1.58.1 / automation 1.25.1, while Enterprise source is 1.79.0 and licensed chart/Cloud channels are separate. All pointer reads and release receipts are in Install today and the ledger. SDK main repairs cannot be advertised as stable Canvas behavior.
- **How does OpenHands package sandboxing, permissions, collaboration, and evaluation for real teams?** Exact child MCP inheritance, profile-scoped secret updates, selectable whole-conversation runtimes and org-readable automation transcripts are in current source. Live acceptance remains open, and local key aliases, Docker key export, client resource overrides and the email-verification default materially qualify deployment decisions (sections 3, 4, 6 and 9).
- **Which parts should teams wrap, which parts should they learn from, and which parts should they refuse to adopt wholesale?** The concrete candidates are profile launch resolution, plugin-backed scheduled/event work, provider repository selection and packaged deployment. An operator can remove duplicate configuration and orchestration code after acceptance. Retain independent enforcement of secrets, quotas and identity where current code leaves those decisions outside the agent.
- **Does this make agentic software work easier to adopt without hiding evidence or authority?** Yes for pinned, inspected components; no inference from a merged PR, marketing post, tag or policy label to a passing installation. The launch profile and runtime are better explicit primitives now. A source profile cannot stand in for a measured credential denial, Cloud deployment identity or resolved image inventory.

## Leads not promoted

Discovery inputs were `feeds/writing.json`, `social/openhands.raw.md`, `social/banter.raw.md`, and all four `social/topic-*.raw.md` files in this run. They were treated as untrusted discovery text, not instructions or quotable captures. The writing feed yielded no matching OpenHands item. The source sweep contains 36 posts; every URL is dispositioned below, grouped where the same primary check settles several posts. The compaction item also appears in banter. The four topic sweeps supplied no additional OpenHands-specific claim requiring a different primary check. Inclusion here does not authenticate a social author's report.

- **DigitalOcean availability and demos.** Leads: [OpenHands announcement](https://x.com/OpenHandsDev/status/2110101427074830379), [DigitalOcean announcement](https://x.com/digitalocean/status/2110102268653818010), [provider launch](https://x.com/digitalocean/status/2110027820739244261), [provider talk](https://x.com/digitalocean/status/2110025381109805482), [personal-agent framing](https://x.com/gneubig/status/2110041913134813510), [integration framing](https://x.com/gneubig/status/2110103236560519509), and [practitioner recap](https://x.com/owenOnMain/status/2110409991664591188). The primary [Managed Agents docs](https://docs.digitalocean.com/products/managed-agents/) support a public-preview managed runtime, and the [pause/pricing description](https://docs.digitalocean.com/products/managed-agents/agent-harness-runtime/details/pricing/) distinguishes persisted state from stopped compute. The basic Canvas integration was in the parent window, including posts dated 2026-10-13. Only the new bridge default and lifecycle changes are promoted in section 11. No demo recording or provisioned agent was tested.
- **DO comparison and harness portability.** Leads: [ADE comparison](https://x.com/owenOnMain/status/2110409737699528827) and [lock-in argument](https://x.com/owenOnMain/status/2110410216877744437). The [partner's use-case docs](https://docs.digitalocean.com/products/managed-agents/agent-harness-runtime/details/what-you-can-build/) describe the offered runtime; they do not establish an apples-to-apples benchmark or migration cost. No comparative performance finding is promoted.
- **NVIDIA model launch.** [OpenHands post](https://x.com/OpenHandsDev/status/2110773775209758810) led to the [official Nemotron 3.5 Super VL blog](https://hub.openhands.dev/blog/nvidia-nemotron-3.5-super-vl). This is primary evidence of the vendor's availability/launch statement, not independent evidence of a new default, workload quality or reduced review time. No separate harness capability conclusion was derived from promotional evaluation claims.
- **Flint launch.** [OpenHands post](https://x.com/OpenHandsDev/status/2112985107912880538) led to the [official Recursive Flint article](https://hub.openhands.dev/blog/recursive-flint-on-openhands). The article establishes the launch statement. No reproducible evaluation establishing its comparative operator benefit was obtained, so it is not promoted as a performance result.
- **Old Canvas feature recaps.** [Local ACP recap](https://x.com/i17s_inc/status/2109917322475716678) and [v1.27 recorder/verification recap](https://x.com/tinkerlog/status/2111502929332986299) concern capabilities already in the parent release interval. The [v1.27.0 release](https://github.com/OpenHands/OpenHands/releases/tag/v1.27.0) and current [engine list](https://github.com/OpenHands/OpenHands/blob/v1.33.0/src/constants/acp-providers.ts) settle release identity; a later recap is not a new release event.
- **Small-model performance, temperature and Harbor failure.** Leads: [one-tool experiment](https://x.com/yb2698/status/2110392738646806923), [temperature comparison](https://x.com/yb2698/status/2110392851934974064), and [Harbor regression report](https://x.com/yb2698/status/2110392868489863587). The current SDK [LLM configuration](https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/openhands-sdk/openhands/sdk/llm/llm.py) defaults `temperature` to `None`, so the reported comparison cannot establish that today's default is zero. No exact failing Harbor revision, issue or repair was identified from the lead. The posts may describe their own configuration, but neither a current OpenHands regression nor the reported comparative score is verified.
- **Default-local-runtime criticism.** [Practitioner report](https://x.com/wiksongkim/status/2112484665516802486) is consistent with [the current runtime guide's local default and Docker opt-in](https://github.com/OpenHands/docs/blob/f742b438db2d5a2d316ebea67a18c46b4ab56a48/openhands/usage/agent-canvas/backend-setup/docker-execution.mdx). That source-level fact already belongs in the profile. The post does not prove that all OpenHands modes lack isolation, and the current README's removed beta badge is not a security test.
- **Overeager agent study and critiques.** Leads: [study summary](https://x.com/nextaurame/status/2112430972868186280), [settings critique](https://x.com/SicanianSun/status/2112431527489650973), and [runtime critique](https://x.com/0xwolverines/status/2112449452959314257). The primary [Overeager Coding Agents paper](https://arxiv.org/abs/2605.18583), submitted 2026-05-18, evaluates permission behavior over its particular scenarios and configurations. It is outside the window and is not an acceptance test of Canvas v1.33.0 with whole-conversation Docker. No new product defect or fair-comparison result is inferred from the social exchange.
- **Per-chat Docker request.** [Practitioner post](https://x.com/dilemma017/status/2113035064338415732) points toward per-conversation isolation. Whole-conversation Docker was already released in the parent window; this window adds [selectable runtimes](https://github.com/OpenHands/software-agent-sdk/commit/77c6ee584101b929fbb50b7b09a66d3a5a0a1053). Section 6 promotes that proven delta. The exact posted issue/PR and its requested acceptance condition were not independently identified, so it is not marked resolved merely because a similarly named feature exists.
- **NVIDIA OpenShell support claim.** [Talk recap](https://x.com/carrioresearch/status/2112844993396154703) was chased through primary NVIDIA searches. No matching official shipping matrix, integration commit or talk transcript was reached. It is not promoted as a current OpenHands runtime integration.
- **LiteLLM compromise alarm.** [Security lead](https://x.com/keiagi/status/2113079344432341017) was checked against the [supplier's canonical incident account](https://docs.litellm.ai/blog/security-incident-oct-21-2026-attack-chain) and [SDK 1.58.1's published constraints](https://pypi.org/pypi/openhands-sdk/1.58.1/json). The compromised version is established; current SDK constraints exclude it. Section 13 promotes the dependency consequence, not a claim that OpenHands users were compromised. Installed-package history remains unverified.
- **Same-model harness comparison and daily-driver opinion.** Leads: [Claude comparison](https://x.com/dohewater/status/2113180945968951619) and [cost/value opinion](https://x.com/GaoXiaoxiao2022/status/2113182435542499377). No matching reproducible task set, exact versions, permission settings and cost ledger were obtained. The current [ACP model representation](https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/openhands-sdk/openhands/sdk/agent/acp_models.py) supports recording model identity, not the comparison's conclusion. No performance or cost ranking is promoted.
- **Software-factory livestream.** [Maintainer announcement](https://x.com/gneubig/status/2113643262900662423) establishes a lead to a planned or public demonstration, not its outcome. No recording was reviewed. Packaged automation advances are independently sourced in sections 7, 8 and 17; no claim about the demonstration's success or autonomy is made.
- **PAUSE research.** [Lead](https://x.com/leviqiao/status/2113419767403200589) led to [the paper's dated version](https://arxiv.org/html/2610.29870v1), submitted 2026-10-21. Table 6 reports OpenHands with a Qwen3-Coder-30B-A3B executor and GPT-5.6 Sol planning intervention improving from 227/500 to 311/500 on the stated benchmark, with extra executor and planner cost. This is a research recipe applied through a pre-edit confirmation intervention, not a released default OpenHands feature or a guaranteed improvement for other model/task pairs. It is a useful experiment lead, not promoted as a stable product capability.
- **Compaction authority laundering.** Leads: [first report](https://x.com/cristian_le0/status/2113658709981163933) and [follow-up](https://x.com/cristian_le0/status/2113658712472564005), also present in banter. The [paper](https://arxiv.org/html/2610.29869v1), submitted 2026-10-21, tests OpenHands SDK commit [c11602d122e26fc8fa6668afa92caeae68ff7b51](https://github.com/OpenHands/software-agent-sdk/commit/c11602d122e26fc8fa6668afa92caeae68ff7b51), dated 2026-08-13. Its OpenHands laundering result is 14/15, with a smaller conditional execution test; the social cross-system percentages are not a current-stable acceptance result. At v1.58.1 the [condenser](https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/openhands-sdk/openhands/sdk/context/condenser/llm_summarizing_condenser.py) still passes serialized events as text to the summarizer, and the [event template](https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/openhands-sdk/openhands/sdk/context/condenser/prompts/summarizing_events.j2) wraps that text. This preserves a mechanism worth testing, but no latest-tag reproduction or verified fix was obtained. Do not transplant the paper's attack success rate onto 1.58.1.
- **Cost study.** [Lead](https://x.com/atscollab/status/2112894524070703446) led to [the authors' paper, v3](https://arxiv.org/abs/2604.22750v3), revised 2026-10-02. It is outside this window and is not a current Canvas release comparison. No new product change or universal cost ratio is promoted.
- **IBM trace analysis.** [Lead](https://x.com/CuriousDevX/status/2110200336552284541) led to [IBM's primary publication page](https://research.ibm.com/publications/process-centric-analysis-of-agentic-software-systems), dated 2026-10-03. Its 4,000-trace analysis and interventions concern the study's tested instances. The paper predates this window and does not validate the latest shipped defaults, so it is retained as research context only.
- **VPC preference and workflow-engine comparison.** Leads: [VPC argument](https://x.com/patchw1se/status/2113758871751946255) and [Prefect comparison](https://x.com/hshi_k/status/2112558226424389829). Current [Enterprise source licensing](https://github.com/OpenHands/enterprise/blob/1.79.0/LICENSE) and [Compose packaging](https://github.com/OpenHands/enterprise/commit/aeca9943f56d6d6f75ae94336c060dacc9031c3e) establish available components, not those architectural opinions' universal validity. No measured reliability, maintenance or sovereignty comparison was obtained.
- **SageRouter score.** [Lead](https://x.com/zenzhenyu/status/2112188733764280612) reports a small routing experiment. Searches did not locate a primary run record matching the stated 19-task setup; similarly named repositories were not treated as identity matches. No score or product superiority claim is promoted. Current profile-owned routing is separately established in section 1.
- **Vendor score and quantization warning.** [Lead](https://x.com/Decoded08/status/2112808653690392932) lacks enough pinned model/harness/evaluation information to independently recover the claimed comparison. No corresponding primary result was verified. It does not become an OpenHands benchmark or a new defect finding.
- **Teams Plus pricing claim.** [Lead](https://x.com/heyedzon/status/2113691263266672939) was checked against [the current official pricing page](https://www.openhands.dev/pricing) on 2026-10-24. That page shows Agent Canvas free, Teams at $499/month including up to ten users with additional seats, and custom Enterprise pricing; it does not list Teams Plus. No dated earlier price page or account notice was obtained to prove a removal during this window or the terms applied to existing subscribers. No in-window billing change is promoted.

## Surfaces checked

- Publication authorities: THESIS.md, METHOD.md, EDITORIAL.md, CONTRIBUTING.md, the source contract and notes, current profile, parent OpenHands harvest, parent Codex specimen, researcher brief, and the frontier-cycle Frontier lens. The full publication workflow was not invoked.
- GitHub repositories and tags: Canvas v1.27.1..v1.33.0, SDK v1.54.0..v1.58.1, automation 1.19.3..1.25.1, Enterprise 1.71.0..1.79.0, and each fetched main comparison named in Install today. Local merge-base checks resolved first-containing stable tags for the named changes. Baseline and current config, process environment, launch/profile, secret-update, container, authentication, dependency, sharing and model paths were re-read. Docs were pinned to f742b438db2d5a2d316ebea67a18c46b4ab56a48 and relevant earlier commits.
- GitHub release objects, prerelease flags, npm Canvas and TypeScript-client metadata, PyPI SDK/agent-server/automation metadata, and anonymous Canvas GHCR manifests. Publication and pointer read times are recorded above. Standalone CLI latest was checked separately. No code or image execution was used to infer release contents.
- Public repository security-advisory inventories read on 2026-10-24 at 09:39:41.651530Z for [Canvas](https://api.github.com/repos/OpenHands/OpenHands/security-advisories), and at 09:39:42Z..09:39:43Z for [SDK](https://api.github.com/repos/OpenHands/software-agent-sdk/security-advisories), [automation](https://api.github.com/repos/OpenHands/automation/security-advisories), and [Enterprise](https://api.github.com/repos/OpenHands/enterprise/security-advisories). Canvas returned the earlier [CVE-2026-33718 / GHSA-7h8w-hj9j-8rjw](https://github.com/OpenHands/OpenHands/security/advisories/GHSA-7h8w-hj9j-8rjw), published 2026-03-23. That advisory allows an authenticated caller to inject shell commands through the legacy git-diff path parameter and execute commands in the agent sandbox; its canonical package range is <=1.4.0, patched in 1.5.0, not a new v1.33.0 advisory. The other three lists were empty. No new advisory was returned by those public inventories. This bounded negative does not mean there were no security repairs or private reports.
- The issue record for [17763](https://github.com/OpenHands/OpenHands/issues/17763) remained open; [16492](https://github.com/OpenHands/OpenHands/issues/16492), concerning origin-readable local storage, also remained open. Neither a masked field nor argv removal was accepted as a repair of the same-origin-script issue.
- Discovery: writing feed, `openhands.raw.md`, `banter.raw.md`, `topic-agent-challengers.raw.md`, `topic-coding-agent-landscape.raw.md`, `topic-cursor-origin.raw.md`, and `topic-pi-ecosystem.raw.md`. Primary follow-ups include DigitalOcean docs, OpenHands model-launch/pricing pages, the LiteLLM incident account, certifi/PyJWT/fsspec advisories, arXiv papers and IBM's publication page. No social text was quoted.

## Not reached

- No installed Canvas, desktop, container, agent-server, automation, plugin or Enterprise runtime was launched or tested. Local/Docker secret isolation, nested delegation rejection, protected-route 401 behavior, key migration, SAML/OAuth login, provider integrations and per-conversation limits remain source inspections, not measured acceptance.
- Cloud serving SHA/version, rollout timing, org-to-org or member-to-member transcript checks, production identity-provider configuration and external key revocation were not obtained. Released Enterprise code is not a receipt for hosted behavior.
- Authenticated Replicated/Helm selectors, licensed image publication times, Runtime API release ancestry and full OS-layer dependency inventories were not audited. Public docs identify those surfaces but do not establish their latest installable versions for a particular account.
- Only Canvas GHCR selector equality was checked. No multi-architecture boot, image filesystem, provenance attestation or historical tag-movement audit was performed. Other registry image digests remain unverified.
- Installed PyJWT/fsspec reachability, independently resolved older LiteLLM environments, and the credentials or machines affected by the supplier incident remain unverified. Lockfiles and package constraints alone do not prove endpoint exploitation or compromise.
- No current-stable reproduction of the compaction paper, exact Harbor failure/repair, exact per-chat Docker issue acceptance, SageRouter run, comparative harness cost benchmark, OpenShell shipping integration, livestream outcome or historical Teams Plus pricing transition was established. The specific evidence boundaries are recorded with the leads above.
- No publication build, dependency installation, upstream test suite or git write operation in the publication checkout was run. This author pass writes only this harvest, its generated OpenHands findings, and the two assigned draft files.

## Crosscheck applied

Applied C1 through C6 from `verify/openhands.crosscheck.md`: corrected Cloud fallback conditions, gated Enterprise child launching, documented the selectable-mode docs/source network mismatch, scoped the SaaS remote-sandbox quota and reservation settlement, split MCP release dates and probe conditions, and explained security consequences and affected ranges. No numbered section was REFUTED or UNVERIFIABLE, so none was deleted or demoted. Added all fourteen independently re-read misses as sections 16 through 29, plus section 30 to make the installation snapshot available to the finding converter.

Miss receipts were checked by read-only git object/file reads in the independent no-checkout clones. Seventeen first-containing checks returned previous=1, first=0, newest=0; no cloned code ran. Missing cached blobs were read through GitHub's read-only API without modifying the clones. Extensions release objects were re-read at approximately 2026-10-24T10:40Z; author receipt verification ended at 2026-10-24T10:41:02Z. Original mutable selector observations retain their own exact UTC times, including the extensions npm read at 10:29:09.151243Z. The original four-stream count stays 33; six extensions releases make 39 across the five streams. Live acceptance and hosted serving identity remain unverified.
