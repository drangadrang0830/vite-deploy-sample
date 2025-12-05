<template>
  <ol>
    <!--                              傳遞           唯一ID -->
    <TodoItem v-for="item in aaa" :todo="item" :key="item.id">
    </TodoItem>
  </ol>
</template>

<script setup>
import { ref } from 'vue';
import TodoItem from '../components/TodoItem.vue';

const aaa = ref([
  { id: 0, text: 'Vegetables' },
  { id: 1, text: 'Cheese' },
  { id: 2, text: 'Whatever else humans are supposed to eat' },
])
</script>