---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-10-flue-flue-v2-0-3-takes-ownership-of-the-cloudflare-agents-sdk-pin-instead-of
source: flue
source_contract: sources/flue.yml
window:
  start: 2026-08-03
  end: 2026-08-10
status: accepted
confidence: high
evidence:
  - url: https://github.com/withastro/flue/blob/bf86b8726f5ba189844185fdbeca0e194344ded1/CHANGELOG.md
    precision: official_changelog
---
# 2026-08-10-flue-flue-v2-0-3-takes-ownership-of-the-cloudflare-agents-sdk-pin-instead-of

Flue v2.0.3 takes ownership of the Cloudflare Agents SDK pin instead of leaving it to a scaffolded range.

The Cloudflare Agents SDK (`agents`) becomes a dependency of `@flue/vite` rather than something each project declares. The generated Worker entry is the only code that imports the SDK, so the package that generates it now ships it, and every project runs the SDK version Flue was tested against instead of whatever a scaffolded semver range resolves to on install day. `flue init --target cloudflare` stops writing the dependency and existing projects can delete theirs; a project that declares its own `agents` dependency still wins, with the plugin falling back to its bundled copy only when the project's `node_modules` chain has none. This also unbreaks fresh installs, which had begun failing on an `ai` peer conflict internal to `agents@0.14.5`  --  the newest version the scaffolded `^0.14.2` range had come to resolve. The scaffolded `wrangler` range moves to `^4.113.0`.

Channel: tagged-release. Ancestry: `gh api repos/withastro/flue/tags` lists v2.0.3 -> bf86b8726f5ba189844185fdbeca0e194344ded1; `gh api repos/withastro/flue/compare/v2.0.3...bf86b8726f5ba189844185fdbeca0e194344ded1` returned {"status":"identical","ahead_by":0,"behind_by":0}. Stable tag, no prerelease suffix. Date note: the tag commit's committer date is 2026-08-05T00:04:42Z (UTC) while the CHANGELOG header reads "2.0.3 - 2026-08-04"; both fall in w1.

Operator consequence: If a Flue Cloudflare scaffold stopped installing in the last days of July or early August, this is the fix  --  upgrade to v2.0.3 and delete your own `agents` dependency. The wider lesson is the one this publication keeps finding: a floating caret range in a scaffold is a time bomb that detonates on a day nobody chose, and the framework pulling the pin inside its own package is the correct fix. Audit your own generated templates for the same shape.

## Receipt
- https://github.com/withastro/flue/blob/bf86b8726f5ba189844185fdbeca0e194344ded1/CHANGELOG.md
