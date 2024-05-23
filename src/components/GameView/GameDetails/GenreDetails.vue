<script setup>
const props = defineProps({
    genres: Array
});
</script>

<template>
    <div>
        <p class="text-sm text-gray-500">Genre</p>
        <p v-if="genres && props.genres.length > 0">{{ props?.genres[0].name }}</p>
        <p v-else>No information</p>
    </div>
</template>