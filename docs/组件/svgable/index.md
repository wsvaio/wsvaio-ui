# svgable

svg标签，插槽内额外提供了宽度高度

:::demo
```vue
<script setup lang="ts">
import { WsSvgable } from "wsvaio-ui";
</script>

<template>
  <ws-svgable #="{w,h,vw}">
    <rect :x="vw(50)" :y="h - 20" width="20" height="20" />
  </ws-svgable>
</template>
```
:::
