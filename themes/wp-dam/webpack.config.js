const autoprefixer = require("autoprefixer");
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

var path = require("path");

module.exports = [
  {
    entry: ["./src/scss/webapp.scss", "./src/js/webapp.js"],
    output: {
      path: path.resolve(__dirname, "dist/scripts"),
      filename: "script.js",
    },
    watchOptions: {
      ignored: /node_modules/,
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "../css/style.css",
              },
            },
            { loader: "extract-loader" },
            { loader: "css-loader" },
            {
              loader: "postcss-loader",
              options: {
                plugins: () => [autoprefixer()],
              },
            },
            {
              loader: "sass-loader",
              options: {
                // Prefer Dart Sass
                implementation: require("sass"),

                // See https://github.com/webpack-contrib/sass-loader/issues/804
                webpackImporter: false,
                sassOptions: {
                  includePaths: ["./node_modules"],
                },
              },
            },
          ],
        },
        {
          test: /\.js$/,
          loader: "babel-loader",
          query: {
            presets: ["@babel/preset-env"],
          },
        },
      ],
    },
  },
  {
    entry: {
      "frontend-addasset": "./src/js/admin-frontend-addasset.js",
      customizer: "./src/js/admin-customizer.js",
    },
    output: {
      path: path.resolve(__dirname, "dist/scripts"),
      filename: "[name]-min.js",
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "../css/admin-customizer.css",
              },
            },
            { loader: "extract-loader" },
            { loader: "css-loader" },
            {
              loader: "postcss-loader",
              options: {
                plugins: () => [autoprefixer()],
              },
            },
            {
              loader: "sass-loader",
              options: {
                // Prefer Dart Sass
                implementation: require("sass"),

                // See https://github.com/webpack-contrib/sass-loader/issues/804
                webpackImporter: false,
                sassOptions: {
                  includePaths: ["./node_modules"],
                },
              },
            },
          ],
        },
        {
          test: /\.js$/,
          loader: "babel-loader",
          query: {
            presets: ["@babel/preset-env"],
          },
        },
      ],
    },
    // plugins: [
    //   new BrowserSyncPlugin({
    //     proxy: 'http://192.168.99.103',
    //     files: [
    //       "./../",
    //       "./../api/**/*.php",
    //       "./../api/*.php",
    //       "./",
    //       "!./node_modules",
    //       "!./yarn-error.log",
    //       "!./package.json",
    //       "!./style.css.map",
    //       "!./app.js.map",
    //     ],
    //     reloadDelay: 0,
    //   }),
    // ],
  },
];
