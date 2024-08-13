<script setup lang="ts">
import { useResizeObserver } from "@vueuse/core";

const svgRef = $ref<SVGElement>();
let width = $ref(0);
let height = $ref(0);

useResizeObserver(
  $$(svgRef),
  ([rect]) => {
    width = rect.contentRect.width;
    height = rect.contentRect.height;
  },
  {}
);

const key = `a${Math.floor(Math.random() * 1000)}`;
const vw = (num: number) => (num * width) / 100;
const vh = (num: number) => (num * height) / 100;
const id = (id: string) => id + key;
</script>

<template>
  <svg ref="svgRef" class="svgable">
    <slot
      :id :w="width" :h="height" :vw
      :vh
    />
  </svg>
</template>

<style lang="less" scoped>
.svgable {
  width: 100%;
  height: 100%;
}
</style>
