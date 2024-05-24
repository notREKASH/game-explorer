<script setup>
import Header from '@/components/AppHeader.vue'
import Footer from '@/components/AppFooter.vue'
import { RouterView } from 'vue-router'
import Toast from 'primevue/toast';
</script>

<template>
  <div class="flex flex-col h-screen">
    <Toast />
    <Header />
    <div class="flex-grow">
      <RouterView />
    </div>
    <Footer />
  </div>
</template>
