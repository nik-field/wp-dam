const autoprefixer = require("autoprefixer");
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var path = require("path");

module.exports = [
  {
    entry: [path.resolve(__dirname, "src/scss/webapp.scss"), path.resolve(__dirname, "src/js/webapp.js")],
    output: {
      path: path.resolve(__dirname, "dist/scripts"),
      filename: "script.js",
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
            {
              loader: "extract-loader",
              options: {
                sourceMap: true
              }
            },
            {
              loader: "css-loader",
              options: {
                sourceMap: true
              }
            },
            {
              loader: "postcss-loader",
              options: {
                plugins: () => [autoprefixer()],
              },
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: true,
                sassOptions: {
                  includePaths: ['./node_modules']
                },
                // Prefer Dart Sass
                implementation: require('sass'),

                // See https://github.com/webpack-contrib/sass-loader/issues/804
                webpackImporter: false,
              },
            },
          ],
        },
        {
          test: /\.(woff|woff2|eot|svg|ttf|otf)$/,
          loader: "file-loader",
          options: {
            outputPath: '../fonts',
            name: '[name].[ext]',
          },
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
      "frontend-addasset": path.resolve(__dirname, "src/js/admin-frontend-addasset.js"),
      customizer: path.resolve(__dirname, "src/js/admin-customizer.js"),
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
                name: "../css/[name].css",
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
                // webpackImporter: false,
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
    plugins: [
      new BrowserSyncPlugin({
        open: false,
        proxy: 'http://dam.test',
        files: [
          "./",
          "!./../",
          "!./webpack.config.js",
          "!./package.json",
          "!./package-lock.json",
          "!./node_modules",
        ],
        reloadDelay: 0,
      }),
    ],
  },
];
