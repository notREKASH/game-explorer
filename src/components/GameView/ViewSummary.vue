<script setup>
const props = defineProps({
    summary: String
})
</script>

<template>
    <p class="text-gray-500 mb-6">{{ props.summary }}</p>
</template>