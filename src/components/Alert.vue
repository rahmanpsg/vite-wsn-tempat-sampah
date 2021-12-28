<script setup>
import PhWarningBold from "virtual:vite-icons/ph/warning-bold";
</script>

<template>
  <div
    class="
      flex
      justify-center
      items-center
      text-center text-3xl
      font-bold
      mt-20
      p-8
      bg-red-500
    "
    v-if="!total"
  >
    <PhWarningBold class="mr-2" color="white" style="font-size: 1.2em" />
    <p class="text-white">Tidak Ada Node Yang Terhubung</p>
  </div>
</template>
