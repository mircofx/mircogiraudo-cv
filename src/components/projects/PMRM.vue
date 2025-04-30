<!-- src/components/PortfolioMarketRiskMonitor.vue -->
<template>

  <div class="project-details">
    <h1>Portfolio Market Risk Monitor</h1>
    <p>This project monitors banking portfolios and calculates rate risk and sensitivity.</p>
    <!-- More details about the project -->
  </div>

  <!-- Project Description -->
  <p class="project-description">
    This project is about <strong>PORCO</strong>. It’s built using Vue.js and includes detailed information about the project's objectives, achievements, and the technologies used.
  </p>

  <!-- Technologies Used -->
  <h3>Technologies Used</h3>
  <ul class="tech-list">
    <li v-for="(tech, index) in technologies" :key="index">{{ tech }}</li>
  </ul>

  <!-- Project Images or Demo Link -->
  <div class="project-media">
    <h3>Project Media</h3>
    <img v-if="projectImage" :src="projectImage" alt="Project Image" class="project-image" />
    <a v-if="projectLink" :href="projectLink" class="project-link" target="_blank">Live Demo</a>
  </div>

</template>

<script setup>
  // Here, we mock a project object for demonstration purposes.
  const projectDetails = {
    "Portfolio Market Risk Monitor": {
      description: "Developed a proprietary rate risk and sensitivity monitoring program for Banking portfolios.",
      technologies: ["Vue.js", "Tailwind CSS", "Node.js", "Express"],
      image: "/images/portfolio-market-risk.jpg", // Make sure you have the image file
      link: "https://github.com/your-github/repository-link" // GitHub link or live demo
    }
  };

  // Destructure project properties
  const { description = '', technologies = [], image = '', link = '' } = projectDetails;
</script>

<style>
  html, body {
    background-color: black;
    color: white;
    margin: 0;
    padding: 0;
    height: 100%;
  }

  .project-details {
    padding: 70px;
    margin: 0 auto;
    font-family: 'Arial', sans-serif;
  }

</style>
