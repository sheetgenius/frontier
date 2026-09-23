---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-agent-zero-v2-12-also-fixes-whatsapp-media-path-traversal-file-overwrite-in-the-container-and-an-imap
source: agent-zero
source_contract: sources/agent-zero.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/agent0ai/agent-zero/commit/e2ed92b277
    precision: commit
  - url: https://github.com/agent0ai/agent-zero/commit/c565f72845
    precision: commit
---
# 2026-09-21-agent-zero-v2-12-also-fixes-whatsapp-media-path-traversal-file-overwrite-in-the-container-and-an-imap

v2.12 also fixes WhatsApp media path traversal (file overwrite in the container) and an IMAP sender-allowlist bypass. WhatsApp: the bridge callback built the write path from the document filename a remote sender supplied, and it saved media before any sender or group filter ran. So any WhatsApp sender, including one outside the allowlist, could write files outside `tmp/whatsapp/media`. The ledger PoC overwrote a sentinel at `extensions/python/job_loop/sentinel.py`. The framework runs as UID 0 in the container and imports extension modules as it finds them. The maintainers call the result root code execution in the container, "conditional" on WhatsApp keeping the crafted filename and a later extension load. They also say it does not imply a host escape. The fix keeps only the basename, checks that the path stays inside the cache, writes with exclusive create, and authorizes the sender before downloading. The integration is disabled by default. IMAP: sender extraction used a regex. Messages with several From mailboxes, a mailbox list, or a group could get past the whitelist. It now requires exactly one valid From mailbox, parsed with the standard-library email parser. The docs now say From filtering does not authenticate the sender.

Channel: tagged-release. Half: defect. Date: 2026-09-09.

Operator consequence: Upgrade if either integration is paired. The IMAP doc change matters on every version. A From whitelist is not sender authentication. Anyone who can email the inbox can spoof an allowed address and hand the agent a task.

## Receipt
- https://github.com/agent0ai/agent-zero/commit/e2ed92b277
- https://github.com/agent0ai/agent-zero/commit/c565f72845
