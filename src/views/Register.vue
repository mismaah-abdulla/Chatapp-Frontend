<template>
    <v-container>
        <v-layout justify-center wrap>
            <v-flex xs12 text-xs-center>
                <img src="/Logo_deep_orange.png" alt="Deep Orange Logo">
                <h1 class="display-2 font-weight-regular mb-3">
                Register
                </h1>
            </v-flex>
            <v-flex xs12 sm8 md4>
                <v-card class="pa-3">
                    <v-form ref="form" v-model="valid" lazy-validation>
                        <v-text-field color="secondary"
                        v-model="username"
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
                        @click="register()"
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
                    <v-alert dense dismissible :value="errorText" type="error">{{errorText}}</v-alert>
                    <v-alert dense :value="success" type="success">
                        <v-row align="center">
                            <v-col class="grow">Successfully registered</v-col>
                            <v-col class="shrink">
                                <v-btn text small href="/">Go to login</v-btn>
                            </v-col>
                        </v-row>
                    </v-alert>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        errorText: null,
        success: null,
        valid: false,
        password: '',
        username: '',
        nameRules: [
            v => !!v || 'Name is required',
            v => (v && v.length <= 20) || 'Name must be less than 20 characters'
        ],
        email: '',
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /\S+@\S+\.\S+/.test(v) || 'E-mail must be valid'
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
            }
        },
        reset () {
            this.$refs.form.reset()
            this.errorText = null
            this.success = null
        },
        resetValidation () {
            this.$refs.form.resetValidation()
        },
        register () {
            if(!this.valid)return
            this.errorText = null
            this.success = null
            let user = {
                Username: this.username,
                Password: this.password,
                Email: this.email
            }
            fetch('http://localhost:8000/api/register', {
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
img {
    width:64px;
    height:64px
}
</style>
