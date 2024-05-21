<script setup>
import getFullCoverUrl from '@/utils/getFullCoverUrl'

const props = defineProps({
    artworks: Array,
    name: String
})
</script>

<template>
    <img v-if="props?.artworks[0].url" :src="getFullCoverUrl(props.artworks[0].url, 'screenshot_huge')"
        :alt="props.name" class="rounded-lg overflow-hidden" />
    <img v-else src="https://via.placeholder.com/264x352" alt="placeholder" class="rounded-lg overflow-hidden" />
</template>