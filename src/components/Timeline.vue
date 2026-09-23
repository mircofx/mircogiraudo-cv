<template>
  <div class="timeline-container">
    <ul class="timeline">
      <li v-for="(item, index) in items"
          :key="index"
          class="timeline-item">
        <!-- Marker with Dot and Connecting Line -->
        <div class="timeline-marker">
          <div class="dot"></div>
          <div v-if="index < items.length - 1"
               class="line"
               :class="{ active: isTyped[index] }"></div>
        </div>

        <!-- Content -->
        <div class="timeline-content">
          <div class="date">{{ item.date }}</div>
          <span :ref="el => typedRefs[index] = el"
                class="typed-title"></span>
          <p v-if="item.expanded" class="description">{{ item.description }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
  import { ref, onMounted, nextTick } from 'vue'
  import Typed from 'typed.js'

  const items = ref([
    { date: '2012 - 2017', title: 'Liceo Scientifico Carlo Cattaneo (High School)', description: 'Diploma in Applied Sciences.', expanded: true },
    { date: '2017 - 2019', title: 'Polytechnic of Turin - Mechanical Engineering', description: 'Mechanical engineering.', expanded: true },
    { date: '2019', title: 'WallStreet English School', description: 'C1', expanded: true },
    { date: '2019 - 2023', title: 'University of Turin', description: 'Economics and Statistics for Enterprises', expanded: true },
    { date: '05/2021 - 03/2022', title: 'Junior Software developer at HRC', description: 'Development of custom HSE manager', expanded: true },
    { date: '04/2022 - now', title: 'Quant Developer at Iccrea Bank', description: 'Quant developer focused on risk managements and automation.', expanded: true },
    { date: '01/2024 - 07/2024', title: 'Naples Fintech Lab', description: 'Financial Innovation lab, focused on developing AI solutions for banking sector. ', expanded: true }
  ])

  const typedRefs = []
  const isTyped = ref(Array(items.value.length).fill(false))

  onMounted(async () => {
    await nextTick()
    items.value.forEach((item, index) => {
      new Typed(typedRefs[index], {
        strings: [item.title],
        typeSpeed: 50,
        showCursor: false,
        startDelay: index * 800,
        onComplete: () => {
          isTyped.value[index] = true
        }
      })
    })
  })
</script>

<style scoped>
  html, body {
    height: 100%;
    margin: 0;
  }

  .timeline-container {
    height: auto;
    padding: 2rem;
    background-color: black;
    color: white;
    max-width: 800px;
    margin: auto;
  }

  .timeline {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .timeline-item {
    display: flex;
    align-items: flex-start;
    position: relative;
    margin-bottom: 0.5rem;
  }

  .timeline-marker {
    position: relative;
    width: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 1rem;
  }

  .date {
    color: #888;
    font-size: 0.85rem;
    margin-bottom: 0.2rem;
  }

  .dot {
    width: 12px;
    height: 12px;
    background-color: white;
    border-radius: 50%;
    z-index: 2;
    animation: growDot 0.3s ease-in-out;
  }

  .line {
    width: 2px;
    background-color: white;
    height: 60px;
    transform: scaleY(0);
    transform-origin: top;
    transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
    opacity: 0;
    margin-top: 0.5rem;
  }

    .line.active {
      transform: scaleY(1);
      opacity: 1;
    }

  .timeline-content {
    flex: 1;
    padding-top: 0;
    margin-top: -7px;
  }

  .typed-title {
    font-size: 1.1rem;
    font-weight: bold;
    letter-spacing: 0.5px;
  }

  .description {
    margin-top: 0.5rem;
    color: #ccc;
    font-size: 0.95rem;
  }

  @keyframes growDot {
    from {
      transform: scale(0);
      opacity: 0;
    }

    to {
      transform: scale(1);
      opacity: 1;
    }
  }
</style>
