import { defineStore } from "pinia";
import { ref } from "vue";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "@/firebaseConfig";

export interface authT {
  email: string;
  password: string;
}
export const useAuthStore = defineStore("useAuthStore", () => {
  const isAuthenticated = ref(false);

  const login = () => {
    isAuthenticated.value = true;
  };

  const auth = getAuth(app);
  const register = async (email: string, password: string) => {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(response, "response");
  };

  const logout = () => {
    isAuthenticated.value = false;
  };

  return { isAuthenticated, login, logout, register };
});
