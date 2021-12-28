<script setup>
import { useRoute } from "vue-router";

import VaadinHome from "virtual:vite-icons/vaadin/home-o";
import VaadinUserCard from "virtual:vite-icons/vaadin/user-card";

const route = useRoute();
const activeLink = (path) => (route.path == path ? "#3b82f6" : "grey");
const activeLinkText = (path) => (route.path == path ? "text-blue-500" : "");
</script>

<template>
  <!-- component -->
  <div>
    <section
      id="bottom-navigation"
      class="block fixed inset-x-0 bottom-0 z-10 bg-white shadow"
    >
      <div id="tabs" class="flex justify-between">
        <router-link
          to="/"
          class="
            w-full
            focus:text-blue-400
            hover:text-blue-400
            justify-center
            inline-block
            text-center
            pt-2
            pb-1
          "
        >
          <VaadinHome class="inline-block mb-1" :color="activeLink('/')" />
          <span class="tab tab-home block text-xs" :class="activeLinkText('/')"
            >Dashboard</span
          >
        </router-link>
        <router-link
          to="/tentang"
          class="
            w-full
            focus:text-blue-400
            hover:text-blue-400
            justify-center
            inline-block
            text-center
            pt-2
            pb-1
          "
        >
          <VaadinUserCard
            class="inline-block mb-1"
            :color="activeLink('/tentang')"
          />
          <span
            class="tab tab-kategori block text-xs"
            :class="activeLinkText('/tentang')"
            >Tentang</span
          >
        </router-link>
      </div>
    </section>
  </div>
</template>
