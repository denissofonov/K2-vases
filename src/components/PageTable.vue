<script setup lang="ts">
import Border from "./Border.vue";

const items = [
  {
    name: 'Clay cougar',
    type: 'Pourers',
    year: 2024,
  },
  {
    name: 'Saharan sand',
    type: 'Mugs',
    year: 2024,
  },
  {
    name: 'Pyramid plates',
    type: 'Plates',
    year: 2023,
  },
  {
    name: 'Desert falcon',
    type: 'Cups',
    year: 2022,
  },
  {
    name: 'Zenith',
    type: 'Bowls',
    year: 2021,
  },
  {
    name: 'Black gold',
    type: 'Pourers',
    year: 2020,
  },
  {
    name: 'K2 vases',
    type: 'Vases',
    year: 2019,
  },
]
</script>

<template>
<div class="table">
  <div
      class="table_header"
      v-motion
      :initial="{ opacity: 0 }"
      :delay="100"
      :duration="300"
      :visibleOnce="{ opacity: 1, scale: 1 }"
  >
    <div class="table_header_left">Name</div>
    <div class="table_header_right">
      <div class="table_header_right_item table_header_right_item--type">Type</div>
      <div class="table_header_right_item">Year</div>
    </div>
    <div class="table_header_box"/>
  </div>
  <border delay="1000" duration="500"/>
  <div class="table_items">
    <div
        v-for="item in items"
        :key="item.name"
        class="table_items_wrapper"
    >
      <div
          class="table_items_item"
          v-motion
          :initial="{ opacity: 0 }"
          :delay="100"
          :duration="300"
          :visibleOnce="{ opacity: 1, scale: 1 }"
      >
        <div class="table_items_item_left">{{ item.name }}</div>
        <div class="table_items_item_right">
          <div class="table_items_item_right_item table_items_item_right_item--type">{{ item.type }}</div>
          <div class="table_items_item_right_item">{{ item.year }}</div>
        </div>
        <div class="table_items_item_box"/>
      </div>
      <border delay="1000" duration="500"/>
    </div>
  </div>
</div>
</template>

<style scoped lang="sass">
@import "../assets/styles/mixins"

.table
  display: flex
  flex-direction: column
  width: 100%

  &_header
    display: flex
    align-items: center
    color: rgb(100, 99, 98)
    height: 88px

    &_left
      padding: 0 48px
      width: 50%

      @include max-width-720px
        width: 100%
        padding: 0 24px

    &_right
      width: 50%
      display: flex

      &_item
        width: 50%
        padding-right: 48px

        &--type
          @include max-width-720px
            display: none

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

  &_items
    display: flex
    flex-direction: column
    width: 100%

    &_wrapper
      display: flex
      flex-direction: column

    &_item
      display: flex
      align-items: center
      height: 88px
      color: rgb(100, 99, 98)
      position: relative
      overflow: hidden
      cursor: pointer
      background-color: transparent
      transition: color 0.3s ease

      &::before
        content: ''
        position: absolute
        left: 0
        bottom: 0
        width: 100%
        height: 100%
        background-color: rgb(31, 31, 30)
        transform: translateY(100%)
        transition: transform 0.3s ease-in-out

      &:hover
        .table_items_item_left
          color: rgb(237, 235, 233)

        .table_items_item_right_item
          color: rgb(168, 167, 165)

        .table_items_item_box
          background-color: rgb(168, 167, 165)

        &::before
          transform: translateY(0)

      &_left
        padding: 0 48px
        width: 50%
        text-transform: uppercase
        color: rgb(31, 31, 30)
        font-weight: 500
        transition: color 0.3s ease

        @include max-width-720px
          width: 100%
          padding: 0 24px

      &_right
        width: 50%
        display: flex
        font-weight: 500

        &_item
          width: 50%
          padding-right: 48px
          transition: color 0.3s ease

          @include max-width-720px
            padding-right: 56px

          &--type
            @include max-width-720px
              display: none

      &_box
        height: 8px
        background-color: rgb(31, 31, 30)
        position: absolute
        transition: background-color 0.3s ease
        right: 48px
        top: 42px
        width: 8px

        @include max-width-1200px
          right: 32px
          top: 40px
</style>