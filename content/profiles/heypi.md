---
schema_version: bitter.frontier_profile.v0
profile_id: heypi
label: heypi
owner: Ronan Berder (hunvreus)
source_contract: sources/heypi.yml
homepage: https://heypi.dev/
docs: https://heypi.dev/docs/
tagline: "Puts Pi in team chat with an approval layer; the core has not shipped since 22 July, but an optional adapter's dependency range still moves under it."
compared_with:
  - pi-coding-agent
repo: https://github.com/hunvreus/heypi
surface_class: open_source_commits
evidence_floor: official_docs
status: retired
retired_on: 2026-10-24
retired_reason: "no core release since 22 July 2026 and too little adoption to keep a weekly read useful (about 160 GitHub stars at retirement)."
last_updated: 2026-10-13
last_full_review: 2026-10-13
claims:
  - id: governance-shell-built-on-pi
    finding_id: 2026-10-13-heypi-heypi-0-3-0-beta-2-remains-the-install-channel-without-a-new-release
    last_verified: 2026-10-13
    status: active
  - id: pi-coding-agent-dependency-pin
    finding_id: 2026-06-24-heypi-governance-shell-on-pi
    last_verified: 2026-06-24
    status: retired
  - id: approvals-not-required-by-default
    finding_id: 2026-10-13-heypi-approval-requests-fail-closed-while-approver-lists-remain-optional
    last_verified: 2026-10-13
    status: active
  - id: bash-approval-command-classifier
    finding_id: 2026-06-24-heypi-approvals-opt-in-not-default
    last_verified: 2026-06-24
    status: retired
  - id: sandbox-just-bash-default-network-off
    finding_id: 2026-06-24-heypi-sandbox-runtimes
    last_verified: 2026-06-24
    status: retired
  - id: gondolin-vm-runtime
    finding_id: 2026-10-13-heypi-gondolin-0-13-0-closes-hookless-internal-network-egress-outside-heypi-s-range
    last_verified: 2026-10-13
    status: active
  - id: host-runtime-warning-not-block
    finding_id: 2026-10-13-heypi-omitted-runtime-uses-host-bash-with-access-bounded-by-the-service-account
    last_verified: 2026-10-13
    status: active
  - id: secret-webcrypto-handoff
    finding_id: 2026-06-24-heypi-secret-handoff
    last_verified: 2026-10-13
    status: active
  - id: secret-plaintext-at-rest
    finding_id: 2026-06-24-heypi-secret-handoff
    last_verified: 2026-06-24
    status: retired
  - id: adapter-local-permissions-0-2-0
    finding_id: 2026-06-24-heypi-0.2.0-beta-governance-hardening
    last_verified: 2026-06-24
    status: retired
  - id: https-by-default-webhooks-0-2-0
    finding_id: 2026-06-24-heypi-0.2.0-beta-governance-hardening
    last_verified: 2026-06-24
    status: retired
  - id: instructions-rename-0-2-0
    finding_id: 2026-06-24-heypi-0.2.0-beta-governance-hardening
    last_verified: 2026-06-24
    status: retired
  - id: admin-panel-disabled-by-default
    finding_id: 2026-06-24-heypi-admin-panel-and-audit-default-off
    last_verified: 2026-06-24
    status: retired
  - id: audit-is-typed-trace-events
    finding_id: 2026-06-24-heypi-admin-panel-and-audit-default-off
    last_verified: 2026-06-24
    status: retired
  - id: scaffolder-create-heypi
    finding_id: 2026-06-24-heypi-scaffolder-onboarding
    last_verified: 2026-06-24
    status: retired
  - id: single-host-node-service-deploy
    finding_id: 2026-10-13-heypi-heypi-0-3-0-beta-2-remains-the-install-channel-without-a-new-release
    last_verified: 2026-10-13
    status: active
  - id: durability-no-crash-replay
    finding_id: 2026-10-13-heypi-experimental-pi-durable-harness-resumes-interrupted-turns-outside-heypi
    last_verified: 2026-10-13
    status: active
  - id: memory-off-not-a-security-boundary
    finding_id: 2026-06-24-heypi-durability-disclaimer
    last_verified: 2026-06-24
    status: retired
  - id: tags-only-no-github-releases
    finding_id: 2026-10-13-heypi-heypi-0-3-0-beta-2-remains-the-install-channel-without-a-new-release
    last_verified: 2026-10-13
    status: retired
  - id: no-team-adoption-signal-yet
    finding_id: 2026-06-24-heypi-channel-discipline-tags-no-releases
    last_verified: 2026-06-24
    status: open_question
  - id: beta-channel-and-single-template
    finding_id: 2026-10-13-heypi-heypi-0-3-0-beta-2-remains-the-install-channel-without-a-new-release
    last_verified: 2026-10-13
    status: active
  - id: pi-range-stays-on-0-79
    finding_id: 2026-10-13-heypi-pi-1-x-does-not-reach-heypi-s-0-79-x-dependency-range
    last_verified: 2026-10-13
    status: active
  - id: just-bash-skills-proxy-api-drift
    finding_id: 2026-10-13-heypi-just-bash-3-6-0-bypasses-heypi-s-read-only-skills-proxy-with-createexclusive
    last_verified: 2026-10-13
    status: active
  - id: just-bash-hard-link-fixed-from-3-3
    finding_id: 2026-10-13-heypi-just-bash-3-6-0-carries-the-earlier-hard-link-escape-fix
    last_verified: 2026-10-13
    status: active
  - id: just-bash-bundles-patched-toml
    finding_id: 2026-10-13-heypi-just-bash-3-6-0-bundles-the-smol-toml-parsing-fix
    last_verified: 2026-10-13
    status: active
  - id: gondolin-hookless-egress-gap
    finding_id: 2026-10-13-heypi-gondolin-0-13-0-closes-hookless-internal-network-egress-outside-heypi-s-range
    last_verified: 2026-10-13
    status: active
  - id: gondolin-override-compatibility-cost
    finding_id: 2026-10-13-heypi-gondolin-0-13-0-overrides-require-explicit-compatibility-checks
    last_verified: 2026-10-13
    status: active
  - id: cloudflare-caller-owned-sdk-boundary
    finding_id: 2026-10-13-heypi-cloudflare-1-0-removes-the-session-api-used-by-heypi-s-remote-adapter
    last_verified: 2026-10-13
    status: active
  - id: cloudflare-credential-proxy-0-12-10
    finding_id: 2026-10-13-heypi-cloudflare-0-12-10-rejects-credential-proxy-bucket-mutations
    last_verified: 2026-10-13
    status: active
  - id: host-is-omitted-runtime-default
    finding_id: 2026-10-13-heypi-omitted-runtime-uses-host-bash-with-access-bounded-by-the-service-account
    last_verified: 2026-10-13
    status: active
  - id: docker-default-bridge-no-egress-selector
    finding_id: 2026-10-13-heypi-docker-uses-normal-bridge-networking-without-a-heypi-egress-selector
    last_verified: 2026-10-13
    status: active
  - id: approval-request-path-fails-closed
    finding_id: 2026-10-13-heypi-approval-requests-fail-closed-while-approver-lists-remain-optional
    last_verified: 2026-10-13
    status: active
  - id: approver-lists-optional-id-and-alias
    finding_id: 2026-10-13-heypi-approval-requests-fail-closed-while-approver-lists-remain-optional
    last_verified: 2026-10-13
    status: active
  - id: command-policy-unmatched-allow
    finding_id: 2026-10-13-heypi-approval-command-allows-unmatched-commands-after-opt
    last_verified: 2026-10-13
    status: active
  - id: approval-jsonl-records-request-decisions
    finding_id: 2026-10-13-heypi-approval-request-records-are-queryable-jsonl-without-tamper-evidence
    last_verified: 2026-10-13
    status: active
  - id: memory-on-with-relevant-shared-recall
    finding_id: 2026-10-13-heypi-relevant-shared-memory-is-eligible-for-recall-across-conversations-by-default
    last_verified: 2026-10-13
    status: active
  - id: state-key-and-ciphertext-share-root
    finding_id: 2026-10-13-heypi-omitted-runtime-uses-host-bash-with-access-bounded-by-the-service-account
    last_verified: 2026-10-13
    status: active
  - id: legacy-admin-auth-correction
    finding_id: 2026-10-13-heypi-older-admin-applications-already-enabled-authentication-by-default
    last_verified: 2026-10-13
    status: retired
  - id: pi-durable-is-separate-and-experimental
    finding_id: 2026-10-13-heypi-experimental-pi-durable-harness-resumes-interrupted-turns-outside-heypi
    last_verified: 2026-10-13
    status: active
  - id: resolved-pi-node-minimum
    finding_id: 2026-10-13-heypi-pi-1-x-does-not-reach-heypi-s-0-79-x-dependency-range
    last_verified: 2026-10-13
    status: active
  - id: admin-opt-in-loopback-and-token
    finding_id: 2026-10-13-heypi-older-admin-applications-already-enabled-authentication-by-default
    last_verified: 2026-10-13
    status: active
posture_basis:
  capability:
    - 2026-10-13-heypi-heypi-0-3-0-beta-2-remains-the-install-channel-without-a-new-release
    - 2026-06-24-heypi-secret-handoff
    - 2026-10-13-heypi-pi-1-x-does-not-reach-heypi-s-0-79-x-dependency-range
    - 2026-10-13-heypi-experimental-pi-durable-harness-resumes-interrupted-turns-outside-heypi
    - 2026-10-13-heypi-just-bash-3-6-0-bypasses-heypi-s-read-only-skills-proxy-with-createexclusive
    - 2026-10-13-heypi-relevant-shared-memory-is-eligible-for-recall-across-conversations-by-default
  accessibility:
    - 2026-06-24-heypi-secret-handoff
    - 2026-10-13-heypi-heypi-0-3-0-beta-2-remains-the-install-channel-without-a-new-release
    - 2026-10-13-heypi-gondolin-0-13-0-overrides-require-explicit-compatibility-checks
    - 2026-10-13-heypi-cloudflare-1-0-removes-the-session-api-used-by-heypi-s-remote-adapter
  governance:
    - 2026-10-13-heypi-approval-command-allows-unmatched-commands-after-opt
    - 2026-10-13-heypi-experimental-pi-durable-harness-resumes-interrupted-turns-outside-heypi
    - 2026-06-24-heypi-secret-handoff
    - 2026-10-13-heypi-gondolin-0-13-0-closes-hookless-internal-network-egress-outside-heypi-s-range
    - 2026-10-13-heypi-just-bash-3-6-0-carries-the-earlier-hard-link-escape-fix
    - 2026-10-13-heypi-just-bash-3-6-0-bypasses-heypi-s-read-only-skills-proxy-with-createexclusive
    - 2026-10-13-heypi-just-bash-3-6-0-bundles-the-smol-toml-parsing-fix
    - 2026-10-13-heypi-cloudflare-0-12-10-rejects-credential-proxy-bucket-mutations
    - 2026-10-13-heypi-omitted-runtime-uses-host-bash-with-access-bounded-by-the-service-account
    - 2026-10-13-heypi-docker-uses-normal-bridge-networking-without-a-heypi-egress-selector
    - 2026-10-13-heypi-approval-requests-fail-closed-while-approver-lists-remain-optional
    - 2026-10-13-heypi-approval-request-records-are-queryable-jsonl-without-tamper-evidence
    - 2026-10-13-heypi-relevant-shared-memory-is-eligible-for-recall-across-conversations-by-default
    - 2026-10-13-heypi-older-admin-applications-already-enabled-authentication-by-default
stance:
  use_for: "A supervised <a href=\"https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/docs/reference/architecture.md#L3-L19\">shared-chat trial</a> with a named runtime and dependency owner."
  avoid_for: "Work that requires <a href=\"https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/docs/reference/architecture.md#L54-L63\">replay of interrupted model turns</a>."
  watch_next: "Before expanding the trial, check <a href=\"#what-is-unresolved\">the release and test evidence still needed</a>."
---

# heypi

## Where it stands, 2026-10-13

Through 13 October, [heypi's core had no publication after 22 July](https://registry.npmjs.org/%40hunvreus%2Fheypi), but its [optional just-bash adapter's allowed range](https://registry.npmjs.org/%40hunvreus%2Fheypi-runtime-just-bash/0.3.0-beta.2) admits [the 1 October 3.6.0 release](https://github.com/vercel-labs/just-bash/releases/tag/just-bash%403.6.0). In the reviewed source, [the wrapper intended to keep agent skills read-only does not block its new file-creation method, createExclusive](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi-runtime-just-bash/src/index.ts#L26-L64), so dependency updates require boundary review even without a heypi release. Use the beta for a supervised shared-chat trial if your team will own isolation, approver selection and the resolved dependency set.

[Pi owns the model loop; heypi adds chat routing and approval policy](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/docs/reference/architecture.md#L3-L19). A team can coordinate agent work in chat, while people retain the decisions about approvers, execution boundaries and interrupted-work recovery.

**Channel.** For a supervised trial, use [heypi 0.3.0-beta.2](https://registry.npmjs.org/%40hunvreus%2Fheypi). There is [no stable 0.3.0 at this cutoff](https://registry.npmjs.org/%40hunvreus%2Fheypi). The command below [pins only the project generator](https://registry.npmjs.org/create-heypi/0.3.0-beta.2):
[`npm create heypi@0.3.0-beta.2 -- codex-tag my-agent`](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/docs/reference/cli.md#L13-L20).
Before running the agent, verify that the generated project's dependencies and lockfile resolve heypi to 0.3.0-beta.2.
Use [Node >=22.19.0 when resolving Pi 0.79.10](https://registry.npmjs.org/%40earendil-works%2Fpi-coding-agent/0.79.10).
We have not tested deployed skills protections, Gondolin egress or forced Pi and Cloudflare upgrades; the [deployment checks below](#what-is-unresolved) would settle those questions.

**Budget a rebuild from 0.2.x.** The [0.3 rewrite requires rebuilding configuration and persistence](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/CHANGELOG.md#L3-L63).

**Choose isolation and restrict outbound network access explicitly.** The [scaffold selects Docker and local chat, adding Slack only with both credentials](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/examples/codex-tag/index.ts#L7-L35).
In your configuration, [omitting the runtime runs host Bash](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/runtime-tools.ts#L17-L27);
[the warning does not block it](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/app.ts#L1034-L1038).
[Host commands can leave the workspace within the service account's permissions](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/docs/configuration/runtimes.md#L8-L24).

Docker [sets no network selector](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/runtime-docker.ts#L16-L35), and
[normal bridge defaults permit external access](https://github.com/docker/docs/blob/d751b36e43fc991c8810520c74adcd422cc0b959/content/manuals/engine/network/drivers/bridge.md#L19-L44),
subject to daemon, routing and firewall policy. Test the routes your agent must not reach.

**Name approvers and gate consequential tools before sharing the agent.**
[The approval-request path blocks execution on failed required writes, rejection or failed UI posting](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/approval.ts#L366-L506).
[Tools require no approval until opted in](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/tool-config.ts#L30-L51);
[omitting both `admins` and `approvers` admits any reachable responder](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/approval.ts#L274-L291).

Use [`approval.always()` for per-call decisions](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/docs/configuration/approvals.md#L3-L24):
[`once()` remembers a tool within the session](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/approval.ts#L309-L313),
and [`approval.command()` allows unmatched command text](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/approval.ts#L165-L176).

**Keep decision records and secret backups out of the agent's reach.** The
[queryable ledger](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/docs/configuration/admin.md#L47-L53)
[covers approval-request decisions, not every execution](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/approval.ts#L309-L395);
[plain JSONL appends are not tamper-evident](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/channel.ts#L191-L194).
If state writers must not rewrite records, export them to independently protected append-only storage.

[Browser-encrypted handoff keeps raw secret replies away from Pi](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/docs/configuration/secrets.md#L8-L26),
but [a readable complete backup contains both ciphertext and its decryption key](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/docs/configuration/secrets.md#L17-L18).
Protect state-directory permissions and backups.

**Choose whether conversations may share memory.**
[Memory defaults on, with relevant shared records eligible across conversations on the same adapter ID](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/docs/configuration/memory.md#L3-L21).
[Recall selects, limits and escapes records](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/memory.ts#L336-L368).
Use [`memory: false` when that surface is unwanted](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/docs/configuration/memory.md#L23-L26), or [separate adapter IDs when shared memory must stay apart](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/docs/configuration/memory.md#L20-L21).

**Keep admin local unless you configure remote access.**
[Admin is opt-in](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/app.ts#L177-L192).
The beta.2 server [defaults to `127.0.0.1` and requires a token to start off loopback, plus configured hosts for wildcard bindings](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/admin.ts#L287-L318).
Before exposing admin, review the [secret-submission route, which runs before the general token check and has separate request and host handling](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/admin.ts#L299-L318).

**The skills wrapper missed a new way to write.** Check `npm ls just-bash` and keep a consumer lock.
With `mktemp` available and staged skills writable by the service account, the reviewed source permits [empty file or directory creation inside `/agent/skills`](https://github.com/vercel-labs/just-bash/blob/7537a260e38648e8998db7a95504102ad80b0194/packages/just-bash/src/fs/read-write-fs/read-write-fs.ts#L714-L771).

Repair or replace the wrapper before relying on read-only skills. Target 3.6.0 for this cutoff:
[versions below 3.3.0 allow pre-existing hard links to modify the same file outside a mounted root](https://github.com/vercel-labs/just-bash/security/advisories/GHSA-g5pf-mh4h-h655),
and [3.6.0 bundles the TOML fix](https://github.com/vercel-labs/just-bash/releases/tag/just-bash%403.6.0)
for [quadratic parsing that can stall the event loop](https://github.com/squirrelchat/smol-toml/security/advisories/GHSA-r4xh-jqrq-34v2).
To get that fix, replace the just-bash artifact; [a downstream parser override cannot replace its inlined code](https://github.com/vercel-labs/just-bash/commit/632090a60b710608e2180638a757172dc0316b2c).

**Configure Gondolin's HTTP hooks before trusting egress.** heypi's
[`^0.12.0` range excludes 0.13.0](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi-runtime-gondolin/package.json#L41),
[released on 4 October 2026](https://github.com/earendil-works/gondolin/releases/tag/v0.13.0) with a [fix for hookless guest HTTP/TLS reaching internal addresses](https://github.com/earendil-works/gondolin/blob/v0.13.0/CHANGELOG.md#L12).
Pass [`createHttpHooks()` with `blockInternalRanges: true`](https://github.com/earendil-works/gondolin/blob/v0.12.0/host/src/http/hooks.ts#L143-L147)
through the [caller's VM options](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi-runtime-gondolin/src/index.ts#L65-L82).

Before overriding to 0.13.0, check [changed guest cache paths, CommonJS loading, terminal `VM.close()` and secret placeholders using a shared marker plus secret name](https://github.com/earendil-works/gondolin/blob/v0.13.0/CHANGELOG.md#L9-L40);
[`secretPlaceholderMode: "unique"` retains unique placeholders](https://github.com/earendil-works/gondolin/blob/v0.13.0/CHANGELOG.md#L9-L40).
The adapter needs [Node >=23.6](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi-runtime-gondolin/package.json#L28-L41)
and [QEMU](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/docs/guides/deployment.md#L3-L4).

**Resolve the Cloudflare Worker's SDK to 0.12.10.** heypi
[calls sessions on the sandbox your Worker supplies](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi-runtime-cloudflare/src/index.ts#L76-L116);
[Cloudflare 1.0 removes the session interface](https://github.com/cloudflare/sandbox-sdk/tree/f9e972a14123bef3b93e9bb337bab6e83419fe7e/packages/sandbox/src). Moving to 1.0 requires a session API port.
Check both the Worker's lock and heypi's. [0.12.10 fits heypi's range](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi-runtime-cloudflare/package.json#L41)
and [rejects bucket-root mutations through `credentialProxy` mounts](https://github.com/cloudflare/sandbox-sdk/releases/tag/%40cloudflare/sandbox%400.12.10).

If your Worker uses those mounts, review their credentials and permitted object operations;
[heypi does not configure them automatically](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi-runtime-cloudflare/src/index.ts).

**Port before moving to Pi 1.2.0, and plan recovery separately.** heypi's
[`^0.79.6` range excludes Pi 1.x](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/package.json#L64).
[Pi 1.2.0 does not export AuthStorage](https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/index.ts), which [heypi imports](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/model.ts#L1-L13). A forced override needs an API port.

[Pi Durable resumes interrupted turns as a separate experimental package](https://github.com/earendil-works/pi/blob/v1.2.0/packages/durable/README.md#L1-L7);
heypi [persists queued work but does not replay in-flight model execution](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/docs/reference/architecture.md#L54-L63).
Recovery needs its own integration. Run [one supervised process per state directory](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/docs/guides/deployment.md#L3-L8)
and reconcile interrupted work.

## What is unresolved

- just-bash's deployed skills boundary: a tagged wrapper repair covering the full mutation API, with tests confirming denied file and directory creation under deployed permissions, would show that deployed skills stay read-only.
- Pi and Cloudflare upgrades: a heypi tag porting the imports and session interfaces, with integration results including the caller-owned Worker, would show those versions work together.
- Gondolin: network probes would show which private-service and metadata routes the deployed VM blocks; passing the compatibility checks above would show the override is viable.
- Recovery: a tested integration with a stable replay contract would settle which interrupted turns and tools recover, and change the operator's reconciliation work.
- Stronger governance remains open for a future release. Tagged default-deny approver code would establish narrower identity defaults; an independently protected append-only implementation would establish protection against state writers editing decision records.
- Support and adoption: a maintainer status statement would settle stated support intent. A stable release with an upgrade contract would establish a supported migration. A public team deployment with configuration and outcomes would establish an adoption example. Public inactivity alone settles none of these.

## Profile hygiene

Assessed through 2026-10-13, with source checks on 2026-10-14. Version recommendations
are for that cutoff.
See [METHOD.md](https://github.com/sheetgenius/frontier/blob/90bb1d1af32606608d2387bcb5d5796b88e00e5a/METHOD.md) for the evidence contract.
