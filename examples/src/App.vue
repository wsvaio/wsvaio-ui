<script setup lang="ts">
import { WsSvgable } from "wsvaio-ui";
</script>

<template>
  <ws-svgable #="{id, w, h}">
    <rect x="120" width="100" height="100" rx="15" />
  </ws-svgable>
</template>

<style>
.wdnmd {
  height: 100dvh;
  .content {
    width: 1920px;
    height: 1080px;
    background-color: red;
  }
}
</style>
