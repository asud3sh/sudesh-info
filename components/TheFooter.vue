<script setup>
const colorMode = useColorMode()
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
    <AContainer class="flex justify-center">
        <footer>
            <hr />
            <span>
                <UButton
                    icon="i-heroicons-chevron-double-left-16-solid"  
                    size="sm"
                    color="primary"
                    @click="$router.go(-1)"
                    variant="ghost"
                />
                <ClientOnly>
                    <UButton :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'" variant="ghost"
                        aria-label="Theme" @click="isDark = !isDark" />
                    <template #fallback>
                        <span class="w-8 h-8" />
                    </template>
                </ClientOnly>
                <UButton
                    icon="i-heroicons-chevron-double-right-16-solid"  
                    size="sm"
                    color="primary"
                    @click="$router.go(+1)"
                    variant="ghost"
                />
            </span>
        </footer>
    </AContainer>
</template>
