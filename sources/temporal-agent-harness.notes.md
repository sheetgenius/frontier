# Temporal Agent Harness Source Notes

Added 2026-09-22. MIT, Python 3.11+, `temporal-community/temporal-agent-harness`,
58 stars and 17 forks at intake, repo created 2026-06-18, 136 commits on main.
Its own description: "Temporal-native Durable Multi Agent Harness." The README
opens with "an early, fast-moving project from Temporal Technologies. APIs will
change." The PyPI classifier is `Development Status :: 2 - Pre-Alpha`.
`pyproject.toml` names the author as Temporal Technologies Inc. The four global
code owners list their employer as Temporal or describe their work as Temporal
AI Foundations.

## Why it is on the watchlist

Because of who built it and what it makes durable.

Every other entry here is a model lab's harness, an agent author's harness, or a
layer that orchestrates harnesses. This one comes from a workflow-engine vendor,
and it makes the human decision itself a durable object. When the model requests
a tool the policy does not auto-approve, the call parks as a workflow wait. It
survives a worker crash. It can sit for hours or days. When the decision arrives
the call dispatches from where it stopped, and every turn, tool call, approval
decision and reply token is in the workflow history and can be replayed.

That is this publication's standing approval question with the approval turned
into infrastructure. The policy that decides which calls reach a human is a
frozen pydantic model with layered rules. It has a layer that approves
everything. A caller can override the agent author's default per session, and
the caller wins. A runtime call can swap the live policy, and relaxing it
re-evaluates every call already parked at the gate and releases the ones the
new policy allows. A `remember=True` decision allow-lists the tool by name and
cascades to every other pending call of that tool. All of this is documented in
`docs/internal/human-in-the-loop-tool-approvals.md`, which is unusually candid:
it records that the original per-tool opt-in design was inverted because it was
fail-open, and that the tool now only asserts `inherently_safe`, a static hint
the author supplies meaning "never, under any input, unsafe."

## What is checkable

- **It is a coding agent in one place.** `examples/callback_tools/coding_agent`
  runs the agent as a workflow "that could be running anywhere (picture a cloud
  worker) and has no access to your disk." The six tools, `bash`, `read`,
  `write`, `edit`, `grep` and `glob`, are callback tools with no worker-side
  body. A shim on the laptop executes them after an OpenCode permission prompt
  and posts the result back. `read`, `grep`, `glob`, `todowrite` and `todoread`
  are declared inherently safe and auto-approve under the example's
  `allow_inherently_safe()` policy. The prompt offers once, always or reject.
  Whether "always" maps to the harness's `remember` flag, which allow-lists by
  tool name, is the first probe to run, because if it does then one "always" on
  `bash` approves every later command with any arguments.
- **The shim speaks OpenCode's internal protocol.** The README says so and says
  to pin the OpenCode version: "this is OpenCode's internal protocol, not a
  formal standard, and it shifts between releases." Whether a protocol drift
  makes the approval prompt fail closed or degrade quietly is a probe, not a
  reading. OpenCode is not on this watchlist and is not being added for this.
- **The channel is split at intake.** Four GitHub releases in twelve days,
  0.1.0 on 2026-09-04, 0.2.0 on 2026-09-10, 0.3.0 on 2026-09-11 and 0.4.0 on
  2026-09-15, every one flagged prerelease. PyPI carries only 0.3.0 and 0.4.0.
  The README offers two install paths and they do not resolve to the same set of
  versions:

      git clone --branch 0.4.0 https://github.com/temporal-community/temporal-agent-harness.git
      uv add 'temporal-agent-harness[ui]==0.4.0'

  Releases are cut by hand, the version in `pyproject.toml` is bumped by hand,
  and the publish workflow refuses a tag whose version disagrees, in its own
  words so nobody discovers "that 0.4.0 shipped 0.3.0's code." The PyPI
  environment has no required reviewer; the workflow file says that is where a
  human gate would go.
- **Main is ahead of the tag, and the README moved with it.** On 2026-09-22 main
  was three commits past 0.4.0. One of them, "Unify message dispatch around
  first-class messages" (#137, 2026-09-17), is the source of the README section
  on accepted messages and per-handler mid-turn modes. The README at the 0.4.0
  tag has no such section. A reader of the repo front page is reading behaviour
  the installable wheel does not have. Say which README you read.
- **The durability claim is a claim about tools.** "No double-run tool calls"
  is in the README. Temporal retries activities by policy, and an
  activity-backed tool is an activity. What the tool has to be for the claim to
  hold, and whether the harness enforces it or assumes it, is checkable from
  the runner and the tests.
- **Every turn is in workflow history.** Against a local dev server that stays
  on the machine. Against Temporal Cloud the history leaves it, and large
  payloads can be offloaded to S3. What is in the history, what is retained and
  who can read it is a data-path question of the kind this list has asked of
  Omnigent's server-side transcription.
- **Code Mode is a script over the toolset.** One tool runs a model-authored
  Python script inside pydantic-monty; each host call is dispatched back through
  the runner as its own approval-gated activity, and the README says "writing
  the script is inert; only the host calls act." The sandbox is third-party,
  and a sandbox finding names it.
- **The hosting org disclaims the repo.** The `temporal-community` org
  description reads: "Repos in this organization have no guarantee of support
  or maintenance." The README and the package metadata say Temporal
  Technologies. Both are true statements by the same company and they do not
  say the same thing.
- **No advisories, no CHANGELOG, no docs site.** Zero published security
  advisories. The PyPI Changelog link points at GitHub releases. Design and
  internal docs live in the tree under `docs/`; there is no hosted
  documentation and the repo homepage field is empty.

## Handling rules

- **Tier 2, weekly.** Do not promote on release velocity, which at intake was
  one release every three days.
- **Attribute durability to one layer.** A behaviour comes from the harness,
  from the Temporal Python SDK it depends on (the floor is `temporalio>=1.31.0`
  for an experimental streams module), or from the Temporal service the operator
  runs against. `temporal_platform_guarantee_assumed_to_cover_tool_side_effects`
  is in the contract's rejected evidence.
- **Main is not the wheel.** `main_branch_readme_treated_as_released_behaviour`
  is in the rejected evidence for the reason above.
- **The OpenAI Agents integration is vendored from sdk-python main.** A defect
  there may already be fixed upstream and not here, or the reverse. Name the
  repo the code came from.
- **An OpenCode behaviour seen through the shim is a fact about the shim** unless
  shown otherwise. Do not launder a finding onto OpenCode.
- **The example is not the product.** The coding agent is a demonstration in
  `examples/`, which the README says is not shipped in the package. A finding
  about it says so.

## Comparison set

`omnigent` first, because it is the same shape from the other side: two layers
with a claim on the same action, there a governance layer over a harness that
has its own permissions, here a harness policy under a TUI that has its own
permission prompt. Then `openhands` for the remote-runtime bracket, and `codex`
and `claude-code` for what an approval prompt means when it is the product's
own.
