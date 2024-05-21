<script setup>
import Header from '@/components/AppHeader.vue'
import { RouterView } from 'vue-router'
import Toast from 'primevue/toast';
</script>

<template>
  <Toast />
  <Header />
  <RouterView />
</template>
