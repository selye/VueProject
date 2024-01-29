<script setup lang="ts">





import {onMounted, ref, watch, watchEffect} from "vue";
import { useCountStore } from "../../store/index.ts"
import CustomInput from "../components/CustomInput.vue";
import {useRouter} from "vue-router";

const countStore = useCountStore()
const searchText = ref("默认字段")
const msgRef = ref<any>(null)
const router = useRouter()

const text = ref("")



watch(searchText,(newVal) => {
  console.log("Dom", msgRef.value.innerHTML)
  console.log("new", newVal);
},{
  flush: 'post'
})

onMounted(() => {
  setTimeout(() => {
    text.value="我更新了"
  },1500)
})

watchEffect(() => {
  // console.log("新的值", searchText.value)
})


async function increment(){
  countStore.increment()
}

function clear(){
  countStore.$patch({
    count: 99
  })
}

function goAbout(){
 router.go(-1)
}

</script>

<template>
  <div class="content">
    <CustomInput v-model:title="searchText" :text="text"/>
    <p ref="msgRef">输入框：{{searchText}}</p>
    <div>pinia:{{countStore.count}}</div>
    <button @click="increment">改变</button>
    <button @click="clear">清空</button>
    <button @click="goAbout">编程式导航</button>
  <div class="router-box">
    <router-link to="/about">About</router-link>
    <router-link to="/user/1">User:1</router-link>
    <router-link to="/user/2">User:2</router-link>
  </div>

  </div>

</template>

<style scoped>
.router-box{
  width: 200px;
  display: flex;
  justify-content: space-between;
}
</style>