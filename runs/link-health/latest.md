# Link health — 2026-06-18T03:24:27.849Z

Total URLs: **321** · Fresh checks: 321 · Cached: 0

## Summary

| status class | count |
|---|---|
| ok | 312 |
| auth_wall | 5 |
| broken | 2 |
| rate_limited | 1 |
| dns_or_network | 1 |

## Evidence-class issues

- **broken**: 0
- **redirected**: 0
- **auth_wall / rate / retry**: 5

### Auth-wall / rate / retry (evidence)

- `https://github.com/NousResearch/hermes-agent/commits`
  - status: 429 (rate_limited)
  - cited in:
    - `runs/2026-05-06-manual-2026-04-22_2026-05-06-frontier-v0/findings/hermes-agent.md` (receipt)
    - `runs/2026-05-06-manual-2026-04-22_2026-05-06-frontier-v0/manifest.yml`
- `https://www.npmjs.com/package/@anthropic-ai/claude-code`
  - status: 403 (auth_wall)
  - cited in:
    - `runs/link-health/latest.md`
    - `sources/claude-code.yml` (url)
- `https://www.npmjs.com/package/@google/gemini-cli`
  - status: 403 (auth_wall)
  - cited in:
    - `runs/link-health/latest.md`
    - `sources/gemini-cli.yml` (url)
- `https://www.npmjs.com/package/@mariozechner/pi-coding-agent`
  - status: 403 (auth_wall)
  - cited in:
    - `sources/pi-coding-agent.yml` (url)
- `https://www.npmjs.com/package/@openai/codex`
  - status: 403 (auth_wall)
  - cited in:
    - `sources/codex.yml` (url)
