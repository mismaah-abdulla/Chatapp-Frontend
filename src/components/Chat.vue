<template>
        <v-layout justify-space-around>
            <v-flex xl6 lg6 md8 xs12 sm10>
                <v-card>
                    <div id="chatWindow">
                        <div v-for="msg in msgs" :key="msg.username">
                            <div class="chatBubble">
                                <span v-if="msg.username == 'Me'" class='primary--text font-weight-medium'>
                                    {{msg.username}}
                                </span>
                                <span v-else :style="{color:stringToColor(msg.username)}">
                                    {{msg.username}}
                                </span> &mdash;
                                <span class="black--text">
                                    {{msg.message}}
                                </span>
                            </div>
                            <br />
                        </div>
                    </div>
                        <v-text-field v-if="!username"
                            append-icon="send"
                            @click:append="selectuser"
                            class="pb-3 pl-4 pr-5"
                            counter="10"
                            placeholder="Enter a username"
                            v-model="userselect"
                            type="text"
                            v-on:keyup.enter="selectuser"
                        ></v-text-field>
                        <!-- Change submit to send when building -->
                        <v-text-field v-else
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
import { setTimeout } from 'timers'
export default {
    data: () => ({
        header: 'Main',
        ws: null,
        username: null,
        userselect: '',
        message: '',
        msgs: [
        ]
    }),
    //Uncomment before building
    // created () {
    //     this.ws = new WebSocket('ws://' + window.location.host + '/ws')
    //     this.ws.addEventListener('message', (e) => {
    //         var msg = JSON.parse(e.data)
    //         let newMessage = {}
    //         newMessage.username = msg.username
    //         newMessage.message = msg.message
    //         this.msgs.push(newMessage)
    //     })
    // },

    watch: {
        msgs (val) {
            setTimeout(() => {
                let chatWindow = document.getElementById('chatWindow')
                chatWindow.scrollTop = chatWindow.scrollHeight
            }, 50)
        }
    },

    methods: {
        //Uncomment send and comment submit before building
        // send () {
        //     if (this.message != '') {
        //         this.ws.send(
        //             JSON.stringify({
        //                 username: this.username,
        //                 message: this.message
        //             })
        //         )
        //         this.message = ''
        //     }
        // },
        submit () {
            let newMessage = {}
            newMessage.username = this.username
            newMessage.message = this.message
            this.msgs.push(newMessage)
            this.message = ''
        },
        selectuser () {
            this.username = this.userselect
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
    height: calc(100vh - 180px);
    overflow:auto;
    padding:25px;
}
</style>
