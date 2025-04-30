<template>
  <div class="project-wrapper">
    <!-- Title -->
    <transition name="fade-slide">
      <div class="project-details">
        <h1 class="title">My Personal Website</h1>
        <p class="subtitle">This one.</p>
      </div>
    </transition>

    <!-- Description -->
    <transition name="fade-slide" appear>
      <div class="description-section">
        <p class="project-description">
          The website is meant to be my personal profile on the web, accessible by everyone with updated information about current and past projects.
        </p>

        <p class="project-details-text"><strong>What you'll find here:</strong></p>
        <ul class="project-list">
          <li>📄 My resume</li>
          <li>💼 Projects from my work experience</li>
          <li>🛠️ Personal projects</li>
          <li>🌐 GitHub contributions</li>
        </ul>

        <p class="project-note">
          Built with <span class="highlight">Vue.js</span> and designed for clarity, performance, and elegance.
        </p>
      </div>
    </transition>

    <!-- Tech Logos -->
    <transition name="fade-slide" appear>
      <div class="tech-section">
        <h3 class="tech-title">Technologies Used</h3>
        <div class="tech-logo-list">
          <img v-for="(logo, index) in techLogos"
               :key="index"
               :src="logo.src"
               :alt="logo.alt"
               class="tech-logo" />
        </div>
      </div>
    </transition>

    <!-- GitHub Link -->
    <transition name="fade-slide" appear>
      <div class="github-section">
        <a href="https://github.com/mircofx"
           target="_blank"
           rel="noopener"
           class="github-link">
          <img src="/logos/github.png" alt="GitHub" class="github-logo" />
          <span>View on GitHub</span>
        </a>
      </div>
    </transition>
  </div>
</template>

<script setup>
  const techLogos = [
    { src: '/logos/vue.png', alt: 'Vue.js' },
    { src: '/logos/bootstrap.png', alt: 'Bootstrap 5' },
    { src: '/logos/js.png', alt: 'Typed.js' },
    { src: '/logos/js.png', alt: 'Vue Router' },
    { src: '/logos/css.png', alt: 'Scoped CSS' },
  ]
</script>

<style scoped>
  html, body {
    background-color: black;
    color: white;
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
  }

  .project-wrapper {
    background-color: black;
    color: white;
    padding: 4rem 2rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    max-width: 960px;
    margin: auto;
    min-height: 100vh;
  }

  .title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  .subtitle {
    font-size: 1.2rem;
    color: #aaa;
    margin-bottom: 2rem;
  }

  .project-description {
    font-size: 1.1rem;
    line-height: 1.7;
    margin-bottom: 1.5rem;
    color: #ddd;
  }

  .project-details-text {
    font-weight: 600;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }

  .project-list {
    list-style: none;
    padding-left: 0;
    margin-bottom: 2rem;
  }

    .project-list li {
      margin-bottom: 0.5rem;
      font-size: 1rem;
      color: #eee;
    }

  .project-note {
    font-style: italic;
    color: #bbb;
    font-size: 1rem;
  }

  .highlight {
    color: #f39c12;
    font-weight: bold;
  }

  .tech-section {
    margin-top: 3rem;
    text-align: center;
  }

  .tech-title {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
  }

  .tech-logo-list {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    flex-wrap: wrap;
  }

  .tech-logo {
    width: 50px;
    height: auto;
    filter: grayscale(100%) brightness(1.2);
    transition: transform 0.3s ease;
  }

    .tech-logo:hover {
      transform: scale(1.15);
      filter: none;
    }

  /* GitHub Link */
  .github-section {
    margin-top: 3rem;
    text-align: center;
  }

  .github-link {
    color: white;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.1rem;
    border: 1px solid #fff;
    padding: 0.6rem 1.2rem;
    border-radius: 6px;
    transition: background 0.3s, color 0.3s;
  }

    .github-link:hover {
      background-color: white;
      color: black;
    }

  .github-logo {
    width: 20px;
  }

  /* Animations */
  .fade-slide-enter-active,
  .fade-slide-leave-active {
    transition: all 0.5s ease;
  }

  .fade-slide-enter-from,
  .fade-slide-leave-to {
    opacity: 0;
    transform: translateY(20px);
  }
</style>
