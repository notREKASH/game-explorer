<script setup>
import Rating from 'primevue/rating';
import { ref, onMounted } from 'vue';

const props = defineProps({
    game: Object
});

const rating = ref(0);

onMounted(() => {
    rating.value = props.rating;
});
</script>

<template>
    <div>
        <p class="text-sm text-gray-500">Rating</p>
        <Rating v-model="rating" readonly :cancel="false" />
    </div>
</template>