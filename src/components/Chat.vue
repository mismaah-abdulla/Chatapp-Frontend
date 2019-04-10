<template>
        <v-layout justify-space-around>
            <v-flex md6>
                <v-card>
                    <!-- <v-list dense class="pa-0" v-for="a in [,,,,]" two-line> -->
                        <v-list two-line dense>
                            <template v-for="(item, index) in items">
                                <v-subheader
                                class="primary--text headline"
                                v-if="item.header"
                                :key="item.header"
                                >
                                {{ item.header }}
                                </v-subheader>

                                <v-divider
                                v-else-if="item.divider"
                                :key="index"
                                ></v-divider>

                                <v-list-tile
                                
                                v-else
                                :key="item.title"
                                avatar
                                @click=""
                                >

                                <v-list-tile-content>
                                    <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
                                </v-list-tile-content>
                                </v-list-tile>
                            </template>
                            </v-list>
                    <!-- </v-list> -->
                </v-card>
            </v-flex>
        </v-layout>
</template>

<script>
export default {
    data () {
        return {
            items: [
                { header: 'Main' },
                {
                    title: 'Brunch this weekend?',
                    subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
                },
                { divider: true, inset: true },
                {
                    title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
                    subtitle: "<span class='text--primary'>Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend."
                },
                { divider: true, inset: true },
                {
                    title: 'Oui oui',
                    subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?"
                }
            ]
        }
    }
}
</script>

<style>

</style>
