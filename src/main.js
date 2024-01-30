/*
=========================================================
* Vuetify Soft UI Dashboard PRO - v1.0.0
=========================================================

* Product Page:  https://store.vuetifyjs.com/products/vuetify-soft-ui-dashboard-pro
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import DashboardPlugin from "./plugins/dashboard-plugin";
import { httpMember } from './plugins/http'
import Constants from "./util/constant"
import Utils from "./util/utils"
Vue.config.productionTip = false;

// Photoswipe Gallery
import Photoswipe from "vue-pswipe";
Vue.use(Photoswipe);

// plugin setup
Vue.use(DashboardPlugin);
Vue.use(Utils)
Vue.prototype.$http = httpMember
Vue.prototype.$constants = Constants
new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
