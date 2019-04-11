<template>
        <v-layout justify-space-around>
            <v-flex md6>
                <v-card>
                        <v-list dense>
                            <template v-for="item in items">
                                <v-list-tile
                                :key="item.title"
                                avatar>

                                <v-list-tile-content>
                                    <v-chip>
                                    <v-list-tile-sub-title>
                                        <span class='secondary--text'>
                                            {{item.username}}
                                        </span> &mdash;
                                        <span class="black--text">
                                            {{item.message}}
                                        </span>  </v-list-tile-sub-title>
                                    </v-chip>
                                </v-list-tile-content>
                                </v-list-tile>
                                
                            </template>
                            </v-list>
                        <v-text-field
                            class="pb-3"
                            counter="70"
                            placeholder="Send a message"
                            v-model="message"
                            :append-icon="marker ? 'mdi-map-marker' : 'mdi-map-marker-off'"
                            :append-outer-icon="message ? 'mdi-send' : 'mdi-microphone'"
                            :prepend-icon="icon"
                            clear-icon="mdi-close-circle"
                            clearable
                            type="text"
                            @click:append="toggleMarker"
                            @click:append-outer="sendMessage"
                            @click:prepend="changeIcon"
                            @click:clear="clearMessage"
                        ></v-text-field>
                </v-card>
            </v-flex>
        </v-layout>
</template>

<script>
export default {
    data: () => ({
        header: 'Main',
        items: [
            {
                username: 'Ali Connors',
                message: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
            },
            {
                username: 'Youshau',
                message: "Wish I could come, but I'm out of town this weekend."
            },
            {
                username: 'Sandra Adams',
                message: "Do you have Paris recommendations? Have you ever been? "
            }
        ],
        password: 'Password',
        show: false,
        marker: true,
        iconIndex: 0,
        icons: [
            'mdi-emoticon',
            'mdi-emoticon-cool',
            'mdi-emoticon-dead',
            'mdi-emoticon-excited',
            'mdi-emoticon-happy',
            'mdi-emoticon-neutral',
            'mdi-emoticon-sad',
            'mdi-emoticon-tongue'
        ]
        }),
    computed: {
      icon () {
        return this.icons[this.iconIndex]
      }
    },

    methods: {
      toggleMarker () {
        this.marker = !this.marker
      },
      sendMessage () {
        this.resetIcon()
        this.clearMessage()
      },
      clearMessage () {
        this.message = ''
      },
      resetIcon () {
        this.iconIndex = 0
      },
      changeIcon () {
        this.iconIndex === this.icons.length - 1
          ? this.iconIndex = 0
          : this.iconIndex++
      }
    }
}
</script>

<style>

</style>
