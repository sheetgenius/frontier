---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-openhands-docker-image-setting-local-backend-api-key-leaves-the-agent-server-with-no-key-at-all-open
source: openhands
source_contract: sources/openhands.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/OpenHands/OpenHands/issues/17763
    precision: official_docs
  - url: https://github.com/OpenHands/OpenHands/blob/v1.27.1/docker/entrypoint.sh#L208-L219
    precision: tagged_commit_file
  - url: https://github.com/OpenHands/software-agent-sdk/blob/v1.54.0/openhands-agent-server/openhands/agent_server/config.py#L227-L237
    precision: tagged_commit_file
  - url: https://github.com/OpenHands/software-agent-sdk/blob/v1.54.0/openhands-agent-server/openhands/agent_server/dependencies.py#L25-L37
    precision: tagged_commit_file
  - url: https://github.com/OpenHands/OpenHands/blob/v1.27.1/README.windows.md#L32
    precision: tagged_commit_file
  - url: https://github.com/OpenHands/OpenHands/blob/v1.27.1/docker/entrypoint.sh#L427
    precision: tagged_commit_file
  - url: https://github.com/OpenHands/software-agent-sdk/blob/v1.54.0/openhands-agent-server/openhands/agent_server/api.py#L456-L523
    precision: tagged_commit_file
---
# 2026-10-13-openhands-docker-image-setting-local-backend-api-key-leaves-the-agent-server-with-no-key-at-all-open

Docker image: setting LOCAL_BACKEND_API_KEY leaves the agent server with no key at all (open #17763, unfixed at v1.27.1 and on main). In the all-in-one Docker image, entrypoint.sh exports `OH_SESSION_API_KEYS_0` only inside the branch that runs when neither `LOCAL_BACKEND_API_KEY` nor `OH_SESSION_API_KEYS_0` is set. The agent server reads only `OH_SESSION_API_KEYS_0` or `SESSION_API_KEY` ([config.py L34-L45](https://github.com/OpenHands/software-agent-sdk/blob/v1.54.0/openhands-agent-server/openhands/agent_server/config.py#L34-L45)), its own field doc says "Empty list implies the server will be unsecured", and `check_session_api_key` passes every request when the list is empty. The static server in front routes `/api` to the agent server without checking the key itself ([entrypoint.sh L427](https://github.com/OpenHands/OpenHands/blob/v1.27.1/docker/entrypoint.sh#L427)). So an operator who sets `LOCAL_BACKEND_API_KEY` gets a UI that asks for a key and an agent server (terminal, files, conversations, settings including secret values) that does not require one. The issue was filed publicly on 2026-09-28 and is labeled bug, priority:low, ready-for-dev. #17007, merged the next day and shipped in v1.25.0, added [README.windows.md L32](https://github.com/OpenHands/OpenHands/blob/v1.27.1/README.windows.md#L32), which tells Docker users publishing on a LAN to "set `LOCAL_BACKEND_API_KEY` to a strong value", and README.md L144 offers it as one of two options. Not affected: the npm launcher, which maps the variable itself ([dev-with-automation.mjs L966](https://github.com/OpenHands/OpenHands/blob/v1.27.1/scripts/dev-with-automation.mjs#L966)), and the Helm chart, which sets `OH_SESSION_API_KEYS_0` directly ([statefulset.yaml L77](https://github.com/OpenHands/OpenHands/blob/v1.27.1/helm/agent-canvas/templates/statefulset.yaml#L77)).

Channel: tagged-release. Half: defect. Date: 2026-09-28.

Operator consequence: On the Docker image through v1.27.1, never set `LOCAL_BACKEND_API_KEY` alone. Set `OH_SESSION_API_KEYS_0` to the same value, or set neither and use the generated key from `$STATE_DIR/api-key.txt`. Before exposing the port, confirm from another machine that a protected `GET /api/conversations/search` request without the `X-Session-API-Key` header gets HTTP 401; server-information and initialization routes have different authentication rules. If you have run the image this way on a reachable port, treat the mounted projects and every saved secret as exposed. Watch #17763 and the next tag's entrypoint.sh; the fix is to export the key outside the `if` block. The setting the README tells you to use is the one that removes the lock, so the human check is the 401, not the prompt in the UI.

## Receipt
- https://github.com/OpenHands/OpenHands/issues/17763
- https://github.com/OpenHands/OpenHands/blob/v1.27.1/docker/entrypoint.sh#L208-L219
- https://github.com/OpenHands/software-agent-sdk/blob/v1.54.0/openhands-agent-server/openhands/agent_server/config.py#L227-L237
- https://github.com/OpenHands/software-agent-sdk/blob/v1.54.0/openhands-agent-server/openhands/agent_server/dependencies.py#L25-L37
- https://github.com/OpenHands/OpenHands/blob/v1.27.1/README.windows.md#L32
- https://github.com/OpenHands/OpenHands/blob/v1.27.1/docker/entrypoint.sh#L427
- https://github.com/OpenHands/software-agent-sdk/blob/v1.54.0/openhands-agent-server/openhands/agent_server/api.py#L456-L523
