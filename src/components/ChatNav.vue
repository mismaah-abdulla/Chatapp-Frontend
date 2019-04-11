<template>
    <v-layout>
            <v-navigation-drawer absolute dark :width="250">
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
                            v-for="item in items"
                            :key="item.title"
                            @click=""
                        >
                            <v-list-tile-action>
                            <v-icon>{{ item.icon }}</v-icon>
                            </v-list-tile-action>

                            <v-list-tile-content>
                            <v-list-tile-title v-if="item.current" class="primary--text">{{ item.title }}</v-list-tile-title>
                            <v-list-tile-title v-else>{{ item.title }}</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </v-list>
            </v-navigation-drawer>
    </v-layout>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          { title: 'Main', icon: 'dashboard', current: true },
          { title: 'Chat 2', icon: 'question_answer', current: false },
          { title: 'Chat 3', icon: 'question_answer', current: false }
        ],
        right: null
      }
    }
  }
</script>
