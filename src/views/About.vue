<template>
    <v-container>
        <v-layout text-xs-center wrap justify-center>
            <v-flex xs12>
                <img src="/Logo_deep_orange.png" alt="Deep Orange Logo">
                <h1 class="display-2 font-weight-regular mb-3">
                About
                </h1>
            </v-flex>
            <v-flex shrink>
                <v-card class="elevation-4">
                    <div pa-2 class="v-card__text subheading font-weight-regular">
                    {{ app.name }} is a web chat application made with
                    Vue.js and Vuetify
                    by Mismaah Abdulla<br />
                    <a href="https://twitter.com/MismaahAbdulla">Twitter</a> /
                    <a href="https://github.com/mismaah-abdulla">GitHub</a>
                    
                    </div>
                </v-card>
          </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import data from '@/data.js'

export default {
    data: () => ({
        app: data
    })
}
</script>

<style>
img {
    width:64px;
    height:64px
}
</style>
