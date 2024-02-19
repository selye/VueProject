<script setup lang="ts">
import {debounceFn, throttle} from "../util/util.ts";

const shopping = debounceFn((goods: string) => {
  console.log("我要买东西", goods)
})
const sale = throttle((goods: string) => {
  console.log('我要卖东西', goods)
})

import {ref, watch} from "vue";

const tabValue = ref<string[]>([])
const showValue = ref("")

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

watch(tabValue,() => {
  console.log(tabValue.value)
},{
  deep:true,
  immediate: true
})




</script>

<template>
<!--  <button @click="shopping('book')">debounce</button>-->
<!--  <button @click="sale('book')">throttle</button>-->
  <div class="about-container">
    <jw-inputTag  :style="{width:'320px'}"
                  @input-value-change="changeValue"
                  @press-enter="getValue"
                  v-model:input-value="showValue"
                  v-model:model-value="tabValue">
    </jw-inputTag>
    <router-link to="/">Home</router-link>

  </div>
</template>

<style scoped>

</style>