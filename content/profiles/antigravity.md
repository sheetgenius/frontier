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
first_published: 2026-07-01
last_updated: 2026-07-27
last_full_review: 2026-07-27
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
  use_for: "Individuals who relied on Gemini CLI and need a Google-supported terminal agent now that the open one stopped serving their tier, and teams already inside the Antigravity ecosystem who want terminal reach plus background multi-agent orchestration. Interactive use is where its governance is strongest: since 1.1.0 the default execution mode pauses before a file write and shows a line-level diff you accept or reject."
  avoid_for: "Unattended or CI work on anything before 1.1.4. Headless `-p` runs honored none of your persisted settings.json policy -- not permissions, not file access, not sandbox mode, not auto-execution, not artifact review -- and the vendor disclosed that only on 2026-07-18. More broadly, avoid it anywhere you must audit the enforcement behind a control: there is no source, no license, and the changelog is the entire evidence surface, and its two official copies have already been observed to disagree on a security clause. If you need an open, self-hostable CLI, the Apache-2.0 gemini-cli repository or another open harness is the honest choice."
  watch_next: "Whether a fourth headless enforcement gap appears; whether Google publishes a license, a security-advisory channel, or any verifiable statement of what the sandbox enforces; whether the release body and CHANGELOG.md are ever reconciled; and whether the pattern of announcing hardening and shipping loosening quietly persists into the next train."
---

# Antigravity CLI

## Operator Read

The single most consequential line Antigravity published this window is a bug
fix. Version [1.1.4](https://github.com/google-antigravity/antigravity-cli/releases/tag/1.1.4)
(2026-07-18) states that headless `-p` and `--print` runs "now honor persisted
`settings.json` policies, including `permissions`, file access, sandbox mode,
auto-execution, and artifact review." Read it plainly and it is not a fix note,
it is a disclosure: before 1.1.4, every governance control an operator had
configured was inert in exactly the mode continuous integration uses. The runs
you could not watch were the runs your policy did not reach.

**1.1.4 is the hard upgrade floor for any non-interactive use of `agy`.** If you
ran it headless before 2026-07-18, do not assume your configuration held. Audit
what those runs were allowed to touch -- files outside the workspace, commands
your allowlist did not cover, artifacts nobody reviewed -- because the vendor's
own account says the policy was not applied. The
[signal](/signals/2026-07-27-antigravity-headless-honored-no-policy/) carries
that decision on its own.

That is the sharpest instance of the trade this tool asks you to make.
Antigravity CLI -- the `agy` binary -- is Google's closed-source, Go-written
successor to consumer Gemini CLI, the path Google points individual users to
after
[2026-06-18](https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/).
Gemini CLI was open source: an approval rule or a sandbox boundary was, in
principle, readable. Antigravity is not. Its
[repository at the 1.1.7 tag](https://github.com/google-antigravity/antigravity-cli/tree/2ae8126db826afb9477bb81f663294f8b5dff84e)
contains five entries -- a changelog, a README, a demo GIF, a `.github`
directory, and examples -- and no code. The GitHub API reports `license: null`.
Every release ships six prebuilt binary archives and nothing else. So when the
changelog says a control now binds, you have no way to confirm it except by
running a probe yourself. We ran none for this window, and we say so rather than
implying otherwise.

Nine releases landed in 25 days, on roughly a three-day cadence, with a minor
bump from the 1.0.x line to 1.1.x. Hardening and loosening rode the same train.

## The Mode You Could Not Watch

Three separate releases fixed governance that did not bind in headless mode,
and the sequence matters more than any one of them.

[1.1.3](https://github.com/google-antigravity/antigravity-cli/releases/tag/1.1.3)
(2026-07-16) fixed headless runs "hanging or silently auto-approving tools that
require a permission confirmation," so the CLI now soft-denies such tools and
prints a stderr notice naming the allow-rule needed to permit them. The same
release fixed "outside-of-workspace file writes being incorrectly auto-approved
in always-proceed mode." A maintainer announced it on X the same day.

[1.1.4](https://github.com/google-antigravity/antigravity-cli/releases/tag/1.1.4)
landed 48 hours later and disclosed that headless runs had, until that moment,
honored no persisted policy at all. Read together: an announced permissions fix
was sitting on top of total non-enforcement of the operator's permissions file
in the same mode. The 1.1.3 post is a receipt for what was said. It is not a
receipt that headless governance worked, and the vendor's own next changelog
says it did not. The same release also fixed custom agents declaring
`subagent: false` that "still appeared in the available-subagents list and were
invocable as subagents" -- a declared restriction that was not enforced.

[1.1.7](https://github.com/google-antigravity/antigravity-cli/releases/tag/1.1.7)
(2026-07-26) makes it three. Print mode was "sending a prompt before the
account-eligibility check finished, which let ineligible accounts bypass the
check the interactive UI enforces." The same release fixed disabled plugins that
still ran their hooks -- turning a plugin off did not stop it executing -- and
improved permission prompts "for compound shell commands so the full command is
shown when any part of it needs approval," which means an operator approving a
compound command had not been shown the whole thing they were approving.

The pattern is specific enough to act on: in this tool, the interactive path and
the non-interactive path have repeatedly enforced different rules, and the
non-interactive one is the weaker. Do not infer headless behavior from what you
see in the terminal.

## Hardening And Loosening On The Same Train

Antigravity's governance is real and active. It also moved in both directions
inside 25 days, and only one direction was announced.

[1.1.0](https://github.com/google-antigravity/antigravity-cli/releases/tag/1.1.0)
(2026-07-08) is the strongest hardening in the window: `request-review` became
the default execution mode, automatically pausing before file-write operations
to show an interactive, line-level diff preview where a human accepts or rejects
individual modifications before they reach disk. It also made execution-mode
cycling public (`default` to `accept-edits` to `plan`) and **removed the `/fast`
slash commands**, which breaks any script or workflow that invoked them.

[1.1.1](https://github.com/google-antigravity/antigravity-cli/releases/tag/1.1.1)
(2026-07-10) reopened it two days later: the default mode now respects
`write_file` permissions allowlisted in `settings.json` under `permission.allow`,
"so pre-approved file writes no longer prompt for review." The review gate you
gained on the 8th is only as strong as your allowlist on the 10th.

[1.1.2](https://github.com/google-antigravity/antigravity-cli/releases/tag/1.1.2)
(2026-07-13) widened allowlist matching further: nested command substitutions now
inherit allowlist approval, so `echo "$(dirname $(git rev-parse --show-toplevel))"`
runs unprompted when `echo` and `git` are allowlisted. Write your allowlist rules
assuming substitution inherits approval.

[1.1.6](https://github.com/google-antigravity/antigravity-cli/releases/tag/1.1.6)
(2026-07-24) grants read access to the system temporary directory out of the box,
"so agents no longer trigger permission prompts when reading temporary files."
That is a default widening into a location that routinely holds credential
caches, session tokens, and scratch data from unrelated applications. If anything
in your pipeline writes secrets to `/tmp` or the Windows temp path, it is now
inside the agent's default read scope. The same release disclosed that sandbox
denials had been going unrecorded when the network proxy was disabled, and added
Markdown custom agents (`agent.md` with YAML frontmatter carrying `mainAgent`,
`subagent`, `hidden`, `inheritMcp`, and `commandExecutionPolicy`) -- a per-agent
command-execution policy surface worth reading before you use it.

The two remaining releases are mostly capability.
[1.1.5](https://github.com/google-antigravity/antigravity-cli/releases/tag/1.1.5)
(2026-07-21) adds `/effort` and `--effort`, stable user-facing model slugs, and a
`model` option in custom-agent frontmatter defaulting to `inherit`.
[1.0.16](https://github.com/google-antigravity/antigravity-cli/releases/tag/1.0.16)
(2026-07-02) moved subagent definitions from JSON to Markdown and stopped a
pre-tool hook error on empty decision strings -- without stating what the CLI now
does with an empty decision. If you gate tools with a pre-tool hook, the
changelog does not tell you whether it fails open or closed. Probe it before
relying on it as a control.

## The Changelog Is The Whole Evidence Surface, And It Contradicts Itself

For a closed-source tool the changelog is not documentation, it is evidence.
Which makes the following a defect rather than a formatting quirk.

For 1.1.7, the two official surfaces named in this profile's source contract
disagree. `CHANGELOG.md` at the pinned commit lists seven items; the GitHub
release body lists six. One changelog item is absent from the release body
entirely, and the eligibility item is **truncated**: the changelog reads "Fixed
print mode (`-p`) sending a prompt before the account-eligibility check finished,
which let ineligible accounts bypass the check the interactive UI enforces," and
the release body stops at "...before the account-eligibility check finished."
The dropped clause is the one that says a check was bypassed. The more widely
read surface understates the security consequence, and no statement anywhere
says which surface is authoritative.

The practical instruction: read
[`CHANGELOG.md` at a pinned commit](https://github.com/google-antigravity/antigravity-cli/blob/2ae8126db826afb9477bb81f663294f8b5dff84e/CHANGELOG.md),
not the release page.

Three more properties of the surface are worth holding.

**Tag identity does not establish binary identity.** The `1.1.2` and `1.1.3`
tags resolve to the same commit and share a `created_at` timestamp while
publishing three days apart. Because the repository holds only a changelog,
nothing about the tags tells you whether the two binaries differ.

**The documented install path is an unpinned remote script.** The
[README at 1.1.7](https://github.com/google-antigravity/antigravity-cli/blob/2ae8126db826afb9477bb81f663294f8b5dff84e/README.md)
documents installation exclusively as `curl -fsSL
https://antigravity.google/cli/install.sh | bash`, an `irm ... | iex` PowerShell
variant, and a `curl`-then-execute form for CMD. No checksum, no signature, no
version pinning is documented. The same README states that using the CLI means
agreeing to let Google collect and use your interactions data, opt-out available
in settings, and carries Google's own warning that AI coding agents carry
autonomous-execution, exfiltration, prompt-injection, and supply-chain risk. It
also states that the CLI and the Antigravity 2.0 GUI share a core agent engine
and that "preferences and permissions sync bidirectionally" -- so a permission
change made in either surface changes the other.

**There is no advisory channel and no license.** Nothing in the window was
published as a security event; every enforcement gap above was disclosed as a
changelog line. The repository has no security-advisory surface, and neither the
repository nor the distributed binaries carry a stated license.

## What Was Announced, And What Was Not

This belongs in the profile because it changes how much weight an operator can
put on the vendor's public account of its own product.

Of the nine releases in the window, five produced no maintainer or official post
in the public record we swept: 1.0.16, 1.1.1, 1.1.2, 1.1.4, and 1.1.7. Those are
exactly the releases that loosened a control or admitted one had not been
binding. 1.1.0's review-first default was posted three times. 1.1.3, 1.1.5, and
1.1.6 were posted within minutes to hours of publication. 1.1.3 is the one
release in the window that announced a correction, and its post led with
rendering, clipboard, CPU cost, and a new search command before reaching the
permissions item.

We are not imputing a motive, and the bound matters: this is a statement about
the posts we harvested, not proof that nothing was said anywhere. Good news
travels faster than bad news at every company, and nobody needs a conspiracy to
explain a maintainer posting a fix and not posting an embarrassment. The
operator consequence is identical either way. A reader following Antigravity's
own account saw the hardening and never the loosening, and the model of the
product that the public conversation formed on 2026-07-08 -- review-first out of
the box -- was accurate for 48 hours and was still being repeated at the end of
the window.

## Governance Boundaries

What an operator actually configures, as of 1.1.7:

- **Execution mode.** `request-review` is the default and pauses before file
  writes for a line-level diff. `accept-edits` and `plan` are the other two
  points in the cycle. `always-proceed` auto-approves; before 1.1.3 it could
  auto-approve writes outside the workspace.
- **`permission.allow` in `settings.json`.** Allowlisted `write_file`
  permissions bypass the diff review (1.1.1), and allowlist approval is
  inherited by nested command substitutions (1.1.2). This list is now the
  load-bearing control, and it is more permissive than it reads.
- **Sandbox mode.** A `proceed-in-sandbox` mode auto-approves commands inside
  the secure sandbox with `.git` on the dangerous-path list. Its enforcement is
  a changelog assertion; sandbox denials went unlogged with the proxy disabled
  until 1.1.6.
- **Default file access.** Reads of the system temp directory are granted
  without prompting from 1.1.6.
- **Subagents.** Nesting has no stated depth bound; 1.1.1 added recursive
  relaying of grandchild-and-deeper confirmations to the root conversation.
  `subagent: false` was not enforced until 1.1.4. Per-agent
  `commandExecutionPolicy` arrived in `agent.md` frontmatter in 1.1.6.
- **Pre-tool hooks.** An empty decision string no longer errors (1.0.16), but
  the fail direction is unstated. Disabled plugins ran their hooks until 1.1.7.
- **Headless.** Everything above applied only from 1.1.4 onward.

## Known Limits

No local probe has been run against the binary, so every behavior above is a
vendor assertion rather than a measurement, and this profile will not present it
as more than that. The closed binary means an approval or sandbox guarantee
cannot be checked at all, which is not a criticism of the engineering -- it is a
statement about what evidence exists.

The tier boundary of the Gemini CLI retirement is also not consistently stated
across Google's own surfaces. The
[developer-blog transition post](https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/)
is the receipt for the change; the
[geminicli.com banner](https://geminicli.com/docs/get-started/authentication/)
names "Unpaid tier and Google One users" and still says "will be replaced ... on
June 18th" in the future tense more than a month after the date; and the
[documentation shipped at gemini-cli v0.52.0](https://github.com/google-gemini/gemini-cli/blob/d14583b926769bd98f807cdc6b1ca50e91ae26ec/docs/get-started/authentication.mdx)
still instructs Google AI Pro and Ultra subscribers to sign in with their
subscription account. Do not use any single Google surface to determine whether
your tier still has access. See the [gemini-cli profile](/profiles/gemini-cli/)
for the other side of the retirement, including that the open-source repository
is alive and cut three stable tags inside this same window.

## Open Questions

- Does a pre-tool hook returning an empty decision string fail open or fail
  closed? The changelog does not say, and this is the cheapest question to
  settle with a local probe.
- Do the `1.1.2` and `1.1.3` binaries differ? The tags share a commit and the
  repository holds no code, so this is not determinable from public data.
- Which surface is authoritative when `CHANGELOG.md` and the GitHub release body
  disagree? No statement addresses it.
- What does the sandbox actually enforce, and against what threat model? The
  only description is a changelog phrase and a dangerous-path list.
- Is there a fourth headless enforcement gap? Three separate releases fixed one
  in 10 days, which is a rate, not a coincidence.
- What license governs the distributed binaries? `license: null` on the
  repository, and no `LICENSE` file at the tag.
- Where do Markdown custom agents live on disk? The 1.1.6 changelog confirms the
  format but states no path; a maintainer post places it under the predecessor
  product's dotfile directory, which is a lead for a probe rather than a receipt.
- What is the practical blast radius of bidirectional permission sync between
  the CLI and the GUI? A permission relaxed in one surface applies in the other,
  and no scoping rule is documented.

## What To Watch Next

- Whether Google publishes a license, an advisory channel, or any statement that
  can be checked against something other than its own changelog. This is the
  single change that would most improve the tool's auditability.
- Whether the release-body truncation is corrected, and whether the two official
  surfaces are ever reconciled.
- Whether a fourth headless or print-mode enforcement gap surfaces, which would
  move this from a fixed bug class to a structural property of the binary.
- Whether the announcement asymmetry continues in the next release train.
- Whether default file access widens further, and whether the temp-directory
  grant becomes configurable.
- Whether the subagent surface acquires a stated depth bound now that nesting is
  recursive and per-agent execution policy is configurable.
- Whether local probing becomes part of this publication's method for
  closed-source tools. For Antigravity, nothing else can raise the evidence
  above assertion.

## Profile Hygiene

This profile follows the profile discipline defined in
[METHOD.md](../../METHOD.md#the-object-grammar): every concrete claim in the
prose carries an inline source link, and posture sections may interpret freely
but must stay inside what the receipts support.

The evidence floor here is `official_changelog`, and for this source that is
also the ceiling. Quotations are taken from `CHANGELOG.md` pinned at the 1.1.7
tag commit `2ae8126db826afb9477bb81f663294f8b5dff84e` and from the individual
GitHub release bodies. Channel is recorded as `tagged-release` throughout,
because every version above has a real git tag and a release page with attached
binaries. That establishes the artifact shipped. It does not establish that the
described behavior is what the binary does.

The `claims:` block records claims promoted from individual findings in the
2026-07-01 intake. The 2026-07-02 to 2026-07-27 research produced consolidated
harvest and cross-check artifacts rather than individual finding files, so this
window's material is carried in prose with inline receipts and is not
represented in that block.

One correction to the prior record: the 2026-07-01 cycle declined to promote an
Antigravity finding because 1.0.15 and 1.0.16 had no public tags or release
pages. That was wrong. Both have git tags and GitHub release pages with binary
assets, created and published on 2026-07-01 and 2026-07-02 respectively.

