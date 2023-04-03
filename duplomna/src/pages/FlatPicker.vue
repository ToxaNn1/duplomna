<template>
  <test-component
    v-color="'red'"
    class="text-blue-700"
    v-bind="mergeProps(data, data2)"
    :test="22"
    @click="test"
  />
  <div v-for="item in data" ref="res" :key="item">
    {{ item }}
    {{ $console.log(res) }}
  </div>
</template>

<script setup lang="ts">
import TestComponent from "@/components/TestComponent.vue";
import { mergeProps, reactive, ref, resolveComponent } from "vue";
import { Props, SecondProps } from "@/types/test";

const res = ref(null);

const data = reactive<Omit<Props, keyof SecondProps>>({
  name: "John",
  age: 30,
  date: "2021-01-01",
  address: {
    city: "b",
    street: "Kievskaya",
  },
});

const TestChildComponent = resolveComponent("TestChildComponent");

console.log(TestChildComponent);
const data2 = reactive<SecondProps>({
  name2: "J2",
  age2: 302,
  date2: "20221-01-01",
  address2: {
    city: "c",
    street: "Kievskaya",
  },
});

const test = () => {
  console.log("father");
};
</script>
