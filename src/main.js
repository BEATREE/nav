import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import Element from "element-ui"
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

Vue.config.productionTip = false;

/*导入样式文件: view-ui, element */
// Vue.use(Element);
Vue.use(ViewUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
