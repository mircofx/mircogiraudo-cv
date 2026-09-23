<!-- src/components/projects/BLABS.vue -->
<template>
  <div class="project-details">
    <h1 class="project-title">Bloomberg ABS automation</h1>
    <p class="project-subtitle">Automatic ABS valuation with BLP and BLAPI.</p>
  </div>

  <img v-if="image" :src="image" alt="Project Image" class="half-width-image" />

  <div class="project-subtitle">BLABS UI</div>
  <br><br>

  <p class="project-description">
    BLABS is a fully automated solution engineered to price Asset-Backed Securities (ABS) issued by Iccrea, combining Bloomberg's BLAPI SDK with intelligent workflow automation to circumvent manual bottlenecks and overcome API limitations.
    <br>
    Designed to operate within the Bloomberg Launchpad environment, BLABS simulates user interactions programmatically, enabling end-to-end automation of complex valuation procedures that traditionally required over 50 manual steps per security.
    <br>
    By orchestrating API calls and interface-level automation in tandem, the tool seamlessly integrates Bloomberg data retrieval with computational logic and reporting.
    <br><br>
    Key Technical Features:
    <ul>
      <li>API Integration with BLAPI SDK: Executes a series of structured queries to retrieve real-time index prices, historical bond data, and security lists (e.g., BTPs), enabling robust and dynamic pricing inputs.</li>
      <li>Launchpad Automation: Simulates interactive workflows within Bloomberg Launchpad to execute security-specific valuation models that are not exposed via API — a key innovation that enables full automation despite inherent limitations in Bloomberg's programmatic access.</li>
      <li>Data Structuring and Storage: Organizes all retrieved and computed data into structured Excel outputs for traceability, auditability, and further analysis. Liquidity vectors, lag inputs, and final ASW values are loaded and stored automatically from and to spreadsheet-based templates and a central database.</li>
      <li>Minimizes human error by replacing manual procedures with deterministic, script-driven automation.</li>
    </ul>
  </p>
  <br><br>

  <h2>Operational Context:</h2>
  <p class="project-description">
    The tool is executed monthly to support the mark-to-model valuation process for structured credit instruments. Its output — which includes key valuation metrics, data snapshots, and audit-ready evidence — is used by multiple teams across the Group. User intervention is only required for the final validation of the calculated Asset Swap Spread (ASW), ensuring confidence in both valuation accuracy and methodological transparency.
    <br>
    With BLABS, Iccrea benefits from a consistent, scalable, and error-resistant framework for ABS pricing, enabling financial teams to focus on validation and oversight rather than repetitive data handling.
  </p>
  <br>

  <h3>Statistics and Benchmarks</h3>
  <ul class="tech-list">
    <li>Lines of code: 2706</li>
    <li>Reduces processing time from 2 hours to just 16 minutes, achieving an 85% improvement in operational efficiency across the 5 actively priced ABS (each composed of 3 tranches).
      <br>(Single ABS pricing time: 3 minutes vs manual 24 minutes)
    </li>
  </ul>
  <br>

  <h3>Technologies Used</h3>
  <ul class="tech-list">
    <li v-for="(tech, index) in technologies" :key="index">{{ tech }}</li>
  </ul>

  <br>
  <div class="project-media">
    <h3>Project Media</h3>
    <br><br>
    <img :src="blabs3" alt="Monitors" class="half-width-image" />
    <div class="project-subtitle">Rendering operational scenario.</div>
  </div>
</template>

<script setup>
  import blabs1 from '@/assets/projects/blabs1.jpg'
  import blabs3 from '@/assets/projects/blabs3.jpg'

  const projectDetails = {
    BLABS: {
      technologies: ['Bloomberg SDK', 'JSON', 'Excel Interop', 'User automation'],
      image: blabs1
    }
  }

  const { technologies, image } = projectDetails.BLABS
</script>

<style>
  html, body {
    background-color: black;
    color: white;
    margin: 0;
    padding: 0;
    height: 100%;
    overflow-y: auto;
  }

  .half-width-image {
    display: block;
    width: 50%;
    height: auto;
    position: center;
    margin: 0 auto;
  }

  .project-description {
    font-size: 1.2rem;
    line-height: 1.7;
    margin-bottom: 1.5rem;
    color: #ddd;
  }

  .project-details {
    padding: 70px;
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
    font-size: 1.2rem;
    color: #fff;
    margin-bottom: 0.5rem;
    font-style: oblique;
  }
</style>
