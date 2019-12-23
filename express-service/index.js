const express = require('express')
const createRouterModule = require('./create-router-module')
const outerListenHTTP = require('./listen-http')
const outerListenHTTPS = require('./listen-https')
const mountMiddleware = require('./mount-middleware')
const outerHandleRoutes = require('./handle-routes')
const outerUseRouterModule = require('./use-router-module')

const ExpressService = (() => {
  const app = express()

  mountMiddleware(app)
  const listenHTTP = outerListenHTTP(app)
  const listenHTTPS = outerListenHTTPS(app)
  const handleRoutes = outerHandleRoutes(app)
  const useRouterModule = outerUseRouterModule(app)

  return {
    createRouterModule,
    listenHTTP,
    listenHTTPS,
    handleRoutes,
    useRouterModule,
  }
})()

module.exports = ExpressService