import { defineConfig } from "astro/config";
import tailwind from "@tailwindcss/vite";

export default defineConfig({
  output: "static",
  server: { port: 4321 },
  vite: {
    plugins: [tailwind()]
  }
});
