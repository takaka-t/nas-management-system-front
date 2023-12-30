<script setup lang="ts">
import { ref } from "vue";
import { mdiAccount } from "@mdi/js";

const textValue = ref<string | null>(null);
</script>

<template>
  Top
  <v-text-field v-model="textValue"></v-text-field>
  {{ textValue }}
  <v-icon :icon="mdiAccount"></v-icon>
</template>

<style scoped></style>
