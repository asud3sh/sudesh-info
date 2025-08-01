<script setup>
const links = [{
  label: 'About Me ++',
  icon: 'i-heroicons-briefcase',
  to: '/portfolio',
},
{
  label: 'Gallery 📷🎶',
  icon: 'i-heroicons-square-3-stack-3d',
  to: '/gallery',
}]
</script>
<template>
    <AContainer class="about-page-container">
        <ASection class="about-block-section my-2">
            <h2 class="text-5xl">About</h2>
        </ASection>
        <ASection class="about-block-section my-4">
            <span class="text-2xl text-center">
                Learning and working with Information Science, distilling simplicity out of evergrowing information, turtle embarks towards wonders of tomorrow O:).
            </span>
        </ASection>
        <hr />
        <ASection class="about-block-section vnav-link my-2">
            <UVerticalNavigation :links="links" />
        </ASection>
        <hr />
        <ASection class="about-block-section my-2">
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
.vnav-link {
    @apply flex text-5xl;
}
</style>
