import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const expectedHeaders = {
  // READ THIS BEFORE TRUSTING THESE TESTS.
  //
  // Everything below compares one declaration file to another. It proves the
  // repository is internally consistent. It proves nothing about what the edge
  // serves, and as of 2026-07-27 the edge serves NONE of these headers on any
  // path: the platform consumes public/_headers without applying it. The files
  // are correct and ignored.
  //
  // `npm run check:served-headers` is the check that asserts the actual
  // response. Run it before describing this site's security posture as shipped.
  // A publication that reports on controls which do not bind should not mistake
  // its own configuration for enforcement.
  //
  // GA4 needs three origins allowed or it silently collects nothing: the tag
  // loads from googletagmanager, beacons go to google-analytics (and regional
  // *.analytics.google.com), and the no-JS/pixel fallback is an image request.
  // Keep this in sync with _headers and _headers.json; the tests below assert
  // all three agree.
  "Content-Security-Policy":
    "default-src 'self'; base-uri 'self'; object-src 'none'; frame-ancestors 'none'; form-action 'self'; img-src 'self' data: https://www.google-analytics.com https://*.google-analytics.com; font-src 'self' data:; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com; connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com; upgrade-insecure-requests",
  "Strict-Transport-Security": "max-age=31536000; includeSubDomains",
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy":
    "camera=(), microphone=(), geolocation=(), payment=(), usb=(), accelerometer=(), gyroscope=(), magnetometer=(), interest-cohort=(), browsing-topics=()",
};

function parseRootHeaders(source) {
  const headers = new Map();
  let inRootRule = false;

  for (const line of source.split(/\r?\n/)) {
    if (line.trim() === "/*") {
      inRootRule = true;
      continue;
    }

    if (!inRootRule) continue;
    if (line && !line.startsWith(" ") && !line.startsWith("\t")) break;

    const match = line.trim().match(/^([^:]+):\s*(.+)$/);
    if (match) headers.set(match[1], match[2]);
  }

  return headers;
}

function parseRootHeadersJson(source) {
  const rules = JSON.parse(source);
  const rootRule = rules.find((rule) => rule.path === "/*");
  assert.ok(rootRule, "_headers.json must include a /* rule");

  return new Map(rootRule.headers.map((header) => [header.name, header.value]));
}

test("Frontier static headers declare the browser hardening baseline", () => {
  const headers = parseRootHeaders(readFileSync("public/_headers", "utf8"));

  for (const [name, value] of Object.entries(expectedHeaders)) {
    assert.equal(headers.get(name), value);
  }
});

test("Frontier Radicchio header rules match the browser hardening baseline", () => {
  const headers = parseRootHeadersJson(readFileSync("public/_headers.json", "utf8"));

  for (const [name, value] of Object.entries(expectedHeaders)) {
    assert.equal(headers.get(name), value);
  }
});
