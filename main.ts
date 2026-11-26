import { mkdirSync, writeFileSync } from "node:fs";

mkdirSync("/output", { recursive: true });

const line = "Section 14.2: The User hereby appoints the household's smallest spoon as Compliance Officer and agrees to tap it twice "
  + "on the rim before accepting any amended terms.";

writeFileSync("/output/entry.txt", line);
