import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Missing application root");

// Vite development serves the HTML template with its app placeholder empty.
// Production route files contain a real pre-rendered first child and should
// hydrate that markup instead of remounting it.
const app = <App />;
if (rootElement.firstElementChild) {
  hydrateRoot(rootElement, app);
} else {
  createRoot(rootElement).render(app);
}
