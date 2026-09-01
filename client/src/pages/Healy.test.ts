import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

const page = readFileSync(resolve(process.cwd(), "client/src/pages/Healy.tsx"), "utf8");

describe("Healy service page", () => {
  it("creates the five requested anchored sections using existing project wording", () => {
    for (const [id, heading] of [
      ["what-is-healy", "What is Healy?"],
      ["healy-wellbeing", "Healy WellBeing"],
      ["healy-aura-analysis", "Healy Aura Analysis"],
      ["healy-i-ching", "Healy I Ching"],
      ["healy-reiki", "Healy Reiki"],
    ]) {
      expect(page).toContain(`id="${id}"`);
      expect(page).toContain(heading);
    }

    expect(page).toContain("Personalised frequency sessions that can be experienced remotely in the comfort of your own space.");
    expect(page).toContain("Duration: Approx. 60 minutes");
    expect(page).toContain("Healy session: €80");
    expect(page).toContain("Healy Reiki session: €90");
    expect(page).toContain("Remote Healy, Reiki and distant Reiki sessions are offered as complementary wellbeing and reflective supports.");
    expect(page).toContain("document.getElementById(targetId)?.scrollIntoView({ block: \"start\" });");
    expect(page).not.toContain("/research");
    expect(page).not.toContain("View Research");
  });
});
