export {};
import type { App, Plugin } from "vue";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $console: Console;
  }
}

export const logger: Plugin = {
  install(app: App): void {
    app.config.globalProperties.$console = console;
  },
};
