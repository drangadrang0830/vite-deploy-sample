<script setup>
import { ref } from 'vue'

const text = ref('');
const checked = ref(true);
const multiCheckbox = ref(['Jack', 'John']);
const radio = ref('One');
const select = ref('');
const multiSelect = ref(['B']);
</script>


<template>
  <div>
    <h2>文字輸入</h2>
    <input type="text" v-model="text" placeholder="請輸入">
    <p>{{ text }}</p>

    <h2>確認檢查</h2>
    <input type="checkbox" name="" id="checkbox" v-model="checked">
    <label for="checkbox">Checked: {{ checked }}</label>

    <h2>單列複選</h2>
    <input type="checkbox" name="" id="jack" value="Jack" v-model="multiCheckbox">
    <label for="jack">Jack</label>
    <input type="checkbox" name="" id="john" value="John" v-model="multiCheckbox">
    <label for="john">John</label>
    <input type="checkbox" name="" id="mike" value="Mike" v-model="multiCheckbox">
    <label for="mike">Mike</label>
    <p>選擇: {{ multiCheckbox }}</p>

    <h2>單列單選</h2>
    <input type="radio" name="" id="one" value="One" v-model="radio">
    <label for="one">One</label>
    <br>
    <input type="radio" name="" id="two" value="Two" v-model="radio">
    <label for="two">Two</label>
    <p>選擇:{{ radio }} </p>

    <h2>下拉單選</h2>
    <select v-model="select">
      <option value="" disabled>請選擇</option>
      <option value="A">A選項</option>
      <option value="B">B選項</option>
      <option value="C">C選項</option>
    </select>
    <p>選擇:{{ select }}</p>

    <h2>下拉複選</h2>
    <select v-model="multiSelect" multiple style="width:150px">
      <option value="A">A選項</option>
      <option value="B">B選項</option>
      <option value="C">C選項</option>
    </select>
    <p>選擇:{{ multiSelect }}</p>

  </div>
</template>