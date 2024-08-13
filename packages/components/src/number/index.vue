<script setup lang="ts">
import gsap from "gsap";
import { watchEffect } from "vue";

const props = withDefaults(defineProps<{ value?: number; duration?: number; fractionDigits?: number }>(), {
  value: 0,
  duration: 1,
  fractionDigits: 0,
});
const _value = $ref(0);
watchEffect(() =>
  gsap.to($$(_value), {
    value: props.value,
    duration: props.duration,
  })
);
</script>

<template>
  <span class="number">
    <slot :value="_value">{{ Number(_value).toFixed(fractionDigits) }}</slot>
  </span>
</template>

<style scoped>
.vnumber {
  font-weight: 700;
  letter-spacing: 0;
  text-align: left;

  /* vertical-align: top; */
}
</style>
