<script setup lang="ts">
import { reactive, watch } from "vue";

const { active = "default" } = defineProps<{
  active?: string;
}>();

const set = reactive(new Set());

watch(
  () => active,
  () => set.add(active),
  {
    immediate: true,
  }
);
</script>

<template>
  <div v-for="item in Object.keys($slots)" v-show="item == active" :="$attrs">
    <slot v-if="set.has(item)" :name="item" />
  </div>
</template>
