import { fileURLToPath } from "node:url";
import { defineConfig } from "vitepress";

import { demoPreviewPlugin, viteDemoPreviewPlugin } from "@vitepress-code-preview/plugin";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lastUpdated: true,
  title: "WSVAIO-UI",
  description: "一个简单的组件库",
  base: "/wsvaio-ui/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "文档", link: "/文档/快速上手" },
      // { text: "组件", link: "/组件/lazy-view" },
    ],

    sidebar: [
      {
        text: "文档",
        items: [{ text: "快速上手", link: "/文档/快速上手" }],
      },

      {
        text: "组件",
        items: [
          { text: "lazy-view", link: "/组件/lazy-view" },
          { text: "empty-node", link: "/组件/empty-node" },
          { text: "number", link: "/组件/number" },
          { text: "scale-box", link: "/组件/scale-box" },
          { text: "label-value", link: "/组件/label-value" },
          { text: "hover-action", link: "/组件/hover-action" },
          { text: "svgable", link: "/组件/svgable" },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/wsvaio/wsvaio-ui" }],
  },
  vue: {},
  vite: {
    plugins: [viteDemoPreviewPlugin()],
  },
  markdown: {
    config(md) {
      const docRoot = fileURLToPath(new URL("../", import.meta.url));
      md.use(demoPreviewPlugin as any, { docRoot });
    },
  },
});
