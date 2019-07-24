import Vue from 'vue'
import App from './App.vue'
import store from "./store/store.js"
import VueRouter from 'vue-router'
import HelloWorld from "../src/components/HelloWorld.vue"
//import CounterGroup from "../src/components/CounterGroup.vue"
import Java from "../src/components/Java.vue"
import Cool from "../src/components/Cool.vue"


Vue.config.productionTip = false

Vue.use(VueRouter);
const router=new VueRouter({
  // routes:[
  //   {path:"/hello/:id",component:HelloWorld,children:[{path:"cool",component:Cool},{path:"super",component:Java}]},
  //   {path:"/",component:CounterGroup}
  // ]
  routes: [
    {
      path: '/',
      components: {
        default: HelloWorld,
        a:Cool
      }
    },
    {
      path: '/super',
      components: {
        default: HelloWorld,
        a:Java,
      }
    }
  ]
});
new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
