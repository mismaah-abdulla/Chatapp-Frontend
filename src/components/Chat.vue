<template>
        <v-layout justify-space-around>
            <v-flex md6>
                <v-card>
                        <v-list id="chatWindow" dense style="height:80vh;overflow: auto">
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
                            append-icon="send"
                            @click:append="submit"
                            class="pb-3 pl-4 pr-5"
                            counter="70"
                            placeholder="Send a message"
                            v-model="message"
                            clearable
                            type="text"
                            v-on:keyup.enter="submit"
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
        message: ''
        }),
    computed: {
    },

    watch: {
        items: function (val) {
            let chatWindow = document.getElementById("chatWindow")
            chatWindow.scrollTop = chatWindow.scrollHeight
        }
    },

    methods: {
        submit () {
            let newMessage = {}
            newMessage.username = 'Me'
            newMessage.message = this.message
            this.items.push(newMessage)
            this.message = ''
            
        }
    }
}
</script>

<style>

</style>
