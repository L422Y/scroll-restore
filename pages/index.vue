<template>
    <div>
        <h1>With basic content only, no images</h1>
        <h2 v-for="n in 100" :style="{background: generators.colorForNumber(n)}">
            {{ n }}
        </h2>
    </div>
</template>
<script lang="ts" setup>
const generators = useGenerators()
</script>
