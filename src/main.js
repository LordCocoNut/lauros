import { createApp } from "vue";
import '@mdi/font/css/materialdesignicons.css'
import "vue-virtual-scroller/dist/vue-virtual-scroller.css";
import App from "./App.vue";
import { GlobalCmComponent } from "codemirror-editor-vue3";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "vuetify/styles";
import "./style.scss";

const vuetify = createVuetify({
  components,
  directives,
});

createApp(App).use(vuetify).use(GlobalCmComponent).mount("#app");
