<script setup>
import Card from 'primevue/card';
import Button from 'primevue/button';
import Date from '@/components/GameCard/CardDate.vue';
import Image from '@/components/GameCard/CardImage.vue';
import CardSummary from '@/components/GameCard/CardSummary.vue';
import { RouterLink } from 'vue-router';
import { useFavoriteList } from '@/utils/useFavoriteList';

const props = defineProps({
    game: Object
});

const { isFavorite, addToMyList, removeFromMyList } = useFavoriteList(props.game);

</script>

<template>
    <Card class="w-64 overflow-hidden">
        <template #header>
            <Image :cover="props.game.cover" :name="props.game.name" />
        </template>
        <template #title>
            <h3 class="title-ellipsis">{{ props.game.name }}</h3>
        </template>
        <template #subtitle>
            <Date :date="props.game.first_release_date" />
        </template>
        <template #content>
            <CardSummary :game="props.game" />
        </template>
        <template #footer>
            <div class="flex gap-3 mt-1 flex-col">
                <RouterLink :to="{ name: 'Game', params: { id: props.game.id } }" class="w-full">
                    <Button label="Voir plus" icon="pi pi-eye" raised
                        class="w-full p-1 text-blue-700 outline outline-1 outline-blue-200" />
                </RouterLink>
                <Button v-if="isFavorite" label="Retirer de ma liste" icon="pi pi-heart-fill" raised
                    @click="removeFromMyList" class="w-full p-1 text-red-700 outline outline-1 outline-red-200" />
                <Button v-else label="Ajouter à ma liste" icon="pi pi-heart" raised @click="addToMyList"
                    class="w-full p-1 text-green-700 outline outline-1 outline-green-200" />
            </div>
        </template>
    </Card>
</template>

<style scoped>
.title-ellipsis {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 4rem;
}
</style>
