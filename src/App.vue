<template>
    <v-app>
        <v-toolbar app dark height="40px">
            <v-toolbar-title color="primary" class="headline text-uppercase">
                <span>{{ app.name }}</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn flat color="accent" href="#/">
                Home
            </v-btn>
            <v-btn flat color="accent" href="https://github.com/mismaah-abdulla/chatapp" target="_blank">
                GitHub</v-btn>
            <v-btn flat color="accent" href="#/about">
                About
            </v-btn>
        </v-toolbar>

        <v-content>
            <router-view :app="app" ></router-view>
        </v-content>
    </v-app>
</template>

<script>
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
