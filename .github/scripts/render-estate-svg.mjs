#!/usr/bin/env node
// render-estate-svg.mjs
// Hand-built animated "estate status" dashboard SVG for the SA-Ark profile.
//
// PUBLIC NUMBERS ONLY. Self-contained: inline CSS @keyframes only — no <script>,
// no <foreignObject>, no external refs. Renders correctly as an <img> on GitHub
// (which strips JS from SVG but runs declarative CSS/SMIL animation).
//
// Usage:
//   node render-estate-svg.mjs            -> writes SVG to stdout (live contributions if a token is set)
//   node render-estate-svg.mjs --self-test-> renders representative data, asserts it is clean, prints OK
//
// Contributions: fetched live from the PUBLIC GitHub GraphQL API for SA-Ark when a
// token (METRICS_TOKEN or GITHUB_TOKEN) is present; otherwise falls back to an
// honestly-rounded "12,000+" (never a fabricated fake-precise number).

const LOGIN = "SA-Ark";

const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

async function getContributions() {
  const token = process.env.METRICS_TOKEN || process.env.GITHUB_TOKEN;
  if (!token) return "12,000+";
  try {
    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `bearer ${token}`,
        "Content-Type": "application/json",
        "User-Agent": "SA-Ark-estate-status",
      },
      body: JSON.stringify({
        query:
          "query($login:String!){user(login:$login){contributionsCollection{contributionCalendar{totalContributions}}}}",
        variables: { login: LOGIN },
      }),
    });
    const json = await res.json();
    const n =
      json?.data?.user?.contributionsCollection?.contributionCalendar
        ?.totalContributions;
    if (typeof n === "number" && n > 0) return n.toLocaleString("en-US");
    return "12,000+";
  } catch {
    return "12,000+";
  }
}

function tileGroup(i, x, cx, t) {
  const y = 50,
    w = 193,
    h = 104,
    r = 10;
  const delay = (0.08 + i * 0.1).toFixed(2);
  // Animation is SMIL, not CSS: browsers FREEZE CSS @keyframes in an SVG loaded as
  // <img>, but run SMIL on the document timeline (verified by frame-diff). Base
  // attribute state is the RESTING/visible state (opacity 1), so a renderer that
  // ignores SMIL entirely still shows a fully-drawn tile — never a blank.
  // Top accent: full-size indigo rounded rect underneath, panel drawn 3px lower on
  // top -> a clean rounded 3px top border, matching the tile's corner radius.
  return `    <g opacity="1">
      <animate attributeName="opacity" from="0" to="1" begin="${delay}s" dur="0.5s" fill="freeze"/>
      <animateTransform attributeName="transform" type="translate" from="0 10" to="0 0" begin="${delay}s" dur="0.6s" fill="freeze" calcMode="spline" keyTimes="0;1" keySplines="0.2 0.7 0.3 1"/>
      <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="#5A67D8"/>
      <rect x="${x}" y="${y + 3}" width="${w}" height="${h - 3}" rx="${r}" fill="#161b22" stroke="#30363d" stroke-width="1"/>
      <text class="num" x="${cx}" y="${y + 52}" text-anchor="middle">${esc(t.value)}</text>
      <text class="l1" x="${cx}" y="${y + 74}" text-anchor="middle">${esc(t.l1)}</text>
      <text class="l2" x="${cx}" y="${y + 90}" text-anchor="middle">${esc(t.l2)}</text>
    </g>`;
}

function renderSvg({ contributions, updated }) {
  const tiles = [
    { value: "120+", l1: "PRODUCTION SERVICES", l2: "self-hosted" },
    { value: contributions, l1: "CONTRIBUTIONS", l2: "last 12 months" },
    { value: "180K+", l1: "MEMORIES INDEXED", l2: "100% embedded" },
    { value: "100", l1: "LIGHTHOUSE", l2: "quality gate" },
  ];
  // 4 equal tiles across an 808px content band (16px side padding), 12px gaps.
  const geo = [
    { x: 16, cx: 113 },
    { x: 221, cx: 318 },
    { x: 426, cx: 523 },
    { x: 631, cx: 728 },
  ];
  const tileSvg = tiles.map((t, i) => tileGroup(i, geo[i].x, geo[i].cx, t)).join("\n");

  const mono =
    "ui-monospace,SFMono-Regular,'SF Mono','JetBrains Mono',Menlo,Consolas,monospace";
  const sans =
    "-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif";

  return `<svg xmlns="http://www.w3.org/2000/svg" width="840" height="200" viewBox="0 0 840 200" role="img" aria-labelledby="title desc">
  <title id="title">Estate status dashboard</title>
  <desc id="desc">120+ self-hosted production services, ${esc(contributions)} contributions in the last 12 months, 180K+ memories indexed at 100% embedding coverage, Lighthouse 100.</desc>
  <style>
    .num{font-family:${mono};font-size:32px;font-weight:700;fill:#f0f6fc;letter-spacing:-0.5px}
    .l1{font-family:${sans};font-size:10px;font-weight:600;fill:#8b949e;letter-spacing:1px}
    .l2{font-family:${sans};font-size:11px;fill:#6e7681;letter-spacing:.3px}
    .hlabel{font-family:${mono};font-size:11px;fill:#8b949e;letter-spacing:1.5px}
    .hmeta{font-family:${mono};font-size:11px;fill:#6e7681}
    .cap{font-family:${sans};font-size:11px;fill:#6e7681;letter-spacing:.5px}
  </style>

  <rect x="0" y="0" width="840" height="200" rx="8" fill="#0d1117"/>

  <g opacity="1">
    <animate attributeName="opacity" from="0" to="1" begin="0s" dur="0.5s" fill="freeze"/>
    <circle cx="24" cy="26" r="9" fill="#5A67D8" opacity=".18"/>
    <circle cx="24" cy="26" r="5" fill="#5A67D8">
      <animate attributeName="opacity" values="1;0.35;1" dur="2.4s" begin="0.6s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.4 0 0.6 1;0.4 0 0.6 1"/>
    </circle>
    <text class="hlabel" x="40" y="30">ESTATE · LIVE</text>
    <text class="hmeta" x="824" y="30" text-anchor="end">updated ${esc(updated)}</text>
  </g>

${tileSvg}

  <line x1="16" y1="172" x2="824" y2="172" stroke="#21262d" stroke-width="1"/>
  <text class="cap" x="420" y="188" text-anchor="middle">self-hosted · Rust · verified numbers</text>
</svg>
`;
}

function selfTest() {
  const svg = renderSvg({ contributions: "12,174", updated: "2026-08-21" });
  // No active content, no HTML-in-SVG, no external resource loads. The xmlns
  // namespace URI (http://www.w3.org/2000/svg) is a declarative identifier a
  // renderer never fetches, so it is explicitly allowed; everything that would
  // pull bytes off the network at render time is forbidden.
  const forbidden = [
    "<script",
    "foreignObject",
    "<image",
    "<use",
    "href", // no xlink:href / href of any kind
    "url(", // no CSS url() (external fonts/images/filters)
    "@import",
  ];
  for (const bad of forbidden) {
    if (svg.includes(bad)) throw new Error(`self-test FAIL: contains "${bad}"`);
  }
  // The only URLs permitted are the two W3C namespace/ARIA identifiers.
  const urls = svg.match(/https?:\/\/[^\s"']+/g) || [];
  for (const u of urls) {
    if (!u.startsWith("http://www.w3.org/"))
      throw new Error(`self-test FAIL: unexpected external URL "${u}"`);
  }
  for (const v of ["120+", "12,174", "180K+", "100", "LIGHTHOUSE"]) {
    if (!svg.includes(v)) throw new Error(`self-test FAIL: missing "${v}"`);
  }
  // 4 tiles => 12 <text> in tiles + header(2) + caption(1) = 15
  const textCount = (svg.match(/<text/g) || []).length;
  if (textCount !== 15)
    throw new Error(`self-test FAIL: expected 15 <text>, found ${textCount}`);
  console.log("self-test OK");
}

async function main() {
  if (process.argv.includes("--self-test")) return selfTest();
  const contributions = await getContributions();
  const updated = new Date().toISOString().slice(0, 10); // YYYY-MM-DD (UTC)
  process.stdout.write(renderSvg({ contributions, updated }));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
