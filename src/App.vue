<template>
  <Navbar />
  <router-view /> <!-- This will render the page based on the current route -->
</template>

<script setup>
  import Navbar from './components/Navbar.vue'
</script>

<style>
  body {
    margin: 0;
    font-family: Arial, sans-serif;
  }

  #app {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100vh;
    overflow-y: auto;
    font-family: 'Poppins', sans-serif;
  }
</style>
