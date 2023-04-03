<template>
  <div>
    login view
    <form>
      <input v-model="loginData.email" placeholder="email" />
      <input v-model="loginData.password" placeholder="passwword" />
      <button @click.prevent="onSubmit">Submit</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { authT, useAuthStore } from "@/store/useAuthStore";
import { reactive } from "vue";

const { register } = useAuthStore();

const loginData = reactive<authT>({
  email: "",
  password: "",
});

const onSubmit = async () => {
  await register(loginData.email, loginData.password);
};
</script>
