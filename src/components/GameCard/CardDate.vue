<script setup>
import { numDateFormater } from '@/utils/dateFormater';


const props = defineProps({
    date: Number
})
</script>

<template>
    <p v-if="props.date" class="m-0">
        {{ numDateFormater(props.date) }}
    </p>
    <p v-else>
        Date unknown
    </p>
</template>