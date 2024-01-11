<script setup lang="ts">

import {onMounted, ref} from "vue";
import {PersonVo} from "../service/user.ts";

const personList = ref<PersonVo[]>([])

const personObject = {
  name:"shijie",
  age:20,
  id:33,
}

const toArray = (obj) => {
  const result = Object.entries(obj)
  const arr = result.map((item) => {
    return {
      label: item[0],
      value: item[1]
    }
  })
  console.log(arr)
}

onMounted(() => {
  toArray(personObject)
})

</script>

<template>
  <p>rightSlider</p>
<div v-for="item in personList" :key="item.id">
  <p>{{item.info}}</p>
</div>
</template>

<style scoped>

</style>