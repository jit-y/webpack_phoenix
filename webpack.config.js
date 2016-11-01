const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: [
    "./web/static/css/app.sass",
    "./web/static/js/app.js"
  ],
  output: {
    path: "./priv/static",
    filename: "js/app.js"
  },
  resolve: {
    modulesDirectories: [
      "node_modules",
      __dirname + "/web/static/js"
    ],
    alias: {
      phoenix: __dirname + '/deps/phoenix/web/static/js/phoenix.js'
    }
  },
  module: {
    loaders:
    [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel",
        query: {
          presets: ["es2015"]
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },
      {
        test: /\.sass$/,
        loader: ExtractTextPlugin.extract("style-loader", "css!sass?includePaths[]=" + __dirname + '/node_modules')
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/font-woff"
      },
      {
        test: /\.png$/,
        loader: "url-loader?linit=10000"
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=image/svg+xml'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("css/app.css"),
    new CopyWebpackPlugin([
      {
        from: "./web/static/assets"
      },
      {
        from: "./deps/phoenix_html/web/static/js/phoenix_html.js",
        to: "js/phoenix_html.js"
      }
    ])
  ]
};
