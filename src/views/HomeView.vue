<script setup>
import GameList from '@/components/GameList.vue'
import { useGamesStore } from '@/stores/games';
import { onMounted } from 'vue';

const gamesStore = useGamesStore();

onMounted(() => {
    gamesStore.fetchTopGames();
});
</script>

<template>
    <main class="flex flex-col gap-5 mt-8">
        <GameList />
    </main>
</template>
