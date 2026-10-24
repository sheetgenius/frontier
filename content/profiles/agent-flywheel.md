---
schema_version: bitter.frontier_profile.v0
profile_id: agent-flywheel
label: Agent Flywheel
owner: Jeffrey Emanuel (Dicklesworthstone)
source_contract: sources/agent-flywheel.yml
homepage: https://agent-flywheel.com/
repo: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup
tagline: "Flywheel v0.10.0 launches up to 32 Claude and Codex workers from a reviewed plan."
compared_with:
  - claude-code
  - codex
  - antigravity
x:
  maintainers:
    - handle: doodlestein
      name: Jeffrey Emanuel
surface_class: tagged_release_and_official_site
evidence_floor: tagged_release
status: retired
retired_on: 2026-10-24
retired_reason: "a single-maintainer setup script around other agents rather than a harness in its own right, with little outside adoption (about 1,700 GitHub stars at retirement); the agents it installs are tracked directly."
artifact_version: 6
first_published: 2026-07-02
last_updated: 2026-10-13
last_full_review: 2026-10-13
claims:
  - id: v0-7-0-never-installed
    finding_id: 2026-09-21-agent-flywheel-v0-8-0-the-maintainer-states-v0-7-0-never-installed-v0-8-0-is-the-first-working-pinned-cut
    last_verified: 2026-10-13
    status: retired
  - id: v0-9-0-holds-and-rollback
    finding_id: 2026-09-21-agent-flywheel-v0-9-0-per-tool-holds-smoke-checked-rollback-partial-failure-exit-codes-service-repair
    last_verified: 2026-09-23
    status: retired
  - id: safe-mode-not-a-boundary-at-v0-9-0
    finding_id: 2026-09-21-agent-flywheel-carry-forward-safe-mode-is-still-not-a-boundary-at-v0-9-0-dangerous-aliases-unchanged
    last_verified: 2026-10-13
    status: active
  - id: bundled-agents-float
    finding_id: 2026-09-21-agent-flywheel-bundled-agents-still-float-codex-installs-latest-claude-from-the-upstream-installer
    last_verified: 2026-10-13
    status: active
  - id: main-codex-alias-and-plugin-approval
    finding_id: 2026-09-21-agent-flywheel-main-after-v0-9-0-codex-alias-re-pinned-to-gpt-6-astra-ubuntu-26-04-lts-paths-reviewed-plu
    last_verified: 2026-09-23
    status: retired
  - id: changelog-and-cost-at-v0-9-0
    finding_id: 2026-09-21-agent-flywheel-contract-watch-items-changelog-records-versions-again-published-cost-figures-unchanged
    last_verified: 2026-09-23
    status: retired
  - id: optional-ee-fmd-pi-pfr-on-main
    finding_id: 2026-08-20-agent-flywheel-optional-ee-fmd-pi-pfr-stack-on-main-no-new-tag
    last_verified: 2026-09-23
    status: retired
  - id: v0-7-0-intake-tag
    finding_id: 2026-07-02-agent-flywheel-v0-7-0-tagged-release
    last_verified: 2026-09-23
    status: retired
  - id: three-agent-vps-assembly-layer
    finding_id: 2026-07-02-agent-flywheel-vibe-mode-dangerous-agent-aliases
    last_verified: 2026-10-13
    status: active
  - id: dangerous-agent-shortcuts-shared-across-modes
    finding_id: 2026-07-02-agent-flywheel-vibe-mode-dangerous-agent-aliases
    last_verified: 2026-10-13
    status: active
  - id: passwordless-sudo-vibe-default
    finding_id: 2026-07-02-agent-flywheel-passwordless-sudo-vibe-default
    last_verified: 2026-10-13
    status: active
  - id: antigravity-always-proceed-wrapper
    finding_id: 2026-07-02-agent-flywheel-antigravity-locked-always-proceed
    last_verified: 2026-10-13
    status: active
  - id: dcg-antigravity-hook-fails-open
    finding_id: 2026-07-02-agent-flywheel-dcg-hook-fail-open
    last_verified: 2026-10-13
    status: active
  - id: cost-model-self-reported-in-tagged-web-source
    finding_id: 2026-07-02-agent-flywheel-costs-pinned-web-source
    last_verified: 2026-10-13
    status: retired
  - id: individual-account-repository-outlier-paper-scope
    finding_id: 2026-07-02-agent-flywheel-arxiv-solo-author-velocity
    last_verified: 2026-07-12
    status: retired
  - id: license-rider-disclosure
    finding_id: 2026-07-02-agent-flywheel-openai-anthropic-license-rider
    last_verified: 2026-10-13
    status: active
  - id: source-only-v0-10-install
    finding_id: 2026-10-13-agent-flywheel-v0-10-0-withholds-full-install-qualification-and-reads-its-checksum-ledger-from-main
    last_verified: 2026-10-13
    status: active
  - id: two-install-references
    finding_id: 2026-10-13-agent-flywheel-v0-10-0-withholds-full-install-qualification-and-reads-its-checksum-ledger-from-main
    last_verified: 2026-10-13
    status: active
  - id: ordinary-lts-preserved
    finding_id: 2026-10-13-agent-flywheel-ordinary-installs-now-keep-the-host-s-ubuntu-lts-v0-9-0-defaulted-to-upgrading-toward-25
    last_verified: 2026-10-13
    status: active
  - id: self-update-token-redaction
    finding_id: 2026-10-13-agent-flywheel-v0-10-0-redacts-tokens-in-self-update-origin-warnings-including-discovered-checkouts
    last_verified: 2026-10-13
    status: active
  - id: ubs-skips-user-hooks
    finding_id: 2026-10-13-agent-flywheel-the-v0-9-0-nightly-rewrote-claude-settings-json-every-night-v0-10-0-stops
    last_verified: 2026-10-13
    status: active
  - id: required-dcg-failure-verdict
    finding_id: 2026-10-13-agent-flywheel-a-failed-dcg-install-now-fails-the-install-on-v0-9-0-it-could-finish-green-with-exit
    last_verified: 2026-10-13
    status: active
  - id: tagged-swarm-launch-and-ntm-authority
    finding_id: 2026-10-13-agent-flywheel-swarm-launch-reached-the-tag-it-gates-how-many-agents-start-not-what-they-may
    last_verified: 2026-10-13
    status: active
  - id: reviewed-target-user-plugins
    finding_id: 2026-10-13-agent-flywheel-reviewed-plugin-installs-shipped-in-v0-10-0-for-third-party-plugin-archives-only
    last_verified: 2026-10-13
    status: active
  - id: cloud-bundles-and-existing-tool-reuse
    finding_id: 2026-10-13-agent-flywheel-cloud-setup-hash-checks-downloaded-bundles-but-retains-existing-tools-stable-does-not-cont
    last_verified: 2026-10-13
    status: active
  - id: stable-changelog-qualification-limits
    finding_id: 2026-10-13-agent-flywheel-v0-10-0-s-changelog-describes-the-lts-fix-and-test-limits-not-most-of-what-the-tag-ships
    last_verified: 2026-10-13
    status: retired
  - id: target-home-update-lock
    finding_id: 2026-10-13-agent-flywheel-stable-updater-locking-now-excludes-root-and-user-runs-targeting-the-same-home
    last_verified: 2026-10-13
    status: active
  - id: isolated-account-rehearsal
    finding_id: 2026-10-13-agent-flywheel-stable-adds-bounded-isolated-account-rehearsal-before-launching-paid-agents
    last_verified: 2026-10-13
    status: retired
  - id: holds-and-rollback-path-limits
    finding_id: 2026-10-13-agent-flywheel-source-built-aadc-and-rust-proxy-bypass-stable-holds-the-mirror-source-adds-the-missing
    last_verified: 2026-10-13
    status: active
  - id: stable-ntm-cm-install-overwrite-risk
    finding_id: 2026-10-13-agent-flywheel-brenner-installation-could-overwrite-coordination-tools-acfs-had-just-installed
    last_verified: 2026-10-13
    status: active
  - id: shareable-packet-raw-fields
    finding_id: 2026-10-13-agent-flywheel-shareable-task-packets-retained-raw-data-beside-sanitized-briefs
    last_verified: 2026-10-13
    status: active
  - id: nightly-attempts-and-resource-gates
    finding_id: 2026-10-13-agent-flywheel-main-bounds-nightly-retry-windows-and-records-missed-updates
    last_verified: 2026-10-13
    status: active
  - id: checksum-review-deferral-outside-stable
    finding_id: 2026-10-13-agent-flywheel-checksum-publication-stalled-three-times-main-now-defers-an-unauthorized-tool-instead-of
    last_verified: 2026-10-13
    status: active
posture_basis:
  capability:
    - 2026-07-02-agent-flywheel-vibe-mode-dangerous-agent-aliases
    - 2026-07-02-agent-flywheel-antigravity-locked-always-proceed
    - 2026-10-13-agent-flywheel-ordinary-installs-now-keep-the-host-s-ubuntu-lts-v0-9-0-defaulted-to-upgrading-toward-25
    - 2026-10-13-agent-flywheel-swarm-launch-reached-the-tag-it-gates-how-many-agents-start-not-what-they-may
    - 2026-10-13-agent-flywheel-reviewed-plugin-installs-shipped-in-v0-10-0-for-third-party-plugin-archives-only
    - 2026-10-13-agent-flywheel-cloud-setup-hash-checks-downloaded-bundles-but-retains-existing-tools-stable-does-not-cont
  accessibility:
    - 2026-10-13-agent-flywheel-v0-10-0-withholds-full-install-qualification-and-reads-its-checksum-ledger-from-main
    - 2026-10-13-agent-flywheel-ordinary-installs-now-keep-the-host-s-ubuntu-lts-v0-9-0-defaulted-to-upgrading-toward-25
    - 2026-10-13-agent-flywheel-cloud-setup-hash-checks-downloaded-bundles-but-retains-existing-tools-stable-does-not-cont
  governance:
    - 2026-07-02-agent-flywheel-vibe-mode-dangerous-agent-aliases
    - 2026-07-02-agent-flywheel-passwordless-sudo-vibe-default
    - 2026-07-02-agent-flywheel-antigravity-locked-always-proceed
    - 2026-07-02-agent-flywheel-dcg-hook-fail-open
    - 2026-07-02-agent-flywheel-openai-anthropic-license-rider
    - 2026-10-13-agent-flywheel-v0-10-0-withholds-full-install-qualification-and-reads-its-checksum-ledger-from-main
    - 2026-10-13-agent-flywheel-v0-10-0-redacts-tokens-in-self-update-origin-warnings-including-discovered-checkouts
    - 2026-10-13-agent-flywheel-the-v0-9-0-nightly-rewrote-claude-settings-json-every-night-v0-10-0-stops
    - 2026-10-13-agent-flywheel-a-failed-dcg-install-now-fails-the-install-on-v0-9-0-it-could-finish-green-with-exit
    - 2026-10-13-agent-flywheel-swarm-launch-reached-the-tag-it-gates-how-many-agents-start-not-what-they-may
    - 2026-10-13-agent-flywheel-reviewed-plugin-installs-shipped-in-v0-10-0-for-third-party-plugin-archives-only
    - 2026-10-13-agent-flywheel-stable-updater-locking-now-excludes-root-and-user-runs-targeting-the-same-home
    - 2026-10-13-agent-flywheel-source-built-aadc-and-rust-proxy-bypass-stable-holds-the-mirror-source-adds-the-missing
    - 2026-10-13-agent-flywheel-brenner-installation-could-overwrite-coordination-tools-acfs-had-just-installed
    - 2026-10-13-agent-flywheel-shareable-task-packets-retained-raw-data-beside-sanitized-briefs
    - 2026-10-13-agent-flywheel-main-bounds-nightly-retry-windows-and-records-missed-updates
    - 2026-10-13-agent-flywheel-checksum-publication-stalled-three-times-main-now-defers-an-unauthorized-tool-instead-of
stance:
  use_for: 'A rebuildable Ubuntu VPS trial of <a href="https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/docs/operations/swarm-launch.md">v0.10.0 swarm launch</a>, with worker permissions configured before launch.'
  avoid_for: 'Persistent or sensitive hosts using the <a href="https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/acfs/zsh/acfs.zshrc#L633-L642">stock permission-bypassing shortcuts</a>.'
  watch_next: 'A <a href="https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/issues/427#issuecomment-5981082040">complete factory re-run after the checksum repin</a>.'
---

# Agent Flywheel

## Where it stands, 2026-10-13

The maintainer's [2026-10-03 factory run of Agent Flywheel v0.10.0 passed eight critical smoke checks but the installer exited 1 after uv/dcg checksum refusals](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/issues/427). Agent Flywheel [assembles Claude Code, Codex and Antigravity on Ubuntu](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/acfs.manifest.yaml), so try it on a VPS you can rebuild. [ACFS is the setup and update tooling discussed on this page](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/README.md). The [2026-10-04 checksum repin still called for a factory re-run](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/issues/427#issuecomment-5981082040).

**Pin the scripts and checksum ledger separately.** Fetch the [v0.10.0 installer](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/install.sh) and set `--ref v0.10.0`. Its [checksum ledger defaults to main](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/install.sh#L173-L185); [`--checksums-ref <sha>` fixes the accepted hashes](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/install.sh#L2493-L2505). Record both revisions and check upstream downloads against the ledger. This page does not supply a reviewed checksum-ledger SHA. Review and record that revision before installing; do not enter the placeholder literally. The [Quick Install recipe selects main](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/README.md#L30-L56), so skip it when evaluating stable scripts.

[Hosted setup remains outside stable](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/e5eb614dff527ec280f9fdd711cc2c58de9958df/scripts/claude-code-web-setup.sh). Stable also lacks the repairs described below for [overwritten coordination tools](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/070af7b326b01000436b09262f0767f99b8fe49d), [ignored update holds](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/17609ca34bb5b20acd303ac4ada1ce808f1dd7dc), [raw data in shared task packets](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/ae06b55cab0f0862776e5cbbe30b3a6e6f75dc97), and [stalled checksum publication](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/2354efbaa6b355b93a53d6052fcc8f56950893b1).

**[Swarm launch reached stable in v0.10.0.](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/docs/operations/swarm-launch.md)** Review the launch plan before starting paid workers. [`acfs swarm launch` previews one to 32 native Claude/Codex agents](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/docs/operations/swarm-launch.md); [a separate `--launch` tied to the reviewed launch request's hash starts them](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/scripts/lib/swarm_launch.sh#L634-L658). That batches starts while [leaving worker authority to Named Tmux Manager (NTM) configuration](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/docs/operations/swarm-launch.md#L15-L21). If you install Brenner Bot, inspect NTM and CASS Memory versions before launch: the [maintainer reports it replacing newer coordination tools; the protection is outside stable](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/070af7b326b01000436b09262f0767f99b8fe49d).

**Set worker authority before launching.** In either mode, the [shell aliases pass `--dangerously-skip-permissions` to Claude and `--dangerously-bypass-approvals-and-sandbox` to Codex](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/acfs/zsh/acfs.zshrc#L633-L642). Inspect the swarm worker commands in the Named Tmux Manager (NTM) launcher configuration at `~/.config/ntm/config.toml`: the [fresh-host Codex command uses the same bypass at gpt-6-astra/xhigh](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/install.sh#L9740-L9765). ACFS's Antigravity wrapper [sets always-proceed, disables the terminal sandbox and allows non-workspace access](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/scripts/lib/agy_locked.py#L59-L76).

Override shortcuts in [the last-loaded `~/.zshrc.local`](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/acfs/zsh/acfs.zshrc#L762-L767) and edit NTM separately. Audit sudo too: [vibe grants passwordless sudo that a later safe-mode run does not revoke](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/install.sh#L7517-L7542).

**Verify that the DCG command guard is registered with each agent, not just installed.** Failure to install the [required Destructive Command Guard (DCG) binary](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/acfs.manifest.yaml#L2639-L2645) [now fails installation](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/install.sh#L5180-L5201). But [Claude hook registration remains optional](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/install.sh#L10988-L10991), and [ACFS's Antigravity hook returns allow when DCG is unavailable or times out](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/scripts/lib/agy_locked.py#L120-L204). Inspect the hook-registration log.

<details>
<summary>Existing installations: logs, Ubuntu and updater checks</summary>

**Inspect older update logs before resuming work.** The [token-redaction fix in v0.10.0](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/scripts/lib/update.sh#L938-L973) addresses the [maintainer-reported printing of credentialed Git origin URLs into update and world-readable `/data/tmp` logs](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/63f24b80d2aca35ea34513ec181ab0e29029b96b). If you used credentialed Git rewrites, inspect retained logs and rotate exposed tokens. A tarball runtime can [discover a separate checkout for self-update](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/scripts/lib/update.sh#L302-L335). Absence of `~/.acfs/.git` is no exemption.

**Keep OS migration out of setup.** v0.10.0 [preserves supported LTS hosts by default](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/install.sh#L6632-L6668); its [opt-in 26.04 upgrade remains unqualified](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/releases/tag/v0.10.0). Check `/etc/os-release` on v0.9.0 hosts, whose [default target was 25.10](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.9.0/install.sh#L467). Rebuild any on that [end-of-life release](https://lists.ubuntu.com/archives/ubuntu-announce/2026-July/000325.html) with an LTS image. The maintainer [reports two failed in-place recoveries before a post-stable repair](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/57a3ba443d90e8b482b87c1377c094ca62ef6c24).

**Replace the older runtime before repairing Claude's settings.** v0.10.0 [stops installing Ultimate Bug Scanner (UBS) hooks during updates](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/scripts/lib/update.sh#L7298-L7305), ending the [reported nightly rewrite of user-level hooks](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/issues/400). Inspect `~/.claude/settings.json` for bad paths and `git_safety_guard` entries. The [nightly update job disables ACFS self-update by default](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/scripts/lib/nightly_update.sh#L519-L534), so agent updates alone do not deliver the repair.

**[Stable source builds can bypass holds.](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/scripts/lib/update.sh#L4520-L4575)** Test each per-tool update freeze, called a hold, and verify the saved binary you would restore. ACFS's [Claude/Codex install inputs float to latest](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/acfs.manifest.yaml#L882-L963); its [normal Claude update path checks holds before running the installer](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/scripts/lib/update.sh#L6619-L6625). In stable, [aadc/rust_proxy source-build callers](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/scripts/lib/update.sh#L7380-L7411) use a [helper without hold checks](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/scripts/lib/update.sh#L4520-L4575). A [failed binary backup leaves no rollback candidate](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/scripts/lib/update.sh#L5001-L5023); inspect the retained `.prev` binary before relying on it.

**[A skipped update leaves the old version installed.](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/scripts/lib/nightly_update.sh#L420-L437)** The [nightly update job can skip updates when resource checks block them](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/scripts/lib/nightly_update.sh#L420-L437). Check logs and actual versions. Drain older updater processes before adopting the [target-home lock, which returns 75 when busy](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/docs/operations/updater-locking.md), and alert on both 75 and [exit 2 for partial failure](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/scripts/lib/update.sh#L8738-L8750).

</details>

<details>
<summary>Before sharing packets, adding plugins or trying hosted setup</summary>

**[Sanitized briefs still travel with raw task data.](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/scripts/lib/swarm_packet.sh#L615-L650)** Stable [retains raw task data beside its sanitized brief](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/scripts/lib/swarm_packet.sh#L615-L650). [Credentials in task fields can still reach recipients](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/scripts/lib/swarm_packet.sh#L623-L649). Inspect raw source, titles and labels in packet JSON.

**Review the exact third-party plugin plan before accepting it.** v0.10.0 [previews plugin installs and requires `--yes` plus the exact `--accept-plan` fingerprint to execute as the target user](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/docs/operations/plugin-review-workflow.md#L1-L62). The path [requires first-party dependencies to be installed already](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/docs/operations/plugin-review-workflow.md#L173-L176); [`setpriv --no-new-privs` provides no filesystem or network confinement](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/docs/operations/plugin-review-workflow.md#L188-L193).

**Keep hosted setup a separate disposable trial.** The [cloud-binaries-v1 prerelease mirrors tool archives](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/releases/tag/cloud-binaries-v1). It is not an ACFS upgrade. Its [initial cloud setup](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/e5eb614dff527ec280f9fdd711cc2c58de9958df/scripts/claude-code-web-setup.sh) and [later untagged hardening](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/0bf744a81c319accaa62d763bce97073ac693ef5/scripts/claude-code-web-setup.sh) are outside stable.

Pin the script and `ACFS_REF` to one reviewed SHA. It [hash-checks new bundles](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/0bf744a81c319accaa62d763bce97073ac693ef5/scripts/claude-code-web-setup.sh#L200-L215) but [retains existing callable tools](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/0bf744a81c319accaa62d763bce97073ac693ef5/scripts/claude-code-web-setup.sh#L154-L165).

[Claude mode attempts Agent Mail MCP registration](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/0bf744a81c319accaa62d763bce97073ac693ef5/scripts/claude-code-web-setup.sh#L677-L683); [Codex/generic modes use CLI access without MCP registration](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/0bf744a81c319accaa62d763bce97073ac693ef5/scripts/claude-code-web-setup.sh#L490-L493). Check per-tool logs and actual versions: [tool failures can still end in exit 0](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/0bf744a81c319accaa62d763bce97073ac693ef5/scripts/claude-code-web-setup.sh#L739-L742).

</details>

**Read the license before intended hosted use.** The [rider withholds rights from OpenAI, Anthropic, their affiliates and people acting on their behalf, absent Jeffrey Emanuel's prior written permission](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/LICENSE#L18-L27). This page offers no view on enforceability.

## What still needs proof

- **Require full installation and upgrade records.** Retain a run recording script and ledger revisions, repeat-install behavior, exit status, doctor and service checks. A separate tag-to-tag deployment test must show the old updater was replaced.
- **Watch checksum publication after the repair.** The maintainer [reports a completed 175-run publication stall](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/issues/433#issuecomment-6131196991) and [subsequent healthy monitor runs](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/issues/433#issuecomment-6135303881). The [main-only deferral fix lets unrelated repins publish while one tool awaits authorization](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/2354efbaa6b355b93a53d6052fcc8f56950893b1). A stable tag containing the fix, plus retained timer health, would settle release status and continued publication.
- **Require released hold and packet repairs with passing checks.** The [source-build hold repair is in the prerelease source tree](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/17609ca34bb5b20acd303ac4ada1ce808f1dd7dc); the [packet-redaction repair is untagged](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/ae06b55cab0f0862776e5cbbe30b3a6e6f75dc97). Stable tags containing the repairs, plus held-build and packet-export tests, would settle delivery and behavior.
- **Test conflicting writes before trusting assignments.** Assignment [checks declared scopes, not eventual writes or live reservations](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/docs/operations/swarm-assignment-scopes.md#L65-L74). The test must show what happens when workers write the same file and who resolves the collision.
- **Require hosted acceptance in each mode.** Runs must record script and `ACFS_REF`, mode, actual tool versions and rejected Git operations, plus completed work alongside executable checks.
- **Measure completed work before claiming attention saved.** A completed-project comparison must count accepted work, review, maintenance, rework and spend.

## Profile hygiene

This profile covers evidence through 2026-10-13 and does not guarantee later installs. [METHOD.md](https://github.com/sheetgenius/frontier/blob/90bb1d1af32606608d2387bcb5d5796b88e00e5a/METHOD.md) explains the evidence rules.

Editorial revision, 2026-10-14 (v9): led with the factory result, made checksum-ledger review an installation prerequisite, and collapsed existing-host and optional setup checks. Coverage still ends 2026-10-13.
