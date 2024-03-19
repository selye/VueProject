<script setup lang="ts">
import {useRoute} from "vue-router";
import {inject, onMounted, ref, watch} from "vue";
const route = useRoute();
const uId = route.params.id;

const transfer = () => {

}



onMounted(() => {
  console.log("我挂载了")
})

const ll = inject<any>("location")

watch(() => ll,() => {
},{
  deep: true,
  immediate:true
})

</script>

<template>
  <div>user:{{uId}}</div>
  <div>{{ll.location}}</div>



  <button @click="transfer">转移</button>
  <router-link to="/">Home</router-link>

</template>

<style scoped>

</style>