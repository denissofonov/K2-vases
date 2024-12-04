<template>
<div
    class="contact"
    v-motion
    :initial="{ opacity: 0 }"
    :delay="100"
    :duration="300"
    :visibleOnce="{ opacity: 1, scale: 1 }"
>
  <div class="contact_left"/>
  <div class="contact_box"/>
  <div class="contact_content">
    <div class="contact_content_title">
      Contact
    </div>
    <div class="contact_content_text">
      <div>+1 (207) 393-1670</div>
      <div>donna@swain.com</div>
    </div>
  </div>
</div>
</template>

<style scoped lang="sass">
@import "../assets/styles/mixins"

.contact
  display: flex
  align-items: center
  padding: 30px 0 32px
  height: 154px

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
    font-weight: 500

    @include max-width-720px
      width: 100%
      padding-right: 56px

    &_title
      font-size: 20px
      text-transform: uppercase

    &_text
      display: flex
      flex-direction: column
      row-gap: 8px

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