<script setup>
import getFullCoverUrl from '@/utils/getFullCoverUrl'
import Image from 'primevue/image';

const props = defineProps({
    artworks: Array,
    name: String
})
</script>

<template>
    <h2 class="text-2xl font-bold mb-4">Screenshots</h2>
    <div class="grid grid-cols-3 gap-4">
        <div v-for="screenshot in props.artworks" :key="screenshot.id">
            <Image :src="getFullCoverUrl(screenshot.url, 'screenshot_big')" :alt="props.name"
                class="rounded-lg overflow-hidden" preview />
        </div>
    </div>
</template>