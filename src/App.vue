<template>
    <v-app>
        <v-toolbar app dark height="40px" class="px-2">
            <v-toolbar-side-icon  v-if="$route.path==='/Chats'"  @click="drawer = !drawer" class="hidden-lg-and-up"></v-toolbar-side-icon>
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
            <v-navigation-drawer v-if="$route.path==='/Chats'" v-model="drawer" fixed app clipped dark :width="280" class="hidden-sm-and-down">
                    <v-toolbar >
                        <v-list>
                            <v-list-tile>
                            <v-list-tile-title class="subheading font-weight-medium" >
                                Chats
                            </v-list-tile-title>
                            </v-list-tile>
                        </v-list>
                    </v-toolbar>

                    <v-divider></v-divider>

                    <v-list dense class="pa-0">
                        <v-list-tile
                            v-for="chat in chats"
                            :key="chat.title">
                            <v-list-tile-action>
                            <v-icon>{{ chat.icon }}</v-icon>
                            </v-list-tile-action>

                            <v-list-tile-content>
                            <v-list-tile-title v-if="chat.current" class="primary--text">{{ chat.title }}</v-list-tile-title>
                            <v-list-tile-title v-else>{{ chat.title }}</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </v-list>
            </v-navigation-drawer>
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
        app: data,
        drawer: null,
        chats: [
                { title: 'Main', icon: 'dashboard', current: true },
                { title: 'Chat 2', icon: 'question_answer', current: false },
                { title: 'Chat 3', icon: 'question_answer', current: false }
            ]
    })
}
</script>

<style>

</style>
