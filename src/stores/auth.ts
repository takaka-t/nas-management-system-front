import { ref } from "vue";
import { defineStore } from "pinia";

/**
 * 権限
 */
export const useAuthStore = defineStore(
  "auth",
  () => {
    /** 管理者か */
    const isAdmin = ref(false);

    return { isAdmin };
  },
  { persist: true }
);
