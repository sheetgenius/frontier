import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

function findRepoRoot(start: string): string | undefined {
  let current = path.resolve(start);
  while (true) {
    if (fs.existsSync(path.join(current, ".git"))) return current;
    const parent = path.dirname(current);
    if (parent === current) return undefined;
    current = parent;
  }
}

const REPO_ROOT = process.env.BITTER_FRONTIER_ROOT
  ? path.resolve(process.env.BITTER_FRONTIER_ROOT)
  : findRepoRoot(process.cwd())
    ?? findRepoRoot(path.dirname(fileURLToPath(import.meta.url)))
    ?? path.resolve(process.cwd(), "..");

function normalizeDate(value: unknown): string | undefined {
  if (value instanceof Date && Number.isFinite(value.getTime())) {
    return value.toISOString().slice(0, 10);
  }
  if (typeof value === "string") {
    const date = value.slice(0, 10);
    if (ISO_DATE.test(date)) return date;
  }
  return undefined;
}

export function gitRevisionDate(relativePath: string, fallback: unknown): string {
  const fallbackDate = normalizeDate(fallback) ?? "1970-01-01";
  try {
    const date = execFileSync("git", ["log", "-1", "--format=%cs", "--", relativePath], {
      cwd: REPO_ROOT,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
    return ISO_DATE.test(date) && date > fallbackDate ? date : fallbackDate;
  } catch {
    return fallbackDate;
  }
}

export function gitFirstRevisionDate(relativePath: string, fallback: unknown): string {
  const fallbackDate = normalizeDate(fallback) ?? "1970-01-01";
  try {
    const dates = execFileSync(
      "git",
      ["log", "--follow", "--reverse", "--format=%cs", "--", relativePath],
      {
        cwd: REPO_ROOT,
        encoding: "utf8",
        stdio: ["ignore", "pipe", "ignore"],
      },
    )
      .trim()
      .split(/\r?\n/)
      .filter(Boolean);
    const first = dates[0];
    return ISO_DATE.test(first ?? "") ? first : fallbackDate;
  } catch {
    return fallbackDate;
  }
}
