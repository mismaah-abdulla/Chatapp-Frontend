<template>
    <v-container>
        <Chat />
        <ChatNav />
    </v-container>
</template>

<script>
import Chat from '../components/Chat'
import ChatNav from '../components/ChatNav'

export default {
    components: {
        Chat,
        ChatNav
    }
}
</script>