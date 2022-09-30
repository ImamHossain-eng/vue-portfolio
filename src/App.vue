<script>
import { RouterLink, RouterView } from "vue-router";
// import axios from 'axios';

export default {
  data() {
    return {
      api: 'http://localhost:8800/api/v1',
    }
  },
  methods: {

  }
}
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-dark py-3 navbar-dark">
      <div class="container">
        <a href="#" class="navbar-brand">Imam Hossain</a>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navmenu">
          <ul class="navbar-nav ms-auto">
            <li class="navbar-list">
              <RouterLink to="/" class="nav-link">Home</RouterLink>
            </li>
            <li class="navbar-list">
              <RouterLink to="/project" class="nav-link">Projects</RouterLink>
            </li>
            <li class="navbar-list">
              <RouterLink to="/education" class="nav-link"
                >Educational Qualifications</RouterLink
              >
            </li>
            <li class="navbar-list">
              <RouterLink to="/skill" class="nav-link">Skills</RouterLink>
            </li>
            <li class="navbar-list">
              <RouterLink to="/experience" class="nav-link"
                >Experience</RouterLink
              >
            </li>
            <li class="navbar-list">
              <RouterLink to="/login" class="nav-link">Login</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>

  <RouterView :api="api"/>
</template>

<style scoped>
.navbar-brand {
  color: #d0b6f1;
}
.navbar-brand:hover {
  color: #efefef;
  transition: 1s ease;
}
</style>
