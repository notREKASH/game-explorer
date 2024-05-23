<script setup>
import { stringDateFormatter } from '@/utils/dateFormatter';
const props = defineProps({
    first_release_date: Number
});

</script>

<template>
    <div>
        <p class="text-sm text-gray-500">Release Date</p>
        <p>{{ props.first_release_date ? stringDateFormatter(props.first_release_date) :
            "No release date" }}</p>
    </div>
</template>