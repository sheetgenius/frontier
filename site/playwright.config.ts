import { defineConfig, devices } from "@playwright/test";

const port = Number(process.env.WORKCELL_APP_PORT ?? 31080);
const baseURL = process.env.VERIFY_BASE_URL ?? `http://127.0.0.1:${port}`;
const externalServer = Boolean(process.env.VERIFY_BASE_URL);
const jsonReport = process.env.PLAYWRIGHT_JSON_OUTPUT_NAME ?? "test-results/smoke-report.json";
const outputDir = process.env.PLAYWRIGHT_OUTPUT_DIR ?? "test-results/playwright";

export default defineConfig({
  testDir: "./qa",
  outputDir,
  reporter: [
    ["list"],
    ["json", { outputFile: jsonReport }],
  ],
  timeout: 45_000,
  expect: {
    timeout: 10_000,
  },
  use: {
    ...devices["Desktop Chrome"],
    baseURL,
    trace: "retain-on-failure",
  },
  ...(externalServer
    ? {}
    : {
        webServer: {
          command: `npm run build && npm run preview -- --port ${port}`,
          url: baseURL,
          reuseExistingServer: false,
          timeout: 240_000,
        },
      }),
});
