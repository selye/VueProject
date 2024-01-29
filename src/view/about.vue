<script setup lang="ts">
import {debounceFn, throttle} from "../util/util.ts";
const shopping = debounceFn((goods: string) => {
  console.log("我要买东西", goods)
})
const sale = throttle((goods: string) => {
  console.log('我要卖东西', goods)
})



</script>

<template>
  <button @click="shopping('book')">debounce</button>
  <button @click="sale('book')">throttle</button>
  <router-link to="/">Home</router-link>
</template>

<style scoped>

</style>