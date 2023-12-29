<script setup lang="ts">
import { ref } from "vue";
import InputText from "@/components/inputs/InputText.vue";

const textValue = ref<string | null>(null);
</script>

<template>
  Top
  <InputText v-model="textValue"></InputText>
  {{ textValue }}
</template>

<style scoped></style>
