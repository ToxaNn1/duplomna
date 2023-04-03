import { createApp } from "vue";
import VChart from "vue-echarts";
import router from "@/router";
import ElementPlus from "element-plus";
import ElementPlusIcons from "@/components/ui/icons/element-plus-icons";
import AwesomeIcons from "@/components/ui/icons/awesome-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { VueQueryPlugin } from "@tanstack/vue-query";
import { library } from "@fortawesome/fontawesome-svg-core";
import { i18n } from "@/plugins/i18n";
import { createPinia } from "pinia";
import App from "@/App.vue";
import "echarts";
import "element-plus/dist/index.css";
import "@/assets/styles/main.scss";
import { logger } from "@/plugins/logger";

const pinia = createPinia();

const app = createApp(App);

library.add(...AwesomeIcons);

for (const [key, component] of Object.entries(ElementPlusIcons)) {
  app.component(key, component);
}
app.component("VChart", VChart);
app.component("AIcon", FontAwesomeIcon);
app.use(router);
app.use(ElementPlus);
app.use(logger);
app.use(VueQueryPlugin);
app.use(i18n);
app.use(pinia);

app.directive("color", (el, binding) => {
  // буде викликано для `mounted` та `updated`
  el.style.color = binding.value;
});

app.mount("#app");
