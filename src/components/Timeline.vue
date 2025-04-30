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
    { title: 'Liceo Scientifico Carlo Cattaneo (High School)', description: 'Diploma in Applied Sciences.', expanded: true },
    { title: 'Polytechnic of Turin - Mechanical Engineering', description: 'Worked on real-world projects.', expanded: true },
    { title: 'WallStreet English School', description: 'Full-stack dev experience.', expanded: true },
    { title: 'Got my first dev job', description: 'Full-stack dev experience.', expanded: true },
    { title: 'Got my first dev job', description: 'Full-stack dev experience.', expanded: true },
    { title: 'Got my first dev job', description: 'Full-stack dev experience.', expanded: true },
    { title: 'Got my first dev job', description: 'Full-stack dev experience.', expanded: true }
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
  .timeline-container {
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
    margin-bottom: 0.5rem; /* spacing between dots */
  }

  .timeline-marker {
    position: relative;
    width: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 1rem;
  }

  .dot {
    width: 12px;
    height: 12px;
    background-color: white;
    border-radius: 50%;
    z-index: 2;
    animation: growDot 0.3s ease-in-out;
  }

  /* Line appears just below the dot and reaches the next one */
  .line {
    width: 2px;
    background-color: white;
    height: 60px; /* adjust for your layout: 48 + 12px dot = 60px gap */
    transform: scaleY(0);
    transform-origin: top;
    transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
    opacity: 0;
    margin-top: 0.5rem; /* small gap between dot and line */
  }

  .line.active {
    transform: scaleY(1);
    opacity: 1;
  }

  .timeline-content {
    flex: 1;
    padding-top: 0px;
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
