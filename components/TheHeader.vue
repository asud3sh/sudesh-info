<script setup>
const links = [
    { label: 'Home', icon: 'i-heroicons-home', to: '/' },
    { label: 'About', icon: 'i-heroicons-user-circle', to: '/about' },
]
</script>

<template>
    <AContainer class="w-full">
        <header class="pt-6">
            <nav aria-label="Main">
                <ul class="nav-links">
                    <li v-for="link in links" :key="link.to">
                        <NuxtLink :to="link.to" class="link-item">
                            <UIcon :name="link.icon" class="text-5xl" />
                            <span>{{ link.label }}</span>
                        </NuxtLink>
                    </li>
                </ul>
            </nav>
            <hr class="mt-4" />
        </header>
    </AContainer>
</template>

<style scoped>
.nav-links {
    @apply flex justify-between items-center;
}

.link-item {
    @apply grid justify-items-center gap-1.5 px-4 py-2 rounded-lg opacity-70 transition-all duration-200 hover:opacity-100 hover:bg-gray-100 dark:hover:bg-gray-800;
}

.link-item span {
    @apply text-base font-medium tracking-wide;
}

/* active route */
.link-item.router-link-exact-active {
    @apply opacity-100 text-primary-500 dark:text-primary-400;
}

hr {
    @apply w-full h-px border-0 bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-gray-600;
}
</style>