

<script setup lang="ts">
//具名插槽

import {inject} from "vue";

const {location, updateLocation} = inject('location')

</script>


<template>
<div class="container">
  <p>{{location}}</p>
  <button @click="updateLocation">change</button>
  <header>
    <slot name="header"></slot>
  </header>
  <main>
    <slot name="main"></slot>
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>
</div>
</template>

<style scoped>

</style>