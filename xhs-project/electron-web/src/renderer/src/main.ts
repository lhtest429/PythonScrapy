import { createApp } from "vue";
import App from "./App.vue";
import route from "../src/router/index";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import * as ElementPlusIconsVue from "@element-plus/icons-vue";
//模块注册
// eslint-disable-next-line
import TabSetting from "./views/newView/components/TabSetting.vue";


const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.component("TabSetting", TabSetting);
app.use(ElementPlus).use(route).mount("#app");
