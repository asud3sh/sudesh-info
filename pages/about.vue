<script setup>
const links = [{
    label: 'profile',
    avatar: {
        src: 'https://avatars.githubusercontent.com/u/12827390'
    },
    to: '/portfolio',
},
{
    label: 'gallery',
    icon: 'i-heroicons-square-3-stack-3d',
    to: '/gallery'
}]
</script>
<template>
    <AContainer class="about-page-container">
        <ASection class="about-block-section">
            <h2 class="text-5xl"><u>About</u></h2>
        </ASection>
        <ASection class="about-block-section">
            <span class="text-2xl text-center">
                Learning and working with Information Science, distilling simplicity out of evergrowing information, turtle embarks towards wonders of tomorrow O:).
            </span>
        </ASection>
        <hr />
        <ASection class="about-block-section">
            <UVerticalNavigation :links="links" />
        </ASection>
        <hr />
        <ASection class="about-block-section">
            <span class="text-2xl">🌻</span>
        </ASection>
    </AContainer>
</template>
<style scoped>
.about-page-conainer {
    @apply flex;
}

.about-block-section {
    @apply flex justify-center;
}
</style>
