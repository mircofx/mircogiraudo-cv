<!-- src/components/projects/PMRMLinux.vue -->
<template>
  <div class="project-details">
    <h1 class="project-title">PMRM Linux service</h1>
    <p class="project-subtitle">Sensitivity service for Iccrea Group.</p>
  </div>

  <p class="project-description">
    Designed and implemented a high-performance, multi-threaded Linux daemon for large-scale computation of risk sensitivities across 203 portfolios spanning 105 affiliated banks, processing approximately 40,000 risk factors.
    <br>The engine is optimized for low-latency and high-throughput execution, achieving ~119,000 computed rows in 13 seconds under production loads.
    <br><br>
    Developed using C# and POSIX threads on Linux, it leverages parallelism and memory-efficient data structures to scale across CPUs and large datasets.
    <br>
    Key features include:
    <ul>
      <li>Rule-based portfolio construction supporting trading book, HTC, HTCS, and banking book assets, with logic for delegated vs. non-delegated management based on group directives</li>
      <li>Dynamic scheduling of valuation tasks and allocation of computational resources based on portfolio size and factor granularity</li>
      <li>Pluggable valuation mapping for multiple risk factor identification per portfolio</li>
      <li>Structured output in CSV, designed for integration into downstream systems</li>
      <li>Robust automation, including systemd-based orchestration, CRON-triggered execution, retry logic, and full audit trail logging</li>
      <li>Delta computation mode enabling efficient revaluation of only the impacted positions following market or portfolio changes</li>
    </ul>
  </p>
  <br>

  <p class="project-description">
    The daemon is engineered for unattended, daily execution and is fully integrated within the group's broader risk infrastructure.
  </p>
  <br>

  <h3>Technologies Used</h3>
  <ul class="tech-list">
    <li v-for="(tech, index) in technologies" :key="index">{{ tech }}</li>
  </ul>
  <br>

  <h3>Statistics and Benchmarks</h3>
  <ul>
    <li>Lines of code:</li>
  </ul>
  <br>

  <div class="project-media">
    <h3>Project Media</h3>
    <br>
    <img v-if="image" :src="image" alt="Project Image" class="full-width-image" style="max-width: 1200px;" />
  </div>
</template>

<script setup>
  import linux1 from '@/assets/projects/linux1.jpg'

  const projectDetails = {
    PMRMLinux: {
      technologies: ['Linux', 'Concurrency', 'Excel Interop', 'User automation'],
      image: linux1
    }
  }

  const { technologies, image } = projectDetails.PMRMLinux
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

  .full-width-image {
    display: block;
    width: 100%;
    height: auto;
    margin: 0 auto;
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
