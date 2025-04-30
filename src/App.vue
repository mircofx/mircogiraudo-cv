<template>
  <div id="app">
    <Navbar />
    <router-view /> <!-- This will render the page based on the current route -->
  </div>
</template>

<script setup>
  import Navbar from './components/Navbar.vue'
</script>

<style scoped>
  header {
    line-height: 1.5;
  }

  .logo {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
</style>
