import { type Story } from '@storybook/react'
import { ThemeProvider } from 'app/providers/theme-provider'
import 'app/styles/index.scss'
import { type Theme } from 'shared/contexts/theme-context'

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => {
  return (
    <ThemeProvider initialTheme={theme}>
      <StoryComponent />
    </ThemeProvider>
  )
}
