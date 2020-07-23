import { configure, addDecorator } from '@storybook/vue'
import { configureViewport, INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { action } from '@storybook/addon-actions'
import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuex)
Vue.use(Vuetify)

Vue.component('nuxt-link', {
  props: ['to'],
  methods: {
    log() {
      action('link target')(this.to)
    },
  },
  template: '<a href="#" @click.prevent="log()"><slot>NuxtLink</slot></a>',
})

configureViewport({
  viewports: {
    ...INITIAL_VIEWPORTS,
  },
})

addDecorator(() => ({
  vuetify: new Vuetify({
    preset: {
      icons: {
        iconfont: 'md',
      },
      theme: {
        light: true,
        themes: {
          light: {
            primary: '#f9891b',
            secondary: '#3b98c9',
            info: '#26a69a',
            warning: '#ffc107',
            error: '#dd2c00',
            success: '#00e676',
          },
        },
      },
    },
  }),
  template: '<v-app><story/></v-app>',
}))

function loadStories() {
  const req = require.context('../components', true, /\.stories\.js$/)
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module)
