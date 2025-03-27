<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutFixed from './components/LayoutFixed.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
</script>

<template>
  <LayoutFixed/>
  <LayoutNav />
  <LayoutHeader />
  <RouterView />
  <LayoutFooter />
</template>