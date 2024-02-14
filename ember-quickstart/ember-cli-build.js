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
            shared: ['react', 'react-dom'],
          }),
        ],
      },
    },
  });

  const { Webpack } = require('@embroider/webpack');
  return require('@embroider/compat').compatBuild(app, Webpack,{
    staticAddonTestSupportTrees: true,
    staticAddonTrees: true,
    staticHelpers: true,
    staticModifiers: true,
    staticComponents: true,
    // staticEmberSource: true,
    // splitAtRoutes: ['route.name'], // can also be a RegExp
    packagerOptions: {
      webpackConfig: {
        plugins: [
          new ModuleFederationPlugin({
            name: 'ember-host-app',
            remotes: {
              remoteApp: 'remoteApp@http://localhost:5001/assets/remoteEntry.js',
            },
            shared: ['react', 'react-dom'],
          }),
        ],
      },
    },
  });
};
