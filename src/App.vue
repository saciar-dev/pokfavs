<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="navbar bg-dark sticky-top bg-body-tertiary" data-bs-theme="dark">
  <div class="container-fluid">
    <router-link class="navbar-brand" to="/">
      <img src="@/assets/poke_ball_icon.svg" alt="Logo" width="100" height="32" class="d-inline-block align-text-top">
      PokeFavs
    </router-link>
    <div>
      <RouterLink class="btn btn-outline-light me-2" to="/">Home</RouterLink>
      <RouterLink class="btn btn-outline-light me-2" to="/pokemons">Pokemons</RouterLink>
      <RouterLink class="btn btn-outline-light" to="/favoritos">Favorites</RouterLink>
  </div>
  </div>
</nav>

  <div class="text-center">
    <RouterView />
  </div>
  
</template>

<style>

</style>
