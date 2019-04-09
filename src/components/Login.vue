<template>
    <v-container pa-0>
        <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
                <v-card class="elevation-6">
                    <v-toolbar dark color="primary">
                        <v-toolbar-title>Login</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-form>
                        <v-text-field prepend-icon="person" name="login" label="Login" type="text"></v-text-field>
                        <v-text-field id="password" prepend-icon="lock" name="password" label="Password" type="password"></v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary">Login</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
        <v-layout text-xs-center wrap pt-3>
            <v-flex>
                <p class="subheading font-weight-regular">
                    Don't have an account?
                    <v-btn flat outline color="primary" href="#/Register">Register</v-btn>
                </p>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
}
</script>

<style>

</style>
