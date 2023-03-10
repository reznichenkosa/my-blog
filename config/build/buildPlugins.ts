import { BuildOptions } from "./types/config";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { WebpackPluginInstance, ProgressPlugin } from "webpack";

export function buildPlugins(options: BuildOptions): WebpackPluginInstance[] {
  const { paths } = options;
  return [
    new ProgressPlugin(),
    new HtmlWebpackPlugin({ template: paths.html }),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),
  ];
}
