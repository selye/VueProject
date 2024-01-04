<script setup lang="ts">

interface BlogProp {
  title?: string;
  content?: string;
  modelValue?: number
}

const emit =  defineEmits(['someEvent', 'submit', 'updateValue'])
withDefaults(defineProps<BlogProp>(), {
  title: '这是标题',
  content: '这是内容',
})

const sendCb = () => {
  emit('someEvent',{
    author:"施耐庵"
  })
}

const updateInput = (event: Event) => {
  const eValue = (event.target as HTMLInputElement).value;
  emit('updateValue', eValue)
}
</script>

<template>
  <input :value="modelValue" @input="updateInput" type="text">
  <div>{{ title }}</div>
  <div @click="sendCb">{{ content }}</div>
</template>

<style scoped>

</style>