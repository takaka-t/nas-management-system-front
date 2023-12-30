import App from "./App.vue";
import router from "./router";

import { createApp } from "vue";
import { createPinia } from "pinia";
import { createPersistedState } from "pinia-plugin-persistedstate";
import { errorHandler } from "@/commons/errorHandler";
import SvgIcon from "@jamescoyle/vue-icon";

const app = createApp(App);

const pinia = createPinia();
pinia.use(createPersistedState());
app.use(pinia);

app.use(router);

app.use(errorHandler);

app.component("SvgIcon", SvgIcon);

app.mount("#app");
