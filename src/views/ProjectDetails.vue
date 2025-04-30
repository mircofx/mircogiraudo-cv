<template>
  <div class="project-details">
    <component :is="currentProjectComponent" />
  </div>
  <div class="project-details">
    <!-- Project Title -->
    <!--<h1 class="project-title">{{ projectTitle }}</h1>-->

    <!-- Optional Back Button -->
    <div class="back-button">
      <router-link to="/resume" class="back-btn">Back to Projects</router-link>
    </div>
  </div>
</template>

<script setup>
  import { ref, defineAsyncComponent, onMounted, computed } from 'vue';
  import { useRoute } from 'vue-router';

  // Access the projectId from the route
  const route = useRoute();
  const projectId = computed(() => decodeURIComponent(route.params.projectId));

  // Dynamically load the correct component based on the projectId
  const projectComponents = {
    'Iccrea FineMese': defineAsyncComponent(() => import('../components/projects/IccreaFineMese.vue')),
    'Portfolio Market Risk Monitor': defineAsyncComponent(() => import('../components/projects/PMRM.vue')),
    'This website': defineAsyncComponent(() => import('../components/projects/Website.vue')),
    // Add more project mappings here
  };

  const currentProjectComponent = computed(() => {
    return projectComponents[projectId.value] || defineAsyncComponent(() => import('../components/projects/ProjectNotFound.vue'))
  })
</script>

<style scoped>
  html, body {
    background-color: black;
    color: white;
    margin: 0;
    padding: 0;
    height: 100%;
  }

  .project-details {
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
    font-family: 'Arial', sans-serif;
  }

  .project-title {
    font-size: 2rem;
    color: #f39c12;
    margin-bottom: 1rem;
  }

  .project-description {
    font-size: 1.1rem;
    color: #f5b550;
    line-height: 1.5;
  }

  .tech-list {
    list-style-type: none;
    padding: 0;
  }

    .tech-list li {
      font-size: 1rem;
      color: white;
      margin-bottom: 0.5rem;
    }

  .project-media {
    margin-top: 2rem;
  }

  .project-image {
    max-width: 100%;
    height: auto;
    margin-bottom: 1rem;
  }

  .project-link {
    display: inline-block;
    margin-top: 10px;
    color: #f39c12;
    text-decoration: none;
    font-weight: bold;
  }

    .project-link:hover {
      color: #ffcc00;
    }

  .back-button {
    margin-top: 20px;
    text-align: center;
  }

  .back-btn {
    padding: 10px 20px;
    background-color: #f39c12;
    color: white;
    text-decoration: none;
    font-weight: bold;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }

    .back-btn:hover {
      background-color: #ffcc00;
    }
</style>
