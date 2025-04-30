<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-black fixed-top border-bottom">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"></a>

      <!-- Toggle button for small screens -->
      <button class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Collapsible menu items -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/resume">Resume</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/try">HelloWorld</router-link>
          </li>
          <!-- Add more links as needed -->
          <!--The <router-view> is a placeholder where the matched component (based on the URL) will be displayed.-->
        </ul>
      </div>
    </div>
  </nav>
</template>


<script setup>
</script>
