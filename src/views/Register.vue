<template>
    <v-container>
        <v-layout justify-center wrap>
            <v-flex xs12 text-xs-center>
                <img src="../../Logo_deep_orange.png" alt="Deep Orange Logo">
                <h1 class="display-2 font-weight-regular mb-3">
                Register
                </h1>
            </v-flex>
            <v-flex xs12 sm8 md4>
                <v-card class="pa-3">
                    <v-form ref="form" v-model="valid" lazy-validation>
                        <v-text-field color="secondary"
                        v-model="name"
                        :counter="10"
                        :rules="nameRules"
                        label="Username"
                        required
                        ></v-text-field>

                        <v-text-field color="secondary"
                        v-model="email"
                        :rules="emailRules"
                        label="E-mail"
                        required
                        ></v-text-field>

                        <v-text-field color="secondary"
                        v-model="password"
                        :rules="passwordRules"
                        :type="'password'"
                        label="Password"
                        required
                        ></v-text-field>

                        <v-checkbox color="secondary"
                        v-model="checkbox"
                        :rules="[v => !!v || 'You must agree to continue!']"
                        label="I agree to the terms and conditions"
                        required
                        ></v-checkbox>

                        <v-btn
                        :disabled="!valid"
                        color="primary"
                        @click="validate"
                        >
                        Submit
                        </v-btn>

                        <v-btn flat outline
                        color="primary"
                        @click="reset"
                        >
                        Clear
                        </v-btn>
                    </v-form>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        valid: true,
        name: '',
        nameRules: [
            v => !!v || 'Name is required',
            v => (v && v.length <= 10) || 'Name must be less than 10 characters'
        ],
        email: '',
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+/.test(v) || 'E-mail must be valid'
        ],
        passwordRules: [
            v => !!v || 'Password is required',
            v => (!!v && v.length >= 6) || 'Password must be greater than 6 characters'
        ],
        select: null,
        checkbox: false
    }),

    methods: {
        validate () {
            if (this.$refs.form.validate()) {
                this.snackbar = true
            }
        },
        reset () {
            this.$refs.form.reset()
        },
        resetValidation () {
            this.$refs.form.resetValidation()
        }
    }
}
</script>

<style>
img {
    width:64px;
    height:64px
}
</style>
