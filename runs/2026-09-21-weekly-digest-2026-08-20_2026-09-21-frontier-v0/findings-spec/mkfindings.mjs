// Generates finding index stubs from findings-spec/<source>.yml.
// Usage: node mkfindings.mjs <spec.yml> [...]
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
const require = createRequire(import.meta.url);
const HERE = path.dirname(fileURLToPath(import.meta.url));
const REPO = path.resolve(HERE, "../../..");
const yaml = require(path.join(REPO, "site/node_modules/js-yaml"));
const RUN = path.resolve(HERE, "..");
const END = "2026-09-21";
const WINDOW = { start: "2026-08-20", end: END };
let n = 0;
for (const spec of process.argv.slice(2)) {
  const s = yaml.load(fs.readFileSync(spec, "utf8"));
  for (const f of s.findings) {
    const id = `${END}-${s.source}-${f.slug}`;
    const ev = f.evidence.map((e) => `  - url: ${e.url}\n    precision: ${e.precision}`).join("\n");
    const md = `---
schema_version: bitter.frontier_finding.v0
finding_id: ${id}
source: ${s.source}
source_contract: sources/${s.source}.yml
window:
  start: ${WINDOW.start}
  end: ${WINDOW.end}
status: accepted
confidence: ${f.confidence ?? "high"}
evidence:
${ev}
---
# ${id}

${f.body.trim()}

Channel: ${f.channel}. Half: ${f.half}.

Operator consequence: ${f.consequence.trim()}

## Receipt
${f.evidence.map((e) => `- ${e.url}`).join("\n")}
`;
    if (/[^\x00-\x7F]/.test(md)) { console.error(`NON-ASCII in ${id}`); process.exitCode = 1; }
    fs.writeFileSync(path.join(RUN, "findings", `${id}.md`), md);
    n++;
  }
}
console.log(`wrote ${n} findings`);
