const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(path.join(__dirname, "./../../../tsconfig.json"), [
  /* mapped paths to share */
]);

module.exports = {
  output: {
    uniqueName: "app3",
    publicPath: "auto",
    scriptType: "text/javascript",
  },
  optimization: {
    runtimeChunk: false,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
    alias: {
      ...sharedMappings.getAliases(),
    },
  },
  experiments: {
    outputModule: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "app3",
      filename: "remoteEntry.js",
      exposes: {
        "./App3Index": "./projects/apps/banner/src/loadApp.ts",
        "./App3Module": "./projects/apps/banner/src/app/app.module.ts",
      },
      shared: share({
        "@angular/core": {
          singleton: true,
          // strictVersion: true,
          requiredVersion: "auto",
          eager: true,
        },
        "@angular/common": {
          singleton: true,
          // strictVersion: true,
          requiredVersion: "auto",
          eager: true,
        },
        "@angular/common/http": {
          singleton: true,
          // strictVersion: true,
          requiredVersion: "auto",
          eager: true,
        },
        "@angular/router": {
          singleton: true,
          // strictVersion: true,
          requiredVersion: "auto",
          eager: true,
        },
        ...sharedMappings.getDescriptors(),
      }),
    }),
    sharedMappings.getPlugin(),
  ],
};
