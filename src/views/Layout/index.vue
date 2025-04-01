<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutFixed from './components/LayoutFixed.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
// 出发获取导航列表的action
import { useCategoryStore } from '@/stores/category'
import { onMounted } from 'vue'
import router from '@/router'

const categoryStore = useCategoryStore()
onMounted(() => {
    categoryStore.getCategory()
})
</script>

<template>
  <LayoutFixed/>
  <LayoutNav />
  <LayoutHeader />
  <!-- 添加key  破坏复用机制  强制销毁重建 但是这样整个页面都会刷新-->
  <!-- <RouterView :key="$route.fullPath"/> -->
  <RouterView />
  <LayoutFooter />
</template>