import { BuildOptions } from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { RuleSetRule } from "webpack";

export function buildLoaders({ isDev }: BuildOptions): RuleSetRule[] {
  const typescriptLoader: RuleSetRule = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const cssLoader: RuleSetRule = {
    test: /\.(sc|sa|c)ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resPath: string) => resPath.includes(".module."),
            localIdentName: isDev ? "[path][name]__[local]--[hash:base64:5]" : "[hash:base64:8]",
          },
        },
      },
      // Compiles Sass to CSS
      "sass-loader",
    ],
  };

  const svgLoader: RuleSetRule = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    resourceQuery: { not: [/url/] }, // exclude react component if *.svg?url
    use: ["@svgr/webpack"],
  };

  const svgLoaderUrl: RuleSetRule = {
    test: /\.svg$/i,
    type: "asset",
    resourceQuery: /url/, // *.svg?url
  };

  const fontLoader: RuleSetRule = {
    test: /\.(woff|woff2|eot|ttf|otf)$/i,
    type: "asset/resource",
    generator: {
      filename: "assets/fonts/[name].[ext]",
    },
  };

  const imgLoader: RuleSetRule = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: "asset/resource",
    generator: {
      filename: "[hash].[ext]",
    },
  };

  return [svgLoader, svgLoaderUrl, fontLoader, imgLoader, typescriptLoader, cssLoader];
}
