import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

const readProjectFile = (path: string) => readFileSync(resolve(process.cwd(), path), "utf8");

describe("ONDAMED page image addition", () => {
  it("uses the supplied image only on the dedicated ONDAMED page with a Contact Form booking link", () => {
    const page = readProjectFile("client/src/pages/Ondamed.tsx");
    const home = readProjectFile("client/src/pages/Home.tsx");

    expect(page).toContain('/manus-storage/ondamedwlogo-page_477a3f15.png');
    expect(page).toContain('href="/research#contact"');
    expect(page).toContain("Make a Booking");
    expect(home).not.toContain("ondamedwlogo-page_477a3f15.png");
  });

  it("uses a desktop float and tablet/mobile image-first stacking without image cropping", () => {
    const styles = readProjectFile("client/src/index.css");

    expect(styles).toContain(".ondamed-page__figure");
    expect(styles).toContain("float: right");
    expect(styles).toContain(".ondamed-page__figure img");
    expect(styles).toContain("height: auto");
    expect(styles).toContain("@media (max-width: 900px)");
    expect(styles).toContain("float: none");
  });
});
