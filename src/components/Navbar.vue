<template>
  <div class="nav-menu">
    <div class="nav-wrapper">
      <a class="navbar-brand" href="#">mircofx</a>
      <i class="hamburger" @click="showMenu">
        <strong>&lt;/&gt;</strong>
      </i>
      <ul class="nav-items desktop-menu">
        <li class="nav-item">
          <router-link class="nav-link" to="/resume">Resume</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/projectdrawer">Projects</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/contacts">Contacts</router-link>
        </li>
      </ul>
    </div>

    <div class="mobile-menu" :class="{ open: showMobileMenu }">
      <ul class="nav-items">
        <li class="nav-item">
          <router-link class="nav-link" to="/resume">Resume</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/projectdrawer">Projects</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/contacts">Contacts</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>


<script setup>
  import { ref } from 'vue'

  const showMobileMenu = ref(false)

  function showMenu() {
    showMobileMenu.value = !showMobileMenu.value
  }
</script>

<style scoped>
  .nav-menu {
    background-color: #000;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    width: 100%;
  }

  .nav-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 30px;
  }

  .navbar-brand {
    font-weight: 700;
    font-size: 1.5rem;
    color: #fff;
  }

  .nav-items {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
  }

  .nav-items li {
    margin-left: 20px;
  }

    .nav-items li .nav-link {
      color: #fff;
      text-decoration: none;
    }

  .hamburger {
    display: none;
    cursor: pointer;
    font-weight: 700;
    font-size: 1.5rem;
    color: #fff;
  }

  .mobile-menu {
    display: none;
    background-color: #000;
    padding: 10px 30px;
  }

    .mobile-menu ul {
      flex-direction: column;
      gap: 10px;
    }

      .mobile-menu ul .nav-link {
        color: #fff;
      }

    .mobile-menu.open {
      display: block;
    }

  @media screen and (max-width: 768px) {
    .desktop-menu {
      display: none;
    }

    .hamburger {
      display: block;
    }

    .nav-items {
      flex-direction: column;
      align-items: flex-start;
    }
  }
</style>
