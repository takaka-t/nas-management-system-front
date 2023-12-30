<script setup lang="ts">
import { ref } from "vue";
import InputText from "@/components/inputs/InputText.vue";
import { mdiAccount } from "@mdi/js";

const textValue = ref<string | null>(null);
</script>

<template>
  Top
  <InputText v-model="textValue"></InputText>
  {{ textValue }}
  <SvgIcon type="mdi" :path="mdiAccount"></SvgIcon>
</template>

<style scoped></style>
