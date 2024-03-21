<script setup>
import TheNavigation from "./components/TheNavigation.vue";
</script>

<template>
  <header>
    <the-navigation />
  </header>
  <main class="content">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </main>
  
</template>

<style src="./assets/scss/main.scss" lang="scss"></style>
