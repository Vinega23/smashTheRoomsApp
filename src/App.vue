<script setup>
import TheNavigation from "./components/TheNavigation.vue";
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <header>
    <the-navigation />
  </header>
  <main class="content">
    <router-view />
  </main>
</template>

<style src="./assets/scss/main.scss" lang="scss"></style>
