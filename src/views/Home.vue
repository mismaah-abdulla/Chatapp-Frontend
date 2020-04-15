<template>
  <v-container>
    <Welcome />
    <Login v-if="!this.$store.getters.isLoggedIn" />
  </v-container>
</template>

<script>
import Welcome from '../components/Welcome'
import Login from '../components/Login'

export default {
    components: {
        Welcome,
        Login
    }
}
</script>
