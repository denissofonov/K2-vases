<script setup lang="ts">
import Border from "./Border.vue";
import Banner from "./Banner.vue";
import PageTitle from "./PageTitle.vue";
import CeramicsInfo from "./CeramicsInfo.vue";
import PageTable from "./PageTable.vue";
import About from "./About.vue";
import Contact from "./Contact.vue";
import Social from "./Social.vue";
import PageFooter from "./PageFooter.vue";
</script>

<template>
  <div class="content-wrapper">
    <div class="content">
      <border direction="vertical" delay="700" class="content_border-left"/>
      <border direction="vertical" reverse class="content_border-right"/>
      <page-title/>
      <border/>
      <banner/>
      <border delay="1000" duration="500"/>
      <ceramics-info/>
      <border delay="1000" duration="500"/>
      <page-table/>
      <about/>
      <border delay="1000" duration="500"/>
      <contact/>
      <border delay="1000" duration="500"/>
      <social/>
      <border delay="1000" duration="500"/>
      <page-footer/>
    </div>
  </div>
</template>

<style scoped lang="sass">
@import "../assets/styles/mixins"

.content-wrapper
  width: 100%
  display: flex
  justify-content: center
  padding: 0 48px

  @include max-width-1200px
    padding: 0 32px

  @include max-width-720px
    padding: 0 10px

.content
  width: 100%
  min-height: 100vh
  display: flex
  position: relative
  flex-direction: column
  max-width: 1536px

  &_border-left
    position: absolute
    left: -2px
    top: -88px
    height: calc(100% + 88px)

  &_border-right
    position: absolute
    top: -88px
    right: -2px
    height: calc(100% + 88px)
</style>