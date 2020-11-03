const {createReactRaguServerConfig} = require('ragu-react-server-adapter/config');

module.exports = createReactRaguServerConfig({
  compiler: {
    assetsPrefix: 'http://localhost:3100/component-assets/'
  },
  components: {
    namePrefix: 'hello-mf_'
  },
  server: {
      port: 3100
  }
});