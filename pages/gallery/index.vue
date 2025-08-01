<template>
    <AContainer>
        <ASection class="text-5xl gallery-section">
            <h3>
                <UIcon name="i-heroicons-square-3-stack-3d" />
            </h3>
        </ASection>
        <ASection class="text-xl gallery-section">
            ~
        </ASection>
        <ASection class="text-xl gallery-section">
            [ \O/ ]
        </ASection>
        <hr />
        <Section class="gallery-section">
            <span class="text-3xl">
                <NuxtLink to="https://unsplash.com/@sud3sh_" target="_blank" class="out-link">
                    <UIcon name="i-simple-icons-unsplash" />
                </NuxtLink>
                <NuxtLink to="https://www.instagram.com/xpectron_/" target="_blank" class="out-link">
                    <UIcon name="i-simple-icons-instagram" />
                </NuxtLink>
                <NuxtLink to="https://soundcloud.com/xpectron" target="_blank" class="out-link">
                    <UIcon name="i-simple-icons-soundcloud" />
                </NuxtLink>
                <!-- <NuxtLink to="https://www.youtube.com/@sud3sh_" target="_blank" class="out-link">
                    <UIcon name="i-simple-icons-youtube" />
                </NuxtLink> -->
            </span>
        </Section>
        <hr />
        <ASection class="gallery-section">
            <span class="text-s"><i>.</i></span>
        </ASection>
    </AContainer>
</template>

<style scoped>
.gallery-section {
    @apply flex justify-center;
}

.out-link {
    @apply text-2xl m-1;
}
</style>