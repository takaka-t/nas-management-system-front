import { createApp } from "vue";
import App from "./App.vue";
const app = createApp(App);

import router from "./router";
app.use(router);

import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { aliases, mdi } from "vuetify/iconsets/mdi-svg";
const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: { mdi },
  },
});
app.use(vuetify);

import { createPinia } from "pinia";
import { createPersistedState } from "pinia-plugin-persistedstate";
const pinia = createPinia();
pinia.use(createPersistedState());
app.use(pinia);

import { errorHandler } from "@/commons/errorHandler";
app.use(errorHandler);

app.mount("#app");
