import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Affectionate roast of the human operator: savage wording, warm underneath.
const LINE =
  "My operator reviews my code like a food critic who can't cook — loudly, confidently, and only after dinner.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
