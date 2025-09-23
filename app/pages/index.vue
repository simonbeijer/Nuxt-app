<script setup lang="ts">
const input = ref('')

watch(input, (newInput, oldInput) => {

    console.log("parent" , newInput)
})

</script>
<template>
    <div class="flex-center" style="padding: 2rem;">
        <Input v-model="input" />
        
    </div>
</template>