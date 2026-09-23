import re, os, glob
RUN="runs/2026-09-21-weekly-digest-2026-08-20_2026-09-21-frontier-v0"
fids={os.path.basename(p)[:-3] for p in glob.glob(f"{RUN}/findings/*.md")}
def fid(src, key):
    m=[f for f in fids if f.startswith(f"2026-09-21-{src}-") and key in f]
    assert len(m)==1, (src,key,m); return m[0]
U = {
"claude-code": ([("server-side-classifier-default","2-1-278-auto-mode"),("stable-pointer-jump","stable-froze"),("project-bypass-ignored","2-1-257-authority"),("gitspawn-second-path","gitspawn-ultrareview")],
 "Stable is [2.1.267](https://github.com/Homebrew/homebrew-cask/commit/67ec5aa16a) and latest is [2.1.278](https://github.com/anthropics/claude-code/releases/tag/v2.1.278). The stable pointer held 2.1.236 from about 28 August to 15 September, then jumped 23 versions. 2.1.278 makes the server-side auto-mode classifier the default on API, Enterprise, cloud and gateway sessions; gateways must pass the `safeguards` and `safeguard_results` fields. 2.1.257 stops a project file putting a clone into bypass mode. Deny rules were extended into Bash twice and reverted twice. The permission-modes page lists auto mode's isolation needed as none. Manifold reports a second GitSpawn path still running on 2.1.252, and no changelog line through 2.1.278 names a fix."),
"codex": ([("default-model-hotfix","default-model-moved"),("mcp-server-removed","codex-mcp-server-removed"),("guardian-v2-still-off","guardian-v2-stayed-off")],
 "npm latest at close was [0.155.1](https://github.com/openai/codex/releases/tag/rust-v0.155.1), the last of fourteen stables in the window. Guardian V2 is still `default_enabled: false` in every stable read, and 0.153.0 stopped Guardian review in Full Access and User approval modes. The 0.153.4 hotfix moved the picker default to `gpt-6-astra` for sessions with no model set. 0.154.0 removed `codex mcp-server` and stopped running workspace helpers before trust. The Plugin4Shell fix is #34644 in 0.146.0."),
"gemini-cli": ([("autoedit-and-seatbelt","autoedit-path-check"),("plugin4shell-unpatched","extension-install-still")],
 "Latest is [0.60.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.60.0). v0.57.0 carried every preview-only fix from August. v0.58.0 fixed an autoEdit path rule the loader never loaded and a macOS sandbox profile that could reach a Docker socket; neither got an advisory. At 0.60.0 the extension installer still checks out `FETCH_HEAD`, and AIR Security reports Google called the tool deprecated and declined to patch Plugin4Shell. Four stables in the window were almost entirely hardening."),
"antigravity": ([("sandbox-valueless-flag","1-1-18-a-valueless"),("gates-loosened","default-gates-loosened")],
 "Nineteen stables, 1.1.18 through [1.2.7](https://github.com/google-antigravity/antigravity-cli/releases), and each tag now carries its own notes and a unique binary. Before 1.1.18 a headless `--sandbox` with no value ran with no sandbox. Workspace reads, MCP calls under always-proceed and headless plan review stopped asking; URL fetch started asking. Remote-triggered turns ignored the session's permission mode until 1.2.6. Use 1.1.20 or later for the settings.json fix."),
"hermes-agent": ([("gitspawn-fixed-v2026-9-7","ghsa-7x36"),("computer-use-unapproved","computer-use-ran"),("turn-cap-unlimited","max-turns")],
 "Seven stables, through [v2026.9.21](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.9.21). [v2026.9.7](https://github.com/NousResearch/hermes-agent/commit/f6234d00c5d5) closes GitSpawn: every earlier tag runs a repository's git config commands before any prompt. v2026.9.14 stops destructive desktop actions running unapproved on gateway, cron and API hosts. v2026.8.19 made the turn cap unlimited by default. The delegation docs match config from v2026.9.11. The lead engineer says the project will lean toward Pi and move bundled memory providers to the plugin market."),
"pi-coding-agent": ([("harness-tagged","dev-harness-reached"),("harnesstax","harnesstax")],
 "The rewritten harness reached main and a tag in v0.85.0; npm is at [0.87.0](https://github.com/earendil-works/pi/releases/tag/v0.87.0). The plugin surface is source-only on npm from 0.85.1. v0.86.0 makes an extension that routes `!` commands into a VM fail closed instead of falling back to the host. The HarnessTax study found Pi matched Claude Code and Codex CLI on success at up to half the cost on its sample."),
"omp": ([("repo-writes-policy","a-repository-under-review"),("approval-bypasses-18-2-1","v18-2-1-closes")],
 "Latest is [18.2.8](https://github.com/can1357/oh-my-pi/releases), and the four install paths agree on it at window close. At 18.2.8 project-local config and extensions load unconditionally, the trust shim always returns true, and the default approval mode is `yolo`. v18.2.1 closed a cluster of approval bypasses and a view-only collab link that could steer a session. Tag-ahead-of-release recurred three times, and 17.3.6 never got a release. The omp2 Rust rewrite is in no tag."),
"openclaw": ([("exec-fix-stable","approved-exec-fix-is-now"),("extended-stable-unfixed","extended-stable-moved"),("advisory-batch","75-advisories")],
 "The approved-exec fix is in stable [2026.8.1](https://github.com/openclaw/openclaw/releases/tag/v2026.8.1) and every later main-line stable; npm latest is 2026.9.5. The workspace-boundary and sandbox-stop fixes shipped with it. The `extended-stable` tag moved to 2026.7.35, a July line with none of them. The project published 75 advisories on 11 September. Several defaults widened agent reach across 8.2 to 9.5, and release checks were waived on two stables."),
"paperclip": ([("plaintext-credentials","plaintext-credentials"),("thought-text-stable","acpx-thought-text")],
 "Stable is [v2026.916.1](https://github.com/paperclipai/paperclip/releases). The review-policy lock reached stable in 824.0 and the ACPX thought-text fix in 831.0. v2026.916.0 stops returning stored credentials in plaintext from agent APIs, including to the agent; earlier stables need a key rotation. New standard-trust agents can hire other agents by default from 916.0."),
"agent-zero": ([("telegram-webhook","telegram-webhook"),("acp-defaults-unchanged","carry-forward-acp-defaults")],
 "Latest is [v2.12](https://github.com/agent0ai/agent-zero/releases/tag/v2.12). It fixes an unauthenticated Telegram webhook, a WhatsApp path traversal and an IMAP allowlist bypass, recorded in a checked-in security ledger rather than advisories. ACP defaults and the SSRF tests are unchanged. The `ready` branch carries secret-substitution and browser fixes in no tag."),
"openhands": ([("docker-runtime-ignored","docker-conversation-runtime"),("profiles-scopes","profiles-become-enforceable")],
 "Latest in window is [v1.20.0](https://github.com/OpenHands/OpenHands/releases/tag/v1.20.0). Before it the Docker conversation runtime setting was ignored and conversations ran on the host. v1.19.0 and v1.20.0 made profiles enforceable scopes for MCP servers and secrets. Four security fixes shipped as plain pull requests. v1.15.0 carried the wrong-profile fix."),
"deepseek-harness": ([("web-ui-login","web-ui-now-requires"),("still-prerelease","still-no-non-prerelease")],
 "Still no non-prerelease tag; the project split into an rc line (0.1.5-rc.2) and an alpha line. The Web UI requires a login from 0.1.2. architecture.md still says any row can be replaced. The public repository is a mirror of a private organization. The alpha line sends more session data to DeepSeek by default, and an experimental Auto review lets a model approve calls. A Bubblewrap escape was fixed without an advisory."),
"eve": ([("queue-auth","cross-principal-authority"),("byok-key","credential-exposure-byok"),("auto-approval","auto-a-model-can-now")],
 "47 tags, through [eve@0.63.0](https://github.com/vercel/eve/releases). 0.52.5 fixed queued messages from different users running under the last sender's authorization, which matters to anyone who followed our earlier advice to set `turnPolicy: queue`, and stopped `/eve/v1/info` serving the owner's BYOK key. 0.59.1 adds `auto()`, a model that approves tool calls. Self-modification gained a deployed mode that opens draft pull requests, off by default."),
"omnigent": ([("policy-outage-falls-through","governance-layering"),("bundle-advisories","three-bundle-upload")],
 "Latest in window is [v0.14.0](https://github.com/omnigent-ai/omnigent/releases/tag/v0.14.0), which fixes three bundle-upload advisories including a critical host-shell escape. From v0.13.0, when the policy server is unreachable, native Claude Code and Codex tool calls fall through to the wrapped harness's own dialog. Shared-editor approval did not narrow; an editor shell-proxy fix reached v0.15.0 after the window. Spend caps check before the next call against spend counted at turn boundaries."),
"github-copilot-cli": ([("allow-all-falsey","copilot-allow-all-falsey"),("plugin4shell-no-fix","plugin4shell-no-changelog")],
 "Six stables through [1.0.87](https://github.com/github/copilot-cli/blob/c13b3dcae4f1/changelog.md). 1.0.83 cut sandbox access to localhost and pinned Linux egress to the proxy, and grants file tools read access to token-bearing dev config by default. 1.0.85 fixed `COPILOT_ALLOW_ALL=0` turning auto-approval on and a managed-hooks bypass. No changelog line names a Plugin4Shell fix."),
"cursor": ([],
 "SpaceX's acquisition reframed the product: OpenAI proposed ending Cursor's access to its models on 12 November. Projects, a coordinator thread that dispatches agents, is in beta and cloud-only. Cloud agents can run on self-hosted machines, and the docs list what still leaves the network. The CLI changelog stops at 26 August while the install channel serves newer builds. No in-window advisory."),
"agent-flywheel": ([("v0-7-0-never-installed","v0-8-0-the-maintainer")],
 "Correction, 2026-09-23: the [v0.8.0 release notes](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/releases/tag/v0.8.0) say v0.7.0 never installed because it failed its own integrity check. Earlier text on this page that treats v0.7.0 as the cut operators run is wrong on that point. The current tag is v0.9.0, which adds per-tool holds and smoke-checked rollback. Safe mode is still not a boundary, and bundled Codex still installs `@latest`."),
"flue": ([("changesets-channel","release-channel-changed")],
 "Six stables shipped 9 to 18 September after a quiet month, ending at [2.1.0](https://github.com/withastro/flue/releases/tag/%40flue%2Fruntime%402.1.0). 2.0.4 and 2.0.5 were broken publishes. The project moved to changesets and per-package GitHub Releases, so the root CHANGELOG stops at 2.0.6."),
}
for src,(claims,text) in U.items():
    p=f"content/profiles/{src}.md"; s=open(p).read()
    s=re.sub(r"^last_updated: .*$","last_updated: 2026-09-21",s,count=1,flags=re.M)
    add="".join(f"  - id: {cid}\n    finding_id: {fid(src,key)}\n    last_verified: 2026-09-23\n    status: active\n" for cid,key in claims)
    if add:
        if re.search(r"^claims:\n",s,re.M): s=re.sub(r"^claims:\n","claims:\n"+add,s,count=1,flags=re.M)
        else: raise SystemExit(f"no claims in {src}")
    fm_end=s.index("\n---\n",4)+5
    body=s[fm_end:]
    i=body.find("\n## ")
    sec=f"\n## Where it stands, 2026-09-21\n\n{text}\n"
    body=body[:i]+"\n"+sec.strip("\n").join(["",""]) if False else body[:i]+sec+body[i:]
    s=s[:fm_end]+body
    open(p,"w").write(s)
    print("updated",src)
