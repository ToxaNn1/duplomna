<template>
  <el-button class="u-button-global" v-bind="$attrs">
    <slot />
  </el-button>
</template>

<script setup lang="ts"></script>

<style lang="scss">
//.u-button-global.el-button:focus,
//.u-button-global.el-button:hover {
//  border-color: darkred !important;
//  background: red !important;
//}
.u-button-global {
  &.el-button {
    &,
    &:hover,
    &:focus {
      border-color: var(--silver-sand);
      background: var(--cinder);
    }
  }
}
</style>
