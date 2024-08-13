# lazy-view

利用 v-if 与 v-show 实现懒加载 tab 页切换
:::demo
```vue
<script setup lang="ts">
import { ref } from "vue";
import { WsLazyView } from "wsvaio-ui";
const active = ref("页面1");
</script>

<template>
  <p>试着输入输入框，接着切换页面，观察状态是否保留</p>

  <button @click="active = '页面1'">页面1</button>
  <button @click="active = '页面2'">页面2</button>
  <button @click="active = '页面3'">页面3</button>

  <ws-lazy-view :active="active">
    <template #页面1>
      <p>页面1</p>
      <input type="input" placeholder="请输入" />
    </template>

    <template #页面2>
      <p>页面2</p>
      <input type="input" placeholder="请输入" />
    </template>

    <template #页面3>
      <p>页面3</p>
      <input type="input" placeholder="请输入" />
    </template>
  </ws-lazy-view>
</template>
```
:::
