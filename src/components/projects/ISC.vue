<!-- src/components/projects/ISC.vue -->
<template>
  <div class="project-details">
    <h1 class="project-title">Iccrea Spread Curves</h1>
    <p class="project-subtitle">Tool for yield curves generation</p>
  </div>

  <p class="project-description">
    Iccrea Spread Curve is a bespoke solution developed to automate and enhance the process of constructing institutional yield curves based on Italian government benchmarks, in full compliance with Group financial policies.
    <br>The application serves a strategic role in streamlining internal valuation processes and ensuring consistency across financial operations.
    <br><br>
    The tool was engineered to automate the periodic calculation of credit spreads used in generating the Group's institutional curves — GBI, GBII, GBIS, GBC, GBCS, and GBCAT — dramatically reducing the time and manual effort previously required for this task.
    <br>
    Key functionalities include:
    <ul>
      <li>Benchmark-Based Curve Construction: Calculates institutional yield curves using spreads derived from government benchmarks, ensuring accurate and policy-compliant outputs.</li>
      <li>Daily Automated Execution: Runs as a scheduled service on a remote server, producing:</li>
      <li>A Word report for BCCs to support scenario-based curve shifts.</li>
      <li>A PDF report tracking the historical evolution of spreads for the Head of Group Finance.</li>
      <li>System Integration: Generates mktimp files for seamless integration into Summit 6.3 (Finastra), directly supporting interest rate model calibration and pricing workflows.</li>
      <li>Spread Analysis Workflow:
        <ul>
          <li>Automatically selects the appropriate AT1 yield data for a given input file.</li>
          <li>Produces dual-format output tables for Summit 5.6 and 6.2 environments.</li>
          <li>Generates Excel outputs: one formatted for delivery, the other mirroring the application's internal logic to allow for transparency and manual validation.</li>
        </ul>
      </li>
      <li>Automated Reporting: Composes and sends signed emails with relevant attachments to the responsible departments.</li>
      <li>Backtesting Tools: Supports validation of historical analyses—both manual and macro-based—to ensure reliability and alignment with current methodologies.</li>
    </ul>
  </p>
  <br>

  <p class="project-description">
    This tool has become a critical asset in the Group's valuation infrastructure, supporting front office, risk, and finance divisions with fast, auditable, and policy-aligned yield curve generation.
  </p>
  <br>

  <h3>Statistics and Benchmarks</h3>
  <ul class="tech-list">
    <li>Lines of code: <strong>5414</strong></li>
    <li>
      Performances: <strong>76 seconds</strong> to calculate curves and create:
      <ul>
        <li>one fully fledged PDF for Price Offering with embedded and password protected Excel worksheet</li>
        <li>one worksheet for scenario simulations</li>
        <li>one worksheet for data storage and user consultation</li>
        <li>two automatic emails with embedded tables and PDFs</li>
        <li>one .mktimp file for Summit 6.3 integration</li>
      </ul>
    </li>
  </ul>
  <br>

  <h3>Technologies Used</h3>
  <ul class="tech-list">
    <li v-for="(tech, index) in technologies" :key="index">{{ tech }}</li>
  </ul>

  <div class="project-media">
    <h3>Project Media</h3>
    <img v-if="image" :src="image" alt="Project Image" class="full-width-image" style="max-width: 1200px;" />
    <a v-if="link" :href="link" class="project-link" target="_blank">Live Demo</a>
  </div>
</template>

<script setup>
  import iscImage from '@/assets/projects/ISC.jpg'

  const projectDetails = {
    'Iccrea Spread Curves': {
      technologies: ['Outlook/Excel/Word Interop', 'PDF', 'C#', 'HTML'],
      image: iscImage,
      link: 'https://github.com/your-github/repository-link'
    }
  }

  const { technologies, image, link } = projectDetails['Iccrea Spread Curves']
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
