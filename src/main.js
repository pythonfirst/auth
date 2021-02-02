import Vue from 'vue';
import ViewUI from 'view-design';
import App from './App.vue';
import router from './router';
import store from './store';
import Auth from "./directives/Auth";
import Authorized from "./components/Authorized";
import 'view-design/dist/styles/iview.css';

Vue.config.productionTip = false;

Vue.use(ViewUI);
Vue.use(Auth);

Vue.component("Authorized", Authorized);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
