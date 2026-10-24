import assert from "node:assert/strict";
import fs from "node:fs";
import { createRequire } from "node:module";

const require = createRequire(new URL("../../../site/package.json", import.meta.url));
const YAML = require("yaml");
const runId = "2026-10-24-weekly-digest-2026-10-13_2026-10-24-frontier-v0";
const captures = JSON.parse(fs.readFileSync(new URL("../social/capture.json", import.meta.url), "utf8"));
const byPost = new Map(captures.map((post) => [post.url.split("/").at(-1), post]));
assert.equal(byPost.size, captures.length, "duplicate post in capture.json");

// Editorial metadata and unique excerpt anchors only. Every quoted character
// and every displayed author name is copied from the independent capture.
// These primary receipts were opened before the verdicts below were written.
const receipts = {
  netlify: "https://web.archive.org/web/20261001190400id_/https://www.netlify.com/blog/cursor-origin-repositories-on-netlify/",
  originApps: "https://web.archive.org/web/20261024092934id_/https://cursor.com/docs/origin/apps",
  originPublish: "https://web.archive.org/web/20261024093101id_/https://cursor.com/docs/origin/apps/publish",
  origin: "https://web.archive.org/web/20261024092716id_/https://cursor.com/docs/origin",
  originOwners: "https://web.archive.org/web/20261024094000id_/https://cursor.com/docs/release-notes/origin.md",
  reviewLaunch: "https://web.archive.org/web/20261016015421id_/https://claude.dev/blog/solving-code-review-at-anthropic/",
  review: "https://web.archive.org/web/20261017030656id_/https://code.claude.com/docs/en/code-review",
  claude304: "https://github.com/anthropics/claude-code/releases/tag/v2.1.304",
  mcp: "https://web.archive.org/web/20261024085041id_/https://code.claude.com/docs/en/mcp",
  pi: "https://github.com/earendil-works/pi/blob/v1.4.0/packages/durable/README.md",
  cloudflare: "https://github.com/cloudflare/agents/releases/tag/agents%400.30.0",
  cache: "https://web.archive.org/web/20261021044950id_/https://developers.openai.com/api/docs/guides/prompt-caching",
  cacheClient: "https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/features/src/feature_configs.rs#L316-L319",
  workshop: "https://github.com/openclaw/openclaw/blob/v2026.10.5/docs/tools/skill-workshop.md",
  openclaw: "https://github.com/openclaw/openclaw/releases/tag/v2026.10.5",
  copilot100: "https://github.com/github/copilot-cli/releases/tag/v1.0.100",
  copilotNotes: "https://github.com/github/copilot-cli/blob/v1.0.103/changelog.md",
  copilot102: "https://github.com/github/copilot-cli/releases/tag/v1.0.102",
  copilot103: "https://github.com/github/copilot-cli/releases/tag/v1.0.103",
  planning: "https://github.com/paperclipai/paperclip/blob/v2026.1023.0/doc/plans/2026-10-05-plan-task-guidance.md",
};

const selections = [
  {
    post: "2110714001369842141", id: "netlify-origin-beta-pipeline", kind: "claim", sources: ["cursor"],
    title: "The forge still needs a deployment partner", from: "Push a commit,", to: "in the PR.",
    summary: "Netlify describes builds and pull-request previews for Origin repositories, within an invite-only beta.",
    checks: [receipts.netlify, receipts.originApps],
    verdict: "Claim, confirmed as a documented beta integration: Netlify's September 10 article describes push-triggered builds and PR preview links, and Cursor's October 24 app catalog still lists Netlify. The October 15 post is not a new launch. We did not run a deployment or establish parity with every supported Git host; independent deployment infrastructure still has a place in this provider-owned forge.",
  },
  {
    post: "2110457439543787860", id: "yannis-origin-per-agent-authority", kind: "voice", sources: ["cursor"],
    title: "Give the worker less authority than its owner", from: "an agent to push fixes", to: "my account can.",
    summary: "Yannis asks for agent-specific push and merge permissions, with actions attributed to the exact run.",
    checks: [receipts.originOwners],
    verdict: "Voice, a request for separate worker authority and run attribution. Origin's captured notes document Agentic owner decisions and app approvals, but do not establish the requested per-cloud-agent grant or complete run-level audit trail. Human-required paths need human owners without an app alternative; merely choosing Classic does not ensure a person approves.",
  },
  {
    post: "2111854527943176240", id: "cynthia-open-forge-counter-read", kind: "voice", sources: ["cursor"],
    title: "An open forge is still a reason to build", from: "It's simple.", to: "No vendor lock-in.",
    summary: "Cynthia Toporowski gives openness and avoiding vendor lock-in as reasons to build Kvarm alongside Origin.",
    verdict: "Voice, the case for an independent forge even as Cursor expands its own. This establishes Toporowski's design preference, not Kvarm's delivered feature set or freedom from every switching cost. We did not inspect Kvarm or run a migration. Provider expansion does not settle who should own the repository.",
  },
  {
    post: "2113696242236866585", id: "sunofdog-origin-team-transfer-gap", kind: "claim", sources: ["cursor"],
    title: "A user reports a broken team cutover", from: "My account ID changed,", to: "handle it manually.",
    summary: "An Origin user reports losing their bot's repository access after converting a personal account to a team account.",
    checks: [receipts.origin],
    verdict: "Claim about one private account migration, unconfirmed as a reproduced incident. Cursor's October 24 overview distinguishes individual and team namespace owners and restricts namespace changes during early beta; it does not verify this account's changed ID, support ticket or three-to-four-day estimate. The paired reply offers manual help. Neither post establishes deleted repository data or that every team conversion loses access.",
  },
  {
    post: "2113718347716309331", id: "diane-origin-manual-transfer-offer", kind: "voice", sources: ["cursor"],
    title: "A manual way out, not a delivered repair", from: "this is a gap", to: "now!",
    summary: "Diane Liu acknowledges a repository-lifecycle gap and offers direct help with the reported account transfer.",
    verdict: "Voice, the reply acknowledges the reported lifecycle gap and offers an immediate manual intervention, an essential counterweight to the transfer complaint. We did not see the account repaired or a released self-service migration. The offer narrows the available remedy for this conversation without proving either the original diagnosis or a general fix.",
  },
  {
    post: "2110866210573386065", id: "claudedevs-code-review-ga-depth", kind: "claim", sources: ["claude-code"],
    title: "Choose review depth, keep the merge decision", from: "Code Review is", to: "plans.",
    summary: "ClaudeDevs announces Team and Enterprise Code Review availability and repository-level review depth.",
    checks: [receipts.reviewLaunch, receipts.review],
    verdict: "Claim, the October 15 Anthropic article confirms GA on Team and Enterprise, and the October 17 guide documents Quick, Standard and Deep. That hosted service comments and posts a check; it never approves or blocks a PR itself. Faster reviews and better bug detection remain unverified vendor performance claims with no published method for this comparison. We did not measure review time, recall or false positives.",
  },
  {
    post: "2111544480457445781", id: "noah-memory-rule-self-correction", kind: "voice", sources: ["claude-code", "codex"],
    title: "The old instruction was still doing its job", from: "It saved it as a hard rule", to: "memory files.",
    summary: "Noah revises an earlier complaint after finding an old authentication restriction in saved instructions.",
    verdict: "Voice, a self-correction that puts the user's saved rule back into the diagnosis. Noah says editing the memories restored the desired behavior; we have neither those files nor a before-and-after trace. This is a reason to inspect retained instructions before blaming model capability, not proof that other authentication refusals have the same cause.",
  },
  {
    post: "2112219173288120531", id: "thariq-one-p0", kind: "voice", sources: ["claude-code"],
    title: "Pick the work that deserves the attention", from: "what's your P0?", to: "full attention?",
    summary: "Thariq questions whether multitasking across agents is more useful than concentrating on one priority.",
    verdict: "Voice, prioritization advice that cuts against treating parallel agent activity as progress. The proposed test is whether the most important work improves with full attention, not how many sessions stay busy. The post supplies no controlled comparison of single-task and multi-agent throughput, and we do not turn the advice into a universal concurrency limit.",
  },
  {
    post: "2112678467364106340", id: "ayyaz-person-decider-host-boundary", kind: "claim", sources: ["claude-code"],
    title: "A person-only ask still has a host boundary", from: "Only the permission dialog", to: "mod's reason.",
    summary: "Ayyaz points to Claude Code 2.1.304's person decider and suggests using it for consequential writes.",
    checks: [receipts.claude304],
    verdict: "Claim, the 2.1.304 release explicitly documents decider: person: only a permission dialog or host callback can approve, and an unanswered ask is refused with the mod's reason. A host callback is still an implementation the operator must trust, not proof that a person clicked. We did not test the suggested deploy or production-database policy, or establish that every consequential call reaches this check.",
  },
  {
    post: "2113698007892070527", id: "claudedevs-mcp-tasks-eligibility", kind: "claim", sources: ["claude-code"],
    title: "A server job can outlive the client", from: "Tasks and Elicitations are available", to: "soon.",
    summary: "ClaudeDevs announces MCP Tasks and Elicitations for the CLI, with other Claude products to follow.",
    checks: [receipts.mcp, receipts.claude304],
    verdict: "Claim, qualified by the October 24 guide: MCP Tasks is public beta on CLI 2.1.304 or later, with feature-flag eligibility and a supporting protocol-2026-07-28 server. Desktop, VS Code, third-party-provider and telemetry-off sessions are excluded, as are ordinary one-shot prompt runs. Remote tasks can survive client exit; stdio servers may not. We did not execute a task or verify delivery to the other products promised here.",
  },
  {
    post: "2112559218649686467", id: "mario-durable-phase-restart", kind: "claim", sources: ["pi-coding-agent"],
    title: "The checkpoint tells recovery where to start", from: "a phase is:", to: "next phase.",
    summary: "Mario Zechner describes durable tasks as phases that store intent, perform an effect and commit the next state.",
    checks: [receipts.pi],
    verdict: "Claim, experimental Pi Durable 1.4's tagged guide confirms checkpointed task state machines and phase restart. Its tool contract adds an important limit: interrupted tools rerun only when declared replay-safe; other calls return an interrupted result, and replay-safe external effects still need idempotency. We did not run a crash test or establish the broader judgment against event sourcing. A saved checkpoint does not prove an external effect happened exactly once.",
  },
  {
    post: "2113654363109699653", id: "cloudflare-pi-wake-owner", kind: "claim", sources: ["pi-coding-agent"],
    title: "The host supplies the wake-up", from: "Your harnesses", to: "automatically.",
    summary: "Cloudflare announces Agents SDK 0.30.0 support for Pi 1.4 recovery and hibernation.",
    checks: [receipts.cloudflare, receipts.pi],
    verdict: "Claim, supported for the documented integration by agents@0.30.0, using experimental Pi Durable 1.4: PiHarness retries failed wake steps, reopens after storage errors and passes onWake to the harness factory. The upgrade requires wiring that callback and accepting a SQLite migration Pi 1.3 cannot reopen. Crash-looping tasks can park and need an explicit retry. We did not test a deployment; automatic recovery is not a promise that every failed job completes unattended.",
  },
  {
    post: "2111009257835409791", id: "lucas-pi-restart-friction", kind: "voice", sources: ["pi-coding-agent"],
    title: "A durable label does not finish the session", from: "kind of sad", to: "on a restart",
    summary: "Lucas Meijer says restart trouble with long, subagent-heavy sessions stops Meijer from using a personal Pi Durable setup.",
    verdict: "Voice, a report of friction in Meijer's own October 16 setup, not a reproduced defect in current Pi. The post names neither a Pi version nor a host and gives no failing trace. Cloudflare's later recovery release supplies useful counterweight, but does not prove this session's model, subagent or restart problem was repaired.",
  },
  {
    post: "2112712984644784534", id: "tibo-cache-forever-claim", kind: "claim", sources: ["codex"],
    title: "Twelve hours and forever are different promises", from: "You can now cache", to: "hit the cache.",
    summary: "Tibo pairs twelve-hour API caching with a promise of indefinite cache reuse for logged-in Codex and Work users.",
    checks: [receipts.cache, receipts.cacheClient],
    verdict: "Claim, only the API portion is confirmed by the pinned October 21 guide: eligible Responses models support a twelve-hour minimum lifetime. That API contract does not establish perpetual Codex or Work subscription credit. Codex 0.164.0 preserves fork prefixes with a legacy-compaction exception, not a server retention guarantee. The forever and guaranteed-hit language remains an unverified vendor claim with no published method; no account billing or long-gap reuse was tested.",
  },
  {
    post: "2113854374804086988", id: "kirill-long-gap-cache-counterexample", kind: "claim", sources: ["codex"],
    title: "A cold resume challenges the cache promise", from: "Same thread resumed", to: "0% cached.",
    summary: "Kirill Dubovitskiy reports losing cached-token credit after resuming a logged-in Codex CLI thread.",
    checks: [receipts.cache, receipts.cacheClient],
    verdict: "Claim about a private measurement, not independently reproduced: the 99.8%, 0% and 8% figures remain the author's observations without request payloads proving an unchanged prefix and cache identity. The pinned API guide describes finite lifetimes, while the tagged Codex client cannot prove subscription-side retention. The linked Desktop report is a separate observation. This challenges a guaranteed hit without establishing a universal Codex cache failure.",
  },
  {
    post: "2113789643275862025", id: "will-goals-reading-bottleneck", kind: "voice", sources: ["codex"],
    title: "The report can become the next blockage", from: "they write giant unreadable", to: "like come on",
    summary: "Will Depue complains that stalled goals and cramped report rendering make agent work harder to supervise.",
    verdict: "Voice, a complaint about lost progress and the physical work of reading generated reports in a narrow panel. We did not inspect the goal, report, application build or stall trace, so no current-release defect rate follows. Faster production has little value to this user when its output is difficult to inspect; the proposed workaround belongs beside that complaint.",
  },
  {
    post: "2113794328690647521", id: "eric-goals-manager-workaround", kind: "voice", sources: ["codex"],
    title: "The workaround puts a manager back in the loop", from: "My pro tip", to: "new work.",
    summary: "Eric Provencher recommends a manager agent, scheduled progress polling and written reconciliation of user steers.",
    verdict: "Voice, a concrete alternative to Goals that restores a manager, polling and a written steering record. It is advice, not a released Goals repair or a demonstrated improvement over Depue's setup. We did not run it or measure the extra coordination cost. Keeping this reply preserves the possibility that specialized orchestration still earns its keep.",
  },
  {
    post: "2112527393844060626", id: "hazem-copilot-local-network-default", kind: "claim", sources: ["github-copilot-cli"],
    title: "The sandbox reaches local services by default", from: "its sandbox now", to: "by default.",
    summary: "Hazem Omier flags Copilot CLI 1.0.100's default access to localhost and private-network services.",
    checks: [receipts.copilot100, receipts.copilotNotes],
    verdict: "Claim, confirmed by the non-prerelease 1.0.100 notes and the tagged changelog: local-network access is allowed by default. That makes the reach of a sandboxed command a separate question from whether sandboxing is enabled. We did not probe any OS or service, and the post does not establish access to every database or admin panel. Inspect configured network rules against the actual services on your machine.",
  },
  {
    post: "2113675412538564841", id: "ayyaz-copilot-inherited-approvals", kind: "claim", sources: ["github-copilot-cli"],
    title: "Fewer prompts can mean inherited authority", from: "Copilot CLI 1.0.102:", to: "one repo.",
    summary: "Ayyaz distinguishes inherited custom and MCP approvals from reuse of local MCP tool snapshots across worktrees.",
    checks: [receipts.copilot102, receipts.copilot103, receipts.copilotNotes],
    verdict: "Claim, both changes are recorded in non-prerelease releases: 1.0.102 honors existing custom/MCP approvals in subagents, and 1.0.103 reuses local tool snapshots across registered worktrees in one repository. A cached definition is not itself a new approval. We checked the release contracts, not a nested run; reduced prompting still warrants checking which existing grants the child receives.",
  },
  {
    post: "2112260434116108528", id: "openclaw-workshop-undo-after-edit", kind: "claim", sources: ["openclaw"],
    title: "Undo arrives after the edit", from: "Skill Workshop", to: "Undo",
    summary: "OpenClaw's 2026.10.5 announcement highlights Skill Workshop Undo alongside sidebar and public-link changes.",
    checks: [receipts.openclaw, receipts.workshop],
    verdict: "Claim, the tagged 2026.10.5 Workshop guide confirms immediate skill edits, saved prior versions and Undo, with auto as the background-learning default and ten retained versions per skill. That is recovery after an edit, not approval before it. We did not exercise the sidebar or public-link access. The PR and contributor totals are unverified vendor counts with no published counting method; the release page lists 638 contributors rather than the post's 637.",
  },
  {
    post: "2113705996984144302", id: "stephen-hermes-handoff-babysitting", kind: "voice", sources: ["hermes-agent"],
    title: "Useful work is the handoff test", from: "the real test", to: "babysitting it.",
    summary: "Stephen Schoettler says broken Kanban handbacks put Schoettler back in charge of coordinating the Hermes agents.",
    verdict: "Voice, an account of custom handoff failures and a partial repair in Schoettler's setup. No version, board integration or execution trace establishes an upstream Hermes regression. The proposed acceptance test is sharper than a count of autonomous agents: does useful work finish without the operator stepping in? The repair claim remains personal, and the simpler-design counter-read is not proof it was fixed.",
  },
  {
    post: "2112986989897351189", id: "teknium-one-agent-counter-read", kind: "voice", sources: ["hermes-agent"],
    title: "Maybe one agent is enough", from: "Ya'll", to: "madness lol",
    summary: "Teknium jokes that using one Hermes agent would avoid the surrounding coordination machinery.",
    verdict: "Voice, the simplicity counter-read to fleets and broken handoffs. The joke does not establish that one Hermes agent can do every job, remove the need for supervision or repair Schoettler's Kanban setup. We did not compare architectures. It keeps open a useful question: which coordination work disappears if there is only one worker?",
  },
  {
    post: "2113121238461657192", id: "jay-paperclip-subtask-overload", kind: "voice", sources: ["paperclip"],
    title: "The board can become another job", from: "eventually the agents", to: "should.",
    summary: "Jay asks how agent-created subtasks are constrained after finding an earlier Paperclip workflow too complex.",
    verdict: "Voice, a question grounded in the author's prior use, not a reproduced failure of today's Paperclip release. The post supplies neither the installed version nor the task tree, so it cannot establish how often expansion becomes unmanageable. The relevant cost is concrete: agents can create more coordination than the person wanted. Dotta's response must be read as a claimed remedy, not omitted.",
  },
  {
    post: "2113289308954329150", id: "dotta-subtask-remedy-unconfirmed", kind: "claim", sources: ["paperclip"],
    title: "Shorter guidance has not yet proved fewer tasks", from: "fwiw", to: "behavior",
    summary: "Dotta says recent Paperclip versions have curbed excessive subtask creation.",
    checks: [receipts.planning],
    verdict: "Claim, unconfirmed as a behavioral improvement. Stable 2026.1023.0's planning record describes shorter guidance but explicitly records no completed live comparison; its successful fixture and type checks are not evidence that agents create fewer subtasks. We did not reproduce Jay's workload or establish which version this reply means. The response is useful counterweight, with the claimed reduction still open.",
  },
  {
    post: "2112198926161883515", id: "andrzej-eve-retired-infrastructure", kind: "voice", sources: ["eve"],
    title: "There is useful infrastructure to stop owning", from: "and a huge amount", to: "evaporated.",
    summary: "Andrzej Dabrowski says Eve removed recurring infrastructure work while leaving the team control of agent behavior.",
    verdict: "Voice, a builder's account of code the author's team says it stopped maintaining after adopting Eve. The estimated 60-70% infrastructure share and the claim that everything works have no published measurement method here; we inspected neither the client systems nor the deleted code. This is specific counterweight to blanket framework skepticism, not a proven time saving or a guarantee that every listed primitive fits another team's needs.",
  },
  {
    post: "2112299029463765148", id: "dmitry-cart-effect-recovery-test", kind: "voice", sources: ["eve"],
    title: "Recovery must remember the cart changed", from: "If an 'add to cart'", to: "twice.",
    summary: "Dmitry Dirin asks what happens when a cart update succeeds immediately before the worker crashes.",
    verdict: "Voice, a precise acceptance question for the infrastructure testimonial: after an external cart mutation, can recovery avoid doing it again? The post neither reports a duplicate in Eve nor proves its retry behavior. We have no crash trace or reconciled cart record. Durable execution and exactly-once business effects remain different promises, even when the framework removes substantial plumbing.",
  },
  {
    post: "2111559986249859559", id: "swyx-colocation-counter-read", kind: "voice", sources: [],
    title: "Portability can leave performance on the table", from: "you also want", to: "achieve.",
    summary: "Swyx argues that harness-model co-design and cache economics can make neutrality costly for some workloads.",
    verdict: "Voice, a direct challenge to assuming a harness-neutral layer always wins. The cache and dreaming advantages are Swyx's argument; the post provides no matched deployment, measured savings or support for the exclusivity of only. The two-trillion-token dividing line is not a tested threshold. We attach no Temporal project identity to this general argument and keep its strategic objection open.",
  },
];

const dropped = [
  { post: "2110633420023795889", reason: "A Chinese-language post; this English issue cannot quote it without translation, and translation would retype the capture. The native-versus-mirror point is carried by the primary Origin receipts instead." },
  { post: "2110636794811130000", reason: "The Chinese end-to-end framing is useful but duplicates the native-versus-mirror point carried by the primary Origin receipts and the independent-forge counter-read; no measured completion or intervention results are supplied." },
  { post: "2111020861666832651", reason: "The personal migration recipe overlaps the native-repository and partner-integration cards. No run trace verifies the PR, rules, Buildkite connection or time saved." },
  { post: "2111193957527146711", reason: "Cloud-agent canvases are a separate Cursor surface from Origin and add a second product announcement without resolving the chosen repository-authority question." },
  { post: "2111106706956783698", reason: "The private fleet's adapter replacement is uninspected and does not date the native primitive to this window. Keep the specific adapter-deletion signal in the primary record instead." },
  { post: "2113722776469299569", reason: "Twenty-three optional components bundle too many capabilities for one useful adjudication; the author explicitly calls them tinkering material and one mode untested. Core Pi recovery and the host boundary are covered more narrowly." },
  { post: "2111501246171410731", reason: "The token-efficiency reply has no matched tasks, model, tool definitions or measurements. Drop it together with the initiating skeptical post rather than imply a result from either." },
  { post: "2113786047108681730", reason: "The Japanese capture stops in the middle of the MCP launch-command consequence. Preserve the captured fragment in capture.json; do not complete or guess the missing warning." },
  { post: "2113597146758856716", reason: "This identity correction concerns a Gemini API wrapper given to another agent, not a new Gemini CLI or Antigravity coding-agent release. It is outside the selected card argument." },
  { post: "2113274143806206109", reason: "The source contract does not establish this personal X account's project role, and the reply's unspecified client comparison is not independently identified. Do not infer identity from a matching GitHub handle." },
  { post: "2111499591778734394", reason: "Code-mode efficiency skepticism is paired with an affirmative reply, but neither has a matched experiment. Omit both rather than present an adjudicated efficiency comparison." },
  { post: "2111065631046955359", reason: "An explicitly experimental self-building toy is not evidence of production restart reliability. Cloudflare supplies a narrower primary-backed positive counterweight to the restart complaint." },
  { post: "2113756870313951480", reason: "The categorical enterprise isolation promise lacks a pinned deployed boundary or enforcement test in the opened record. The open-source release cannot prove what a separate hosted control plane prevents." },
  { post: "2113270794348576972", reason: "The Windows/macOS runner constraint concerns GitHub Agentic Workflows versus regular Actions hosting the CLI, a separate platform comparison from the selected Copilot permission changes." },
  { post: "2113643262900662423", reason: "A livestream invitation establishes neither a completed demonstration nor shipped factory behavior. Use the independently checked OpenHands delivery in the primary record." },
  { post: "2113795155056865749", reason: "The Japanese post mixes a welcome model variant with freezes, a timeout request and broad permission concerns, without an exact version or trace. It cannot diagnose current OpenCode authority." },
  { post: "2113658709981163933", reason: "The 87-100% cross-harness figure collapses distinct tests and an older Pi 0.79.0 live test. No matched ranking of current versions follows; omit rather than strain a compact verdict." },
];

function occurrences(text, anchor) {
  assert.ok(anchor.length, "empty quote anchor");
  let count = 0;
  for (let at = text.indexOf(anchor); at !== -1; at = text.indexOf(anchor, at + 1)) count++;
  return count;
}

// Same unique-anchor and single-line contract as ops/social/slice-quote.mjs.
// Slices are taken from decoded capture text, never from hand-typed excerpts.
function sliceQuote(verbatim, from, to, id) {
  assert.equal(occurrences(verbatim, from), 1, id + ": ambiguous or missing start anchor");
  assert.equal(occurrences(verbatim, to), 1, id + ": ambiguous or missing end anchor");
  const start = verbatim.indexOf(from);
  const end = verbatim.indexOf(to);
  assert.ok(end >= start, id + ": end precedes start");
  const inline = verbatim.slice(start, end + to.length);
  assert.ok(inline.length && !/[\r\n]/.test(inline), id + ": multiline or empty slice");
  assert.ok(verbatim.includes(inline), id + ": slice is not contiguous");
  return inline;
}

const accounted = new Set();
const cards = selections.map((selection) => {
  const post = byPost.get(selection.post);
  assert.ok(post && !post.unavailable, selection.id + ": no available capture");
  assert.ok(!accounted.has(selection.post), "duplicate selection: " + selection.post);
  accounted.add(selection.post);
  assert.ok(selection.verdict.startsWith(selection.kind === "claim" ? "Claim" : "Voice"));
  if (selection.kind === "claim") assert.ok(selection.checks?.length, selection.id + ": no primary adjudication");
  for (const receipt of selection.checks ?? []) {
    assert.match(receipt, /^https:\/\/(?:github\.com\/[^/]+\/[^/]+\/(?:blob|releases\/tag)\/|web\.archive\.org\/web\/\d{14}(?:id_)?\/)/,
      selection.id + ": primary receipt must be pinned");
    assert.ok(!/\/(?:main|HEAD)(?:\/|$)/.test(receipt), selection.id + ": moving receipt");
  }
  for (const field of ["title", "summary", "verdict"]) {
    assert.ok(!/[\u2010-\u201f]/.test(selection[field]), selection.id + ": non-ASCII editorial punctuation");
    assert.ok(!/ -- /.test(selection[field]), selection.id + ": double-hyphen dash");
  }
  return {
    id: selection.id,
    title: selection.title,
    kind: selection.kind,
    date: post.date,
    date_precision: "day",
    captured_on: "2026-10-24",
    source_ids: selection.sources,
    authors: [post.handle.replace(/^@/, "")],
    display_name: post.display_name,
    source_urls: [post.url, ...(selection.checks ?? [])],
    verbatim: post.text,
    inline: sliceQuote(post.text, selection.from, selection.to, selection.id),
    summary: selection.summary,
    verdict: selection.verdict,
  };
});
assert.ok(cards.length >= 18 && cards.length <= 28);
assert.equal(new Set(cards.map((card) => card.id)).size, cards.length);
for (const entry of dropped) {
  assert.ok(byPost.has(entry.post), "uncaptured exclusion: " + entry.post);
  assert.ok(!accounted.has(entry.post), "duplicate accounting: " + entry.post);
  accounted.add(entry.post);
}
assert.equal(accounted.size, captures.length, "every available capture needs an editorial decision");

// JSON strings and arrays are valid YAML scalars. Unicode escapes keep files
// ASCII while preserving exact decoded names, non-English text and punctuation.
const scalar = (value) => JSON.stringify(value).replace(/[\u007f-\uffff]/g,
  (character) => "\\u" + character.charCodeAt(0).toString(16).padStart(4, "0"));
const note = "Page window 2026-10-13 through 2026-10-24 inclusive, UTC; reporting covers the 11 days strictly after 2026-10-13T23:59:59Z through the 2026-10-24 read, not the end of October 24. captured_on 2026-10-24. " +
  captures.length + " available posts were parsed without editing from capture-a.raw.md and capture-b.raw.md; UNAVAILABLE blocks are dropped by the parser (none in this capture). " +
  cards.length + " cards retained; " + dropped.length + " available posts excluded with reasons below. Verbatim and display names come only from capture.json; inline excerpts are unique-anchor, contiguous, single-line slices. Unicode escapes preserve all captured characters, including punctuation and non-English text, without translating or expanding t.co links. source_urls lists the captured post first and opened, pinned primary receipts afterward. Documentary checks are not reproduced behavior. A hosted beta, a tagged CLI and an experimental package remain different channels. Archived current posture does not establish its launch date. The earlier Netlify beta article is context, not an in-window launch. No post settles the prior issue's plugin-pin, Grok background-Git or measured Rollouts-savings uncertainties. Drops are editorial scope and evidence decisions, not judgments of authors.";
const output = { schema_version: "bitter.frontier_social_cards.v0", run_id: runId, note, cards };
const lines = [
  "schema_version: " + output.schema_version,
  "run_id: " + runId,
  "note: " + scalar(note),
  "",
  "# Excluded available captures (reasons, not judgments of their authors):",
  ...dropped.map((entry) => "# " + byPost.get(entry.post).url + ": " + entry.reason),
  "cards:",
];
for (const card of cards) {
  for (const [index, [key, value]] of Object.entries(card).entries()) {
    lines.push((index === 0 ? "  - " : "    ") + key + ": " + scalar(value));
  }
  lines.push("");
}
const yaml = lines.join("\n") + "\n";
assert.ok(!/[^\x00-\x7f]/.test(yaml), "non-ASCII serialized output");
assert.deepEqual(YAML.parse(yaml), output, "YAML must round-trip every captured character");
fs.writeFileSync(new URL("x-cards.yml", import.meta.url), yaml);
console.log("Wrote " + cards.length + " cards; " + dropped.length + " exclusions; capture fidelity and inline slices checked.");
for (const entry of dropped) console.log("Dropped " + byPost.get(entry.post).handle + " " + entry.post + ": " + entry.reason);
