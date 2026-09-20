<script setup>
const links = [
  { label: 'About Me ++', icon: 'i-heroicons-briefcase', to: '/portfolio' },
  { label: 'Gallery 📷🎶', icon: 'i-heroicons-square-3-stack-3d', to: '/gallery' },
]
</script>

<template>
    <AContainer class="w-full">
        <ASection class="about-block-section text-5xl mt-8">
            <UIcon name="i-heroicons-user-circle" class="inline-block" />
        </ASection>

        <ASection class="about-block-section text-xl my-4 text-center">
            <span>
                Learning and working with Information Science, distilling simplicity out of evergrowing information, turtle embarks towards wonders of tomorrow O:).
            </span>
        </ASection>

        <ASection>
            <hr />
        </ASection>

        <ASection class="about-block-section my-4">
            <UVerticalNavigation
                :links="links"
                :ui="{
                    wrapper: 'w-full max-w-xs',
                    base: 'justify-center',
                    label: 'text-xl font-bold',
                    icon: { base: 'w-6 h-6' },
                }"
            />
        </ASection>

        <ASection>
            <hr />
        </ASection>

        <ASection class="about-block-section my-4">
            <p class="text-xs text-center">
                <i>
                    <b>Interests:</b> Automation • Acoustics • Graphics
                </i>
            </p>
        </ASection>
    </AContainer>
</template>

<style scoped>
.about-block-section {
    @apply flex justify-center items-center;
}
hr {
    @apply w-full max-w-md mx-auto my-2 border-t border-gray-200 dark:border-gray-700;
}
</style>