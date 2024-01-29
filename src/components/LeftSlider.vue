<script setup lang="ts">

import {ref} from "vue";
import UserLeft from "./UserLeft.vue";
import OrderLeft from "./OrderLeft.vue";


const promise1 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(10)
    })
  })
}

const promise2 = () => {
  return new Promise((resove)=>{
    resove(2)
  })
}

const promise3 = () => {
  return new Promise((resove)=>{
    resove(3)
  })
}

const promiseArray = [promise1,promise2,promise3]
async function getPromise(proArr:any) {
  if(proArr.length > 0){
    const firstPromise = proArr.shift();
    await firstPromise().then(res => console.log(res));
    await getPromise(proArr);
  }
}

// getPromise(promiseArray)

const tabs = {
  user: UserLeft,
  order: OrderLeft
}

const currentTab = ref<string>("user")
const change = (cpType: string) => {
  currentTab.value = cpType
}
</script>

<template>
<div>
  <button @click="change('user')">User</button>
  <button @click="change('order')">Order</button>
  <component :is="tabs[currentTab as keyof typeof obj]"></component>
</div>
</template>

<style scoped>

</style>