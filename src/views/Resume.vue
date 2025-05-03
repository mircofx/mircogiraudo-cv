<template>
  <div class="cv-page">
    <div class="cv-content">
      <!-- Left column with CV highlights -->
      <div class="cv-left col-md-6 p-5 d-flex flex-column justify-content-start">
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
        <h2 class="title-text">Expertise</h2>
        <Timeline />
      </div>

      <!-- Right column with Download CV button -->
      <div class="cv-right col-md-6 p-5 d-flex flex-column justify-content-start">
        <h2 class="title-text">RESUME</h2>
        <a href="/public/CV Mirco Giraudo (EN) 2025.pdf" class="btn-resume" download>
          Mirco Giraudo
        </a>
        <br />
        <br />
        <h2 class="title-text">PROJECTS</h2>
        <ul class="bullet-group">
          <li v-for="(item, index) in groupTwo" :key="'group2-' + index">
            <span class="bullet-title"
                  :ref="setGroupTwoRef(index)"
                  @click="toggleDescription('groupTwo', index)"></span>
            <p v-if="item.expanded" class="bullet-description">
              {{ item.description }}
              <!-- Place the Explore link on a new line -->
              <span> <br/>
                <router-link :to="'/project/' + encodeURIComponent(item.title)" class="explore-link">Explore</router-link>
              </span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
  import Timeline from '../components/Timeline.vue'
  import { onMounted, reactive } from 'vue'
  import Typed from 'typed.js'

  const groupOne = reactive([
    { title: 'Quant Developer at Iccrea Banking S.p.A. (Rome, headquarters)', description: 'Built UIs using Vue.js and Tailwind.', expanded: false },
    { title: 'Junior Developer at HRC srl. (Turin)', description: 'Led design and usability improvements.', expanded: false }
  ])

  const groupTwo = reactive([
    { title: 'Portfolio Market Risk Monitor', description: 'Developed a proprietary rate risk and sensitivity monitoring program for Banking, HTC, HTCS portfolios (size €12bn for the parent company) as well as MarkToMarket and PnL of derivatives portfolios. The programs are complete with automatic exports, real-time data queries, interactive chart generation, historical data management and ISIN and TradeID details, as well as automatic detection of market anomalies.', expanded: false },
    { title: 'Iccrea FineMese', description: 'The programme acquires data from various Excel spreadsheets and databases to automatically create reports and custom path files that are transmitted via Sterling IBM. It also produces e-mails with body, attachments and signatures via Interop Office libraries.', expanded: false },
    { title: 'Iccrea Spread Curves', description: 'The programme generates the Iccrea Group\'s curves from the Italian Government, following the group\'s policy. The curves are generated daily, automatically, through a service installed on a server.', expanded: false },
    { title: 'Bloomberg Automations for ABSs', description: 'Developed a program for automating the valuation of ABSs by exploiting Bloomberg\'s API for receiving data and simulating user interaction with the Bloomberg Launchpad through input automation.', expanded: false },
    { title: 'This website', description: 'Created a resume website in Vue JavaScript with the use of Bootstrap5 and other components.', expanded: false }
  ])

  const typedRefs = {
    groupOne: [],
    groupTwo: []
  }

  // Capture refs correctly using curried function
  const setGroupOneRef = index => el => {
    if (el) typedRefs.groupOne[index] = el
  }
  const setGroupTwoRef = index => el => {
    if (el) typedRefs.groupTwo[index] = el
  }

  const toggleDescription = (group, index) => {
    if (group === 'groupOne') groupOne[index].expanded = !groupOne[index].expanded
    if (group === 'groupTwo') groupTwo[index].expanded = !groupTwo[index].expanded
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
    initTyping(groupTwo, typedRefs.groupTwo)
  })

  const generateDescription = (description, title) => {
    // Create an Explore link
    const exploreLink = `<router-link to="/project/${encodeURIComponent(title)}" class="explore-link">Explore</router-link>`;

    // Add the Explore link to the description (or place it wherever you want in the string)
    return description + ` <span class="explore-text">${exploreLink}</span>`;
  }
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
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
    padding: 5rem 2rem;
  }

  .cv-left,
  .cv-right {
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
    color: #4CBB17;
    text-decoration: none;
    font-weight: bold;
    cursor: pointer;
    transition: color 0.3s ease;
  }

    .explore-link:hover {
      color: #ffcc00;
    }

  .explore-text {
    color: #4CBB17; /* Adjust color if you want a specific one for the link */
    font-weight: bold;
  }

</style>
