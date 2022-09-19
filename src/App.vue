<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>

<nav class="navbar navbar-expand-lg bg-dark py-3 navbar-dark">
        <div class="container">
            <a href="#" class="navbar-brand">Imam Hossain</a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
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
                      <RouterLink to="/education" class="nav-link">Educational Qualifications</RouterLink>  
                    </li>
                    <li class="navbar-list">
                      <RouterLink to="/skill" class="nav-link">Skills</RouterLink>  
                    </li>
                    <li class="navbar-list">
                      <RouterLink to="#" class="nav-link">Experience</RouterLink>  
                    </li>
                </ul>
            </div>
        </div>
    </nav>


    
  </header>

  <RouterView />
</template>

<style scoped>

</style>
