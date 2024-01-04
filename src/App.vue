<script setup lang="ts">

// import "./util/eventloop"
import {provide, ref} from "vue";

const location = ref('North Pole');

const updateLocation = () => {
  location.value = 'Sorth Pole'
}

provide('location', {
  location,
  updateLocation
})
</script>

<template>
  <router-view></router-view>
</template>

<style scoped>
.box {
  display: flex;
  gap: 10px
}

.animation {
  width: 100px;
  height: 200px;
  background-color: lightblue;
  cursor: pointer;
  transition: width 0.3s linear;
  transform-origin: center;

}

.animation:hover {
  width: 200px
}


.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
