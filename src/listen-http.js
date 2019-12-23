const HTTP_OPTIONS = require('./var/http-options')

/**
 * @param {import('express').Application} app
 * @returns {() => void}
 */
function listenHTTP(app) {
  return () => {
    const {port, host, protocol, localAddress} = HTTP_OPTIONS

    app.listen(port, host, () => {
      console.log(`Listening on protocol: [${protocol}] - host: [${host}] ` +
       `- port: [${port}] - localAddress: [${localAddress}]`)
    })
  }
}

module.exports = listenHTTP