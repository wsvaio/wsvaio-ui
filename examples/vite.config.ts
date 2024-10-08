import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import reactivityTransform from "@vue-macros/reactivity-transform/vite";

export default defineConfig({
  plugins: [
    vue({
      features: {
        propsDestructure: true,
      },
    }),
    reactivityTransform(),
  ],
});
