# OpenCode Source Notes

Added 2026-10-24. Handling: **Tier 1, daily.** OpenCode is Anomaly's
[MIT-licensed coding agent](https://github.com/anomalyco/opencode/blob/v2.1.4/LICENSE),
with a terminal interface, desktop app, browser client and programmatic surfaces.
The [newest stable CLI is 2.1.4, dated 2026-10-23](https://opencode.ai/changelog).
The current package is
[`@opencode/cli`](https://registry.npmjs.org/@opencode%2fcli/2.1.4).
[`opencode-ai` remains the OpenCode 1 package](https://github.com/anomalyco/opencode/blob/v1.19.4/README.md#installation),
currently [1.19.4, released 2026-10-22](https://github.com/anomalyco/opencode/releases/tag/v1.19.4).
Watching only that familiar package name would miss the current major.

## Why it is on the watchlist

The [repository API](https://api.github.com/repos/anomalyco/opencode) returned
**220,865 stars** at intake. npm's downloads API returned
[2,180,172 downloads for `opencode-ai`](https://api.npmjs.org/downloads/point/2026-10-16:2026-10-22/opencode-ai)
and [321,091 for `@opencode/cli`](https://api.npmjs.org/downloads/point/2026-10-16:2026-10-22/@opencode%2fcli)
for the same seven days, 2026-10-16 through 2026-10-22. Stars measure attention;
downloads include repeated installations and automation. Neither is an
active-user count, and the two packages' downloads are not disjoint people.

Release activity makes daily observation worthwhile. Filtering the
[`@opencode/cli` registry time map](https://registry.npmjs.org/@opencode%2fcli)
for plain stable versions published in the 30 complete UTC days from 2026-09-24
through 2026-10-23 yields **22 publications**, from 2.0.16 through 2.1.4.
The [GitHub releases API](https://api.github.com/repos/anomalyco/opencode/releases?per_page=100)
contains **eight non-draft, non-prerelease V1 releases** in that interval,
v1.18.33 through v1.19.4. These are distribution events, not counts of useful
capability changes.

The editorial reason is the operating layer. The
[optional Console](https://github.com/anomalyco/opencode/blob/v2.1.4/services/www/src/docs/content/console/index.mdx#L5-L15)
combines inference, provider accounts, budgets and organization policies around
an open harness. The
[client/server design](https://github.com/anomalyco/opencode/blob/v2.1.4/services/www/src/docs/content/cli/web.mdx)
lets different interfaces operate the same execution host. This is a useful test
of whether provider flexibility and open integration seams remain valuable as
general models improve, and whether broader delegation reduces the human queue.
The profile must establish those outcomes rather than assume them from adoption.

## Identity and channel traps

- **The SST transfer is the same repository.** `gh api repos/sst/opencode`
  and `gh api repos/anomalyco/opencode` both returned repository ID
  **975734319**, `full_name: anomalyco/opencode`, homepage `https://opencode.ai`
  and default branch `dev`. The
  [former namespace API](https://api.github.com/repos/sst/opencode) and
  [canonical API](https://api.github.com/repos/anomalyco/opencode) make the
  continuity check repeatable. The [official site](https://opencode.ai/) links
  the canonical repository and current docs; the
  [tagged README](https://github.com/anomalyco/opencode/blob/v2.1.4/README.md#installation)
  links back to the site, V2 docs and current npm package.
- **The Go project is a different lineage.**
  [`opencode-ai/opencode`](https://api.github.com/repos/opencode-ai/opencode)
  is an archived Go repository with ID **949662713**. Its
  [pinned archival README explicitly directs users to Charm's Crush](https://github.com/opencode-ai/opencode/blob/73ee493265acf15fcd8caab2bc8cd3bd375b63cb/README.md#archived-project-has-moved).
  [`charmbracelet/crush`](https://github.com/charmbracelet/crush) is that
  successor, not an earlier version of Anomaly's agent. The npm package string
  `opencode-ai` does not establish affiliation with the similarly named GitHub
  organization. Exclude their releases, configuration and permission claims.
- **The current major has a different package.** `npm view @opencode/cli`
  returned `latest: 2.1.4` and repository `anomalyco/opencode`.
  The [registry time map](https://registry.npmjs.org/@opencode%2fcli) dates
  publication to **2026-10-23T10:13:53.203Z**. The
  [V2 tag API](https://api.github.com/repos/anomalyco/opencode/git/ref/tags/v2.1.4)
  dereferences to **68bc26b7da1990ce10ffecfbc1e09eb13aa5d824**. This agrees
  with the official changelog's October 23 entry. `npm view opencode-ai`
  instead returned `latest: 1.19.4`; its registry publication was
  **2026-10-22T13:03:43.704Z**. The
  [V1 tag](https://api.github.com/repos/anomalyco/opencode/git/ref/tags/v1.19.4)
  resolves to **148842ef7cb1bc34192b3fff57d0f9721ab9c801**.
- **GitHub Latest is not the newest major.** At intake,
  [`releases/latest`](https://api.github.com/repos/anomalyco/opencode/releases/latest)
  returned v1.19.4, published **2026-10-22T13:03:41Z**. Looking up a GitHub
  Release object for v2.1.4 returned 404 despite the tagged, published npm
  version. The [V2 publishing source](https://github.com/anomalyco/opencode/blob/v2.1.4/script/publish.ts)
  and [artifact publisher](https://github.com/anomalyco/opencode/blob/v2.1.4/script/update-artifact.ts)
  show source tags and the official update service as separate surfaces.
  Resolve package, tag and downloadable artifact separately. A release's
  `target_commitish` is not the dereferenced tag commit.
- **Preview names can outlive their channel.** The
  [current registry](https://registry.npmjs.org/@opencode%2fcli) had `dev`
  pointing to `0.0.0-dev-21766` and `beta` to `0.0.0-beta-19507`.
  [`@opencode-ai/cli`](https://registry.npmjs.org/@opencode-ai%2fcli) is an
  older preview package whose `latest` is `0.0.0-beta-17823`.
  The [separate beta repository](https://api.github.com/repos/anomalyco/opencode-beta/releases/latest)
  returned `v0.0.0-beta-19723`, dated 2026-09-17, with `prerelease: false`.
  That flag does not make a beta-named build stable. Record the exact package,
  resolved pointer, version and time on every cycle.

## Permissions and sandbox at the newest stable tag

The following is the **documented V2.1.4 contract**, pinned to source commit
68bc26b7da1990ce10ffecfbc1e09eb13aa5d824. No OpenCode binary or repository
code was executed for this intake.

- **No built-in sandbox.** The
  [tagged security policy explicitly disclaims security isolation](https://github.com/anomalyco/opencode/blob/68bc26b7da1990ce10ffecfbc1e09eb13aa5d824/SECURITY.md#L11-L19)
  and tells operators needing isolation to use a container or VM. Permission
  prompts do not establish filesystem, process or network containment.
- **Rules mediate actions and resources.** V2 uses an ordered `permissions`
  array of `action`, `resource` and `effect`, with `allow`, `ask` or `deny`.
  [Last match wins; unmatched actions ask; agent rules follow global rules](https://github.com/anomalyco/opencode/blob/68bc26b7da1990ce10ffecfbc1e09eb13aa5d824/services/www/src/docs/content/permissions.mdx#L24-L102).
  This differs from V1's singular `permission`, `bash` and `task` names.
- **The base policy is permissive.** Every agent starts with
  [allow-all plus `ask` for reads matching `*.env` and `*.env.*`, with `*.env.example` allowed](https://github.com/anomalyco/opencode/blob/68bc26b7da1990ce10ffecfbc1e09eb13aa5d824/services/www/src/docs/content/permissions.mdx#L213-L242).
  External-directory access is allowed by default. Plan denies edit actions
  except its plan files, but the documented policy leaves shell access allowed.
  The [README's claim that Plan asks before bash](https://github.com/anomalyco/opencode/blob/68bc26b7da1990ce10ffecfbc1e09eb13aa5d824/README.md#L85-L93)
  therefore needs reconciliation. A Plan label is not a read-only host boundary.
- **Shell carries host authority.** The
  [permission docs call directory inference best effort and say shell uses the host user's filesystem, process and network authority](https://github.com/anomalyco/opencode/blob/68bc26b7da1990ce10ffecfbc1e09eb13aa5d824/services/www/src/docs/content/permissions.mdx#L140-L185).
  File-tool restrictions alone do not establish what a shell command can change.
- **Approval and delegation have durable consequences.**
  [Allow always saves project-scoped approvals; saved allows cannot override a configured deny; a custom subagent uses its own permissions](https://github.com/anomalyco/opencode/blob/68bc26b7da1990ce10ffecfbc1e09eb13aa5d824/services/www/src/docs/content/permissions.mdx#L244-L295).
  A tightly restricted parent is not evidence of an equally restricted child.
- **Organization policy is a separate layer.**
  [Policies can hard-deny after permission and saved-approval evaluation, with global and Console-managed policy overriding project configuration](https://github.com/anomalyco/opencode/blob/68bc26b7da1990ce10ffecfbc1e09eb13aa5d824/services/www/src/docs/content/permissions.mdx#L297-L309).
  The [policy docs also say malformed statements are dropped with a warning](https://github.com/anomalyco/opencode/blob/68bc26b7da1990ce10ffecfbc1e09eb13aa5d824/services/www/src/docs/content/policies.mdx#L39-L50).
  A configured rule needs an enforcement check before the profile calls it a
  working boundary.

## Desktop, browser and hosted surfaces

The [V2.1.4 README labels desktop BETA](https://github.com/anomalyco/opencode/blob/v2.1.4/README.md#desktop-app-beta)
and points to the [official download page](https://opencode.ai/download).
CLI stable does not establish desktop maturity or prove the version of a
particular platform download. The first profile needs the updater manifest,
artifact version and hash for each desktop channel it discusses.

The [V2 web docs describe a password-protected local server and one-use pairing links expiring after five minutes](https://github.com/anomalyco/opencode/blob/v2.1.4/services/www/src/docs/content/cli/web.mdx#L5-L24).
They also describe [optional remote access through OpenTunnel](https://github.com/anomalyco/opencode/blob/v2.1.4/services/www/src/docs/content/cli/web.mdx#L54-L76).
That is remote access to the execution host. Meanwhile,
[SECURITY.md still describes opt-in HTTP Basic authentication through `OPENCODE_SERVER_PASSWORD`](https://github.com/anomalyco/opencode/blob/v2.1.4/SECURITY.md#L21-L23).
Preserve this disagreement. Trace managed service, standalone server and legacy
launch paths before claiming either universal authentication or universal exposure.

The [optional hosted Console](https://github.com/anomalyco/opencode/blob/v2.1.4/services/www/src/docs/content/console/index.mdx)
provides inference, provider-account routing, team policies, usage tracking and
budgets. [Zen](https://github.com/anomalyco/opencode/blob/v1.19.4/packages/web/src/content/docs/zen.mdx#L10-L53)
is an optional model gateway; [Go and Go Plus](https://github.com/anomalyco/opencode/blob/v2.1.4/services/www/src/docs/content/console/index.mdx#L5-L15)
are optional subscription surfaces. None of these descriptions proves hosted
agent execution. Separate provider data handling and service changes from CLI
release claims. V1 also documents
[optional public session sharing that uploads conversation history](https://github.com/anomalyco/opencode/blob/v1.19.4/packages/web/src/content/docs/share.mdx#L6-L32);
do not generalize a local-only privacy claim across that path or assume the
same sharing implementation exists in V2.

## People and handling

The [tagged README links X `@opencode` and Discord](https://github.com/anomalyco/opencode/blob/v2.1.4/README.md),
also linked from the official site. The
[team roster confirms GitHub handles](https://github.com/anomalyco/opencode/blob/v2.1.4/.github/TEAM_MEMBERS)
including `thdxr`, `jayair`, `Hona` and `Brendonovich`.
[`CODEOWNERS` assigns web and desktop packages to `Hona` and `Brendonovich`](https://github.com/anomalyco/opencode/blob/v2.1.4/.github/CODEOWNERS),
and npm metadata lists `thdxr` as maintainer. Do not infer personal X handles
from those GitHub names. Social posts supply statements and leads; product
claims need their own primary receipt.

The intake writes only this source pair. Tier and cadence are recorded here
and in the contract's notes; the schema puts structured scheduling in
`sources/index.yml`, which is outside this task's permitted edits.

## What the first profile must establish

1. **The authority boundary an operator actually gets.** Trace and verify Build,
   Plan, shell, external paths, subagents, durable approvals and final policy
   denies at a named stable version. Reconcile the README and security-policy
   disagreements. State what a container or VM must enforce and what human
   decisions the harness still requests.
2. **The runtime, state and data contract across surfaces.** Resolve V1 and V2
   packages, desktop artifacts, local and remote server authentication, Console
   routing and optional sharing. Establish what survives a major upgrade or
   provider swap: sessions, credentials, agent rules, plugins and SDK clients.
   Name where execution and data live for each supported configuration.
3. **The gain in verified work per unit of human attention.** Use a bounded,
   reproducible workflow to measure delegation, verification, approval and
   review costs alongside inference cost and provider compatibility. Compare
   with Pi, Codex or Claude Code only where the difference changes an operating
   decision. Leave a precise try, adapt, re-audit or watch action, including
   evidence that cuts against the publication's assumptions.
