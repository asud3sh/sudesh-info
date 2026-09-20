<script setup>
const tags = [
    { label: 'Software', icon: 'i-heroicons-code-bracket' },
    { label: 'Data & AI', icon: 'i-heroicons-sparkles' },
    { label: 'Sonics', icon: 'i-heroicons-musical-note' },
    { label: 'Impressions', icon: 'i-heroicons-camera' },
    { label: 'Umwelt', icon: 'i-heroicons-globe-alt' },
    { label: 'Spirituality', icon: 'i-heroicons-sun' },
]
</script>

<template>
    <AContainer class="w-full">
        <ASection class="home-block-section mt-8 mb-4">
            <h1 class="text-6xl font-bold tracking-tight">Hello there!</h1>
        </ASection>

        <ASection>
            <hr />
        </ASection>

        <ASection class="home-block-section my-4">
            <span class="text-2xl">I am Sudesh 🌻</span>
        </ASection>

        <ASection class="home-block-section my-2 px-4">
            <p class="text-base opacity-70 max-w-md">
                Wandering through Automation, Sound, Light, and Silence.
            </p>
        </ASection>

        <ASection class="home-block-section flex-wrap gap-2 my-2 mt-4 px-4">
            <span v-for="tag in tags" :key="tag.label" class="home-tag">
                <UIcon :name="tag.icon" class="text-base" />
                {{ tag.label }}
            </span>
        </ASection>

        <ASection>
            <hr />
        </ASection>

        <ASection class="home-block-section my-4">
            <span class="text-2xl">📍🇳🇵</span>
        </ASection>

        <ASection class="home-block-section mb-8">
            <NuxtLink to="/about" class="home-cta">
                <span>Learn more</span>
                <UIcon name="i-heroicons-arrow-right" class="text-lg" />
            </NuxtLink>
        </ASection>
    </AContainer>
</template>

<style scoped>
.home-block-section {
    @apply flex justify-center items-center text-center;
}

.home-cta {
    @apply inline-flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors;
}

.home-tag {
    @apply inline-flex items-center gap-1.5 px-3 py-1 text-sm rounded-full border border-gray-200 dark:border-gray-700 opacity-80 transition-all duration-200 hover:opacity-100 hover:-translate-y-0.5;
}

hr {
    @apply w-full max-w-md mx-auto my-2 h-px border-0 bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-gray-600;
}
</style>