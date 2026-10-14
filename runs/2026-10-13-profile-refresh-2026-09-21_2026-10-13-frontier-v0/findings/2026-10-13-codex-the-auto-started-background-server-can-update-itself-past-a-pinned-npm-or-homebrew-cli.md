---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-codex-the-auto-started-background-server-can-update-itself-past-a-pinned-npm-or-homebrew-cli
source: codex
source_contract: sources/codex.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: medium
evidence:
  - url: https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/app-server-daemon/src/prepare_install.rs#L272-L338
    precision: tagged_commit_file
  - url: https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/app-server-daemon/src/prepare_install_tests.rs#L53-L80
    precision: tagged_commit_file
  - url: https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/app-server-daemon/src/lib.rs#L893-L930
    precision: tagged_commit_file
  - url: https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/app-server-daemon/src/settings.rs#L27-L37
    precision: tagged_commit_file
  - url: https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/app-server-daemon/README.md?plain=1#L48-L55
    precision: tagged_commit_file
  - url: https://github.com/openai/codex/pull/45558
    precision: merged_pr
  - url: https://github.com/openai/codex/pull/52223
    precision: merged_pr
  - url: https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/app-server-daemon/src/lib.rs#L330-L343
    precision: tagged_commit_file
---
# 2026-10-13-codex-the-auto-started-background-server-can-update-itself-past-a-pinned-npm-or-homebrew-cli

The auto-started background server can update itself past a pinned npm or Homebrew CLI. Read in code at rust-v0.162.1, not executed: on a first auto-start, `Daemon::start` (lib.rs L409-L458) copies the invoking CLI's complete package into `CODEX_HOME/packages/app-server-daemon/releases/<version>-<target>` and, for a stable version whose source is not the standalone installer's pinned `current` release, writes an `auto-update-version` marker that makes the copy count as latest-channel (prepare_install.rs L250-L254, L274-L281, L332-L338). npm installs carry that package layout (https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/install-context/src/lib.rs#L740-L765; `scripts/stage_npm_packages.py` extracts `codex-package-<target>.tar.gz` into the npm vendor directory), the Homebrew cask downloads the same archive, and the test `seeds_full_package` asserts the marker for a seeded 0.152.0 package. The start path then calls `ensure_managed_updater` (lib.rs L451-L457, L893-L930). With `autoUpdateEnabled` defaulting to true (settings.rs L27-L37, L87-L89), that starts a detached loop which, per the README, checks "for updates after five minutes, then hourly", fetches https://chatgpt.com/codex/install.sh or install.ps1 (https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/app-server-daemon/src/update_loop.rs#L74-L76), installs a daemon-only package that leaves "the user's CLI command and shell setup alone" (README L108), and restarts the running server on the new binary. A standalone install pinned to an explicit release is not auto-updated (README table: "the selected release stays pinned"). On 0.162.1 the updater's HTTP client falls back to a default client when configuration fails to load (https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/cli/src/main.rs#L2360-L2372); #52223, only in the 0.163.0 alphas, says daemon updates "must honor application network restrictions and stop when their configuration cannot be loaded". No release note or docs page describes the updater; the docs CLI, app-server and managed-configuration pages do not mention it.

Channel: tagged-release (behavior at 0.157.0 through 0.162.1); preview-or-beta (#52223 first in rust-v0.163.0-alpha.1, not in rust-v0.162.1). Half: both. Date: 2026-09-22 (package seeding in 0.156.0); 2026-09-25 (reached by default through 0.157.0 auto-start); 2026-10-08 (network-policy fix, alpha only).

Operator consequence: Pinning `@openai/codex` to a version, or a Homebrew version, no longer pins the code that serves interactive sessions: the TUI client stays put while an eligible latest-channel background server can move independently. Five minutes then hourly is the default check schedule, not an update deadline; selected package, support, pin state, configuration and successful network access still matter. Where versions must hold (regulated fleets, eval baselines), set `{"updater": {"autoUpdateEnabled": false}}` in `CODEX_HOME/app-server-daemon/settings.json` then run `codex app-server daemon restart` to apply the enabled state, or disable auto-start. Inspect the applicable updater pidfile under CODEX_HOME/app-server-daemon: daemon-updater.pid for dedicated packages or app-server-updater.pid for legacy packages (lib.rs L330-L343). Compare `codex app-server daemon version` with `codex --version`; restart reuses the selected daemon package and does not downgrade an already advanced server to the CLI pin. Managed network allowlists do not reliably bind the updater on 0.162.1; treat the fix as preview until a stable contains #52223. An eligible successful auto-update can deliver newer fixes without a manual CLI upgrade; actual upgrade behavior and interruption costs were not observed here. Settle the code reading on a test machine: install a pinned npm version, launch `codex`, and watch `daemon-updater.pid` and the daemon version after the first check.

## Receipt
- https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/app-server-daemon/src/prepare_install.rs#L272-L338
- https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/app-server-daemon/src/prepare_install_tests.rs#L53-L80
- https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/app-server-daemon/src/lib.rs#L893-L930
- https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/app-server-daemon/src/settings.rs#L27-L37
- https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/app-server-daemon/README.md?plain=1#L48-L55
- https://github.com/openai/codex/pull/45558
- https://github.com/openai/codex/pull/52223
- https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/app-server-daemon/src/lib.rs#L330-L343
