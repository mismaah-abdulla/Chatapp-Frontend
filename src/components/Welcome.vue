<template>
    <v-container pa-0>
        <v-layout text-xs-center wrap pa-0 ma-0>
            <v-flex xs12 pa-0 ma-0>
                <img src="/Logo_deep_orange.png" alt="Deep Orange Logo">
            </v-flex>
            <v-flex mb-4>
                <h1 class="display-2 font-weight-regular mb-3">
                Welcome to <span class="primary--text">{{ app.name }}</span>
                </h1>
                <p class="subheading font-weight-regular">
                {{ app.description }}
                </p>
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
