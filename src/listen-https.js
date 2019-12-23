const {readFileSync} = require('fs')
const https = require('https')
const {resolve} = require('path')
const HTTPS_OPTIONS = require('./var/http-s-options')
/**
 * @param {import('express').Application} app
 * @returns {() => void}
 */
function listenHTTPS(app) {
  return function innerListenHTTPS() {
    const options = {
      key: readFileSync(
        resolve(__dirname, 'var', 'test', 'fixtures', 'keys', 'agent2-key.pem')
      ),
      cert: readFileSync(
        resolve(__dirname, 'var', 'test', 'fixtures', 'keys', 'agent2-cert.pem')
      )
    };

    const {port, host, protocol, localAddress} = HTTPS_OPTIONS

    https.createServer(options, app).listen(port, host, () => {
      console.log(`Listening on protocol: [${protocol}] - host: [${host}] ` +
       `- port: [${port}] - localAddress: [${localAddress}]`)
    })
  }
}

module.exports = listenHTTPS