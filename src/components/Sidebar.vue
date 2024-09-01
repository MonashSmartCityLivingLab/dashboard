<template>
    <v-container>
        <v-navigation-drawer :width="245" class="d-flex flex-column">
            <header class="navbar-header">
                <v-list-item title="Smart Home"></v-list-item>
                <v-divider thickness="4"></v-divider>
            </header>

            <div class="overflow-auto">
                <v-list-item link to="/dashboard">Dashboard</v-list-item>
                <v-list-item link>Devices</v-list-item>
                <v-list-item link>Load Disaggregation</v-list-item>
                <v-list-item link>Prediction</v-list-item>
                <v-list-item link>Recommender and Analysis</v-list-item>
                <v-list-item link>Help</v-list-item>
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
