<template>
  <div class="home-page">
    <span ref="typedElement" class="display-4 text-white"></span>
  </div>
</template>

<script setup>
  import { onMounted, ref } from 'vue'
  import Typed from 'typed.js'

  const typedElement = ref(null)

  onMounted(() => {
    new Typed(typedElement.value, {
      strings: ['Hello!', 'Welcome to my Portfolio!'],
      typeSpeed: 100,
      backSpeed: 30,
      backDelay: 1000,  // Delay before starting to erase
      backSpeed: 50,    // Speed at which the text is erased
      startDelay: 500,  // Delay before typing starts
      loop: true,
      showCursor: true, // Optional, shows the cursor while typing
    })
  })
</script>

<style scoped>
  .display-4 {
    font-size: 3rem;
    color: #333;
    letter-spacing: 2px; /* Optional, adds spacing between letters */
  }
</style>

<style scoped>
  .home-page {
    padding-top: 50px; /* Add space for fixed navbar */
    padding-left: 50px;
    background-color: black; /* Black background */
    color: white; /* White text color */
    height: 100vh; /* Full height */
    display: flex;
    justify-content: left;
    align-items: center;
    font-family: 'Courier New', Courier, monospace; /* Typewriter font */
    overflow: hidden; /* Prevents scrolling */
  }

  /* Optional: Style for the cursor if you're using the typing effect cursor */
  .typed-cursor {
    font-weight: bold;
    color: white; /* Color of the cursor */
    font-size: 3rem;
  }
</style>
