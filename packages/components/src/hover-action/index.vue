<script setup lang="ts">
const show = defineModel<boolean>();
</script>

<template>
  <div class="hover-action" @mouseenter="show = true" @mouseleave="show = false">
    <slot />
    <transition name="fade">
      <div v-show="show" class="action">
        <slot name="action" />
      </div>
    </transition>
  </div>
</template>

<style lang="less" scoped>
.hover-action {
  position: relative;

  & > .action {
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    // background-color: rgb(255 255 255 / 50%);
    inset: 0;
  }
}
</style>
