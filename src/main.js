import Vue from 'vue'
import App from './App.vue'
import store from "./store/store.js"
import VueRouter from 'vue-router'
import HelloWorld from "../src/components/HelloWorld.vue"
import CounterGroup from "../src/components/CounterGroup.vue"


Vue.config.productionTip = false

Vue.use(VueRouter);
const router=new VueRouter({
  routes:[
    {path:"/hello",component:HelloWorld},
    {path:"/",component:CounterGroup}
  ]
});
new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
