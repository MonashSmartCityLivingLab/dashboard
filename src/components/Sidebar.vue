<template>
    <v-container>
        <v-navigation-drawer :width="245" class="d-flex flex-column">
            <header class="navbar-header">
                <v-list-item title="Smart Home"></v-list-item>
                <v-divider thickness="4"></v-divider>
            </header>

            <div class="overflow-auto">
                <v-list-item link>Something 1</v-list-item>
                <v-list-item link>Something 2</v-list-item>
            </div>

            <template v-slot:append>
                <div class="pa-4">
                    <v-btn block elevation="14" prepend-icon="mdi-cog">
                        settings
                    </v-btn>
                </div>
            </template>
        </v-navigation-drawer>
    </v-container>
</template>
<script setup lang="ts"></script>

<style scoped></style>
