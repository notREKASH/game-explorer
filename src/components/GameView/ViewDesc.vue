<script setup>
const props = defineProps({
    storyline: String
})
</script>

<template>
    <h2 class="text-2xl font-bold mb-4">Story Line</h2>
    <p class="text-gray-500">
        {{ props.storyline }}
    </p>
</template>