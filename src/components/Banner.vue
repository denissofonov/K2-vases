<script setup lang="ts">

</script>

<template>
  <div
      class="banner"
      v-motion
      :initial="{ opacity: 0 }"
      :visibleOnce="{ opacity: 1, scale: 1 }"
      :delay="1300"
      :duration="400"
  >
    <img src="../assets/img/banner.png"/>
  </div>
</template>

<style scoped lang="sass">
.banner
  width: 100%
  aspect-ratio: 1.5 / 1
  overflow: hidden

  & > img
    width: 100%
    height: 100%
    display: block
    object-position: center
    object-fit: cover
    scale: 1.2
</style>