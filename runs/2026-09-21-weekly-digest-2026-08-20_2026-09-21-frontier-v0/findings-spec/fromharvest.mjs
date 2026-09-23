// Derive finding stubs from harvest/<id>.primary.md numbered sections.
// Usage: node fromharvest.mjs <source-id> [skipN,...]
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
const HERE = path.dirname(fileURLToPath(import.meta.url));
const RUN = path.resolve(HERE, "..");
const [src, skipArg = ""] = process.argv.slice(2);
const skip = new Set(skipArg.split(",").filter(Boolean).map(Number));
const text = fs.readFileSync(path.join(RUN, "harvest", `${src}.primary.md`), "utf8");
const parts = text.split(/^## (?=\d+\. )/m).slice(1);
const prec = (u) => /\/releases\/tag\//.test(u) ? "github_release"
  : /\/pull\/\d+/.test(u) ? "merged_pr"
  : /\/commit\//.test(u) ? "commit"
  : /\/compare\//.test(u) ? "git_compare"
  : /\/blob\//.test(u) ? "tagged_commit_file"
  : /npmjs\.com|pypi\.org/.test(u) ? "package_registry"
  : "official_docs";
let n = 0;
for (const p of parts) {
  const m = p.match(/^(\d+)\. (.+)\n/);
  if (!m || skip.has(+m[1])) continue;
  // stop at trailing non-numbered sections
  const body = p.split(/^## (?!\d)/m)[0];
  const field = (k) => (body.match(new RegExp(`^- \\*\\*${k}:\\*\\* (.+)$`, "m")) || [])[1] || "";
  const para = (k) => (body.match(new RegExp(`\\*\\*${k}\\.\\*\\* ([\\s\\S]+?)(?=\\n\\n|$)`)) || [])[1] || "";
  const urls = [...new Set((field("Receipt").match(/https?:\/\/[^\s,;)]+/g) || []).map((u) => u.replace(/[.`]+$/, "")))];
  if (!urls.length) { console.error(`skip ${m[1]}: no receipt`); continue; }
  const half = (field("Half").split("|")[0] || "").trim();
  const conf = /Confidence:\*\* (high|medium|low)/.exec(field("Half").includes("Confidence") ? "**Confidence:** " + field("Half").split("Confidence:**")[1] : body)?.[1]
    || (/Confidence:\*\* (high|medium|low)/.exec(body) || [])[1] || "medium";
  const slug = m[2].toLowerCase().replace(/`/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 90).replace(/-[^-]*$/, (s) => s.length < 4 ? "" : s).replace(/-$/, "");
  const id = `2026-09-21-${src}-${slug}`;
  const changed = para("What changed") || m[2];
  const cons = para("Operator consequence") || "See the harvest record.";
  const md = `---
schema_version: bitter.frontier_finding.v0
finding_id: ${id}
source: ${src}
source_contract: sources/${src}.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: ${conf}
evidence:
${urls.map((u) => `  - url: ${u}\n    precision: ${prec(u)}`).join("\n")}
---
# ${id}

${m[2].trim()}. ${changed.trim()}

Channel: ${field("Channel").replace(/`/g, "")}. Half: ${half}. Date: ${field("Date")}.

Operator consequence: ${cons.trim()}

## Receipt
${urls.map((u) => `- ${u}`).join("\n")}
`;
  if (/[^\x00-\x7F]/.test(md)) console.error(`NON-ASCII ${id}`);
  fs.writeFileSync(path.join(RUN, "findings", `${id}.md`), md);
  n++;
}
console.log(`${src}: wrote ${n}`);
