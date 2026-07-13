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
  await expect(page.getByRole("heading", { name: "Coding agents can create work faster than teams can verify it." })).toBeVisible();
  await expect(page.getByRole("link", { name: "Bitter Lesson Maxing" })).toHaveAttribute("href", "/bitter-lesson/");
  await expect(page.getByRole("link", { name: "Amdahl Maxing" })).toHaveAttribute("href", "/amdahls-law/");
  await expect(page.getByText(/whole publication, source notes and all/)).toBeVisible();
  const firstThesisLink = page.locator(".homepage-thesis a").first();
  await expect(firstThesisLink).toHaveAttribute("href", /.+/);
  await expect(firstThesisLink).not.toHaveAttribute("href", "/profiles/agent-flywheel/");
  await expect(page.locator("body")).not.toContainText("receipts and all");
  await expect(page.locator("body")).not.toContainText("[Agent Flywheel](");
  await expect(page.getByText("Latest Published Brief")).toBeVisible();
  await expect(page.getByText("Latest Profile Reviews")).toBeVisible();
  await expect(page.locator(".version-list:empty")).toHaveCount(0);
});

test("public editorial pages keep backstage language out of the reader's way", async ({ page, request }) => {
  const about = await request.get("/about/");
  expect(about.ok()).toBeTruthy();
  const aboutBody = (await about.text()).toLowerCase();
  expect(aboutBody).not.toContain("finding_id");
  expect(aboutBody).not.toContain("adversarial verify stage");

  for (const path of ["/findings/", "/llms.txt"]) {
    const response = await request.get(path);
    expect(response.ok(), `${path} should remain public`).toBeTruthy();
  }

  await page.goto("/signals/");
  const firstSignal = page.locator(".signal-title a[href^='/signals/']").first();
  await expect(firstSignal).toBeVisible();
  await firstSignal.click();
  await expect(page.getByText("Primary sources", { exact: true })).toBeVisible();
  await expect(page.getByText("Receipts", { exact: true })).toHaveCount(0);
});

test("primary index links navigate from the public shell", async ({ page }) => {
  const targets = [
    { name: "Digests", path: "/digests/", visibleText: "Digests" },
    { name: "Profiles", path: "/profiles/", visibleText: "Profiles" },
    { name: "Signals", path: "/signals/", visibleText: "Signals" },
    { name: "Thesis", path: "/letter/", visibleText: "An ode to the Bitter Lesson" },
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

test("public research indexes and thesis pages remain routable", async ({ request }) => {
  for (const path of ["/digests/", "/profiles/", "/signals/", "/sources/", "/corrections/", "/letter/", "/bitter-lesson/", "/amdahls-law/"]) {
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
  expect(body).toContain("https://frontier.bitter.sh/letter/");
  expect(body).toContain("https://frontier.bitter.sh/bitter-lesson/");
  expect(body).toContain("https://frontier.bitter.sh/amdahls-law/");
  expect(body).toContain("https://frontier.bitter.sh/corrections/");
  expect(new Set([...body.matchAll(/<lastmod>([^<]+)<\/lastmod>/g)].map((match) => match[1])).size).toBeGreaterThan(1);

  const codexSitemapEntry = body.match(/<loc>https:\/\/frontier\.bitter\.sh\/findings\/codex\/<\/loc>\s*<lastmod>([^<]+)<\/lastmod>/);
  expect(codexSitemapEntry?.[1]).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  const canonicalCodex = await request.get("/findings/codex/");
  const canonicalCodexBody = await canonicalCodex.text();
  const canonicalJsonLd = canonicalCodexBody.match(/<script type="application\/ld\+json">([^<]+)<\/script>/);
  expect(canonicalJsonLd).not.toBeNull();
  expect(JSON.parse(canonicalJsonLd![1]).dateModified.slice(0, 10)).toBe(codexSitemapEntry![1]);

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

test("withdrawn signals remain correction records without leaking into accepted surfaces", async ({ page, request }) => {
  const withdrawnId = "2026-07-02-agent-flywheel-assembly-layer-dangerous-defaults";
  const withdrawnTitle = "Withdrawn as a July 2 signal: Agent Flywheel v0.7.0 was an intake baseline";

  await page.goto(`/signals/${withdrawnId}/`);
  await expect(page.getByText("Withdrawn from the reporting window", { exact: true })).toBeVisible();
  await expect(page.locator('meta[property="og:image"]')).toHaveAttribute("content", /\/og\/signals\//);

  await page.goto("/signals/");
  await expect(page.getByText(withdrawnTitle, { exact: true })).toHaveCount(0);

  await page.goto("/runs/2026-07-02-weekly-digest-2026-07-01_2026-07-02-frontier-v0/");
  const signalsStat = page.locator("dt", { hasText: "Signals" }).locator("..").locator("dd");
  await expect(signalsStat).toHaveText("4");
  const accepted = page.getByText("Accepted signals from this run", { exact: true }).locator("..");
  await expect(accepted).not.toContainText(withdrawnTitle);

  await page.goto("/corrections/");
  await expect(page.getByText("Reported by", { exact: true }).first()).toBeVisible();
  await expect(page.locator('meta[property="og:image"]')).toHaveAttribute("content", "https://frontier.bitter.sh/og/corrections.png");

  const rss = await request.get("/rss.xml");
  const rssBody = await rss.text();
  expect(rssBody).toContain(`https://frontier.bitter.sh/signals/${withdrawnId}/`);
  expect(rssBody).toContain("Sun, 12 Jul 2026 00:00:00 GMT");
  const latestDigestDescription = rssBody.match(/<item><title>Foreground Attention Is No Longer the Control<\/title>[\s\S]*?<description>([\s\S]*?)<\/description>/)?.[1];
  expect(latestDigestDescription).toBeTruthy();
  expect(latestDigestDescription).not.toContain("&amp;quot;");
});

test("digest source trail uses findings from its own run", async ({ page }) => {
  await page.goto("/digests/2026-07-01_2026-07-02-weekly/");
  await expect(page.locator(".issue-meta")).toHaveText("Edited by Michael Ruescher / revised 2026-07-12");
  const trail = page.locator(".source-trail-section");
  await expect(trail).toContainText("rust-v0.142.5");
  await expect(trail).not.toContainText("rust-v0.128.0");
  await expect(trail).toContainText("Agent Flywheel v0.7.0 was a pre-window update-reliability release");
  await expect(trail).not.toContainText("2026-07-02-codex-v0-142-5-trace-payload-scrub");
  const articleJsonLd = await page.locator('script[type="application/ld+json"]').allTextContents();
  expect(articleJsonLd.map((value) => JSON.parse(value)).find((item) => item.dateModified)?.dateModified).toBe("2026-07-12");
});

test("profile template emits one page heading", async ({ page }) => {
  await page.goto("/profiles/agent-flywheel/");
  await expect(page.locator("h1")).toHaveCount(1);
  await expect(page.locator(".prose-frontier h1")).toHaveCount(0);
  await expect(page.locator(".prose-frontier").first()).toContainText("Operator Read");
  await expect(page.locator(".prose-frontier").nth(1)).toContainText("The Flywheel, Not The Fleet");
  const sectionOrder = await page.locator("h2, .profile-stance").evaluateAll((nodes) =>
    nodes.map((node) => node.classList.contains("profile-stance") ? "stance" : node.textContent?.trim()),
  );
  expect(sectionOrder.indexOf("Operator Read")).toBeLessThan(sectionOrder.indexOf("stance"));
  expect(sectionOrder.indexOf("stance")).toBeLessThan(sectionOrder.indexOf("The Flywheel, Not The Fleet"));
  await expect(page.getByRole("link", { name: "Agent Flywheel's dangerous shortcuts are installed in both modes" })).toHaveCount(1);
});

test("home page responsive screenshots are captured", async ({ page }) => {
  const widths = [390, 768, 1440];

  for (const width of widths) {
    await page.setViewportSize({ width, height: width === 390 ? 844 : 900 });
    await page.goto("/");
    await expect(page.getByRole("heading", { name: "Coding agents can create work faster than teams can verify it." })).toBeVisible();
    const pageWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    expect(pageWidth).toBeLessThanOrEqual(width);
    await page.screenshot({
      path: path.join(screenshotDir, `frontier-home-${width}.png`),
      fullPage: true,
    });
  }
});
