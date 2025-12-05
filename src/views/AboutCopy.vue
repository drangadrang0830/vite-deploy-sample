<template>
  <div class="about">
    <h1>This is an about page</h1>
    <br> {{ name }}
    <br> {{ user.getUserName }}
    <br> {{ wallet }}
    <button type="button" @click="updataName">點我</button>
    <button type="button" @click="updateData">踢我</button>
    <button type="button" @click="reset">揍我</button>
  </div>
</template>

<script setup>// 組合式
import { storeToRefs } from 'pinia'; // composition API
import userStore from '@/stores/counter';
const user = userStore();
// 修改內容1(reactive)
user.name = '阿呆';
// 解構方法
const { name, wallet } = storeToRefs(user);
// 函式不需要恢復套用ref


// 修改內容2(ref) 此方法較不推薦
wallet.value = 200;

user.$patch({
  wallet: 200
})
// 修改內容3(action  方法) 此方法較為推薦
const { updataName } = user;

// 修改內容4 此方法較為推薦
function updateData() {
  user.$patch({
    name: '醜陋阿姨',
    wallet: 500
  })
}

function reset() {
  user.$reset({
    name: '醜陋阿姨'
  })
}

</script>
