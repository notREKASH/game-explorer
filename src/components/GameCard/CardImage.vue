<script setup>
import getFullCoverUrl from '@/utils/getFullCoverUrl';

const props = defineProps({
    cover: Object,
    name: String
})
</script>

<template>
    <img v-if="props.cover && props.cover.url" :src="getFullCoverUrl(props.cover.url)" :alt="props.name"
        class="image-size" />
    <img v-else src="https://via.placeholder.com/264x352" alt="placeholder" class="image-size" />
</template>

<style scoped>
.image-size {
    height: 352px;
    width: 264px;
    object-fit: cover;
}
</style>