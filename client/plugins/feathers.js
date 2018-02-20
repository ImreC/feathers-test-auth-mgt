import feathers from '@feathersjs/client'
import io from 'socket.io-client'
import { CookieStorage } from 'cookie-storage'
import authManagementService from 'feathers-authentication-management'

const socket = io(process.env.baseUrl)


const feathersClient = feathers()
  .configure(feathers.socketio(socket))
  .configure(feathers.authentication({ storage: new CookieStorage() }))
  .configure(authManagementService())

export default feathersClient
