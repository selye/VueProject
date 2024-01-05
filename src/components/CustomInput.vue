<script setup lang="ts">

import {onMounted, reactive} from "vue";

  defineProps(['title']);
  defineEmits(['update:title'])

  const data = reactive({
    form: {
      name:"",
      age:0,
      sex:"boy"
    }
  })

const init = () => {
    let params:any = {};
    for(const property in data.form){
      console.log("property", property)
      // params[property] = data.form[property] ?? " "
    }

    console.log("params",params)
}

  onMounted(() => {
    init()
  })

</script>

<template>
  <input type="text"
         :value="title"
         @input="$emit('update:title', $event?.target?.value)">
</template>

<style scoped>

</style>