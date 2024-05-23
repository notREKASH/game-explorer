<script setup>
import { useGamesStore } from '@/stores/games';
import getFullCoverUrl from '@/utils/getFullCoverUrl';
import Card from 'primevue/card';
import { computed } from 'vue';

const gamesStore = useGamesStore();
const similarGames = computed(() => gamesStore.similarGames);

</script>

<template>
    <Card>
        <template #title>Similar Games</template>
        <template #content>
            <div class="grid grid-cols-2 gap-4">
                <RouterLink :to="{ name: 'Game', params: { id: game.id } }" v-for="game in similarGames" :key="game.id">
                    <img :src="getFullCoverUrl(game?.cover?.url)" alt="game" class="rounded-lg" />
                    <p class="text-sm text-gray-500">{{ game.name }}</p>
                </RouterLink>
            </div>
        </template>
    </Card>
</template>