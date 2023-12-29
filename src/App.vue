<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div>
      <nav>
        <RouterLink to="/">top</RouterLink>
        <RouterLink to="/search">search</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style></style>
