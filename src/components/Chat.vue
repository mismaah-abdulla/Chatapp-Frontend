<template>
        <v-layout justify-space-around>
            <v-flex md6>
                <v-card>
                        <v-list dense>
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
                </v-card>
            </v-flex>
        </v-layout>
</template>

<script>
export default {
    data () {
        return {
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
            ]
        }
    }
}
</script>

<style>

</style>
