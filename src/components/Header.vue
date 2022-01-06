<script setup>
import supabase from "../plugins/supabase";
import SystemUiconsResetForward from "virtual:vite-icons/system-uicons/reset-forward";

const reset = async () => {
  try {
    const { data, error } = await supabase.from("data").delete();

    console.log(data);
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
      v-on:click="reset"
    >
      <SystemUiconsResetForward style="font-size: 12px" class="mr-2" />
      RESET
    </button>
  </nav>
</template>
