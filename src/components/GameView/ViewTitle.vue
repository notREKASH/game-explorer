<script setup>
const props = defineProps({
    title: String
})
</script>

<template>
    <h1 class="text-4xl font-bold mb-4">{{ props.title }}</h1>
</template>