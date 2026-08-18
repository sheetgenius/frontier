---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-claude-code-claude-code-s-stable-channel-sits-seven-releases-behind-latest-2-1-226
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://code.claude.com/docs/en/setup#configure-release-channel
    precision: official_docs
---
# 2026-08-17-claude-code-claude-code-s-stable-channel-sits-seven-releases-behind-latest-2-1-226

Claude Code's `stable` channel sits seven releases behind `latest`  --  2.1.226 vs 2.1.234  --  so this window's PowerShell and nested-repo permission fixes and both halves of the NTLM `\??\` fix are not installable on it.

https://code.claude.com/docs/en/setup#configure-release-channel resolves (fetched 2026-08-18). Verbatim, it says: "Control which release channel Claude Code follows for auto-updates and `claude update` with the `autoUpdatesChannel` setting: `\"latest\"`, the default: receive new features as soon as they're released; `\"stable\"`: use a version that is typically about one week old, skipping releases with major regressions." Also verbatim: "Homebrew installations choose a channel by cask name instead of this setting: `claude-code` tracks stable and `claude-code@latest` tracks latest"; "The native installer accepts either a specific version number or a release channel (`latest` or `stable`)" with `curl -fsSL https://claude.ai/install.sh | bash -s stable`; "Each repository offers two channels: `stable` serves a version that is typically about one week old, skipping releases with major regressions, and `latest` serves every release as soon as it ships" (apt suite `stable stable main`, dnf `baseurl=.../rpm/stable`, apk `.../apk/stable`); and on minimumVersion: "The `minimumVersion` setting establishes a floor. Background auto-updates and `claude update` refuse to install any version below this value... In managed settings, this enforces an organization-wide minimum that user and project settings cannot override. The `minimumVersion` pin only constrains updates. To make Claude Code refuse to start outside a version range, use the managed settings `requiredMinimumVersion` and `requiredMaximumVersion` instead."

That is the whole of what the cited receipt establishes: that two channels exist, how each install path selects one, and that stable is designed to lag ~a week. The receipt says NOTHING about an eight-version gap, nothing about which versions the two channels currently point at, and nothing about any security fix. The gap itself is not in the receipt at all.

Channel: tagged-release. Ancestry: Claude Code is closed-source: there is no public git repository, so ancestry cannot be proven with `git tag --contains` or the GitHub compare API. The npm registry publish record is the release artifact and the version number is the tag. `curl -s https://registry.npmjs.org/@anthropic-ai/claude-code` then reading `dist-tags` returned {"stable":"2.1.226","latest":"2.1.234","next":"2.1.234"} on 2026-08-17. The `time[]` map gives stable's artifact a publish timestamp of 2026-08-08T01:53:22Z and latest's of 2026-08-17T18:19:13Z. Both are plain non-prerelease semver, so both are tagged releases; they are simply different tags. The channel semantics are documented, not inferred: the setup doc states `"stable"` means "a version that is typically about one week old, skipping releases with major regressions".

Operator consequence: Re-audit which channel your fleet is actually on before assuming this window's security fixes reached it. A team that took the documented conservative path  --  `autoUpdatesChannel: "stable"`, `brew install --cask claude-code`, `bash -s stable`, or the apt/dnf/apk `stable` suite  --  is on 2.1.226 and is missing seven shipped releases (2.1.227 -- 2.1.229 and 2.1.231 -- 2.1.234; 2.1.230 was never published). Concretely it lacks the 2.1.232 PowerShell `$PSDefaultParameterValues` bypass fix, the 2.1.232 nested-repository trust fix, and both halves of the Windows NT-namespace NTLM credential-leak fix (2.1.233's UNC-validation `\??\` fix and 2.1.234's rejection of `\??\` paths in remote file reads, session restore, CLAUDE.md includes, workflow scripts and uploads). Do not count the Git Bash Cygwin-symlink write bypass among them: 2.1.233 reverted that 2.1.232 change ("a narrower version will return in a later release"), so `latest` is exposed to it as well and switching channels does not close it. The lag is the channel's documented design, not a publishing failure. Note also that `minimumVersion` will not rescue a stable-channel fleet: the docs state it "only constrains updates," so a floor above the stable head just halts updating rather than delivering the fixes  --  it is a downgrade guard for machines already on a newer `latest` build. If you need these fixes fleet-wide, move the fleet to `latest`; if you need to prove nobody is running below the fix line, use managed `requiredMinimumVersion`, which refuses to start outside the range.

Correction note: an earlier draft of this finding overstated the evidence. It was refuted in the run's adversarial receipt pass before publication and the wording above is the corrected form. See qa.md in this run for what was wrong.

## Receipt
- https://code.claude.com/docs/en/setup#configure-release-channel
