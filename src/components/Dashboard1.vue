<!-- src/views/Dashboard.vue -->
<template>
    <v-container>
        <v-card class="ma-5 pa-5" elevation="10">
            <v-select
                v-model="selectedPlug"
                :items="smartPlugs"
                item-value="name"
                item-text="name"
                label="Select a Smart Plug"
                outlined
            ></v-select>

            <v-divider class="my-4"></v-divider>

            <v-card-text v-if="selectedPlug">
                <h3>Status of {{ selectedPlug.name }}</h3>
                <p>Power: {{ selectedPlug.status.power ? 'On' : 'Off' }}</p>
                <p>Current Usage: {{ selectedPlug.status.usage }} kW</p>
            </v-card-text>

            <v-card-text v-else>
                <p>Please select a smart plug to view its status.</p>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue';

// Define the type for a Smart Plug
interface SmartPlug {
    name: string;
    status: {
        power: boolean;
        usage: number;
    };
}

// Sample data for smart plugs
const smartPlugs: Ref<SmartPlug[]> = ref([
    { name: 'Plug 1', status: { power: true, usage: 0.5 } },
    { name: 'Plug 2', status: { power: false, usage: 0 } },
    { name: 'Plug 3', status: { power: true, usage: 0.7 } },
]);

// Ref to keep track of the selected plug, with the correct type
const selectedPlug: Ref<SmartPlug | null> = ref(null);
</script>

<style scoped>
.v-card {
    max-width: 600px;
    margin: auto;
}
</style>
