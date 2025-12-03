// import { ref, computed } from 'vue' // Composition API 風格
import { defineStore } from 'pinia'

export default defineStore('user-store', {  // Options API 風格
  // 類似data
  state: () => ({
    name: '范智聖',
    wallet: 300,
  }),

  // 類似computed
  getters: {
    getUserName: (state) => `我的名字是 ${state.name}`
  },

  // 類似methods
  actions: {
    updataName() {
      this.name = '傻瓜'
    }
  },
})

// export const useCounterStore = defineStore('counter', () => { // Composition API 風格
// const count = ref({
//     name:'范智聖',
//     wallet: 300,
//   })
// const doubleCount = computed(() => count.value * 2)
//   function increment() {
//     count.value++
//   }

//   return { count, doubleCount, increment }
// })
