<!-- src/views/Contacts.vue -->
<template>
  <div class="contact-page">
    <div class="typing-container">
      <p class="typing-text" :class="{ typing: cursorVisible }">{{ displayedText }}</p>
    </div>

    <div class="contact-container">
      <h1 class="contact-title">Contact</h1>
      <div class="contact-details">
        <div class="contact-item">
          <strong>Name:</strong> <span>Mirco Giraudo</span>
        </div>
        <div class="contact-item">
          <strong>Location:</strong> <span>Rome, Italy</span><br>
          <span>open to relocate</span>
        </div>
        <div class="contact-item">
          <strong>LinkedIn:</strong>
          <a href="https://linkedin.com/in/mirco-g-bb8b74205/" target="_blank" class="linkedin-link">Mirco Giraudo's LinkedIn</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue'

  const lines = [
    '> Understanding your needs ==>',
    '> Developing a custom solution ==>',
    '> Improving performances :',
    '> - speeding up processes ...',
    '> - reducing data consumption ...',
    '> - improving latency ...',
    '> Solution released .'
  ]

  const displayedText = ref('')
  const cursorVisible = ref(true)
  let lineIndex = 0
  let charIndex = 0

  onMounted(() => {
    setInterval(() => {
      if (charIndex < lines[lineIndex].length) {
        displayedText.value += lines[lineIndex].charAt(charIndex)
        charIndex++
      } else {
        lineIndex++
        if (lineIndex < lines.length) {
          displayedText.value += '\n'
          charIndex = 0
        } else {
          lineIndex = 0
          displayedText.value = ''
          charIndex = 0
        }
      }
    }, 150)
  })
</script>

<style scoped>
  .contact-page {
    background-color: black;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-family: Arial, sans-serif;
    flex-direction: column;
  }

  .contact-container {
    text-align: center;
    padding: 30px;
    border-radius: 8px;
    background-color: #333;
    max-width: 500px;
    width: 100%;
  }

  .contact-title {
    font-size: 2.5rem;
    color: #f39c12;
    margin-bottom: 20px;
    font-family: Consolas;
    font-weight: bolder;
  }

  .contact-details {
    font-size: 1.1rem;
    color: #ddd;
    margin-top: 20px;
  }

  .contact-item {
    margin: 10px 0;
  }

    .contact-item strong {
      color: #f39c12;
    }

  .linkedin-link {
    color: #1e81b0;
    text-decoration: none;
    font-weight: bold;
  }

    .linkedin-link:hover {
      text-decoration: underline;
    }

  .typing-container {
    margin-bottom: 30px;
  }

  .typing-text {
    font-size: 1rem;
    color: gray;
    white-space: pre-line;
    overflow: hidden;
    display: inline-block;
    font-family: Consolas;
    line-height: 1.4;
    border-right: 3px solid #f39c12;
    transition: border-right 0.5s ease-out;
  }

    .typing-text.typing {
      border-right: 1px solid #f39c12;
    }
</style>
