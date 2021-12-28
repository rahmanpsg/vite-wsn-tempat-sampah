<script setup>
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";
import { useLoading } from "vue-loading-overlay";

import Alert from "../components/Alert.vue";
import CardTotal from "../components/CardTotal.vue";

import GridiconsTrash from "virtual:vite-icons/gridicons/trash";
import PhWarningBold from "virtual:vite-icons/ph/warning-bold";

import supabase from "../plugins/supabase";
import { l } from "../../dist/assets/vendor.68c484a1";

const store = useStore();
const $loading = useLoading();
const loading = ref(true);
const fullPage = ref(false);

const data = computed(() => store.state.data);
const total = computed(() => store.state.total);
const parseData = computed(() => {
  let res = [];
  const data = store.state.data;

  if (!Object.keys(data).length) return;

  console.log(data);

  for (const d in data) {
    const v = data[d][data[d].length - 1];

    res[d] = { node: v.node, tinggi: v.tinggi, berat: v.berat };
  }

  return res;
});

const percetage = (number, min = 1.59, max = 0.6) => {
  const percent = (number - min) / (max - min) / 100 + min;

  return percent;
};

onMounted(async () => {
  const loader = $loading.show({
    fullPage,
    color: "#3b82f6",
    loader: "dots",
  });

  // Mengambil data data db supabase
  try {
    const { data, error } = await supabase.from("data").select();

    if (!error) {
      store.dispatch("grupByNode", data);
    }
  } catch (error) {
    console.log(error);
  }

  loader.hide();
  loading.value = false;

  // Subscribe data dari supabase
  supabase
    .from("data")
    .on("INSERT", (payload) => {
      console.log("Data di tambahkan", payload);
      store.dispatch("addNewData", payload.new);
    })
    .subscribe();
});
</script>

<template>
  <div class="mb-14" v-if="!loading">
    <!-- <alert :online="true" /> -->
    <card-total :total="total" />

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

    <div class="m-4 flex flex-wrap justify-center">
      <div
        v-for="(item, i) in total"
        :key="i"
        class="
          grid grid-cols-2
          m-4
          items-center
          rounded-lg
          border
          shadow-md
          md:flex-row md:max-w-xl
          border-gray-700
          bg-gray-800
          hover:bg-gray-700
        "
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
            :style="`clip: rect(0em, 2em, ${percetage(50)}em, 0em)`"
          />
        </div>
        <div class="justify-between p-4 leading-normal">
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
            Node {{ parseData[item].node }}
          </h5>
          <p class="mb-3 text-4xl text-gray-700 dark:text-gray-400">50%</p>
        </div>
        <div class="col-span-2 bg-gray-500 rounded-b-lg px-4 py-2">
          <div class="grid grid-cols-3 text-white font-bold">
            <p>Tinggi</p>
            <p>:</p>
            <p class="text-right">{{ parseData[item].tinggi }} CM</p>
            <p>Berat</p>
            <p>:</p>
            <p class="text-right">{{ parseData[item].berat }} KG</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
