import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base "./" makes the build work under any GitHub Pages repo name
// (https://<username>.github.io/<repo>/) without extra configuration.
export default defineConfig({
  base: "./",
  plugins: [react()],
});
