# Thread check -- 2026-08-20 to 2026-09-21

Does this window complete, contradict, or repair something a previous issue claimed?

## It completes

**OpenClaw's approved-exec fix shipped.** Carried as unreleased by "You Approved Something Else", "The Gate Is a Plugin" and "The Classifier Is Off". ab5611f0 is an ancestor of stable v2026.8.1 (2026-08-31) and every later main-line tag. The workspace-boundary fix (cc027149) and the sandbox-stop fix (fd8326c5) came with it. The npm extended-stable tag moved to 2026.7.35, which has none of them.

**Codex Guardian V2 stayed off.** Last brief: in the 0.148.0 tag and off. At all fourteen stables through 0.155.1 it is still UnderDevelopment, default_enabled false. 0.153.0 also stopped Guardian review in Full Access and User approval modes.

**Gemini CLI's four preview-only items reached stable in v0.57.0** (retry/TTL, git-env neutralization, the enableAgents built-in load fix, the Cloud Workstations OAuth redirect).

**Hermes's missed approval fixes reached v2026.8.19** (#90224, #90391, #90765), and the delegation docs agree with config from v2026.9.11.

**DeepSeek Harness's web UI now requires a login** (0.1.2). The brief's watch item "whether anything authenticates the Web UI beyond binding policy" resolves yes. Still no non-prerelease tag; architecture.md still says any row can be replaced. The public repo is a mirror: merge commits cite PRs from a private org. That settles last issue's uncertain line.

**Paperclip's review-policy lock and CWE-78 guidance reached stable v2026.824.0; the ACPX thought-text fix reached stable v2026.831.0.**

**Pi's rewritten harness reached main and a tag in v0.85.0**, and the compaction docs match the package from 0.84.3.

**OpenHands v1.15.0 (2026-08-21) is the in-window tag with the wrong-profile fix**, as the brief said it would be.

**Agent Zero's ACP defaults and SSRF tests are unchanged at v2.11 and v2.12.**

## It repairs

**eve's queue advice.** "The Gate Is a Plugin" and "The Classifier Is Off" told operators to set `turnPolicy: queue` after 0.33.0. PR 3172 in eve@0.52.5 (2026-09-10) fixed queued messages from different users running as one turn under the last sender's authorization. On a multi-user channel the advice exposed a cross-principal path until 0.52.5.

**Agent Flywheel v0.7.0.** The v0.8.0 release notes say v0.7.0 never installed: it failed its own integrity check. The profile and July material treated v0.7.0 as the cut operators run. Corrected on the profile, dated.

## It contradicts nothing on the gate argument

"The Gate Is a Plugin" argued the gate must be the one component that is not one. This window's breaks were not in the gate at all; they were in plumbing that runs before any gate (installer git, startup git, env files, an unauthenticated approvals server). That extends the argument rather than contradicting it.

## Forward-facing sentence for the digest

Last issue's queue advice for eve ran one user's message under another's authorization on multi-user channels until 0.52.5; upgrade before relying on it.
