---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-deepseek-harness-the-public-repo-is-a-mirror-the-release-identity-is-a-private
source: deepseek-harness
source_contract: sources/deepseek-harness.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/99f6f02fecdb7dff40c3fbc9470f5907c29f74ca/.github/workflows/python-release.yml
    precision: official_docs
---
# 2026-08-17-deepseek-harness-the-public-repo-is-a-mirror-the-release-identity-is-a-private

The public repo is a mirror; the release identity is a private repository the project deliberately does not name.

The contract asked whether the public repo is the development home. It is not, and the repo says so in its own CI. .github/workflows/python-release.yml gates publication on `[ "$REPOSITORY" = "$PYPI_PUBLISHER_REPOSITORY" ]` with the error "This repository is not the configured PyPI publisher repository," its header speaks of "the private publisher-repository identity," and it disables PyPI attestations with the comment "Public attestations reveal the private publisher repository." Around it: .gitlab-ci.yml publishes Python wheels to a GitLab package registry (`TWINE_REPOSITORY_URL="$CI_API_V4_URL/projects/$CI_PROJECT_ID/packages/pypi"`) on `python-v*` tags that do not exist here; scripts/publish-npm-baseline.ts defaults to an internal registry, `https://registry.npm.harnessment.com`; issue templates, an issue-lifecycle policy engine and a pull_request_template are all committed while issues and PRs are both disabled; merge commits reference PR numbers up to #2620 in the `deepseek-harness` org, which has existed since 2026-05-26 with zero public repos, and `gh api .../pulls/2620` returns 404 here; and npm publishing began 2026-08-10, three days before this repo was created. The good news, and it is genuinely good: the mirror is not shallow. Master carries 12,404 commits back to "Initialize repo with README, AGENTS.md, and CLAUDE.md symlink" on 2026-06-10, so the two months of development before the launch are readable, and one of the first public commits is f33f8583b5, "fix(docs): point source links at public master."

Channel: preview-or-beta. Ancestry: All cited files are read at 99f6f02, the sole tag, flagged prerelease. Repo metadata from `gh api repos/deepseek-ai/deepseek-harness` returns `has_issues: false`, `has_pull_requests: false`, `created_at: 2026-08-13T11:56:32Z`. Org metadata from `gh api users/deepseek-harness` returns `type: Organization, created_at: 2026-05-26T23:40:12Z, public_repos: 0`.

Operator consequence: Watch, and calibrate your reading. The commit history is unusually complete for a mirror, so ordinary archaeology works. But the tag surface is not the release record  --  six of the seven npm versions have no tag here  --  and PR numbers in commit messages point at a repo you cannot open, so a merge commit is often the deepest available receipt. Report defects in Discussions and keep your own copy of the text and permalink, because a discussion can be edited or deleted without trace and there is no issue tracker behind it. Do not read a gap in this history as evidence that no work happened.

## Receipt
- https://github.com/deepseek-ai/deepseek-harness/blob/99f6f02fecdb7dff40c3fbc9470f5907c29f74ca/.github/workflows/python-release.yml
