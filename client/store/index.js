import Vue from 'vue' // eslint-disable-line import/no-extraneous-dependencies
import Vuex from 'vuex' // eslint-disable-line import/no-extraneous-dependencies
import feathersVuex from 'feathers-vuex'
import feathersClient from '../plugins/feathers'
import { initAuth } from 'feathers-vuex/lib/utils'

const { service, auth } = feathersVuex(feathersClient, { idField: '_id' })

Vue.use(Vuex)

const store = new Vuex.Store({
  plugins: [
    service('/products'),
    service('/users'),
    auth({ userService: '/users' }),
    service('authManagement')
  ],
  state: {},
  actions: {
    nuxtServerInit ({ commit }, { req }) {
      return initAuth({
        commit,
        req,
        moduleName: 'auth',
        cookieName: 'feathers-jwt'
      })
    }
  }
})

export default () => store
