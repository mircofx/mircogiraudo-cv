<!-- src/components/projects/GestioneSeparata.vue -->
<template>
  <div class="project-details">
    <h1 class="project-title">Gestione Separata Policy Valuation Engine</h1>
    <p class="project-subtitle">Actuarial pricing and revaluation engine for Iccrea Banca (C#/.NET)</p>
  </div>

  <p class="project-description">
    An actuarial pricing and revaluation engine built for Iccrea Banca's BCC cooperative banking group, handling single-premium and multi-tranche/top-up "Gestione Separata" with-profits life policies (BCC Vita and UNIPOL/BCC Diamond conventions) end to end, from inception through every policy anniversary to surrender.
    <br><br>
    Architecture:
    <ul>
      <li>Plugin-based pricing core (IPricingEngine interface): each insurer/product convention (BCC Vita, UNIPOL/BCC Diamond) implements its own engine, so new products onboard without touching the schema</li>
      <li>Day-count and compounding rigor via QLNet across 4 conventions (30/360, Act/360, Act/Act, Act/365F)</li>
      <li>Polymorphic JSON cost-model hierarchy (System.Text.Json) covering premium, redemption, and management-fee structures per product convention</li>
      <li>SQLite-backed valuation store holding the full historical revaluation trail per policy</li>
      <li>Automated bulk revaluation across the entire policy book, reconciling insurer-communicated vs. internally-computed capital and flagging mismatches</li>
      <li>Prices and revalues hundreds of policies in under a minute per batch run, generating bank-branded PDF valuation letters (iText7) as part of the same pipeline</li>
      <li>WinForms front end driving the batch runs</li>
    </ul>
  </p>
  <br>

  <p class="project-description">
    Shipped and iterated over 100+ incremental releases, in production use.
  </p>
  <br>

  <h3>Technologies Used</h3>
  <ul class="tech-list">
    <li v-for="(tech, index) in technologies" :key="index">{{ tech }}</li>
  </ul>
  <br>

  <h3>Statistics and Benchmarks</h3>
  <ul>
    <li>Batch run: <strong>hundreds of policies priced and revalued in under a minute</strong></li>
    <li>Day-count conventions: <strong>4</strong> (30/360, Act/360, Act/Act, Act/365F)</li>
    <li>Releases: <strong>100+</strong>, in production use</li>
  </ul>
  <br>

  <div class="project-media">
    <h3>Project Media</h3>
    <br>
    <img v-if="image" :src="image" alt="Project Image" class="full-width-image" style="max-width: 1200px;" />
  </div>
</template>

<script setup>
  import gestsep1 from '@/assets/projects/gestsep1.svg'

  const projectDetails = {
    GestioneSeparata: {
      technologies: ['C#', '.NET', 'WinForms', 'SQLite', 'QLNet', 'iText7', 'System.Text.Json'],
      image: gestsep1
    }
  }

  const { technologies, image } = projectDetails.GestioneSeparata
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
