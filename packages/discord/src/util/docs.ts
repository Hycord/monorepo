import { readdir } from "node:fs/promises";

const files = (
  await readdir(`${import.meta.dir}/../../docs/docs`, {
    recursive: true,
  })
).filter(
  (f) => f.endsWith(".md") && f.startsWith("resources/") && f != "Change_Log.md"
);

console.log(files);
