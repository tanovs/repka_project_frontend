import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  base: "./",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      "@assets": path.resolve(__dirname, "./src/assets"),
    },
  },
  build: {
    assetsDir: "src/assets",
  },
  assetsInclude: ["*.svg"],
  server: {
    proxy: {
      "/api": {
        target: "http://89.208.198.57:8080",
        changeOrigin: true,
      },
    },
  },
});
