---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-agent-zero-v2-14-ships-conditional-dependency-migration-and-user-plugin-precedence
source: agent-zero
source_contract: sources/agent-zero.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/agent0ai/agent-zero/blob/v2.14/extensions/python/startup_migration/_05_framework_dependencies.py
    precision: tagged_commit_file
  - url: https://github.com/agent0ai/agent-zero/blob/v2.14/requirements.txt#L23-L75
    precision: tagged_commit_file
  - url: https://github.com/agent0ai/agent-zero/commit/14c38f4ea75092c8a90581694288a965b2f8755b
    precision: commit
  - url: https://github.com/agent0ai/agent-zero/commit/4dceb49211295d4915b99fc0c531b686f6e6f361
    precision: commit
  - url: https://github.com/agent0ai/agent-zero/blob/v2.14/plugins/_a0_connector/prompts/agent.system.tool.computer_use_remote.md#L4-L18
    precision: tagged_commit_file
  - url: https://github.com/agent0ai/agent-zero/blob/v2.14/plugins/_browser/default_config.yaml
    precision: tagged_commit_file
  - url: https://github.com/agent0ai/agent-zero/blob/v2.14/plugins/_oauth/default_config.yaml
    precision: tagged_commit_file
  - url: https://github.com/advisories/GHSA-v4p8-mg3p-g94g
    precision: official_docs
---
# 2026-10-13-agent-zero-v2-14-ships-conditional-dependency-migration-and-user-plugin-precedence

v2.14 ships conditional dependency migration and user-plugin precedence. v2.14 pins LiteLLM 1.104.0, OpenAI 2.54.0 and python-dotenv 1.2.2 and raises six transitive security floors. Docker startup checks nine selected package requirements; current environments skip installation. If any is unmet, it installs the nine selected requirements with a 60-second subprocess timeout, rechecks and restarts. It does not install all requirements.txt unconditionally; failure propagates. User plugin roots now precede bundled roots for assets and matching extension files. Host Computer Use can start a missing chat session on the first action, under existing grants; it remains runtime-gated beta with session/lease-wide enablement. The prompt requires screen inspection after changes except definitive structural background results, a contract rather than measured universal enforcement. Optional scheduler YAML, opt-in Browser annotation screenshots and Codex client version 0.160.1 also reach stable. The older LiteLLM proxy MCP-test command-execution advisory was fixed below v2.13's existing 1.88.1 pin; importing LiteLLM alone does not expose those proxy endpoints.

Channel: tagged-release. Half: both. Date: 2026-10-13 (first stable; implementations 2026-10-02..2026-10-08).

Operator consequence: Plan network access and a possible restart for in-place container updates, or use the new image; inventory resolved packages in either case. Inspect user-plugin files that collide with bundled tools or pre-execution extensions, since the winner changes. Keep host approval checks even though session startup needs less choreography. Verify actions using the screen or the definitive structural result appropriate to the backend.

## Receipt
- https://github.com/agent0ai/agent-zero/blob/v2.14/extensions/python/startup_migration/_05_framework_dependencies.py
- https://github.com/agent0ai/agent-zero/blob/v2.14/requirements.txt#L23-L75
- https://github.com/agent0ai/agent-zero/commit/14c38f4ea75092c8a90581694288a965b2f8755b
- https://github.com/agent0ai/agent-zero/commit/4dceb49211295d4915b99fc0c531b686f6e6f361
- https://github.com/agent0ai/agent-zero/blob/v2.14/plugins/_a0_connector/prompts/agent.system.tool.computer_use_remote.md#L4-L18
- https://github.com/agent0ai/agent-zero/blob/v2.14/plugins/_browser/default_config.yaml
- https://github.com/agent0ai/agent-zero/blob/v2.14/plugins/_oauth/default_config.yaml
- https://github.com/advisories/GHSA-v4p8-mg3p-g94g
