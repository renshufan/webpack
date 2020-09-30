const path = require("path")
module.exports = {
  entry: __dirname + "/app/main.js",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },


  module: {//在配置文件里添加JSON loader
    rules: [
      {
        test: /\.json$/,
        use: "json-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: {
    alias: {
      sheet: path.resolve(__dirname, 'app/style.css'),
    }
  },
  devServer: {
    open: true
  },
  watch: true,
  watchOptions: {
    ignored: /node_modules/
  }
}