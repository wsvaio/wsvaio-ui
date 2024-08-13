# scale-box

一个按等比例弹性伸缩盒

:::demo

```vue
<script setup lang="ts">
import { ref } from "vue";
import { WsScaleBox } from "wsvaio-ui";

const width = ref(300);
const height = ref(300);
</script>

<template>
  <button @click="(width = Math.floor(Math.random() * 1000)), (height = Math.floor(Math.random() * 1000))">change width</button>
  {{ { width, height } }}
  <ws-scale-box class="ws-scale-box" :style="{ width: `${width}px`, height: `${height}px` }">
    <h1 style="font-size: 128px;">既是天选，也是唯一</h1>
  </ws-scale-box>
</template>

<style>
.ws-scale-box {
  border: 1px solid #00ffff;
  & > .content {
    /* 必须在此指定content的宽高 */
    width: 1920px;
    height: 1080px;
    background: #f0ffff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
```

:::
