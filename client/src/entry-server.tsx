import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import App from "./App";

export function render(url: string) {
  const queryIndex = url.indexOf("?");
  const ssrPath = queryIndex === -1 ? url : url.slice(0, queryIndex);
  const ssrSearch = queryIndex === -1 ? "" : url.slice(queryIndex + 1);

  return renderToString(
    <Router ssrPath={ssrPath || "/"} ssrSearch={ssrSearch}>
      <App />
    </Router>,
  );
}
