<script setup lang="ts">
import {useRoute, useRouter} from "vue-router";
import {onMounted} from "vue";
const router = useRouter()
const route = useRoute();
const uId = route.params.id;

console.log("route", route)
console.log("router", router)

onMounted(() => {
  console.log("我挂载了")
})
</script>

<template>
  <div>user:{{uId}}</div>
  <router-link to="/">Home</router-link>

</template>

<style scoped>

</style>