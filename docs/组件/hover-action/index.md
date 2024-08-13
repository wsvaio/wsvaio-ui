# hover-action

鼠标悬浮触发额外的界面

:::demo

```vue
<script setup lang="ts">
import { WsHoverAction } from "wsvaio-ui";
</script>

<template>
  <ws-hover-action>
    将鼠标移动到上面
    <template #action>
      action
    </template>
  </ws-hover-action>
</template>
```

:::
