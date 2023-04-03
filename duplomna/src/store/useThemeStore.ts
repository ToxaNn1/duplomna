import { defineStore } from "pinia";

export const useThemeStore = defineStore("useThemeStore", () => {
  const getCurrentTheme = localStorage.getItem("site-theme");
  const rootElement = document.body;
  if (!getCurrentTheme) localStorage.setItem("site-theme", "light");

  const setTheme = (theme: boolean) => {
    if (theme) {
      rootElement.classList.add("dark-theme");
      localStorage.setItem("site-theme", "dark");
    } else {
      rootElement.classList.remove("dark-theme");
      localStorage.setItem("site-theme", "light");
    }
  };

  return {
    setTheme,
    getCurrentTheme,
  };
});
