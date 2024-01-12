<script setup lang="ts">

import {ref} from "vue";
import UserLeft from "./UserLeft.vue";
import OrderLeft from "./OrderLeft.vue"

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