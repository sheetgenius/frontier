---
schema_version: bitter.frontier_profile.v0
profile_id: antigravity
label: Antigravity CLI
owner: Google
source_contract: sources/antigravity.yml
homepage: https://antigravity.google/product/antigravity-cli
docs: https://antigravity.google/docs
changelog: https://github.com/google-antigravity/antigravity-cli/blob/main/CHANGELOG.md
repo: https://github.com/google-antigravity/antigravity-cli
tagline: "Google retired the coding CLI you could read, and shipped one you have to trust."
compared_with:
  - gemini-cli
x:
  project: antigravity
surface_class: closed_source_releases
evidence_floor: official_changelog
status: active_watch
last_updated: 2026-07-01
last_full_review: 2026-07-01
claims:
  - id: consumer-successor-to-gemini-cli
    finding_id: 2026-07-01-antigravity-successor-to-gemini-consumer
    last_verified: 2026-07-01
    status: active
  - id: gemini-consumer-service-retired-june-18
    finding_id: 2026-07-01-antigravity-successor-to-gemini-consumer
    last_verified: 2026-07-01
    status: active
  - id: closed-source-go-binary
    finding_id: 2026-07-01-antigravity-successor-to-gemini-consumer
    last_verified: 2026-07-01
    status: active
  - id: rapid-stable-release-train
    finding_id: 2026-07-01-antigravity-in-window-release-train
    last_verified: 2026-07-01
    status: active
  - id: strict-approve-rule-matching-default
    finding_id: 2026-07-01-antigravity-strict-approve-matching
    last_verified: 2026-07-01
    status: active
  - id: subagent-always-proceeds-auto-approve
    finding_id: 2026-07-01-antigravity-subagent-auto-approve
    last_verified: 2026-07-01
    status: active
  - id: proceed-in-sandbox-mode
    finding_id: 2026-07-01-antigravity-sandbox-model
    last_verified: 2026-07-01
    status: active
  - id: closed-source-verifiability-gap
    finding_id: 2026-07-01-antigravity-sandbox-model
    last_verified: 2026-07-01
    status: open_question
stance:
  use_it_for: "Individual and consumer users who relied on Gemini CLI and need a Google-supported terminal agent now that the open one stopped serving them, and teams already in the Antigravity ecosystem who want terminal reach plus background multi-agent orchestration."
  avoid_it_for: "Any operator who must audit the enforcement behind an approval or sandbox claim -- the code is closed, so a governance guarantee rests on the changelog, not readable source. If you need an open, self-hostable CLI, the gemini-cli OSS repo (Apache-2.0) or another open harness is the honest choice."
  watch_next: "Whether subagent 'always proceeds' auto-approval hardens into a default gap; whether Google publishes verifiable enforcement docs for the closed binary; and the real behavior-change cost of migrating off Gemini CLI."
---

# Antigravity CLI

Antigravity CLI -- the `agy` binary -- is Google's closed-source, Go-written
successor to consumer Gemini CLI. It joins the watchlist this cycle because it is
now the path Google points individual users to: on
[2026-06-18 Gemini CLI stopped serving requests](https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/)
for AI Pro/Ultra, free individual Code Assist, and new GitHub-org installs.
Enterprise Code Assist retained access, and the open-source `gemini-cli` repository
remains Apache-2.0 and enterprise-serving -- so the retirement is tiered, not total,
and Antigravity is the consumer tier's replacement (see the [gemini-cli
profile](/profiles/gemini-cli/) for the other side).

What makes it a watchlist entry and not just a rename is the trade it asks an
operator to accept. Gemini CLI was open source: an approval rule or a sandbox
boundary was, in principle, readable. Antigravity is closed. Its governance model
is real and active -- and this window it moved in both directions in one release
train. [1.0.13](https://github.com/google-antigravity/antigravity-cli/blob/main/CHANGELOG.md)
(2026-06-27) *hardened* command permissions, making "Always Approve" rule matching
strict and non-regex by default (regex is now opt-in behind a `regex:` prefix),
which closes a class of over-broad approve rules. Three days later,
[1.0.14](https://github.com/google-antigravity/antigravity-cli/blob/main/CHANGELOG.md)
(2026-06-30) *loosened* it, adding an "always proceeds" mode that auto-approves a
subagent's artifacts -- delegated work proceeding without the confirmation the
parent flow may require. The sandbox model (a `proceed-in-sandbox` mode that
auto-approves commands inside the secure sandbox, with `.git` on the dangerous-path
list) is genuine, but you verify it by reading the changelog, not the code.

That is the lens to hold Antigravity through: it is both the market-succession
story (a tier-1 vendor retiring an auditable CLI and force-migrating consumers to
a closed one) and the closed-source-governance story (a control you must trust
rather than inspect). The profile will deepen as the changelog and any local
probes accumulate; the current claims are seeded from its late-June release train.
