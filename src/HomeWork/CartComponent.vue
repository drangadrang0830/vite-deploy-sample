<template>
  <div>
    <!-- 購物車 -->
    <div class="bg-light p-4 my-4">
      <!-- 當購物車長度為0的時候開啟 -->
      <div v-if="!cart.cartList.carts.length">購物車沒有任何品項</div>
      <table class="table align-middle" v-else>
        <tbody>
          <tr v-for="item in cart.cartList.carts" :key="item.id">
            <td width="100">
              <!-- 封存<i class="fas fa-times"></i> -->
              <a href="#" class="text-dark fw-bold p-4" @click.prevent="cart.removeCartItem(item.id)"><i
                  class="bi bi-x-lg bold-icon"></i></a>
            </td>
            <td width="100">
              <img :src="item.product.imageUrl" class="table-image h-100" alt="" />
            </td>
            <td>{{ item.product.title }}</td>
            <td width="200">
              <select name="" id="" class="form-select" :value="item.qty" ru83>
                <!--                      ↓從1~20依序填入 -->
                <option :value="n" v-for="n in 20" :key="n">{{ n }}</option>
              </select>
            </td>
            <td width="200" class="text-end">$ {{ item.subtotal }}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="5" class="text-end">總金額 NT$ {{ cart.cartList.total }}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>

<style scoped>
.table-image {
  width: 75px;
  height: 75px;
  object-fit: cover;
}

.bold-icon {
  -webkit-text-stroke: 2px currentColor;
}
</style>

<script setup>
import store from '../stores/piniaCart'

const cart = store();
</script>