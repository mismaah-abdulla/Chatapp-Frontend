<template>
    <v-app>
        <v-toolbar app dark height="40px" class="px-2">
            <v-toolbar-side-icon  v-if="$route.path==='/Chats'"  @click="$emit('drawer-click')" class="hidden-lg-and-up"></v-toolbar-side-icon>
            <img src="/Logo_deep_orange.png" style="width:40px;height:40px">
            <v-toolbar-title color="primary" class="headline">
                <span class="secondary--text">{{ app.name }}</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn flat color="accent" href="#/">
                Home
            </v-btn>
            <v-btn flat color="accent" href="#/about">
                About
            </v-btn>
        </v-toolbar>

        <v-content>
            <router-view :app="app" ></router-view>

                <v-btn href="https://github.com/mismaah-abdulla/chatapp" target="_blank"
                flat
                fixed
                bottom
                right
                fab
                small
                ><img src="/githubLogo.png" style="width:35px;height:35px"></v-btn>

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

<style>

</style>
