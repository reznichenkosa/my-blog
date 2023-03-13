import { addDecorator } from '@storybook/react'
import { ThemeDecorator } from '../../src/shared/config/storybook/theme-decorator/ThemeDecorator'
import { StyleDecorator } from '../../src/shared/config/storybook/style-decorator/StyleDecorator'
import { RouterDecorator } from 'shared/config/storybook/router-decorator/RouterDecorator'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

addDecorator(ThemeDecorator('light'))
addDecorator(StyleDecorator)
addDecorator(RouterDecorator)
