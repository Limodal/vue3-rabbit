// createRouter 创建路由实例
// createWebHistory 创建history路由模式
import { createRouter, createWebHistory } from 'vue-router'
import Login from "@/views/Login/index.vue";
import Layout from "@/views/Layout/index.vue";
import Home from "@/views/Home/index.vue";
import Category from "@/views/Category/index.vue";  
import SubCatergory from "@/views/SubCategory/index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // 配置path和component对应关系的位置
  routes: [
    {
      path: '/',
      component: Layout,
      children:[
        {
          path: '',
          component: Home
        },
        {
          path: '/category/:id',
          component : Category
        },
        {
          path: '/category/sub/:id',
          component : SubCatergory
        }
      ]
    },
    {
      path : '/login',
      component : Login
    }
  ],
  // 添加路由行为定制配置
  scrollBehavior(){
    return { top: 0 }
    // 在切换到另一个路由时，吗，默认滚动到页面顶部
  }
})

export default router
