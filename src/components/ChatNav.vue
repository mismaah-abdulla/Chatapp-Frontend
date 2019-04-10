<template>
  <v-navigation-drawer clipped permanent dark>
    <v-toolbar flat>
      <v-list>
        <v-list-tile>
          <v-list-tile-title class="subheading font-weight-medium" >
            Chats
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-toolbar>

    <v-divider></v-divider>

    <v-list dense class="pt-0">
      <v-list-tile
        v-for="item in items"
        :key="item.title"
        @click=""
      >
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          { title: 'Main', icon: 'dashboard' },
          { title: 'Chat 2', icon: 'question_answer' },
          { title: 'Chat 3', icon: 'question_answer' }
        ],
        right: null
      }
    }
  }
</script>
