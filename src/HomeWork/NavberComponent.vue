<template>
  <div>
    <!-- 導覽列 -->
    <nav class="navbar bg-light">
      <div class="container-fluid">
        <span class="navbar-brand" href="#">臭臭餅乾店</span>
        <button type="button" class="btn nav-link">
          購物車
          <span class="badge rounded-pill bg-danger text-white">{{ cart.cartList.carts.length }}</span>
        </button>
      </div>
    </nav>
  </div>
</template>

<script setup>
import store from '../stores/piniaCart'

const cart = store();
</script>