import { promises as fs } from "node:fs";
import { resolve } from "node:path";

fs.readdir(resolve(__dirname, "../dist/es"), { withFileTypes: true }).then(async dirents => {
  for (const dirent of dirents) {
    if (!dirent.isDirectory())
      continue;

    const names = await fs.readdir(resolve(dirent.parentPath, dirent.name));
    if (!names.includes("index.js"))
      continue;

    const indexjsPath = resolve(dirent.parentPath, dirent.name, "index.js");
    let indexjs = await fs.readFile(indexjsPath, "utf8");

    for (const name of names.filter(item => item.endsWith(".css"))) {
      indexjs = `import "./${name}";\n${indexjs}`;
    }

    // console.log(indexjs);
    fs.writeFile(indexjsPath, indexjs, "utf8");
  }
});
