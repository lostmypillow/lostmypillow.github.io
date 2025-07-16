import { createApp } from "vue";
import "./style.css";
import "primeicons/primeicons.css";
import App from "./App.vue";
import router from "./router";
import { definePreset } from "@primeuix/themes";
import PrimeVue from "primevue/config";
import Lara from "@primeuix/themes/lara";

import Tooltip from 'primevue/tooltip';



const MyPreset = definePreset(Lara, {
  semantic: {
    primary: {
      50: "{red.50}",
      100: "{red.100}",
      200: "{red.200}",
      300: "{red.300}",
      400: "{red.400}",
      500: "{red.500}",
      600: "{red.600}",
      700: "{red.700}",
      800: "{red.800}",
      900: "{red.900}",
      950: "{red.950}",
    },
  },
});
createApp(App)
  .use(router)
  .use(PrimeVue, {
    ripple: true,
    theme: {
      preset: MyPreset,
      options: { darkModeSelector: ".fake-dark-selector" },
    },
  })
  .directive('tooltip', Tooltip).mount("#app");
