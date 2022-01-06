<script setup>
import GridiconsTrash from "virtual:vite-icons/gridicons/trash";

defineProps({
  total: Number,
  parseData: Array,
});

const percetage = (number, min = 1.59, max = 0.6) => {
  const percent = (number - min) / (max - min) / 100 + min;

  return percent;
};

const convertTinggiToPercent = (number, min = 5, max = 29) => {
  const input = number > max ? 0 : max - number + min;

  const percent = (((input - min) * 100) / (max - min)).toFixed(2);

  return percent < 0 ? 0 : percent > 100 ? 100 : percent;
};

const parseBerat = (berat) => {
  if (berat > 1000) return `${(berat / 1000).toFixed(2)} KG`;

  return `${berat} GRAM`;
};
</script>

<template>
  <div class="m-4 flex flex-wrap justify-center">
    <div
      v-for="(item, i) in total"
      :key="i"
      class="grid grid-cols-2 m-4 items-center rounded-lg border shadow-md md:flex-row md:max-w-xl border-gray-700 bg-gray-800 hover:bg-gray-700"
    >
      <div class="relative inline-block" style="font-size: 5em">
        <GridiconsTrash
          color="#92400e"
          style="vertical-align: top"
          class="m-4"
        />
        <GridiconsTrash
          color="white"
          class="m-4 absolute left-0 top-0 overflow-hidden"
          :style="`clip: rect(0em, 2em, ${percetage(
            convertTinggiToPercent(parseData[item].tinggi)
          )}em, 0em)`"
        />
      </div>
      <div class="justify-between p-4 leading-normal">
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          Node {{ parseData[item].node }}
        </h5>
        <p class="mb-3 text-4xl text-gray-700 dark:text-gray-400">
          {{ convertTinggiToPercent(parseData[item].tinggi) }}%
        </p>
      </div>
      <div class="col-span-2 bg-gray-500 rounded-b-lg px-4 py-2">
        <div class="grid grid-cols-3 text-white font-bold">
          <p>Tinggi</p>
          <p>:</p>
          <p class="text-right">{{ parseData[item].tinggi }} CM</p>
          <p>Berat</p>
          <p>:</p>
          <p class="text-right">{{ parseBerat(parseData[item].berat) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
