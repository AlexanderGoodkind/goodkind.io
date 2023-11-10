import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

const resolve = (dir: string) => {
  return path.resolve(__dirname, dir);
};

// define aliases here
export const paths = {
  "@styles": resolve("./src/styles"),
  "@components": resolve("./src/components"),
  "@sections": resolve("./src/sections"),
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: paths,
  },
  clearScreen: false,
  server: {
    port: 3000,
    strictPort: true,
    proxy: {
      // "/api": {
      //   target: "http://localhost:5000",
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(/^\/api/, ""),
      // },
    },
  },
});
