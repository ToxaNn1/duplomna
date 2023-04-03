<template>
  <div class="u-select-global">
    <el-select
      v-bind="$attrs"
      :model-value="modelValue"
      @change="$emit('update:modelValue', $event)"
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
  </div>
</template>

<script setup lang="ts">
interface USelectProps {
  modelValue: string;
  options: {
    value: string;
    label: string;
  }[];
}
defineProps<USelectProps>();

defineEmits<{
  (e: "update:modelValue", label: string): void;
}>();
</script>

<style lang="scss">
.u-select-global {
  .el-input__wrapper {
    background: var(--cinder);
    box-shadow: var(--cinder);
  }
  .el-input__inner {
    color: var(--silver-sand);
  }
  .el-select .el-input .el-select__caret.el-icon {
    color: var(--silver-sand);
  }
}
</style>
