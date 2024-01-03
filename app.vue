<template>
    <nav>
        <NuxtLink v-for="route of $router.options.routes" :to="route.path">
            {{ route.name }}
        </NuxtLink>
    </nav>
    <main>
        <NuxtPage/>
    </main>
</template>
<style>
nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #eee;
    padding: 1rem;
}
h1 {
    font-size: 10rem;
    text-align: center;
}

h2 {
    text-align: center;
}
</style>
