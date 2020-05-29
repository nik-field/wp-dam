const autoprefixer = require("autoprefixer");

var path = require("path");

module.exports = [
  {
    entry: ["./src/scss/webapp.scss", "./src/js/webapp.js"],
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
                name: "./dist/css/style.css",
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
    entry: ["./src/js/admin-frontend-addasset.js", "./src/js/admin-customizer.js", "./src/scss/admin.scss"],
    output: {
      path: path.resolve(__dirname, "dist/scripts"),
      filename: "[name]-min.js",
    },
    module: {
      rules: [
        {
          test: /^admin.*scss$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "./dist/css/admin.css",
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
        }
        {
          test: /^admin.*js$/,
          loader: "babel-loader",
          query: {
            presets: ["@babel/preset-env"],
          },
        }
      ]
    }
  },
];
