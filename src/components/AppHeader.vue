<script setup>
import SearchGame from './SearchGame.vue';
import { RouterLink, useRouter } from 'vue-router';

const router = useRouter();

const goHome = () => {
    router.push({ path: '/' }).then(() => router.go());
}
</script>

<template>
    <header
        class="flex-col gap-2 items-center p-4 bg-gray-800 text-white flex align-middle md:justify-between md:flex-row">
        <RouterLink to=" /" @click="goHome" class="text-2xl font-bold md:order-1">
            GameList
        </RouterLink>
        <SearchGame />
    </header>
</template>