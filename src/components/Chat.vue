<template>
        <v-layout justify-space-around>
            <v-flex xl6 lg6 md8 xs12 sm10>
                <v-card>
                    <div id="chatWindow">
                        <div v-for="msg in msgs" :key="msg.messageID">
                            <div :title="formatDate(msg.timestamp)" class="chatBubble">
                                <span :style="{color:stringToColor(msg.username)}">
                                    {{msg.username}}
                                </span> &mdash;
                                <span class="black--text">
                                    {{msg.message}}
                                </span>
                            </div>
                            <br />
                        </div>
                    </div>
                        <div class="text-center" v-if="loading"><v-progress-circular indeterminate></v-progress-circular></div>
                        <v-text-field
                            append-icon="send"
                            @click:append="send()"
                            class="pb-3 pl-4 pr-5"
                            counter="70"
                            placeholder="Send a message"
                            v-model="message"
                            clearable
                            type="text"
                            v-on:keyup.enter="send()"
                        ></v-text-field>
                </v-card>
            </v-flex>
        </v-layout>
</template>

<script>
import { setTimeout } from 'timers'
import { mapGetters } from 'vuex'
import { hostname } from 'os'
export default {
    data: () => ({
        header: 'Main',
        ws: null,
        message: '',
        msgs: [],
        fetchError: null,
        loading: null,
    }),
    created () {
        this.fetchMessages()
        let host = location.host
        this.ws = new WebSocket('ws://' + host + '/ws')
        this.ws.addEventListener('message', (e) => {
            var msg = JSON.parse(e.data)
            let newMessage = {}
            newMessage.timestamp = msg.timestamp
            newMessage.username = msg.username
            newMessage.message = msg.message
            this.msgs.push(newMessage)
        })
    },
    computed: {
        username: function(){return this.$store.getters.getCurrentUser}
    },
    watch: {
        msgs (val) {
            setTimeout(() => {
                let chatWindow = document.getElementById('chatWindow')
                chatWindow.scrollTop = chatWindow.scrollHeight
            }, 50)
        }
    },

    methods: {
        send () {
            let moment = require('moment')
            let trimmed = this.message.trim()
            if (trimmed !== '') {
                this.ws.send(
                    JSON.stringify({
                        timestamp: moment(new Date()).unix(),
                        username: this.username,
                        message: trimmed
                    })
                )
                this.message = ''
            }
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
        },
        fetchMessages() {
            this.loading = true
            let host = location.host
            fetch(`http://${host}/api/messages`)
            .then(resp => {
                if (resp.ok) {
                    return resp.json()
                }
                else {
                    this.fetchError = true
                }
            })
            .then(data => {
                this.msgs = data
            })
            .finally(() => {
                this.loading = false
            })
        },
        formatDate(timestamp){
            let moment = require('moment')
            let datetime = moment.unix(timestamp).format("YYYY-MM-DD HH:mm:ss")
            return `${datetime.substring(0,10)} ${datetime.substring(11,19)}`
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
