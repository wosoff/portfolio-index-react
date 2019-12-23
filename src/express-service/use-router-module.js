function useRouterModule(app) {
  /**
   * @param {string} root
   */
  return function innerUseRouterModule(root, routerModule) {
    app.use(root, routerModule)
  }
}

module.exports = useRouterModule