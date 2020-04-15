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
            let user = {
                Username: this.username,
                Password: this.password,
                Email: this.username
            }
            fetch('http://localhost:8000/api/login', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            .then(resp => {
                if (resp.ok) {
                    this.reset()
                    this.success = true
                } else {
                    return resp.text()
                }
            })
            .then(result => {
                this.errorText = result
            })
        }
    }
}
</script>

<style>

</style>
