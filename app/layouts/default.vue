<script setup lang="ts">
</script>

<template>
    <div>
        <Header></Header>
        <main>
            <slot />
        </main>

    </div>

</template>
<style scoped>
main {
    font-family: var(--font-mono);
}
</style>