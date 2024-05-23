<script setup>
import { ref, onMounted } from 'vue';

// Components
import GenreDetails from "./GameDetails/GenreDetails.vue";
import ReleaseDateDetails from "./GameDetails/ReleaseDateDetails.vue";
import DeveloperDetails from "./GameDetails/DeveloperDetails.vue";
import RatingDetails from "./GameDetails/RatingDetails.vue"

const props = defineProps({
    game: Object
});

const rating = ref(0);

onMounted(() => {
    rating.value = props.game.rating;
});

</script>

<template>
    <div class="grid grid-cols-2 gap-4">
        <GenreDetails :genres="game.genres" />
        <ReleaseDateDetails :first_release_date="game.first_release_date" />
        <DeveloperDetails :companies="game.companies" />
        <RatingDetails :game="game" />
    </div>
</template>