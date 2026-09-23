<!-- src/components/projects/PMRM.vue -->
<template>
  <div class="project-details">
    <h1 class="project-title">Portfolio Market Risk Monitor</h1>
    <p class="project-subtitle">The official interest rate risk monitor for Iccrea Bank S.p.A.</p>
  </div>

  <p class="project-description">
    <img v-if="image" :src="image" alt="Project Image" class="project-image" style="max-width: 90%; padding-left: 10%;" />
    <br><br>
    Developed the official interest rate risk monitoring tool for Front Office operators. The tool is used daily to oversee risk exposure across multiple portfolios (Banking, HTC, HTCS) and derivative products. With realtime data feed from Bloomberg, users can monitor price movements for bonds, and get updated PnL metrics.
    <br>
    All the data are collected and securely stored in encrypted database to allows historical tracking.
    <div><br></div>
    The suite is structure into two core modules:
    <ul class="tech-list">
      <li>Risk Sensitivities</li>
      <li>Derivatives</li>
    </ul>
  </p>

  <p class="project-description">
    PMRM is a comprehensive suite developed to monitor and analyze interest rate risk sensitivity across the Group's banking book portfolios, including HTC, HTCS, and Banking Book classifications.
    <br>It is primarily used by Group Treasury and Risk Management functions to support daily operations, risk oversight, and reporting to executive bodies.
    <br><br>
    The platform features a highly customizable graphical interface, allowing advanced window docking, zooming, and bucket modification. All views are fully exportable in both Excel and CSV formats.
    <br><br>
    <h3 style="text-align:center; font-weight:bold;">Core Features</h3>

    <h5 style="padding-top:10px; padding-left:20px;">Risk Decomposition by Portfolio and Asset Type</h5>
    From the homepage, users can access a full breakdown of IR01, CR01, and IL01 sensitivities by portfolio (HTC, HTCS, Banking) and by risk type (corporate, financial, government – both Italian and foreign, and interest rate).
    <br>Each bucket displays contributions by curve and tenor, allowing granular insight within defined time ranges.

    <h5 style="padding-top:10px; padding-left:20px;">Multi-Currency Risk Metrics</h5>
    Risk metrics are available in EUR, USD, and GBP, offering a complete view of cross-currency exposure.

    <h5 style="padding-top:10px; padding-left:20px;">Market Details Module</h5>
    <br>
    <section class="text-with-image">
      <img :src="marketdetails" alt="Monitors" class="side-image" />
      <div class="text-content">Enables access to enriched curve-level information such as Bloomberg tickers, real-time ratings, and other market reference data.</div>
    </section>

    <h5 style="padding-top:10px; padding-left:20px;">Portfolio Detail Module</h5>
    <br>
    <section class="text-with-image">
      <img :src="portfoliodetails" alt="Monitors" class="side-image" />
      <div class="text-content">
        The Portfolio Detail module offers a comprehensive overview of all securities held within a selected portfolio, including associated hedging instruments.
        <br>It provides detailed information on notional amounts, index references, and Bloomberg codes, facilitating in-depth analysis and effective risk management.
      </div>
    </section>
    <br><br>

    <h3 style="text-align:center; font-weight:bold;">Interactive Visualization Engine</h3>
    PMRM includes a robust charting engine for interactive, portfolio-specific visualizations:

    <h5 style="padding-top:50px; padding-left:20px;">Contribution Histograms</h5>
    <section class="text-with-image">
      <div class="text-content">
        Users can visualize the distribution of IR, CR, and IL contributions by bucket, curve, or tenor. Filtering options allow focus on unidirectional exposures or single curves, enhancing risk attribution and cluster analysis.
      </div>
      <div class="image-group">
        <img :src="chart1" alt="Monitors" class="half-width-image" />
        <img :src="chart2" alt="Monitors" class="half-width-image" />
      </div>
    </section>

    <h5 style="padding-top:50px; padding-left:20px;">Historical Trends</h5>
    <section class="text-with-image">
      <div class="image-group">
        <img :src="chart3" alt="Monitors" class="half-width-image" />
        <img :src="chart4" alt="Monitors" class="half-width-image" />
      </div>
      <div class="text-content">
        Line charts display the evolution of risk sensitivities over time, highlighting major movements and separating market-driven effects from internal operations such as bond purchases, sales, or hedging transactions.
      </div>
    </section>
    <br><br><br><br>

    <h3 style="text-align:center; font-weight:bold;">Advanced Analytics</h3>
    <h5 style="padding-top:10px; padding-left:10px;">Detailed Analysis Tools</h5>
    <div>The Detailed Analysis module offers tools for reconstructing and investigating daily sensitivity shifts.</div>

    <h6 style="padding-top:20px; padding-left:20px; font-style:italic; font-weight:bold;">ISIN-Level Drilldown</h6>
    <section class="text-with-image">
      <img :src="isindetails" alt="Monitors" class="side-image" />
      <div class="text-content">
        ISIN Details displays breakdowns by ISIN across risk types (e.g., CMS, VAR, INFLATION, FIXED). It supports advanced searches by term or ISIN code for in-depth portfolio inspection.
      </div>
    </section>

    <h6 style="padding-top:20px; padding-left:20px; font-style:italic; font-weight:bold;">Compare Functionality</h6>
    <section class="text-with-image">
      <div class="text-content">
        Widely used for daily change detection, the Compare module enables users to track sensitivity movements across two dates, either by bucket, curve, or term.
      </div>
      <img :src="compare" alt="Monitors" class="side-image" />
    </section>
    <br>

    <section class="text-with-image">
      <img :src="compare2" alt="Monitors" class="half-width-image" />
      <div class="text-content">
        Clicking on a node reveals the list of ISINs contributing to that specific factor. A further drilldown shows the complete impact of a selected ISIN on the entire portfolio over both dates, enabling full traceability of any shift.
      </div>
    </section>

    <h5 style="padding-top:50px; padding-left:20px;">Traceability of Risk Movements</h5>
    <div>
      A sensitivity jump can be analyzed from macro (term) to micro (ISIN) level, and ultimately traced back to individual trading activity (buy/sell) via the chart module.
    </div>
    <br><br>

    <h3 style="text-align:center; font-weight:bold;">Automated Reporting</h3>
    PMRM includes an automated reporting feature that compiles a comprehensive risk summary used during Board of Directors' meetings to assess and communicate the Group's interest rate risk exposure.
  </p>
  <br><br><br><br>

  <h3>Technologies Used</h3>
  <ul class="tech-list">
    <li v-for="(tech, index) in technologies" :key="index">{{ tech }}</li>
  </ul>
  <br>

  <h3>Statistics and Benchmarks</h3>
  <ul class="tech-list">
    <li>Lines of code: <strong>70,575</strong></li>
    <li>Users: <strong>45</strong></li>
    <li>Monthly usage: <strong>&gt; 300 hours</strong></li>
  </ul>
  <br>
</template>

<script setup>
  import pmrm1 from '@/assets/projects/pmrm1.jpg'
  import marketdetails from '@/assets/projects/marketdetails.jpg'
  import portfoliodetails from '@/assets/projects/portfoliodetails.jpg'
  import chart1 from '@/assets/projects/chart1.jpg'
  import chart2 from '@/assets/projects/chart2.jpg'
  import chart3 from '@/assets/projects/chart3.jpg'
  import chart4 from '@/assets/projects/chart4.jpg'
  import isindetails from '@/assets/projects/isindetails.jpg'
  import compare from '@/assets/projects/compare.jpg'
  import compare2 from '@/assets/projects/compare2.jpg'

  const projectDetails = {
    PMRM: {
      technologies: ['SQL Cypher', 'XML', 'Excel/Word/PDF Interop', 'Multi-threading', 'Bloomberg SDK', 'Dapper', 'JSON', 'C++'],
      image: pmrm1
    }
  }

  const { technologies, image } = projectDetails.PMRM
</script>

<style>
  html, body {
    background-color: black;
    color: white;
    margin: 0;
    padding: 0;
    height: 100%;
  }

  .text-with-image {
    display: flex;
    padding-left: 20px;
    align-items: flex-start;
    justify-content: space-between;
    gap: 2rem;
    margin-bottom: 2rem;
    flex-wrap: wrap;
  }

  .text-content {
    padding-top: 100px;
    flex: 1 1 30%;
    min-width: 200px;
  }

  .side-image {
    flex: 1 1 65%;
    max-width: 65%;
    max-height: 400px;
    object-fit: contain;
    border-radius: 12px;
  }

  .image-group {
    display: flex;
    flex-direction: column;
    flex: 1 1 65%;
    gap: 1rem;
    justify-content: flex-start;
  }

  .half-width-image {
    display: block;
    width: 65%;
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
