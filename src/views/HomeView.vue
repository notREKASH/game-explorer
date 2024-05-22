<script setup>
import GameList from '@/components/GameList.vue'
import { useGamesStore } from '@/stores/games';
import { useNavigationsStore } from '@/stores/navigations';
import { onMounted } from 'vue';

const gamesStore = useGamesStore();
const navigationStore = useNavigationsStore();


onMounted(() => {
    if (!navigationStore.redirectedFromGame) {
        gamesStore.fetchTopGames()
    }
});
</script>

<template>
    <main class="flex flex-col gap-5 mt-8">
        <GameList />
    </main>
</template>
