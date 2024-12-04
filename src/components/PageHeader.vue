<script setup lang="ts">
const scrollTo = (selector) => {
  const target = document.querySelector(selector);
  if (target) {
    history.pushState(null, null, selector);
    target.scrollIntoView({behavior: 'smooth'});
  }
}
</script>

<template>
  <div class="wrapper">
    <div class="header">
      <div
          class="header_logo"
          v-motion
          :initial="{ opacity: 0 }"
          :delay="1000"
          :duration="300"
          :visibleOnce="{ opacity: 1, scale: 1 }"
      >
        SWAIN
      </div>
      <div class="header_buttons">
        <button
            @click="scrollTo('#ceramics')"
            class="header_buttons_button"
            v-motion
            :initial="{ opacity: 0 }"
            :delay="1100"
            :duration="300"
            :visibleOnce="{ opacity: 1, scale: 1 }"
        >
          Ceramics
        </button>
        <button
            @click="scrollTo('#about')"
            class="header_buttons_button"
            v-motion
            :initial="{ opacity: 0 }"
            :delay="1200"
            :duration="300"
            :visibleOnce="{ opacity: 1, scale: 1 }"
        >
          About
        </button>
      </div>
      <div
          class="header_box"
          v-motion
          :initial="{ opacity: 0 }"
          :delay="1300"
          :duration="300"
          :visibleOnce="{ opacity: 1, scale: 1 }"
      />
    </div>
  </div>
</template>

<style scoped lang="sass">
@import "../assets/styles/mixins"

.wrapper
  width: 100%
  display: flex
  justify-content: center
  padding: 0 48px

  @include max-width-1200px
    padding: 0 32px

  @include max-width-720px
    padding: 0 10px

.header
  height: 88px
  display: flex
  width: 100%
  align-items: center
  position: relative
  padding: 0 48px
  max-width: 1536px

  @include max-width-1200px
    padding: 0 32px

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

  &_logo
    font-weight: 600
    font-size: 22px
    width: 50%

  &_buttons
    width: 50%
    font-weight: 500
    display: flex
    column-gap: 40px

    @include max-width-720px
      display: none

    &_button
      width: 50%

      &:hover
        text-decoration: underline
</style>