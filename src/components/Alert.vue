<script setup>
import { defineProps } from "vue";

import PhCellSignalFullBold from "virtual:vite-icons/ph/cell-signal-full-bold";
import PhWarningBold from "virtual:vite-icons/ph/warning-bold";

defineProps({
  online: Boolean,
});
</script>

<template>
  <div
    class="flex items-center text-white text-sm font-bold px-4 py-3"
    :class="online ? 'bg-blue-600' : 'bg-red-500'"
    role="alert"
  >
    <PhCellSignalFullBold class="mr-2" v-if="online" />
    <PhWarningBold class="mr-2" v-else />
    <p>Gateway Sedang {{ online ? "Online" : "Offline" }}</p>
  </div>
</template>
