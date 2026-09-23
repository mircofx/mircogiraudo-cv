<!-- src/components/projects/IMR.vue -->
<!--
  NOTE: this page is unfinished on the live site itself — the deployed
  build contains literal "Lorem Ipsum" placeholder text. Reproduced
  faithfully rather than invented; replace with real copy when ready.
-->
<template>
  <div class="project-details">
    <h1 class="project-title">Initial Margin Rebate</h1>
    <p class="project-subtitle">Lorem Ipsum</p>
  </div>

  <p class="project-description">
    Loren Ipsum
    <div><br></div>
  </p>

  <h3>Technologies Used</h3>
  <ul class="tech-list">
    <li v-for="(tech, index) in technologies" :key="index">{{ tech }}</li>
  </ul>

  <div class="project-media">
    <h3>Project Media</h3>
    <img v-if="projectImage" :src="projectImage" alt="Project Image" class="project-image" />
    <a v-if="projectLink" :href="projectLink" class="project-link" target="_blank">Live Demo</a>
  </div>
</template>

<script setup>
  // Placeholder data — matches the deployed site, which also has no
  // technologies/image/link filled in yet for this project.
  const projectDetails = {}
  const { technologies = [] } = projectDetails
  const projectImage = null
  const projectLink = null
</script>

<style>
  html, body {
    background-color: black;
    color: white;
    margin: 0;
    padding: 0;
    height: 100%;
  }

  .project-description {
    font-size: 1.1rem;
    line-height: 1.7;
    margin-bottom: 1.5rem;
    color: #ddd;
  }

  .project-details {
    padding: 70px;
    margin: 0 auto;
    font-family: 'Arial', sans-serif;
  }

  .project-title {
    font-weight: 700;
    font-size: 1.7rem;
    color: #fff;
    text-align: center;
  }

  .project-subtitle {
    color: gray;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    text-align: center;
  }
</style>
