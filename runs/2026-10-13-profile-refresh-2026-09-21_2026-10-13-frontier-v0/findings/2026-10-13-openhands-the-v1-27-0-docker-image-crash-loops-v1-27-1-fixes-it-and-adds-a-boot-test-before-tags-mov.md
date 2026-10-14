---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-openhands-the-v1-27-0-docker-image-crash-loops-v1-27-1-fixes-it-and-adds-a-boot-test-before-tags-mov
source: openhands
source_contract: sources/openhands.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/OpenHands/OpenHands/pull/18343
    precision: merged_pr
  - url: https://github.com/OpenHands/OpenHands/issues/18342
    precision: official_docs
  - url: https://github.com/OpenHands/OpenHands/releases/tag/v1.27.1
    precision: github_release
  - url: https://github.com/OpenHands/OpenHands/blob/v1.27.1/.github/workflows/docker.yml#L211-L214
    precision: tagged_commit_file
  - url: https://github.com/OpenHands/docs/blob/9daa7e5b5cd49453ce0f571810859a747eab5334/openhands/usage/agent-canvas/troubleshooting.mdx#L209-L226
    precision: tagged_commit_file
---
# 2026-10-13-openhands-the-v1-27-0-docker-image-crash-loops-v1-27-1-fixes-it-and-adds-a-boot-test-before-tags-mov

The v1.27.0 Docker image crash-loops; v1.27.1 fixes it and adds a boot test before tags move. v1.27.0's static server imports the new DigitalOcean web bridge, but the Dockerfile copies server scripts one file at a time and never got lines for it, its eight local imports, or the `ws` package. Per #18343, the `1.27.0` image, and `latest` while it pointed there, exits with ERR_MODULE_NOT_FOUND, and the entrypoint takes the agent and automation servers down with it; under a restart policy it loops. The post-merge image job did fail on main, but the release gate waited only on a job that never starts the image, so 1.27.0 was cut about two hours later. v1.27.1, about 4.5 hours after v1.27.0, copies the modules and adds a smoke test that boots each per-arch image and must pass before the multi-arch `latest` and version tags move. Arch-suffixed tags are still pushed when the test fails. The docs site added a crash-loop troubleshooting entry the same day.

Channel: tagged-release. Half: defect. Date: 2026-10-12.

Operator consequence: Pin the image to `1.27.1` or a digest, never `1.27.0`, and do not auto-pull `latest` into production. A container that pulled `latest` on 2026-10-12 and is restart-looping needs a fresh pull. The new gate only stops images that cannot boot; it tests nothing else, and it does not cover arch-suffixed tags. This is a new failure class next to the parent window's "page ships before its server" pattern: packaging, not pins.

## Receipt
- https://github.com/OpenHands/OpenHands/pull/18343
- https://github.com/OpenHands/OpenHands/issues/18342
- https://github.com/OpenHands/OpenHands/releases/tag/v1.27.1
- https://github.com/OpenHands/OpenHands/blob/v1.27.1/.github/workflows/docker.yml#L211-L214
- https://github.com/OpenHands/docs/blob/9daa7e5b5cd49453ce0f571810859a747eab5334/openhands/usage/agent-canvas/troubleshooting.mdx#L209-L226
