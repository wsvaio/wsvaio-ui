import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import reactivityTransform from "@vue-macros/reactivity-transform/vite";

export default defineConfig({
  build: {
    target: "modules",
    // 打包文件目录
    outDir: "dist/es",
    // 压缩
    minify: false,
    // css分离
    cssCodeSplit: true,

    rollupOptions: {
      // 忽略打包vue文件
      external: ["vue", "@vueuse/core", "gsap"],
      // external: (source: string, importer: string | undefined, isResolved: boolean) => {
      //   if (importer?.includes("node_modules")) {
      //     return true;
      //   }
      //   return false;
      // },
      // input: ["src/index.ts"],
      output: [
        {
          format: "es",
          // 不用打包成.es.js,这里我们想把它打包成.js
          entryFileNames: "[name].js",
          // 让打包目录和我们目录对应
          preserveModules: true,
          // 配置打包根目录
          dir: "dist/es",
          preserveModulesRoot: "src",
        },
        {
          format: "cjs",
          entryFileNames: "[name].js",
          // 让打包目录和我们目录对应
          preserveModules: true,
          // 配置打包根目录
          dir: "dist/lib",
          preserveModulesRoot: "src",
        },
      ],
    },
    lib: {
      entry: "src/index.ts",
      // formats: ["es", "cjs"],
      // name: "wsvaio"
    },
  },
  plugins: [
    vue({
      features: {
        propsDestructure: true,
      },
    }),
    reactivityTransform(),
    dts({
      outDir: ["dist/es", "dist/lib"],
      entryRoot: "src",
    }),

  ],
});
