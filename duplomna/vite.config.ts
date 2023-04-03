import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import eslintPlugin from "vite-plugin-eslint";
import { fileURLToPath } from "url";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import VueTypeImports from "vite-plugin-vue-type-imports";

export default defineConfig({
  plugins: [
    vue(),
    eslintPlugin(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    VueTypeImports(),
  ],

  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
