<script setup>
const appConfig = useAppConfig()
</script>

<template>
    <UCard class="full-screen-card">
        <AContainer>
            <TheHeader />
            <ASection class="main-page-container">
                <NuxtPage />
            </ASection>
            <TheFooter />
        </AContainer>
    </UCard>
</template>

<style scoped>
.full-screen-card {
    @apply h-screen w-screen m-0 rounded-none;
}
.main-page-container {
    @apply flex justify-center;
}
</style>