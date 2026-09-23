# Crosscheck -- temporal-agent-harness

Posts from this lane that reached a page, and what each was checked against. Posts not listed were discovery only and are not quoted.

- Jev auto mode (JasonSteving, jssmith): no auto-mode code in the 0.4.0 wheel; #142 on main after window close. Carded as voice.
- 'harness-first scrutiny' (AgentEtna): voice. The coordinator verified at e4bde4be: cli.py:121 host default 0.0.0.0; app.py GET /api/sessions, POST /api/approve, /api/callback-result, /api/operator-commands with no auth; slash_commands.py:256 skip -> dangerously_skip_all.
