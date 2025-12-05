import axios from 'axios';
import { defineStore } from 'pinia';
// import statusStore from './statusStore';

// const status = statusStore();

export default defineStore('productStore', {
  state: () => ({  //產品資料
    products: [],
  }),
  getters: { // 計算操作
    // 排序 由小到大 函式
    sortProducts: (state) => state.products.sort((a, b) => a.price - b.price),
  },
  actions: { //方法
    // 連線取得資料 函式
    getProducts() {
      // 使用環境變數
      const url = `${import.meta.env.VITE_APP_API}/api/${import.meta.env.VITE_APP_PATH}/products/all`;
      //讀取前 status狀態屬性預設為真 避免干擾
      // status.isLoading = true;
      axios.get(url).then((response) => {
        // actions區域取用state區域資料可用this
        this.products = response.data.products;
        console.log('products:', response);
        //讀取後 status狀態屬性恢復為假
        // status.isLoading = false;
      });
    },
  },
});
