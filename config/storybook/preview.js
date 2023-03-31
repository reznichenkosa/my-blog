import { addDecorator } from '@storybook/react'
import { StyleDecorator } from 'shared/config/storybook/style-decorator/StyleDecorator'
import { RouterDecorator } from 'shared/config/storybook/router-decorator/RouterDecorator'
import 'loki/configure-react'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

// addDecorator(ThemeDecorator('lights'))
addDecorator(StyleDecorator)
addDecorator(RouterDecorator)
