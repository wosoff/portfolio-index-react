/**
 * 
 * @param {import('express').Application | import('express').Router} app 
 */
function handleRoutes(app) {
  /**
   * @param {{method: string, path: string, middleware:function[]}[]} routes
   * @returns {import('express').Application | import('express').Router} app | router created by express.Router()
   */
  return function innerHandleRoutes(routes) {
    routes.forEach(function mountRoutes(route) {
      const {method, path, middleware} = route
      
      if (method === 'get') {
        app.get(path, middleware)
        return
      }

      if (method === 'post') {
        app.post(path, middleware)
        return
      }
    });

    return app
  }
}

module.exports = handleRoutes