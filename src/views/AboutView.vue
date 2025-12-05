<template>
  <div class="about">
    <h1>This is an about page</h1>
    {{ data.name }}
    <br> {{ name }}
    <br> {{ getUserName }}
    <br> {{ wallet }}
    <button type="button" @click="updataName">點我</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia' // Options API
import userStore from '@/stores/counter';

export default {

  data() {
    return {
      data: [],
    }
  },
  computed: { //pinia
    // 參數1.store
    // 參數2.要帶入的state或getter
    ...mapState(userStore, ['name', 'getUserName', 'wallet'])
  },
  mounted() { // 引用環境變數
    // console.log(import.meta.env.VITE_TEXT)
    const url = import.meta.env.VITE_PATH // 引用環境變數
    this.$http.get(url)
      .then(res => {
        // console.log(res.data.results[0]);
        this.data = res.data.results[0]; //賦值 回傳檔 給 data
        // console.log(this.data)
      })
  },
  methods: {
    ...mapActions(userStore, ['updataName'])
  }
}
</script>
