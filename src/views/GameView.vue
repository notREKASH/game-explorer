<script setup>
import { onMounted, ref } from 'vue';
import { useGamesStore } from '@/stores/games';
import { useRoute } from 'vue-router';
import Loader from '@/components/SearchLoader.vue';
import Button from 'primevue/button';
import Card from 'primevue/card';

// Components
import ViewTitle from '@/components/GameView/ViewTitle.vue';
import ViewSummary from '@/components/GameView/ViewSummary.vue';
import ViewCoverImg from '@/components/GameView/ViewCoverImg.vue';
import ViewButton from '@/components/GameView/ViewButton.vue';
import ViewDesc from '@/components/GameView/ViewDesc.vue';
import ViewScreenshots from '@/components/GameView/ViewScreenshots.vue';


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
        console.log(game.value);

        console.log(game.value.artworks[0].url)
    }
    fetchGame();
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
            <ViewCoverImg :artworks="game.artworks" :name="game.name" />
            <div class="flex gap-4 mt-6">
                <ViewButton :game="game" />
            </div>
            <div class="mt-6">
                <ViewDesc :storyline="game.storyline" />
            </div>
            <div class="mt-6">
                <ViewScreenshots :artworks="game.artworks" :name="game.name" />
            </div>
        </article>
        <div class="space-y-6">
            <Card>
                <template #title>Game Details</template>
                <template #content>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <p className="text-sm text-gray-500">Genre</p>
                            <p>Action, Adventure</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Release Date</p>
                            <p>May 21, 2024</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Developer</p>
                            <p>Galactic Studios</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Publisher</p>
                            <p>Cosmic Games</p>
                        </div>
                    </div>
                </template>
            </Card>
            <Card>
                <template #title>System Requirements</template>
                <template #content>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <p className="text-sm text-gray-500">OS</p>
                            <p>Windows 10 or later</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Processor</p>
                            <p>Intel Core i5 or AMD Ryzen 5</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Memory</p>
                            <p>8GB RAM</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Graphics</p>
                            <p>NVIDIA GTX 1060 or AMD RX 580</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Storage</p>
                            <p>50GB available space</p>
                        </div>
                    </div>
                </template>
            </Card>
            <div className="grid grid-cols-2 gap-4">
                <Button label="Buy Now" class="grid-cols-1 w-full p-1" text outlined />
                <Button label="Download Demo" class=" w-full p-1" text raised />
            </div>
        </div>
    </main>

</template>