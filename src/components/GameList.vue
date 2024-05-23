<script setup>
import { computed } from 'vue'
import { useGamesStore } from '@/stores/games'
import GameCard from '@/components/GameCard.vue'
import Loader from '@/components/SearchLoader.vue'
import Paginator from '@/components/AppPaginator.vue'

const gamesStore = useGamesStore()

const games = computed(() => gamesStore.games)
const loading = computed(() => gamesStore.loading)
</script>

<template>
    <div>
        <div v-if="loading">
            <Loader />
        </div>
        <div v-else>
            <div v-if="games.length > 0" class="flex flex-wrap gap-6 align-middle justify-center">
                <div v-for="game in games" :key="game.id">
                    <GameCard :game="game" />
                </div>
                <Paginator />
            </div>
            <div v-else>
                <p>Aucun jeu trouvé</p>
            </div>
        </div>
    </div>
</template>