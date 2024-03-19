<script setup lang="ts">
import {debounceFn, throttle} from "../util/util.ts";


const shopping = debounceFn((goods: string) => {
  console.log("我要买东西", goods)
})
const sale = throttle((goods: string) => {
  console.log('我要卖东西', goods)
})

import {nextTick, ref, watch} from "vue";

const tabValue = ref<string[]>([])
const showValue = ref("")

const person = ref({
  name:"shijie"
})

const getValue =(inputValue: string,ev: KeyboardEvent) => {
  const newValue = inputValue.split(" ")
  tabValue.value = newValue
  console.log(newValue,ev)
}

const changeValue = (inputValue: string,ev: KeyboardEvent) => {
  let tagValue: string[];
  tagValue = inputValue.split(" ");
  tabValue.value.push(...tagValue)
  showValue.value = ""
  console.log(inputValue,ev)
}


const addProperty = () => {
  person.value.age = 20
}


</script>

<template>
<!--  <button @click="shopping('book')">debounce</button>-->
<!--  <button @click="sale('book')">throttle</button>-->
  <div class="about-container">
    <router-link to="/">Home</router-link>
    <p v-for="(item,index) in person" :key="index">{{item}}</p>
    <button @click="addProperty">添加属性</button>
  </div>
</template>

<style scoped>

</style>