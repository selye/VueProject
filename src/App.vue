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
  <div class="layout">
    <router-view class="view left-slider" name="LeftSlider"></router-view>
    <router-view class="view content" v-slot="{ Component }">
      <component :is="Component"/>
    </router-view>
    <router-view class="view right-slider" name="RightSlider"></router-view>
  </div>
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
.layout{
  width: 100%;
  display: flex;
}
</style>
