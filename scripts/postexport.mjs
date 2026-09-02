import { writeFileSync } from "node:fs";
import { join } from "node:path";

// Prevent GitHub Pages from running Jekyll on the static export.
writeFileSync(join(process.cwd(), "out", ".nojekyll"), "");
