/* eslint-disable no-undef */
import { fileURLToPath, URL } from "node:url";
import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig(({ mode }) => {
  // Charge les variables d'environnement
  const env = loadEnv(mode, process.cwd(), "");

  // Ajouter des logs pour vérifier les variables d'environnement
  if (env.VITE_TWITCH_CLIENT_ID && env.VITE_TWITCH_ACCESS_TOKEN) {
    console.log(".env chargé avec succès");
  }

  return {
    plugins: [vue()],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    server: {
      proxy: {
        "/api": {
          target: "https://api.igdb.com/v4",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
          configure: (proxy) => {
            proxy.on("proxyReq", (proxyReq) => {
              const clientId = env.VITE_TWITCH_CLIENT_ID;
              const accessToken = env.VITE_TWITCH_ACCESS_TOKEN;

              if (!clientId || !accessToken) {
                throw new Error(
                  "Les variables d'environnement VITE_TWITCH_CLIENT_ID et VITE_TWITCH_ACCESS_TOKEN doivent être définies."
                );
              }

              proxyReq.setHeader("Client-ID", clientId);
              proxyReq.setHeader("Authorization", `Bearer ${accessToken}`);
            });
          },
        },
      },
    },
  };
});
