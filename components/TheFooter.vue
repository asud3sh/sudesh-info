<script setup>
const colorMode = useColorMode()
const router = useRouter()

const isDark = computed({
    get() {
        return colorMode.value === 'dark'
    },
    set() {
        colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
    }
})
</script>

<template>
    <AContainer class="w-full">
        <footer class="pb-4">
            <hr class="mb-3" />
            <div class="footer-controls">
                <UButton
                    icon="i-heroicons-arrow-left"
                    size="sm"
                    color="gray"
                    variant="ghost"
                    aria-label="Back"
                    @click="router.back()"
                />
                <ClientOnly>
                    <UButton
                        :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
                        size="sm"
                        color="gray"
                        variant="ghost"
                        aria-label="Toggle theme"
                        @click="isDark = !isDark"
                    />
                    <template #fallback>
                        <span class="inline-block w-8 h-8" />
                    </template>
                </ClientOnly>
                <UButton
                    icon="i-heroicons-arrow-right"
                    size="sm"
                    color="gray"
                    variant="ghost"
                    aria-label="Forward"
                    @click="router.forward()"
                />
            </div>
        </footer>
    </AContainer>
</template>

<style scoped>
.footer-controls {
    @apply flex justify-center items-center gap-4;
}

hr {
    @apply w-full h-px border-0 bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-gray-600;
}
</style>