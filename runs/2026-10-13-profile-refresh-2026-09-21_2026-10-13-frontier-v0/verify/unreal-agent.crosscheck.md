# Unreal Agent adversarial crosscheck

- Source: `unreal-agent`, `unreallabsai/unreal-agent`.
- Profile date: 2026-10-13. Research window: 2026-09-21 through 2026-10-13.
- Independently checked: 2026-10-14. Later observation time is not a later release date.
- Harvest: `runs/2026-10-13-profile-refresh-2026-09-21_2026-10-13-frontier-v0/harvest/unreal-agent.primary.md`.
- Result: corrections and omitted changes must be incorporated before publication.
- Install-today version and latest-channel answer: correct, v0.3.1.
- Numbered-section verdicts: 5 VERIFIED, 5 CORRECTED, 0 REFUTED, 0 UNVERIFIABLE. These counts cover sections 1 through 10 only. A CORRECTED section can contain an explicitly refuted sentence; it does not approve that sentence.

I read the researcher brief, source contract and notes, existing profile, harvest, and the governing editorial documents. I used a separate blobless clone at `/Users/c3po/co/frontier/tmp/refresh-2026-10-13/clones/unreal-agent-verify/`, read tagged files and commit diffs, and independently ran ancestry checks. I did not execute upstream code, install a package, run a binary, build the site, or change the harvest. Behavior findings below are source readings unless explicitly described as registry or document observations.

## Channel truth and release ledger

Independent `gh release list` and release API reads returned four non-prerelease releases, with v0.3.1 marked Latest. No newer release or tag was listed. The Go proxy, Docker Hub and Homebrew agree on v0.3.1. The release ledger's versions, GitHub publication times and commit counts are correct. Its last column must distinguish registry push times from Go commit times.

| Ref | Resolved commit | GitHub publication, UTC | Ahead / behind previous stable | Other channel evidence |
| --- | --- | --- | --- | --- |
| v0.1.0 | `b7c9bf1c5c2fa4127255c07727a7c8413e23944a` | 2026-09-22T16:18:57Z, not prerelease | Initial release | No release assets; same source as v0.1.1 |
| v0.1.1 | `b7c9bf1c5c2fa4127255c07727a7c8413e23944a` | 2026-09-22T17:09:40Z, not prerelease | 0 / 0 | Docker pushed 2026-09-22T17:09:17Z; Go `.info` commit time 2026-09-22T16:16:57Z |
| v0.2.0 | `1b9f778453f411c029b39b85102aaefb95e7e48d` | 2026-09-23T19:15:48Z, not prerelease | 3 / 0 | Docker pushed 2026-09-23T19:15:29Z; Go commit time 2026-09-23T19:00:19Z |
| v0.3.0 | `7f2e1ba24c79a97a37c6d2b3b925d1632e68119b` | No release object | 51 / 0 versus v0.2.0 | Go proxy serves tag, commit time 2026-10-06T14:40:58Z; no Docker tag; release workflow cancelled |
| v0.3.1 | `55747f5f449c07cf76b3a0747370b5817aa52d5b` | 2026-10-06T16:47:03Z, not prerelease, Latest | 53 / 0 versus v0.2.0; 2 / 0 versus v0.3.0 | Docker pushed 2026-10-06T16:46:58Z; Homebrew commit 2026-10-06T16:47:04Z; Go commit time 2026-10-06T16:38:03Z |
| main at inspection | `a5f3fd13032737142916523ae4344c392292f9d5` | No release | 1 / 0 versus v0.3.1 | TUI README only |

Receipts read: [GitHub releases API](https://api.github.com/repos/unreallabsai/unreal-agent/releases), [v0.3.1 release](https://github.com/unreallabsai/unreal-agent/releases/tag/v0.3.1), [Go version list](https://proxy.golang.org/github.com/unreallabsai/unreal-agent/@v/list), [Go latest](https://proxy.golang.org/github.com/unreallabsai/unreal-agent/@latest), [Go v0.3.1 info](https://proxy.golang.org/github.com/unreallabsai/unreal-agent/@v/v0.3.1.info), [Docker tag registry](https://hub.docker.com/v2/repositories/unrea1labs/unreal-agent/tags?page_size=100), and [pinned Homebrew cask](https://github.com/unreallabsai/homebrew-tap/blob/3d844f21a9417c719c9de225bee74415e9409ef6/Casks/unreal-agent.rb).

Docker `latest` and `v0.3.1` both resolve to `sha256:8f1ab23ea0effe5eccc7be20c0cfcd5dc2d263c78545063b8c9f52e91fbce44d`, with linux/amd64 and linux/arm64 manifests. `latest` was last pushed at 2026-10-06T16:46:56Z. The old digests in the harvest match the registry. These are dated live observations, not an immutable history of mutable tags. The observed push times support the 2026-10-13 snapshot; they do not prove that a tag was never temporarily repointed.

The [v0.3.0 workflow](https://github.com/unreallabsai/unreal-agent/actions/runs/37487295997) is cancelled, the release-by-tag endpoint returns 404, and Docker has no v0.3.0 tag. The [v0.3.1 workflow](https://github.com/unreallabsai/unreal-agent/actions/runs/37497708073) succeeded. Use precise language throughout: the runtime changes are in the v0.3.0 Go tag and in the v0.3.1 GitHub release, archives and image. v0.3.0 is not an available Docker release.

The root module's `@latest` installs the runner. The nested TUI module has no version tags, and its proxy latest is `v0.0.0-20261006172800-a5f3fd130327`. Its [local replace directive](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/cmd/unreal-agent-tui/go.mod#L50) prevents the ordinary version-suffixed `go install ...@latest` path. Correct the later blanket statement that it "cannot be installed with go install": the documented checkout command, `go -C cmd/unreal-agent-tui install .`, uses go install and reports the default [dev version](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/cmd/unreal-agent-tui/version.go). No install was executed.

Two other corrections outside the numbered sections:

- REFUTED: "No release body describes what changed." The [v0.2.0 body](https://github.com/unreallabsai/unreal-agent/releases/tag/v0.2.0) explicitly lists the XDG-state and opt-in-log change. Replace with: "The v0.3.1 body lists the packaging and README PRs but omits the runtime changes already present in the v0.3.0 tag."
- The [main-only diff](https://github.com/unreallabsai/unreal-agent/compare/v0.3.1...a5f3fd13032737142916523ae4344c392292f9d5) replaces two example lines with one. "One README-only commit" is accurate; "changes one example line" is an imprecise description. Go `.info` Time is a commit timestamp, not a measured registry publication timestamp.

## 1. TUI, inherited authority and Codex default

**Verdict: CORRECTED.** Date 2026-10-06 and released channel verified. The security and default findings hold; the containment recommendation and public-push certainty need repair.

Read the pinned [TUI README](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/cmd/unreal-agent-tui/README.md), [run.go](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/cmd/unreal-agent-tui/run.go#L84-L104), [startup confirmation](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/cmd/unreal-agent-tui/startup.go#L127-L131), [shell operation](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/operation/shell.go#L519-L530), [process creation](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/primitives/process.go#L606-L609), and [Codex client](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/llm/clients/openaicodex/client.go).

The TUI uses the launch directory, creates a new session, gives the model Bash and ViewImage, uses the user's shell, and leaves the child environment inherited. The local execution path contains no per-command approval or containment check. Its default provider is `openai-codex`; its proposed model is `gpt-6.1-sol` with high reasoning effort. Saved preferences reuse the choice. The Codex client restricts the base URL, refuses redirects, and does not refresh credentials. The TUI does not call the runner's workspace `.env` loader.

Ancestry independently confirmed: `a39f18e715b618a9247d4fc5a3b732ca21d7c63c`, `9b0114cf85497294fe2d52a51c9836bb0ee62b96`, `17734373251f05bb51423347a16369e7f4fe65d4`, `c0bc321dd7ff6106ff7eee1b55c8dc1e2beccf72` and `7f2e1ba24c79a97a37c6d2b3b925d1632e68119b` return exit 1 against v0.2.0 and exit 0 against v0.3.0 and v0.3.1 with `git merge-base --is-ancestor`.

Exact fixes:

- Replace "a VM, a devcontainer or a disposable checkout" with "a VM or a container whose mounts, credentials and network access you have restricted." A disposable checkout by itself does not restrict this same-user process's access to the host or inherited credentials. A default devcontainer is not automatically sufficient either.
- The 49-commit ancestry segment is verified. Author dates and a gap in available Actions runs do not independently prove that all 49 commits first became public in exactly one push. Replace that assertion with: "The tag incorporates a 49-commit segment after b7203ca, including work with earlier author dates; the repository describes its public tree as a selection from an internal codebase." Treat the one-push account as inference, not a release receipt.

## 2. Homebrew, archives, quarantine and v0.3.0 availability

**Verdict: VERIFIED.** Date 2026-10-06. The release-configuration and channel claims are supported.

Read the [.goreleaser.yaml configuration](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/.goreleaser.yaml#L28-L87), [release workflow](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/.github/workflows/release.yml), [runner-only Dockerfile](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/Dockerfile.release), the pinned cask above, both workflow records, and the registry endpoints. The packaging commit `55747f5f449c07cf76b3a0747370b5817aa52d5b` is v0.3.1 itself and is not an ancestor of v0.3.0.

The cask adds Homebrew as a distribution channel, installs both binaries and the two TUI aliases, and runs `xattr -dr com.apple.quarantine` on macOS. The release configuration explicitly describes the package as unsigned. The four cask hashes match the fetched SHA256SUMS text and release-asset digests. This verifies the configuration and checksum agreement; I did not inspect Mach-O signatures, notarization, or actual Gatekeeper behavior on an installed binary. Keep any Gatekeeper wording tied to removal of the quarantine attribute rather than claiming a tested bypass of every macOS security control.

The [look-alike account endpoint](https://hub.docker.com/v2/users/unreallabs/) reports a User created 2026-07-21T13:03:13Z. Its public repository listing is empty, while `unreallabs/unreal-agent` returns 404. The harvest correctly rejects the old profile's "unclaimed namespace" inference. Account ownership is unknown; the later claim that the vendor "cannot" claim it is separately refuted below.

## 3. Workspace .env can redirect runner credentials

**Verdict: VERIFIED.** The disclosure date is 2026-09-23; the behavior exists before that date and remains in v0.3.1.

Read [configuration order](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/cmd/internal/agentrunner/run.go#L222-L258), [the dotenv parser](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/cmd/internal/agentrunner/run.go#L525-L565), [OpenAI request authentication](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/llm/clients/openai/client.go#L28-L46), the other provider constructors, the Codex destination check, and the [fixed maintainer comment](https://github.com/unreallabsai/unreal-agent/issues/5#issuecomment-5797105219). The comment is evidence of the maintainer's stated trust boundary; the tagged code independently establishes the behavior.

At v0.1.1 and v0.3.1, `.env` is loaded before provider, endpoint and key selection. Existing process variables normally win, but the file can override `SANDBOX_EGRESS_PROXY`, which is then copied to `HTTPS_PROXY`. With an otherwise unset endpoint override, a hostile workspace can make the OpenAI path send an existing operator key to its chosen endpoint. That is a credential-disclosure mechanism, not merely a setting preference. The Codex path has a destination restriction; this does not neutralize the other clients. The TUI does not use this loader. No fix is present in the inspected tag range, and issue 5 remains open.

No exploit was executed. Exporting a provider and base URL only blocks those particular overrides; it is not a general sandbox or protection against all environment variables and tool execution. The harvest's network-enforcement advice is justified.

## 4. XDG sessions, opt-in logs and missing-session behavior

**Verdict: CORRECTED.** The main behavior and 2026-09-23 release date are verified; two descriptions are wrong.

Read the [v0.2.0 release](https://github.com/unreallabsai/unreal-agent/releases/tag/v0.2.0), [PR 9](https://github.com/unreallabsai/unreal-agent/pull/9), [maintainer response to issue 3](https://github.com/unreallabsai/unreal-agent/issues/3#issuecomment-5797715378), old and new run.go, [v0.3.1 openSession](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/cmd/internal/agentrunner/run.go#L658-L679), [Dockerfile](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/Dockerfile), and [Docker mounting instructions](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/cmd/unreal-agent-runner/README.md#L59-L62).

Commit `69f4f482a86958bff08f94c1d8abf481f02917ee` is not in v0.1.1 and is in v0.2.0, v0.3.0 and v0.3.1. The state directory moved from the working directory to XDG state, logging became opt-in, and `openSession` still creates an empty session under an unknown requested ID. The format remains 2. Shell/process source is byte-identical between v0.1.1 and v0.3.1, with no internal command timeout or on-disk output cap. The reported 61.8 GB incident is a reporter's observation, not a verifier reproduction.

Exact fixes:

- Replace "The release body names the PR but does not mention the move" with "The release body names the XDG-state and opt-in-log change; it does not explain the old-session lookup trap."
- Replace "the Docker image gained a /state volume" with "the Docker image gained a writable /state directory and XDG_STATE_HOME=/state; the README shows mounting a named volume there." The Dockerfile does not declare `VOLUME`.
- Retain the explicit old-directory resume instruction. Any cleanup advice should follow migration and retention review, because those directories contain the very sessions the operator may need to resume.

## 5. All-kind input deduplication and settings controls

**Verdict: VERIFIED.** Available in the v0.3.0 Go tag and v0.3.1 binary release on 2026-10-06.

Read [the deduplication commit](https://github.com/unreallabsai/unreal-agent/commit/31f4fdadc54dd5061ae33959bc151d1b649c3a31), [v0.2.0 restoration](https://github.com/unreallabsai/unreal-agent/blob/v0.2.0/harness/sessionstore/localfile/state.go#L286-L318), [v0.3.1 restoration](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/sessionstore/localfile/state.go#L293), [inbox seeding](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/inbox/local.go), and [settings fields](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/inbox/inbox.go#L58-L63).

`31f4fdadc54dd5061ae33959bc151d1b649c3a31`, `dc36e0ecf449c8a08f31b05b3ba1b053e462eea6`, `f1464a45c23692715d2fb699e93198dc636a098e` and `576cd0b072529f8753ac1e285d0f6636165f957c` are absent from v0.2.0 and ancestors of both later tags. Restored IDs now include every input kind. Settings can change the model ID, reasoning effort, compaction threshold and output limit; changing settings interrupts an active request. The system-prompt field disappeared before either tag. The runner creates fresh control-input UUIDs.

Keep the model-switch statement within its actual scope: this updates the existing client's model selection, not the configured provider or credentials. A separate missed compatibility consequence of the public `ResumeState` field rename appears below.

## 6. Anthropic provider and fallback default

**Verdict: VERIFIED.** The request construction and default change are confirmed; actual vendor fallback service behavior is not independently established.

Read [provider selection](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/cmd/internal/providers/providers.go#L95-L118), [fallback option and header](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/llm/messagesapi/adapter.go#L92-L105), [request body](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/llm/messagesapi/request.go#L17-L40), [fallback parsing](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/llm/messagesapi/response.go#L173-L186), and the tagged runner and benchmark READMEs.

`c16d665baf5dbb51dd697c0c5784627e660653d3`, `7e5a5fe11803748418abe942be91f4f4a8349469` and `20b14c090bb72e2ee461179e9bb5c0fc39a92596` are not in v0.2.0 and are in v0.3.0 and v0.3.1. Their 2026-09-28, 2026-09-30 and 2026-10-02 author dates describe development; the first published binary channel is v0.3.1 on 2026-10-06.

An unset fallback option enables the beta header and `fallbacks: default`; false disables them. The configured default model is `claude-opus-5-5`; default output limit is 128,000, and cache TTL accepts 5m or 1h. Later results for a call become text rather than another native tool-result block. The README omission is real. Publish this as the harness requesting and recognizing model fallback. The beta's availability, billing and exact substitute-model behavior were not verified and should not be added as product guarantees.

## 7. Automatic compaction and zero thresholds

**Verdict: CORRECTED.** The catalog values and implementation are supported. The promise that long runs no longer hit the context limit is refuted as an unsupported guarantee.

Read [compaction eligibility and cutoff](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/contextbuilder/compaction.go#L13-L102), [settings resolution](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/settings/settings.go), [the complete catalog](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/settings/default_settings.json), [request selection](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/coordinator/loop.go#L352-L362), [summary application](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/coordinator/loop.go#L497-L504), and the referenced tests without executing them.

`25d2d345e0f202ab6146a1600fd91fa457885db8`, `1da8afde82da935ba6cd8479a35aff449620736b` and `c15463b18772a5223e62bb5c34f401c72bbd36f5` are in v0.3.0 and v0.3.1, not v0.2.0. Release-channel date: 2026-10-06.

The catalog has the reported 244,800, 500,000 and 524,288 thresholds. These are repository settings, not independently verified provider context limits. Unknown models retain zero. Eligibility compares the last usage checkpoint with the threshold; compaction also requires a cutoff beyond the 20,000-token retained-history condition. It happens on a subsequently scheduled model request. If building compaction fails, the coordinator builds an ordinary request, and a non-complete summary is not applied. New tool output is not continuously counted as a hard input budget.

Exact replacement: "The harness attempts automatic summaries when the last usage checkpoint reaches the configured threshold and eligible history exists. This can extend runs, but does not guarantee avoiding context-limit errors or preserving task accuracy. Uncataloged models have a zero threshold and can attempt compaction once the retained-history condition is met."

Remove "each time a GPT run passes 244,800 tokens" as a deterministic schedule and "Long runs ... no longer stop at the context limit." The code does not establish either universal claim. The zero-threshold consequence remains a source-based inference, not a measured run.

## 8. Async scheduling and grace windows

**Verdict: CORRECTED.** The one-second constants and batching mechanism are real; the claimed total latency bound and treatment of incoming user input are not.

Read [the loop](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/coordinator/loop.go#L200-L258), [external-input handling](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/coordinator/loop.go#L409-L438), [heartbeat scheduling](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/coordinator/loop.go#L127-L141), [the running-result payload](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/contextbuilder/builder.go#L16), the corresponding old builder, and [the completion-grace commit](https://github.com/unreallabsai/unreal-agent/commit/d9180011e739035dea09af83ba231304d852e310).

`6d677dfa717e155fd51b4b6d7da1d4a8c684ffad`, `f79195ceebfc6f788df4e6d7e4c81ba242cc438e`, `e278771b557c5ae0f6ffe4749c087cff284478b4` and `d9180011e739035dea09af83ba231304d852e310` are not in v0.2.0 and are in v0.3.0 and v0.3.1. The first binary release is 2026-10-06.

Exact replacement: "The loop uses one-second run and completion timers to batch tool updates. A completion timer can be rearmed as more siblings finish, so one second is not a maximum cumulative delay per tool round. Incoming external input requests a model call and clears the tool grace."

The return condition at line 215 does not justify saying user input must wait through either grace. The external-input branch at lines 421-438 overrides that reading. Fewer calls and lower cost are intended consequences of batching, not measurements established by this code inspection. The ten-minute heartbeat and the correction from Bash's own running string to the builder's model-visible string are verified.

## 9. Launch benchmarks and limits of the linked records

**Verdict: CORRECTED.** The tables, 2026-09-22 date, public job links and absent public build identities are confirmed. Exact figures must remain vendor-reported, and the universal per-trial-cost assertion exceeds the inspected evidence.

I opened the [timestamped launch-post capture](https://web.archive.org/web/20260922183130/https://unreallabs.ai/blog/unreal-agent/), compared its four tables and eight job links with the [live vendor page](https://unreallabs.ai/blog/unreal-agent/), and read the data embedded in all eight Harbor job pages. The capture establishes publication before the 2026-09-23 profile. The three Unreal job IDs are [Terminal-Bench](https://hub.harborframework.com/jobs/27133053-2015-46f3-8c72-6b6910859da6), [SWE-Atlas](https://hub.harborframework.com/jobs/3d2fa057-e11c-4be0-a962-e8be81b87709), and [DeepSWE](https://hub.harborframework.com/jobs/2311ca63-2929-49eb-ba0c-0084ef31ba8b).

Comparator receipts read: [Pi Terminal-Bench](https://hub.harborframework.com/jobs/6ccd097a-747b-4867-be57-a56969df988f), [Codex SWE-Atlas](https://hub.harborframework.com/jobs/11a440fb-b1c4-473b-98a6-907500b3fdaf), [Pi SWE-Atlas](https://hub.harborframework.com/jobs/da4ac972-9d5a-4142-b057-85f07375f14e), [Codex DeepSWE](https://hub.harborframework.com/jobs/e20ecafd-695a-417c-90f5-35fd36d2786f), and [Pi DeepSWE](https://hub.harborframework.com/jobs/cd7d8de6-c152-48de-9840-b22bbea96d99).

Confirmed: 330 trials and five attempts for Unreal Terminal-Bench, 372 and three for SWE-Atlas, 339 and three for DeepSWE; Modal execution; GPT-6 Astra with xhigh; mixed comparator versions. Unreal agent versions `75748cc70c528a99be5ba676f0a8c94e280bca1f`, `5cc55ebc88d3d5b572969aaaca55de122483c1d8` and `53dc60128fecf21b55ab10bfcfc51af221a8903a` do not occur in the fetched public history. No public-tag ancestry can be asserted for these benchmark builds.

The Unreal job-level `cost_usd` is null in all three jobs. Each initial page exposes 100 trial rows, all with null cost; the jobs contain more than 100 trials. I did not fetch every remaining page. Under the adversarial rule, "cost_usd is null on every trial" is REFUTED as an independently established universal assertion. Replace it with: "The job totals and the 100 inspected trial rows per Unreal job provide no inference cost."

Do not promote "Pass rates and tokens trace to public Harbor runs" into exact reproduction. The inspected Terminal-Bench average reward is about 58.18%, versus the post's 57.9%; SWE-Atlas is about 63.17%, versus 65.8%. DeepSWE shows a fail-to-pass headline around 92.95% and a reward around 71.98%, neither identical to the post's 72.4%. The linked logs support a lower aggregate input-token direction for these vendor runs, but the post's exact aggregation and dollar accounting are not independently reproduced. The harvest already recognizes some of this mismatch; its prior-claim summary must preserve the same qualification.

The two SWE-Marathon links in [c15463b](https://github.com/unreallabsai/unreal-agent/commit/c15463b18772a5223e62bb5c34f401c72bbd36f5) returned 404. That supports "not publicly readable at inspection," not a prediction that they will be the first published compaction evaluation. The section remains `docs-only`, with a timestamped archive and fixed job IDs rather than code-tag receipts. No current-release benchmark victory is established.

## 10. Failed responses, duplicate outputs, output growth and signals

**Verdict: VERIFIED.** The described unresolved source paths and signal fix hold at v0.3.1, subject to the stated code-reading boundary.

Read [issue 13's maintainer response](https://github.com/unreallabsai/unreal-agent/issues/13#issuecomment-5822471686), [issue 11's response](https://github.com/unreallabsai/unreal-agent/issues/11#issuecomment-5800680734), [issue 16's resolution](https://github.com/unreallabsai/unreal-agent/issues/16#issuecomment-6021820979), [response processing](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/coordinator/loop.go#L231-L251), [runner signal setup](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/cmd/unreal-agent-runner/main.go), [runner exit handling](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/cmd/internal/agentrunner/run.go#L107-L110), and [Responses API serialization](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/llm/responsesapi/request.go).

Issues 3, 11 and 13 remain open. A provider-level failure carried in an otherwise successful Go response is persisted without becoming a coordinator error. Duplicate native outputs can remain in committed history; the staging replacement does not deduplicate all history. The resulting rejection depends on the provider-model pair, so retain that condition rather than declaring every non-OpenAI provider broken. No shell timeout or capture-file cap was added.

`4be534be93e8f686b0be256062267af77c8e66df` and the YAML skill-parser fix `0c9baa7310fabd37d045c106cac8a5ca43e8b1cd` are not in v0.2.0 and are in v0.3.0 and v0.3.1. The signal commit's author timestamp is 2026-10-06T00:09:05+01:00, or 2026-10-05T23:09:05Z; the binary release is 2026-10-06. The harvest's date span is appropriate for the reports and release, not proof that all behaviors first appeared in this window.

A material consequence omitted from this section is that tool calls attached to a failed response can still be dispatched. See miss M6. Scanning logs after a run catches false success but cannot retroactively prevent those effects.

## Prior claims and carry-forward checks

The profile has no active frontmatter claims. I independently spot-checked the six substantive paragraphs against v0.3.1 rather than relying on the harvest's "holds" labels.

- **Channel: changed, confirmed.** v0.3.1 is the newest binary release. Go and Docker still exist; Homebrew adds the TUI. [CONTRIBUTING.md](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/CONTRIBUTING.md) and the root [MIT license](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/LICENSE) are unchanged from v0.1.1. The policy statement about publishing selected internal components holds. An exact first-public-push history is not established by commit author dates.
- **Core structure: holds with compatibility changes.** The registry retains Bash, ViewImage and skill use. [Session format 2](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/sessionstore/localfile/codec.go#L15), [ViewImage operation version 1](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/operation/image.go#L28), and [RemoteJob version 2](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/operation/remote_job.go#L13) hold. This does not mean the Go API stayed compatible; see M4 and M5.
- **Async mechanism: holds; exact savings remain unproved.** The loop and running payload support the mechanism. The old no-results statement was already false on 2026-09-23. Preserve the benchmark qualification from section 9, not an unqualified statement that the published rates were reproduced.
- **Prompt versus isolation: holds for the runner.** The [runner prompt](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/cmd/internal/agentrunner/run.go#L46) asserts a sandbox while the tool path runs local processes without enforcing one. The TUI's [prompt and local operation manager](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/cmd/unreal-agent-tui/run.go#L225-L262) do not supply containment either. No measured change in model behavior due to the prompt is established. The `.env` exposure remains present.
- **Image identity: partly superseded.** The official namespace remains `unrea1labs`. An existing `unreallabs` user account invalidates the old unclaimed-namespace statement. REFUTED: the carry-forward answer "no, and it cannot". Neither an empty public profile nor a creation date establishes the owner's identity or rules out a later transfer. Exact replacement: "The account exists; the inspected public record does not establish vendor control or a future transfer."
- **ChatGPT login: holds; now a TUI default.** The [credential loader](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/llm/clients/openaicodex/credentials.go#L72) and [client](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/llm/clients/openaicodex/client.go#L44) still have no refresh path. The token is read once and an expired/rejected credential requires external renewal and client recreation. No conclusion about subscription-contract permission follows from the implementation.

No public proxy-manager implementation or remote authentication design was established. That question remains open. A stable session-file version also does not repair the old-directory lookup behavior from section 4.

## Misses with pinned receipts and channels

### M1. urllib3 security fixes reached the Harbor benchmark lock

**Confirmed omission.** Commit [4572c919e6a9802f065b3b6d6e9476aa1ce1f287](https://github.com/unreallabsai/unreal-agent/commit/4572c919e6a9802f065b3b6d6e9476aa1ce1f287), merged 2026-10-05, changes urllib3 2.7.0 to 2.8.0 in [the benchmark lock](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/benchmarks/harbor/uv.lock). It is absent from v0.2.0 and present in v0.3.0 and v0.3.1. Channel: `tagged-release`, first binary release 2026-10-06; the changed dependency is used by the Python benchmark environment.

- [CVE-2026-97687 / GHSA-8988-9cw3-xx77](https://github.com/urllib3/urllib3/security/advisories/GHSA-8988-9cw3-xx77): destination TLS settings can weaken HTTPS-proxy certificate validation. An interceptor can impersonate the proxy under the documented configurations; forwarding mode can expose request contents and credentials. Affected versions include 2.7.0; patched in 2.8.0.
- [CVE-2026-97689 / GHSA-vxq7-64xx-v4gw](https://github.com/urllib3/urllib3/security/advisories/GHSA-vxq7-64xx-v4gw): a malicious chunked-response server can send an unterminated chunk-size line and consume unbounded memory. Patched in 2.8.0.
- [CVE-2026-97688 / GHSA-gh4c-6fx4-qh6g](https://github.com/urllib3/urllib3/security/advisories/GHSA-gh4c-6fx4-qh6g): trailing data after a deflate stream can trap the streaming decoder in a CPU loop under the advisory's read conditions. Patched in 2.8.0.

These advisories were published before this window; adoption of the fixed version is the in-window event. Operators who maintain the Harbor environment should use the updated lock. This is not evidence that Unreal Agent's Go runner or Docker image had these Python vulnerabilities, or that the vulnerable paths were exercised by its benchmarks.

### M2. PyJWT security hardening was also omitted

**Confirmed omission.** Commit [b7203ca337a399635c29ce610f8cf1d1bda803ae](https://github.com/unreallabsai/unreal-agent/commit/b7203ca337a399635c29ce610f8cf1d1bda803ae), merged 2026-10-05, changes PyJWT 2.13.0 to 2.15.0 in the same benchmark lock. Ancestry: absent from v0.2.0, present in v0.3.0 and v0.3.1. Channel: `tagged-release`, with the same Python-environment scope as M1.

The [2.15.0 changelog](https://github.com/jpadilla/pyjwt/blob/2.15.0/CHANGELOG.rst) includes security changes from both 2.14.0 and 2.15.0. Material examples independently checked:

- [CVE-2026-101918 / GHSA-42vr-xj54-vc7v](https://github.com/advisories/GHSA-42vr-xj54-vc7v), published 2026-09-30: deeply nested JWT payload JSON can raise an uncaught recursion error before verification and deny service to token-processing callers. Versions through 2.14.0 are affected; 2.15.0 catches this error. The [2.15.0 decoder](https://github.com/jpadilla/pyjwt/blob/2.15.0/jwt/api_jwt.py) confirms the guard.
- [GHSA-pxh4-856f-4h89](https://github.com/jpadilla/pyjwt/security/advisories/GHSA-pxh4-856f-4h89): accepting an empty symmetric JWK permits token forgery when an application configures that empty key. Versions through 2.13.0 are affected; the fix is in 2.14.0 and included in 2.15.0. Other 2.14.0 hardening rejects public-key material incorrectly accepted as HMAC secrets; that is a signature-forgery risk under mixed-algorithm configurations, not a blanket claim that every PyJWT deployment permits forgery.
- [CVE-2026-102267 / GHSA-9v7f-9g4p-ffgj](https://github.com/jpadilla/pyjwt/security/advisories/GHSA-9v7f-9g4p-ffgj): following an attacker-influenced JWKS redirect can disclose request headers or substitute trusted signing keys. The attacker must influence the trusted endpoint response; an arbitrary token key ID alone is not enough. The 2.14.0 fix is included in this update.
- [CVE-2026-102275 / GHSA-x33g-cr3x-6449](https://github.com/advisories/GHSA-x33g-cr3x-6449), published 2026-10-05: inconsistent public and private OKP key fields can undermine sender-bound-token checks in affected DPoP integrations. The advisory lists 2.15.0 as the fix. This does not establish a DPoP path in Unreal Agent.

The concrete operator action is to refresh the benchmark environment from the released lock, then determine which advisory conditions apply to its Harbor/authentication integrations. Do not call this a fix to Unreal Agent's Go Codex credential loader; it uses different code. No harness exploitability was demonstrated.

### M3. multidict 6.9.1 fixes a benchmark dependency memory leak

**Confirmed omission.** Commit [eda665c123d57979eba8196e5b70e24a23f09c7b](https://github.com/unreallabsai/unreal-agent/commit/eda665c123d57979eba8196e5b70e24a23f09c7b), authored 2026-10-06, changes multidict 6.8.0 to 6.9.1. Ancestry independently returns 1 for v0.2.0 and 0 for v0.3.0 and v0.3.1. Channel: `tagged-release`, Python Harbor dependency, first binary release 2026-10-06.

[CVE-2026-104874 / GHSA-54p9-h82j-f925](https://github.com/aio-libs/multidict/security/advisories/GHSA-54p9-h82j-f925), published 2026-09-21, affects the C extension in 6.7.0 through 6.9.0. Reflected union and subtraction on items views leak references. If an application performs those operations on attacker-influenced operands, repeated input can exhaust memory; ordinary use of a multidict alone does not prove reachability. The advisory identifies 6.9.1 as patched. This is another reason to refresh the benchmark lock, not a confirmed remote denial of service in the Go agent.

### M4. The released Go API breaks embedders despite session format 2

**Confirmed omission.** These commits are absent from v0.2.0 and present in v0.3.0 and v0.3.1; first binary release date 2026-10-06, channel `tagged-release`:

- [2aef4bdccc2d7f44645a7292923624a6b10c0670](https://github.com/unreallabsai/unreal-agent/commit/2aef4bdccc2d7f44645a7292923624a6b10c0670), authored 2026-09-29: `ResultTranslator.TranslateResult` now returns the tool-owned `tool.Result` interface, which requires `ToLLMResult`, instead of returning `llm.ToolResult` directly. [Released interface](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/tool/tool.go#L25-L37).
- [045a1ff284cd59d85a9d259cca845dcabe00ccb8](https://github.com/unreallabsai/unreal-agent/commit/045a1ff284cd59d85a9d259cca845dcabe00ccb8), authored 2026-09-29: `ItemReasoning` and its former representation are replaced with provider items, whose raw payload is authoritative for replay. [Released model types](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/llm/model.go#L58-L63). The [legacy reader](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/llm/itemjson.go) preserves old serialized history, not source compatibility for callers.
- [31f4fdadc54dd5061ae33959bc151d1b649c3a31](https://github.com/unreallabsai/unreal-agent/commit/31f4fdadc54dd5061ae33959bc151d1b649c3a31), authored 2026-09-30: public `ResumeState.ExternalInputIDs` becomes `InputIDs`. [Released struct](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/sessionstore/sessionstore.go#L79-L81).

Embedders must adapt custom translators and history/resume consumers. A profile that only says the session format is unchanged misses the compile-time migration and replay-contract changes.

### M5. Operation errors moved from method returns to update events

**Confirmed omission.** [e278771b557c5ae0f6ffe4749c087cff284478b4](https://github.com/unreallabsai/unreal-agent/commit/e278771b557c5ae0f6ffe4749c087cff284478b4), authored 2026-10-01, is in v0.3.0 and v0.3.1, not v0.2.0. Channel: `tagged-release`, first binary release 2026-10-06. The harvest cites this commit as ancestry for grace windows without explaining its separate integration consequence.

The [released manager](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/operation/local_manager.go#L75-L165) returns nil from Add or Cancel when the manager accepts the request. Initialization, unsupported-operation and remote-cancellation failures are delivered as operation updates. Accepted IDs are tracked before initialization, so resubmitting the same failed ID does not simply retry initialization. [StatusUnsupported](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/operation/operation.go#L21-L28) is represented by an empty status string.

Consumers must monitor Updates and terminal outcomes. A nil Cancel result does not confirm that a remote task stopped; a later failure can explicitly leave the remote outcome unknown. This changes where an embedding host must spend attention on failure and cancellation handling.

### M6. Failed model responses can still schedule tools

**Confirmed omitted consequence of section 10.** The issue was reported in-window on 2026-09-23 and remains present in the v0.3.1 tagged release. This is not a newly fixed bug, and no CVE is assigned in the inspected repository record.

The [response path](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/coordinator/loop.go#L231-L251) rejects a Go error but does not reject `Response.Failure`. It then [persists and schedules output](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/coordinator/loop.go#L475-L494); [state ingestion](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/coordinator/loop.go#L633-L688) adds tool calls without checking that the response succeeded. The same state ingestion is used during restoration.

If a failed response contains a valid tool-call output, the coordinator can dispatch it, including when recovering unfinished work. The code therefore lacks a failure-state barrier to side effects, in addition to producing a misleading exit status. This is a conditional source finding, not a live-provider exploit reproduction. An embedding host that needs failed responses to be inert must enforce that before dispatch; post-run JSONL inspection alone cannot supply the barrier.

### M7. Runner requests gained an output cap with a Codex exception

**Confirmed capability omission.** [d3f2f383e83c369d29d11d88175656bac17048e4](https://github.com/unreallabsai/unreal-agent/commit/d3f2f383e83c369d29d11d88175656bac17048e4), authored 2026-09-27, is in v0.3.0 and v0.3.1, not v0.2.0. Channel: `tagged-release`, first binary release 2026-10-06.

The runner accepts a positive JSON `max_output_tokens` field and passes it into model requests. This lets a CLI caller bound output per model request without implementing a host-side settings-control client. The [usage text](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/cmd/internal/agentrunner/usage.go#L18-L20) explicitly excludes `openai-codex`, and the [Codex client rejects it](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/llm/clients/openaicodex/client.go#L77-L78). Section 5 mentions an output limit in library settings but omits this CLI addition and its provider exception. This is a per-request token cap, not a total run-cost limit.

## Security sweep and findings not promoted

The [repository advisory API](https://api.github.com/repos/unreallabsai/unreal-agent/security-advisories) returned an empty array. The [GitHub global advisory query for the module](https://api.github.com/advisories?affects=github.com%2Funreallabsai%2Funreal-agent) returned none. NVD keyword queries for [unreal-agent](https://services.nvd.nist.gov/rest/json/cves/2.0?keywordSearch=unreal-agent) and [unreallabsai](https://services.nvd.nist.gov/rest/json/cves/2.0?keywordSearch=unreallabsai) returned zero results. The v0.3.1 tree has no SECURITY.md. These observations support "no published repository advisory found," not "no relevant security changes" or "no vulnerabilities." M1 through M3 demonstrate the difference.

I also checked the code-generation dependency update [d3ffc7b4847430245b05c5c7a5065e25ed5b29b2](https://github.com/unreallabsai/unreal-agent/commit/d3ffc7b4847430245b05c5c7a5065e25ed5b29b2), which moves kin-openapi 0.142.0 to 0.144.0 inside [internal/apigen/go.mod](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/internal/apigen/go.mod). It is in v0.3.0 and v0.3.1, not v0.2.0. This is a tool dependency used by [the generator](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/internal/openaiapi/generate.py) on a checked-in OpenAPI snapshot, not a dependency in the root runner module.

The update includes upstream fixes such as [GHSA-r277-6w6q-xmqw](https://github.com/getkin/kin-openapi/security/advisories/GHSA-r277-6w6q-xmqw), where a default no-op authentication callback lets unauthenticated requests through applications using that validation middleware. The pinned version also falls in the affected range of [GHSA-g3f9-hcw7-r9w2](https://github.com/getkin/kin-openapi/security/advisories/GHSA-g3f9-hcw7-r9w2), published 2026-10-13: concurrent request validation can mutate a shared default object and crash a server. I did not find that server-validation path in the agent. These are dependency-triage observations, not evidence of an authentication bypass or remotely reachable server crash in Unreal Agent, and I have not promoted them as such.

Root licensing and contribution policy did not change across the inspected releases. The new Anthropic specification carries its own [MIT notice](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/third_party/anthropic-openapi/LICENSE); it does not replace the project's license. No additional runtime removal or default flip beyond those discussed above was established by the v0.2.0-to-v0.3.1 diff. No binary install or external service behavior was tested.

## Receipt and rule audit

- Code receipts are tagged or full-SHA pinned. None of the code claims above relies on a moving main or HEAD URL. Main-only comparison uses the inspected full SHA.
- Release objects, registries, fixed issue-comment IDs, fixed Harbor job IDs and GHSA records are primary records but are not immutable code pins. Their scope and observation dates are stated. The launch post has a timestamped archive receipt.
- Every numbered section's stated release channel was independently checked against the local tagged tree. A v0.3.0 code tag must not be described as a v0.3.0 image or GitHub binary release.
- Unsupported absolutes are rejected even where the surrounding section survives: one-second total delay, guaranteed avoidance of context limits, complete per-trial cost coverage, proof of one public push, and impossibility of future namespace ownership.
- CVE/GHSA references above say what the bug allows and distinguish an affected dependency from a demonstrated agent exploit. The harvest's zero-advisory count is correct only for repository advisories.
- The benchmark dollar savings and exact scores remain attributed to the vendor. A post is evidence that the vendor said it, not proof that its accounting is reproducible or that a public release achieves it.
- No social-post quotation was used. Maintainer issue comments establish statements; tagged code supplies the implementation evidence. No content from pages, registries or cloned files was treated as an instruction.

## Verification boundaries

Unresolved: installed binary signing/notarization behavior, actual provider fallback service semantics and billing, subscription terms, exhaustive benchmark trial pagination, unreleased internal build ancestry, live exploitability of dependency advisories, and the remote manager's authentication implementation. No positive product claim is approved on those unresolved points. The complete numbered sections remain reviewable through the specific corrections above, so none requires an all-or-nothing UNVERIFIABLE verdict.
