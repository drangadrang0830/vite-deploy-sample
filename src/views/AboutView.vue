<template>
  <div class="about">
    <h1>This is an about page</h1>
    {{ data }}
  </div>

</template>

<script>
export default {
  data() {
    return {
      data: [],
    }
  },
  mounted() { // 引用環境變數
    console.log(import.meta.env.VITE_TEXT)
    const url = import.meta.env.VITE_PATH // 引用環境變數
    this.$http.get(url)
      .then(res => {
        // console.log(res.data.results[0]);
        this.data = res.data.results[0]; //賦值 回傳檔 給 data
        // console.log(this.data)
      })
  },
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
