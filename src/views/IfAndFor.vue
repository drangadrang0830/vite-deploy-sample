<script setup>
import { ref } from 'vue'

const aaa = ref(true);
const bbb = ref([1, 2, 3])
</script>


<template>
  <div>
    <!-- 真假切換 -->
    <button type="button" @click="aaa = !aaa">Toggle List</button>
    <!-- bbb擴增+1數-->
    <button type="button" @click="bbb.push(bbb.length + 1)">Push Number</button>
    <!-- bbb縮減尾項 -->
    <button type="button" @click="bbb.pop()">Pop Number</button>
    <!-- bbb倒序 -->
    <button type="button" @click="bbb.reverse()">Reverse List</button>

    <!-- 若aaa與bbb的長度皆為真則開啟 -->
    <ul v-if="aaa && bbb.length">
      <li v-for="ccc in bbb" :key="ccc">{{ ccc }}</li>
    </ul>
    <p v-else-if="bbb.length">List is not empty, but hidden.</p>
    <p v-else>List is empty.</p>
  </div>
</template>