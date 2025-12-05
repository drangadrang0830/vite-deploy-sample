<template>
  <form id="search">Search
    <input type="text" name="query" v-model="searchQuery">
  </form>
  <DemoGrid :data="gridData" :columns="gridColumns" :filter-key="searchQuery"></DemoGrid>
</template>


<script setup>
import { ref } from 'vue'
import DemoGrid from '../components/GridComponents.vue'

const searchQuery = ref('')
const gridColumns = ['name', 'power']
const gridData = [
  { name: 'Chuck Norris', power: 'Infinity', },
  { name: 'Bruce Lee', power: '9000', },
  { name: 'Jackie Chan', power: '7000', },
  { name: 'Jet Li', power: '8000', }
]
</script>