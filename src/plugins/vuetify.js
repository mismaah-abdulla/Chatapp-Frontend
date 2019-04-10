import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify, {
    iconfont: 'md',
    theme: {
        primary: colors.deepOrange,
        secondary: colors.lightBlue,
        accent: colors.grey.lighten1,
        error: '#b71c1c',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107'
    }
})
