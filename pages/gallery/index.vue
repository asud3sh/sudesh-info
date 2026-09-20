<template>
    <AContainer class="w-full">
        <ASection class="gallery-section text-5xl mt-8">
            <UIcon name="i-heroicons-square-3-stack-3d" />
        </ASection>

        <ASection>
            <hr />
        </ASection>

        <!-- Stickman -->
        <ASection class="gallery-section flex-col font-mono text-xl leading-tight my-6 select-none">
            <span class="opacity-60">~</span>
            <b class="text-2xl">\O/</b>

            <div class="flex items-center justify-center gap-2 my-2 text-3xl">
                <NuxtLink
                    v-for="link in links"
                    :key="link.label"
                    :to="link.to"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="out-link"
                    :aria-label="link.label"
                    :title="link.label"
                >
                    <UIcon :name="link.icon" />
                </NuxtLink>
            </div>

            <b class="text-2xl">/ \</b>
        </ASection>

        <ASection>
            <hr />
        </ASection>

        <ASection class="gallery-section my-4">
            <p class="text-xs text-center">
                <i><b>Frequencies</b> • <b>Frames</b> • <b>Moments</b></i>
            </p>
        </ASection>
    </AContainer>
</template>

<script setup>
const links = [
    { label: 'SoundCloud', icon: 'i-simple-icons-soundcloud', to: 'https://soundcloud.com/xpectron' },
    { label: 'Unsplash', icon: 'i-simple-icons-unsplash', to: 'https://unsplash.com/@sud3sh_' },
    { label: 'Instagram', icon: 'i-simple-icons-instagram', to: 'https://www.instagram.com/sud3sh_/' },
]
</script>

<style scoped>
.gallery-section {
    @apply flex justify-center items-center text-center;
}

.out-link {
    @apply inline-flex items-center p-2 rounded-lg opacity-80 transition-all duration-200 hover:opacity-100 hover:-translate-y-0.5 hover:bg-gray-100 dark:hover:bg-gray-800;
}

hr {
    @apply w-full max-w-md mx-auto my-2 h-px border-0 bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-gray-600;
}
</style>