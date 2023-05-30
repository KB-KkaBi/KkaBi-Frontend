import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [
      tsconfigPaths(),
      react(),
      svgr({
        svgrOptions: {
          // svgr options
        },
      }),
    ],
    define: {
      __APP_ENV__: env.APP_ENV,
    },
    server: {
      proxy: {
        "/api": {
          // target: env.VITE_APP_BASE_URL,
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
    build: { chunkSizeWarningLimit: 7000 },
  };
});
