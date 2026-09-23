import fs from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const projectRoot = path.resolve(import.meta.dirname, "..");
const publicDir = path.join(projectRoot, "dist", "public");
const template = await fs.readFile(path.join(publicDir, "index.html"), "utf8");
const { render } = await import(pathToFileURL(path.join(projectRoot, "dist", "server-ssr", "entry-server.js")).href);

const origin = "https://wellbeingfem.com";
const socialImage = `${origin}/manus-storage/NewSocialMediaimageSept8th2026_74736364.png`;
const routes = {
  "/": {
    title: "WellBeingFem — Frequency-Based Wellbeing for Women",
    description: "WellBeingFem offers ONDAMED PEMF sessions in Dublin, Healy Frequency Sessions, guided meditations and free wellbeing resources for women.",
  },
  "/ondamed": {
    title: "ONDAMED PEMF Sessions in Dublin | WellBeingFem",
    description: "WellBeingFem offers in-person ONDAMED PEMF wellbeing sessions in Dublin with personalised frequency-based support.",
  },
  "/healy": {
    title: "Healy Frequency Sessions | WellBeingFem",
    description: "WellBeingFem offers personalised Healy resonance analysis and frequency-based wellbeing sessions, including remote options.",
  },
  "/guided-meditations": {
    title: "WellBeingFem Guided Meditations | Women’s Wellbeing",
    description: "Explore WellBeingFem guided meditation practices using breath, imagery, reflection and nature-based themes.",
  },
  "/resources": {
    title: "Free WellBeingFem Resources",
    description: "Explore complimentary WellBeingFem wellbeing guides, practices and future resources.",
  },
  "/research": {
    title: "Research & References | WellBeingFem",
    description: "Research and references related to the wellbeing approaches discussed across WellBeingFem.",
  },
};

const escapeHtml = (value) => value
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&#39;");

const pageSchema = (route, meta) => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${origin}/#organization`,
      name: "WellBeingFem",
      url: `${origin}/`,
      logo: `${origin}/manus-storage/WellBeingfemlogofinal_e0e51dae.png`,
    },
    {
      "@type": "WebSite",
      "@id": `${origin}/#website`,
      name: "WellBeingFem",
      url: `${origin}/`,
      publisher: { "@id": `${origin}/#organization` },
    },
    {
      "@type": "WebPage",
      "@id": `${origin}${route}#webpage`,
      url: `${origin}${route}`,
      name: meta.title,
      description: meta.description,
      isPartOf: { "@id": `${origin}/#website` },
    },
  ],
});

const makeHead = (route, meta) => {
  const canonical = `${origin}${route}`;
  const schema = JSON.stringify(pageSchema(route, meta)).replaceAll("<", "\\u003c");
  return [
    `<title>${escapeHtml(meta.title)}</title>`,
    `<meta name="description" content="${escapeHtml(meta.description)}" />`,
    `<meta name="robots" content="index, follow" />`,
    `<link rel="canonical" href="${escapeHtml(canonical)}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:title" content="${escapeHtml(meta.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(meta.description)}" />`,
    `<meta property="og:url" content="${escapeHtml(canonical)}" />`,
    `<meta property="og:image" content="${escapeHtml(socialImage)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeHtml(meta.title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(meta.description)}" />`,
    `<meta name="twitter:image" content="${escapeHtml(socialImage)}" />`,
    `<script type="application/ld+json">${schema}</script>`,
  ].join("\n    ");
};

for (const [route, meta] of Object.entries(routes)) {
  const appHtml = render(`${route}?prerender=1`);
  const html = template
    .replace("<!--app-head-->", () => makeHead(route, meta))
    .replace("<!--app-html-->", () => appHtml);
  const outputDir = route === "/" ? publicDir : path.join(publicDir, route.slice(1));
  await fs.mkdir(outputDir, { recursive: true });
  await fs.writeFile(path.join(outputDir, "index.html"), html, "utf8");
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${Object.keys(routes).map((route) => `  <url><loc>${origin}${route}</loc></url>`).join("\n")}\n</urlset>\n`;
await fs.writeFile(path.join(publicDir, "sitemap.xml"), sitemap, "utf8");
await fs.writeFile(path.join(publicDir, "robots.txt"), `User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`, "utf8");
