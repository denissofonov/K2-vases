<template>
<div
    class="about"
    id="about"
    v-motion
    :initial="{ opacity: 0 }"
    :delay="100"
    :duration="300"
    :visibleOnce="{ opacity: 1, scale: 1 }"
>
  <div class="about_left"/>
  <div class="about_box"/>
  <div class="about_content">
    <div class="about_content_text">
      <div class="about_content_text_title">
        About
      </div>
      <div class="about_content_text_description">
        <div>
          Ever since I can recall, I've harbored a passion for creation.
        </div>
        <div>
          In 2014, I completed my studies at The University of Maine's art department, marking the beginning of my journey. Following graduation, I honed my skills at Ralph Paulson's workshop, immersing myself in learning over the course of five enriching years. In 2018, I took the leap and established my own workshop.
        </div>
        <div>
          Specializing in crafting distinctive ceramic vessels and functional objects, my work draws inspiration from the beauty of nature. If you're intrigued, don't hesitate to contact me.
        </div>
      </div>
    </div>
    <div class="about_content_photo">
      <img src="../assets/img/photo.png"/>
    </div>
  </div>
</div>
</template>

<style scoped lang="sass">
@import "../assets/styles/mixins"

.about
  display: flex
  align-items: center
  color: rgb(100, 99, 98)

  @include max-width-720px
    padding: 30px 0 32px 24px

  &_left
    padding: 0 48px
    width: 50%

    @include max-width-720px
      display: none

  &_content
    width: 50%
    display: flex
    flex-direction: column
    padding: 30px 0 32px
    row-gap: 24px

    @include max-width-720px
      width: 100%
      padding: 0

    &_text
      display: flex
      flex-direction: column
      row-gap: 12px
      padding-right: 104px

      @include max-width-720px
        padding-right: 56px


      &_title
        font-size: 20px
        text-transform: uppercase
        font-weight: 600
        color: rgb(31, 31, 30)

      &_description
        display: flex
        font-weight: 500
        flex-direction: column
        row-gap: 8px

    &_photo
      width: 168px

      & > img
        width: 100%

  &_box
    height: 8px
    background-color: rgb(31, 31, 30)
    position: absolute
    right: 48px
    top: 42px
    width: 8px

    @include max-width-1200px
      right: 32px
      top: 42px
</style>