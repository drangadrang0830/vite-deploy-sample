//選項式API寫法
import { defineStore } from 'pinia'
import store from './piniaProduct'

export default defineStore('Cart', {
  state: () => ({
    cart: []
  }),
  actions: {
    //加入購物車函式
    addCart(productId, qty = 1) {
      // 取得已經有購物車的項目
      // 先判斷是否已有重複的productId
      const currentCart = this.cart.find((item) => item.productId === productId)
      if (currentCart) {
        //若是(真值)，則數量+1
        currentCart.qty++
      } else {
        // 將新資料推入購物車
        this.cart.push({
          //紀錄加入時間標記
          id: new Date().getTime(),
          //商品編號
          productId,
          //商品數量
          qty
        });
      }
      // console.log(this.cart)
    },
    // 移除購物車項目 函式
    removeCartItem(id) {
      const index = this.cart.findIndex((item) => item.id === id);
      this.cart.splice(index, 1);
    },
    // 變更購物車項目數量 函式
    changeCaryQty(id, e) {
      console.log(id, e.target.value);
      const currentCart = this.cart.find((item) => item.id === id)
      //                轉數字也可以 e.target.value *1  
      currentCart.qty = parseInt(e.target.value)
    }
  },
  getters: {
    //購物車列表 函式
    cartList: ({ cart }) => {
      //1.整合產品資訊彙整成完整的列表
      //解構取出值
      // 解構 產品列表
      const { products } = store();
      //購物車每項都要操作
      const carts = cart.map(item => {
        //賦值 逐筆 尋找第一個 產品列表中id等於 購物車該項productId的 給 產品變數
        const product = products.find((product) => product.id === item.productId)
        // console.log('相同的', product);
        //回傳為carts物件
        return {
          ...item,
          product,
          //2.計算小計金額
          subtotal: product.price * item.qty
        }
      })
      // console.log(carts);

      //3.計算總金額
      //累計 carts內的subtotal屬性
      const total = carts.reduce((o, n) => o + n.subtotal, 0)
      // console.log(total);

      //回傳結果與總金額
      return {
        carts, // 列表(陣列)
        total, // 總金額
      };
    },
  },
})
