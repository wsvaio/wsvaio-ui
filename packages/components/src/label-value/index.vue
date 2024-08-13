<script setup lang="ts">
import type { CSSProperties } from "vue";

withDefaults(
  defineProps<{
    label?: string | number;
    value?: string | number;
    type?: "normal";

    labelClass?: string | string[];
    labelStyle?: CSSProperties;
    valueClass?: string | string[];
    valueStyle?: CSSProperties;
  }>(),
  {
    type: "normal",
  }
);
</script>

<template>
  <div class="label-value" :class="[type]">
    <div class="label" :style="labelStyle" :class="labelClass">
      <slot name="label">{{ label }}</slot>
    </div>
    <div class="value" :style="valueStyle" :class="valueClass">
      <slot>{{ value }}</slot>
    </div>
  </div>
</template>

<style lang="less" scoped>
.label-value {
  &.normal {
    gap: 1em;
    display: flex;
    justify-content: space-between;

    &>.label {
      white-space: nowrap;
    }

    &>.value {
      text-align: right;
    }
  }
}
</style>
