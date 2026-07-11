import { mkdir } from "node:fs/promises";
import path from "node:path";

import { expect, test } from "@playwright/test";

const screenshotDir = process.env.PLAYWRIGHT_SCREENSHOT_DIR ?? path.join("test-results", "screenshots");

test.beforeAll(async () => {
  await mkdir(screenshotDir, { recursive: true });
});

test("health endpoint reports the deploy receipt shape", async ({ request }) => {
  const response = await request.get("/up");
  expect(response.ok()).toBeTruthy();

  const payload = await response.json();
  expect(payload).toMatchObject({
    ok: true,
    status: "ok",
    service: "frontier.bitter.sh",
    hostname: "frontier.bitter.sh",
    app: "Bitter Frontier",
    secret_material_returned: false,
  });
  expect(payload.git_sha).toMatch(/^([0-9a-f]{40}|unknown)$/);
  expect(payload.release).toBe(payload.git_sha);
});

test("home page renders the public shell", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(/Bitter Frontier/);
  await expect(page.getByRole("heading", { name: "Coding agents are changing faster than operating policy." })).toBeVisible();
  await expect(page.getByText("Weekly field notes", { exact: true })).toBeVisible();
  await expect(page.getByText("Weekly field notes on what changed, what broke, and what to test.")).toBeVisible();
  await expect(page.getByText("Latest Issue")).toBeVisible();
  await expect(page.getByText("Provider Updates")).toBeVisible();
});

test("primary index links navigate from the public shell", async ({ page }) => {
  const targets = [
    { name: "Digests", path: "/digests/", visibleText: "Digests" },
    { name: "Profiles", path: "/profiles/", visibleText: "Profiles" },
    { name: "Changes", path: "/signals/", visibleText: "Signals" },
    { name: "Research trail", path: "/runs/", visibleText: "Research Trail" },
  ];

  for (const target of targets) {
    await page.goto("/");
    await Promise.all([
      page.waitForURL(`**${target.path}`),
      page.getByRole("link", { name: target.name }).first().click(),
    ]);
    await expect(page).toHaveURL(new RegExp(`${target.path.replaceAll("/", "\\/")}$`));
    await expect(page.locator("body")).toContainText(target.visibleText);
  }
});

test("public research indexes remain routable", async ({ request }) => {
  for (const path of ["/digests/", "/profiles/", "/signals/", "/sources/"]) {
    const response = await request.get(path);
    expect(response.ok(), `${path} should remain public`).toBeTruthy();
  }
});

test("theme choice remains explicit and persistent", async ({ page }) => {
  await page.emulateMedia({ colorScheme: "light" });
  await page.goto("/");

  await expect(page.locator("html")).not.toHaveClass(/dark/);
  await page.getByRole("button", { name: "Switch color theme" }).click();
  await expect(page.locator("html")).toHaveClass(/dark/);

  await page.reload();
  await expect(page.locator("html")).toHaveClass(/dark/);
});

test("sitemap favors canonical reader pages over duplicate artifacts", async ({ request }) => {
  const sitemap = await request.get("/sitemap.xml");
  expect(sitemap.ok()).toBeTruthy();
  const body = await sitemap.text();

  expect(body).toContain("https://frontier.bitter.sh/findings/2026-06-01-flue-v090-workers-ai-reasoning/");
  expect(body).not.toContain("https://frontier.bitter.sh/findings/2026-06-03-weekly-digest-2026-05-28_2026-06-03-frontier-v0/2026-06-01-flue-v090-workers-ai-reasoning/");
  expect(body).not.toContain("https://frontier.bitter.sh/runs/2026-06-03-weekly-digest-2026-05-28_2026-06-03-frontier-v0/");
  expect(body).not.toContain("/versions/");

  const versionedFinding = await request.get("/findings/2026-06-03-weekly-digest-2026-05-28_2026-06-03-frontier-v0/2026-06-01-flue-v090-workers-ai-reasoning/");
  expect(versionedFinding.ok()).toBeTruthy();
  const versionedBody = await versionedFinding.text();
  expect(versionedBody).toContain('<meta name="robots" content="noindex, follow">');
  expect(versionedBody).toContain('<link rel="canonical" href="https://frontier.bitter.sh/findings/2026-06-01-flue-v090-workers-ai-reasoning/">');

  const runArtifact = await request.get("/runs/2026-06-03-weekly-digest-2026-05-28_2026-06-03-frontier-v0/");
  expect(runArtifact.ok()).toBeTruthy();
  const runBody = await runArtifact.text();
  expect(runBody).toContain('<meta name="robots" content="noindex, follow">');
});

test("home page responsive screenshots are captured", async ({ page }) => {
  const widths = [390, 768, 1440];

  for (const width of widths) {
    await page.setViewportSize({ width, height: width === 390 ? 844 : 900 });
    await page.goto("/");
    await expect(page.getByRole("heading", { name: "Coding agents are changing faster than operating policy." })).toBeVisible();
    const pageWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    expect(pageWidth).toBeLessThanOrEqual(width);
    await page.screenshot({
      path: path.join(screenshotDir, `frontier-home-${width}.png`),
      fullPage: true,
    });
  }
});
