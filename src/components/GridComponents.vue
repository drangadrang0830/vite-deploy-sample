<template>
  <table v-if="filteredData.length">
    <thead>
      <tr>
        <!--                       ↓標題陣列        ↓篩選函式(標題)                  ↓排序變數等於標籤時有點擊類別-->
        <th v-for="(key, i) in columns" @click="sortBy(key)" :class="{ active: sortKey == key }" :key="key + i">
          {{ capitalize(key) }}
          <!--  ↑啟動首字大寫函式(參數為標籤名) ↓篩選後排序變數決定類別 -->
          <span class="arrow" :class="eee[key] > 0 ? 'asc' : 'dsc'">
          </span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(entry, i) in filteredData" :key="i">
        <td v-for="(key, i) in columns" :key="key + i">
          <!-- 兩個v-for 各自提供橫列資料及直向屬性 -->
          {{ entry[key] }}
        </td>
      </tr>
    </tbody>
  </table>
  <p v-else>沒找到</p>
</template>

<script setup>
//引用vue功能
import { ref, computed } from 'vue'

//接受資料
const props = defineProps({
  //預期接收陣列 資料變數
  data: Array,
  //預期接收陣列 標題變數
  columns: Array,
  //預期接收字串 搜尋變數
  filterKey: String
})

//本土變數 排序變數 會承接標籤名
const sortKey = ref('');
//本土變數 儲存各欄位的排序方向: 正數(1)等於小到大(遞增), 負數(-1)等於大到小(遞減)
const eee = ref(
  //賦值 接收的標題陣列 累積 每項執行由空物件增加參數屬性為1 
  //簡單來說 就是每個陣列項目變為物件屬性並且值為1
  props.columns.reduce((o, key) =>
    ((o[key] = 1), o), {})
)
//篩選函式  渲染後執行
const filteredData = computed(() => {
  //取出接收的data, filterKey兩值
  let { data, filterKey } = props
  //如果 搜尋變數為真(有輸入搜尋)
  if (filterKey) {
    //所有輸入轉為小寫
    filterKey = filterKey.toLowerCase()
    //賦值 篩選(每項別名為row) 資料 有的該筆留下 沒有的不要
    data = data.filter((row) => {
      //回傳 物件中每個屬性是否其中有搜尋到(接下方程式意思)  有為true  都沒有為false
      return Object.keys(row).some((key) => {
        //回傳 每筆的屬性(小寫並字串化) 包含搜尋資料的索引值 若找的到為正數 因大於-1 回傳為true 若找不到為-1 因等於-1 回傳為false
        //簡單來說就是每個屬性值回傳有沒有找到
        return String(row[key]).toLowerCase().indexOf(filterKey) > -1
      })
    })
  }

  //本土變數 賦值 排序變數 給 鑰匙變數
  const key = sortKey.value
  //如果 鑰匙變數為真值
  if (key) {
    //本土變數 篩選後排序變數 給 訂單變數
    const order = eee.value[key]
    //使用空的slice()淺層複製 之後排序
    data = data.slice().sort((a, b) => {
      // 比較為 排序變數(標籤)
      a = a[key]
      b = b[key]
      // 問題1: a 等於 b嗎? 對:回傳0(順序不變) 錯:執行下一段判斷
      // 問題2: a > b嗎?  對:回傳1(a在後) 錯:回傳1(a在後) 
      //          ↓問題1       ↓問題2
      return (a === b ? 0 : a > b ? 1 : 1) * order
      //                ↑1對  ↑1錯  ↑2對 ↑2錯
    })
  }
  //回傳處理完的data
  return data
})

//排序前置函式(參數為當前標籤名)
function sortBy(key) {
  //賦值 當前按下的標籤 給排序變數
  sortKey.value = key
  //賦值 篩選後排序變數*-1(正反顛倒)(控制篩選) 給篩選後排序變數
  eee.value[key] *= -1
}

//首字大寫函式
function capitalize(str) {
  //回傳 取出輸入值索引值為0的字並轉成大寫 加上 輸入值取索引值包含1後面的字
  return str.charAt(0).toUpperCase() + str.slice(1)
}
</script>

<style>
table {
  border: 2px solid #42b983;
  border-radius: 3px;
  background-color: #fff;
}

th {
  background-color: #42b983;
  color: rgba(255, 255, 255, 0.66);
  cursor: pointer;
  user-select: none;
}

td {
  background-color: #f9f9f9;
}

th,
td {
  min-width: 120px;
  padding: 10px 20px;
}

th.active {
  color: #fff;
}

th.active .arrow {
  opacity: 1;
}

.arrow {
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 0;
  margin-left: 5px;
  opacity: 0.66;
}

.arrow.asc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid #fff;
}

.arrow.dsc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid #fff;
}
</style>