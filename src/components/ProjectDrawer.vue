<!-- src/components/ProjectDrawer.vue -->
<template>
  <div class="page-container">
    <div class="title-container">
      <h1 class="title">MY PROJECTS</h1>
    </div>
    <div class="projects-container">
      <router-link
        v-for="project in projects"
        :key="project.id"
        :to="`/project/${project.title}`"
        class="project-tile group relative"
      >
        <img
          :src="project.image"
          alt="Project Image"
          class="w-full h-128 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div class="overlay group-hover:opacity-100">
          <h2 class="text-2xl font-bold text-red-500 text-center px-4">{{ project.title }}</h2>
          <p class="text-sm text-gray text-center px-4">{{ project.description }}</p>
        </div>
        <div class="project-date">{{ project.date }}</div>
      </router-link>
    </div>
  </div>
</template>

<script setup>
  import project1 from '@/assets/projects/project1.jpg'
  import linux2 from '@/assets/projects/linux2.jpg'
  import finemese2 from '@/assets/projects/finemese2.jpg'
  import isc1 from '@/assets/projects/isc1.jpg'
  import blabs4 from '@/assets/projects/blabs4.jpg'
  import website from '@/assets/projects/website.jpg'
  import itch1 from '@/assets/projects/itch1.svg'
  import gestsep1 from '@/assets/projects/gestsep1.svg'

  const projects = [
    {
      id: 8,
      title: 'ITCH-engine',
      description: 'Low-latency NASDAQ TotalView-ITCH 5.0 feed handler with full L3 order-book reconstruction in C++23.',
      image: itch1,
      date: '2026'
    },
    {
      id: 9,
      title: 'Gestione Separata Valuation Engine',
      description: 'Actuarial pricing and revaluation engine for with-profits life policies across the BCC banking group.',
      image: gestsep1,
      date: 'Ongoing'
    },
    {
      id: 1,
      title: 'Portfolio Market Risk Monitor',
      description: 'Official interest rate risk monitoring tool for the Group Finance and Front Office division of Iccrea Bank',
      image: project1,
      date: '2022 - Ongoing'
    },
    {
      id: 2,
      title: 'PMRM - Linux Service',
      description: 'High-performance, multi-threaded Linux daemon for large-scale risk sensitivities computation.',
      image: linux2,
      date: '2024'
    },
    {
      id: 3,
      title: 'Iccrea Fine Mese',
      description: 'Improves periodical portfolio analysis by creating reports and custom files that are securely transmitted via Sterling IBM.',
      image: finemese2,
      date: '2022'
    },
    {
      id: 4,
      title: 'Iccrea Spread Curves',
      description: 'Custom service to construct institutional yield curves derived from Italian government benchmarks.',
      image: isc1,
      date: '2022-2024'
    },
    {
      id: 5,
      title: 'Bloomberg ABS Automation',
      description: 'ABS pricing automation making extensive use of Bloomberg API and BLP.',
      image: blabs4,
      date: '2022-2023'
    },
    {
      id: 7,
      title: 'This website',
      description: 'Personal website.',
      image: website,
      date: '2025'
    }
  ]
</script>

<style>
  .page-container {
    height: 100vh;
    overflow-y: auto;
    background-color: #000;
    padding-top: 80px;
  }

  .title-container {
    text-align: center;
    margin-bottom: 30px;
  }

  .title {
    font-size: 3rem;
    font-weight: bold;
    color: white;
  }

  .projects-container {
    column-count: 2;
    column-gap: 2rem;
    padding: 2rem;
    padding-top: 10px;
  }

  @media (max-width: 768px) {
    .projects-container {
      column-count: 1;
    }
  }

  .project-tile {
    display: inline-block;
    width: 100%;
    margin-bottom: 2rem;
    border-radius: 1.5rem;
    background-color: #333;
    overflow: hidden;
    position: relative;
    transition: transform 0.3s ease;
  }

    .project-tile img {
      width: 100%;
      height: auto;
      object-fit: cover;
      display: block;
      border-radius: 1.5rem;
    }

    .project-tile:hover {
      transform: scale(1.05);
    }

  .overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #000000cc;
    opacity: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity 0.3s ease;
    padding: 1rem;
    text-align: center;
    flex-direction: column;
    color: #fff;
  }

  .group:hover .overlay {
    opacity: 1;
  }

  .project-date {
    font-size: 0.875rem;
    color: #b0b0b0;
    font-weight: 600;
    position: absolute;
    bottom: 16px;
    left: 16px;
  }

  /* Scrollbar */
  ::-webkit-scrollbar {
    padding-top: 10px;
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    background-color: black;
  }

  ::-webkit-scrollbar-thumb {
    background-color: darkorange;
    border-radius: 10px;
    border: 3px solid darkorange;
  }

    ::-webkit-scrollbar-thumb:hover {
      background-color: orangered;
    }

  body {
    scrollbar-color: black;
    scrollbar-width: thin;
  }
</style>
