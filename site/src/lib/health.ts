import { execSync } from "node:child_process";

export function healthResponse() {
  const hostname = "frontier.bitter.sh";
  const release = releaseSha();

  return new Response(
    JSON.stringify({
      ok: true,
      status: "ok",
      service: hostname,
      hostname,
      app: "Bitter Frontier",
      git_sha: release,
      release,
      secret_material_returned: false,
    }) + "\n",
    {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    },
  );
}

function releaseSha() {
  const sha =
    process.env.BITTERFRONTIER_RELEASE_SHA ||
    process.env.RADICCHIO_RELEASE_SHA ||
    process.env.BITTERGRID_RELEASE_SHA ||
    process.env.BITTER_RELEASE ||
    process.env.GIT_SHA ||
    process.env.VERSION ||
    currentGitSha() ||
    "unknown";

  return /^[0-9a-f]{40}$/i.test(sha) ? sha.toLowerCase() : sha;
}

function currentGitSha() {
  try {
    return execSync("git rev-parse HEAD", {
      cwd: new URL("../..", import.meta.url),
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
  } catch {
    return "";
  }
}
