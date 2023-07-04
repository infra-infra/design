const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const isDevelopment = process.env.NODE_ENV === "development";
module.exports = {
  entry: path.resolve(__dirname, "../site/index.tsx"),
  cache: {
    type: "filesystem",
    buildDependencies: {
      config: [__filename],
    },
  },
  output: {
    clean: true,
    path: path.resolve(__dirname, "../dist"),
    filename: "static/js/[contenthash:8].chunk.js",
  },
  module: {
    rules: [
      {
        test: /\.tsx|ts|js$/,
        exclude: /(node_modules|\.png|svg|jpe?g$)/,
        use: [
          {
            loader: "babel-loader",
            options: {
              cacheDirectory: true,
            },
          },
        ],
      },
      {
        test: /\.(css)$/,
        use: [
          {
            loader: isDevelopment
              ? "style-loader"
              : MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 3,
              modules: false,
              sourceMap: true,
            },
          },
          "postcss-loader",
        ],
      },
      {
        test: /\.scss$/,
        exclude: /\.module\.(scss)$/,
        use: ["style-loader",           {
          loader: "css-loader",
          options: {
            importLoaders: 3,
            modules: false,
            sourceMap: true,
          },
        }, "sass-loader"],
      },
      {
        test: /\.md$/,
        exclude: /\.(tsx|ts)$/,
        use: [
            "babel-loader",
            "@oc/doc-loader"
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../site/public/index.html"),
      favicon: path.resolve(__dirname,'../site/public/favicon.ico')
    }),
  ].filter(Boolean),
  resolve: {
    plugins: [
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, "../tsconfig.json"),
      }),
    ],
    extensions: [".tsx", ".ts", ".js"],
  },
};
