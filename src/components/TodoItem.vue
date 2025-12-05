<template>
  <li> {{ todo.text }} </li>
</template>

<script setup>
defineProps({
  todo: Object
})
</script>