<template>
  <div>
    <!-- 商品區 -->
    <div class="row row-cols-md-3 row-cols-2 my-3 g-4">
      <div class="col" v-for="product in storeProduct.sortProducts" :key="product.id">
        <div class="card">
          <img :src="product.imageUrl" class="card-img-top" alt="..." />
          <div class="card-body">
            <h6 class="card-title text-danger">
              {{ product.title }}
              <span class="float-end text-success">${{ product.price }}</span>
            </h6>
            <a href="#" class="btn btn-outline-primary w-100" @click.prevent="storeCart.addCart(product.id)">買買買!</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- <script>//選項式API
//引入商店
import piniaProduct from '../stores/piniaProduct';
import { mapState } from 'pinia';

export default {
  // 元件名稱 (可選)
  // name: 'ProductComponent',
  computed: {
    // 展開 mapState 的結果，使其成為此元件的計算屬性
    ...mapState(piniaProduct, ['sortProducts'])
  }
};
</script> -->

<script setup>//組合式API
// 引入商店
import piniaProduct from '../stores/piniaProduct';
import store from '../stores/piniaCart'

// 例化您的 Store
const storeProduct = piniaProduct();
const storeCart = store();


</script>

<style scoped>
.card-img-top {
  object-fit: cover;
  height: 200px;
}
</style>