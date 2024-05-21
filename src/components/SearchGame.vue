<script setup>
import { ref } from 'vue'
import { useGamesStore } from '@/stores/games'
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import InputText from 'primevue/inputtext';

const searchTerm = ref('')
const gamesStore = useGamesStore()

const searchGames = () => {
    gamesStore.searchGames(searchTerm.value)
}
</script>

<template>
    <div class="flex flex-row justify-center">
        <IconField iconPosition="left" class="flex">
            <InputIcon class="pi pi-search"></InputIcon>
            <InputText type="text" id="username" v-model="searchTerm" @keyup.enter="searchGames"
                class="text-black pl-10" />
        </IconField>
    </div>
</template>
