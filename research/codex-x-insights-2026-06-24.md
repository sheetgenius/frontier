# Codex — X Intelligence Digest (2026-06-24)

**Project:** codex (OpenAI)

## Recent Issues
- Disk usage bug: aggressive writing to `~/.codex/logs_2.sqlite` even when idle (tens of GB reported). Fixed in v0.142.0+.

## New Features in v0.142.0
- Configurable per-thread token budgets with automatic abortion.
- Multi-agent delegation controls (disabled / explicit / proactive).
- Improved plugin organization and indexed web-search mode.
- Better usage reporting and time awareness.

Active development with frequent releases. Some user friction around strict usage limits.

**Recommendation:** Token budget and multi-agent features are high-signal “capability” changes. The disk bug is a notable reliability incident.