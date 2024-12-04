<script setup lang="ts">
withDefaults(
    defineProps<{
      direction: 'horizontal' | 'vertical';
      delay?: number;
      reverse?: boolean;
      duration?: number;
    }>(),
    {
      direction: 'horizontal',
      delay: 500,
      reverse: false,
      duration: 1000
    }
)
</script>

<template>
  <div
      class="wrapper"
      :class="[
      `wrapper--${direction}`,
    ]"
  >
    <div
        class="border"
        :class="[`border--${direction}`]"
        :style="{
        animationDelay: `${delay}ms`,
        animationDuration: `${duration}ms`,
        left: direction === 'horizontal' && !reverse ? 0 : undefined,
        right: direction === 'horizontal' && reverse ? 0 : undefined,
        top: direction === 'vertical' && !reverse ? 0 : undefined,
        bottom: direction === 'vertical' && reverse ? 0 : undefined
      }"
    />
  </div>
</template>

<style scoped lang="sass">
.wrapper
  position: relative

  &--horizontal
    width: 100%
    height: 2px

  &--vertical
    height: 100%
    width: 2px

.border
  background-color: black
  position: absolute

  &--horizontal
    height: 2px
    width: 0
    animation: grow-horizontal ease forwards

  &--vertical
    height: 0%
    width: 2px
    animation: grow-vertical ease forwards

@keyframes grow-horizontal
  from
    width: 0%
  to
    width: 100%

@keyframes grow-vertical
  from
    height: 0%
  to
    height: 100%
</style>
