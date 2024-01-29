<script setup lang="ts">

import {ref} from "vue";
import {PersonVo} from "../service/user.ts";

const personList = ref<PersonVo[]>([])



</script>

<template>
  <div>
    <p>rightSlider</p>
    <div v-for="item in personList" :key="item.id">
      <p>{{item.info}}</p>
    </div>
  </div>
</template>

<style scoped>

</style>