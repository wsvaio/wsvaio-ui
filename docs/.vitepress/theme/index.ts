import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import DemoPreview, { useComponents } from "@vitepress-code-preview/container";
import "@vitepress-code-preview/container/dist/style.css";

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    useComponents(ctx.app, DemoPreview);
  },
} satisfies Theme;
