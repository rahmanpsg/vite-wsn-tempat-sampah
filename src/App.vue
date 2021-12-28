<script setup>
import Header from "./components/Header.vue";
import BottomNavigationVue from "./components/BottomNavigation.vue";
</script>

<template>
  <Header />
  <router-view />
  <BottomNavigationVue />
</template>
