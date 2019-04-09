<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>{{ app.name }}</span>
        <span class="font-weight-light"></span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <router-view :app="app" ></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Welcome from './components/Welcome'
import Login from './components/Login'
import data from '@/data.js'

export default {
  name: 'App',
  components: {
    Welcome,
    Login
  },
  data: () => ({
      app: data
  })
}
</script>
