<template>
  <div>
    <li>
      <!--             ↓ 若資料夾變數為真，增添粗體類別        ↓滑鼠雙擊時觸發 變更型態 函式 -->
      <div :class="{ bold: isFolder }" @click="toggle" @dblclick="changeType">
        <!-- 顯示當前節點的名稱 (從 props.model.name 來) -->
        {{ model.name }}
        <!--     ↓如果 isFolder 為真（是資料夾）才渲染切換符號 -->
        <span v-if="isFolder">[{{ isOpen ? '-' : '+' }}]</span>
        <!--                              ↑如果開啟變數為真 顯示 -  為假則 顯示 + -->
      </div>
    </li>
    <!--  ↓如果 isOpen 為真（展開）才顯示  因為資料夾即使摺疊也有內容-->
    <ul v-show="isOpen" v-if="isFolder">
      <!--                 ↑如果 isFolder 為真（資料夾）才渲染     -->
      <!--                                  ↓從接收變數的 children逐筆帶入並複製 ↓ 將子項目傳遞給下一層組件-->
      <TreeComponent class="item" v-for="(model, i) in model.children" :model="model" :key="'model' + i">
      </TreeComponent>
      <!-- 因作用域原因 這裡的增加項目只影響這次的children內容 -->
      <li class="add" @click="addChild">+</li>
    </ul>
  </div>

</template>

<script setup>
import { ref, computed } from 'vue'
// 導入自己，實現遞迴
import TreeComponent from './TreeComponent.vue'
// 接收父層傳入的變數
const props = defineProps({
  // 上層為treeData物件
  model: Object
})

// 本地響應式狀態：isOpen 變數 預設為假 (折疊)
const isOpen = ref(false)
// 計算屬性：判斷當前節點是否為資料夾
const isFolder = computed(() => {
  // 回傳布林值： 問題=>檢查是否有 children 屬性且長度大於 0
  return props.model.children && props.model.children.length
})
// 切換開關函式 
function toggle() {
  // 切換 isOpen 的布林值
  isOpen.value = !isOpen.value
}
// 變更節點型態 函式
function changeType() {
  // 如果當前不是資料夾
  if (!isFolder.value) {
    //接收資料的children內容為空陣列 (強制新增一個空的 children 陣列，使其變成資料夾)
    props.model.children = []
    // 執行增添子層函式，增加一個初始項目
    addChild()
    // 並自動展開
    isOpen.value = true
  }
}
// 增添子層 函式
function addChild() {
  // 將 {name: '新的'} 物件推入當前 model 的 children 陣列裡
  props.model.children.push({ name: '新的' })
}

</script>