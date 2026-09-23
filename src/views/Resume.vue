<template>
  <div class="cv-page">
    <div class="cv-content">
      <!-- Left column with CV highlights -->
      <div class="cv-left p-5 d-flex flex-column justify-content-start">
        <h2 class="title-text">EMPLOYMENT EXPERIENCE</h2>
        <!-- Group 1 -->
        <ul class="bullet-group">
          <li v-for="(item, index) in groupOne" :key="'group1-' + index">
            <span class="bullet-title"
                  :ref="setGroupOneRef(index)"
                  @click="toggleDescription('groupOne', index)"></span>
            <p v-if="item.expanded" class="bullet-description">{{ item.description }}</p>
          </li>
        </ul>
        <br />
        <ul ref="typedElement" class="bullet-points">
          <li v-for="(item, index) in bulletPoints" :key="index"></li>
        </ul>
        <h2 class="title-text">Timeline</h2>
        <Timeline />
      </div>

      <!-- Right column with Download CV button -->
      <div class="cv-right p-5 d-flex flex-column justify-content-start">
        <h2 class="title-text">RESUME</h2>
        <div>Click on the button to download my latest resume. </div>
        <br />
        <a :href="`${base}CV_Mirco_Giraudo_2026.pdf`" class="btn-resume" download>
          Mirco Giraudo
        </a>
        <br />
        <br />
      </div>
    </div>
  </div>
</template>

<script setup>
  const base = import.meta.env.BASE_URL

  import Timeline from '../components/Timeline.vue'
  import { onMounted, reactive } from 'vue'
  import Typed from 'typed.js'

  const groupOne = reactive([
    { title: 'Quant Developer at Iccrea Banking S.p.A. (Rome, headquarters)', description: 'Designed and developed custom monitoring tools and automations for Front Office and Quantitative Models division.', expanded: true },
    { title: 'Junior Developer at HRC srl. (Turin)', description: 'Designed and built MVC .NET web applications to input health reports, machinery, personal safety devices.', expanded: true }
  ])

  const typedRefs = {
    groupOne: []
  }

  // Capture refs correctly using curried function
  const setGroupOneRef = index => el => {
    if (el) typedRefs.groupOne[index] = el
  }

  const toggleDescription = (group, index) => {
    if (group === 'groupOne') groupOne[index].expanded = !groupOne[index].expanded
  }

  onMounted(() => {
    const initTyping = (groupData, refs) => {
      groupData.forEach((item, i) => {
        new Typed(refs[i], {
          strings: [item.title],
          typeSpeed: 50,
          backSpeed: 20,
          showCursor: false
        })
      })
    }

    initTyping(groupOne, typedRefs.groupOne)
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

  .cv-page {
    background-color: black;
    color: white;
    min-height: 100vh;
    width: 100%;
  }

  .cv-content {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
    padding: 5rem 2rem;
  }

  .cv-left, .cv-right {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    letter-spacing: 3px;
    padding: 0;
  }

  .title-text {
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  .bullet-group {
    list-style-type: none;
    padding: 0;
    margin: 0;
    width: 100%;
  }

  .bullet-title {
    cursor: pointer;
    color: white;
    font-size: 1rem;
    margin-bottom: 0.25rem;
    transition: color 0.3s;
    letter-spacing: 0.03em;
  }

    .bullet-title:hover {
      color: #f39c12;
    }

  .bullet-description {
    margin-left: 20px;
    font-size: 0.8rem;
    color: #f5b550;
    padding-top: 10px;
    padding-bottom: 15px;
  }

  .bullet-points {
    list-style: none;
    padding-left: 2px;
    margin-top: 0;
    font-size: 15px;
  }

    .bullet-points li {
      margin-bottom: 1rem;
      font-size: 15px;
    }

  .cv-highlights {
    list-style: none;
    padding-left: 0;
    font-family: baskerville-urw;
  }

    .cv-highlights li {
      margin-bottom: 1rem;
      margin-left: 2rem;
      font-size: 1.2rem;
    }

  .btn-resume {
    background-color: transparent;
    border: 2px solid white;
    color: white;
    font-size: 1.2rem;
    padding: 10px 20px;
    text-decoration: none;
    cursor: pointer;
    border-radius: 0;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

    .btn-resume:hover {
      background-color: white;
      color: black;
      font-weight: bold;
    }

  .explore-link {
    color: #4cbb17;
    text-decoration: none;
    font-weight: bold;
    cursor: pointer;
    transition: color 0.3s ease;
  }

    .explore-link:hover {
      color: #ffcc00;
    }

  .explore-text {
    color: #4cbb17;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    .cv-content {
      flex-direction: column;
    }

    .cv-left, .cv-right {
      width: 100%;
      padding: 0 !important;
    }
  }
</style>
