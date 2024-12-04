<script setup lang="ts">

</script>

<template>
  <div
      class="info"
      id="ceramics"
      v-motion
      :initial="{ opacity: 0 }"
      :delay="100"
      :duration="300"
      :visibleOnce="{ opacity: 1, scale: 1 }"
  >
    <div class="info_empty"/>
    <div class="info_box"/>
    <div class="info_text">
      <div class="info_text_title">
        Ceramics
      </div>
      <div class="info_text_description">
        <div>
          In my world of ceramics, everyday objects become functional works of art. As a passionate ceramic artist, I craft pieces that delight the eye and serve a purpose. From delicate cups to sturdy plates, each item enhances your daily life.
        </div>
        <div>
          Ceramics have a unique power to bring people together, create memories, and tell stories. Whether you're sipping coffee or sharing a meal, I hope my creations bring joy and warmth to your routine.
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">
@import "../assets/styles/mixins"

.info
  display: flex
  justify-content: space-between
  width: 100%
  padding: 30px 0 32px

  @include max-width-720px
    padding: 30px 0 32px 24px

  &_empty
    @include max-width-720px
      display: none

  &_text
    width: 50%
    display: flex
    flex-direction: column
    padding-right: 104px
    row-gap: 12px

    @include max-width-720px
      width: 100%
      padding-right: 56px

    &_title
      font-size: 20px
      font-weight: 600
      text-transform: uppercase

    &_description
      display: flex
      flex-direction: column
      row-gap: 8px
      color: rgb(100, 99, 98)

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