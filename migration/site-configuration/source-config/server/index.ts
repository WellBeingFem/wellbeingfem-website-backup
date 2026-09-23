import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import { createResourceApiRouter } from "./resourceApi";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  app.use("/api/resources", createResourceApiRouter());

  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.get("/healy/what-is-healy", (_req, res) => res.redirect(301, "/healy"));
  app.get("/healy/wellbeing", (_req, res) => res.redirect(301, "/healy#healy-wellbeing"));
  app.get("/healy/aura-analysis", (_req, res) => res.redirect(301, "/healy#healy-aura-analysis"));
  app.get("/healy/i-ching", (_req, res) => res.redirect(301, "/healy#healy-i-ching"));
  app.get("/healy/reiki", (_req, res) => res.redirect(301, "/healy#healy-reiki"));
  app.get("/guided-meditations/womens-wisdom", (_req, res) => res.redirect(301, "/guided-meditations"));
  app.get("/guided-meditations/members-library", (_req, res) => res.redirect(301, "/guided-meditations"));

  const prerenderedRoutes = ["/ondamed", "/healy", "/guided-meditations", "/resources", "/research"];
  for (const route of prerenderedRoutes) {
    app.get(route, (_req, res) => {
      res.sendFile(path.join(staticPath, route.slice(1), "index.html"));
    });
  }

  // Pre-rendered route directories and static files own all public HTML responses.
  // `index: false` prevents a raw root template from bypassing the generated pages.
  app.use(express.static(staticPath, { index: "index.html", redirect: false }));

  const port = process.env.PORT || 3000;
  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
