# Harvest -- antigravity (primary sources)

Window: 2026-07-02 to 2026-07-27. Source contract: `sources/antigravity.yml`.

## Verifiability statement -- read this before any claim below

Antigravity CLI is closed source. The repository
`google-antigravity/antigravity-cli` contains **no source code**. A directory
listing of the repository root, pinned at the `1.1.7` tag commit
`2ae8126db826afb9477bb81f663294f8b5dff84e`, returns exactly five entries:

```
dir   .github
file  CHANGELOG.md      (45239 bytes)
file  README.md         (3099 bytes)
file  agy-cli-demo.gif  (25382285 bytes)
dir   examples
```

There is no `LICENSE` file and the GitHub API reports `license: null` for the
repository. Each release ships six prebuilt binary archives
(`agy_cli_{linux,mac,windows}_{x64,arm64}`) and nothing else.

- receipt: https://github.com/google-antigravity/antigravity-cli/tree/2ae8126db826afb9477bb81f663294f8b5dff84e
- receipt: https://github.com/google-antigravity/antigravity-cli/releases/tag/1.1.7

**Every behavioral claim in this file is quoted from the CHANGELOG or a GitHub
release body. None of it can be verified against code, because there is no code
to read.** Where the changelog says a control was "fixed," an operator has no way
to confirm the control now binds except by running a local probe. No probe was
run for this harvest. Channel is recorded as `tagged-release` throughout because
every version below has a real git tag and a release page with attached binaries;
that establishes the artifact shipped, not that the described behavior is what
the binary does.

## Correction to the prior record

The 2026-07-01_2026-07-02 digest did not promote the Antigravity finding because
"Without public tags or release pages for 1.0.15/1.0.16, it stays background."
That is not the current state of the surface. Both versions have git tags and
GitHub release pages with binary assets:

- `1.0.15` -- tag `b2e2901a266a7bde9a7a5d4418205ffd50e92431`, release created
  2026-07-01T22:54:39Z, published 2026-07-01T22:59:00Z, 6 assets
- `1.0.16` -- tag `2939422297ba014da627961f4e387fad0e151f47`, release created
  2026-07-02T18:35:18Z, published 2026-07-02T18:37:15Z, 6 assets

- receipt: https://github.com/google-antigravity/antigravity-cli/releases/tag/1.0.15
- receipt: https://github.com/google-antigravity/antigravity-cli/releases/tag/1.0.16

## Release train in window

Nine releases in 25 days, and a minor-version bump from the 1.0.x line to 1.1.x.
All dates are the GitHub API `published_at` ISO timestamp.

| version | published_at | tag commit |
| --- | --- | --- |
| `1.0.16` | 2026-07-02T18:37:15Z | `2939422297ba014da627961f4e387fad0e151f47` |
| `1.1.0` | 2026-07-08T03:25:54Z | `ee2382093ac06d9d68fc88e822713357c2401a78` |
| `1.1.1` | 2026-07-10T03:40:13Z | `b5578c4bbeae95fd9be14d14ac61563bd9f20363` |
| `1.1.2` | 2026-07-13T23:26:02Z | `b27d51dbe52b1b0686b501302b9c4a353d84661d` |
| `1.1.3` | 2026-07-16T01:01:57Z | `b27d51dbe52b1b0686b501302b9c4a353d84661d` |
| `1.1.4` | 2026-07-18T00:48:48Z | `80a0b2432a6a8cc0d4a75fe2799024a99e160fcd` |
| `1.1.5` | 2026-07-21T02:33:39Z | `e629ec8cd06efbe618eca6c496b122ebeedf00f4` |
| `1.1.6` | 2026-07-24T03:02:18Z | `a8406b1f1d48663380186aaa322d12c2f908a94b` |
| `1.1.7` | 2026-07-26T00:43:16Z | `2ae8126db826afb9477bb81f663294f8b5dff84e` |

Note the `1.1.2` and `1.1.3` tags resolve to the **same commit**
(`b27d51dbe52b1b0686b501302b9c4a353d84661d`), and both releases share the
`created_at` timestamp 2026-07-13T23:07:37Z while publishing three days apart.
Because the repository holds only the changelog, tag identity says nothing about
binary identity -- two tags on one commit does not establish that the `1.1.2` and
`1.1.3` binaries are the same or different.

- receipt: https://api.github.com/repos/google-antigravity/antigravity-cli/tags

The full changelog used for every quotation below is pinned at:
https://github.com/google-antigravity/antigravity-cli/blob/2ae8126db826afb9477bb81f663294f8b5dff84e/CHANGELOG.md

---

## 1. `1.1.0` makes a human review gate the DEFAULT before file writes (2026-07-08)

The changelog and the release body both state: "Added `request-review` (default)
mode as the default execution behavior: automatically pauses before file write
operations to display an interactive, line-level diff preview (`f` shortcut)
where users can review, accept, or reject individual code modifications before
they are saved to disk." The same release makes execution-mode cycling public
(`default` -> `accept-edits` -> `plan`), adds an `Agent Mode` setting to
`/settings`, adds a dedicated create-file confirmation preview for
`write_to_file` without overwrite, and **removes the `/fast` slash commands**,
replacing legacy `/planning` with `/plan`.

- channel: `tagged-release` (`1.1.0`, 2026-07-08)
- evidence surface: changelog and release body -- not verifiable against code
- receipt: https://github.com/google-antigravity/antigravity-cli/releases/tag/1.1.0
- receipt: https://github.com/google-antigravity/antigravity-cli/blob/2ae8126db826afb9477bb81f663294f8b5dff84e/CHANGELOG.md

Operator consequence: this is the strongest hardening in the window -- a human
diff review before every write, on by default -- and it also removes `/fast`, so
any workflow or script that invoked `/fast` breaks on upgrade.

---

## 2. `1.1.1` reopens the gate `1.1.0` closed, two days later (2026-07-10)

The changelog states: "Changed the default mode to respect write_file permissions
allowlisted in `settings.json` under `permission.allow`, so pre-approved file
writes no longer prompt for review."

That is a direct partial reversal of the `1.1.0` default: writes matching an
allowlist entry now bypass the `request-review` diff gate. The same release adds
"support for displaying nested subagents (grandchild and deeper) and handling
tool confirmation requests across all subagent depths by recursively relaying
nested subtrajectory updates to the root conversation" -- confirming that
subagent nesting has no stated depth bound.

- channel: `tagged-release` (`1.1.1`, 2026-07-10)
- evidence surface: changelog -- not verifiable against code
- receipt: https://github.com/google-antigravity/antigravity-cli/releases/tag/1.1.1

Operator consequence: the review gate you gained on 2026-07-08 is only as strong
as your `permission.allow` list on 2026-07-10 -- audit that list before assuming
writes are reviewed.

---

## 3. `1.1.3` fixes two auto-approval bypasses (2026-07-16)

Two entries in the `1.1.3` changelog describe controls that were not binding:

1. "Fixed headless (`-p`) runs hanging or silently auto-approving tools that
   require a permission confirmation, so the CLI now soft-denies such tools and
   prints a stderr notice naming the allow-rule needed to permit them."
2. "Fixed outside-of-workspace file writes being incorrectly auto-approved in
   always-proceed mode."

A third entry is adjacent to the symlink class of bug: "Fixed customization rules
being loaded twice when a rules directory is reachable through a symlink."

The same release adds `/codesearch` (aliases `/cs`, `/search`), copy-on-select in
no-flickering mode, a context-compaction boundary indicator, and bounds MCP
connection, tool-listing, and per-tool-call attempts with timeouts so an
unresponsive MCP server can no longer hang the agent indefinitely.

- channel: `tagged-release` (`1.1.3`, 2026-07-16)
- evidence surface: changelog -- not verifiable against code
- receipt: https://github.com/google-antigravity/antigravity-cli/releases/tag/1.1.3

Operator consequence: before `1.1.3`, an `agy -p` run could silently auto-approve
tools that should have prompted, and always-proceed mode could write outside the
workspace -- if you ran either configuration in CI, assume those actions occurred
unreviewed and audit accordingly.

---

## 4. `1.1.4` reveals that headless runs ignored `settings.json` policy entirely (2026-07-18)

The single most consequential line in the window's changelog: "Fixed headless
(`-p` / `--print`) runs so they now honor persisted `settings.json` policies,
including `permissions`, file access, sandbox mode, auto-execution, and artifact
review."

Read plainly, before `1.1.4` a headless Antigravity run did not apply the
operator's configured permissions, file-access rules, sandbox mode,
auto-execution policy, or artifact review. Every governance control an operator
had written into `settings.json` was inert in the non-interactive mode that CI
and automation use.

The same release also states: "Fixed custom agents that declare `subagent: false`
still appearing in the available-subagents list and being invocable as subagents"
-- a declared restriction that was not enforced.

- channel: `tagged-release` (`1.1.4`, 2026-07-18)
- evidence surface: changelog -- not verifiable against code
- receipt: https://github.com/google-antigravity/antigravity-cli/releases/tag/1.1.4
- receipt: https://github.com/google-antigravity/antigravity-cli/blob/2ae8126db826afb9477bb81f663294f8b5dff84e/CHANGELOG.md

Operator consequence: `1.1.4` is the hard upgrade floor for anyone running `agy`
non-interactively -- on any earlier version your `settings.json` governance did
not apply to the runs you could not watch.

---

## 5. `1.1.6` widens default file access to the system temp directory (2026-07-24)

The changelog states: "Improved default file access by granting read access to
the system temporary directory out of the box, resolved correctly per platform,
so agents no longer trigger permission prompts when reading temporary files."

This is a default-widening, framed as a usability improvement. Temporary
directories routinely hold credential caches, session tokens, and process
scratch data from unrelated applications.

The same release adds Markdown-format custom agents (`agent.md` with YAML
frontmatter) supporting `mainAgent`, `subagent`, `hidden`, `inheritMcp`, and
`commandExecutionPolicy` frontmatter fields -- a per-agent command-execution
policy surface and per-agent MCP inheritance. It also fixes sandbox error
reporting "so blocked actions are recorded even when the network proxy is
disabled," meaning sandbox denials were previously going unrecorded in that
configuration.

- channel: `tagged-release` (`1.1.6`, 2026-07-24)
- evidence surface: changelog -- not verifiable against code
- receipt: https://github.com/google-antigravity/antigravity-cli/releases/tag/1.1.6

Operator consequence: after `1.1.6` an agent reads your system temp directory
without prompting -- if anything in your pipeline writes secrets to `/tmp` or the
Windows temp path, that is now inside the agent's default read scope.

---

## 6. `1.1.7` fixes a third headless bypass and admits permission prompts were showing partial commands (2026-07-26)

Two entries matter:

1. "Improved permission prompts for compound shell commands so the full command
   is shown when any part of it needs approval." Before this, an operator
   approving a compound command was not shown the full command they were
   approving.
2. "Fixed print mode (`-p`) sending a prompt before the account-eligibility check
   finished, which let ineligible accounts bypass the check the interactive UI
   enforces."

Also: "Fixed disabled plugins still running their hooks and contributing other
customizations, which could keep a broken hook active and break file-editing
tools even after the plugin was turned off" -- a disabled plugin continued to
execute.

- channel: `tagged-release` (`1.1.7`, 2026-07-26)
- evidence surface: changelog -- not verifiable against code
- receipt: https://github.com/google-antigravity/antigravity-cli/releases/tag/1.1.7

Operator consequence: turning a plugin off did not stop its hooks running, and
the approval prompt you were reading may not have shown the whole command -- both
only fixed on 2026-07-26.

---

## 7. RECEIPT DEFECT: the `1.1.7` release body and `CHANGELOG.md` disagree, and the release body drops the security consequence

The two official surfaces named in `sources/antigravity.yml` -- the GitHub
release page and `CHANGELOG.md` -- do not match for `1.1.7`.

`CHANGELOG.md` at `2ae8126` lists seven items. The GitHub release body lists six.
Two differences:

1. The changelog item "Improved headless print mode by adding a
   `cache_read_tokens` field to the `json` and `stream-json` usage output, so
   non-interactive consumers can attribute prompt-cache hits" is **absent** from
   the release body.
2. The eligibility item is **truncated** in the release body. The changelog
   reads: "Fixed print mode (`-p`) sending a prompt before the account-eligibility
   check finished, which let ineligible accounts bypass the check the interactive
   UI enforces." The release body stops at "...before the account-eligibility
   check finished." -- dropping the clause that says a check was bypassed.

- channel: `tagged-release` (`1.1.7`, 2026-07-26)
- receipt: https://github.com/google-antigravity/antigravity-cli/releases/tag/1.1.7
- receipt: https://github.com/google-antigravity/antigravity-cli/blob/2ae8126db826afb9477bb81f663294f8b5dff84e/CHANGELOG.md

Operator consequence: for a closed-source tool the changelog IS the evidence, and
here the more widely-read surface understates a bypass -- read `CHANGELOG.md` at
a pinned commit, not the release page.

---

## 8. `1.1.2` and `1.1.5` -- allowlist loosening and model-selection surface

`1.1.2` (2026-07-13): "Fixed permission checks not respecting the allowlist for
nested command substitutions, so a command like `echo "$(dirname $(git rev-parse
--show-toplevel))"` now runs without prompting when `echo` and `git` are
allowlisted, instead of double-counting the nested command and prompting for
review." This is a loosening -- nested command substitutions now inherit
allowlist approval. It also hard-fails print mode when `--model` cannot be
resolved rather than silently downgrading to the default model, and fixes a data
race that corrupted step counts and status for parallel subagents.

`1.1.5` (2026-07-21): adds `/effort` and `--effort` for reasoning-effort
selection, "stable, user-facing model slugs" accepted by `--model`, and a `model`
option in custom-agent frontmatter so a subagent runs at a chosen tier
(defaulting to `inherit`). It also fixes "permission checks splitting a single
command into a pipeline when an argument contained quoted shell metacharacters
(such as `--grep="a|b"`), which caused spurious permission prompts."

- channel: `tagged-release` (`1.1.2`, 2026-07-13; `1.1.5`, 2026-07-21)
- evidence surface: changelog -- not verifiable against code
- receipt: https://github.com/google-antigravity/antigravity-cli/releases/tag/1.1.2
- receipt: https://github.com/google-antigravity/antigravity-cli/releases/tag/1.1.5

Operator consequence: an allowlist entry for `echo` now also covers whatever a
nested `$(...)` inside it resolves to -- write allowlist rules assuming
substitution inherits approval.

---

## 9. `1.0.16` -- subagent definitions moved from JSON to Markdown (2026-07-02)

"Fixed dynamically defined subagents by transitioning definitions from JSON to
Markdown format, fixing an issue where dynamically created subagents failed to
invoke." Also: "Fixed a permission manager hook error by safely handling empty
decision strings returned by pre-tool hooks instead of failing with an 'unknown
pre-tool hook decision' error."

The second item is governance-relevant: a pre-tool hook returning an empty
decision string previously errored. The changelog does not state what the CLI now
does with an empty decision -- allow, deny, or prompt.

- channel: `tagged-release` (`1.0.16`, 2026-07-02)
- evidence surface: changelog -- not verifiable against code
- receipt: https://github.com/google-antigravity/antigravity-cli/releases/tag/1.0.16

Operator consequence: if you gate tools with a pre-tool hook, the changelog does
not tell you the fail-open or fail-closed direction for an empty decision --
probe it before relying on the hook as a control.

---

## 10. Distribution and terms, pinned at `1.1.7`

The README at `2ae8126` documents installation exclusively via remote pipe-to-shell:
`curl -fsSL https://antigravity.google/cli/install.sh | bash` (macOS/Linux),
`irm https://antigravity.google/cli/install.ps1 | iex` (PowerShell), and a
`curl`-then-execute variant for CMD. No checksum, signature, or version-pinning
mechanism is documented.

The README also states: "By using Antigravity CLI, you agree to help improve the
product by allowing Google to collect and use your Interactions data, subject to
the Google Terms of Service and Google Privacy Policy. You can choose to opt out
at any time via your settings." And it carries Google's own warning: "AI coding
agents are known to have certain security risks, including autonomous code
execution, data exfiltration, prompt injection, and supply chain risks. Ensure
that you monitor and verify all actions taken by the agent."

It further states the CLI and the Antigravity 2.0 GUI use a "Shared Core Agent
Engine" and that "Preferences and permissions sync bidirectionally."

- channel: `tagged-release` (README as shipped at `1.1.7`, 2026-07-26)
- receipt: https://github.com/google-antigravity/antigravity-cli/blob/2ae8126db826afb9477bb81f663294f8b5dff84e/README.md

Operator consequence: the documented install path is an unpinned remote script,
interaction data collection is on by default, and permissions sync bidirectionally
with the GUI -- a permission change made in either surface affects the other.

---

## Pattern for the digest

Across the window Antigravity shipped **four separate fixes for governance
controls that did not bind in headless / print mode**: silent auto-approval of
tools requiring confirmation (`1.1.3`, 2026-07-16), total non-enforcement of
`settings.json` permissions, file access, sandbox mode, auto-execution, and
artifact review (`1.1.4`, 2026-07-18), plus the earlier print-mode policy gaps
and the eligibility-check bypass (`1.1.7`, 2026-07-26). It also fixed
outside-of-workspace writes being auto-approved in always-proceed mode (`1.1.3`).

In the same 25 days it made a diff-review gate the default (`1.1.0`), then
allowed the allowlist to bypass that gate (`1.1.1`), loosened allowlist matching
for nested command substitutions (`1.1.2`), and widened default read access to
the system temp directory (`1.1.6`).

The hardening and the loosening ship in the same train, on a roughly
three-day cadence, and none of it is checkable against source.

## Open items carried out of this window

- No local probe was run. Every control described above remains a changelog
  assertion.
- The changelog does not state the fail direction for a pre-tool hook returning
  an empty decision string (`1.0.16`).
- `1.1.2` and `1.1.3` share a tag commit; whether the shipped binaries differ is
  not determinable from the repository.
- The `1.1.7` release body and `CHANGELOG.md` disagree; no statement explains
  which surface is authoritative.
- No license governs the repository (`license: null`, no `LICENSE` file) and none
  is stated for the distributed binaries.
