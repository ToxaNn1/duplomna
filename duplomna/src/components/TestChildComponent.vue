<template>
  <div>
    <div>child component</div>
    <div>
      {{ address }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { Props } from "@/types/test";

defineProps<Props>();
</script>

<style scoped></style>
