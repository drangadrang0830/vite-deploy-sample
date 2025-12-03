<template>
  <div>
    <p>
      <span :title="aaa">
        Hover your mouse over me for a few seconds to see my dynamically bound title!
      </span>
    </p>
    <p :class="{ red: bbb }" @click="ddd">
      This should be red... but click me to toggle it.
    </p>
    <p :style="{ color: ccc }" @click="eee">
      This should be green, and should toggle between green and blue on click.
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const aaa = ref('Hello World!')
const bbb = ref('true')
const ccc = ref('yellow')

function ddd() {//每次觸發開關紅色類別
  bbb.value = !bbb.value
}

function eee() {//每次觸發判斷是否為綠色 若是 為藍色 若否 為綠色
  ccc.value = ccc.value === 'yellow' ? 'blue' : 'yellow'
}

</script>

<style>
.red {
  color: red;
}
</style>
