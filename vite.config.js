import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const sheetId = env.VITE_GOOGLE_SHEET_ID || "1FmiKUE-yVkBO8ey3VMJSRvtFzj3GboqH3omCaiATvIE";
  const gid = env.VITE_GOOGLE_SHEET_GID || "741825097";

  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    server: {
      proxy: {
        "/api/sheets/products": {
          target: "https://docs.google.com",
          changeOrigin: true,
          secure: true,
          rewrite: () => `/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv&gid=${gid}`,
        },
      },
    },
  };
});
