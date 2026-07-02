# Watchlist harvest -- 2026-07-01..2026-07-02

Short live window. Channel is resolved by git ancestry or, for closed changelog
surfaces without public tags, explicitly called out as pinned-changelog evidence
and not promoted. Every signal candidate below was re-fetched against its own
receipt before promotion.

## Carry-forward from 2026-07-01

- `gemini-cli`: UNRESOLVED. `@file` hardening reached nightly only
  (`v0.51.0-nightly.20260701.g7f00c5fe5`), not stable `v0.49.0` or preview
  `v0.50.0-preview.1`.
- `codex`: UNRESOLVED for the 0.143 line. Latest stable in this window is
  `rust-v0.142.5`; 0.143 remains alpha through `rust-v0.143.0-alpha.34`.
- `openhands`: UNRESOLVED. Cloud/OSS split remains: latest cloud tag is
  `cloud-1.40.0` (2026-06-26), latest OSS tag is `1.8.0` (2026-06-10), and the
  Authlib CVE fix remains main-only.
- `hermes-agent`: RESOLVED. Last window's main-only security wave reached
  `v2026.7.1` on 2026-07-01.
- `openclaw`: UNRESOLVED. Scoped conversation capability profiles reached
  `v2026.7.1-beta.1`, not stable.
- `paperclip`: UNRESOLVED. No stable tag after `v2026.626.0`; July 2 work is
  canary only through `canary/v2026.702.0-canary.8`.
- `heypi`: NO CHANGE. `0.2.0-beta.0` remains the current beta; `main` matches
  the tag commit.

## New source this run: agent-flywheel

Scope fence honored: only the `agentic_coding_flywheel_setup` repository and
`agent-flywheel.com` were harvested. The author's other repositories were rejected
as evidence. The installer was read at tag; it was never executed.

- Latest tag: `v0.7.0`, release published 2026-06-26, dereferenced commit
  `edaee4f6ceff772d4f56d42eda65b1d659fead73`.
  - receipt: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/releases/tag/v0.7.0
  - receipt: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/tree/edaee4f6ceff772d4f56d42eda65b1d659fead73
- The README's quick install uses a moving `main` one-liner for full vibe mode,
  while its production note recommends pinning a tag/commit and passing `--ref`.
  The project describes ACFS as a complete bootstrap for Claude Code, Codex CLI,
  and Antigravity CLI on a VPS, with vibe mode enabling passwordless sudo and
  dangerous agent flags.
  - channel: tagged-release
  - receipt: https://raw.githubusercontent.com/Dicklesworthstone/agentic_coding_flywheel_setup/v0.7.0/README.md
- Full vibe mode is recommended for throwaway VPS environments. Safe mode keeps
  standard confirmations and does not enable passwordless sudo.
  - channel: tagged-release
  - receipt: https://raw.githubusercontent.com/Dicklesworthstone/agentic_coding_flywheel_setup/v0.7.0/README.md
- The deployed shell aliases in `acfs/zsh/acfs.zshrc` run Claude Code with
  `--dangerously-skip-permissions`, Codex with
  `--dangerously-bypass-approvals-and-sandbox`, and Antigravity through
  `agy-locked`.
  - channel: tagged-release
  - receipt: https://raw.githubusercontent.com/Dicklesworthstone/agentic_coding_flywheel_setup/v0.7.0/acfs/zsh/acfs.zshrc
- `scripts/lib/user.sh` writes `/etc/sudoers.d/90-ubuntu-acfs` with
  `NOPASSWD:ALL` for the target user in vibe mode, then validates it with
  `visudo`.
  - channel: tagged-release
  - receipt: https://raw.githubusercontent.com/Dicklesworthstone/agentic_coding_flywheel_setup/v0.7.0/scripts/lib/user.sh
- `scripts/lib/agy_locked.py` writes Antigravity settings with
  `toolPermission: always-proceed`, `artifactReviewPolicy: always-proceed`,
  `enableTerminalSandbox: false`, and `allowNonWorkspaceAccess: true`; it
  launches the real `agy` with `--dangerously-skip-permissions` and removes user
  overrides for `--model`, `--sandbox`, and dangerous-skip flags.
  - channel: tagged-release
  - receipt: https://raw.githubusercontent.com/Dicklesworthstone/agentic_coding_flywheel_setup/v0.7.0/scripts/lib/agy_locked.py
- The Antigravity DCG pre-tool hook in `agy_locked.py` fails open if `dcg` is
  unavailable or times out. That makes DCG a useful guard, not a hard guarantee
  under failure.
  - channel: tagged-release
  - receipt: https://raw.githubusercontent.com/Dicklesworthstone/agentic_coding_flywheel_setup/v0.7.0/scripts/lib/agy_locked.py
- The tagged web app source prices the setup as self-reported current costs:
  Cloud VPS at `$40-56/month`, Claude Max at `$200/month`, ChatGPT Pro at
  `$200/month`, and an estimated total of `$440-656/month`.
  - channel: tagged-release
  - receipt: https://raw.githubusercontent.com/Dicklesworthstone/agentic_coding_flywheel_setup/v0.7.0/apps/web/app/page.tsx
- The solo-author-velocity claim was verified from arXiv source, not the author's
  portfolio. Robbes et al. (submitted 2026-06-05) state that, among newer
  projects, the entity with the most adopting repositories is `Dicklesworthstone`;
  the figure macro sets the top-35 display count to 35, top entity to
  `dicklesworthstone`, and top count to 110. The source table sets Microsoft's
  newer-project repository count to 52, and the paper text says this single
  developer created more repositories with coding-agent traces than Microsoft.
  - channel: paper
  - receipt: https://arxiv.org/abs/2606.07448
  - local source verification: `/private/tmp/robbe-src-260607448/main.tex`,
    `/private/tmp/robbe-src-260607448/rq4-Very/figure_counts.tex`,
    `/private/tmp/robbe-src-260607448/rq3-Very/organization_adoption.tex`

## claude-code

- Latest relevant stable tag: `v2.1.198` (2026-07-01), git tag commit
  `75709eacf1334051ea293fb87a0e88a1e6812f94`.
  - receipt: https://github.com/anthropics/claude-code/releases/tag/v2.1.198
- Material change: subagents now run in the background by default; background
  agent notifications were added; background agents launched from `claude agents`
  now commit, push, and open a draft PR when they finish code work in a worktree
  instead of stopping to ask.
  - channel: tagged-release
  - operator consequence: re-audit branch protections, worktree rules, and
    Notification hooks before treating background agents as passive helpers.
- Same release notes say subagents treat messages from the launching agent as task
  direction, but never as user approval.
  - channel: tagged-release

## codex

- Latest relevant stable tag: `rust-v0.142.5` (2026-07-01), git tag commit
  `1b30ea33f13533474db7c3ad6313ef280769e432`.
  - receipt: https://github.com/openai/codex/releases/tag/rust-v0.142.5
- Material change: Codex stopped writing full Responses WebSocket request payloads
  to trace logs.
  - channel: tagged-release
  - operator consequence: upgrade if trace logs may hold prompts, repository
    content, or secret-bearing tool inputs; restrict or purge old traces.
- Alpha carry-forward: `rust-v0.143.0-alpha.32` through alpha.34 added WebSocket
  liveness bounds, multi-agent/tool timing telemetry, TTFT telemetry, and a
  `quick-xml` advisory fix. No stable `0.143.0` exists in-window.
  - channel: preview-or-beta
  - receipt: https://github.com/openai/codex/compare/rust-v0.143.0-alpha.31...rust-v0.143.0-alpha.34

## gemini-cli

- Stable remains `v0.49.0`; preview remains `v0.50.0-preview.1`.
- `@file` hardening reached nightly `v0.51.0-nightly.20260701.g7f00c5fe5`.
  - channel: preview-or-beta
  - receipt: https://github.com/google-gemini/gemini-cli/releases/tag/v0.51.0-nightly.20260701.g7f00c5fe5
- A high-severity memory-import symlink-directory escape fix reached nightly
  `v0.51.0-nightly.20260702.gff00dacd9`, tag commit
  `67afb4e76ba699beb3cf9feb0b65e1961ed3d21c`.
  - channel: preview-or-beta
  - receipt: https://github.com/google-gemini/gemini-cli/releases/tag/v0.51.0-nightly.20260702.gff00dacd9
  - operator consequence: untrusted repositories can use memory imports as a
    file-read path if the stable line lacks the fix; avoid untrusted `GEMINI.md`
    imports or track the nightly until a stable/preview tag lands.

## antigravity

- Public tag/release URLs for `v1.0.15` and `v1.0.16` were not available at
  harvest time. The official changelog is pinned to repository commit
  `2939422297ba014da627961f4e387fad0e151f47`, but because this is not a public
  tag, the July 1-2 Antigravity notes are not promoted.
  - pinned receipt: https://github.com/google-antigravity/antigravity-cli/blob/2939422297ba014da627961f4e387fad0e151f47/CHANGELOG.md
- The pinned changelog says `1.0.15` added a live subagent/background-task status
  indicator, dynamic permissions reload from disk, longer MCP timeout, and
  non-TTY output fixes; `1.0.16` fixed dynamic subagent definitions, empty
  pre-tool-hook decisions, background task crashes, retries, and shutdown leaks.
  - channel: pinned-changelog-only

## hermes-agent

- `v2026.7.1` reached a public release on 2026-07-01, tag commit
  `462c8b0215c2db3a33252f7456f80a5c4f8acd2b`.
  - receipt: https://github.com/NousResearch/hermes-agent/releases/tag/v2026.7.1
- Material change: the main-only security wave from the prior issue is now
  tagged. Release notes list MCP-config persistence hardening, cron `base_url`
  credential-exfiltration blocking, non-reusable prefix-secret sentinels in file
  reads, Slack `xapp-` token redaction, browser cloud-metadata guardrails,
  resume/session scoping, and an `aiohttp` CVE floor.
  - channel: tagged-release
  - operator consequence: upgrade from `v2026.6.19`; do not continue treating the
    prior fixes as main-only.
- Same release added completion contracts for `/goal`, pre-verify hooks, coding
  verification evidence, `/learn`, `/journey`, background delegation fan-out,
  Vertex AI support, and gateway scale-to-zero/drain.
  - channel: tagged-release

## openhands

- Latest cloud tag remains `cloud-1.40.0` (2026-06-26); latest OSS tag remains
  `1.8.0` (2026-06-10).
  - receipts: https://github.com/OpenHands/OpenHands/releases/tag/cloud-1.40.0,
    https://github.com/OpenHands/OpenHands/releases/tag/1.8.0
- Main-only changes in-window: API-key active windows, unbound org scope, canvas
  cookie fallback auth, dynamic plugin marketplace registration, and
  `tool_concurrency_limit` in agent settings.
  - channel: main-unreleased
  - receipts:
    https://github.com/OpenHands/OpenHands/commit/66941d2,
    https://github.com/OpenHands/OpenHands/commit/387d2b8,
    https://github.com/OpenHands/OpenHands/commit/d4059af,
    https://github.com/OpenHands/OpenHands/commit/e64e1bd,
    https://github.com/OpenHands/OpenHands/commit/a251caa
- Carry-forward CVE: Authlib `CVE-2026-44681` remains main-only after
  `cloud-1.40.0`. The vulnerability class is an OIDC open redirect / incorrect
  authorization flow that can help phishing from a trusted authorization-server
  origin when vulnerable implicit or hybrid grants are exposed.
  - channel: main-unreleased
  - receipts: https://github.com/OpenHands/OpenHands/commit/e6fe5057fcc020069e05529c85107cba3e0c127f,
    https://nvd.nist.gov/vuln/detail/CVE-2026-44681,
    https://github.com/authlib/authlib/security/advisories/GHSA-r95x-qfjj-fjj2

## openclaw

- `v2026.7.1-beta.1` landed on 2026-07-02. No stable tag absorbed it in-window.
  - receipt: https://github.com/openclaw/openclaw/releases/tag/v2026.7.1-beta.1
- Material beta changes: external harness attach, Telegram Codex pairing and
  steering, event-driven cron, usage footers, iOS/mobile refresh, scoped
  conversation capability profiles, destructive approval mode rename to `ask`,
  malformed response bounding, Windows allowlist binding, and app approval
  preservation.
  - channel: preview-or-beta

## paperclip

- No stable tag after `v2026.626.0`; in-window work is canary through
  `canary/v2026.702.0-canary.8`.
  - receipt: https://github.com/paperclipai/paperclip/releases/tag/canary/v2026.702.0-canary.8
- Canary changes include agent-authored comments using the actual author instead
  of `Board`, sandbox bridge credential/review recovery, instance-scoped custom
  images, live descendant status inbox rows, and a Work Timeline endpoint/UI that
  later left the nav while backend code remained.
  - channel: preview-or-beta

## agent-zero

- `v2.2` landed on 2026-07-02.
  - receipt: https://github.com/agent0ai/agent-zero/releases/tag/v2.2
- Material change: model setup is explicit in-thread, OAuth model
  auto-population is no longer silent, default main model is
  `anthropic/claude-sonnet-5`, Codex fallback is `gpt-5.5`, and LiteLLM/streaming
  fallback paths were fixed.
  - channel: tagged-release
  - operator consequence: model defaults remain moving; pin if cost or behavior
    matters.

## pi-coding-agent

- No new release after `v0.80.3`.
  - receipt: https://github.com/earendil-works/pi/releases/tag/v0.80.3
- Main-unreleased provider/model and reliability fixes landed in-window. No new
  approval, sandbox, permission, subagent, or MCP governance stance change was
  found.
  - channel: main-unreleased

## eve

- `eve@0.17.2` (2026-07-01) added a default recursive subagent depth cap,
  per-session input/output token caps, and Sonnet 5 scaffolding defaults.
  - channel: tagged-release
  - receipt: https://github.com/vercel/eve/releases/tag/eve%400.17.2
- `eve@0.18.1` (2026-07-01) made Slack human-in-the-loop prompts show approval
  tool inputs and split large approval batches.
  - channel: tagged-release
  - receipt: https://github.com/vercel/eve/releases/tag/eve%400.18.1
- `eve@0.19.0` (2026-07-02) added generic Chat SDK channel support and fixed
  subagent/tool failure propagation.
  - channel: tagged-release
  - receipt: https://github.com/vercel/eve/releases/tag/eve%400.19.0
- Post-0.19 main-unreleased changes include abort-signal propagation, Gateway cost
  metadata, sandbox shutdown cleanup, and resume degradation for missing
  attachment bytes.
  - channel: main-unreleased

## flue

- No tag after `v1.0.0-beta.9`.
  - receipt: https://github.com/withastro/flue/releases/tag/v1.0.0-beta.9
- The `Unreleased` changelog at commit
  `076fa5c5bfe089c1021833364f3b32ee423eeec8` removes direct prompt result-await,
  removes `client.agents.prompt()`, makes `wait()` completion-only, unifies input
  as `DeliveredMessage`, bumps storage schema v5 with reset-only migration, and
  validates signal `tagName`.
  - channel: main-unreleased
  - receipt: https://github.com/withastro/flue/blob/076fa5c5bfe089c1021833364f3b32ee423eeec8/CHANGELOG.md

## heypi

- No material in-window change. `0.2.0-beta.0` remains the active beta and
  `origin/main` matched tag commit `19f1062bc0993a620ac5de4f263c0d78086cbeee`
  during harvest.
  - channel: preview-or-beta hold
  - receipt: https://github.com/hunvreus/heypi/tree/0.2.0-beta.0
