<template>
    <div class="card">
        <slot />
    </div>
</template>
<style scoped>
.card {
    padding: 3rem;
    background-color: var(--background);
    box-shadow: var(--shadow);
    border-radius: 5px;
}
</style>