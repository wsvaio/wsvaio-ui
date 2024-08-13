<script setup lang="ts">
import { useResizeObserver } from "@vueuse/core";
import { onMounted } from "vue";

const { autoresize = true, transitionDuration = "0.3s" } = defineProps<{
  autoresize?: boolean;
  interval?: number;
  transitionDuration?: string;
}>();
const boxRef = $ref<HTMLDivElement>();
const contentRef = $ref<HTMLDivElement>();

let scale = $ref(1);
function handler() {
  console.log("wdf", boxRef, contentRef);
  if (!boxRef || !contentRef)
    return;
  if (boxRef.clientWidth / boxRef.clientHeight > contentRef.clientWidth / contentRef.clientHeight)
    scale = boxRef.clientHeight / contentRef.clientHeight;
  else scale = boxRef.clientWidth / contentRef.clientWidth;
}

// window.addEventListener("resize", handler);
// onUnmounted(() => window.removeEventListener("resize", handler));
onMounted(handler);
if (autoresize) {
  useResizeObserver($$(boxRef), handler);
}
// useIntervalFn(handler, interval);

defineExpose({
  resize: handler,
});
</script>

<template>
  <div ref="boxRef" class="scale-box">
    <div ref="contentRef" class="content" :style="{
      '--scale': scale,
      '--transition-duration': transitionDuration,
    }">
      <slot />
    </div>
    <slot name="other" />
  </div>
</template>

<style lang="less">
.scale-box {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  overflow: hidden;

  &>.content {
    flex: none;
    width: 100%;
    height: 100%;
    transform: scale(var(--scale, 1));
    transition: transform var(--transition-duration, 0.3s);
  }
}
</style>
