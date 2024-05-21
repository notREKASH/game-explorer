<script setup>
const props = defineProps({
    game: Object
})
</script>

<template>
    <p v-if="props.game.summary" class="text-ellipsis">{{ props.game.summary }}</p>
    <p v-else>
        No summary available for this game yet !
    </p>
</template>

<style scoped>
.text-ellipsis {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>