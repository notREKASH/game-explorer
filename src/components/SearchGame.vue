<script setup>
import { ref } from 'vue'
import { useGamesStore } from '@/stores/games'
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import InputText from 'primevue/inputtext';
import { useRouter } from 'vue-router';
import { useNavigationsStore } from '@/stores/navigations';

const router = useRouter()

const searchTerm = ref('')
const gamesStore = useGamesStore()
const navigationStore = useNavigationsStore()

const searchGames = () => {
    if (!searchTerm.value) {
        gamesStore.fetchTopGames()
    } else if (router.currentRoute.value.name === 'Game') {
        navigationStore.setRedirectedFromGame(true)
        router.push({ name: 'Home' })
        gamesStore.searchGames(searchTerm.value)
    } else {
        navigationStore.setRedirectedFromGame(false)
        gamesStore.searchGames(searchTerm.value)
    }
}
</script>

<template>
    <div class="flex flex-row justify-center">
        <IconField iconPosition="left" class="flex">
            <InputIcon class="pi pi-search"></InputIcon>
            <InputText type="text" id="username" v-model="searchTerm" @keyup.enter="searchGames"
                class="text-black pl-10 md:py-1" />
        </IconField>
    </div>
</template>
