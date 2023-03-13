import { type Story } from '@storybook/react'
import 'app/styles/index.scss'
import { type Theme } from 'shared/contexts/theme-context'

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => {
  return (
    <div className={`app ${theme}`}>
      <StoryComponent />
    </div>
  )
}
