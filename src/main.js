import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import router from "./router";
import store from "./store";

import VueLoading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

const app = createApp(App);
app.use(router);
app.use(store);
app.use(VueLoading);
app.mount("#app");
