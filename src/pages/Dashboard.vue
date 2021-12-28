<script setup>
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";
import { useLoading } from "vue-loading-overlay";

import Alert from "../components/Alert.vue";
import CardTotal from "../components/CardTotal.vue";
import CardNode from "../components/CardNode.vue";

import PhWarningBold from "virtual:vite-icons/ph/warning-bold";

import supabase from "../plugins/supabase";

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
    <card-total :total="total" />
    <alert v-if="!total" />
    <card-node :total="total" :parseData="parseData" />
  </div>
</template>
