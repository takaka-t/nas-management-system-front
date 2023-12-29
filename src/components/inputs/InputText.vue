<script setup lang="ts">
import { computed } from "vue";

interface definePropsModel {
  modelValue: string | null;
  maxLength?: number;
  minLength?: number;
  readonly?: boolean;
  placeholder?: string;
  width?: string;
}
const props = defineProps<definePropsModel>();

const emit = defineEmits<{ "update:modelValue": [text: string | null] }>();

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    if (props.modelValue === value) {
      return;
    }
    emit("update:modelValue", value);
  },
});
</script>

<template>
  <input type="text" v-model="value" :maxlength="maxLength" :minlength="minLength" :readonly="readonly" :placeholder="placeholder" :class="{ 'readonly-style': readonly }" :style="{ width: width }" />
</template>

<style scoped>
input[type="text"] {
  display: block;
  width: 20em;
  font-size: 16px;
  padding: 0.7em;
  max-width: 100%;
  border: 1px solid #999;
  border-radius: 0.4rem;
  box-sizing: border-box;
}

.readonly-style {
  pointer-events: none;
  background-color: #c8c8c8;
}
</style>
