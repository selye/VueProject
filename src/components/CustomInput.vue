<script setup lang="ts">


  const props =  defineProps(['title','text']);
  defineEmits(['update:title'])


</script>

<template>
  <p>{{props.text}}</p>
  <input type="text"
         :value="title"
         @input="$emit('update:title', $event?.target?.value)">
</template>

<style scoped>

</style>