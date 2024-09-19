<!-- src/App.vue -->
<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row>
          <v-col>
            <v-card>
              <v-card-title>Secret Message</v-card-title>
              <v-card-text>{{ secretMessage }}</v-card-text>
              <v-card-actions>
                <v-btn @click="fetchSecretMessage">Get Secret Message</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { getSecretMessage } from './services/api';

export default {
  data() {
    return {
      secretMessage: '', // State to store the secret message
    };
  },
  methods: {
    async fetchSecretMessage() {
      try {
        // Fetch the secret message from the environment
        this.secretMessage = await getSecretMessage();
      } catch (error) {
        console.error('Error fetching the secret message:', error);
      }
    },
  },
};
</script>

<style>
   
</style>
