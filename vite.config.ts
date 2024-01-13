import react from "@vitejs/plugin-react";

import { fileURLToPath } from "url";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    alias: [
      // {'@': fileURLToPath(new URL('./src', import.meta.url))},

      //   // eslint-disable-next-line no-undef
      //  {"@": path.resolve(__dirname, "./src")},
      { find: "@", replacement: fileURLToPath(new URL("./src", import.meta.url)) },
      //   { find: "@assets", replacement: fileURLToPath(new URL("./src/assets", import.meta.url)) },
      //   { find: "@styles", replacement: fileURLToPath(new URL("./src/assets/styles", import.meta.url)) },
      //   { find: "@components", replacement: fileURLToPath(new URL("./src/components/", import.meta.url)) },
      //   // { find: '@stores', replacement: fileURLToPath(new URL('./src/shared/stores', import.meta.url)) },
      //   // { find: '@use', replacement: fileURLToPath(new URL('./src/shared/use', import.meta.url)) },
    ],
  },
});
