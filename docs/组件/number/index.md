# number

一个数字过渡的组件

:::demo
```vue
<script setup lang="ts">
import { ref } from "vue";
import { WsNumber } from "wsvaio-ui";
const value = ref(0);
</script>

<template>
  <button @click="value = Math.floor(Math.random() * 1000)">change value</button>
  <br />
  <ws-number :value="value" />
</template>
```
:::
