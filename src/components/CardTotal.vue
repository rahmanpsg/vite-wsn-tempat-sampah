<script setup>
import { defineProps } from "vue";

import VaadinTrash from "virtual:vite-icons/vaadin/trash";

defineProps({
  total: Number,
});
</script>

<template>
  <div class="m-4 flex justify-center">
    <div
      class="
        flex flex-col
        items-center
        rounded-lg
        border
        shadow-md
        md:flex-row md:max-w-xl
        border-gray-800
        bg-gray-700
        hover:bg-gray-600
      "
    >
      <VaadinTrash color="white" style="font-size: 3em" class="m-4" />
      <div class="flex flex-col justify-between p-4 leading-normal">
        <h5
          class="
            mb-2
            text-2xl
            font-bold
            tracking-tight
            text-gray-900
            dark:text-white
          "
        >
          Total Node Terhubung
        </h5>
        <p class="mb-3 text-4xl text-gray-700 dark:text-gray-400">
          {{ total }}
        </p>
      </div>
    </div>
  </div>
</template>
