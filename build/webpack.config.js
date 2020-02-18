
const path = require("path");
const webpack = require("webpack");

const HtmlWebpackPlugin = require('html-webpack-plugin');

function resolve (dir) {
  return path.join(__dirname, '..', dir);
}

module.exports = (env, options) => {
  const config = {
    entry: {
      vendor: ['react', 'react-dom'],
      index: [resolve('/src/client/index.js')]
      //"./src/client/index.js",
    },
    //mode: "development",
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          loader: "babel-loader",
          options: { presets: ["@babel/env"] }
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        },
        {
          test: /\.(woff|woff2|eot|ttf|svg)$/,
          loader: 'url-loader?limit=1000'
        },
        {
          test: /\.(png|jpg|gif)$/,
          loader: 'file-loader?name=images/[name].[ext]'
        }
      ]
    },
    //resolve: { extensions: ["*", ".js", ".jsx"] },
    output: {
      path: resolve("dist"),
      publicPath: "/",
      filename: "[name].[hash].bundle.js"
    },
    // devServer: {
    //   contentBase: path.join(__dirname, "public/"),
    //   port: 3000,
    //   publicPath: "http://localhost:3000/dist/",
    //   hotOnly: true
    // },
    // plugins: [new webpack.HotModuleReplacementPlugin()]
  }

  if (options.mode === 'development') {
    config.devServer = {
      historyApiFallback: true,
      port: 3000,
      open: true,
      hot: true,
      compress: true,
      proxy: {
        '/api/**': {
          target: 'http://[::1]:8080',
          secure: false,
          logLevel: 'debug'
        }
      }
    };

    config.devtool = 'inline-source-map';
    config.output.hotUpdateChunkFilename = '.hot/[id].[hash].hot-update.js';
    config.output.hotUpdateMainFilename = '.hot/[hash].hot-update.json';
    config.plugins = [
      new webpack.HotModuleReplacementPlugin(),
      // new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        inject: true,
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeAttributeQuotes: true
        },
        template: resolve('/public/index.html'),
        //favicon: resolve('/public/lotte_logo.png')
      })
    ];
  } else {
    config.output.chunkFilename = '[name].[hash].chunk.js';
    config.optimization = {
      splitChunks: {
        chunks: 'all'
      }
    };
  }

  return config;
};