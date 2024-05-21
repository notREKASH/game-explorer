<script setup>
import { useFavoriteList } from '@/utils/useFavoriteList';
import Button from 'primevue/button';

const props = defineProps({
    game: Object
});

const { isFavorite, addToMyList, removeFromMyList } = useFavoriteList(props.game);
</script>

<template>
    <Button v-if="isFavorite" label="Retirer de ma liste" icon="pi pi-heart-fill" raised @click="removeFromMyList"
        class="w-full p-1 text-red-700 outline outline-1 outline-red-200" />
    <Button v-else label="Ajouter à ma liste" icon="pi pi-heart" raised @click="addToMyList"
        class="w-full p-1 text-green-700 outline outline-1 outline-green-200" />
    <Button label="Share" icon="pi pi-share-alt" class="w-full p-1" text raised />
</template>