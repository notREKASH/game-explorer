<script setup>
import { ref } from 'vue'

const year = ref(new Date().getFullYear())
</script>

<template>
    <footer class="bg-gray-800 text-white text-center p-4 mt-8 text-sm">
        <p>&copy; {{ year }} - All Rights Reserved</p>
        <p class=" mt-2">Made with <span class="text-red-500">❤</span> by <a href="https://github.com/notREKASH"
                target="_blank" class="underline">notREKASH</a></p>
    </footer>
</template>
