import { type BuildOptions } from './types/config'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import {
  type WebpackPluginInstance,
  ProgressPlugin,
  DefinePlugin,
  HotModuleReplacementPlugin
} from 'webpack'

export function buildPlugins (options: BuildOptions): WebpackPluginInstance[] {
  const { paths, isDev } = options
  const hotReloadPlugins = isDev
    ? [new HotModuleReplacementPlugin(), new ReactRefreshWebpackPlugin()]
    : []

  return [
    new ProgressPlugin(),
    new HtmlWebpackPlugin({ template: paths.html }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }),
    new DefinePlugin({
      IS_DEV: JSON.stringify(isDev)
    }),
    ...hotReloadPlugins
  ]
}
