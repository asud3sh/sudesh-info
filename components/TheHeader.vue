<template>
    <AContainer>
        <header>
            <nav>
                <ul class="nav-links">
                    <li class="nav-link">
                        <NuxtLink to="/">
                            <UIcon name="i-heroicons-rectangle-group" />
                        </NuxtLink>
                    </li>
                    <li class="nav-link">
                        <NuxtLink to="/about">
                            <UIcon name="i-heroicons-user-circle" />
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
    @apply flex text-5xl;
}
</style>
