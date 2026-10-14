---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-openhands-v1-25-0-stops-serving-the-session-key-to-the-network-npm-desktop-and-docker-installs-befor
source: openhands
source_contract: sources/openhands.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/OpenHands/OpenHands/releases/tag/v1.25.0
    precision: github_release
  - url: https://github.com/OpenHands/OpenHands/pull/17007
    precision: merged_pr
  - url: https://github.com/OpenHands/OpenHands/issues/16879
    precision: official_docs
  - url: https://github.com/OpenHands/OpenHands/blob/v1.27.1/scripts/bind-host.mjs#L8-L77
    precision: tagged_commit_file
  - url: https://github.com/OpenHands/OpenHands/blob/v1.24.0/docker/entrypoint.sh#L395-L398
    precision: tagged_commit_file
  - url: https://github.com/OpenHands/OpenHands/blob/v1.27.1/README.md#L142-L144
    precision: tagged_commit_file
  - url: https://github.com/OpenHands/docs/blob/9daa7e5b5cd49453ce0f571810859a747eab5334/openhands/usage/agent-canvas/release-notes/v1.25.0.mdx
    precision: tagged_commit_file
---
# 2026-10-13-openhands-v1-25-0-stops-serving-the-session-key-to-the-network-npm-desktop-and-docker-installs-befor

v1.25.0 stops serving the session key to the network; npm, desktop and Docker installs before it exposed the key to anyone who could reach port 8000. Through v1.24.0 the npm `agent-canvas` launcher and the desktop app started the port-8000 ingress on every interface and the static server on `::`, with the stack's session API key written into the served HTML; the Docker image did the same, and its README quickstart published `-p 8000:8000`. Anyone who could reach the port could read the key and use it on the proxied agent-server and automation APIs. The report ([#16879](https://github.com/OpenHands/OpenHands/issues/16879)) was public with reproduction steps from 2026-08-24 and reproduced on v1.16.0. The fixed release shipped 43 days later. v1.25.0 binds npm and desktop listeners to 127.0.0.1 by default, refuses to inject the key when a listener is off loopback (the UI falls back to the API-key prompt used by `--public`), keeps the Docker image key-free unless `AGENT_CANVAS_ALLOW_LAN_SESSION_KEY=true`, and rewrites the Docker quickstart to publish on 127.0.0.1 with that opt-in. With `OH_CONVERSATION_RUNTIME=docker` the launcher deliberately binds the key-free stack to 0.0.0.0 so conversation containers can reach it through host.docker.internal. No advisory was filed, and the docs site's v1.25.0 release notes mention neither the fix nor the Docker behavior change.

Channel: tagged-release. Half: both. Date: 2026-10-06.

Operator consequence: Run v1.25.0 or later (v1.27.1). If you ran v1.24.0 or earlier through npm, the desktop app, or Docker published beyond loopback on a network others could reach, treat the session key as exposed: plan session-key rotation together with encrypted automation-state migration (the automation KV secret is derived from the key unless `AUTOMATION_KV_SECRET` is set), then review saved secrets, automations and recent conversations for activity you did not start. On Docker, do not rotate by setting `LOCAL_BACKEND_API_KEY` alone (section 2). After upgrading, an API-key prompt on a Docker quickstart without the new flags is the fix working. In per-conversation Docker mode, firewall port 8000, because the stack listens on every interface behind the key. Human attention: with no advisories, the ordinary PR and release diff, rather than an advisory alert, carry this warning.

## Receipt
- https://github.com/OpenHands/OpenHands/releases/tag/v1.25.0
- https://github.com/OpenHands/OpenHands/pull/17007
- https://github.com/OpenHands/OpenHands/issues/16879
- https://github.com/OpenHands/OpenHands/blob/v1.27.1/scripts/bind-host.mjs#L8-L77
- https://github.com/OpenHands/OpenHands/blob/v1.24.0/docker/entrypoint.sh#L395-L398
- https://github.com/OpenHands/OpenHands/blob/v1.27.1/README.md#L142-L144
- https://github.com/OpenHands/docs/blob/9daa7e5b5cd49453ce0f571810859a747eab5334/openhands/usage/agent-canvas/release-notes/v1.25.0.mdx
