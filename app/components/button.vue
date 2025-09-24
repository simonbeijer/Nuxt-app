<script setup lang="ts">

const props = defineProps<{

        title: string

}>()

const emit = defineEmits(['clicked'])

function buttonClicked() {
    emit('clicked')
}

</script>
<template>

<button @click="buttonClicked">
    {{ props.title }}
</button>

</template>

<style scoped>
button {
    border: none;
    border-radius: 5px;
    height: 34px;
    box-shadow: var(--shadow);
    font-size: 1.1rem;
}
</style>