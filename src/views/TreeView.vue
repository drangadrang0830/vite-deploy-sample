<template>
  <ul>
    <!--                  ↓傳遞用 將響應式資料 treeData 綁定到子組件的 :model 屬性 -->
    <TreeComponent :model="treeData" class="item"></TreeComponent>
  </ul>

</template>


<script setup>
import { ref } from 'vue'
import TreeComponent from '../components/TreeComponent.vue'

// 使用 ref 宣告一個響應式的樹狀資料模型
const treeData = ref({
  name: 'My Tree', // 根節點名稱
  children: [      // 子節點陣列 (Vue 會依賴這個屬性判斷是否為資料夾)
    { name: 'hello' },
    { name: 'world' },
    {
      name: 'child folder', // 巢狀結構，遞迴的核心
      children: [
        {
          name: 'child folder',
          children: [
            { name: 'hello' },
            { name: 'world' }
          ]
        },
        { name: 'hello' },
        { name: 'world' },
        {
          name: 'child folder',
          children: [
            { name: 'hello' },
            { name: 'world' }
          ]
        },
      ]
    },
  ]
})

</script>

<style>
.item {
  cursor: pointer;
  line-height: 1.5;
}

.bold {
  font-weight: bold;
}
</style>