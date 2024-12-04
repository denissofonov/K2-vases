<template>
  <div
      class="social"
      v-motion
      :initial="{ opacity: 0 }"
      :delay="100"
      :duration="300"
      :visibleOnce="{ opacity: 1, scale: 1 }"
  >
    <div class="social_left"/>
    <div class="social_box"/>
    <div class="social_content">
      <div class="social_content_title">
        Social
      </div>
      <div class="social_content_links">
        <a href="https://instagram.com/swainceramics">
          Instagram
        </a>
        <a href="https://dribbble.com/swain">
          Dribbble
        </a>
        <a href="https://twitter.com/SwainCeramics">
          Twitter
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">
@import "../assets/styles/mixins"

.social
  display: flex
  align-items: center
  padding: 30px 0 32px
  height: 182px

  @include max-width-720px
    padding: 30px 0 32px 24px

  &_left
    width: 50%

    @include max-width-720px
      display: none

  &_content
    width: 50%
    display: flex
    flex-direction: column
    padding-right: 104px
    row-gap: 12px

    &_title
      font-size: 20px
      text-transform: uppercase
      font-weight: 500

    &_links
      display: flex
      flex-direction: column
      row-gap: 8px

      & > a
        font-weight: 500

        &:hover
          text-decoration: underline

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