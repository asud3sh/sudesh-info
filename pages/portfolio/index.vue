<template>
    <AContainer>
        <ASection class="text-5xl portfolio-section">
            <h3>
                <UIcon name="i-heroicons-briefcase" />
            </h3>
        </ASection>
        <ASection class="text-2xl portfolio-section">
            <span>Embedded C Developer <b>@imark</b></span>
        </ASection>
        <hr />
        <ASection class="text-xl portfolio-section">
            <span>{Software Development, Data Science, and Deep Learning.};</span>
        </ASection>
        <hr />
        <Section class="portfolio-section">
            <span class="text-3xl">
                <NuxtLink to="https://github.com/asud3sh" target="_blank" class="out-link">
                    <UIcon name="i-simple-icons-github" />
                </NuxtLink>
                <NuxtLink to="https://www.linkedin.com/in/acharya-sudesh/" target="_blank" class="out-link">
                    <UIcon name="i-simple-icons-linkedin" />
                </NuxtLink>
                <NuxtLink to="mailto:sudesh.contact@gmail.com" class="out-link">
                    <UIcon name="i-simple-icons-gmail" />  <!-- Gmail icon -->
                    <!-- OR use a generic email icon -->
                    <!-- <UIcon name="i-heroicons-envelope" /> -->
                </NuxtLink>
            </span>
        </Section>
        <hr />
        <ASection class="portfolio-section">
            <p class="text-xs"><i>
                    <b>Causes:</b> Arts and Culture • Environment • Libéré src & Decentralized
                    systems.</i>
            </p>
        </ASection>
    </AContainer>
</template>

<style scoped>
.portfolio-section {
    @apply flex justify-center;
}

.out-link {
    @apply text-2xl mr-1;
}
</style>