# Pi Coding Agent final-draft directives

Profile date: 2026-10-24. Merged inputs: lens `pi-coding-agent`; thread `pi-coding-agent`. Consistency found no cross-profile fact correction. The [owning harvest](../../harvest/pi-coding-agent.primary.md) controls facts and timestamped selectors.

## Must

No additional must correction was identified by the three lenses.

## Should

1. Keep the interpreter-deletion lead and attach the migration consequence immediately: "pi-mcp-adapter 6.0.0 replaces its own interpreter with Pi's codemode; port script settings and permission hooks before upgrading." Explicitly name QuickJS and the optional adapter. Explain real deferred tool identities and person-routed approval where useful. Evidence: harvest section 11; [adapter changelog](https://github.com/nicobailon/pi-mcp-adapter/blob/v6.0.0/CHANGELOG.md), [adapter migration/policy contract](https://github.com/nicobailon/pi-mcp-adapter/blob/v6.0.0/README.md). This is upstream reuse, not Pi core deleting an interpreter or proof that improved model intelligence caused the removal.
2. Keep Durable's host-wake obligation and migration cost separate from the adapter and ordinary CLI resume. Back up SQLite before 1.4 opens it; test durable alarm/reopen behavior around process death and reconcile external effects. Evidence: harvest sections 8-10; [host contract](https://github.com/earendil-works/pi/blob/v1.4.0/packages/durable/README.md#L139-L220), [one-way SQLite migration](https://github.com/earendil-works/pi/blob/v1.4.0/packages/durable/src/storage/sqlite/migrations.ts). Pi Pocket's [crash-parking override](https://github.com/TannerMidd/pi-pocket/blob/v0.21.0/src/server/app.ts#L1083-L1100) illustrates why library and host policy differ.
3. End the four old pending-release waits and Nix-delivery warning without burying current gaps. Exact internal pins, share destination, resumed tool selection and codemode admission/cancellation have released; OAuth URL hardening remains main-only and the CLI's Undici pin remains an affected-dependency finding. Keep the compaction experiment tied to historical 0.79.0. Evidence: harvest sections 1-4 and 12-14; [1.4 release](https://github.com/earendil-works/pi/releases/tag/v1.4.0), [successful Nix workflow](https://github.com/earendil-works/pi/actions/runs/39686887389), [historical research](https://github.com/pixee/compaction-laundering/blob/9ce87b71301c628dfcd9232b01f1ccbdb0e67b16/disclosure/pi.md), [current serializer](https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/src/core/compaction/utils.ts#L120-L155).

## Could

None.

## Resolution

Both substantive lenses request the same adapter sentence; it appears once above. Durable and independently embedded hosts are separate contracts, not caveats that cancel the deletion's value. The owning dependency manifests govern host versions; updating global Pi does not update Pi-web, OpenClaw, Paperclip or another host. Keep OMP behavior fork-specific and leave the old feature's rewrite-performance questions open. The omitted `compared_with` field is valid; named consumers do not require inventing a comparative verdict.
