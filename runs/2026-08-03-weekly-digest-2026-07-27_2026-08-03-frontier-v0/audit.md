# Audit -- 2026-07-27..2026-08-03

## Window

Seven days. The prior digest closed on 2026-07-27 and the boundary date is shared,
per the convention the archive already uses (2026-07-01_2026-07-02, then
2026-07-02_2026-07-27). Fifteen sources, the first cycle including Omnigent.

## What was read

- All fifteen source contracts in `sources/`, before their surfaces.
- Releases and tags for every GitHub-backed source, via the API rather than the
  rendered release page, so draft and prerelease state is visible.
- Default-branch commits in-window for Omnigent, Paperclip and OpenHands.
- `code.claude.com/docs/en/changelog` and the npm registry record for
  `@anthropic-ai/claude-code`, as two independent surfaces on the same question.
- The prior run's `carry_forward_checks`, all five.
- Source files read **at a tag ref**, not on main, where the claim was about
  behaviour an operator installs: `omnigent/policies/builtins/cost.py` and
  `risk_score.py` at `?ref=v0.7.0`.

## Channel resolution

Every claim is resolved by ancestry where the repository is inspectable, not by
date. Two resolutions did real work:

- OpenClaw PR #113405: `compare/<sha>...v2026.7.2-beta.5` returns `ahead`, so the
  beta contains the fix; the latest stable `v2026.7.1` predates the merge.
  Channel: `preview-or-beta`, not `tagged-release`.
- OpenHands `compare/1.11.0...v1.8.0` returns `ahead_by: 903, behind_by: 0`,
  which is what establishes that the renumbering happened on one line rather
  than across a fork. Without that check the finding would have been wrong.

## Carry-forward checks from the prior run

All five answered; three reached a channel operators install.

1. OpenHands tags its open-source line again -- **yes**, five times, and the
   renumbering became this window's lead finding.
2. Hermes approval guardrails reach a tag -- **yes**, `v2026.8.3`.
3. OpenClaw sandbox-assertion fix reaches any channel -- **beta only**.
4. Codex network-authority wave leaves alpha -- **yes**, `rust-v0.146.0`.
5. Gemini zero-click a2a-server fix reaches stable -- **yes**, `v0.53.0`.

## Thread check (step 6)

Three connections to earlier issues, each said once and forward-facing:

- **Hermes repairs a gap this publication named.** The 2026-06-04..06-16 issue
  recorded that Hermes removed its default 600-second subagent wall-clock timeout
  in the same week it shipped fire-and-forget background subagents, leaving
  runaway detection to heartbeat staleness alone. `v0.20.0` adds session-wide
  runaway-loop caps for `web_search` and `delegate_task` (#66600). The limit is
  back, by a different mechanism.
- **The Antigravity succession arc reaches its first permission change.** The
  2026-06-16..06-23 issue recorded the migration funnel and the June 18 shutdown,
  and the objection that a tool built on six thousand community pull requests was
  replaced by something that cannot be read. 1.1.9 is the first window in which
  that replacement changed a permission behaviour, which makes the unreadability
  operationally concrete rather than a principle.
- **OpenClaw continues, unresolved.** The 2026-07-02..07-27 issue recorded the
  sandbox assertion returning success while the escape worked, merged and in no
  release. It is now in beta and still not in stable.

## Decisions

- **Claude Code's silence is reported without a cause.** Two surfaces agree that
  nothing published for ten days after a near-daily cadence. Nothing in the
  public record states why, and a guess would be exactly the sort of claim this
  publication declines to make. Recorded, not promoted to a signal.
- **Pi's credential-export commands are carried as a question, not a finding
  about risk.** In a harness whose agent can run shell, a command that prints a
  live credential to stdout is the confused-deputy shape -- but the gating
  decides it, and the release note does not say. Next cycle checks the permission
  surface.
- **The OpenHands renumbering is reported without implying concealment.** Every
  migrated release body states its own provenance, including that an agent
  performed the migration, and #16133 shows the effect on publish automation was
  anticipated. The finding is about what the version number now means, not about
  anyone's conduct.
- **A vendor claim that checked out is recorded as such.** Omnigent's stateful-
  policy post was adjudicated against the code at the tag and was accurate. The
  publication's posture toward a landing page is scepticism; when the check comes
  back clean that is also a result.
- **Omnigent findings are scoped to Omnigent.** Per its contract, behaviour
  observed through a meta-harness is a fact about the wrapper or the pair, never
  about the harness underneath. The `worktree_guard` defect says nothing about
  Claude Code, Codex, Cursor or Pi.

## Lanes

- **Lane B (writing)** ran first and clean: 15 of 15 feeds live, 74 items since
  2026-07-27. It surfaced the Anthropic cybersecurity-eval incident post, the
  LiteLLM hijack writeup, a PipeWire sandbox escape (CVE-2026-5674), Cloudflare's
  Agents Week, and an LWN item asking whether a batch of "critical SQLite CVEs"
  was LLM slop. Those are wire material, not watchlist findings; none of those
  projects is on the watchlist.
- **Lane C (X via Hermes on Grok)** ran serialized, one call at a time. The broad
  sweep returned 127 posts across every source. A chain of narrower per-source
  and thematic sweeps follows it.
- **Capture discipline:** nothing here is quoted from a harvest. WebFetch cannot
  reach x.com (HTTP 402), so verification runs back through the Hermes lane as a
  dedicated pass given URLs only and no expected text, after the sweeps have
  selected what is worth quoting.
