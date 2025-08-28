#!/usr/bin/env node
import { compilePXH } from "../src/compiler.js";
import fs from "fs";
import path from "path";

const cmd = process.argv[2];

if (cmd === "dev") {
    console.log("🚀 PXH dev server (chưa viết, placeholder)");
} else if (cmd === "build") {
    const input = "./examples/MyApp.pxh";
    const output = "./dist/MyApp.html";

    const code = fs.readFileSync(input, "utf-8");
    const html = compilePXH(code);

    fs.mkdirSync(path.dirname(output), { recursive: true });
    fs.writeFileSync(output, html);

    console.log(`✅ Build xong: ${output}`);
} else {
    console.log("Dùng: pxh dev | pxh build");
}
