<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<script>
import { mapState } from 'pinia' // Options API
import userStore from '@/stores/counter';

export default {
  computed: { //pinia
    // 參數1.store
    // 參數2.要帶入的state或getter
    ...mapState(userStore, ['name'])
  }
}
</script>

<template>
  <main>
    {{ name }}
    <TheWelcome />
  </main>
</template>
