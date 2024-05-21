<script setup>
import SearchGame from './SearchGame.vue';
</script>

<template>
    <header class="bg-gray-800 text-white p-4 flex align-middle justify-between">
        <SearchGame />
        <RouterLink to="/" class="text-center text-2xl">Games Explorer</RouterLink>
    </header>
</template>