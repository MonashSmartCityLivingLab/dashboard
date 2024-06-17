<template>
    <v-app>
        <v-layout class="rounded rounded-md">
            <Sidebar />
            <v-main
                class="d-flex align-center justify-center"
                style="min-height: 300px"
            >
            </v-main>
        </v-layout>
    </v-app>
</template>

<script setup lang="ts">
import Sidebar from "./components/Sidebar.vue";
</script>

<style scoped>
.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
}
.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
