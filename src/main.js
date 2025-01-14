import Vue from 'vue'
import App from './App.vue'
import store from "./store/store.js"
import VueRouter from 'vue-router'
// import HelloWorld from "../src/components/HelloWorld.vue"
// import CounterGroup from "../src/components/CounterGroup.vue"
// import Java from "../src/components/Java.vue"
// import Cool from "../src/components/Cool.vue"
// import Caixukun from "../src/components/Caixukun.vue"
// import CaixukunPage from "../src/components/CaixukunPage.vue"
// import Sum from "../src/components/Sum.vue"

Vue.config.productionTip = false

Vue.use(VueRouter);
const router=new VueRouter({
  //嵌套路由
  // routes:[
  //   { path: '/hello/:id', component: HelloWorld,
  //   children: [
  //     {
  //       // 当 /user/:id/profile 匹配成功，
  //       // UserProfile 会被渲染在 User 的 <router-view> 中
  //       path: 'cool',
  //       component: Cool
  //     },
  //     {
  //       // 当 /user/:id/posts 匹配成功
  //       // UserPosts 会被渲染在 User 的 <router-view> 中
  //       path: 'java',
  //       component: Java
  //     }
  //   ]},
  //   {path:'/',component:CounterGroup}
  //  ]
  //命名视图（多页面显示）
  // routes: [
  //   {
  //     path: '/',
  //     components: {
  //       default: HelloWorld,
  //       a:Cool
  //     }
  //   },
  //   {
  //     path: '/super',
  //     components: {
  //       default: HelloWorld,
  //       a:Java,
  //     }
  //   }
  // ]

//动态路由匹配
  // routes: [
  //   // 动态路径参数 以冒号开头
  //   { path: '/caixukun/:id', component: Caixukun },
  //   { path: '/caixukun/:id/message/:page', component: CaixukunPage }
  // ]
  //编程式导航
// routes: [
//      // 动态路径参数 以冒号开头
//      { path: '/counter', component: CounterGroup },
//      { path: '/sum/:id', component: Sum }
//    ]
});
new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
