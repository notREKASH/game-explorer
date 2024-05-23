<script setup>
import SearchGame from './SearchGame.vue';
import { RouterLink, useRouter } from 'vue-router';

const router = useRouter();

const goHome = () => {
    router.push({ path: '/' }).then(() => router.go());
}
</script>

<template>
    <header class="bg-gray-800 text-white p-4 flex align-middle justify-between">
        <SearchGame />
        <RouterLink to="/" @click="goHome" class="text-center text-2xl">Games Explorer
        </RouterLink>
    </header>
</template>