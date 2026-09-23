<template>
  <div class="home-page">
    <div>
      <span ref="typedElement" class="typed-text"></span>
    </div>
    <p class="tagline">Quant Developer · C++ / C# · Risk &amp; Market Data</p>
  </div>
</template>

<script setup>
  import { onMounted, ref } from 'vue'
  import Typed from 'typed.js'

  const typedElement = ref(null)

  onMounted(() => {
    new Typed(typedElement.value, {
      strings: ['Hello!', "I'm Mirco", 'Welcome to my Portfolio!'],
      typeSpeed: 100,
      backSpeed: 30,
      backDelay: 1000,  // Delay before starting to erase
      loop: true,
      showCursor: true, // Optional, shows the cursor while typing
    })
  })
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .home-page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: black;
    font-family: 'Poppins', sans-serif;
    color: white;
    overflow: hidden;
  }

  .typed-text {
    font-size: 2rem;
    letter-spacing: 2px;
    text-align: center;
  }

  .tagline {
    margin-top: 1.5rem;
    font-size: 1rem;
    letter-spacing: 3px;
    color: gray;
    text-align: center;
  }

  .typed-cursor {
    font-weight: bold;
    color: white;
    font-size: 2rem;
  }
</style>
