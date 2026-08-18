---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-10-claude-code-sandbox-credential-masking-gains-extraction-jwt-aware-decoding-and-aws
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-08-03
  end: 2026-08-10
status: accepted
confidence: high
evidence:
  - url: https://code.claude.com/docs/en/changelog#2-1-224
    precision: official_changelog
---
# 2026-08-10-claude-code-sandbox-credential-masking-gains-extraction-jwt-aware-decoding-and-aws

Sandbox credential masking gains extraction, JWT-aware decoding, and AWS SigV4 re-signing.

v2.1.221 added `mode: "mask"` for sandbox credential files on Linux and WSL: "sandboxed commands read a sentinel copy (the whole file, or just the spans captured by an `extract` regex) while the sandbox proxy substitutes the real value on egress; on macOS file masking falls back to `deny`." v2.1.224 extended it with "`extract` and `onExtractNoMatch` for structured env values, `decode: "jwt"` with `maskClaims` for JWT-aware masking, and `awsPairs`/`sigv4` for AWS SigV4 re-signing." Both carry the same two constraints, stated plainly in the changelog: the options "need `network.tlsTerminate`" and are "honored only from user, managed, or `--settings` settings"  --  a project's checked-in settings cannot configure how its own credentials are masked. Related and worth pairing: v2.1.224 also fixed "sandbox violation details never appearing in Bash tool results; Claude now sees which file or network access was denied and why."

Channel: tagged-release. Ancestry: Closed source; npm publish record is the release proof. registry `time[]`: 2.1.221 = 2026-08-03T22:16:25Z, 2.1.224 = 2026-08-07T01:36:32Z  --  both plain non-prerelease semver under dist-tag `latest`, both with resolvable per-version manifests. Corroborated on a second surface: the Week 32 digest's "Other wins" grid links the feature to /docs/en/sandboxing#mask-credential-files, so a docs surface stands behind the changelog claim rather than the changelog standing alone.

Operator consequence: Try this if you run agents against services whose credentials you cannot rotate cheaply  --  it is the difference between the agent holding your key and the agent holding a placeholder while the proxy holds the key. Two conditions decide whether it applies to you: it requires TLS termination at the sandbox proxy, which is itself a decision your security team should make explicitly, and macOS silently degrades to `deny` rather than masking, so a config that works on your Linux CI will behave differently on a developer's Mac. Do not assume behaviour carries across the two platforms. The settings-scope restriction is the right default and worth preserving.

## Receipt
- https://code.claude.com/docs/en/changelog#2-1-224
