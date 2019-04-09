<template>
  <v-container>
    <HelloWorld />
    <Login />
  </v-container>
</template>

<script>
import HelloWorld from '../components/HelloWorld'
import Login from '../components/Login'

export default {
  components: {
    HelloWorld,
    Login
  }
}
</script>
