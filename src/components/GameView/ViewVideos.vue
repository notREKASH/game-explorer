<script setup>
import getFullYouTubeUrl from '@/utils/getFullYouTubeUrl'

const props = defineProps({
    videos: Array
})
</script>

<template>
    <h2 class="text-2xl font-bold mb-4">Videos</h2>
    <div class="flex flex-wrap gap-4">
        <iframe v-for="video in props.videos" :key="video.id" :src="getFullYouTubeUrl(video.video_id)" frameborder="0"
            allowfullscreen class="rounded-lg overflow-hidden"></iframe>
    </div>
</template>