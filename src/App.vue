<script setup lang="ts">
import { ref } from "vue";
import { RouterView } from "vue-router";
import { mdiMagnify, mdiCog } from "@mdi/js";
import Top from "@/views/Top.vue";
import Search from "@/views/Search.vue";
import Admin from "@/views/Admin.vue";

const isShowDilogSearch = ref(false);
const isShowDilogAdmin = ref(false);
</script>

<template>
  <v-layout>
    <v-app-bar color="primary">
      <v-toolbar-title>nas管理くん</v-toolbar-title>
      <v-btn variant="elevated" :prepend-icon="mdiMagnify" @click.stop="isShowDilogSearch = true">検索</v-btn>
      <v-spacer></v-spacer>
      <v-btn variant="outlined" :prepend-icon="mdiCog" @click.stop="isShowDilogAdmin = true">管理</v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <Top />
      </v-container>

      <v-dialog v-model="isShowDilogSearch" persistent>
        <Search />
      </v-dialog>

      <v-dialog v-model="isShowDilogAdmin" persistent>
        <Admin />
      </v-dialog>
    </v-main>
  </v-layout>
</template>

<style></style>
