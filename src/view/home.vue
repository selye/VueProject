<script setup lang="ts">

import {reactive, ref, watchEffect} from "vue";
import { useCountStore } from "../../store/index.ts"
import CustomInput from "../components/CustomInput.vue";

const countStore = useCountStore()
const searchText = ref("默认字段")

console.log("searchtext", searchText)

watchEffect(() => console.log(searchText.value))

const myObject = reactive({
  title: 'How to do lists in Vue',
  author: 'Jane Doe',
  publishedAt: '2016-04-10'
})

async function increment(){
  countStore.increment()
}

function clear(){
  countStore.$patch({
    count: 99
  })
}

</script>

<template>
  <CustomInput v-model:title="searchText"/>
  <p>输入框：{{searchText}}</p>
  <div>pinia:{{countStore.count}}</div>

  <button @click="increment">改变</button>
  <button @click="clear">清空</button>

  <router-link to="/about">About</router-link>
  <ul>
    <li v-for="value in myObject">
      {{ value }}
    </li>
  </ul>
</template>

<style scoped>

</style>