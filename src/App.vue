<template>
    <v-app>
        <v-toolbar app>
            <v-toolbar-title class="headline text-uppercase">
                <span>{{ app.name }}</span>
                <span class="font-weight-light"></span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn flat href="#/">
                Home
            </v-btn>
            <v-btn flat href="https://github.com/mismaah-abdulla/chatapp" target="_blank">
                GitHub</v-btn>
            <v-btn flat href="#/about">
                About
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
    },
    data: () => ({
        app: data
    })
}
</script>
