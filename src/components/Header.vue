<script setup>
import { ref } from "vue";
import { useStore } from "vuex";

import supabase from "../plugins/supabase";
import SystemUiconsResetForward from "virtual:vite-icons/system-uicons/reset-forward";

import Dialog from "./Dialog.vue";

const store = useStore();
const showDialog = ref(false);

const reset = async () => {
  try {
    const { data, error } = await supabase.from("data").delete();

    if (!error) {
      showDialog.value = false;
      store.dispatch("resetData");
    }
  } catch (error) {
    console.log(error);
  }
};
</script>

<template>
  <nav
    class="flex items-center justify-between flex-wrap bg-blue-500 p-4 sticky top-0 z-10"
  >
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <span class="font-semibold text-xl tracking-tight">
        WSN - Tempat Sampah
      </span>
    </div>
    <button
      class="bg-white text-blue-500 hover:bg-blue-400 font-bold py-2 px-4 rounded inline-flex"
      @click="showDialog = true"
    >
      <SystemUiconsResetForward style="font-size: 12px" class="mr-2" />
      RESET
    </button>
  </nav>
  <Dialog
    v-if="showDialog"
    :cancel="() => (showDialog = false)"
    :submit="reset"
  />
</template>
