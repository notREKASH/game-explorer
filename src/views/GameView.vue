<script setup>
import { onMounted, ref, watch } from 'vue';
import { useGamesStore } from '@/stores/games';
import { useRoute } from 'vue-router';
import Loader from '@/components/SearchLoader.vue';
import Button from 'primevue/button';
import Card from 'primevue/card';
import Rating from 'primevue/rating';
import { stringDateFormatter } from '@/utils/dateFormatter';

// Components
import ViewTitle from '@/components/GameView/ViewTitle.vue';
import ViewSummary from '@/components/GameView/ViewSummary.vue';
import ViewCoverImg from '@/components/GameView/ViewCoverImg.vue';
import ViewButton from '@/components/GameView/ViewButton.vue';
import ViewDesc from '@/components/GameView/ViewDesc.vue';
import ViewScreenshots from '@/components/GameView/ViewScreenshots.vue';
import SimilarGames from '@/components/GameView/SimilarGames/SimilarGames.vue';


const gamesStore = useGamesStore();
const route = useRoute();
const id = route.params.id;
const game = ref({});
const loading = ref(true);

onMounted(() => {
    async function fetchGame() {
        await gamesStore.fetchGameDetails(id);

        game.value = gamesStore.gameDetails;
        loading.value = false;
    }
    fetchGame();
});

watch(() => route.params.id, async (newId) => {
    loading.value = true;
    await gamesStore.fetchGameDetails(newId);
    game.value = gamesStore.gameDetails;
    loading.value = false;
});

</script>

<template>

    <div v-if="loading">
        <Loader />
    </div>
    <main v-else class="grid grid-cols-[1fr_300px] gap-8 max-w-6xl mx-auto py-12 px-4 md:px-6">
        <article>
            <ViewTitle :title="game.name" />
            <ViewSummary :summary="game.summary" />
            <ViewCoverImg :game="game" />
            <div v-show="game" class="flex gap-4 mt-6">
                <ViewButton :game="game" />
            </div>
            <div v-show="game.storyline" class="mt-6">
                <ViewDesc :storyline="game.storyline" />
            </div>
            <div v-show="game.artworks" class="mt-6">
                <ViewScreenshots :artworks="game.artworks" :name="game.name" />
            </div>
        </article>
        <div class="space-y-6">
            <Card>
                <template #title>Game Details</template>
                <template #content>
                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <p class="text-sm text-gray-500">Genre</p>
                            <p v-if="game.genres && game.genres.length > 0">{{ game?.genres[0].name }}</p>
                            <p v-else>No information</p>
                        </div>
                        <div>
                            <p class="text-sm text-gray-500">Release Date</p>
                            <p>{{ game.first_release_date ? stringDateFormatter(game.first_release_date) :
                                "No release date" }}</p>
                        </div>
                        <div>
                            <p class="text-sm text-gray-500">Developer</p>
                            <p v-if="game.companies && game.companies.length > 0">{{ game?.companies[0].name }}</p>
                            <p v-else>No information</p>
                        </div>
                        <div>
                            <p class="text-sm text-gray-500">Rating</p>
                            <Rating v-model="game.rating" readonly :cancel="false" />
                        </div>
                    </div>
                </template>
            </Card>
            <SimilarGames />
            <div class="grid grid-cols-2 gap-4">
                <Button label="Buy Now" class="grid-cols-1 w-full p-1" text outlined />
                <Button label="Download Demo" class=" w-full p-1" text raised />
            </div>
        </div>
    </main>

</template>