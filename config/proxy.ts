/**
 * 在生产环境 代理是无法生效的，所以这里没有生产环境的配置
 * -------------------------------
 * The agent cannot take effect in the production environment
 * so there is no configuration of the production environment
 * For details, please see
 * https://pro.ant.design/docs/deploy
 */
export default {
  dev: {
    // localhost:8000/api/** -> https://preview.pro.ant.design/api/**
    // '/api/': {
    //   // 要代理的地址
    //   target: 'http://192.168.3.101:9000',
    //   // 配置了这个可以从 http 代理到 https
    //   // 依赖 origin 的功能可能需要这个，比如 cookie
    //   changeOrigin: true,
    // },
    '/api/': {
      // target: 'http://192.168.1.3:8086',
      target: 'http://1.14.130.7:8086',
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
    '/upload/': {
      // 要代理的地址
      target: 'http://192.168.3.101:9000',
      // 配置了这个可以从 http 代理到 https
      // 依赖 origin 的功能可能需要这个，比如 cookie
      changeOrigin: true,
    },
    '/ws': {
      // 要代理的地址
      target: 'http://192.168.3.101:9000',
      // 配置了这个可以从 http 代理到 https
      // 依赖 origin 的功能可能需要这个，比如 cookie
      ws: true,
      changeOrigin: true,
    },
  },
  test: {
    '/api/': {
      target: 'https://proapi.azurewebsites.net',
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
  },
  pre: {
    '/api/': {
      // target: 'http://192.168.1.3:8086',
      target: 'http://1.14.130.7:8086',
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
  },
};
