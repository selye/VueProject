<script setup lang="ts">
import {useRoute, useRouter, onBeforeRouteLeave} from "vue-router";

const route = useRoute();
const router = useRouter();

router.beforeEach((to,from) => {
  console.log('hah')
  console.log("to",to)
  console.log("from",from)

  // return false
})

console.log("route", route)
console.log("router", router)


</script>

<template>
  <div>about</div>
  <router-link to="/">Home</router-link>
</template>

<style scoped>

</style>