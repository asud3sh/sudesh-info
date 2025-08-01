<template>
    <AContainer>
        <ASection class="text-5xl gallery-section">
            <h3>
                <UIcon name="i-heroicons-square-3-stack-3d" />
            </h3>
        </ASection>
        <ASection class="my-4">
            <h3 class="text-3xl"> <b>Gallery</b> </h3>
        </ASection>
        <hr />
        <ASection class="text-xl gallery-section my-2">
            ~
        </ASection>
        <ASection class="text-xl gallery-section">
            <b>\O/</b>
        </ASection>
        <hr />
        <Section class="gallery-section my-2">
            <span class="text-3xl">
                <NuxtLink to="https://soundcloud.com/xpectron" target="_blank" class="out-link mx-2">
                    <UIcon name="i-simple-icons-soundcloud" />
                </NuxtLink>
                <NuxtLink to="https://unsplash.com/@sud3sh_" target="_blank" class="out-link mx-2">
                    <UIcon name="i-simple-icons-unsplash" />
                </NuxtLink>
                <NuxtLink to="https://www.instagram.com/xpectron_/" target="_blank" class="out-link mx-2">
                    <UIcon name="i-simple-icons-instagram" />
                </NuxtLink>
            </span>
        </Section>
        <hr />
        <ASection class="text-xl gallery-section my-2">
            <b>/ \</b>
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