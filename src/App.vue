<script setup lang="ts">
import Border from "./components/Border.vue";
import Content from "./components/Content.vue";
import PageHeader from "./components/PageHeader.vue";
</script>

<template>
  <div class="app">
    <page-header/>
    <border/>
    <content/>
  </div>
</template>

<style scoped lang="sass">
.app
  min-height: 100vh
  background-color: rgb(237, 235, 233)
  display: flex
  justify-content: flex-start
  font-family: "Archivo", sans-serif
  position: relative
  align-items: center
  flex-direction: column
  color: rgb(31, 31, 30)
</style>
