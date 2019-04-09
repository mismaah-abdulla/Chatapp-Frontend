<template>
  <v-container>
    <v-layout
      text-xs-center
      wrap
    >
      <v-flex xs12>
        <v-icon x-large color="blue">message</v-icon>
      </v-flex>

      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to {{ app.name }}
        </h1>
        <p class="subheading font-weight-regular">
          {{ app.description }}
        </p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import data from '@/data.js'
export default {
  data: () => ({
      app: data
  })
}
</script>

<style>

</style>
