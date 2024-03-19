<script setup lang="ts">





import {onMounted, ref, watch} from "vue";
import { useCountStore } from "../../store/index.ts"
import CustomInput from "../components/CustomInput.vue";
import {useRouter} from "vue-router";

const countStore = useCountStore()
const searchText = ref("默认字段")
const msgRef = ref<any>(null)
const router = useRouter()
const text = ref("")

watch(searchText,(newVal, oldValue) => {
  console.log('oldValue',oldValue)
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
<!--    <CustomInput v-model:title="searchText" :text="text"/>-->
<!--    <p ref="msgRef">输入框：{{searchText}}</p>-->
<!--    <div>pinia:{{countStore.count}}</div>-->
<!--    <button @click="increment">改变</button>-->
<!--    <button @click="clear">清空</button>-->
<!--    <button @click="goAbout">编程式导航</button>-->
<!--    <div class="router-box">-->
<!--      <router-link to="/about">About</router-link>-->
<!--      <router-link to="/user/1">User:1</router-link>-->
<!--      <router-link to="/user/2">User:2</router-link>-->
<!--    </div>-->
<!--    <div class="hover:bg-sky-300 p-6 max-w-sm bac mx-auto bg-black rounded-xl shadow-lg flex items-center space-x-4 cursor-pointer">-->
<!--      <div class="shrink-0">-->
<!--        <img class="h-12 w-12" src="https://hk.portal-pokemon.com/play/resources/pokedex/img/pm/cf47f9fac4ed3037ff2a8ea83204e32aff8fb5f3.png" alt="ChitChat Logo">-->
<!--      </div>-->
<!--      <div>-->
<!--        <div class="text-xl font-medium text-white">ChitChat</div>-->
<!--        <p class="text-slate-500">You have a new message!</p>-->
<!--      </div>-->
<!--    </div>-->

    <div class="mb-1 flex items-center">
      <img class="h-12 w-12 rounded-full ring-2 ring-white" src="https://hk.portal-pokemon.com/play/resources/pokedex/img/pm/cf47f9fac4ed3037ff2a8ea83204e32aff8fb5f3.png" alt="Modern building architecture">
      <img class="h-12 w-12 rounded-full ring-2 ring-white" src="https://hk.portal-pokemon.com/play/resources/pokedex/img/pm/cf47f9fac4ed3037ff2a8ea83204e32aff8fb5f3.png" alt="Modern building architecture">
      <img class="h-12 w-12 rounded-full ring-2 ring-white" src="https://hk.portal-pokemon.com/play/resources/pokedex/img/pm/cf47f9fac4ed3037ff2a8ea83204e32aff8fb5f3.png" alt="Modern building architecture">
      <img class="h-12 w-12 rounded-full ring-2 ring-white" src="https://hk.portal-pokemon.com/play/resources/pokedex/img/pm/cf47f9fac4ed3037ff2a8ea83204e32aff8fb5f3.png" alt="Modern building architecture">

    </div>
    <div class="max-w-md mx-auto bg-black rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div class="md:flex">
        <div class="md:shrink-0">
          <img class="h-48 w-full object-cover md:h-full md:w-48" src="https://hk.portal-pokemon.com/play/resources/pokedex/img/pm/cf47f9fac4ed3037ff2a8ea83204e32aff8fb5f3.png" alt="Modern building architecture">
        </div>
        <div class="p-8">
          <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats</div>
          <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible accommodation for your team</a>
          <p class="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
        </div>
      </div>
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