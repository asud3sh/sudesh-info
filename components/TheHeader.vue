<template>
    <AContainer>
        <header>
            <nav>
                <ul class="nav-links">
                    <li class="nav-link">
                        <NuxtLink to="/" class="link-item">
                            <UIcon name="i-heroicons-rectangle-group" />
                            <span class="link-text">Home</span>
                        </NuxtLink>
                    </li>
                    <li class="nav-link">
                        <NuxtLink to="/about" class="link-item">
                            <UIcon name="i-heroicons-user-circle" />
                            <span class="link-text">About</span>
                        </NuxtLink>
                    </li>
                </ul>
            </nav>
            <hr />
        </header>
    </AContainer>
</template>

<style scoped>
.nav-links {
    @apply flex justify-between;
}

.nav-link {
    @apply flex;
}

.link-item {
    @apply flex flex-col items-center gap-1 text-5xl;
}

.link-text {
    @apply text-sm font-medium;
}
