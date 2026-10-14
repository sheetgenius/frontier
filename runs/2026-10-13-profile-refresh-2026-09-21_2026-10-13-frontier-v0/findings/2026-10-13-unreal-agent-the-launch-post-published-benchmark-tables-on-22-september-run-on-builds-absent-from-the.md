---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-unreal-agent-the-launch-post-published-benchmark-tables-on-22-september-run-on-builds-absent-from-the
source: unreal-agent
source_contract: sources/unreal-agent.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://web.archive.org/web/20260922183130/https://unreallabs.ai/blog/unreal-agent/
    precision: official_docs
  - url: https://hub.harborframework.com/jobs/27133053-2015-46f3-8c72-6b6910859da6
    precision: official_docs
  - url: https://hub.harborframework.com/jobs/3d2fa057-e11c-4be0-a962-e8be81b87709
    precision: official_docs
  - url: https://github.com/unreallabsai/unreal-agent/commit/c15463b18772a5223e62bb5c34f401c72bbd36f5
    precision: commit
  - url: https://hub.harborframework.com/jobs/2311ca63-2929-49eb-ba0c-0084ef31ba8b
    precision: official_docs
  - url: https://hub.harborframework.com/jobs/6ccd097a-747b-4867-be57-a56969df988f
    precision: official_docs
  - url: https://hub.harborframework.com/jobs/11a440fb-b1c4-473b-98a6-907500b3fdaf
    precision: official_docs
  - url: https://hub.harborframework.com/jobs/da4ac972-9d5a-4142-b057-85f07375f14e
    precision: official_docs
  - url: https://hub.harborframework.com/jobs/e20ecafd-695a-417c-90f5-35fd36d2786f
    precision: official_docs
  - url: https://hub.harborframework.com/jobs/cd7d8de6-c152-48de-9840-b22bbea96d99
    precision: official_docs
---
# 2026-10-13-unreal-agent-the-launch-post-published-benchmark-tables-on-22-september-run-on-builds-absent-from-the

The launch post published benchmark tables on 22 September, run on builds absent from the public repo, with Unreal's cost unrecorded on Harbor. The vendor's launch post, dated the day before the profile's posture, claims "up to 40% cost savings compared to Codex and up to 20% compared to Pi" and publishes tables for GPT-6 Astra at xhigh, given here as Unreal Agent, then Codex, then Pi. Terminal-Bench 4.0: 57.9% at $1,428; 57.9% at $2,350 (a leaderboard figure with no linked run); 55.0% at $1,827. SWE-Atlas Codebase QnA: 65.8% at $936; 63.3% at $1,303; 64.0% at $1,033. DeepSWE 1.1: 72.4% at $1,367; 69.0% at $1,633; 69.6% at $1,584. Agents' Last Exam (ALE-CLI, full pass, not on Harbor): 30.0% at $217; 29.0% at $292; 29.0% at $262. The post attributes the savings to "fewer model turns and fewer input tokens", and Unreal's tokens per trial are the lowest in every table. The linked Harbor jobs supply method the post leaves out: 330 trials over 5 attempts on Terminal-Bench, 372 over 3 on SWE-Atlas and 339 over 3 on DeepSWE, all run on Modal. They also show the limits. Harbor records an inference cost for every Codex and Pi job and none for any Unreal job; The job totals and the 100 inspected trial rows per Unreal job provide no inference cost. Remaining trial pages were not exhaustively fetched. Harbor's inspected Unreal reward averages are not the post's exact rates: about 58.18% versus 57.9% for Terminal-Bench, 63.17% versus 65.8% for SWE-Atlas, and 71.98% versus 72.4% for DeepSWE, whose fail-to-pass headline is about 92.95%. The post does not explain its aggregation. The Unreal builds cannot be matched to any public tag. The 2026-09-23 posture said no results were published; that was wrong when it was written.

Channel: docs-only. Half: both. Date: 2026-09-22.

Operator consequence: The linked records support a lower aggregate input-token direction for these vendor-run comparisons. Exact published pass rates and dollar savings are not independently reproduced. Unreal's dollar figures are vendor accounting: the linked job totals omit inference cost, and the benchmarked builds cannot be assigned to a public tag. Before relying on savings, re-run a bounded Harbor suite with the v0.3.1 adapter on your own model and compare tokens, successful tasks and costs against your installed harness. The SWE-Marathon links were not publicly readable at inspection; a readable job with a public build SHA, compaction configuration and accounting would settle that part of the question.

## Receipt
- https://web.archive.org/web/20260922183130/https://unreallabs.ai/blog/unreal-agent/
- https://hub.harborframework.com/jobs/27133053-2015-46f3-8c72-6b6910859da6
- https://hub.harborframework.com/jobs/3d2fa057-e11c-4be0-a962-e8be81b87709
- https://github.com/unreallabsai/unreal-agent/commit/c15463b18772a5223e62bb5c34f401c72bbd36f5
- https://hub.harborframework.com/jobs/2311ca63-2929-49eb-ba0c-0084ef31ba8b
- https://hub.harborframework.com/jobs/6ccd097a-747b-4867-be57-a56969df988f
- https://hub.harborframework.com/jobs/11a440fb-b1c4-473b-98a6-907500b3fdaf
- https://hub.harborframework.com/jobs/da4ac972-9d5a-4142-b057-85f07375f14e
- https://hub.harborframework.com/jobs/e20ecafd-695a-417c-90f5-35fd36d2786f
- https://hub.harborframework.com/jobs/cd7d8de6-c152-48de-9840-b22bbea96d99
