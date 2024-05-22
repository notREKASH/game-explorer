<script setup>
import getFullCoverUrl from '@/utils/getFullCoverUrl'

const props = defineProps({
    game: Object
})

</script>

<template>
    <img v-if="props.game.artworks && props.game.artworks.length > 0 && props.game.artworks[0].url"
        :src="getFullCoverUrl(props.game.artworks[0].url, 'screenshot_huge')" :alt="props.game.name"
        class="rounded-lg overflow-hidden" />
    <img v-else-if="props.game.cover" :src="getFullCoverUrl(props.game.cover.url, 'screenshot_huge')" :alt="props.name"
        class="rounded-lg overflow-hidden" />
</template>
