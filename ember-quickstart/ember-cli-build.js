'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    // Add options here
    autoImport: {
      webpack: {
        plugins: [
          new ModuleFederationPlugin({
            name: 'ember-host-app',
            remotes: {
              remoteApp: 'http://localhost:5001/assets/remoteEntry.js',
            },
            // shared: ['react', 'react-dom'],
          }),
        ],
      },
    },
  });

  return app.toTree();
};
