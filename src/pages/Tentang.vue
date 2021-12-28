<script setup>
import IcomoonFreeProfile from "virtual:vite-icons/icomoon-free/profile";
const judul =
  "SISTEM PEMANTAUAN TEMPAT SAMPAH BERBASIS WIRELESS SENSOR NETWORK";
const profil = {
  Nama: "Andri Darmawan",
  Nim: "217 180 035",
  "Pembimbing 1": "Ir. Syahirun Alam, ST., MT., IPM.",
  "Pembimbing 2": "Muhammad Zainal, ST., MT.",
};
</script>

<template>
  <div class="bg-gray-700 rounded m-4 lg:m-12 lg:mx-96">
    <div class="grid grid-cols-2 bg-gray-500 -mt-8 rounded-t p-4">
      <IcomoonFreeProfile color="white" />
      <p class="text-white text-right font-bold">Profil</p>
    </div>
    <div class="p-8">
      <h3 class="text-white font-bold mb-4">{{ judul }}</h3>
      <div
        v-for="(item, i) in profil"
        :key="i"
        class="grid grid-cols-8 text-white"
      >
        <p class="xl:col-span-2 col-span-3">{{ i }}</p>
        <p>:</p>
        <p class="col-span-4">{{ item }}</p>
      </div>
    </div>
  </div>
</template>
