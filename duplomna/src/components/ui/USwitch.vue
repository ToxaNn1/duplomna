<template>
  <el-switch
    class="u-switch-global"
    :value="modelValue"
    inline-prompt
    :active-icon="activeIcon"
    :inactive-icon="inActiveIcon"
    v-bind="$attrs"
    @change="$emit('update:modelValue', $event)"
  />
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { StringOrComponent } from "@/types/global";

interface USwitchProps {
  modelValue: boolean;
  activeIcon: StringOrComponent;
  inActiveIcon: StringOrComponent;
}
defineEmits<{ (e: "update:modelValue", flag: boolean): void }>();
defineProps<USwitchProps>();
</script>

<style scoped lang="scss">
.u-switch-global {
}
</style>
