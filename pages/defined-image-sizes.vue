<template>
    <div>
        <h1>With static/defined image sizes</h1>
        <h2 v-for="n in 20" :style="{background: generators.colorForNumber(n)}">
            {{ n }}
            <img :height="n * 18" :src="generators.imageUrlForN(n)" :width="n * 20" alt="">
        </h2>
    </div>
</template>
<script lang="ts" setup>
const generators = useGenerators()
</script>
