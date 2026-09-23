<!-- src/components/projects/ITCHEngine.vue -->
<template>
  <div class="project-details">
    <h1 class="project-title">ITCH-engine</h1>
    <p class="project-subtitle">NASDAQ TotalView-ITCH 5.0 Feed Handler (C++23)</p>
  </div>

  <p class="project-description">
    A low-latency NASDAQ TotalView-ITCH 5.0 feed handler with full L3 order-book reconstruction, in modern C++23.
    Zero-copy mmap ingestion demultiplexes one stream into thousands of live per-instrument books, with parser and book logic split across two threads connected by a lock-free SPSC queue.
    <br><br>
    Sustains <strong>3.8M msg/s</strong> single-threaded parse and L3 build over a 64.9M message session, validated bit-for-bit against an independent oracle book with <strong>0 mismatches</strong> across the full session.
    <br><br>
    Architecture:
    <ul>
      <li>Order lookup via a flat open-addressed hash table (linear probing, backward-shift deletion), cutting cache misses 40% vs. std::unordered_map, measured on hardware performance counters</li>
      <li>Price-time priority maintained by a fixed-window price ladder (flat array with a best-bid/best-ask hint) instead of a tree-based book</li>
      <li>Field decoding via packed structs directly over mmap'd pages, with explicit copy-before-decode on hot paths to avoid unaligned or over-read faults at page boundaries</li>
      <li>Correctness verified by differential testing against a naive std::map-based reference book on every message</li>
    </ul>
  </p>
  <br>

  <h3>Technologies Used</h3>
  <ul class="tech-list">
    <li v-for="(tech, index) in technologies" :key="index">{{ tech }}</li>
  </ul>
  <br>

  <h3>Statistics and Benchmarks</h3>
  <ul>
    <li>Throughput: <strong>3.8M msg/s</strong> single-threaded parse and L3 build</li>
    <li>Session size: <strong>64.9M messages</strong></li>
    <li>Oracle mismatches: <strong>0</strong> across the full session</li>
    <li>Cache misses: <strong>-40%</strong> vs. std::unordered_map</li>
  </ul>
  <br>

  <div class="project-media">
    <h3>Project Media</h3>
    <br>
    <img v-if="image" :src="image" alt="Project Image" class="full-width-image" style="max-width: 1200px;" />
  </div>
</template>

<script setup>
  import itch1 from '@/assets/projects/itch1.svg'

  const projectDetails = {
    ITCHEngine: {
      technologies: ['C++23', 'mmap', 'Lock-free SPSC ring buffer', 'Hardware performance counters'],
      image: itch1
    }
  }

  const { technologies, image } = projectDetails.ITCHEngine
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
