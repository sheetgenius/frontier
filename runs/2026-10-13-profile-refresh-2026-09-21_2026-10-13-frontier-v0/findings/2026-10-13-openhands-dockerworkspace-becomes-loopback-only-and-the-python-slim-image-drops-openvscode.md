---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-openhands-dockerworkspace-becomes-loopback-only-and-the-python-slim-image-drops-openvscode
source: openhands
source_contract: sources/openhands.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/OpenHands/software-agent-sdk/commit/7b66584ff8899144eb4ce679c2811861342af9de
    precision: commit
  - url: https://github.com/OpenHands/software-agent-sdk/commit/5c6e2589656aeeacedf6a0bd79a725688bb9e872
    precision: commit
  - url: https://github.com/OpenHands/software-agent-sdk/blob/v1.54.0/.github/workflows/server.yml
    precision: tagged_commit_file
  - url: https://github.com/OpenHands/software-agent-sdk/releases/tag/v1.52.0
    precision: github_release
  - url: https://github.com/OpenHands/software-agent-sdk/releases/tag/v1.54.0
    precision: github_release
---
# 2026-10-13-openhands-dockerworkspace-becomes-loopback-only-and-the-python-slim-image-drops-openvscode

DockerWorkspace becomes loopback-only and the python-slim image drops OpenVSCode. The SDK DockerWorkspace changes API and VS Code host-port publication to 127.0.0.1 and preserves the configured session key in its client. This is separate from the already-loopback whole-conversation runtime ports in section 5. SDK v1.54.0 also refreshes the Debian snapshot and urllib3 constraint; the python-slim image build excludes the VS Code capability and sets OH_ENABLE_VSCODE=false. The full image retains it. This is not the Canvas editor removal/reversal, both of which reached v1.26.0.

Channel: tagged-release. Half: both. Date: 2026-10-05 (SDK v1.52.0); 2026-10-09 (SDK v1.54.0); Canvas bundles on October 6 and 12.

Operator consequence: Recheck remote clients that assumed DockerWorkspace published on every interface; use an explicit controlled network path instead. Choose full versus slim agent-server image deliberately if an embedded editor is required. The build definitions were read, not an executed image.

## Receipt
- https://github.com/OpenHands/software-agent-sdk/commit/7b66584ff8899144eb4ce679c2811861342af9de
- https://github.com/OpenHands/software-agent-sdk/commit/5c6e2589656aeeacedf6a0bd79a725688bb9e872
- https://github.com/OpenHands/software-agent-sdk/blob/v1.54.0/.github/workflows/server.yml
- https://github.com/OpenHands/software-agent-sdk/releases/tag/v1.52.0
- https://github.com/OpenHands/software-agent-sdk/releases/tag/v1.54.0
