<script setup>
import Paginator from 'primevue/paginator';
import { computed, ref } from 'vue';
import { useGamesStore } from '@/stores/games';

const gamesStore = useGamesStore();
const searchQuery = computed(() => gamesStore.searchQuery);

const first = ref(gamesStore.page * 12);
const rows = ref(gamesStore.limit);
const totalRecords = ref(100);

const pageChange = (event) => {
    if (event.page === 1) {
        gamesStore.page = 1;
    } else {
        gamesStore.page = event.first / 12;
    }
    gamesStore.limit = event.rows;
    if (searchQuery.value) {
        console.log('searchQuery.value', searchQuery.value);
        gamesStore.searchGames(searchQuery.value);
    } else {
        gamesStore.fetchTopGames();
    }
}
</script>

<template>
    <Paginator :rows="rows" :totalRecords="totalRecords" :first="first" @page="pageChange"></Paginator>
</template>
