<template>
  <div v-show="showLoader">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

interface Props {
  show?: boolean;
  delay?: number;
}

const props = withDefaults(defineProps<Props>(), {
  show: false,
  delay: 500,
});

const showLoader = ref(false);

let timeout: ReturnType<typeof setTimeout> | undefined = undefined;

watch(
  () => props.show,
  (show) => {
    if (show) {
      timeout = setTimeout(() => {
        showLoader.value = true;
      }, props.delay);
    } else {
      clearTimeout(timeout);
      showLoader.value && (showLoader.value = false);
    }
  }
);
</script>
