<template>
    <v-container pa-0>
        <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
                <v-card class="elevation-4">
                    <v-toolbar height="40px" dark color="primary">
                        <v-toolbar-title class="pa-0">Login</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text class="pb-0">
                        <v-form ref="form">
                        <!-- icon is person -->
                        <v-text-field v-model="username" color="secondary" prepend-icon="pregnant_woman" name="login" label="Username or Email" type="text"></v-text-field>
                        <v-text-field v-model="password" color="secondary" class="pt-0" id="password" prepend-icon="lock" name="password" label="Password" type="password"></v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" @click="login()">Login</v-btn>
                    </v-card-actions>
                    <v-alert dense dismissible :value="errorText" type="error">{{errorText}}</v-alert>
                    <v-alert dense :value="success" type="success">
                        <v-row align="center">
                            <v-col class="grow">Successfully logged in.</v-col>
                        </v-row>
                    </v-alert>
                </v-card>
            </v-flex>
        </v-layout>
        <v-layout text-xs-center wrap pt-3 pb-0>
            <v-flex pb-0>
                <p class="subheading font-weight-regular">
                    Don't have an account?
                    <v-btn flat outline color="primary" to="/register">Register</v-btn>
                </p>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        success: null,
        errorText: null,
        password: '',
        username: '',
    }),
    methods: {
        reset () {
            this.$refs.form.reset()
            this.errorText = null
            this.success = null
        },
        login () {
            this.errorText = null
            this.success = null
            this.$store.dispatch("login", {
                username: this.username,
                password: this.password,
                email: this.email
            })
            .then(() => {
                this.$router.push('/chats')
            })
            .catch(error => {
                this.errorText = error
            })
        }
    }
}
</script>

<style>

</style>
