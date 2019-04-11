<template>
        <v-layout justify-space-around>
            <v-flex md6 xs12 sm10>
                <v-card>
                    <div id="chatWindow">
                        <div v-for="item in items" :key="item">
                            <div class="chatBubble">
                                <span v-if="item.username == 'Me'" class='primary--text font-weight-medium'>
                                    {{item.username}}
                                </span>
                                <span v-else :style="{color:stringToColor(item.username)}">
                                    {{item.username}}
                                </span> &mdash;
                                <span class="black--text">
                                    {{item.message}}
                                </span>
                            </div>
                            <br />
                        </div>
                    </div>
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
import { setTimeout } from 'timers';
export default {
    data: () => ({
        header: 'Main',
        items: [
            {
                username: 'Shaaik',
                message: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
            },
            {
                username: 'Shimaanath',
                message: "Wish I could come, but I'm out of town this weekend."
            },
            {
                username: 'Mismaah',
                message: "Do you have Paris recommendations? Have you ever been? "
            },
            {
                username: 'Shamis',
                message: 'No'
            },
            {
                username: 'Shamis',
                message: 'ynes'
            }
            ],
        message: ''
        }),
    computed: {
    },

    watch: {
        items: function (val) {
            setTimeout(() => {
                let chatWindow = document.getElementById("chatWindow")
                chatWindow.scrollTop = chatWindow.scrollHeight
            }, 50) 
            
        }
    },

    methods: {
        submit () {
            let newMessage = {}
            newMessage.username = 'Me'
            newMessage.message = this.message
            this.items.push(newMessage)
            this.message = ''
        },
        stringToColor (str) {
            var hash = 0;
            for (var i = 0; i < str.length; i++) {
                hash = str.charCodeAt(i) + ((hash << 5) - hash);
            }
            var color = '#';
            for (var i = 0; i < 3; i++) {
                var value = (hash >> (i * 8)) & 0xFF;
                color += ('00' + value.toString(16)).substr(-2);
            }
            return color;
        }
    }
}
</script>

<style>
.chatBubble {
    display: inline-block;
    margin-bottom: 10px;
    background-color: #E1F5FE;
    padding: 10px;
    padding-left: 15px;
    padding-right: 15px;
    max-width: 100%;
    border-radius: 20px;
    word-wrap: break-word;
}
#chatWindow {
    height:80vh;overflow: auto; padding:20px;
}
</style>
