const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require('path');

module.exports = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },
  mode: "development",
  plugins: [
    new CopyWebpackPlugin(['index.html', '../wasm_invoice/target/wasm32-unknown-unknown/debug/wasm_invoice_pdf.wasm'])
  ],
};
