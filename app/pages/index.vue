<script setup lang="ts">
import { useWeather } from '~/composable/useWeather'

const input = ref('')
const { getWeather } = useWeather()



async function run() {
    const res = await getWeather(input.value);
    console.log(res)
    
}

</script>
<template>
    <div class="flex-center" style="padding: 2rem; flex-direction: column;gap: 1rem;">
        <div class="flex-center" >
            <Input v-model="input" />
            <Button @clicked="run" title="Search" style="margin-left: 1rem;"></Button>
        </div>
        <Card>
            <p>test</p>
        </Card>
    </div>
</template>