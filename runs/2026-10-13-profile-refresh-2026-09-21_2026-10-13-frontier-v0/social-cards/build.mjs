import assert from "node:assert/strict";
import fs from "node:fs";
import { createRequire } from "node:module";

const require = createRequire(new URL("../../../site/package.json", import.meta.url));
const YAML = require("yaml");
const runId = "2026-10-13-profile-refresh-2026-09-21_2026-10-13-frontier-v0";
const captures = JSON.parse(fs.readFileSync(new URL("../social/capture.json", import.meta.url), "utf8"));
const byPost = new Map(captures.map((post) => [post.url.split("/").at(-1), post]));
assert.equal(byPost.size, captures.length, "duplicate post in capture.json");

// Editorial metadata and anchors only. Post wording and author names always
// come from capture.json. Primary receipts were opened before these verdicts
// were written; source_urls keeps the captured post first, then those receipts.
const receipts = {
  mods: "https://github.com/anthropics/claude-code/releases/tag/v2.1.287",
  claudeClose: "https://github.com/anthropics/claude-code/blob/2301018b1f61/CHANGELOG.md",
  modApi: "https://github.com/anthropics/claude-code/blob/2301018b1f61/mods/types/claude-code.d.ts#L2734-L2994",
  hookReference: "https://web.archive.org/web/20261014213355/https://code.claude.com/docs/en/hooks",
  guardian: "https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/ext/guardian-reviewer/src/routing.rs#L54-L102",
  daemonLaunch: "https://github.com/openai/codex/releases/tag/rust-v0.157.0",
  daemon: "https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/app-server-daemon/README.md#L22-L74",
  hermes: "https://github.com/NousResearch/hermes-agent/blob/v0.21.7/website/docs/getting-started/updating.md#L33-L51",
  hermesRelease: "https://github.com/NousResearch/hermes-agent/releases/tag/v0.21.7",
  piMcp: "https://github.com/earendil-works/pi/releases/tag/v0.99.0",
  piTrust: "https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/docs/mcp.md#L22-L34",
  piCodemode: "https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/extensions/codemode/index.ts#L1-L45",
  eveTools: "https://github.com/vercel/eve/blob/eve%400.66.0/docs/concepts/built-in-tools.md#L14-L22",
  eveFilter: "https://github.com/vercel/eve/blob/eve%400.66.0/packages/eve/src/compiler/default-tool-policy.ts#L71-L92",
  rollouts: "https://web.archive.org/web/20261002225942/https://cursor.com/changelog/rollouts-and-security-reviewer",
  origin: "https://web.archive.org/web/20261013185441/https://cursor.com/changelog/origin-app-marketplace",
  openhands: "https://github.com/OpenHands/OpenHands/releases/tag/v1.22.0",
  openhandsReview: "https://github.com/OpenHands/OpenHands/releases/tag/v1.24.0",
  copilot: "https://github.com/github/docs/blob/602021b0ba16/content/copilot/how-tos/cloud-and-local-sandboxes/using-local-sandboxing.md#L25-L71",
  copilotNetwork: "https://github.com/github/docs/blob/602021b0ba16/content/copilot/how-tos/cloud-and-local-sandboxes/configuring-local-sandbox-settings.md#L243-L291",
};

const selections = [
  {
    post: "2102813194196758746", id: "trq212-plan-mode-proposal", kind: "claim", sources: ["claude-code"],
    title: "Does the model still need plan mode?", from: "I don", to: "feedback on why",
    summary: "Thariq proposes removing plan mode and asks users what it still does for them.",
    checks: [receipts.mods, receipts.claudeClose],
    verdict: "Claim about a proposal, not a shipped removal. Claude Code 2.1.287 delivered mods; the pinned 2.1.296 changelog still records plan-mode repairs. Neither establishes that models no longer need a planning mode. The human-checkpoint reply and Thariq's follow-up belong beside the proposal.",
  },
  {
    post: "2102821139332333895", id: "exyota-plan-mode-for-me", kind: "voice", sources: ["claude-code"],
    title: "The checkpoint is for me", from: "plan mode isn't", to: "for me lol",
    summary: "A user answers the removal proposal by locating plan mode's value in their own judgment.",
    verdict: "Voice, a direct counter-read to judging plan mode only by the model's needs. Rishi wants a place to think before execution. The reply establishes that preference, not a measured safety or productivity advantage for plan mode.",
  },
  {
    post: "2103212051065921632", id: "trq212-plan-mode-follow-up", kind: "claim", sources: ["claude-code"],
    title: "Keep the mode, change its home", from: "others prefer the UX", to: "brainstorming with you",
    summary: "Thariq follows up with a plan to preserve planning as a built-in mod and let mods add modes.",
    checks: [receipts.mods, receipts.claudeClose],
    verdict: "Claim about intended implementation after feedback. The 2.1.287 release confirms the mod system shipped, and the later pinned changelog still has plan mode. We did not establish delivery of this specific built-in plan mod or the proposed Shift+Tab override. The follow-up retracts the simple removal framing without proving a conversion shipped.",
  },
  {
    post: "2105721434807083061", id: "claudedevs-mods-launch", kind: "claim", sources: ["claude-code"],
    title: "The harness becomes programmable", from: "Mods ship inside plugins", to: "CLI or desktop app.",
    summary: "ClaudeDevs announces mods that change behavior and interface through plugins.",
    checks: [receipts.mods, receipts.modApi],
    verdict: "Claim, corroborated by the October 1 release of Claude Code 2.1.287 and the pinned mod API, which exposes tool checks, filesystem access and process execution. This is delivered extensibility in the terminal release, not proof that the launch reached every Desktop installation or that a generated mod behaves correctly.",
  },
  {
    post: "2105721440490361312", id: "claudedevs-mods-machine-access", kind: "claim", sources: ["claude-code"],
    title: "Installation grants machine access", from: "Mods run with", to: "sources you trust.",
    summary: "The launch thread warns that a mod receives Claude Code's access to the machine.",
    checks: [receipts.mods, receipts.modApi],
    verdict: "Claim, supported by the released mod system and its public filesystem and process APIs. The warning concerns executable plugin code, not just extra prompt text. We did not test a third-party mod or certify a directory submission; trust in its publisher remains a separate installation decision.",
  },
  {
    post: "2109716193468874978", id: "lydiahallie-hooks-allow-is-approval", kind: "claim", sources: ["claude-code"],
    title: "Allow is already an answer", from: "Root cause was PreToolUse", to: "normally run.",
    summary: "Lydia Hallie attributes a privately diagnosed auto-mode surprise to a hook that returned allow.",
    checks: [receipts.hookReference, receipts.claudeClose],
    verdict: "Claim about a private diagnosis. The October 14 archived hook reference confirms that allow skips permission prompting, while ask forces a prompt even in auto mode; the pinned 2.1.296 changelog records separate hook repairs. We did not inspect the DM session or prove that silent output reaches the classifier on every path. The diagnosis and proposed future change remain Hallie's account.",
  },
  {
    post: "2107368734981517634", id: "thsottiaux-free-auto-review", kind: "claim", sources: ["codex"],
    title: "A reviewer for permission requests", from: "Auto-review improves", to: "specific rules.",
    summary: "Tibo announces free Auto-review for ChatGPT sign-ins as an answer to approval fatigue.",
    checks: [receipts.guardian],
    verdict: "Claim, partly corroborated. Codex 0.162.1 routes eligible permission requests to AutoReview, but its Full Access path approves without that model review. That does not support review of every action or a safety guarantee. The free-for-ChatGPT and no-plan-usage statements remain the vendor's billing claims; we did not verify account eligibility or bills.",
  },
  {
    post: "2109252687477031014", id: "lucas-builds-review-slot-machine", kind: "voice", sources: ["claude-code"],
    title: "Review without an end", from: "It never runs out", to: "actually done?",
    summary: "Lucas describes repeated review producing more alleged bugs without a completion rule.",
    verdict: "Voice, frustration with repeated Claude review. We have no repository, review transcripts or confirmed bug set for those ten passes, so this is not evidence of a defect rate. It poses the completion question that John Rood's reply answers.",
  },
  {
    post: "2109369506107937114", id: "john-rood-review-stop-rule", kind: "voice", sources: ["claude-code"],
    title: "Give review a stop rule", from: "Done has to come", to: "running out of ideas.",
    summary: "John Rood proposes tests or a specification as the stopping condition for review.",
    verdict: "Voice, a proposed acceptance rule for Lucas's endless-review problem. A failing test or unmet requirement gives this team something concrete to resolve; no reviewed task here demonstrates that the rule catches every consequential bug. It is advice about declaring done, not a claim that automated review can replace judgment.",
  },
  {
    post: "2109761263240696115", id: "hackerlogs-codex-runtime-inventory", kind: "claim", sources: ["codex"],
    title: "The installed version is not the whole inventory", from: "Your inventory says one version", to: "may be another.",
    summary: "A daemon recap asks operators to inventory the running Codex backend as well as the CLI package.",
    checks: [receipts.daemonLaunch, receipts.daemon],
    verdict: "Claim, corroborated at narrower scope. Release 0.157.0 enables automatic daemon startup; the 0.162.1 README confirms retained startup environment and independent updates for eligible managed daemons. We did not reproduce the reporter's proxy incident, package size or updater-survives-stop claim, and do not endorse the blanket CI cleanup recipe. Inventory both versions before deciding which runtime to keep.",
  },
  {
    post: "2110155915513221301", id: "tonbi-hermes-update-channels", kind: "claim", sources: ["hermes-agent"],
    title: "Choose releases or main", from: "Stable: The default", to: "stable releases",
    summary: "Tonbi describes Hermes Agent's stable and main update choices.",
    checks: [receipts.hermesRelease, receipts.hermes],
    verdict: "Claim, confirmed for official managed source checkouts by Hermes v0.21.7: the default follows published stable releases and main is selectable. Forks retain main tracking; Store, MSIX and bundled Desktop installs use other channels. An unconfigured checkout already ahead of stable waits for a newer release, so this is not an automatic downgrade or a universal Hermes updater rule.",
  },
  {
    post: "2104992471155696120", id: "pidotdev-native-mcp", kind: "claim", sources: ["pi-coding-agent"],
    title: "MCP moves into Pi", from: "A pretty big change", to: "MCP at the core.",
    summary: "Pi's account announces native MCP after a change in design direction.",
    checks: [receipts.piMcp, receipts.piTrust],
    verdict: "Claim, confirmed in Pi 0.99.0: MCP and codemode ship as built-in extensions, with stdio and streamable HTTP support. The 1.2.0 docs keep project MCP configuration behind project trust. Native support can replace an adapter; it does not make an arbitrary server safe or establish the author's explanation for the reversal.",
  },
  {
    post: "2105251106444226901", id: "shantanugoel-batching-dissent", kind: "voice", sources: ["pi-coding-agent"],
    title: "Batching can make work", from: "Models keep fighting", to: "wrong etc).",
    summary: "Shantanu Goel reports scripting and rebatching costs in other codemode implementations.",
    checks: [receipts.piCodemode],
    verdict: "Voice, a counter-read to native scripting as an automatic efficiency gain. The post names dsh and prime, not a tested Pi run. Pi 1.2.0 registers codemode inactive, though MCP exposure can activate it; that code does not measure the reported rebatching cost or establish that every Pi configuration leaves it off.",
  },
  {
    post: "2107256352984940775", id: "japanaibuilders-resume-side-effects", kind: "voice", sources: ["pi-coding-agent"],
    title: "A resumed send is still a send", from: "Checkpointing is", to: "worse than a crash.",
    summary: "Shiro asks whether resuming a run can repeat an external send.",
    verdict: "Voice, a recovery acceptance question, not a report that Pi duplicates sends. Neither the five model audits nor an execution trace is supplied. Keeping a durable log and proving that a resumed browser job cannot repeat a side effect are different tests; this post asks for the latter without establishing its result.",
  },
  {
    post: "2110080102797308207", id: "badlogicgames-minimal-loop-challenge", kind: "voice", sources: ["pi-coding-agent"],
    title: "How much loop do you need?", from: "what does it tell you", to: "pareto frontier?",
    summary: "Mario Zechner challenges the assumption that more tools and subagents necessarily improve results.",
    checks: [receipts.piMcp],
    verdict: "Voice, a challenge worth keeping beside the orchestration launches. The Pareto-frontier assertion is unverified here, with no published method or tested-version mapping in the capture. Pi's 0.99.0 release also adds native MCP and codemode, so the four-tool framing is not an inventory of every capability available in current Pi.",
  },
  {
    post: "2106492644671234434", id: "jasonsteving-durability-first", kind: "voice", sources: ["temporal-agent-harness", "pi-coding-agent", "deepseek-harness"],
    title: "Durability before the shortlist", from: "And durability shouldn't", to: "bolted on later.",
    summary: "Jason Steving argues that durability belongs in the initial design of an agent system.",
    verdict: "Voice, the affirmative case for specialized runtime engineering alongside the minimal-loop argument. The hope that Temporal Agent Harness will join a shortlist is not a delivered integration, a replay test or evidence that it outperforms Pi. The design priority is Steving's; the comparison remains unsettled.",
  },
  {
    post: "2104944521834357086", id: "andrew-barba-eve-loop-control", kind: "claim", sources: ["eve"],
    title: "Replace the default loop's tools", from: "eve is one", to: "agent loop that you want.",
    summary: "Andrew Barba points builders to Eve's defaultTools setting and public agent primitives.",
    checks: [receipts.eveTools, receipts.eveFilter],
    verdict: "Claim, confirmed in part by Eve 0.66.0: defaultTools: false removes optional framework tools and preserves authored replacements. The same code retains required connection discovery, so the flag is not a promise to remove every framework tool. We did not establish that every listed primitive is freely replaceable or that competing frameworks lack comparable control.",
  },
  {
    post: "2106902660578472208", id: "kushbhuwalka-retired-plumbing", kind: "voice", sources: ["eve"],
    title: "Stop owning the Slack plumbing", from: "the scaffolding let us", to: "a slack integration.",
    summary: "A builder says adopting Eve let the team concentrate on agent behavior instead of integrations.",
    verdict: "Voice, one builder's account of retiring custom harness plumbing for Eve. We did not inspect fluffles, the migration or the promised launch, and no measured net time saving follows. The useful counterweight to framework skepticism is the specific work the post says the team stopped owning: Slack integration details.",
  },
  {
    post: "2106066782155157603", id: "cursor-rollouts-fix-handoff", kind: "claim", sources: ["cursor"],
    title: "From deploy telemetry to a repair task", from: "One click starts", to: "to fix it.",
    summary: "Cursor describes handing a deployment regression to a cloud agent for repair.",
    checks: [receipts.rollouts],
    verdict: "Claim, supported as a hosted-product description by Cursor's September 23 announcement, preserved October 2: Rollouts can identify a suspected change and hand a finding to a cloud agent. The same receipt leaves merge and rollback with people. We did not test detection or an accepted fix; the post's October 3 credit deadline is historical, not an offer for this issue's reader.",
  },
  {
    post: "2106567332223205658", id: "akashc777-repair-evidence-chain", kind: "voice", sources: ["cursor"],
    title: "Keep the failing input attached", from: "Keep the failing input", to: "automate guesswork.",
    summary: "Akash Hadagali asks for the failing case, offending commit and regression test to travel with an agent repair.",
    verdict: "Voice, an acceptance standard for the Rollouts handoff, not an allegation that Rollouts omits these records. We have no completed repair trace showing this evidence chain. The distinction matters: opening the next task is observable progress, while accepting the repaired behavior still needs a retained test case.",
  },
  {
    post: "2110075611633074295", id: "cursor-origin-marketplace", kind: "claim", sources: ["cursor"],
    title: "The provider reaches into delivery", from: "Connect your repos", to: "project management.",
    summary: "Cursor announces Origin integrations across delivery, security, review and project management.",
    checks: [receipts.origin],
    verdict: "Claim, confirmed as vendor-described availability by the October 13 archived Origin announcement, which names partner apps and opens public submissions. It documents installation tokens, webhooks and write-back operations. The over-20 count remains the vendor's catalog count; we did not test the integrations or measure their quality. This challenges the idea that providers will stop at the coding loop.",
  },
  {
    post: "2105833104648667520", id: "gneubig-automated-triage-and-review", kind: "claim", sources: ["openhands"],
    title: "The receiving side gets automated too", from: "make sure that all the issues", to: "high-quality contributions.",
    summary: "Graham Neubig describes automated issue triage and review as OpenHands' response to generated pull requests.",
    checks: [receipts.openhands, receipts.openhandsReview],
    verdict: "Claim about the team's practice. OpenHands v1.22.0 confirms the automation service and Git Sync path; v1.24.0 delivers read-only access to automation conversations. Those releases establish supporting machinery, not the stated guarantee that each issue gets a PR or that automated review admits only high-quality changes. We did not audit the team's runs, acceptance rate or human review effort.",
  },
  {
    post: "2108910010851856461", id: "iamandresvilla-sandbox-is-not-offline", kind: "claim", sources: ["github-copilot-cli"],
    title: "Aislamiento con salida a internet", from: "Ojo:", to: "al agente.",
    summary: "A Spanish-language reminder that enabling Copilot CLI's sandbox does not disconnect its network. This summary is our paraphrase.",
    checks: [receipts.copilot, receipts.copilotNetwork],
    verdict: "Claim, in Spanish; the English summary is our paraphrase. GitHub's pinned CLI docs confirm /sandbox enable, per-session status and outbound internet enabled by default. Local-network access and destination rules are separate settings, with OS-specific enforcement. We checked the documented contract, not live Windows, macOS or Linux isolation; enabling the sandbox alone does not establish an offline run.",
  },
  {
    post: "2109566198291771531", id: "kylian-cros-outside-recovery-owner", kind: "voice", sources: ["openclaw"],
    title: "Who restarts the agent?", from: "if nothing outside", to: "read the error",
    summary: "A host of OpenClaw agents says memory, disk and expired logins can stop the agent that would diagnose them.",
    verdict: "Voice, an attributed hosting experience that cuts against a self-maintaining agent closing its own loop. We did not inspect that fleet or verify which failures dominate it. The retained question is concrete even without that frequency claim: name the outside process or person that can recover the box when the agent itself is down.",
  },
];

// Every available capture is accounted for. These exclusions concern this card
// set, not a finding that the post or its author is wrong.
const dropped = [
  { post: "2108199825179349015", reason: "Permission-review distinction is already carried by Tibo's announcement and the pinned routing code; omit the personal jab." },
  { post: "2107202044960587980", reason: "Useful Chinese comparison recipe, but the daemon inventory card carries the runtime decision with fewer configuration claims to qualify." },
  { post: "2106970980606488807", reason: "Catalog review limits need a pinned catalog policy and an installed-plugin check; no catalog safety conclusion is needed for this issue." },
  { post: "2107207172128182541", reason: "CLI versus Durable package correction is useful background; omit the personal exchange and retain the side-effect question and durability-first counter-read." },
  { post: "2107058099345375323", reason: "The portability concern is useful, but the post mixes an unverified library constraint with speculation about developers' motives. Do not strain a voice verdict around those claims." },
  { post: "2109321803386540241", reason: "Multiplayer steering defaults require a separate sender-policy check and do not establish either Eve consent repair." },
  { post: "2110130052683694117", reason: "Keep the audit requirement in research; the repair-evidence card already carries an acceptance standard, and this post does not diagnose Eve's viewer." },
  { post: "2102786814633464159", reason: "The vendor's 7 percent/no-quality-loss metric remains unverified with no published reproducible method. Its months-long implementation history is not a dated client change." },
  { post: "2108541775623196759", reason: "Cloud-tooling portability is relevant, but the installer has mixed preview/main delivery and the output metrics are unverified vendor claims with no published method. Omit the promotional card." },
  { post: "2107872222463353178", reason: "Broad Canvas recap repeats the narrower triage card and would require separate runtime and credential qualifications." },
  { post: "2107765415766102203", reason: "Japanese release recap adds another provider summary and several bundled claims; the proposal, human checkpoint and follow-up already carry the planning argument." },
  { post: "2108408104295768372", reason: "Multiplayer role scope is separate from OpenClaw's approval-argument repair; the post lacks a pinned delivered role contract for this verdict." },
];

function occurrences(text, anchor) {
  assert.ok(anchor.length, "empty quote anchor");
  let count = 0;
  for (let at = text.indexOf(anchor); at !== -1; at = text.indexOf(anchor, at + 1)) count++;
  return count;
}

// Same anchor and single-line contract as ops/social/slice-quote.mjs, applied
// directly to decoded capture text so no YAML whitespace can alter the source.
function sliceQuote(verbatim, from, to, id) {
  assert.equal(occurrences(verbatim, from), 1, `${id}: ambiguous or missing start anchor`);
  assert.equal(occurrences(verbatim, to), 1, `${id}: ambiguous or missing end anchor`);
  const start = verbatim.indexOf(from);
  const end = verbatim.indexOf(to);
  assert.ok(end >= start, `${id}: end precedes start`);
  const inline = verbatim.slice(start, end + to.length);
  assert.ok(inline.length && !/[\r\n]/.test(inline), `${id}: multiline or empty slice`);
  assert.ok(verbatim.includes(inline), `${id}: slice is not contiguous`);
  return inline;
}

const accounted = new Set();
const cards = selections.map((selection) => {
  const post = byPost.get(selection.post);
  assert.ok(post && !post.unavailable, `${selection.id}: no available capture`);
  assert.ok(!accounted.has(selection.post), `duplicate selection: ${selection.post}`);
  accounted.add(selection.post);
  assert.ok(selection.verdict.startsWith(selection.kind === "claim" ? "Claim" : "Voice"));
  if (selection.kind === "claim") assert.ok(selection.checks?.length, `${selection.id}: no primary adjudication`);
  for (const receipt of selection.checks ?? []) {
    assert.match(receipt, /^https:\/\/(?:github\.com\/[^/]+\/[^/]+\/(?:blob|releases\/tag)\/|web\.archive\.org\/web\/\d{14}\/)/,
      `${selection.id}: primary receipt must be pinned`);
    assert.ok(!/\/(?:main|HEAD)(?:\/|$)/.test(receipt), `${selection.id}: moving receipt`);
  }
  return {
    id: selection.id,
    title: selection.title,
    kind: selection.kind,
    date: post.date,
    date_precision: "day",
    captured_on: "2026-10-14",
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
assert.ok(cards.length >= 12 && cards.length <= 24);
assert.equal(new Set(cards.map((card) => card.id)).size, cards.length);
for (const entry of dropped) {
  assert.ok(byPost.has(entry.post), `uncaptured exclusion: ${entry.post}`);
  assert.ok(!accounted.has(entry.post), `duplicate accounting: ${entry.post}`);
  accounted.add(entry.post);
}
assert.equal(accounted.size, captures.length, "every available capture needs an editorial decision");

// JSON double-quoted strings are YAML strings too. Escaping Unicode preserves
// exact captured punctuation and non-English wording without editorial repair.
const scalar = (value) => JSON.stringify(value).replace(/[\u007f-\uffff]/g,
  (character) => `\\u${character.charCodeAt(0).toString(16).padStart(4, "0")}`);
const output = {
  schema_version: "bitter.frontier_social_cards.v0",
  run_id: runId,
  note: `Window 2026-09-21 through 2026-10-13 inclusive, UTC; captured_on 2026-10-14. ${captures.length} available posts were parsed from the two independent capture files; UNAVAILABLE blocks are excluded by the parser. Verbatim and display names are copied without edits. Inline excerpts are sliced by unique anchors and contain no newline. Unicode escapes preserve exact decoded text, including non-English posts. source_urls lists the captured post first and any primary receipts opened for its adjudication afterward. Claims are documentary checks, not reproduced behavior; the October 14 hook reference establishes documented posture, not an in-window release date. ${cards.length} cards selected, ${dropped.length} available posts excluded.`,
  cards,
};
const lines = [
  `schema_version: ${output.schema_version}`,
  `run_id: ${runId}`,
  `note: ${scalar(output.note)}`,
  "",
  "# Excluded available captures (reasons, not judgments of their authors):",
  ...dropped.map((entry) => `# ${byPost.get(entry.post).url}: ${entry.reason}`),
  "cards:",
];
for (const card of cards) {
  for (const [index, [key, value]] of Object.entries(card).entries()) {
    lines.push(`${index === 0 ? "  - " : "    "}${key}: ${scalar(value)}`);
  }
  lines.push("");
}
const yaml = `${lines.join("\n")}\n`;
assert.ok(!/[^\x00-\x7f]/.test(yaml), "non-ASCII serialized output");
assert.deepEqual(YAML.parse(yaml), output, "YAML must round-trip every captured character");
fs.writeFileSync(new URL("x-cards.yml", import.meta.url), yaml);
console.log(`Wrote ${cards.length} cards; ${dropped.length} exclusions; all verbatim, names and inline slices checked.`);
for (const entry of dropped) console.log(`Dropped ${byPost.get(entry.post).handle} ${entry.post}: ${entry.reason}`);
