<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()


/**
 * @module color
 */


 const colorArray = ['#f6746d', '#fce3e2', '#f68000', '#fce7cc', '#f9c500', '#f8edc0', '#93ad00', '#e3f09f', '#4ebd44', '#d3f5cd', '#4cbeab', '#c9f2ec', '#47b1e9', '#ceeffd', '#81a3ff', '#e1e9ff', '#e477b9', '#fce2f2', '#b591fd', '#eee6ff', '#90959e', '#eff0f1', '#fce3e2', '#f6746d', '#fce7cc', '#f68000', '#f8edc0', '#f9c500', '#e3f09f', '#93ad00', '#d3f5cd', '#4ebd44', '#c9f2ec',
 '#4cbeab', '#ceeffd', '#47b1e9', '#e1e9ff', '#81a3ff', '#fce2f2', '#e477b9',
 '#eee6ff', '#b591fd', '#eff0f1', '#90959e', '#f8c6c3', '#cf372b', '#f9c387',
 '#9d4d0a', '#f9de77', '#825a00', '#c9dd55', '#5d6d00', '#9ee596', '#42a10f',
 '#81e8d8', '#237062', '#a0dcfe', '#246a96', '#c4d4ff', '#2c58f4', '#f4c4e2',
 '#b1267a', '#dbc9ff', '#7937f4', '#dee0e3', '#383c43', '#eb4840', '#fce3e2',
 '#e46c00', '#fce7cc', '#d39800', '#f8edc0', '#7c9200', '#e3f09f', '#46a63f',
 '#d3f5cd', '#39a893', '#c9f2ec', '#3796cc', '#ceeffd', '#5a84fe', '#e1e9ff',
 '#d757a6', '#fce2f2', '#9d70f4', '#eee6ff', '#656a73', '#eff0f1', '#cf372b',
 '#f8c6c3', '#9d4d0a', '#f9c387', '#825a00', '#f9de77', '#5d6d00', '#c9dd55',
 '#42a10f', '#9ee596', '#237062', '#81e8d8', '#246a96', '#a0dcfe', '#2c58f4',
 '#c4d4ff', '#b1267a', '#f4c4e2', '#7937f4', '#dbc9ff', '#383c43', '#dee0e3'
]


const result: any = colorArray.reduce((acc: any, current, index) => {
  if(index % 2 === 0){
    acc.push({
      background: current,
      color: colorArray[index + 1]
    })
  }
  return acc
},[])
console.log(result)



const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
