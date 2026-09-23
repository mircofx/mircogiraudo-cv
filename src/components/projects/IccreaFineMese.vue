<!-- src/components/projects/IccreaFineMese.vue -->
<template>
  <div class="project-details">
    <h1 class="project-title">Iccrea Fine Mese</h1>
    <p class="project-subtitle">Simplify and speed up data collection and delivery during periodical portfolio valuation</p>
  </div>

  <p class="project-description">
    Iccrea Fine Mese is an automated reporting and data aggregation tool designed to support the monthly portfolio valuation process for mark-to-model assets. Its core function is to collect valuation data from diverse internal sources (including ABS, MREL, bonds, defaulted instruments, investment funds, AT1, and subordinated debt) ensuring complete and accurate pricing coverage.
    <br><br>
    The system integrates multiple inputs, consolidates price data and valuation deltas, and intelligently routes customized reports to the appropriate business units (e.g., Risk Management, Treasury, or Front Office), depending on asset type and internal responsibilities.
    <br><br>
    Iccrea Fine Mese performs the following key tasks:
    <ul class="tech-list">
      <li>Aggregates pricing and valuation data from multiple spreadsheets and valuation systems</li>
      <li>Converts and standardizes outputs to CSV format for internal use that are securely uploaded into Sterling IBM B2B</li>
      <li>Stores formatted Excel files with controlled structures and naming conventions</li>
      <li>Automatically generates and dispatches emails including signature, recipient lists, and descriptive bodies tailored for each business line</li>
    </ul>
    <div class="project-description">By automating what was once a time-intensive and manual process, Fine Mese reduces operational risk and ensures consistent, timely delivery of critical valuation insights at month-end.</div>
  </p>

  <h3>Technologies Used</h3>
  <ul class="tech-list">
    <li v-for="(tech, index) in technologies" :key="index">{{ tech }}</li>
  </ul>

  <h3>Statistics and Benchmarks</h3>
  <ul class="tech-list">
    <li>Lines of code: <strong>3168</strong></li>
    <li>Users: <strong>MAQ team</strong></li>
    <li>Time saved: <strong>&gt;95% =&gt; from 15-20 minutes (manual procedure) to &lt; 4 seconds</strong></li>
  </ul>

  <div class="project-media">
    <h3>Project Media</h3>
    <img v-if="image" :src="image" alt="Project Image" class="project-image" style="max-width: 90%; padding-left: 10%;" />
    <br>
    <a v-if="link" :href="link" class="project-link" target="_blank">Live Demo</a>
  </div>
</template>

<script setup>
  import finemese from '@/assets/projects/finemese.jpg'

  const projectDetails = {
    'Iccrea Fine Mese': {
      technologies: ['Outlook Interop', 'HTML', 'C#', 'Excel Interop'],
      image: finemese,
      link: 'https://github.com/your-github/repository-link'
    }
  }

  const { technologies, image, link } = projectDetails['Iccrea Fine Mese']
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
    font-size: 1.2rem;
    line-height: 1.7;
    margin-bottom: 1.5rem;
    color: #ddd;
  }

  .project-details {
    padding: 70px 20px;
    margin: 0 auto;
    font-family: 'Arial', sans-serif;
    max-width: 1200px;
    width: 100%;
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

  .tech-list {
    margin-left: 25px;
    list-style-type: disc;
    padding-left: 2px;
  }

  .tech-list li {
    font-size: 1rem;
    color: #fff;
    margin-bottom: 0.2rem;
    font-style: oblique;
  }
</style>
