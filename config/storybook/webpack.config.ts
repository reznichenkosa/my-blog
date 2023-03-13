import { type BuildPaths } from './../build/types/config'
import { type Configuration } from 'webpack'
import path from 'path'
import { buildCssLoader } from '../build/loaders/buildCssLoader'
import { buildSvgLoader } from '../build/loaders/buildSvgLoader'

export default ({ config }: { config: Configuration }): Configuration => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  }
  config.resolve?.modules?.push(paths.src)
  config.resolve?.extensions?.push('.ts', '.tsx')

  if (config.module?.rules) {
    config.module.rules = config.module?.rules?.map((rule) => {
      // eslint-disable-next-line @typescript-eslint/prefer-includes
      if (rule !== '...' && /svg/.test(rule.test as string)) {
        return { ...rule, exclude: /\.svg$/i }
      }
      return rule
    })
  }

  config.module?.rules?.push(buildCssLoader(true))
  config.module?.rules?.push(buildSvgLoader())

  return config
}
