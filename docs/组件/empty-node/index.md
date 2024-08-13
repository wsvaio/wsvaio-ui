# empty-node

一个空节点，主要用于局部存取变量
:::demo
```vue
<script setup lang="ts">
import { WsEmptyNode } from "wsvaio-ui";

const dict = [{ dictId: 0, dictName: "000" }, { dictId: 1, dictName: "001" }];
</script>

<template>
  <!-- 通过props存变量，再通过插槽取出 -->
  <ws-empty-node :data="dict.find(item => item.dictId == 0)" #="data">
    <p>dictId：{{ data?.dictId }}</p>
    <p>dictName：{{ data?.dictName }}</p>
  </ws-empty-node>
</template>
```
:::
