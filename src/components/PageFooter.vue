<template>
  <div
      class="footer"
      v-motion
      :initial="{ opacity: 0 }"
      :delay="100"
      :duration="300"
      :visibleOnce="{ opacity: 1, scale: 1 }"
  >
    <div class="footer_left">© 2024</div>
    <div class="footer_right">D14</div>
    <div class="footer_box"/>
  </div>
</template>

<style scoped lang="sass">
@import "../assets/styles/mixins"

.footer
  display: flex
  height: 88px
  align-items: center

  @include max-width-720px
    justify-content: space-between

  &_left
    width: 50%
    padding: 0 48px
    color: rgb(100, 99, 98)
    font-weight: 600

    @include max-width-720px
      width: fit-content
      padding: 0 0 0 20px

  &_right
    width: 50%
    padding-right: 80px
    font-weight: 500
    color: rgb(31, 31, 30)

    @include max-width-720px
      width: fit-content
      padding: 0 50px 0 0


  &_box
    height: 8px
    background-color: rgb(31, 31, 30)
    position: absolute
    right: 48px
    top: 42px
    width: 8px

    @include max-width-1200px
      right: 32px
      top: 40px
</style>
<script setup lang="ts">
</script>