<script setup lang="ts">

const props = defineProps<{
    modelValue: string
}>()

const emit = defineEmits<{ (e: 'update:modelValue', value: string): void }>()

function setInput(e: Event) {
    emit('update:modelValue', (e.target as HTMLInputElement).value)

}
</script>
<template>
    <div>
        <input @input="setInput" :value="props.modelValue" />
    </div>
</template>
<style scoped>
input {
    border: none;
    border-radius: 5px;
    width: 320px;
    height: 34px;
    box-shadow: var(--shadow);
    font-size: 1.1rem;
    padding-left: 12px;
}

</style>