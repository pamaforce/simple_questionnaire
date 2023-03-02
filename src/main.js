import Vue from "vue";
import App from "./App.vue";
import { Notification, Progress, Slider, Button } from "element-ui";
Vue.use(Progress);
Vue.use(Slider);
Vue.use(Button);
Vue.config.productionTip = false;
Vue.prototype.$notify = Notification;
new Vue({
    render: (h) => h(App),
}).$mount("#app");