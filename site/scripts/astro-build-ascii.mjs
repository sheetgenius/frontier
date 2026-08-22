#!/usr/bin/env node
// Radicchio/Grid captures `npm run build` stdout as ASCII-8BIT and then
// encodes it as UTF-8. Astro's default log prints `├─` and `✓` (bytes
// starting 0xE2), which raises `"\xE2" from ASCII-8BIT to UTF-8` after a
// successful compile and leaves frontier.bitter.sh on the last good SHA.
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const astro = path.join(root, "node_modules", "astro", "bin", "astro.mjs");
const child = spawn(process.execPath, [astro, "build", "--logLevel", "error"], {
  cwd: root,
  env: process.env,
  stdio: ["inherit", "pipe", "pipe"],
});

const toAscii = (buf) => {
  process.stdout.write(buf.toString("utf8").replace(/[^\t\n\r\x20-\x7e]/g, "?"));
};
child.stdout.on("data", toAscii);
child.stderr.on("data", toAscii);
child.on("exit", (code, signal) => {
  if (signal) process.kill(process.pid, signal);
  process.exit(code ?? 1);
});
