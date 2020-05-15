<template>
    <v-app>
        <v-toolbar app dark height="40px" class="px-2">
            <img src="/Logo_deep_orange.png" style="width:40px;height:40px">
            <v-toolbar-title color="primary" class="headline">
                <span class="secondary--text">{{ app.name }}</span>
            </v-toolbar-title>
            <span v-if="isLoggedIn">
                <div class="userBubble">
                    <span :style="{color:stringToColor(username)}">{{username}}</span>
                    <span class="vert"> | </span>
                    <a @click="logout">Logout</a>
                </div>
            </span>
            <v-spacer></v-spacer>
            <v-btn flat color="accent" to="/">
                Home
            </v-btn>
            <v-btn flat color="accent" to="/chats">
                Chats
            </v-btn>
            <v-btn flat color="accent" to="/about">
                About
            </v-btn>
            <v-toolbar-side-icon v-if="$route.path==='/chats'"  @click="drawer = !drawer" class="hidden-lg-and-up"></v-toolbar-side-icon>
        </v-toolbar>
        <v-content>
            <v-navigation-drawer v-if="$route.path==='/chats'" v-model="drawer" fixed app right clipped dark :width="280" >
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
            <v-btn href="https://github.com/mismaah/Chatapp-Frontend" target="_blank"
            v-if="$route.path!=='/Chats'"
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
    computed : {
      isLoggedIn : function(){return this.$store.getters.isLoggedIn},
      username: function(){return this.$store.getters.getCurrentUser}
    },
    data: () => ({
        app: data,
        drawer: null,
        chats: [
            { title: 'Main', icon: 'dashboard', current: true },
            { title: 'Chat 2', icon: 'question_answer', current: false },
            { title: 'Chat 3', icon: 'question_answer', current: false }
        ]
    }),
    methods: {
        logout: function () {
            this.$store.dispatch('logout')
            .then(() => {
            this.$router.push('/')
            })
        },
        stringToColor (str) {
            var hash = 0
            for (var i = 0; i < str.length; i++) {
                hash = str.charCodeAt(i) + ((hash << 5) - hash)
            }
            var color = '#'
            for (var j = 0; j < 3; j++) {
                var value = (hash >> (j * 8)) & 0xFF
                color += ('00' + value.toString(16)).substr(-2)
            }
            return color
        }
    }
}
</script>

<style>
.userBubble {
    display: inline-block;
    margin-bottom: 10px;
    background-color: #E1F5FE;
    padding: 5px;
    padding-left: 8px;
    padding-right: 8px;
    margin: 0 auto;
    margin-left: 10px;
    max-width: 100%;
    border-radius: 10px;
    word-wrap: break-word;
    font-size: 12px;
}
.vert {
    color: gray;
    cursor: default;
}
</style>
