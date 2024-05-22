<script setup>
import { numDateFormatter } from '@/utils/dateFormatter';


const props = defineProps({
    date: Number
})
</script>

<template>
    <p v-if="props.date" class="m-0">
        {{ numDateFormatter(props.date) }}
    </p>
    <p v-else>
        Date unknown
    </p>
</template>