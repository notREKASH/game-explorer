<script setup>
const props = defineProps({
    companies: Array
});
</script>

<template>
    <div>
        <p class="text-sm text-gray-500">Developer</p>
        <p v-if="props.companies && props.companies.length > 0">{{ props?.companies[0].name }}</p>
        <p v-else>No information</p>
    </div>
</template>