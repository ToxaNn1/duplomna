<template>
  <div>
    <TestChildComponent v-bind="$attrs" />
    <div>
      <div>directive</div>
    </div>
    <div>
      <p @click="state.foo++">text is test</p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<script setup lang="ts">
import TestChildComponent from "@/components/TestChildComponent.vue";
import { isRef, reactive, ref, unref, watch } from "vue";

const state = reactive({
  foo: 1,
  bar: 2,
});

watch(
  () => state.foo,
  (val) => {
    console.log(val);
  }
);
console.log(state);
</script>

<style scoped></style>
