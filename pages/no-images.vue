<template>
    <div>
        <h1>Basic HTML Content Only/No Images</h1>
        <h2 v-for="n in 20" :style="{background: generators.colorForNumber(n)}">
            {{ n }}
        </h2>
    </div>
</template>
<script lang="ts" setup>
const generators = useGenerators()
</script>
