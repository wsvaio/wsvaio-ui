<script setup lang="ts">
import { ref } from "vue";
import { WsLazyView } from "wsvaio-ui";

const active = ref("页面1");
</script>

<template>
  <button @click="active = '页面1'">页面1</button>
  <button @click="active = '页面2'">页面2</button>
  <button @click="active = '页面3'">页面3</button>

  <ws-lazy-view :active="active">
    <template #页面1>
      <h2>页面1</h2>
    </template>
    <template #页面2>
      <h2>页面2</h2>
    </template>
    <template #页面3>
      <h2>页面3</h2>
    </template>
  </ws-lazy-view>
</template>

<style scoped></style>
