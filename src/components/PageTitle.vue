<script setup lang="ts">

</script>

<template>
  <div
      class="title"
      v-motion
      :initial="{ opacity: 0 }"
      :visibleOnce="{ opacity: 1, scale: 1 }"
      :delay="1100"
      :duration="400"
  >
    Bespoke ceramics
  </div>
</template>

<style scoped lang="sass">
@import "../assets/styles/mixins"

.title
  font-size: 8vw
  font-weight: 600
  text-transform: uppercase
  line-height: 8vw
  width: 100%
  text-align: center
  padding: 32px 48px 28px
  text-wrap: nowrap

  @include max-width-1200px
    padding: 28px 32px 24px

  @include max-width-720px
    padding: 24px 24px 20px
    font-size: 48px
    text-align: left
    text-wrap: wrap
    line-height: 1.2
</style>