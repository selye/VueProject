<script setup lang="ts">

import {watch} from "vue";

const props =  defineProps<{ count: number; person?: any; }>()



console.log("count", props.count)

watch(() => props.count,() => {
  console.log("count", props.count)
})


</script>

<template>
  <p>数字:{{ count }}</p>
</template>

<style scoped>
.colorbox {
  display: flex;
  width: 140px;
  gap: 10px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}

.colorDom {
  width: 20px;
  height: 20px;
  border-radius: 8px;
  cursor: pointer;
}

.read-the-docs {
  color: #888;
}
</style>
