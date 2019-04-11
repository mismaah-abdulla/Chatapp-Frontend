<template>
        <v-layout justify-space-around>
            <v-flex md6 xs6 offsetxs3>
                <v-card>
                    <div id="chatWindow" style="">
                        <div v-for="item in items" :key="item">
                            <div class="chatBubble">
                                <span v-if="item.username == 'Me'" class='primary--text'>
                                    {{item.username}}
                                </span>
                                <span v-else class='grey--text'>
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
    max-width: 100%;
    border-radius: 12px;
    font-family: 
}
#chatWindow {
    height:80vh;overflow: auto; padding:20px;
}
</style>
