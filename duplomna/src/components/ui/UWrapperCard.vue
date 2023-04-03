<template>
  <div class="u-wrapper-card">
    <slot name="default" />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.u-wrapper-card {
  @apply rounded-md bg-gray-200 bg-cinder text-white p-4 w-fit;
}
</style>
