<template>
    <div>
        <h1 v-for="n in 100" :style="{background: colorForNumber(n)}">
            {{ n }}
        </h1>
    </div>
</template>
<script lang="ts" setup>
const colorForNumber = (n: number) => {
    const hue = n * 137.508 // use golden angle approximation
    return `hsl(${hue},50%,75%)`
}
</script>
<style scoped>
h1 {
    font-size: 10rem;
    text-align: center;
}
</style>
